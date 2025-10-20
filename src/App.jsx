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
          />
          <Card
            title="Caramel Macchiato"
            description="A smooth espresso layered with steamed milk and caramel drizzle."
            image="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
          />
          <Card
            title="Vanilla Cold Brew"
            description="Slow-steeped cold brew infused with smooth vanilla and a hint of cream for a refreshing, all-day boost."
            image="https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
