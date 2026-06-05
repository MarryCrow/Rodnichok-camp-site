import {TextStroke} from "@/components/ui/TextStroke.tsx";
import {CampLifeCarousel} from "@/components/LifePage/LifeCarousel.tsx";
import {campLifeModules} from "@/data/campLifeModules.ts";

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
                {/*<div className="w-[80%] md:w-[65%] h-[2px] stroke--gradient opacity-50" />*/}
                <div className="w-[80%] md:w-[65%] h-[2px] bg-homeTitle opacity-50" />
            </div>

            <CampLifeCarousel modules={campLifeModules} />
        </>
    );
}