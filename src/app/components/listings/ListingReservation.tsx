'use client';

import { AiFillStar, AiOutlineDown } from 'react-icons/ai';

import MidDot from '@/app/components/common/MidDot';

interface ListingReservationProps {
    currencySymbol: string,
    price: number,
    ratings: number,
    visibleReviewCount: number
}

const ListingReservation: React.FC<ListingReservationProps> = ({
    currencySymbol,
    price,
    ratings,
    visibleReviewCount
}) => {

    return (
        <div className="shadow-md rounded-[24px] bg-white border-[1px] border-solid border-[#ccc] min-h-[250px] p-5">
            <div className="flex flex-col lg:flex-row md:justify-between md:items-center mb-4">
                <div className="font-semibold text-[#000] text-[20px]">
                    <span className="text-lg font-semibold ">
                        {currencySymbol}{price}&nbsp;
                    </span>
                    <span className="text-base font-normal">
                        night
                    </span>
                </div>
                <div className="flex flex-row items-center">
                    <span className="flex flex-row items-center mx-1">
                        <AiFillStar size={14} />{" "}
                        {ratings.toFixed(1)}
                    </span>
                    <MidDot />
                    <span className="underline cursor-pointer mx-1">
                        {visibleReviewCount} reviews
                    </span>
                </div>
            </div>
            <div className="border-[1px] border-sold border-[#000] rounded-[6px] p-2 mb-4">
                <div className="flex border-b p-3">
                    <div className="w-1/2 border-r">
                        <div className="uppercase text-xs font-extrabold">Check-in</div>
                        <div className="text-sm font-semibold">6/18/2023</div>
                    </div>
                    <div className="w-1/2 pl-4 uppercase">
                        <div className="uppercase text-xs font-extrabold">Checkout</div>
                        <div className="text-sm font-semibold">6/23/2023</div>
                    </div>
                </div>
                <div className="flex flex-row p-3 justify-between items-center">
                    <div>
                        <div className="uppercase text-xs font-extrabold">Guests</div>
                        <div className="text-sm font-semibold">1 guest</div>
                    </div>

                    <div className="cursor-pointer">
                        <AiOutlineDown size={18} />
                    </div>
                </div>
            </div>
            <button className="px-4 py-2 bg-[#E61E4D] text-[#fff] text-[16px] text-center rounded-[8px] font-medium transition-all duration-[0.5s] hover:bg-red-500 inline-block w-full">
                Reserve
            </button>
            <div className="mt-3">
                <div className="text-sm font-normal text-center mt-3">You won&apos;t be charged yet</div>
            </div>
        </div>
    );
};

export default ListingReservation;