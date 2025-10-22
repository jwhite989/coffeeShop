import Button from "./Button";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Crafted with Passion. Brewed to Perfection.</h1>
        <p>Experience small-batch roasts made for true coffee lovers.</p>
        <Button className="cta-button" text="Taste the Difference" />
      </div>
    </section>
  );
}

export default Hero;
