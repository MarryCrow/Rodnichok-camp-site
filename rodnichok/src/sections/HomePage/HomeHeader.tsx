import {TextStroke} from "@/components/ui/TextStroke.tsx";

const hatsImport = import.meta.glob<{default: string}>(
        '@/assets/img/Home/HomeHeader/*.{png,jpg}',
        { eager: true }
)

const hats = Object.fromEntries(
    Object.entries(hatsImport).map(([path, module]) => {
        const name = path.split('/').pop()?.split('.')[0]
        return [name, module.default]
    })
) as Record<string, string>

function HomeHeader() {

    return(

        <header className="relative w-full overflow-hidden">

            <img
                src = {hats['Hat_PC']}
                className={'hidden md:block w-full h-[100vh] object-cover'}
                alt={'Home Header PC'}

            />

            <img
                src = {hats['Hat_Mobile']}
                className={'block md:hidden w-full h-[100vh] object-cover'}
                alt={'Home Header Mobile'}
            />

            <div className="absolute hidden md:flex top-[18%] h-[100px] w-full items-center justify-center">

                {/*<img*/}
                {/*    src={hats['Left-down']}*/}
                {/*    alt={'left corner'}*/}
                {/*    className="absolute left-0 bottom-0 h-auto w-[37.57%]"*/}
                {/*/>*/}

                {/*<img*/}
                {/*    src={hats['Right-up']}*/}
                {/*    alt={'right corner'}*/}
                {/*    className="absolute right-0 top-0 h-auto w-[37.57%]"*/}
                {/*/>*/}
                <TextStroke as="h1" className="font__Home-header text-center">
                    Детский оздоровительный лагерь <br/> «Родничок»
                </TextStroke>
            </div>

            <div className="flex md:hidden">
                <div className="absolute flex
                w-[60%] tn:h-[20vw] h-[30vw] top-[22%] left-[45%]
                items-center justify-center
                Header__section--blured">
                    {/*<img*/}
                    {/*    src={hats['Logo']}*/}
                    {/*    alt="Logo Rodnichok"*/}
                    {/*    className="h-[155%] -translate-x-1/2 -translate-y-[6%] "*/}
                    {/*    />*/}
                    <div className="flex flex-col ml-[-1vw] tn:ml-[-7vw]">
                        <p className="comfortaa-500 text-center text-[16px] tn:text-[16px] sm:text-[24px] text-white">
                            Детский лагерь
                        </p>
                        <p className="comfortaa-700 text-center text-[28px] tn:text-[30px] sm:text-[38px] text-white">
                            Родничок
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-[30%] w-full">
                    <p className="comfortaa-500 text-white text-center">Место отдыха, дружбы <br/> и ярких впечатлений</p>
                </div>
            </div>

        </header>
    );
}

export default HomeHeader;