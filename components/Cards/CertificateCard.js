import style from '../../styles/components/CertificateCard.module.css'


const Certificate = (props) =>{
    const cer = props.certificate;
    return (
    <div className={style['certificate-container']}>
        <div className={style['certificate']}>
            <img src={cer["imgSRC"]} className={style['img']}></img>
            <div className={style['title']}>
                <a target="_blank" href={cer["titleLink"]}>{cer["title"]}</a>
                <a target="_blank" href={cer["certificateLink"]}>{cer["certificateName"]}</a>
            </div>
            <div className={style['description']}>{cer["description"]}</div>
        </div>
    </div>
)};

export default Certificate;