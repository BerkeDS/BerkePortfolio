import '../styles/globals.css';
import '../styles/components/WorkCard.css';
import '../styles/components/About.css';
import '../styles/components/Certificates.css';
import '../styles/components/Contact.css';
import '../styles/components/Works.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
