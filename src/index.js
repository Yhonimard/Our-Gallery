import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Page/store/Store";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SnackbarProvider
      autoHideDuration={3000}
      maxSnack={2}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      action={(snackbarId) => (
        <IconButton onClick={() => closeSnackbar(snackbarId)}>
          <Close />
        </IconButton>
      )}
    >
      <App />
    </SnackbarProvider>
  </Provider>
);
