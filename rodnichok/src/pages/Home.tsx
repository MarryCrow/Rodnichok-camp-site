const HomeImport = import.meta.glob<{default: string}>(
    '@/assets/img/Home/*.{png,jpg}',
    { eager: true }
)

const HomeImg = Object.fromEntries(
    Object.entries(HomeImport).map(([path, module]) => {
        const name = path.split('/').pop()?.split('.')[0]
        return [name, module.default]
    })
) as Record<string, string>


function HomePage() {
    console.log("Ты в Home");

    return(
        <>
            <div className="relative w-full z-0">
                <img
                    src = {HomeImg['diagonal_background']}
                    className={'w-full h-auto'}
                    alt={'Director_background'}
                />
                <img
                    src={HomeImg['Director']}
                    className={'absolute w-[20.83vw] h-[28.82vw] bottom-0 left-[19vw]'}
                    alt={'Director'}
                />

                <div className={'absolute w-[32.7vw] h-auto right-[20vw] bottom-[15vw]'}>
                    <img
                        src={HomeImg['Quote_frame']}
                        className={'w-full h-auto'}
                        alt={'Quote_frame'}
                    />
                    <div className={'absolute Quote__image'}>
                        <p className={'Quote__text indent-4'}>Наш любимый «Родничок» - место, которое дарит каждому ребёнку эмоции и друзей на всю жизнь.

                        </p>
                        <p className={'Quote__text indent-4'}>
                            Он собрал в себе самые лучше качества, которые необходимы для лагеря за свои 95 лет с момента своего рождения!
                        </p>
                    </div>
                </div>

            </div>
            <div className="relative Home__dividing-strip">
            </div>
        </>
    );
}

export default HomePage;