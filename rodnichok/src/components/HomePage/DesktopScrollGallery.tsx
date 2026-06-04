import { motion } from "motion/react";

import { ScrollImg } from "@/components/HomePage/ScrollImg.tsx";
import { TextStroke } from "@/components/ui/TextStroke.tsx";

import background_strip from "@/assets/img/Home/Home_strip_gradient.png";

import {
    ENTRY_ANIMATION,
    POSITION_TARGETS,
    POSITIONS,
    type Position,
    useDesktopScrollGallery,
} from "@/hooks/useDesktopScrollGallery.tsx";

const SIZE_STYLES: Record<Position, string> = {
    [-2]:
        "w-[48vw] h-[62.4vw] sm:w-[36vw] sm:h-[46.8vw] md:w-[26.4vw] md:h-[33.6vw] lg:w-[19.2vw] lg:h-[25.2vw]",
    [-1]:
        "w-[55.2vw] h-[72vw] sm:w-[42vw] sm:h-[54vw] md:w-[31.2vw] md:h-[40.8vw] lg:w-[22.8vw] lg:h-[30vw]",
    [0]:
        "w-[64.8vw] h-[82.8vw] sm:w-[50.4vw] sm:h-[64.8vw] md:w-[37.2vw] md:h-[48vw] lg:w-[26.4vw] lg:h-[33.6vw]",
    [1]:
        "w-[55.2vw] h-[72vw] sm:w-[42vw] sm:h-[54vw] md:w-[31.2vw] md:h-[40.8vw] lg:w-[22.8vw] lg:h-[30vw]",
    [2]:
        "w-[48vw] h-[62.4vw] sm:w-[36vw] sm:h-[46.8vw] md:w-[26.4vw] md:h-[33.6vw] lg:w-[19.2vw] lg:h-[25.2vw]",
};

const images = Object.entries(ScrollImg).map(([name, src]) => ({
    name,
    src,
}));

export const DesktopScrollGallery = () => {
    const {
        totalImages,
        positionMap,
        isAnimating,
        animationDirection,
        goToPrev,
        goToNext,
    } = useDesktopScrollGallery({ images });

    if (totalImages === 0) return null;

    return (
        <section className="relative overflow-hidden top-0">
            <TextStroke
                as="h2"
                className="font__Home-body text-homeTitle w-full text-[30px] sm:text-[40px] lg:text-[4vw] mt-[clamp(1px,3vw,60px)] mb-[clamp(40px,5vw,80px)] text-center"
            >
                Галерея «Родничка»
            </TextStroke>

            <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-10">
                <div className="relative h-[80vw] sm:h-[62vw] md:h-[46vw] lg:h-[32vw]">
                    {POSITIONS.map((position) => {
                        const item = positionMap[position];

                        if (!item) return null;

                        const target = POSITION_TARGETS[position];
                        const sizeClass = SIZE_STYLES[position];
                        const isNewCard =
                            item.isNew && item.direction === animationDirection;

                        const animateProps = isNewCard
                            ? item.direction === "right"
                                ? {
                                    initial: ENTRY_ANIMATION.right.initial,
                                    animate: ENTRY_ANIMATION.right.animate,
                                    transition: {
                                        duration: 1,
                                        ease: [0.32, 0.72, 0, 1] as [
                                            number,
                                            number,
                                            number,
                                            number,
                                        ],
                                    },
                                }
                                : {
                                    initial: ENTRY_ANIMATION.left.initial,
                                    animate: ENTRY_ANIMATION.left.animate,
                                    transition: {
                                        duration: 1,
                                        ease: [0.32, 0.72, 0, 1] as [
                                            number,
                                            number,
                                            number,
                                            number,
                                        ],
                                    },
                                }
                            : {
                                initial: false as const,
                                animate: {
                                    x: target.x,
                                    scale: target.scale,
                                    opacity: target.opacity,
                                },
                                transition: {
                                    duration: 1,
                                    ease: [0.32, 0.72, 0, 1] as [
                                        number,
                                        number,
                                        number,
                                        number,
                                    ],
                                },
                            };

                        return (
                            <motion.article
                                key={item.id}
                                {...animateProps}
                                style={{
                                    zIndex: isNewCard ? 5 : target.zIndex,
                                    filter: `brightness(${position === 0 ? 1.2 : 0.7})`,
                                }}
                                className={`
                                 absolute left-1/2 top-1/2 -translate-y-1/2
                                 rounded-[24px] overflow-hidden shadow-xl
                                 ${sizeClass}
                                `}
                            >
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    draggable={false}
                                    loading={position === 0 ? "eager" : "lazy"}
                                    className="h-full w-full object-cover pointer-events-none select-none"
                                />
                            </motion.article>
                        );
                    })}

                    <button
                        type="button"
                        onClick={goToPrev}
                        disabled={isAnimating}
                        aria-label="Предыдущее фото"
                        className="absolute left-0 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/50 px-4 py-2 shadow-lg backdrop-blur transition hover:scale-110 hover:bg-white disabled:opacity-50 disabled:hover:scale-100 sm:left-2 md:left-4"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        onClick={goToNext}
                        disabled={isAnimating}
                        aria-label="Следующее фото"
                        className="absolute right-0 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/50 px-4 py-2 shadow-lg backdrop-blur transition hover:scale-110 hover:bg-white disabled:opacity-50 disabled:hover:scale-100 sm:right-2 md:right-4"
                    >
                        →
                    </button>
                </div>
            </div>

            <img
                src={background_strip}
                alt=""
                className="relative w-full h-auto translate-y-[-1rem] md:translate-y-[-4rem] lg:translate-y-[-8rem] pointer-events-none"
            />
        </section>
    );
};