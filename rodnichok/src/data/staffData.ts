const withBase = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
};

const staffImage = (fileName: string) => {
    return withBase(`staff/${fileName}`);
};

export type StaffPerson = {
    id: string;
    name: string;
    position: string;
    image: string;
};

export type StaffSection = {
    id: string;
    title: string;
    columns: 2 | 3;
    people: StaffPerson[];
};

export const staffSections: StaffSection[] = [
    {
        id: "leaders",
        title: "Руководство",
        columns: 2,
        people: [
            {
                id: "sergey-mikhailovich",
                name: "Костин Сергей Михайлович",
                position: "Директор ДОЛ «Родничок»",
                image: staffImage("Sergei_Mikhailovich.png"),
            },
            {
                id: "elena-alekseevna",
                name: "Гусева Елена Алексеевна",
                position: "Заместитель директора",
                image: staffImage("Elena_Alekseevna.png"),
            },
        ],
    },
    {
        id: "squad-1",
        title: "1 Отряд (2024 г.)",
        columns: 3,
        people: [
            {
                id: "pavel-andreevich",
                name: "Павел Андреевич",
                position: "Лучший воспитатель 3 смены 2024 года",
                image: staffImage("Pavel_Andreevich.png"),
            },
            {
                id: "aleksandr",
                name: "Александр",
                position: "Лучший вожатый 3 смены 2024 года",
                image: staffImage("Aleksandr.png"),
            },
            {
                id: "viktoriya-dmitrievna",
                name: "Виктория Дмитриевна",
                position: "Лучший воспитатель 2 смены 2024 года",
                image: staffImage("Viktoriya_Dmitrievna.png"),
            },
        ],
    },
    {
        id: "squad-2",
        title: "2 Отряд (2024 г.)",
        columns: 3,
        people: [
            {
                id: "vova-yurich",
                name: "Владимир Юрьевич",
                position: "Воспитатель",
                image: staffImage("Vova_Yurich.png"),
            },
            {
                id: "angelina",
                name: "Ангелина",
                position: "Супер-вожатая 3 смены 2024 года",
                image: staffImage("Angelina.png"),
            },
            {
                id: "natalya-alekseevna",
                name: "Наталья Алексеевна",
                position: "Воспитатель",
                image: staffImage("Natalya_Alekseevna.png"),
            },
        ],
    },
    {
        id: "squad-3",
        title: "3 Отряд (2024 г.)",
        columns: 3,
        people: [
            {
                id: "marsel-mavletovich",
                name: "Марсель Мавлетович",
                position: "Лучший воспитатель 3 смены 2024 года",
                image: staffImage("Marsel_Mavletovich.png"),
            },
            {
                id: "tatyana",
                name: "Татьяна",
                position: "Лучшая вожатая 3 смены 2024 года",
                image: staffImage("Tatyana.png"),
            },
            {
                id: "marina",
                name: "Марина Николаевна",
                position: "Лучший воспитатель 3 смены 2024 года",
                image: staffImage("Marina.png"),
            },
        ],
    },
    {
        id: "squad-4",
        title: "4 Отряд (2024 г.)",
        columns: 2,
        people: [
            {
                id: "aristan-kadirzhanovich",
                name: "Арыстан Кадыржанович",
                position: "Воспитатель",
                image: staffImage("Aristan_Kadirzhanovich.png"),
            },
            {
                id: "darya-dmitrievna",
                name: "Дарья Дмитриевна",
                position: "Воспитатель",
                image: staffImage("Darya_Dmitrievna.png"),
            },
        ],
    },
    {
        id: "junior-squads",
        title: "Воспитатели младших отрядов",
        columns: 2,
        people: [
            {
                id: "yulia-viktorovna",
                name: "Юлия Викторовна",
                position: "Лучший воспитатель 3 смены 2024 года",
                image: staffImage("Yulia_Viktorovna.png"),
            },
            {
                id: "olga-sergeevna",
                name: "Ольга Сергеевна",
                position: "Лучший воспитатель 3 смены 2024 года",
                image: staffImage("Olga_Sergeevna.png"),
            },
            {
                id: "tatyana-vladimirovna",
                name: "Татьяна Владимировна",
                position: "Лучший воспитатель 3 смены 2024 года",
                image: staffImage("Tatyana_Vladimirovna.png"),
            },
            {
                id: "svetlana-taipovna",
                name: "Светлана Таиповна",
                position: "Воспитатель",
                image: staffImage("Svetlana_Taipovna.png"),
            },
        ],
    },
];