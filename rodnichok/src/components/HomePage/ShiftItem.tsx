interface ShiftItemProps {
    number: number;
    dates: string;
}

export const ShiftItem = ({ number, dates }: ShiftItemProps) => (
    <p className={'Timetable__shift ml-[2vw]'}>
        <span className={'Timetable__shift-title'}> {number} смена: </span> <br/>
        {dates}
    </p>
)