
function About(){
    return (
        <section id='about'>
            <div id='photo'>
                <figure>
                    <img src='/assets/images/Berke.jpg' layout='intrinsic' />
                    <figcaption style={{marginTop: "15px"}}>Berke&apos;s Photo</figcaption>
                </figure>
            </div>
            <div id='info'>
                <h1 style={{fontSize:"3.6rem"}}>Hi I&apos;m Berke</h1>
                <h3 style={{color: "brown",fontStyle: "italic"}}>a Developer</h3>
                <p>
                My programming journey began with c# and desktop applications. after c# I learned asp .net, sql server and ado net and followed by entity framework core .net core. Actually i towords .net core beacause i wanted to develop cross-platfom apps. I did a litte research and i  changed my mind to learn Javascript and with js i learned react and redux. Now i&apos;m working with python and data analysis but of course technology always progressing and we need the keep up with it.
                </p>
                <p>
                    <span> This site is developed with Next.js, React and redux </span>
                    <span></span>

                    <a href="https://github.com/BerkeDS" target="_blank" rel="noreferrer">Github Profile</a>
                    <a href="https://www.freecodecamp.org/BerkeDS" target="_blank" rel="noreferrer">FreeCodeCamp Profile</a>
                    <a href="https://www.hackerrank.com/berke_d_sefik?h_r=internal-search&hr_r=1" target="_blank" rel="noreferrer">Hackerrank Profile</a>
                    <a href="/assets/documents/Universite.pdf" target="_blank" rel="noreferrer">CV</a>
                </p>
            </div>
        </section>
    );
}

export default About;