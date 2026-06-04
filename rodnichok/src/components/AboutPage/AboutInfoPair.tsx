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
    descriptionClassName?: string;
    figureClassName?: string;
    imageClassName?: string;
    descriptionPosition?: "top" | "bottom";
}

export const AboutInfoPair = ({
                                   src,
                                   alt,
                                   caption,
                                   text,
                                   iconName,
                                   iconClassName = "",
                                   descriptionClassName = "",
                                   figureClassName = "",
                                   imageClassName = "",
                                   descriptionPosition = "top",
                               }: AboutInfoBlockProps) => {
    const description = text && (
        <div className={`about__description ${descriptionClassName}`}>
            {iconName && (
                <Icon
                    name={iconName}
                    className={`about_icon ${iconClassName}`}
                />
            )}

            <p className="relative z-10">{text}</p>
        </div>
    );

    const figure = (
        <AboutFigureVertical
            className={figureClassName}
            imageClassName={imageClassName}
            src={src}
            alt={alt}
            caption={caption}
        />
    );

    if (descriptionPosition === "bottom") {
        return (
            <>
                {figure}
                {description}
            </>
        );
    }

    return (
        <>
            {description}
            {figure}
        </>
    );
};