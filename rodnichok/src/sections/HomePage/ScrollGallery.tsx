import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { ScrollImg } from "@/components/HomePage/ScrollImg.tsx";
import background_strip from "@/assets/img/Home/Home_strip_gradient.png";

type Direction = "left" | "right";
type Position = -2 | -1 | 0 | 1 | 2;

const POSITIONS: Position[] = [-2, -1, 0, 1, 2];

const POSITION_TARGETS: Record<
    Position,
    { x: string; scale: number; opacity: number; zIndex: number }
> = {
    [-2]: { x: "-230%", scale: 0.7, opacity: 0.8, zIndex: 10 },
    [-1]: { x: "-140%", scale: 0.85, opacity: 1, zIndex: 20 },
    [0]: { x: "-50%", scale: 1.1, opacity: 1, zIndex: 30 },
    [1]: { x: "40%", scale: 0.85, opacity: 1, zIndex: 20 },
    [2]: { x: "130%", scale: 0.7, opacity: 0.8, zIndex: 10 },
};

const SIZE_STYLES: Record<Position, string> = {
    [-2]:
        "w-[40vw] h-[52vw] sm:w-[30vw] sm:h-[39vw] md:w-[22vw] md:h-[28vw] lg:w-[16vw] lg:h-[21vw] ",
    [-1]:
        "w-[46vw] h-[60vw] sm:w-[35vw] sm:h-[45vw] md:w-[26vw] md:h-[34vw] lg:w-[19vw] lg:h-[25vw]",
    [0]:
        "w-[54vw] h-[69vw] sm:w-[42vw] sm:h-[54vw] md:w-[31vw] md:h-[40vw] lg:w-[22vw] lg:h-[28vw]",
    [1]:
        "w-[46vw] h-[60vw] sm:w-[35vw] sm:h-[45vw] md:w-[26vw] md:h-[34vw] lg:w-[19vw] lg:h-[25vw]",
    [2]:
        "w-[40vw] h-[52vw] sm:w-[30vw] sm:h-[39vw] md:w-[22vw] md:h-[28vw] lg:w-[16vw] lg:h-[21vw]",
};

// Анимация входа для новых карточек
// При движении вправо (картинки уходят влево) — новые приходят справа
// При движении влево (картинки уходят вправо) — новые приходят слева
const ENTRY_ANIMATION = {
    right: {
        initial: { x: "230%", scale: 0.5, opacity: 0 },      // Старт: справа
        animate: { x: "130%", scale: 0.7, opacity: 0.8 },    // Финиш: позиция 2
    },
    left: {
        initial: { x: "-330%", scale: 0.5, opacity: 0 },     // Старт: слева
        animate: { x: "-230%", scale: 0.7, opacity: 0.8 },   // Финиш: позиция -2
    },
};

interface GalleryItem {
    id: string;
    imageIndex: number;
    name: string;
    src: string;
    isNew?: boolean;
    direction?: Direction;
}

