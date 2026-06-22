// export type GalleryPhoto = {
//     id: string;
//     src: string;
//     thumb: string;
//     alt: string;
// };
//
// export type GalleryAlbum = {
//     id: string;
//     year: number;
//     shift: number;
//     title: string;
//     cover: string;
//     photosCount: number;
//     photos: GalleryPhoto[];
// };
//
// const withBase = (path: string) => {
//     return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
// };
//
// const makePhotos = (year: number, shift: number, count: number): GalleryPhoto[] => {
//     return Array.from({ length: count }, (_, index) => {
//         const number = String(index + 1).padStart(3, "0");
//
//         return {
//             id: `${year}-shift-${shift}-${number}`,
//             thumb: withBase(`gallery/${year}/shift-${shift}/thumb/${number}.jpg?v=${GALLERY_VERSION}`),
//             src: withBase(`gallery/${year}/shift-${shift}/full/${number}.jpg?v=${GALLERY_VERSION}`),
//             alt: `${shift} смена ${year} год, фото ${index + 1}`,
//         };
//     });
// };
//
// export const galleryYears = Array.from(
//     { length: 2025 - 2007 + 1 },
//     (_, index) => 2025 - index
// );
//
// export const galleryAlbums: GalleryAlbum[] = galleryYears.flatMap((year) =>
//     [1, 2, 3].map((shift) => {
//         const albumId = `${year}-shift-${shift}`;
//         const photosCount = photosCountByAlbum[albumId] ?? 0;
//
//         return {
//             id: `shift-${shift}`,
//             year,
//             shift,
//             title: `${shift} смена ${year} год`,
//             cover: photosCount > 0
//                 ? withBase(`gallery/${year}/shift-${shift}/cover.jpg`)
//                 : withBase(`gallery/placeholder.jpg`),
//             photosCount,
//             photos: makePhotos(year, shift, photosCount),
//         }
//     })
// );