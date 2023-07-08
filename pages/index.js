import Head from 'next/head'

import App from '../components/Home/App.js';

import { Provider } from 'react-redux'
import store from '../store/store';

export default function Home() {
    return (
        <>
            <Head>
                <title>Berke Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main id='root'>
                <Provider store={store}>
                    <App />
                </Provider>
            </main>
        </>
    )
}
