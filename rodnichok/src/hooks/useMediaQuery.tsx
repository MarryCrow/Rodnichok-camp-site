import {useEffect, useState} from "react";

export function useMediaQuery(query: string) {
    const getMatch = () => {
        return typeof window !== 'undefined'
            ? window.matchMedia(query).matches
            : false;
    }

    const [matches, setMatches] = useState(getMatch);

    useEffect(() => {
        const media = window.matchMedia(query);

        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        setMatches(media.matches);

        media.addEventListener("change", listener);

        return () => {
            media.removeEventListener("change", listener);
        };
    }, [query]);

    return matches;
}