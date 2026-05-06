const iconsImport = import.meta.glob<React.FC<React.SVGProps<SVGSVGElement>>>(
    '@/assets/icons/*.svg',
    { eager: true, import: 'default', query: '?react'}
);

const icons = Object.fromEntries(
    Object.entries(iconsImport).map(([path, module]) => {
        const name = path.split('/').pop()?.replace('.svg', '')!;
        return [name, module] as const;
    })
) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

export type IconName = keyof typeof icons;

type Props = React.SVGProps<SVGSVGElement> & {
    name: IconName;
    className?: string;
};

export const Icon = ({ name, className }: Props) => {
    const Component = icons[name];
    if (!Component) {
        console.error(`Icon "${name}" not found. Available icons:`, Object.keys(icons));
        return null;
    }
    return <Component className={className} />;
};