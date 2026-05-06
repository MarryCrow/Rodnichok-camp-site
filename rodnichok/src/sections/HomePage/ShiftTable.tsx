import {HomeImg} from "@/components/HomePage/HomeImg.tsx";
import {TimetableMobile, TimetablePC} from "@/components/HomePage/Timetable.tsx";


export const ShiftTable = () => (
    <>
        <div className="hidden tn:flex Home__dividing-strip relative">
            <img
                src={HomeImg['brown_angle']}
                className={'absolute w-[38.47vw] h-auto right-0 bottom-[-1.05vw] rounded-br-2xl'}
                alt={'Brown angle'}
            />
            <img
                src={HomeImg['green_angle']}
                className={'absolute w-[38.47vw] h-auto left-0 top-[-1.05vw] rounded-tl-2xl'}
                alt={'Green angle'}
            />
            <TimetablePC />
        </div>
        <div className="tn:hidden relative mx-3">
            <img
                src={HomeImg['brown_angle']}
                className={'absolute w-[90vw] h-auto right-0 bottom-[-1.05vw] rounded-br-2xl'}
                alt={'Brown angle'}
            />
            <img
                src={HomeImg['green_angle']}
                className={'absolute w-[90vw] h-auto left-0 top-[-1.05vw] rounded-tl-2xl'}
                alt={'Green angle'}
            />
            <TimetableMobile />
        </div>
    </>
)