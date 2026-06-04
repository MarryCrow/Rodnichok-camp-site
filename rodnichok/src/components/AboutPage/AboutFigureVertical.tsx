import type { ReactNode } from "react";

interface AboutFigureProps {
    src: string;
    alt: string;
    caption: ReactNode;
    className?: string;
    imageClassName?: string;
}

export const AboutFigureVertical = ({
                                        src,
                                        alt,
                                        caption,
                                        className = "",
                                        imageClassName = "w-full max-w-[260px] tn:max-w-[360px]",
                                    }: AboutFigureProps) => {
    return (
        <figure className={`justify-self-center flex flex-col items-center ${className}`}>
            <img
                src={src}
                alt={alt}
                className={`${imageClassName} object-cover shadow-2xl rounded-2xl`}
            />

            <figcaption className="relative text-center font__About__description w-fit z-1 bg-gray-100 px-2 py-2 rounded-2xl -mt-4 shadow-xl">
                {caption}
            </figcaption>
        </figure>
    );
};

