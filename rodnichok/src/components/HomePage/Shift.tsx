import {Icon} from '@/components/ui/icons/Icon'

type Props = {
    className?: string;
    number: number;
    dates: string[];
    color?: string;
}

export const Shift = ({ number, dates, className, color }: Props) => {
        return (
            <div className={`flex items-center gap-15 ${className}`}>
                <div className={`flex flex-col ${color} gap-10 text-themeGreen text-xl comfortaa-700 text-center ml-2 mt-3`}>
                    <p className="text-[55px] leading-0">{number}</p>
                    <p className='leading-0'>Смена</p>
                </div>

                <div className="flex items-center gap-5">
                    <Icon name="Calendar_icon" className={`w-[10vw] h-auto ${color}`} />
                    <div className="flex flex-col comfortaa-700 text-xl">   {/* колонка для строк дат */}
                        {dates.map((line, idx) => (
                            <span key={idx}>{line}</span>
                        ))}
                    </div>
                </div>
            </div>
        )

}