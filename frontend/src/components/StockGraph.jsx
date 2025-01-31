import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockData } from '../feature/StockSlice';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockGraph = ({ duration }) => {
  const dispatch = useDispatch();
  // current state
  const { selectedStock, stockData } = useSelector((state) => state.stocks);
  console.log(stockData);
  console.log(selectedStock);

  useEffect(() => {
    if (selectedStock) {
      // this send the duration and selected stock from dropdown and call the api using redux
      dispatch(fetchStockData({ id: selectedStock, duration }));
    }
  }, [dispatch, selectedStock, duration]);

  const formattedLabels = stockData?.length
    ? stockData.map((entry) =>
      new Date(entry.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    )
    : [];

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Stock Price',
        data: stockData?.length ? stockData.map((entry) => entry.price) : [],
        borderColor: '#2196f3',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default StockGraph;