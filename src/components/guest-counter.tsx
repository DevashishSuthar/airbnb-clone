import { useState } from 'react';

interface GuestCounterProps {
    title: string;
    subtitle: string;
    isBottomBorderRequired?: boolean;
    guestsMaxLimit: number;
}

const GuestCounter: React.FC<GuestCounterProps> = ({
    title,
    subtitle,
    isBottomBorderRequired = true,
    guestsMaxLimit,
}) => {
    const [guestsCount, setGuestsCount] = useState(0);
    const isGuestsMaxLimitReached = guestsCount === guestsMaxLimit;
    const isGuestsCountIsZero = guestsCount === 0;

    const handleIncrementCounter = () => {
        if (!isGuestsMaxLimitReached) {
            setGuestsCount((guestsCount) => guestsCount + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (guestsCount > 0) {
            setGuestsCount((guestsCount) => guestsCount - 1);
        }
    };

    return (
        <div className={`flex justify-between py-6 ${isBottomBorderRequired ? 'border-b-2' : ''}`}>
            <div>
                <div className="text-base font-semibold pb-[6px]">{title}</div>
                <div className="text-sm font-normal">{subtitle}</div>
            </div>
            <div className="flex items-center min-w-[100px] justify-evenly">
                <button
                    onClick={handleDecrementCounter}
                    disabled={isGuestsCountIsZero}
                    className={`w-8 h-8 rounded-full border border-[#B0B0B0] ${isGuestsCountIsZero ? 'cursor-not-allowed' : 'cursor-pointer hover:border-black hover:text-black'} text-2xl text-[#B0B0B0] items-center justify-center flex`}>
                    -
                </button>
                <div>{guestsCount}</div>
                <button
                    disabled={isGuestsMaxLimitReached}
                    onClick={handleIncrementCounter}
                    className={`w-8 h-8 rounded-full border border-[#B0B0B0] text-[#B0B0B0] text-2xl items-center justify-center flex ${isGuestsMaxLimitReached ? 'cursor-not-allowed' : 'cursor-pointer hover:border-black hover:text-black'}`}>
                    +
                </button>
            </div>
        </div>
    );
};

export default GuestCounter;