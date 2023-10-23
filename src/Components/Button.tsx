import { BsArrowRightCircleFill } from 'react-icons/bs'

interface ButtonProps {
    btnText: string
    icon: boolean
}

const Button = ({ btnText, icon }: ButtonProps) => {
    return (
        <div className='relative flex items-center justify-between'>
            <button className={`bg-primaryColor hover:bg-[#fe7252e4] duration-300 py-2 px-4 text-white rounded-full ${icon && ' pr-12'}`}>
                {btnText}
            </button>
            {icon && <span className='absolute right-3 cursor-pointer text-white'><BsArrowRightCircleFill size={18} /></span>}
        </div>
    )
}

export default Button
