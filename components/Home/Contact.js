import style from '../../styles/components/Contact.module.css';

function Contact(){
    return (
        <section id={style['contact']}>
            <h1>Let's work together</h1>
            <div className={style['email-container']}>
                <img src='/assets/icons/mail.png' />
                <p className={style['email']}>berke.d.sefik@gmail.com</p>
            </div>
            <div className={style['social-media']}>
                <a href='https://www.linkedin.com/in/berkesefik' id='linked-in'>
                    <img src='/assets/icons/linkedin.png' />
                </a>
                <a href='https://github.com/BerkeDS' id='github'>
                    <img src='/assets/icons/GitHub-Mark-120px-plus.png' />
                </a>
                <a href='https://www.instagram.com/berkedemirsefik/' id='instagram'>
                    <img src='/assets/icons/instagram.png' />
                </a>
                <a href='https://twitter.com/berke_sefik' id='twitter'>
                    <img src='/assets/icons/twitter.png' />
                </a>
            </div>
        </section>
    );
}

export default Contact;