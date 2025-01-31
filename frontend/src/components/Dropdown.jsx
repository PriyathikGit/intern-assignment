import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks, selectStock } from '../feature/StockSlice';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const StockDropdown = () => {
  const dispatch = useDispatch();
  const { stocks, selectedStock } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);
  
  const handleChange = (event) => {
    dispatch(selectStock(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel className=''>Select Stock</InputLabel>
      <Select value={selectedStock || ''} onChange={handleChange}>
        {stocks.map((stock) => (
          // passing the value as stock id
          <MenuItem key={stock.id} value={stock.id}>
            {stock.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StockDropdown;
