import FeaturedItems from "./_components/home/FeaturedItems";
import Link from "next/link";

export default async function Home() {
  
  return (
    <div className="wrapper">
      <section className="hero">
        <h1>Welcome to Our Shop</h1>
        <p>Discover amazing products</p>
      </section>

      <section className="featured">
        <h2>Featured Items</h2>
        <FeaturedItems />
        
        <div className="featured__cta">
          <Link href="/list" className="btn btn--primary">
            See All Items
          </Link>
        </div>
      </section>
    </div>
  )
}
