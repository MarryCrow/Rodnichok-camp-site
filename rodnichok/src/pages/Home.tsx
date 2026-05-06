import {DirectorQuote} from "@/sections/HomePage/DirectorQuote.tsx";
import {ShiftTable} from "@/sections/HomePage/ShiftTable.tsx";
import {ScrollGallery} from "@/sections/HomePage/ScrollGallery.tsx";
import {Location} from "@/sections/HomePage/Location.tsx";
import HomeHeader from "@/sections/HomePage/HomeHeader.tsx";

function HomePage() {
    return(
        <>
            <HomeHeader />
            <DirectorQuote />
            <ShiftTable />
            <ScrollGallery />
            <Location />
        </>
    );
}

export default HomePage;