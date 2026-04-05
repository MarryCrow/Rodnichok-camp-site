import {HomeImg} from "@/components/HomePage/HomeImg.tsx";

export const QuoteFrame = () => (
    <div className={'Quote__frame'}>
        <img
            src={HomeImg['Quote_frame']}
            className={'w-full h-auto'}
            alt={'Quote_frame'}
        />
        <div className={'absolute Quote__image'}>
            <p className={'Quote__text indent-[1vw]'}>Наш любимый «Родничок» - место, которое дарит каждому ребёнку эмоции и друзей на всю жизнь.

            </p>
            <p className={'Quote__text indent-[1vw]'}>
                Он собрал в себе самые лучшие качества, которые необходимы для лагеря, за 95 лет с момента своего рождения!
            </p>
        </div>
    </div>
)