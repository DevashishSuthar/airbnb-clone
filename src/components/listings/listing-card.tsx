'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillStar } from 'react-icons/ai';
import { useContext } from 'react';

import HeartButton from '@/components/general/heart-button';
import { PropertyListingData } from '@/lib/types';
import { getUserRatings } from '@/lib/utils';
import { AppContext } from '@/app/AppContext';

interface ListingCardProps {
    data: PropertyListingData;
    key: number;
    listIndex: number;
};

const ListingCard: React.FC<ListingCardProps> = ({ data, listIndex }) => {
    const { id, title, ratings, price, mainImage, currency, location, host } = data.info;
    const router = useRouter();
    const { location: searchLocation } = useContext(AppContext);

    return (
        <Link
            // onClick={() => router.push(`/listings/${id}`)}
            href={`/listings/${id}`}
            className="col-span-1 cursor-pointer group mb-12"
            key={listIndex}
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image
                        fill
                        className="object-cover h-full w-full group-hover:scale-110 transition"
                        src={mainImage?.url}
                        alt="Listing"
                    />
                    {host && host.isSuperhost && searchLocation ? <div className="absolute top-3 left-3 bg-white rounded-sm px-2 text-base border-white">
                        Superhost
                    </div> : null}
                    <div className="absolute top-3 right-3">
                        <HeartButton
                            listingId={id}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="font-semibold text-[15px]">
                        {location?.city}, {location?.country?.title}
                    </div>
                    <div className="flex flex-row items-center">
                        <AiFillStar size={14} />
                        {getUserRatings(ratings.guestSatisfactionOverall)}
                    </div>
                </div>
                <div className="font-light text-neutral-500 text-ellipsis overflow-hidden whitespace-nowrap w-[90%]">
                    {title}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        {currency.symbol} {price}
                    </div>
                    <div className="font-light">night</div>
                </div>
            </div>
        </Link>
    );
};

export default ListingCard;