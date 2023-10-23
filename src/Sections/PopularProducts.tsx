import { PopularProductsCard } from "../Components"
import { products } from "../Constants"

const PopularProducts = () => {
  return (
    <section id="popular-products" className="bg-[#f5f7fd] w-full min-h-screen flex items-center justify-center flex-col pt-8 ">
      <div className="flex flex-col justify-center items-start xl:w-4/5 max-xl:mx-6">
        <h1 className="sm:text-5xl font-bold mb-8 text-3xl "> Our
          <span className=" text-primaryColor"> Popular </span>
          Products </h1>
        <p className="text-grayText  text-sm font-medium sm:max-w-md mb-12">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort. design. and value
        </p>
        <div className=" w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 ">
          {products.map((item, index: number) => (
            <div key={index} className="w-full flex items-center justify-center md:p-6  ">
              <PopularProductsCard
                img={item.imgURL}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts