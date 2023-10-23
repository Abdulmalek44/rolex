import { footerLinks, socialMedia } from '../Constants'
import logo from '../assets/icons/logo2.svg'
import copyrightSign from '../assets/icons/copyright-sign.svg'

const Footer = () => {
  return (
    <footer className="w-full min-h-fit bg-black text-white flex items-center flex-col justify-center pt-8 ">
      <div className="flex  items-start justify-center xl:w-4/5 max-xl:mx-7 md:flex-row gap-20 flex-wrap max-lg:flex-col">
        <div className="flex items-start justify-center flex-col gap-y-3">
          <img src={logo} alt="Np_image" />
          <p className='text-grayText sm:max-w-xs leading-7'>Get watch ready for the new term at your
            nearest Rolex store. Find Your perfect Watch In
            Store. Get Rewards</p>
          <div className='flex items-center justify-center gap-2'>
            {socialMedia.map(item => (
              <img src={item.src} alt={item.src} className='bg-white rounded-full p-2 cursor-pointer hover:bg-[#fefe]' />
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map(item => (
            <div key={item.title}>
              <h5 className='text-xl leading-normal font-normal mb-4'>{item.title}</h5>
              <ul>
                {
                  item.links.map(link => (
                    <li className='mt-2  leading-normal text-grayText hover:text-grayText cursor-pointer'
                      key={link.name}>{link.name}</li>
                  ))
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between mt-8 mb-2 max-sm:flex-col text-grayText max-sm:items-center xl:w-4/5 max-xl:mx-7 '>
        <div className=' flex flex-1  items-center gap-2 cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={15}
            height={15}
            className='rounded-full '
          />
          <p className='text-sm'>Copyright. All rights reserved.</p>
        </div>
        <p className='text-sm cursor-pointer'>Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer