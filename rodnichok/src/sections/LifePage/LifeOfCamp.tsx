import {TextStroke} from "@/components/ui/TextStroke.tsx";

export const LifeOfCamp = () => {
    return (
        <>
            <TextStroke
                as="h1"
                className="relative w-full mt-[90px] lg:mt-[150px] font__Home-body text-homeTitle text-[30px] sm:text-[40px] lg:text-6xl text-center"
            >
                Жизнь <br className="tn:hidden" />
                «Родничка»
            </TextStroke>

            <div className="w-full flex justify-center md:justify-center px-5 mt-4 md:mt-10">
                <div className="w-[80%] md:w-[65%] h-[2px] stroke--gradient opacity-50" />
            </div>

            <section className="relative w-[90%] h-auto mt-5 lg:mt-20 mx-auto">

            </section>
        </>
    );
}