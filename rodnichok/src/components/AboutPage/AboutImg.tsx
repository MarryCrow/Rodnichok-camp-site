const AboutImport = import.meta.glob<{default: string}>(
    '@/assets/img/AboutCamp/*.{png,jpg}',
    { eager: true }
)

export const AboutImg = Object.fromEntries(
    Object.entries(AboutImport).map(([path, module]) => {
        const name = path.split('/').pop()?.split('.')[0]
        return [name, module.default]
    })
) as Record<string, string>