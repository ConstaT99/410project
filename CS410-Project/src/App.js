import './App.css';
import {
  Box, CardMedia, Divider, TextField, Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet';

function App() {
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
            Output sample
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
