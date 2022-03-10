function Home() {
  return (
    <div className="home home-container">
      <h1>onlinestore.</h1>
      <p>
        Sick of the flash? Tired of all the fun and laughing? You've come to the
        right place.
      </p>
      <div className="home-landing-img-container">
        <img className="home-landing-img" src="./images/landing.jpg"></img>
        <a className="home-btn-shop" href="./shop">
          SHOP NOW
        </a>
      </div>
      <div className="home-cotton-img-container">
        <img className="home-cotton-img" src="./images/cottonsource.png"></img>
        <img className="home-cotton-txt" src="/images/cottontxt.png"></img>
      </div>
    </div>
  );
}

export default Home;
