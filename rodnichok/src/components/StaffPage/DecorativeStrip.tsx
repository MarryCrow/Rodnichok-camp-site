import StripGradient from "@/assets/img/StaffPage/Strip_gradient.png";
import StripGradientMobile from "@/assets/img/StaffPage/Strip_gradient_mobile.png";

type DecorativeStripProps = {
    reverse?: boolean;
};

export function DecorativeStrip({ reverse = false }: DecorativeStripProps) {
    return (
        <div className="pointer-events-none relative my-5 sm:my-10 h-30 sm:h-[10rem] w-full overflow-hidden">
            <img
                src={StripGradientMobile}
                alt=""
                aria-hidden="true"
                className={[
                    "absolute inset-0 h-full w-full object-fill sm:hidden",
                    reverse ? "scale-x-[-1]" : "",
                ].join(" ")}
            />

            <img
                src={StripGradient}
                alt=""
                aria-hidden="true"
                className={[
                    "absolute inset-0 hidden h-full w-full object-fill sm:block",
                    reverse ? "scale-x-[-1]" : "",
                ].join(" ")}
            />
        </div>
    );
}