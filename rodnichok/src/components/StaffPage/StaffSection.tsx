import type {StaffSection as StaffSectionType} from "@/data/staffData.ts";
import {StaffCard} from "@/components/StaffPage/StaffCard.tsx";

type StaffSectionProps = {
    section: StaffSectionType;
}

export function StaffSection({ section }: StaffSectionProps ) {
    const gridClassName =
        section.columns === 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-4xl"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl";

    return (
        <section className="mx-auto">
            {section.id !== "leaders" && (
                <h2 className="mb-8 text-center text-2xl font-bold text-[#5A2D0C] sm:text-3xl">
                    {section.title}
                </h2>
            )}

            <div className={`mx-auto grid gap-8 ${gridClassName}`}>
                {section.people.map((person, index) => (
                    <div
                        key={person.id}
                        className={
                            section.columns === 3 && index === 2
                                ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:mx-auto lg:w-full"
                                : ""
                        }
                    >
                        <StaffCard person={person} />
                    </div>
                ))}
            </div>
        </section>
    )
}