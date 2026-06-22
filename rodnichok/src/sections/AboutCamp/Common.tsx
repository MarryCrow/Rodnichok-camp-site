import {TextStroke} from "@/components/ui/TextStroke.tsx";
import {AboutImg} from "@/components/AboutPage/AboutImg.tsx";
import {AboutFigureVertical} from "@/components/AboutPage/AboutFigureVertical.tsx";
import { AboutInfoPair } from "@/components/AboutPage/AboutInfoPair.tsx";

export const Common = () => {
    return (
        <>
            <TextStroke
                as="h1"
                className="relative w-full mt-[90px] lg:mt-[150px] font__Home-body text-homeTitle text-[30px] sm:text-[40px] lg:text-6xl text-center"
            >
                ОБЩАЯ <br className="md:hidden"/>ИНФОРМАЦИЯ
            </TextStroke>
            <section className="relative w-[90%] h-auto mt-5 lg:mt-20 mx-auto">
                <img
                src={AboutImg.about_corner}
                alt=""
                className="absolute pointer-events-none right-0 rounded-tr-2xl max-md:hidden -translate-y-1/2 w-[clamp(100px,30vw,550px)]"
                />
                <img
                    src={AboutImg.about_corner}
                    alt=""
                    className="absolute -scale-x-100 pointer-events-none left-0 rounded-tr-2xl max-md:hidden -translate-y-1/2 w-[clamp(100px,30vw,550px)]"
                />

                <div className="w-full mx-auto flex flex-col items-center">
                    <p className="about__text--width">
                        Детский оздоровительный лагерь «Родничок» расположен недалеко от города Кувандык в Оренбургской области, в самом центре живописной долины между отрогами Уральских гор.
                    </p>

                    <div className="about__image-main">
                        <img
                            src={AboutImg.main}
                            alt="Main about photo"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <p className="about__text--width mt-8 lg:mt-16">
                        У «Родничка» есть свой символ в виде оленя, который, согласно легендам, спас лагерь от пожара. Также есть два главных гимна:
                    </p>

                    <div className="
                    mt-6 md:mb-8 w-full max-w-[900px] mx-auto
                    grid grid-cols-2
                    grid-rows-1
                    ">
                        <AboutFigureVertical
                            className="md:col-start-1"
                            imageClassName="md:w-[clamp(160px,24vw,350px)] max-md:w-[clamp(160px,40vw,250px)] aspect-[2/3]"
                            src={AboutImg.gimn_Rodnichok}
                            alt="Гимн «Родничка»"
                            caption={
                                <>
                                    Гимн «Родничка»
                                </>
                            }
                        />

                        <AboutFigureVertical
                            className="md:col-start-2"
                            imageClassName="w-[clamp(160px,24vw,350px)] max-md:w-[clamp(160px,40vw,250px)] aspect-[2/3]"
                            src={AboutImg.gimn_YUZHD}
                            alt="Гимн ЮУЖД"
                            caption={
                                <>
                                    Гимн ЮУЖД
                                </>
                            }
                        />
                    </div>

                    <img
                    src={AboutImg.Strip_gradient}
                    alt=""
                    className="md:hidden relative -mt-4 w-screen max-w-none pointer-events-none"
                    />

                    <div
                        className="
                        mt-12 w-full
                        grid grid-cols-1 gap-4
                        md:grid-cols-5
                        md:grid-rows-1
                        md:gap-x-6
                        md:items-start
                        "
                    >
                        <AboutInfoPair
                            iconName="about_house"
                            iconClassName="bg-orange-200 text-themeOrange"
                            descriptionClassName="
                            text-center md:text-start
                            max-md:border-orange-200 max-md:-mt-8
                            md:col-start-2 md:col-end-4 md:row-start-1
                            "
                            figureClassName="md:col-start-1 md:row-start-1"
                            imageClassName="w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] md:max-w-[360px] md:aspect-[2/3] max-md:border-2 max-md:border-orange-200"
                            src={AboutImg.domik_child}
                            alt="Корпус младших отрядов"
                            caption={
                                <>
                                    Корпус младших
                                    <br />
                                    отрядов
                                </>
                            }
                            text={
                                <>
                                    Дети младших возрастов размещаются в трёхэтажном тёплом корпусе по 4–6 человек в комнате
                                    &#40;душ и санузел на этажах&#41;.
                                </>
                            }
                        />

                        <AboutInfoPair
                            iconName="about_house"
                            iconClassName="bg-green-100 text-themeGreen"
                            descriptionClassName="
                            text-center md:text-start
                            max-md:border-green-100 max-md:mt-8
                            md:col-start-3 md:col-end-5 md:row-start-1
                            md:mt-[7rem] lg:mt-[6rem] xl:mt-[8rem]
                            "
                            figureClassName="md:col-start-2 md:row-start-1 md:mt-[7rem] lg:mt-[6rem] xl:mt-[8rem]"
                            imageClassName="w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] object-[center_20%] md:max-w-[360px] md:aspect-[2/3] max-md:border-2 max-md:border-green-100"
                            src={AboutImg.domik_adult}
                            alt="Домик старших отрядов"
                            caption={
                                <>
                                    Домик старших
                                    <br />
                                    отрядов
                                </>
                            }
                            text={
                                <>
                                    Старшие отряды располагаются в одноэтажных летних домиках по 15 человек в комнате
                                    &#40;удобства на улице&#41;.
                                </>
                            }
                        />

                        <AboutInfoPair
                            iconName="about_gazebo"
                            iconClassName="bg-orange-200 text-themeOrange"
                            descriptionClassName="
                            text-center md:text-start
                            max-md:border-orange-200 max-md:mt-8
                            md:col-start-4 md:col-end-6 md:row-start-1
                            md:mt-[14rem] lg:mt-[12rem] xl:mt-[16rem]
                            "
                            figureClassName="md:col-start-3 md:row-start-1 md:mt-[14rem] lg:mt-[12rem] xl:mt-[16rem]"
                            imageClassName="w-full max-w-[320px] tn:max-w-[430px] aspect-[4/3] object-bottom md:max-w-[360px] md:aspect-[2/3] max-md:border-2 max-md:border-orange-200"
                            src={AboutImg.besedka}
                            alt="Беседка отряда"
                            caption="Беседка отряда"
                            text={
                                <>
                                    Также у каждого отряда есть своя беседка, в которой можно организовывать различный досуг
                                    &#40;от повседневных бесед до игр в шахматы и настольный теннис&#41;.
                                </>
                            }
                        />
                    </div>
                </div>
                <img
                    src={AboutImg.Strip_gradient}
                    alt=""
                    className="absolute left-1/2 -translate-x-1/2 -mt-[clamp(10px,8vw,150px)] z-[-1] scale-x-100 -scale-y-100 w-screen max-w-none pointer-events-none"
                />
            </section>
        </>
    );
}