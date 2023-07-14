import "moment/locale/lt";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="lt">
        <Routes />
      </LocalizationProvider>
    </>
  );
};

export default App;
