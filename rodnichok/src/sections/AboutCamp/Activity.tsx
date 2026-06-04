import { TextStroke } from "@/components/ui/TextStroke.tsx";
import { AboutInfoBlock } from "@/components/AboutPage/AboutInfoBlock.tsx";
import { AboutImg } from "@/components/AboutPage/AboutImg.tsx";
import {Icon} from "@/components/ui/icons/Icon.tsx";

export const Activity = () => {
    return (
        <>
            <TextStroke
                as="h2"
                className="relative w-full mt-[60px] tn:mt-[90px] md:mt-[130px] lg:mt-[180px] 2xl:mt-[250px] font__Home-body text-homeTitle text-[30px] sm:text-[40px] lg:text-6xl text-center"
            >
                Активный <br className="tn:hidden" />
                досуг
            </TextStroke>
            <section className="relative w-[90%] h-auto mt-5 lg:mt-20 mx-auto mb-[4rem] md:-mb-[2rem]">
                <div
                    className="
                    w-full grid grid-cols-1 max-md:gap-y-10
                    md:grid-cols-3 md:grid-rows-2
                    md:gap-x-6 md:items-start
                    "
                >
                    <AboutInfoBlock
                        figureClassName="md:col-start-1 md:row-start-1"
                        imageClassName="w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] object-right md:max-w-[clamp(250px,22vw,400px)] max-md:border-2 max-md:border-green-100"
                        src={AboutImg.field}
                        alt="Футбольное поле"
                        caption="Футбольное поле"
                    />

                    <AboutInfoBlock
                        figureClassName="md:col-start-3 md:row-start-1 max-md:-mt-6"
                        imageClassName="w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] md:max-w-[clamp(250px,22vw,400px)] max-md:border-2 max-md:border-green-100"
                        src={AboutImg.voleyball}
                        alt="Волейбольное поле"
                        caption="Волейбольное поле"
                    />

                    <div
                        className="
                        md:col-start-2 md:row-start-1 max-md:-mt-6
                        flex flex-col items-center gap-4 lg:gap-8
                        "
                    >
                        <div className="about__description text-center max-md:border-green-100 max-md:mb-6">
                            <Icon
                                name="football_ball"
                                className="about_icon bg-green-100 text-themeGreen"
                            />
                            <p className="relative z-10">
                                Спортивные игры проходят на двух оборудованных полях: футбольном и волейбольном.
                            </p>
                        </div>

                        <AboutInfoBlock
                            className="md:mt-[1rem]"
                            iconName="singing"
                            iconClassName="bg-orange-200 text-themeOrange"
                            descriptionPosition="bottom"
                            descriptionClassName="text-center max-md:border-orange-200"
                            imageClassName="w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] md:max-w-[clamp(250px,22vw,400px)] max-md:border-2 max-md:border-orange-200"
                            src={AboutImg.scene}
                            alt="Летняя эстрада"
                            caption="Летняя эстрада"
                            text={
                                <>
                                    Для проведения общелагерных мероприятий и концертов на территории лагеря находится летняя эстрада.
                                </>
                            }
                        />
                    </div>

                    <AboutInfoBlock
                        className="md:col-start-1 md:row-start-2 md:-mt-[9rem]"
                        iconName="canteen"
                        iconClassName="bg-green-100 text-themeGreen"
                        descriptionPosition="bottom"
                        descriptionClassName="text-center max-md:border-green-100"
                        imageClassName="relative w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] object-right md:max-w-[clamp(250px,22vw,400px)] max-md:border-2 max-md:border-green-100"
                        src={AboutImg.canteen}
                        alt="Столовая"
                        caption="Столовая"
                        text={
                            <>
                                Для детей в лагере предусмотрено пятиразовое сбалансированное питание.
                            </>
                        }
                    />

                    <AboutInfoBlock
                        className="md:mt-[1rem]"
                        iconName="dancing"
                        iconClassName="bg-orange-200 text-themeOrange"
                        descriptionPosition="bottom"
                        descriptionClassName="text-center max-md:border-orange-200"
                        figureClassName="md:mt-8 md:col-start-2 md:row-start-2"
                        imageClassName="relative w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] object-center md:max-w-[clamp(250px,22vw,400px)] max-md:border-2 max-md:border-orange-200"
                        src={AboutImg.dancefloor}
                        alt="Танцевальная площадка"
                        caption="Танцевальная площадка"
                        text={
                            <>
                                Вечерние дискотеки и мероприятия, требующие активного участия детей, проводятся на танцполе.
                            </>
                        }
                    />

                    <AboutInfoBlock
                        iconName="swimming_pool"
                        iconClassName="bg-green-100 text-themeGreen"
                        descriptionPosition="bottom"
                        descriptionClassName="text-center max-md:border-green-100"
                        figureClassName="md:col-start-3 md:row-start-2 md:-mt-[9rem]"
                        imageClassName="relative w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] object-right md:max-w-[clamp(250px,22vw,400px)] max-md:border-2 max-md:border-green-100"
                        src={AboutImg.swimming_pool}
                        alt="Бассейн"
                        caption="Бассейн"
                        text={
                            <>
                                «Родничок» оборудован бассейном для купания детей всех возрастов при соответствующих погодных условиях.
                            </>
                        }
                    />
                </div>
            </section>
        </>
    );
};