
interface ServiceCardProps {
    imgURL: string,
    label: string,
    subtext: string
}

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
    return (
        <div className='  sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl p-10 mt-5 '>
            <div className='w-11 h-11 flex justify-center items-center rounded-full bg-primaryColor'>
                <img src={imgURL} alt={label} width={20} height={20} />
            </div>
            <h3 className='mt-5  text-2xl leading-normal font-bold'>
                {label}
            </h3>
            <p className='mt-3 break-words font-montserrat text-base leading-normal text-grayText'>
                {subtext}
            </p>
        </div>
    )
}

export default ServiceCard