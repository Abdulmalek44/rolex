import { Link } from 'react-scroll'
import logo from '../assets/icons/logo.svg'
import { navLinks } from '../Constants'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DropDownMenu } from '.';


const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [color, setColor] = useState<boolean>(false);

  const ChangeColor = (): void => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', ChangeColor);

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }



  return (
    <header className={`w-full h-16 fixed z-50 top-0 flex items-center justify-around max-lg:justify-between px-14 max-lg:px-6
    ${!color ? 'transparent' : 'bg-white '}
    `} >
      <div>
        <NavLink to='/'>
          <img src={logo} alt="logo" className='w-12 cursor-pointer' />
        </NavLink>
      </div>
      {/* nav link */}
      <ul className='flex gap-x-16 max-lg:hidden '>
        {navLinks.map((item) => (
          item.href === 'products' ? (
            <li key={item.label}>
              <DropDownMenu />
            </li>
          ) : (
            <li key={item.label} className='cursor-pointer'>
              <Link to={item.href} spy={true} smooth={true} offset={10} duration={500}>
                <span className='leading-normal text-lg text-slate-400 hover:text-slate-500 duration-200'>
                  {item.label}
                </span>
              </Link>
            </li>
          )
        ))}

      </ul>
      {/* hamburger */}
      <div className='hidden max-lg:flex' onClick={handleClick}>
        {isOpen ?
          <span><AiOutlineMenu size={30} /></span> :
          <span><AiOutlineClose size={30} /></span>
        }
      </div>
      {/* mobile nav link */}
      <div className={!isOpen ? 'flex flex-col items-center z-10 justify-center absolute top-0 left-0 w-full h-screen bg-white' : 'hidden'}>
        <span className=' absolute top-4 right-4' onClick={handleClick}><AiOutlineClose size={30} /></span>
        <ul className='w-full h-screen flex flex-col items-center justify-center gap-y-7'>
          {navLinks.map(item => (
            <li key={item.label} className='cursor-pointer' >
              <Link to={item.href} spy={true} smooth={true} offset={-100} duration={500}  >
                <span onClick={handleClick} className='leading-normal text-3xl text-slate-400 hover:text-slate-500 duration-200'>
                  {item.label}
                </span>
              </Link>
            </li>))}
        </ul>
      </div>
      {/*  Sign in */}
      <div className='flex gap-2 text-lg leading-normal font-medium max-lg:hidden'>
        <NavLink to='/login'>
          Sign in / Explore now
        </NavLink>
      </div>
    </header >
  )
}

export default Nav
