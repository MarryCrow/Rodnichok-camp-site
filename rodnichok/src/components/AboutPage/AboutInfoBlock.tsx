import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icons/Icon";
import { AboutFigureVertical } from "@/components/AboutPage/AboutFigureVertical.tsx";

interface AboutInfoBlockProps {
    src: string;
    alt: string;
    caption: ReactNode;
    text?: ReactNode;

    iconName?: string;
    iconClassName?: string;

    className?: string;
    descriptionClassName?: string;
    figureClassName?: string;
    imageClassName?: string;

    descriptionPosition?: "top" | "bottom";
}

export const AboutInfoBlock = ({
                                   src,
                                   alt,
                                   caption,
                                   text,
                                   iconName,
                                   iconClassName = "",
                                   className = "",
                                   descriptionClassName = "",
                                   figureClassName = "",
                                   imageClassName = "",
                                   descriptionPosition = "top",
                               }: AboutInfoBlockProps) => {
    const description = text ? (
        <div className={`about__description ${descriptionClassName}`}>
            {iconName && (
                <Icon name={iconName} className={`about_icon ${iconClassName}`} />
            )}

            <p className="relative z-10">{text}</p>
        </div>
    ) : null;

    const figure = (
        <AboutFigureVertical
            className={figureClassName}
            imageClassName={`image--scaled ${imageClassName}`}
            src={src}
            alt={alt}
            caption={caption}
        />
    );

    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            {descriptionPosition === "top" && description}
            {figure}
            {descriptionPosition === "bottom" && description}
        </div>
    );
};