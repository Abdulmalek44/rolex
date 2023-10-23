
interface WatchCardProps {
    index: number,
    imgURL: string,
    changeBigWatchImage: (img: string) => void,
    bigWatchImg: string,
}

const WatchCard = ({ imgURL, changeBigWatchImage, bigWatchImg }: WatchCardProps) => {

    const handleClick = (): void => {
        if (bigWatchImg !== imgURL) {
            changeBigWatchImage(imgURL);
        }
    }


    return (
        <div className={`rounded-xl border-2 cursor-pointer
        ${bigWatchImg === imgURL ? 'border-primaryColor' : 'border-transparent'}
        `}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover md:w-32 md:h-32 w-24 h-24 rounded-xl max-sm:p-4'>
                <img
                    src={imgURL}
                    alt='No_image'
                    width={90}
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default WatchCard
