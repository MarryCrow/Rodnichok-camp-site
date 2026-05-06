import type { ElementType, ReactNode } from "react";

interface TextStrokeProps {
    as?: ElementType;
    text: string;
    children?: ReactNode;
    className?: string;
}

export const TextStroke = ({
                               as: Component = "span",
                               text,
                               children,
                               className = "",
                           }: TextStrokeProps) => {
    return (
        <Component
            className={`font_Stroked ${className}`}
            data-text={text}
        >
            {children ?? text}
        </Component>
    );
};