import './App.css';
import {
  Box, Button, CardMedia, Divider, TextField, Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('Analysis Result');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const fetchResult = async () => {
    const result = await fetch('http://localhost:5000/sentiment_score', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: input,
    });

    const resultInJson = await result.json();
    if (await resultInJson === 1) {
      setOutput("It's a positive text");
    } else if (await resultInJson === -1) {
      setOutput("It's a negative text");
    } else {
      setOutput("It's a neutral text");
    }
  };

  return (
    <Box>
      <Helmet>
        <style>{'body { background-color: #b3eff2; }'}</style>
      </Helmet>
      <CardMedia component="img" src="/banner.jpg" sx={{ maxHeight: '600px' }} />
      <Typography variant="h4" sx={{ my: 3, mx: 30 }}>
        <strong>How to quickly know whether a text is positive or not</strong>
      </Typography>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <TextField
          onChange={handleInput}
          multiline
          fullWidth
          label="Please enter text you want to analyze"
          sx={{
            width: '40%',
            mx: 2,
            '& .MuiInputBase-root': { minHeight: 400 },
            bgcolor: 'background.paper',
            '& fieldset': { border: 'none' },
          }}
        />
        <Box sx={{ width: '40%', mx: 2, bgcolor: '#f0eded' }}>
          <Typography sx={{ m: 2 }}>
            {output}
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
      }}
      >
        <Button onClick={fetchResult} variant="contained" sx={{ m: 4 }}>Submit</Button>
      </Box>
    </Box>
  );
}

export default App;