import video from '../assets/rolex-box.webm'

const BoxVideo = () => {
    return (
        <div className=' w-80 h-80 '>
            <video src={video} autoPlay muted loop className=' object-cover rounded-lg w-full h-full ' />
        </div>
    )
}

export default BoxVideo