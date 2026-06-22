import {ShiftItem} from "@/components/HomePage/ShiftItem";
import {Shift} from "@/components/HomePage/Shift.tsx";
import {Icon} from '@/components/ui/icons/Icon'

const shifts = [
    { number: 1, dates: ["7 июня -", " 27 июня"], color: "text-themeGreen" },
    { number: 2, dates: ["3 июля -", " 23 июля"], color: "text-themeOrange" },
    { number: 3, dates: ["1 августа -", " 21 августа"], color: "text-themeOrange" }
]

export const TimetablePC = () => (
    <div className={'w-full flex justify-around Timetable'}>
        <p className={'Timetable__title ml-[2vw]'}>
            Расписание <br />смен
        </p>
        {shifts.map(shift => (
            <ShiftItem  key={shift.number} number={shift.number} dates={shift.dates.join("\n")} />
        ))}
    </div>
)

export const TimetableMobile = () => (
    <section className={'my-7 '}>
        <div className="flex flex-col gap-3">
            <h2 className='flex gap-7 comfortaa-700 text-[24px] Home__shift-base Home__shift-title leading-10'>
                <Icon name='Calendar-check_icon' className='w-[14vw] h-auto text-themeGreen ml-10'/>
                Расписание<br/>смен
            </h2>
            {shifts.map(shift => (
                <Shift
                    key={shift.number}
                    number={shift.number}
                    dates={shift.dates}
                    color={shift.color}
                    className="flex Home__shift-base Home__shift-strip"/>
            ))}
        </div>
    </section>
)