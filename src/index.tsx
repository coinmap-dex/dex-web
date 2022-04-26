import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Home from "~components/Home";

const App = (): React.ReactElement => {
  // const dispatch = useDispatch();
  // useEffect(() => {

  // }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("shell"));
