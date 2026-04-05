const HomeImport = import.meta.glob<{default: string}>(
    '@/assets/img/Home/*.{png,jpg}',
    { eager: true }
)

 export const HomeImg = Object.fromEntries(
    Object.entries(HomeImport).map(([path, module]) => {
        const name = path.split('/').pop()?.split('.')[0]
        return [name, module.default]
    })
) as Record<string, string>