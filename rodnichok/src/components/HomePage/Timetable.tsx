import {ShiftItem} from "@/components/HomePage/ShiftItem.tsx";

const shifts = [
    { number: 1, dates: "7 июня - 27 июня" },
    { number: 2, dates: "3 июля - 23 июля" },
    { number: 3, dates: "1 августа - 21 августа" }
]

export const Timetable = () => (
    <div className={'w-full flex justify-around Timetable'}>
        <p className={'Timetable__title ml-[2vw]'}>
            Расписание <br />смен:
        </p>
        {shifts.map(shift => (
            <ShiftItem  key={shift.number} number={shift.number} dates={shift.dates} />
        ))}
    </div>
)