import type { ElementType, ReactNode } from "react";

interface TextStrokeProps {
    as?: ElementType;
    children: ReactNode;
    className?: string;
}

export const TextStroke = ({
                               as: Component = "span",
                               children,
                               className = "",
                           }: TextStrokeProps) => {
    return (
        <Component className={`relative inline-block ${className}`}>
            <span
                aria-hidden="true"
                className="absolute inset-0 z-[0] text-transparent font_Stroked"
            >
                {children}
            </span>

            <span className="relative">
                {children}
            </span>
        </Component>
    );
};