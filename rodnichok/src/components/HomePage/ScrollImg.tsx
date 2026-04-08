const ScrollImport = import.meta.glob<{default: string}>(
    '@/assets/img/Home/ScrollGallery/*.{png,jpg}',
    { eager: true }
)

export const ScrollImg = Object.entries(ScrollImport)
    .map(([path, module]) => {
        const name = path
            .split('/')
            .pop()
            ?.split('.')[0]
            ?? "";
        return {name, src: module.default}
    })
    .sort((a, b) => {
        const aNumber = Number(a.name.replace("Scroll-gallery_photo", ""));
        const bNumber = Number(b.name.replace("Scroll-gallery_photo", ""));

        return aNumber - bNumber;
    });