export const ScrollGallery = () => {
    const images = useMemo(() => Object.entries(ScrollImg), []);
    const totalImages = images.length;

    const createItem = (imageIndex: number): Omit<GalleryItem, 'isNew' | 'direction'> => {
        const [name, src] = images[imageIndex];
        return {
            id: `card-${imageIndex}-${Date.now()}`,
            imageIndex,
            name,
            src,
        };
    };

    const [positionMap, setPositionMap] = useState<Record<Position, GalleryItem>>(() => {
        const map = {} as Record<Position, GalleryItem>;

        POSITIONS.forEach((position, idx) => {
            const imageIndex = (idx - 2 + totalImages) % totalImages;
            map[position] = {
                ...createItem(imageIndex),
                isNew: false,
            };
        });

        return map;
    });

    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<Direction>("right");
    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    const shiftGallery = (direction: Direction) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setAnimationDirection(direction);

        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
        }

        setPositionMap((prevMap) => {
            const newMap = {} as Record<Position, GalleryItem>;

            if (direction === "right") {
                // При клике "вправо" картинки физически сдвигаются влево
                // Карточка с позиции -1 → -2, 0 → -1, 1 → 0, 2 → 1
                newMap[-2] = { ...prevMap[-1], isNew: false };
                newMap[-1] = { ...prevMap[0], isNew: false };
                newMap[0] = { ...prevMap[1], isNew: false };
                newMap[1] = { ...prevMap[2], isNew: false };

                // Новая карточка появляется справа на позиции 2
                const nextIndex = (prevMap[2].imageIndex + 1) % totalImages;
                newMap[2] = {
                    ...createItem(nextIndex),
                    isNew: true,
                    direction: "right",
                };
            } else {
                // При клике "влево" картинки физически сдвигаются вправо
                // Карточка с позиции 1 → 2, 0 → 1, -1 → 0, -2 → -1
                newMap[2] = { ...prevMap[1], isNew: false };
                newMap[1] = { ...prevMap[0], isNew: false };
                newMap[0] = { ...prevMap[-1], isNew: false };
                newMap[-1] = { ...prevMap[-2], isNew: false };

                // Новая карточка появляется слева на позиции -2
                const prevIndex = (prevMap[-2].imageIndex - 1 + totalImages) % totalImages;
                newMap[-2] = {
                    ...createItem(prevIndex),
                    isNew: true,
                    direction: "left",
                };
            }

            return newMap;
        });

        animationTimeoutRef.current = setTimeout(() => {
            setPositionMap((prevMap) => {
                const cleanedMap = { ...prevMap };

                POSITIONS.forEach((pos) => {
                    if (cleanedMap[pos]?.isNew) {
                        cleanedMap[pos] = {
                            ...cleanedMap[pos],
                            isNew: false,
                            direction: undefined,
                        };
                    }
                });

                return cleanedMap;
            });

            setIsAnimating(false);
        }, 1000);
    };

    const goToNext = () => shiftGallery("right");
    const goToPrev = () => shiftGallery("left");

    if (totalImages === 0) return null;

    return (
        <section className="relative overflow-hidden">
            <h2
                className="font__Home-body mt-[clamp(1px,4vw,80px)] mb-[clamp(1px,3vw,60px)] flex items-center justify-center"
                data-text="Галерея «Родничка»"
            >
                Галерея «Родничка»
            </h2>

            <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-10">
                <div className="relative h-[92vw] sm:h-[62vw] md:h-[46vw] lg:h-[32vw]">
                    {POSITIONS.map((position) => {
                        const item = positionMap[position];
                        if (!item) return null;

                        const target = POSITION_TARGETS[position];
                        const sizeClass = SIZE_STYLES[position];
                        const isNewCard = item.isNew && item.direction === animationDirection;

                        const animateProps = isNewCard
                            ? item.direction === "right"
                                ? {
                                    initial: ENTRY_ANIMATION.right.initial,
                                    animate: ENTRY_ANIMATION.right.animate,
                                    transition: {
                                        duration: 1,
                                        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
                                    },
                                }
                                : {
                                    initial: ENTRY_ANIMATION.left.initial,
                                    animate: ENTRY_ANIMATION.left.animate,
                                    transition: {
                                        duration: 1,
                                        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
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
                                    ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
                                },
                            };

                        return (
                            <motion.article
                                key={item.id}
                                {...animateProps}
                                style={{
                                    zIndex: isNewCard ? 5 : target.zIndex,
                                    filter: `brightness(${position === 0 ? 1.2 : 0.7})`
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
                        className="
                            absolute left-0 top-1/2 z-40 -translate-y-1/2
                            rounded-full bg-white/50 p-2 shadow-lg backdrop-blur
                            transition hover:scale-120 hover:bg-white
                            disabled:opacity-50 disabled:hover:scale-100
                            sm:left-2 md:left-4
                        "
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        type="button"
                        onClick={goToNext}
                        disabled={isAnimating}
                        aria-label="Следующее фото"
                        className="
                            absolute right-0 top-1/2 z-40 -translate-y-1/2
                            rounded-full bg-white/50 p-2 shadow-lg backdrop-blur
                            transition hover:scale-120 hover:bg-white
                            disabled:opacity-50 disabled:hover:scale-100
                            sm:right-2 md:right-4
                        "
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>

            <img
                src={background_strip}
                alt="background-strip_gradient"
                className="relative w-full h-auto translate-y-[-1rem] md:translate-y-[-3rem] lg:translate-y-[-5rem] pointer-events-none"
            />
        </section>
    );
};