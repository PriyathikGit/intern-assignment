import React, { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const DurationSelector = ({ duration,onDurationChange }) => {
  const [selectedDuration, setSelectedDuration] = useState(duration); // current state is 1year, so it will highlight as primary
  const { stocks, selectedStock } = useSelector((state) => state.stocks)
  console.log(duration);
  
  const durations = ['6m', '1y', '5y'];

  const availabeDuration = useMemo(() => {
    // find the stock which is selected and return its available time
    const stock = stocks.find((s) => s.id === selectedStock)
    return stock?.available || "";
  }, [stocks, selectedStock])

  console.log(availabeDuration);


  const handleClick = (duration) => {
    setSelectedDuration(duration);
    onDurationChange(duration);
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" className=''>
      {durations.map((stduration) => (
        <Button
          key={stduration}
          onClick={() => handleClick(stduration)}
          color={selectedDuration === stduration ? 'primary' : 'secondary'}
          disabled={!availabeDuration.includes(stduration)} // if the duration array dont include the current stock duration disable it
        >
          {stduration}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default DurationSelector;