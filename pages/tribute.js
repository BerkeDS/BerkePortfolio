import Head from "next/head";


export default function Tribute(){
    return(
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Atatürk Page</title>
            </Head>

            <main id="tribute">
                <h1 id="title">Mustafa Kemal ATATÜRK</h1>
                <p>Founding Father of the Republic of Turkey</p>
                <figure id="img-div">
                    <img id="image" src="/assets/images/Ataturk13.jpeg" alt="Atatürk with Ottoman military officers during the Battle of Gallipoli"/>
                    <figcaption id="img-caption">Atatürk with Ottoman military officers during the Battle of Gallipoli, Çanakkale, 1915</figcaption>
                </figure>
                <section id="tribute-info">
                    <h3 id="headline">Military career of Mustafa Kemal Atatürk</h3>
                    <ul>
                    <li><strong>1881</strong>
                        Kemal Atatürk was born in the early months of 1881, in Salonica (Selanik)
                    </li>

                    <li><strong>1905 - 1907</strong>
                        Mustafa Kemal graduated from the Ottoman Military Staff College as a staff captain (Kurmay Yüzbaşı) in 1905 and was assigned to the Fifth Army based in Damascus. There he soon joined a small secret revolutionary society of reformist officers called &quot;Motherland and Liberty&quot; (Turkish: Vatan ve Hürriyet) and became an active opponent to the regime of Abdülhamid II
                    </li>

                    <li><strong>1907 - 1910</strong>
                        In 1907, he was promoted to the rank of senior captain (Kolağası) and assigned to the Third Army in Monastir (now Bitola, North Macedonia). During this period he joined the Committee of Union and Progress (CUP).
                    </li>

                    <li><strong>1910 - 1911</strong>
                        In 1910, Atatürk took part in the army maneuvers in Picardy, France, and in 1911 he entered service at the Ministry of War (Turkish: Harbiye Nezareti) in Constantinople (now Istanbul).
                    </li>

                    <li><strong>1911 - 1912</strong>
                        Later in 1911, he volunteered to fight in the Italo-Turkish war in the Ottoman Vilayet of Tripolitania (present-day Libya) to oppose the Italian invasion. Following the successful defense of Tobruk on 22 December 1911, he was appointed commander of the forces at Derna on 6 March 1912.
                    </li>
                    <li><strong>1912 - 1913</strong>
                        He returned to Constantinople following the outbreak of the Balkan Wars in October 1912. During the First Balkan War, Mustafa Kemal fought against the Bulgarian army at Gallipoli and Bulair (Bolayır) on the coast of Thrace. He also played a crucial role in the recapture of Adrianople (Edirne) and Didymoteicho during the Second Balkan War.
                    </li>
                    <li><strong>1914 - 1915</strong>
                        The German Marshal Otto Liman von Sanders was assigned to defend the Dardanelles in command of the Fifth Army. Mustafa Kemal was given the task of organizing and commanding the 19th Division attached to the Fifth Army. On 8 January 1915, the British War Council launched an operation &quot;to bombard and take the Gallipoli peninsula with Istanbul as its objective&quot;. <br/> <br/>

                        British naval attacks, however, failed to break through the Dardanelles Strait and the British decided to support their fleet with a land attack. The land campaign took place between 25 April 1915, and 9 January 1916. With his division stationed in Gallipoli, Mustafa Kemal found himself at the centre of the Allies attempts to force their way onto the peninsula. <br/> <br/>

                        On 25 April 1915, the Australian and New Zealand Army Corps (ANZAC) forces were to move inland after landing their troops at Anzac Cove, but were soon met with a Turkish counterattack, commanded by Mustafa Kemal. Mustafa Kemal engaged the enemy forces on the hills, held them and retook the high ground. Largely due to him and his command, the ANZAC forces were contained, and could not attain their objectives. <br/> <br/>
                        Before the encounter between the two forces, Mustafa Kemal told his troops: <br/><br/>
    I don’t order you to fight, I order you to die. In the time it takes us to die, other troops and commanders can come and take our places. <br/> <br/>

    — Mustafa Kemal
                    </li>
                 <h5>Turkish War of Independence</h5>
                <li><strong>1919 - 1923</strong>
                    On 30 April 1919, Fahri Yaver-i Hazret-i Şehriyari (&quot;Honorary Aide-de-camp to His Majesty Sultan&quot;) Mirliva Atatürk was assigned as the inspector of the Ninth Army Troops Inspectorate to reorganize what remained of the Ottoman military units and to improve internal security. On 19 May 1919, he reached Samsun. His first goal was the establishment of an organized national movement against the occupying forces. In June 1919, he issued the Amasya Circular, declaring the independence of the country was in danger. He resigned from the Ottoman Army on 8 July, and the Ottoman government issued a warrant for his arrest. But Kâzım Karabekir and other military commanders active in Eastern Anatolia followed Atatürk&apos;s lead and acknowledged him as their leader.
                </li>

                <h5>Establishment of the Republic of Turkey</h5>
                <li>The Conference of Lausanne began on 21 November 1922. Turkey, represented by İsmet İnönü of the GNA, refused any proposal that would compromise Turkish sovereignty, such as the control of Turkish finances, the Capitulations, the Straits and other issues. Although the conference paused on 4 February, it continued after 23 April mainly focusing on the economic issues. On 24 July 1923, the Treaty of Lausanne was signed by the Powers with the GNA, thus recognising the latter as the government of Turkey.

                    On 29 October 1923, the Republic of Turkey was proclaimed. Since then, Republic Day has been celebrated as a national holiday on that date.</li>
            </ul>
            <p id="sen"><em> &quot;No matter how rich and prosperous, a nation without independence, cannot be subject to any behaviour before the humanity, at a higher level than serving.&quot;</em></p>
            <span>--Mustafa Kemal ATATÜRK</span>
            <br/><br/>
            <h4>If you want more information about ATATÜRK, look here <a id="tribute-link" target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk">Mustafa Kemal Atatürk</a></h4>
        </section>
    </main>
        </>
    );
}

