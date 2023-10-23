import { AiFillStar } from 'react-icons/ai';


interface PopularProductsCardProps {
    img: string;
    name: string;
    price: string;

}

const PopularProductsCard = ({ img, name, price }: PopularProductsCardProps) => {
    return (
        <div>
            <div className='flex justify-center items-center  bg-card bg-center bg-cover sm:w-60 sm:h-60 w-40 h-40 rounded-xl max-sm:p-4'>
                <img src={img} alt="No-image"
                    className='object-contain mt-6 sm:w-44 w-28 ' />
            </div>
            <div className='flex flex-col w-full my-6'>
                <div className="flex items-center text-primaryColor gap-2">
                    <span><AiFillStar size={20} /></span>
                    <h5 className='text-grayText'>(4.5)</h5>
                </div>
                <h1 className=' font-bold'>{name}</h1>
                <h1 className=' text-primaryColor text-lg font-semibold'>{price}</h1>
            </div>
        </div>

    )
}

export default PopularProductsCard