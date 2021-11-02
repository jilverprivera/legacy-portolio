import { AppProvider } from "../src/context/AppContext";

const MyApp = ({ Component, pageProps }) => {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
};

export default MyApp;
