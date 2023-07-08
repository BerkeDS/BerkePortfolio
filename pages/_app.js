import '../styles/globals.css';
import '../styles/components/WorkCard.css';
import '../styles/components/About.css';
import '../styles/components/Certificates.css';
import '../styles/components/Contact.css';
import '../styles/components/Works.css';
import '../styles/Tribute.css';
import '../styles/components/CertificateCard.css'
import '../styles/components/Footer.css';
import '../styles/components/Header.css';
import '../styles/Home.css';
import '../styles/Technical.css';
import '../styles/Survey.css';
import '../styles/Product.css';
import '../styles/NetPage.css'

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
