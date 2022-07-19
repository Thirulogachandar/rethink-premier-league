import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins";
import { extendTheme } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../src/features/user";

const fonts = {
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
};

const theme = extendTheme({ fonts });
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
