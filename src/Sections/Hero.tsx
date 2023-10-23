import { statistics, watch } from '../Constants'
import { useState } from 'react'
import bigWatch1 from '../assets/images/bigwatch1.png'
import { Button, WatchCard } from '../Components'


const Hero = () => {
  const [bigWatchImg, setBigWatchImg] = useState<string>(bigWatch1);


  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-lg:py-10 '>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-6 '>
        <p className='text-xl text-primaryColor max-lg:hidden'> Our Summer collections</p>
        <h1 className='mt-7 text-8xl max-sm:text-[55px] max-sm:leading-[60px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-6'>The New Arrival</span>
          <br />
          <span className='text-primaryColor'> Rolex </span> watch </h1>
        <p className=' text-grayText text-lg leading-8 mt-6 mb-8 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button btnText='Shop now' icon={true} />
        <div className='flex justify-center items-center mt-11 gap-10'>
          {
            statistics.map((item, index) => (
              <div key={index} className='flex flex-col items-start justify-center'>
                <p className='font-bold text-4xl max-lg:text-3xl'>{item.value}</p>
                <p className='font-bold text-sm leading-7 text-grayText '>{item.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className=' flex items-center justify-center relative sm:min-h-screen min-h-[400px] bg-hero bg-no-repeat bg-cover bg-center '>
        <img src={bigWatchImg} alt="no_image" width={550} className='object-cover px-28 z-10 ' />
        <div className='flex sm:gap-6 gap-4 absolute z-30 -bottom-[5%]  sm:left-[10%] max-sm:px-6'>
          {watch.map((watch, index: number) => (
            <div key={index}>
              <WatchCard
                index={index}
                imgURL={watch.bigWatch}
                changeBigWatchImage={(watch) => setBigWatchImg(watch)}
                bigWatchImg={bigWatchImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero