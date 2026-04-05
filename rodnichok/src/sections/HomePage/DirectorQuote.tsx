import {HomeImg} from "@/components/HomePage/HomeImg.tsx";
import {QuoteFrame} from "@/components/HomePage/QuoteFrame.tsx";

export const DirectorQuote = () => (
    <div className="relative w-full z-0">
        <img
            src = {HomeImg['diagonal_background']}
            className={'w-full h-auto'}
            alt={'Director_background'}
        />
        <img
            src={HomeImg['Director']}
            className={'absolute w-[20.83vw] h-[28.82vw] bottom-0 left-[19vw]'}
            alt={'Director'}
        />

        <QuoteFrame />
    </div>
)