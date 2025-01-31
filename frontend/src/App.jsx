import React, { useState } from 'react';
import StockDropdown from './components/Dropdown.jsx';
import DurationSelector from './components/DurationSelector';
import StockGraph from './components/StockGraph';
import { Container, Box } from '@mui/material';

function App() {
  const [duration, setDuration] = useState('1y');


  
  return (
    <Container maxWidth="lg" >
      <Box my={6}>
        <StockDropdown />
      </Box>
      <Box my={4}>
        <DurationSelector duration={duration} onDurationChange={setDuration} />
      </Box>
      <Box my={4}>
        <StockGraph duration={duration} />
      </Box>
    </Container>
  );
}

export default App;