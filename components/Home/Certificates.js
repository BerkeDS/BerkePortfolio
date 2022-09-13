import style from '../../styles/components/Certificates.module.css';
import Certificate from '../Cards/CertificateCard';

import { useSelector } from 'react-redux';

function Certificates(){
    const certificateData = useSelector( (state) => state.certificates.value);

    return (
        <section id={style['certificates']}>
            <div id={style['scroll-target-certificate']}></div>
            <h1>certificates</h1>
            <hr />
            <div id={style['certificatesC']}>
                {certificateData.map(certificate => <Certificate key={certificate["id"]} certificate={certificate}/>)}
            </div>
        </section>
    );
}

export default Certificates;