import Head from "next/head";
import Image from "next/image";


export default function netPage(){
    function toggleVideo(){
        const trailer = document.querySelector(".trailer");
        const video = document.querySelector("video");
        trailer.classList.toggle("active");
        video.currentTime = 0;
        video.pause();
    }
    return(
        <>
            <Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NetflixClonePage</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
</Head>
<main id="net-page">
    <header>
        <a href="#" className="logo">{/*<img src="/assets/images/logo.png" alt="" />*/}<Image src="/assets/images/logo.png" alt="" width={200} height={50} /></a>
        <ul className="navigation">
            <li><a href="#">Home</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Latest</a></li>
            <li><a href="#">My List</a></li>
        </ul>
        <div className="search">
            <input type="text" placeholder="Search" />
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
    </header>
    <div className="banner">
        <img src="/assets/images/bg.jpg" alt="Background image" className="bg" />
        <div className="content">
            <img src="/assets/images/name.png" className="movieTitle" alt="" />
            <h4>
                <span>2020</span>
                <span><i>12+</i></span>
                <span>1h 55min</span>
                <span>Action</span>
            </h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis in vero, accusantium, quisquam quibusdam tenetur maiores neque iusto,quod adipisci alias! Eveniet sapiente accusamus distinctio quod quas velit quo minima.quod adipisci alias! Eveniet sapiente accusamus distinctio quod quas velit quo minima. quod adipisci alias! Eveniet sapiente accusamus distinctio quod quas velit quo minima.</p>
            <div className="buttons">
                <a href="#"><i className="fa fa-play" aria-hidden="true"></i> Play</a>
                <a href="#"> <i className="fa fa-plus" aria-hidden="true"></i> My List</a>
            </div>
        </div>
        <a className="play" onClick={toggleVideo}><img src="/assets/images/play.png" alt="Play Button" />Watch Trailer</a>
    </div>
    <div className="trailer">
        <video src="/assets/videos/trailer.mp4" controls="true" autoPlay="true"></video>
        <img onclick={toggleVideo} src="/assets/images/close.png" className="close" alt="Close Button for trailer page" />
    </div>
</main>
        </>
    );
}