
interface ChartCardProp {
    className?: string,
    children: JSX.Element[]
}

export const ChartCard = ( prop : ChartCardProp) => {
    return (
        <div className={`w-full ${prop.className} p-2 min-h-96 hover:cursor-pointer`}>
            <div className={`
                p-2 bg-slate-900 
                rounded-lg shadow-md hover:shadow-lg h-full flex flex-col justify-between 
                hover:bg-gradient-to-r from-slate-900 to-cyan-900
                hover:bg-blend-overlay
            `}>
                {prop.children}
            </div>
        </div>
    );
}