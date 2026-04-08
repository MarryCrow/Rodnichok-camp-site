import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {

            let isAdjusting = false;
            const buffer = 20;

            const segmentWidth = el.scrollWidth/3;
            el.scrollLeft = segmentWidth;

            const handleWheel = (e: WheelEvent)=> {
                if (e.deltaY === 0) return;

                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }

            const handleScroll = () => {
                if (isAdjusting) return;

                const segmentWidth = el.scrollWidth / 3;
                const currentScroll = el.scrollLeft;

                if (currentScroll >= 2 * segmentWidth - buffer) {
                    isAdjusting = true;
                    el.scrollLeft = currentScroll - segmentWidth;

                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            isAdjusting = false;
                        });
                    });
                }

                if (currentScroll <= buffer) {
                    isAdjusting = true;
                    el.scrollLeft = segmentWidth + currentScroll;

                    requestAnimationFrame(() => {
                        isAdjusting = false;
                    });
                }
            };

            el.addEventListener("wheel", handleWheel, {passive: false});
            el.addEventListener("scroll", handleScroll);

            return () => {
                el.removeEventListener("wheel", handleWheel);
                el.removeEventListener("scroll", handleScroll);
            };
        }
        }, []);

    return scrollRef;
}
