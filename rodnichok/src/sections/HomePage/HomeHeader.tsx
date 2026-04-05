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

        <header className="relative w-full">

            <img
                src = {hats['Hat_AI']}
                className={'w-full h-auto'}
                alt={'Home Header'}

            />

            <div className="absolute inset-0 h-[12.9%] w-full bg-hat/60">

                <img
                    src={hats['Left-down']}
                    alt={'left corner'}
                    className="absolute left-0 bottom-0 h-auto w-[37.57%]"
                />

                <img
                    src={hats['Right-up']}
                    alt={'right corner'}
                    className="absolute right-0 top-0 h-auto w-[37.57%]"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className='font__Home-header text-[32%]'>
                        Детский оздоровительный лагерь «Родничок»
                    </h1>
                </div>
            </div>

        </header>
    );
}

export default HomeHeader;