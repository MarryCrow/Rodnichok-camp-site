import {HomeImg} from "@/components/HomePage/HomeImg.tsx";
import {Timetable} from "@/components/HomePage/Timetable.tsx";

export const DividingStrip = () => (
    <div className="relative Home__dividing-strip">
        <img
            src={HomeImg['brown_angle']}
            className={'absolute w-[38.47vw] h-auto right-0 bottom-[-1.1vw]'}
            alt={'Brown angle'}
        />
        <img
            src={HomeImg['green_angle']}
            className={'absolute w-[38.47vw] h-auto left-0 top-[-1.1vw]'}
            alt={'Green angle'}
        />
        <Timetable />
    </div>
)