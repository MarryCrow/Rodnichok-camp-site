const LoadingPhrases = [
    'Собираем ветки для костра...',
    'Убираемся в корпусе...',
    'Готовимся к выступплению...',
    'Строимся на выход...',
    'Прячем запрещенку...',
    'Притворяемся спящими...'
];

const randomPhrase = Math.floor(Math.random() * LoadingPhrases.length);

const PageLoader = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-hatTitle mx-auto"></div>
            <p className="pt-6 text-hatTitle">{LoadingPhrases[randomPhrase]}</p>
        </div>
    </div>
);

export default PageLoader;