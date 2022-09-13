
function About(){
    return (
        <section id='about'>
            <div id='photo'>
                <figure>
                    <img src='/assets/images/Berke.jpg' layout='intrinsic' />
                    <figcaption style={{marginTop: "15px"}}>Berke's Photo</figcaption>
                </figure>
            </div>
            <div id='info'>
                <h1 style={{fontSize:"3.6rem"}}>Hi I'm Berke</h1>
                <h3 style={{color: "brown",fontStyle: "italic"}}>a Developer</h3>
                <p>
                My programming journey began with c# and desktop applications. after c# I learned asp .net, sql server and ado net and followed by entity framework core .net core. Actually i towords .net core beacause i wanted to develop cross-platfom apps. I did a litte research and i  changed my mind to learn Javascript and with js i learned react, redux, NoSql Database(mongodb) and mongoose. Now i'm working with those but ofcourse technology always progressing and we need the keep up with it.
                </p>
            </div>
        </section>
    );
}

export default About;