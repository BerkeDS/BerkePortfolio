import Head from "next/head";

export default function Survey(){
    return(
        <>
        <Head>
    <title>Gamer Form</title>
  </Head>
  <main id="survey">
    <header>
      <h1 id="title">Gamer Type Survey Form</h1>
      <p id="description">Thank you for taking the time to help us improve the game design process</p>
    </header>

    <form id="survey-form">

      <fieldset>
        <label id="name-label">Name <input id="name" placeholder="Your Name" type="text" required/></label>
        <label id="email-label">Email <input id="email" placeholder="Email Adress" type="email" required/></label>
        <label id="number-label">Age <input id="number" placeholder="Your Age" type="number" min="13" max="120"/></label>
        <label id="select-label">What is your favorite platform?
          <select id="dropdown">
            <option>Select One</option>
            <option>Steam</option>
            <option>Epic Games</option>
            <option>Origin</option>
            <option>Other</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <p>What is your gamer type?</p>
        <label><input type="radio" value="Casual" name="gType" className="inline"/> Casual Gamer</label>
        <label><input type="radio" value="Hardcore" name="gType" className="inline"/> Hardcore Gamer</label>
        <label><input type="radio" value="Pro" name="gType" className="inline"/> Pro Gamer</label>

        <p>Which types of games are you playing?</p>
        <label><input type="checkbox" className="inline" value="Sandbox"/> Sandbox</label>
        <label><input type="checkbox" className="inline" value="Strategy"/> Real-time Strategy (RTS)</label>
        <label><input type="checkbox" className="inline" value="Shooter"/> Shooter (FPS, TPS)</label>
        <label><input type="checkbox" className="inline" value="Multiplayer"/> Multiplayer</label>
        <label><input type="checkbox" className="inline" value="Simulation"/> Simulation</label>
      </fieldset>

      <fieldset>
        <label>Any comments or suggestions?
          <textarea rows="10" cols="35"></textarea>
        </label>
      </fieldset>

      <input id="submit" type="submit"/>

    </form>
  </main>
  </>

    );
}