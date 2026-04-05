const ScrollImport = import.meta.glob<{default: string}>(
    '@/assets/img/Home/ScrollGallery/*.{png,jpg}',
    { eager: true }
)

export const ScrollImg = Object.fromEntries(
    Object.entries(ScrollImport).map(([path, module]) => {
        const name = path.split('/').pop()?.split('.')[0]
        return [name, module.default]
    })
) as Record<string, string>