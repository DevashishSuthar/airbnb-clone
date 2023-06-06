'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TbBrandAirbnb } from 'react-icons/tb';
import { CgMenuGridO } from 'react-icons/cg';

import Container from "@/app/components/common/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingReservation from '@/app/components/listings/ListingReservation';
import ContentWithBoldAndLineBreaks from '@/app/components/common/ContentWithBoldAndLineBreaks';
import AmenitiesModal from '@/app/components/AmenitiesModal';
import MidDot from '@/app/components/common/MidDot';
import Avatar from '@/app/components/common/Avatar';

import { PropertyListingData } from '@/app/interfaces';

interface ListingClientProps {
    listing: PropertyListingData;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
}) => {
    const { id, title, description, price, currency, images, details, location, host, amenities, mainImage, ratings, visibleReviewCount } = listing.info;
    const { data: roomDetails = [] } = details;
    const [firstImageData] = images.data;

    const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

    useEffect(() => {
        if (isAmenitiesModalOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isAmenitiesModalOpen]);

    const openAmenitiesModal = () => {
        setIsAmenitiesModalOpen(true);
    };

    return (
        <>
            <Container>
                <div>
                    <div className="flex flex-col gap-6">
                        <ListingHead
                            title={title}
                            isSuperHost={host && host.isSuperhost ? host.isSuperhost : false}
                            locationCity={location.city}
                            locationCountry={location.country.title}
                            ratings={ratings.guestSatisfactionOverall}
                            visibleReviewCount={visibleReviewCount}
                        />
                        <div className="w-full rounded-xl relative overflow-hidden">
                            <div className="flex h-full">
                                <div className="w-1/2">
                                    <Image
                                        src={firstImageData.url}
                                        width={500}
                                        height={500}
                                        className="object-cover w-full max-h-full h-full"
                                        alt="Image"
                                    />
                                </div>
                                <div className="ml-[8px] flex flex-wrap w-1/2">
                                    {images.data && images.data.slice(1, 5).map((image, index) => (
                                        <div
                                            key={index}
                                            className={`${index === 0 || index === 2 ? 'detail-image' : 'w-1/2'} ${index === 2 || index === 3 ? 'mt-[8px]' : ''}`}
                                        >
                                            <Image
                                                src={image.url}
                                                width={250}
                                                height={250}
                                                className="object-cover w-full max-h-full h-full"
                                                alt="Image"
                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="absolute border border-black bg-white min-w-fit rounded-md right-6 bottom-6 z-[3] px-3 py-1 cursor-pointer">
                                <div className="flex flex-row items-center justify-between">
                                    <CgMenuGridO size={18} />
                                    Show all photos
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between mt-4">
                            <div className="w-[65%]">
                                <div className="flex flex-wrap justify-between border-b-2 pb-6">
                                    <div>
                                        <h1 className="font-semibold mb-3 text-[30px] text-[#000]">
                                            Room in an eathern home {host && host.name ? `hosted by ${host.name}` : ''}
                                        </h1>
                                        {roomDetails && roomDetails.length ?
                                            (<ul className="list-none flex">
                                                {roomDetails.map((item, index) => (
                                                    <li key={index} className="mr-1">
                                                        {item.value} {item.type} {roomDetails.length - 1 !== index ? <MidDot /> : null}
                                                    </li>
                                                ))}
                                            </ul>) : null}
                                    </div>
                                    <em className="rounded-[50%] inline-block w-[56px] h-[56px]">
                                        <Avatar
                                            src={host && host.avatar.url ? host.avatar.url : ''}
                                            className="rounded-[50%] object-cover"
                                            width={56}
                                            height={56}
                                        />
                                    </em>
                                </div>

                                <div className="pt-12 pb-12 border-b-2">
                                    <div className="pb-3">
                                        <h2 className="text-2xl font-semibold">About this place</h2>
                                    </div>
                                    <div className="leading-relaxed">
                                        <ContentWithBoldAndLineBreaks content={description} />
                                    </div>
                                </div>

                                <div className="pt-12 pb-12 border-b-2">
                                    <div className="pb-3">
                                        <h2 className="text-2xl font-semibold">What this place offers</h2>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {amenities.data && amenities.data.slice(0, 10).map((item, index) => (
                                            <div key={index} className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <TbBrandAirbnb size={18} />
                                                </div>
                                                <div>
                                                    <p className={`text-base font-normal ${item.available ? '' : 'line-through'}`}>{item.title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            onClick={openAmenitiesModal}
                                            className="border border-solid border-gray-800 rounded-lg transition duration-200 ease-in-out hover:shadow hover:-translate-y-1 bg-white py-3 px-6 hover:bg-gray-100">
                                            Show all {amenities.count} amenities
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[30%] sticky top-24">
                                <ListingReservation
                                    currencySymbol={currency.symbol}
                                    price={price}
                                    ratings={ratings.guestSatisfactionOverall}
                                    visibleReviewCount={visibleReviewCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {
                isAmenitiesModalOpen ? (
                    <AmenitiesModal
                        amenities={amenities.data}
                        isOpen={isAmenitiesModalOpen}
                        onClose={() => setIsAmenitiesModalOpen(false)} />
                ) : null
            }
        </>
    );
}

export default ListingClient;
