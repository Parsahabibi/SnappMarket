import "../styles/globals.css";
import type {AppProps} from "next/app";
// import "swiper/css/bundle";
import Theme from "../Theme/Theme";
import CssBaseLine from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import store , {persistor} from '../redux/store'
import {Provider} from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";


export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} >
                <ThemeProvider theme={Theme}>
                    <Component {...pageProps} />
                    <CssBaseLine/>
                    
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
        ;
}
