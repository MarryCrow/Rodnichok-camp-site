import { useMediaQuery } from "@/hooks/useMediaQuery.tsx";

import { MobileScrollGallery } from "@/components/HomePage/MobileScrollGallery.tsx";
import { DesktopScrollGallery } from "@/components/HomePage/DesktopScrollGallery.tsx";

export const ScrollGallery = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return isMobile ? <MobileScrollGallery /> : <DesktopScrollGallery />;
};