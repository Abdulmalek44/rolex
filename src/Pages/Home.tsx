import Nav from "../Components/Nav"
import { Hero, PopularProducts, Services, RolexBox, SuperQuality, Video, CustomerReviews, Subscribe, Footer } from "../Sections"

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Video />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <RolexBox />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home
