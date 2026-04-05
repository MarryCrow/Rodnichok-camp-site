import { useEffect, useRef } from "react";

export function useHorizontalScroll(speed = 2) {
    const elRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY == 0) return;
                e.preventDefault();

                el.scrollLeft += e.deltaY * speed;
            };
            el.addEventListener("wheel", onWheel, {passive: false});
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [speed]);
    return elRef;
}
