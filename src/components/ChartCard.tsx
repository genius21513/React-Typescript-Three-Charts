
interface ChartCardProp {
    className?: string,
    children: JSX.Element[]
}

export const ChartCard = ( prop : ChartCardProp) => {
    return (
        <div className={`w-full ${prop.className} p-2 min-h-96`}>
            <div className={`p-2 bg-slate-900 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-900 h-full flex flex-col justify-between`}>
                {prop.children}
            </div>
        </div>
    );
}