const LifeImport = import.meta.glob<{default: string}>(
    '@/assets/img/LifeOfCamp/*.{png,jpg,jpeg}',
    { eager: true }
)

export const LifeImg = Object.fromEntries(
    Object.entries(LifeImport).map(([path, module]) => {
        const name = path.split('/').pop()?.split('.')[0]
        return [name, module.default]
    })
) as Record<string, string>