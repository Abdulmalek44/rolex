import { ServiceCard } from "../Components"
import { services } from "../Constants"


const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 mb-14'>
      <div className="flex items-center justify-evenly flex-col xl:w-4/5 max-xl:mx-6 lg:flex-row">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services