

const Certificate = (props) =>{
    const cer = props.certificate;
    return (
    <div className='certificate-container'>
        <div className='certificate'>
            <img src={cer["imgSRC"]} className='img'></img>
            <div className='title'>
                <a target="_blank" href={cer["titleLink"]}>{cer["title"]}</a>
                <a target="_blank" href={cer["certificateLink"]}>{cer["certificateName"]}</a>
            </div>
            <div className='description'>{cer["description"]}</div>
        </div>
    </div>
)};

export default Certificate;