
import { Button } from '../Components'
import image from '../assets/images/watch3.avif'


const SuperQuality = () => {
    return (
        <section id="super-quality" className="w-full  flex items-center justify-center my-12 ">
            <div className=" w-full flex items-center justify-center flex-col xl:w-4/5 max-xl:mx-6 md:flex-row gap-5">
                <div className='flex-1 lg:ml-20 ' >
                    <h1 className="sm:text-5xl font-bold mb-8 text-3xl "> We Provide You
                        <span className='text-primaryColor'> Super Quality </span>
                        Watch</h1>
                    <p className='text-grayText mt-4 lg:max-w-lg'>Ensuring premium comfort and style, our meticulously
                        crafted footwear is designed to elevate your experience.
                        providing you with unmatched quality. innovation, and a
                        touch of elegance.</p>
                    <p className='text-grayText mt-4 lg:max-w-lg mb-5'>Our dedication to detail and excellence ensures your
                        satisfaction</p>
                    <Button btnText='View details' icon={false} />
                </div>
                <div className='flex-1 flex justify-center items-center  '>
                    <img src={image} alt="No-image"
                        width={270}
                        className='object-contain rounded-full' />
                </div>
            </div>
        </section >
    )
}

export default SuperQuality