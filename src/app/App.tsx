import React from 'react';
import './App.css';
import { TodolistsList } from '../features/TodolistsList/TodolistsList';
import LinearProgress from '@material-ui/core/LinearProgress';

// You can learn about the difference by reading this guide on minimizing bundle size.
// https://mui.com/guides/minimizing-bundle-size/
// import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Menu } from '@mui/icons-material';
import { ErrorSnackbars } from '../components/ErrorSnackbar/ErrorSnackbar';
import { useSelector } from 'react-redux';
import { RequestStatusType } from './app-reducer';
import { AppRootStateType } from './store';

function App() {
  const status = useSelector<AppRootStateType, RequestStatusType>(
    (state) => state.app.status
  );
  return (
    <div className="App">
      <ErrorSnackbars />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        {status === 'loading' && <LinearProgress />}
      </AppBar>
      <Container fixed>
        <TodolistsList />
      </Container>
    </div>
  );
}

export default App;
