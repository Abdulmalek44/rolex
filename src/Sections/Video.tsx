import videoBg from '../assets/new-dwatches-2023-hub-cover-autoplay.webm'

const Video = () => {
    return (
        <section className='w-full h-screen relative text-[#f8f8f8] font-light mt-14'>
            <video src={videoBg} autoPlay muted loop className='w-full h-screen object-cover' />
            <div className='w-full h-full flex items-center justify-center absolute top-0 flex-col'>
                <p className='text-6xl  max-xl:text-4xl'>Oyster Perpetual</p>
                <h1 className='text-6xl font-bold max-xl:text-4xl'>Datejust</h1>
            </div>
        </section>
    )
}

export default Video