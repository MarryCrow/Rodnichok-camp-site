import {TextStroke} from "@/components/ui/TextStroke.tsx";

export const Common = () => {
    return (
        <section className="relative w-[90%] h-auto mx-auto mt-[110px]">
            <TextStroke
                as="h1"
                text="ОБЩАЯ ИНФОРМАЦИЯ"
                className="relative font__Home-body text-pageTitle text-[30px] sm:text-[40px] lg:text-[4vw] text-center mb-[clamp(40px,5vw,80px)]"
            >
                ОБЩАЯ ИНФОРМАЦИЯ
            </TextStroke>
        </section>
    );
}