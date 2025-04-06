
import { Hero } from "./homecomponent/hero";
import { FeaturedProducts } from "./homecomponent/featureproducts";
import { Testimonials } from "./homecomponent/testimonial";
import { Faq } from "./homecomponent/faq";
import { useTitle } from "../../hook/dynamictitle";

export const HomePage = () => {

  useTitle("Home/CodeBook")
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}