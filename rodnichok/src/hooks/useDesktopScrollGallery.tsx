import { useCallback, useEffect, useRef, useState } from "react";

export type Direction = "left" | "right";
export type Position = -2 | -1 | 0 | 1 | 2;

export const POSITIONS: Position[] = [-2, -1, 0, 1, 2];

export const POSITION_TARGETS: Record<
    Position,
    { x: string; scale: number; opacity: number; zIndex: number }
> = {
    [-2]: { x: "-230%", scale: 0.7, opacity: 0.8, zIndex: 10 },
    [-1]: { x: "-140%", scale: 0.85, opacity: 1, zIndex: 20 },
    [0]: { x: "-50%", scale: 1.1, opacity: 1, zIndex: 30 },
    [1]: { x: "40%", scale: 0.85, opacity: 1, zIndex: 20 },
    [2]: { x: "130%", scale: 0.7, opacity: 0.8, zIndex: 10 },
};

export const ENTRY_ANIMATION = {
    right: {
        initial: { x: "230%", scale: 0.5, opacity: 0 },
        animate: { x: "130%", scale: 0.7, opacity: 0.8 },
    },
    left: {
        initial: { x: "-330%", scale: 0.5, opacity: 0 },
        animate: { x: "-230%", scale: 0.7, opacity: 0.8 },
    },
};

export interface GalleryImage {
    name: string;
    src: string;
}

export interface GalleryItem extends GalleryImage {
    id: string;
    imageIndex: number;
    isNew?: boolean;
    direction?: Direction;
}

interface UseDesktopScrollGalleryParams {
    images: GalleryImage[];
    animationDurationMs?: number;
}

export const useDesktopScrollGallery = ({
                                            images,
                                            animationDurationMs = 200,
                                        }: UseDesktopScrollGalleryParams) => {
    const totalImages = images.length;

    const itemIdRef = useRef(0);
    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const createItem = useCallback(
        (imageIndex: number): Omit<GalleryItem, "isNew" | "direction"> => {
            const image = images[imageIndex];

            return {
                id: `card-${imageIndex}-${itemIdRef.current++}`,
                imageIndex,
                name: image.name,
                src: image.src,
            };
        },
        [images]
    );

    const [positionMap, setPositionMap] = useState<Record<Position, GalleryItem>>(
        () => {
            const map = {} as Record<Position, GalleryItem>;

            POSITIONS.forEach((position, idx) => {
                const imageIndex = (idx - 2 + totalImages) % totalImages;

                map[position] = {
                    ...createItem(imageIndex),
                    isNew: false,
                };
            });

            return map;
        }
    );

    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] =
        useState<Direction>("right");

    const shiftGallery = useCallback(
        (direction: Direction) => {
            if (isAnimating || totalImages === 0) return;

            setIsAnimating(true);
            setAnimationDirection(direction);

            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }

            setPositionMap((prevMap) => {
                const newMap = {} as Record<Position, GalleryItem>;

                if (direction === "right") {
                    newMap[-2] = { ...prevMap[-1], isNew: false };
                    newMap[-1] = { ...prevMap[0], isNew: false };
                    newMap[0] = { ...prevMap[1], isNew: false };
                    newMap[1] = { ...prevMap[2], isNew: false };

                    const nextIndex = (prevMap[2].imageIndex + 1) % totalImages;

                    newMap[2] = {
                        ...createItem(nextIndex),
                        isNew: true,
                        direction: "right",
                    };
                } else {
                    newMap[2] = { ...prevMap[1], isNew: false };
                    newMap[1] = { ...prevMap[0], isNew: false };
                    newMap[0] = { ...prevMap[-1], isNew: false };
                    newMap[-1] = { ...prevMap[-2], isNew: false };

                    const prevIndex =
                        (prevMap[-2].imageIndex - 1 + totalImages) % totalImages;

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

                    POSITIONS.forEach((position) => {
                        if (cleanedMap[position]?.isNew) {
                            cleanedMap[position] = {
                                ...cleanedMap[position],
                                isNew: false,
                                direction: undefined,
                            };
                        }
                    });

                    return cleanedMap;
                });

                setIsAnimating(false);
            }, animationDurationMs);
        },
        [animationDurationMs, createItem, isAnimating, totalImages]
    );

    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    return {
        totalImages,
        positionMap,
        isAnimating,
        animationDirection,
        goToNext: () => shiftGallery("right"),
        goToPrev: () => shiftGallery("left"),
    };
};