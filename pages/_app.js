import { AppointmentContextProvider } from '../context/appointment-context';
import Head from 'next/head'

import '../styles/globals.scss'
import Wrapper from '../components/layout/Wrapper';
import Navigation from '../components/navigation/Navigation';
import Sidebar from '../components/sidebar/Sidebar';

function MyApp({Component, pageProps}) {
    return (
        <AppointmentContextProvider>
            <Wrapper>
                <Head>
                    <title>20x Health - Website</title>
                </Head>
                <Navigation />
                <div className='main'>
                    <Component {...pageProps} />
                </div>
            </Wrapper>
        </AppointmentContextProvider>
    );
}

export default MyApp;
