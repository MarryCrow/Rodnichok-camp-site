import type {StaffPerson} from "@/data/staffData.ts";

type StaffCardProps = {
    person: StaffPerson;
}

export function StaffCard({ person }: StaffCardProps) {
    return (
        <div className="mx-auto overflow-hidden w-full max-w-[270px] rounded-2xl border border-gray-200 bg-gray-50 shadow-lg sm:max-w-[320px] lg:max-w-[400px]">
            <div className="flex aspect-[3/4] items-end justify-center bg-gray-50">
                <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain object-bottom"
                />
            </div>

            <div className="px-4 py-4 text-center">
                <h3 className="text-base font-bold text-[#5A2D0C]">
                    {person.name}
                </h3>

                <p className="mt-1 text-sm leading-snug text-gray-600">
                    {person.position}
                </p>
            </div>
        </div>
    )
}