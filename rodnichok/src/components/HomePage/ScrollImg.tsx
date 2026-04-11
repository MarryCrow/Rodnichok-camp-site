const ScrollImport = import.meta.glob<{default: string}>(
    '@/assets/img/Home/ScrollGallery/*.{png,jpg}',
    { eager: true }
)

export const ScrollImg: Record<string, string> = Object.fromEntries(
    Object.entries(ScrollImport).map(([path, module]) => {
        const name = path.split("/").pop()?.replace(/\.(png|jpg)$/i, "") ?? "";
        return [name, module.default];
    })
);