import logo_DorProfZhel from '@/assets/img/Home/DorProfZhel_logo.jpg'
import logo_RZD from '@/assets/img/Home/RZD_logo.jpg'

export const Location = () => {
    return (
        <div>
            <div
                className='font__Home-body mt-[-10vw] mb-[3vw] flex items-center justify-center'
                data-text='Где мы находимся?'
            >
                Где мы находимся?
            </div>

            <section className='grid grid-cols-2 grid-rows-2 w-full '>
                <div className='flex flex-col w-[30vw] h-fit self-start justify-self-center items-center location__border'>
                    <p className='text-locationTitle text-center font-bold text-[1.81vw]'>
                        Адрес
                    </p>
                    <p className='text-locationText text-left text-[1.35vw]'>
                        462243, Оренбургская область, <br />
                        г. Кувандык, ул. Орджоникидзе, д. 50
                    </p>
                </div>

                <div className='flex flex-col h-full aspect-square place-self-center items-center location__border row-span-2 col-start-2'>
                    <iframe
                        src="https://yandex.com/map-widget/v1/?ll=57.326235,51.46352&pt=57.316235,51.447352&z=13"
                        allowFullScreen
                        className="w-full h-full rounded-2xl border-0"
                    />
                </div>

                <div
                    className='grid w-[30vw] place-self-center grid-cols-2 grid-rows-[auto_1fr] gap-1 location__border'>
                    <div className='col-span-2'>
                        <p className='text-locationTitle text-center font-bold text-[1.81vw]'>
                            Управление
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img
                            src={logo_DorProfZhel}
                            alt='Logo DorProfZhel'
                            className='w-[7.22vw]'
                        />
                        <p className='text-black text-center font-bold text-[1.13vw]'>
                            Дорпрофжел <br /> ЮУЖД
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img
                            src={logo_RZD}
                            alt='Logo RZD'
                            className='w-[7.22vw]'
                        />
                        <p className='text-black text-center font-bold text-[1.13vw]'>
                            Южно-Уральская <br /> Железная Дорога
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}