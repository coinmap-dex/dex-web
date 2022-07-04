import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Home from "~components/Home";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Web3Provider } from "@ethersproject/providers";
import { store } from "~store";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider as ReduxProvider } from "react-redux";
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home2 from "~components/Home2";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}


const history = createBrowserHistory({ window });

const App = (): React.ReactElement => {
  return (
    <ReduxProvider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            {/* <Router> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home2 />} />
                <Route path="/:address/*" element={<Home />} />
              </Routes>
            {/* </Router> */}
          </BrowserRouter>
        </I18nextProvider>
      </Web3ReactProvider>
    </ReduxProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("shell"));
