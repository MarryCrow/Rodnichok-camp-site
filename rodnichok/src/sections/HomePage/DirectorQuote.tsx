import {HomeImg} from "@/components/HomePage/HomeImg.tsx";
import {QuoteFrame} from "@/components/HomePage/QuoteFrame.tsx";

export const DirectorQuote = () => (
    <div className="relative w-full h-[95svh] md:h-screen overflow-hidden">
        <img
            src = {HomeImg['diagonal_background']}
            className={'absolute w-full h-full object-cover'}
            alt={'Director_background'}
        />
        <img
            src={HomeImg['Director']}
            className='absolute hidden md:block
                bottom-0 left-[10vw]
                h-[80vw] w-auto max-h-[90vh]'
            alt={'Director'}
        />
        <img
            src={HomeImg['Director-full']}
            className={'absolute block md:hidden h-[83%] bottom-1 left-5 md:left-[20vw]'}
            alt={'Director'}
        />

        <div className="absolute w-[60vw] top-[10vh] right-0 md:w-[35vw] md:top-[20vh] md:right-[10vw]">
            <QuoteFrame/>
        </div>

        <div className='absolute text-right right-[3vw] bottom-[35vh] md:right-[11vw] md:bottom-[25vh] lg:bottom-[30vh]'>
            <p className='comfortaa-500 text-[clamp(12px,2.7vw,24px)] md:text-[clamp(12px,2vw,24px)]'>Костин С.М.</p>
            <p className='comfortaa-300 text-[clamp(12px,2.7vw,24px)] md:text-[clamp(12px,2vw,24px)] italic'>Директор ДОЛ «Родничок»</p>
        </div>
    </div>
)

    // <div className="absolute w-[60%] top-[15%] right-0 md:w-[35%] md:top-[20%] md:right-[10%]">
    //     <QuoteFrame/>
    // </div>