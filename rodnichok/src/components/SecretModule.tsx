import {useEffect} from "react";

const secret = `${import.meta.env.BASE_URL}Secret.jpg`;

type SecretModuleProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function SecretModule({ isOpen, onClose }: SecretModuleProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-[85vh] w-full max-w-4xl flex-col rounded-3xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="overflow-y-auto px-1 py-1 sm:px-3 sm:py-3 ">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Закрыть"
                        className="absolute right-0 top-0 mt-6 mr-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl leading-none shadow-md transition hover:scale-105"
                    >
                        ×
                    </button>

                    <div className="space-y-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                        <img
                            src={secret}
                            alt="Прощальная картинка"
                            loading="lazy"
                            decoding="async"
                            className="rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}