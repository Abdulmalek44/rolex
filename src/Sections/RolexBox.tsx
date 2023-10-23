import { BoxVideo } from "../Components"


const RolexBox = () => {
    return (
        <section id="special-box" className=" w-full flex items-center justify-center my-24 ">
            <div className=" w-full flex items-center justify-evenly flex-col xl:w-4/5 max-xl:mx-7 md:flex-row gap-5">
                <div className='mb-8'>
                    <h1 className="sm:text-5xl font-bold mb-8 text-3xl ">Our
                        <span className='text-primaryColor'> Special </span>
                        Box </h1>
                    <p className='text-grayText mt-4 md:max-w-lg'>
                        Every Rolex is delivered in a beautiful presentation box that is both protector and keeper of the
                        jewel that nests inside it. As the presentation box is also a symbol of giving, it is important to us,
                        if you are purchasing a gift, that the recipient’s first contact with their Rolex sets the stage for
                        revealing what lies within.
                    </p>
                </div>
                <BoxVideo />
            </div>

        </section >
    )
}

export default RolexBox