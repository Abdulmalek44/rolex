import background from '../assets/images/Curve Line1.svg'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  }
  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  }
  const checkboxClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setShowPassword(!showPassword)
  }

  return (
    <div className='w-full h-screen text-white'>
      <img src={background} alt="no_img" className='w-full h-screen absolute top-0 left-0 object-cover ' />
      <div className='w-full h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center'>
        <div className="w-[400px] h-[500px] max-sm:w-full max-sm:h-screen bg-black/20 flex rounded-md ">
          <div className=" w-[75%] m-auto  ">
            <h1 className="font-bold text-4xl mb-6"> Sign In </h1>
            <form className="w-full h-full">
              <input
                type='text'
                placeholder='Name'
                required
                onChange={nameChange}
                value={name}
                className="w-full h-12 my-2 px-4 text-black bg-[#fefefe] rounded-md outline-none focus:border-2 border-[#292a2d]"
              />
              <div className='relative'>
                <input
                  type={!showPassword ? 'password' : 'text'}
                  placeholder='Password'
                  required
                  onChange={passwordChange}
                  value={password}
                  className="w-full h-12 my-2 px-4 text-black bg-[#fefefe] rounded-md outline-none focus:border-2 border-[#292a2d]"
                />
                <button className='absolute  p-1 text-[#949ba6] hover:bg-[#7c7c7c23] rounded-full right-3 top-4'
                  onClick={checkboxClick}>
                  {showPassword ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />}
                </button>
              </div>
              <NavLink to="/">
                <button
                  type="submit"
                  className="w-full h-12 mb-2 mt-8 text-[#fefefe] bg-[#292a2d] hover:bg-[#212223] duration-300
                  rounded-md text-center font-semibold"
                >
                  Sign In
                </button>
              </NavLink>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#8c8c8c] flex">
                  <input
                    type="checkbox"
                    className="mr-1 accent-white bg-green-500 text-red-500 "
                  />
                  Remember me
                </p>
                <p className="text-sm text-[#8c8c8c] hover:underline">
                  Need help?
                </p>
              </div>
              <div className="w-full flex mt-10">
                <h2 className="text-[#8c8c8c] text-base mr-1">
                  {" "}
                  I don't have an account{" "}
                </h2>
                <NavLink to="/" className="hover:underline">
                  Sign Up
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Login