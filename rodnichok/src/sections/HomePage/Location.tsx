import logo_DorProfZhel from '@/assets/img/Home/DorProfZhel_logo.jpg'
import logo_RZD from '@/assets/img/Home/RZD_logo.jpg'
import {TextStroke} from "@/components/ui/TextStroke.tsx";

export const Location = () => {
    return (
        <div className="relative mt-[-8vw] md:mt-[-15vw] lg:mt-[-20vw] xl:mt-[-15vw] mb-20 lg:mb-30">
            <TextStroke
                as="h2"
                className="font__Home-body text-homeTitle w-full text-[30px] sm:text-[40px] lg:text-[4vw] text-center mb-[clamp(40px,5vw,80px)]"
            >
                Где мы находимся?
            </TextStroke>

            <section className='flex flex-col gap-7 md:grid md:grid-cols-2 md:grid-rows-2 w-full h-auto '>
                <div className='flex flex-col w-[80vw] md:w-[30vw] h-fit self-center md:self-start justify-self-center items-center location__border p-[1vw]'>
                    <p className='text-locationTitle text-center font-bold text-[5vw] md:text-[1.8vw]'>
                        Адрес
                    </p>
                    <p className='text-locationText text-left text-[3.75vw] md:text-[1.35vw]'>
                        462243, Оренбургская область, <br />
                        г. Кувандык, ул. Орджоникидзе, д. 50
                    </p>
                </div>

                <div
                    className='flex flex-col h-[80vw] md:h-full aspect-square place-self-center items-center location__border md:row-span-2 md:col-start-2'>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d51b63dc6346effc6630cddcd31048c624c5d4198b1818a84bbc52edf9f9fce&amp;source=constructor"
                        className="w-full h-full border-0 rounded-[clamp(5px,7vw,30px)]"></iframe>
                </div>

                <div
                    className='grid w-[80vw] md:w-[30vw] grid-cols-2 grid-rows-[auto_1fr] self-center md:justify-self-center gap-1 location__border p-[1vw]'>
                    <div className='col-span-2'>
                        <p className='text-locationTitle text-center font-bold text-[5vw] md:text-[1.8vw]'>
                            Управление
                        </p>
                    </div>

                    <div className='flex flex-col gap-1 md:gap-3 items-center justify-center'>
                        <img
                            src={logo_DorProfZhel}
                            alt='Logo DorProfZhel'
                            className='w-[30vw] md:w-[7.2vw] rounded-2xl'
                        />
                        <p className='text-black text-center font-bold text-[3.5vw] md:text-[1.15vw]'>
                            Дорпрофжел <br /> ЮУЖД
                        </p>
                    </div>

                    <div className='flex flex-col gap-1 md:gap-3 items-center justify-center'>
                        <img
                            src={logo_RZD}
                            alt='Logo RZD'
                            className='w-[30vw] md:w-[7.2vw] rounded-2xl'
                        />
                        <p className='text-black text-center font-bold text-[3.5vw] md:text-[1.15vw]'>
                            Южно-Уральская <br /> Железная Дорога
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}