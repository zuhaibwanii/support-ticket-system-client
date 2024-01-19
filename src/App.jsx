import { useState, createContext } from 'react'
import './App.css'
import { Route, Router } from 'react-router';
import { createBrowserHistory } from "history";
import { createTheme, ThemeProvider } from '@mui/material/styles';

//components
import SnackbarContainer from './components/snackbar';

//views
import SupportTicketPage from './pages/support-ticket';

//constants
import constants from './constants';
import { TOAST_SEVERITY } from './constants';

const history = createBrowserHistory();
export const GlobalStates = createContext();
const theme = createTheme();

function App() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState(TOAST_SEVERITY.info);
  const [toastPosition, setToastPosition] = useState(constants.TOAST_POSITION);
  const [toastAutoHideDuration, setToastAutoHideDuration] = useState(6000);
  const handleToast = ({ open, message, severity, position = constants.TOAST_POSITION, autoHideDuration = 6000 }) => {
    setIsToastOpen(open);
    setToastMessage(message);
    setToastSeverity(severity);
    setToastPosition(position);
    setToastAutoHideDuration(autoHideDuration);
  }
  const [globalStates, setGlobalStates] = useState({ handleToast });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <GlobalStates.Provider value={{ globalStates, setGlobalStates }}>
          <Route exact path="/">
              <SupportTicketPage/>
            </Route>
           
          </GlobalStates.Provider>
        </Router>
      </ThemeProvider>
      <SnackbarContainer
        open={isToastOpen}
        setOpen={setIsToastOpen}
        message={toastMessage}
        severity={toastSeverity}
        autoHideDuration={toastAutoHideDuration}
        vertical={toastPosition.vertical}
        horizontal={toastPosition.horizontal}
      />
    </>
  )
}

export default App
