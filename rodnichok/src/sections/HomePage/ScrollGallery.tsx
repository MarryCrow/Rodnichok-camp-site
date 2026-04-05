import {useHorizontalScroll} from "@/components/HomePage/HorizontalScroll.tsx";
import {ScrollImg} from "@/components/HomePage/ScrollImg.tsx";

export const ScrollGallery = () => {
    const scrollRef = useHorizontalScroll(1.5);

    return (
        <div className={"text-[30px]"}>
            <div
                className={'font__Home-body mt-[clamp(1px,4vw,80px)] mb-[clamp(1px,3vw,60px)] inset-0 flex items-center justify-center'}
                data-text='Галерея «Родничка»'
            >
                Галерея «Родничка»
            </div>

            <div ref={scrollRef} className="flex overflow-hidden gap-1 sm:gap-1.5 md:gap-3 lg:gap-5">
                    {Object.entries(ScrollImg).map(([name, src]) => (
                        <div
                            key={name}
                            className="w-[20.8vw] h-[27.73vw] z-1 shrink-0 overflow-hidden"
                        >
                            <img
                                src={src}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}
