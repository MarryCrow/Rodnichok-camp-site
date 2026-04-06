import {DirectorQuote} from "@/sections/HomePage/DirectorQuote.tsx";
import {DividingStrip} from "@/sections/HomePage/DividingStrip.tsx";
import {ScrollGallery} from "@/sections/HomePage/ScrollGallery.tsx";
import {Location} from "@/sections/HomePage/Location.tsx";

function HomePage() {
    console.log("Ты в Home");

    return(
        <>
            <DirectorQuote />
            <DividingStrip />
            <ScrollGallery />
            <Location />
        </>
    );
}

export default HomePage;