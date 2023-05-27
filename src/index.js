import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { persist, store } from './Page/Store/Store';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <SnackbarProvider
        autoHideDuration={4000}
        maxSnack={2}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        style={{ fontFamily: 'Arial' }}
        action={(snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <Close />
          </IconButton>
        )}
      >
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>
);
