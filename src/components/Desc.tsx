
export const TopDesc = () => {
    return (
        <div className="p-4 md:-mt-24">
            <h1 className='text-3xl font-bold text-slate-200 py-2'>@Metakey / Unique MetaKey holders</h1>
            <span className='text-slate-400'>Refered from 
                <a className='text-blue-700' target="_blank" href='https://dune.com/queries/276792' rel="noreferrer"> https://dune.com/queries/276792</a>
            </span>
        </div>
    );
}

export const ChartDesc = ({ desc }: { desc?: string }) => {
    return (
        <>
            <h3 className='mt-2 p-2 font-bold text-lg hover:text-gray-600 text-white border-t border-cyan-700 text-center'>Unique Holder Wallets</h3>
        </>
    );
}

