export type GalleryPhoto = {
    id: string;
    src: string;
    thumb: string;
    alt: string;
};

export type GalleryAlbum = {
    id: string;
    year: number;
    shift: number;
    title: string;
    cover: string;
    photosCount: number;
    photos: GalleryPhoto[];
};

export const fetchGalleryAlbums = async (): Promise<GalleryAlbum[]> => {
    const response = await fetch("/api/gallery.php", {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Не удалось загрузить галерею");
    }

    const data = await response.json();

    return data as GalleryAlbum[];
};