import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Home from "~components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:address/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("shell"));
