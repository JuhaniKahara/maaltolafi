import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FrontPage from './FrontPage';
import NameGenerator from './NameGenerator';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Etusivu" />
          <Tab label="Blogi" />
          <Tab label="Nimigeneraattori" />
          <Tab label="Soundboard" />
        </Tabs>
      </Box>
      {value === 0 && <FrontPage></FrontPage>}
      {value === 1 && <FrontPage></FrontPage>}
      {value === 2 && <NameGenerator></NameGenerator>}
      {value === 3 && <FrontPage></FrontPage>}


    </div>
  );
}

export default App;
