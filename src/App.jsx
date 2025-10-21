import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />

      <section id="featured" className="card-section">
        <h2 className="featured-heading">Featured Drinks</h2>

        <div className="card-container">
          <Card
            title="Mocha Latte"
            description="Rich chocolate blended with espresso and topped with whipped cream."
            image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
            price="$5.50"
            category="Hot"
          />
          <Card
            title="Caramel Macchiato"
            description="A smooth espresso layered with steamed milk and caramel drizzle."
            image="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
            price="$6.50"
            category="Hot"
          />
          <Card
            title="Vanilla Cold Brew"
            description="Slow-steeped cold brew infused with smooth vanilla and a hint of cream."
            image="https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg"
            price="$6.00"
            category="Cold"
          />
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At <strong>A Bean Above</strong>, coffee is more than a drink — it's
            a ritual of warmth, community, and craftsmanship. Every cup is
            brewed from responsibly sourced beans, roasted in small batches to
            bring out their richest flavors.
          </p>
          <p>
            Whether you're stopping in for your morning espresso or relaxing
            with a caramel macchiato, we’re here to make your day a little
            brighter — one sip at a time.
          </p>
        </div>
      </section>

      <section id="menu" className="card-section">
        <h2 className="featured-heading">Menu</h2>

        <div className="card-container">
          <Card
            title="Mocha Latte"
            description="Rich chocolate blended with espresso and topped with whipped cream."
            image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
            price="$5.50"
            category="Hot"
          />
          <Card
            title="Caramel Macchiato"
            description="A smooth espresso layered with steamed milk and caramel drizzle."
            image="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
            price="$6.50"
            category="Hot"
          />
          <Card
            title="Vanilla Cold Brew"
            description="Slow-steeped cold brew infused with smooth vanilla and a hint of cream."
            image="https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg"
            price="$6.00"
            category="Cold"
          />
          <Card
            title="Americano"
            description="Bold and classic espresso with hot water for a smooth, balanced flavor."
            image="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=800"
            price="$3.50"
            category="Hot"
          />
          <Card
            title="Iced Latte"
            description="Creamy espresso poured over ice, lightly sweetened for a refreshing treat."
            image="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=800"
            price="$5.00"
            category="Cold"
          />
          <Card
            title="Cappuccino"
            description="Rich espresso topped with steamed milk foam."
            image="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800"
            price="$4.50"
            category="Hot"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
