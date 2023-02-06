import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background-color: rgb(24 24 27);
        }
      `}</style>
    </Provider>
  );
}

export default appWithTranslation(App);
