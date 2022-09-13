import style from '../../styles/components/Footer.module.css';

function Footer(){
    return (
        <section id={style['footer']}>
            <hr />
            <div className={style['link-container']}>
                <a href="https://www.flaticon.com/free-icons/postal" title="postal icons">Social Media icons created by Freepik - Flaticon</a>
                <div className={style['page-links']}>
                    <a href='#about'>About</a>
                    <a href='#works'>Works</a>
                    <a href='#certificates'>Certificates</a>
                    <a href='#contact'>Contact</a>
                </div>
            </div>

            {//#region
            /*<a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/twitter-social-badge" title="twitter social badge icons">Twitter social badge icons created by Freepik - Flaticon</a>*/
            //#endregion}

            }
        </section>
    );
}

export default Footer;