import { Button } from "../Components"

const Subscribe = () => {
    return (
        <section className=" w-full min-h-fit flex items-center justify-center my-20">
            <div className="flex justify-between flex-col items-start xl:w-4/5 max-xl:mx-6 md:flex-row gap-10 ">
                <h1 className="sm:text-3xl font-bold  text-2xl max-w-xs "> Sign Up for
                    <span className="text-primaryColor"> Updates </span>
                    & Newsletter</h1>
                <div className="relative ">
                    <input type="email" placeholder="subscnbe@nlke.com" required
                        className="w-80 p-3 pl-6 rounded-full outline-none border-2 border-l-grayText border-b-grayText"
                    />
                    <div className="absolute top-[5.5px] right-2">
                        <Button btnText='Sign up' icon={false} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Subscribe