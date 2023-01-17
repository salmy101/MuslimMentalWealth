import React from "react";
import "./index.scss"
import Hero from "../Hero/index.js"
function Home() {
  return (
    <>
      <div className="container home-page">
        {/* <h1>Muslim Mental Wealth</h1> */}
        <h1>Muslim Mental Wealth</h1>
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1522219406764-db207f1f7640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Muslim Mental Wealth"
        text="Making mental health acessible to the muslim youth"
        url="/"
        buttonText="About Us"
        btnClass="show"
        />
      </div>
    </>
  );
}

export default Home;
