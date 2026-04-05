import {DirectorQuote} from "@/sections/HomePage/DirectorQuote.tsx";
import {DividingStrip} from "@/sections/HomePage/DividingStrip.tsx";
import {ScrollGallery} from "@/sections/HomePage/ScrollGallery.tsx";

function HomePage() {
    console.log("Ты в Home");

    return(
        <>
            <DirectorQuote />
            <DividingStrip />
            <ScrollGallery />
        </>
    );
}

export default HomePage;