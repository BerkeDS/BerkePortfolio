import style from '../../styles/components/Header.module.css';

function Header(){
    return (
        <section id={style['header']}>
            <nav>
                <a href='#about'>About</a>
                <a href='#scroll-target-works'>Works</a>
                <a href='#scroll-target-certificate'>Certificates</a>
                <a href='#contact'>Contact</a>
            </nav>
        </section>
    );
}

export default Header;