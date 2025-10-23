import Hero from "../components/Hero";
import Card from "../components/Card";

function Homepage() {
  return (
    <>
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
    </>
  );
}

export default Homepage;
