import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchGalleryAlbums, type GalleryAlbum } from "@/api/gallery.ts";
import {TextStroke} from "@/components/ui/TextStroke.tsx";
import {useEffect, useMemo, useState} from "react";
import {Icon} from "@/components/ui/icons/Icon.tsx";

function GalleryPage() {
    const { year, albumId } = useParams();
    const navigate = useNavigate();

    const [galleryAlbums, setGalleryAlbums] = useState<GalleryAlbum[]>([]);
    const [isGalleryLoading, setIsGalleryLoading] = useState(true);
    const [galleryError, setGalleryError] = useState("");

    useEffect(() => {
        fetchGalleryAlbums()
            .then((albums) => {
                setGalleryAlbums(albums);
            })
            .catch(() => {
                setGalleryError("Не удалось загрузить галерею");
            })
            .finally(() => {
                setIsGalleryLoading(false);
            });
    }, []);

    const galleryYears = useMemo(() => {
        return Array.from(
            new Set(galleryAlbums.map((album) => album.year))
        ).sort((a, b) => b - a);
    }, [galleryAlbums]);

    const selectedYearFromUrl = Number(year);

    const selectedYear = galleryYears.includes(selectedYearFromUrl)
        ? selectedYearFromUrl
        : galleryYears[1];

    const albumsByYear = useMemo(() => {
        return galleryAlbums.filter((album) => album.year === selectedYear);
    }, [galleryAlbums, selectedYear]);

    const activeAlbum = albumsByYear.find(
        (album) => album.id === albumId
    );

    const [isYearsModalOpen, setIsYearsModalOpen] = useState(false);
    const [visibleYearsCount, setVisibleYearsCount] = useState(3);
    const [openedPhotoIndex, setOpenedPhotoIndex] = useState<number | null>(null);

    const openedPhoto =
        activeAlbum && openedPhotoIndex !== null
            ? activeAlbum.photos[openedPhotoIndex]
            : null;

    const hasMultiplePhotos = activeAlbum ? activeAlbum.photos.length > 1 : false;

    const closePhoto = () => {
        setOpenedPhotoIndex(null);
    };

    const showPrevPhoto = () => {
        if (!activeAlbum) return;

        setOpenedPhotoIndex((currentIndex) => {
            if (currentIndex === null) return currentIndex;

            return currentIndex === 0
                ? activeAlbum.photos.length - 1
                : currentIndex - 1;
        })
    }

    const showNextPhoto = () => {
        if (!activeAlbum) return;

        setOpenedPhotoIndex((currentIndex) => {
            if (currentIndex === null) return currentIndex;

            return currentIndex === activeAlbum.photos.length - 1
                ? 0
                : currentIndex + 1;
        })
    }

    useEffect(() => {
        const updateVisibleYearsCount = () => {
            const width = window.innerWidth;

            if (width >= 1024) {
                setVisibleYearsCount(10);
                return;
            }

            if (width >= 768) {
                setVisibleYearsCount(6);
                return;
            }

            setVisibleYearsCount(3);
        };

        updateVisibleYearsCount();

        window.addEventListener("resize", updateVisibleYearsCount);

        return () => {
            window.removeEventListener("resize", updateVisibleYearsCount);
        };
    }, []);

    useEffect(() => {
        if (!isYearsModalOpen) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsYearsModalOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isYearsModalOpen]);

    useEffect(() => {
        if (openedPhotoIndex === null || !activeAlbum) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closePhoto();
            }

            if (event.key === "ArrowLeft") {
                showPrevPhoto();
            }

            if (event.key === "ArrowRight") {
                showNextPhoto();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [openedPhotoIndex, activeAlbum]);

    useEffect(() => {
        if (!activeAlbum || openedPhotoIndex === null || activeAlbum.photos.length <= 1) {
            return;
        }

        const prevIndex =
            openedPhotoIndex === 0
                ? activeAlbum.photos.length - 1
                : openedPhotoIndex - 1;

        const nextIndex =
            openedPhotoIndex === activeAlbum.photos.length - 1
                ? 0
                : openedPhotoIndex + 1;

        const prevImage = new Image();
        prevImage.src = activeAlbum.photos[prevIndex].src;

        const nextImage = new Image();
        nextImage.src = activeAlbum.photos[nextIndex].src;
    }, [openedPhotoIndex, activeAlbum]);

    const visibleYears = useMemo(() => {
        const selectedYearIndex = galleryYears.indexOf(selectedYear);

        const selectedPosition = Math.max(0, visibleYearsCount - 2);

        let startIndex = selectedYearIndex - selectedPosition;
        let endIndex = startIndex + visibleYearsCount;

        if (startIndex < 0) {
            startIndex = 0;
            endIndex = visibleYearsCount;
        }

        if (endIndex > galleryYears.length) {
            endIndex = galleryYears.length;
            startIndex = Math.max(0, endIndex - visibleYearsCount);
        }

        return galleryYears.slice(startIndex, endIndex);
    }, [selectedYear, visibleYearsCount]);

    const handleYearSelectFromModal = (itemYear: number) => {
        navigate(`/Gallery/${itemYear}`);
        setIsYearsModalOpen(false);
    };

    if (isGalleryLoading) {
        return (
            <main className="min-h-screen px-4 w-full mt-[90px] lg:mt-[150px] pb-20">
                <p className="text-center text-gray-500">
                    Загрузка галереи...
                </p>
            </main>
        );
    }

    if (galleryError) {
        return (
            <main className="min-h-screen px-4 w-full mt-[90px] lg:mt-[150px] pb-20">
                <p className="text-center text-red-500">
                    {galleryError}
                </p>
            </main>
        );
    }

    if (!selectedYear) {
        return (
            <main className="min-h-screen px-4 w-full mt-[90px] lg:mt-[150px] pb-20">
                <p className="text-center text-gray-500">
                    В галерее пока нет фотографий.
                </p>
            </main>
        );
    }

    return(
        <main className="min-h-screen px-4 w-full mt-[90px] lg:mt-[150px] pb-20">
            <TextStroke
                as="h1"
                className="relative w-full font__Home-body text-homeTitle text-[30px] sm:text-[40px] lg:text-6xl text-center"
            >
                Фотогалерея
            </TextStroke>

            <section className="mx-auto justify-center mt-10 flex gap-4 overflow-x-auto px-2 py-4 scrollbar-none">
                {visibleYears.map((itemYear) => {
                    const isActive = itemYear === selectedYear;

                    return (
                        <button
                            key={itemYear}
                            type="button"
                            onClick={() => navigate(`/Gallery/${itemYear}`)}
                            className={[
                                "shrink-0 aspect-square w-16 rounded-full font-bold border border-gray-300 flex items-center justify-center shadow-md transition-transform duration-200",
                                isActive
                                ? "bg-gradient-to-br from-lime-300 to-yellow-300 text-white scale-105"
                                    : "cursor-pointer bg-white text-black hover:scale-105"
                            ].join(' ')}

                        >
                            {itemYear}
                        </button>
                    );
                })}

                <button
                    type="button"
                    onClick={() => setIsYearsModalOpen(true)}
                    aria-label="Выбрать год"
                    className="shrink-0 aspect-square w-16 rounded-full border cursor-pointer border-gray-300 bg-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105"
                >
                    <Icon name='Calendar_icon' className='w-7 h-auto -translate-y-[2px] object-contain'/>
                </button>
            </section>

            {activeAlbum ? (
                <section className="mx-auto mt-8 max-w-6xl">
                    <div className="relative mb-8 flex items-center gap-4 justify-center px-14">
                        <TextStroke
                            as="h2"
                            className="text-center text-3xl font-semibold"
                        >
                            {activeAlbum.title}
                        </TextStroke>

                        <button
                            type="button"
                            onClick={() => navigate(`/Gallery/${selectedYear}`)}
                            className="
                            absolute right-0 top-1/2 -translate-y-1/2
                            flex h-12 w-12 min-w-12 shrink-0 cursor-pointer
                            items-center justify-center
                            rounded-full border border-gray-300 bg-white p-0
                            shadow-md transition hover:scale-105
                            sm:h-auto sm:w-auto sm:min-w-0 sm:px-3 sm:py-3
                            "
                        >
                            <span className="text-xl sm:hidden">
                                ←
                            </span>

                            <span className="hidden sm:inline">
                                ← Назад
                            </span>
                        </button>
                    </div>

                    {activeAlbum.photosCount > 0 ? (
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {activeAlbum.photos.map((photo, index) => (
                                <button
                                    key={photo.id}
                                    type="button"
                                    onClick={() => setOpenedPhotoIndex(index)}
                                    className="overflow-hidden rounded-xl shadow-md transition bg-gray-100 hover:scale-[1.03] cursor-pointer"
                                >
                                    <img
                                        src={photo.thumb}
                                        alt={photo.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="aspect-[4/3] h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="mx-auto max-w-2xl text-center">
                            <img
                                src={`${import.meta.env.BASE_URL}gallery/placeholder.jpg`}
                                alt="Здесь пока ничего нет"
                                className="w-full rounded-xl object-cover shadow-xl"
                            />

                            <div className="flex flex-col justify-center items-center mt-10">
                                <p className="text-gray-500">
                                    Ты можешь прислать свои фото из «Родничка» на почту <br/> <a href="mailto:Rodnichok-camp@mail.ru" className="underline">Rodnichok-camp@mail.ru</a>
                                </p>

                                <p className="text-gray-500">
                                    <br/>Главное - не забывай указывать год и смену!
                                </p>
                            </div>
                        </div>
                    )}

                    {openedPhoto && (
                        <div
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
                            onClick={() => closePhoto()}
                        >
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    closePhoto();
                                }}
                                className="absolute right-5 top-5 rounded-full bg-white/90 w-12 h-12 text-xl font-bold text-black shadow-lg transition hover:scale-110 md:top-10 md:right-10"

                            >
                                ×
                            </button>

                            {hasMultiplePhotos && (
                                <button
                                    type="button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        showPrevPhoto();
                                    }}
                                    aria-label="Предыдущее фото"
                                    className="absolute bottom-5 left-1/6 md:left-1/3  rounded-full bg-white/80 px-5 py-3 font-bold shadow-xl border border-gray-300 backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-110 active:scale-[1.2] disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100"
                                >
                                    ←
                                </button>
                            )}

                            <img
                                src={openedPhoto.src}
                                alt=""
                                onClick={(event) => event.stopPropagation()}
                                className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                            />

                            {hasMultiplePhotos && (
                                <button
                                    type="button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        showNextPhoto();
                                    }}
                                    aria-label="Следующее фото"
                                    className="absolute bottom-5 right-1/6 md:right-1/3 rounded-full bg-white/80 px-5 py-3 font-bold shadow-xl border border-gray-300 backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-110 active:scale-[1.2] disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100"
                                >
                                    →
                                </button>
                            )}

                            {openedPhotoIndex !== null && activeAlbum && (
                                <div
                                    className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-md"
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    {openedPhotoIndex + 1} / {activeAlbum.photos.length}
                                </div>
                            )}
                        </div>
                    )}
                </section>
            ) : (
                <section className="mx-auto px-10 mt-12 md:mt-30 grid max-w-7xl grid-cols-1 items-end gap-10 md:grid-cols-3">
                    {albumsByYear.map((album, index) => (
                        <Link
                            key={`${album.year}-${album.id}`}
                            to={`/Gallery/${album.year}/${album.id}`}
                            className={[
                                "group block text-center transition hover:scale-105",
                                index === 1 ? "md:-translate-y-10 md:scale-110" : "",
                            ].join(" ")}
                        >
                            <img
                                src={album.cover}
                                alt={album.title}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[3/2] w-full rounded-xl object-cover border border-gray-300 shadow-xl"
                            />

                            <h2 className="mt-3 text-lg font-bold">
                                {album.title}
                            </h2>

                            <p className="text-gray-500">
                                {album.photosCount} фото
                            </p>
                        </Link>
                    ))}
                </section>
            )}

            {isYearsModalOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60"
                    onClick={() => setIsYearsModalOpen(false)}
                >
                    <div
                        className="w-full m-5 max-w-xl rounded-3xl bg-white border border-gray-300 shadow-2xl p-10"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <h3 className="text-xl font-bold">
                                Выберите год
                            </h3>

                            <button
                                type="button"
                                onClick={() => setIsYearsModalOpen(false)}
                                aria-label="Закрыть"
                                className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer border border-gray-300 bg-white text-xl font-bold shadow-md transition hover:scale-105"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 place-items-center">
                            {galleryYears.map((itemYear) => {
                                const isActive = itemYear === selectedYear;

                                return (
                                    <button
                                        key={itemYear}
                                        type="button"
                                        onClick={() => handleYearSelectFromModal(itemYear)}
                                        className={["flex items-center justify-center aspect-square w-16 rounded-full border border-gray-300 px-4 py-3 font-bold shadow-sm transition",
                                        isActive
                                            ? "bg-gradient-to-br from-lime-300 to-yellow-300 text-white"
                                            : "bg-white text-black cursor-pointer hover:scale-105",
                                        ]. join(" ")}
                                    >
                                        {itemYear}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default GalleryPage;