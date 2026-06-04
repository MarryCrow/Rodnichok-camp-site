import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ScrollImg } from "@/components/HomePage/ScrollImg.tsx";
import {TextStroke} from "@/components/ui/TextStroke.tsx";
import background_strip from "@/assets/img/Home/Home_strip_gradient.png";

export const MobileScrollGallery = () => {
    const images = useMemo(
        () =>
            Object.entries(ScrollImg).map(([name, src]) => ({
                name,
                src: String(src),
            })),
        []
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: false,
        dragFree: false,
    });

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            if (!emblaApi) return;
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }

        onSelect();

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    if (images.length === 0) return null;

    return (
        <section className="relative w-full overflow-hidden py-6">
            <TextStroke as="h2" className="w-full font__Home-body text-homeTitle text-center text-[32px] sm:text-[44px] lg:text-6xl">
                Галерея «Родничка»
            </TextStroke>
            <div className="relative mt-8 lg:mt-14">
                <div ref={emblaRef} className="">
                    <div className="flex flex-nowrap items-center">
                        {images.map(({ name, src }, index) => {
                            const isActive = selectedIndex === index;

                            return (
                                <div
                                    key={name}
                                    className="
                                    min-w-0 shrink-0 grow-0
                                    basis-[75%]
                                    sm:basis-[48%]
                                    md:basis-[34%]
                                    lg:basis-[25%]
                                  "
                                >
                                    <div
                                        className={`
                                         transform-gpu transition-all duration-300 ease-out
                                         ${isActive ? "scale-100 opacity-100" : "scale-[0.9] opacity-80"}
                                        `}
                                    >
                                        <div className="aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_14px_20px_-12px_rgba(0,0,0,0.45)]">
                                            <img
                                                src={src}
                                                alt={`Фото из галереи Родничка ${index + 1}`}
                                                loading="lazy"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={scrollPrev}
                    aria-label="Предыдущее фото"
                    className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md"
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={scrollNext}
                    aria-label="Следующее фото"
                    className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md"
                >
                    →
                </button>
            </div>
            <img
                src={background_strip}
                alt=""
                className="relative w-full h-auto z-[-1] translate-y-[-1rem] md:translate-y-[-4rem] lg:translate-y-[-8rem] pointer-events-none"
            />
        </section>
    );
};