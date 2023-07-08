import Head from "next/head";


export default function Product(){
    return(
        <>


<Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>James Webb Telescope</title>
</Head>
<main id="product">
    <header id="header">
        <div id="logo">
            <img id="header-img" src="https://img.freepik.com/premium-vector/telescope-from-abstract-futuristic-polygonal-black-lines-dots_136497-265.jpg?w=740" alt="logo"/>

            <h4>TELESCOPE</h4>
        </div>

        <nav id="nav-bar">
            <ul>
                <li><a className="nav-link" href="#welcome">Welcome</a></li>
                <li><a className="nav-link" href="#info">What is JWT</a></li>
                <li><a className="nav-link" href="#gallery">İmages from JWT</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="welcome">
            <img id="welcome-img" src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_960_720.jpg" alt=""/>
            <p id="welcome-p">Observe The Universe With James Webb Telescope</p>
        </section>
        <section id="info">
            <section id="info-text">
                <h1>James Webb Telescope</h1>
                <p>The James Webb Space Telescope (JWST) is a space telescope designed primarily to conduct infrared astronomy. As the largest optical telescope in space, its greatly improved infrared resolution and sensitivity allow it to view objects too early, distant, or faint for the Hubble Space Telescope. This is expected to enable a broad range of investigations across the fields of astronomy and cosmology, such as observation of the first stars and the formation of the first galaxies, and detailed atmospheric characterization of potentially habitable exoplanets.</p>
                <video jsname="aTv5jf" autoPlay="" disableRemotePlayback="" height="auto" loop="" muted="" playsInline="" preload="auto" width="50%"><source src="https://www.gstatic.com/culturalinstitute/searchar/assets/james_webb_telescope/desktop_light.mp4" type="video/mp4" /></video>
            </section>
            <section id="info-video">
                <h1 style={{fontSize: "2.9rem", marginBottom: "10vh"}}>First Images From the James Webb Space Telescope</h1>
                <iframe id="video" width="981" height="552" src="https://www.youtube.com/embed/nmMRMIE3MGw" title="First Images From the James Webb Space Telescope (Official NASA Broadcast)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            <section id="gallery">
                <h1 style={{fontSize: "2.9rem", marginBottom: "10vh", textAlign: "center"}}>Images From the James Webb Space Telescope</h1>
                <div id="img-container">
                    <img className="gal-img" src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg?itok=9hyNVMwe" alt="" />
                    <img className="gal-img" src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_galaxies_stephans_quintet_sq_nircam_miri_final-1280.jpg?itok=HyMw6H_h" alt="" />
                    <img className="gal-img" src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_stellar_death_s_ring_miri_nircam_sidebyside-1280.jpg?itok=VyowVs82" alt="" />
                    <img className="gal-img" src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_deep_field_smacs0723-1280.jpg?itok=6-LM40Qf" alt="" />
                </div>
            </section>
        </section>
        <section id="news">
            <h1>Inform Me When New Images Uploaded</h1>
            <form id="form" action="https://www.freecodecamp.com/email-submit">
                <input type="email" name="" id="email" placeholder="Enter your email" />
                <input type="submit" value="Register" id="submit" />
            </form>
        </section>
    </main>
</main>

        </>
    );
}