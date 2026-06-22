import {TextStroke} from "@/components/ui/TextStroke.tsx";
import {staffSections} from "@/data/staffData.ts";
import {StaffSection} from "@/components/StaffPage/StaffSection.tsx";
import {DecorativeStrip} from "@/components/StaffPage/DecorativeStrip.tsx";

function StuffPage() {
    return(
        <main className="min-h-screen w-full mt-[90px] lg:mt-[150px] pb-20">
            <TextStroke
                as="h1"
                className="relative w-full font__Home-body text-homeTitle text-[30px] sm:text-[40px] lg:text-6xl text-center"
            >
                Педагогический состав
            </TextStroke>

            <div className="mx-auto mt-12">
                {staffSections.map((section, index) => (
                    <div key={index}>
                        <StaffSection section={section} />

                        {index !== staffSections.length - 1 && (
                            <DecorativeStrip reverse={index % 2 === 1} />
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default StuffPage;