export type TopCounterProps = {
    day: number;
}

const get8BitRep = (day: number) => {
    const binaryRep = (day % 256).toString(2);
    const padding = new Array(8 - binaryRep.length + 1).join('0');
    const paddedString = padding + binaryRep;
    const splitFirstHalfString = paddedString.slice(0, 4);
    const splitSecondHalfString = paddedString.slice(4, 8);

    return splitFirstHalfString + ' ' + splitSecondHalfString;
}

export const TopCounter = ({day}: TopCounterProps) => (
    <nav className="bg-zinc-900 border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <p className="font-bold text-slate-300 text-3xl">
                {`Day ${day}`}
            </p>
            <p className="font-bold text-slate-300 text-3xl">
                {get8BitRep(day)}
            </p>
        </div>
    </nav>
);