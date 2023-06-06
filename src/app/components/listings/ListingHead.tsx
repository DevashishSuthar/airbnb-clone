'use client';

import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { TbMedal } from 'react-icons/tb';

import MidDot from '@/app/components/common/MidDot';
import { getUserRatings } from '@/app/utils/CommonUtils';

interface ListingHeadProps {
    title: string;
    ratings: number;
    visibleReviewCount: number;
    isSuperHost: boolean;
    locationCity: string;
    locationCountry: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    ratings,
    visibleReviewCount,
    isSuperHost,
    locationCity,
    locationCountry
}) => {
    return (
        <>
            <div className="text-start mt-28">
                <div className="text-2xl font-bold">{title}</div>
                <div className="font-light text-neutral-700 mt-2 flex flex-row justify-between items-end">
                    <div className="flex flex-row items-center">
                        <span className="flex flex-row items-center mx-1">
                            <AiFillStar size={14} />{" "}
                            {getUserRatings(ratings)}
                        </span>
                        <MidDot />
                        <span className="underline cursor-pointer mx-1">
                            {visibleReviewCount} reviews
                        </span>
                        <MidDot />
                        {isSuperHost ?
                            <>
                                <span className="flex flex-row items-center mx-2">
                                    <TbMedal size={16} />
                                    <span className="mx-1 text-sm font-normal">
                                        Superhost
                                    </span>
                                </span>
                                <MidDot />
                            </>
                            : null}
                        <span className="cursor-pointer mx-2 underline text-sm font-semibold items-center">
                            {locationCity}&#44; {locationCountry}
                        </span>
                    </div>
                    <div className="flex flex-row items-center justify-between w-40">
                        <div className="cursor-pointer flex flex-row items-center underline hover:bg-gray-100 mr-[10px] hover:rounded-md p-[5px]">
                            <FiShare size={14} className="mr-[10px]" />
                            Share
                        </div>

                        <div className="cursor-pointer flex flex-row items-center underline hover:bg-gray-100 hover:rounded-md p-[5px]">
                            <AiOutlineHeart size={14} className="mr-[10px]" />
                            Save
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListingHead;