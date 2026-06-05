import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { CampLifeModule } from "@/data/campLifeModules";

type CampLifeCarouselProps = {
    modules: CampLifeModule[];
};

function CampLifeImages({ images, title, onImageClick }: { images: string[]; title: string; onImageClick: (image: string, alt:string) => void }) {
    const shownImages = images.slice(0, 3);

    if (shownImages.length === 0) {
        return null;
    }

    if (shownImages.length === 1) {
        return (
            <div className="h-[320px] w-fit md:h-[520px] overflow-hidden rounded-[28px] m-auto">
                <img
                    src={shownImages[0]}
                    alt={title}
                    onClick={() => onImageClick(shownImages[0], title)}
                    className="h-full object-cover"
                    loading="lazy"
                />
            </div>
        )
    }

    if (shownImages.length === 2) {
        return (
            <div className="grid m-auto h-[400px] w-[95%] tn:h-[480px] md:h-[580px] md:w-[75%] grid-flow-col grid-rows-2 gap-3">
                {shownImages.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-[28px]">
                        <img
                            src={image}
                            alt={`${title} (${index+1})`}
                            onClick={() => onImageClick(image, `${title} (${index+1})`)}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="grid h-[350px] tn:h-[480px] md:h-[580px] grid-flow-col grid-cols-2 grid-rows-[1.1fr_0.9fr] gap-3">
            <div className="col-span-2 lg:w-[75%] mx-auto overflow-hidden rounded-[28px]">
                <img
                    src={shownImages[0]}
                    alt={`${title} 1`}
                    onClick={() => onImageClick(shownImages[0], `${title} 1`)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>

            {shownImages.slice(1).map((image, index) => (
                <div key={image} className="overflow-hidden rounded-[28px]">
                    <img
                        src={image}
                        alt={`${title} ${index + 2}`}
                        onClick={() => onImageClick(image, `${title} ${index + 2}`)}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}

function CampLifeCard({
                          module,
                          onImageClick,
}: {
    module: CampLifeModule;
    onImageClick: (image: string, alt:string) => void;
}) {
    const Icon = module.icon;

    return (
        <article className="grid h-[800px] lg:h-[650px] gap-2 rounded-[36px] border border-black/20 p-4 shadow-lg md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:p-8 md:shadow-xl">
            <CampLifeImages images={module.images} title={module.title} onImageClick={onImageClick} />

            <div className="flex max-md:mt-6 min-h-0 flex-col justify-start md:justify-center">
                <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-themeGreen/20 text-themeGreen">
                        <Icon size={30} strokeWidth={2.4} />
                    </div>

                    <h2 className="text-2xl font-bold leading-tight text-pageTitle md:text-4xl">
                        {module.title}
                    </h2>
                </div>

                <div className="max-h-[350px] space-y-4 overflow-y-auto pr-2 text-sm leading-7 text-[#5f4a25] md:max-h-[390px] md:text-base">
                    {module.text.map((paragraph) => (
                        <p key={paragraph} className="whitespace-pre-line indent-4 md:indent-8">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
}

export function CampLifeCarousel({ modules }: CampLifeCarouselProps ) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        loop: true,
        containScroll: "trimSnaps"
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [openedImage, setOpenedImage] = useState<string | null>(null);
    const [openedImageAlt, setOpenedImageAlt] = useState("");

    const openImage = (image: string, alt: string) => {
        setOpenedImage(image);
        setOpenedImageAlt(alt);
    }

    const closeImage = () => {
        setOpenedImage(null);
        setOpenedImageAlt("");
    }

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        }
    }, [emblaApi, onSelect]);

    return (
        <section className="relative mx-auto w-full max-w-[1400px] px-4 py-2 md:px-8">
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 z-[1] flex flex-row justify-between max-md:hidden">
                <button
                    type="button"
                    onClick={() => emblaApi?.scrollPrev()}
                    disabled={!canScrollPrev}
                    className="relative rounded-full bg-white/80 px-5 py-3 font-bold shadow-xl border border-gray-300 transition-transform duration-300 ease-out hover:scale-110 active:scale-[1.2] disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100"
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={() => emblaApi?.scrollNext()}
                    disabled={!canScrollNext}
                    className="relative rounded-full bg-white/80 px-5 py-3 font-bold shadow-xl border border-gray-300 transition-transform duration-300 ease-out hover:scale-110 active:scale-[1.2] disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100"
                >
                    →
                </button>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y py-6 md:py-10">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className="min-w-0 flex-[0_0_100%] px-4 md:px-6"
                        >
                            <CampLifeCard module={module} onImageClick={openImage}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-0 flex justify-center gap-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Перейти к модулю ${index + 1}`}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-3 rounded-full transition-all ${
                            selectedIndex === index
                                ? "w-8 bg-themeOrange"
                                : "w-3 bg-themeGreen/40"
                        }`}
                    />
                ))}
            </div>

            {openedImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
                    onClick={closeImage}
                >
                    <button
                        type="button"
                        onClick={closeImage}
                        className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xl font-bold text-black shadow-lg transition hover:scale-110"

                    >
                        ×
                    </button>

                    <img
                        src={openedImage}
                        alt={openedImageAlt}
                        onClick={(event) => event.stopPropagation()}
                        className="max-h-[90vh] max-w-[95vw] rounded-[24px] object-contain shadow-2xl"
                    />
                </div>
            )}
        </section>
    )
}
