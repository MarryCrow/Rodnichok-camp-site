import {HomeImg} from "@/components/HomePage/HomeImg.tsx";

export const QuoteFrame = () => (
    <div className={'Quote__frame'}>
        <img
            src={HomeImg['Quote_frame']}
            className={'w-full h-auto block pointer-events-none'}
            alt={'Quote_frame'}
        />
        <div className={'absolute Quote__image'}>
            <p className={'Quote__text text-[3.4vw] md:text-[1.8vw] lg:text-[1.2vw] indent-[2vw]'}>
                Наш любимый «Родничок» - место, которое дарит каждому ребёнку эмоции и друзей на всю жизнь.
            </p>
            <p className={'hidden lg:block Quote__text text-[1.2vw] indent-[2vw]'}>
                Он собрал в себе самые лучшие качества, которые необходимы для лагеря, за 95 лет с момента своего рождения!
            </p>
        </div>
    </div>
)