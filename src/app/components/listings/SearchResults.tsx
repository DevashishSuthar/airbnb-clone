'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useContext } from 'react';

import listings from '@/app/static/listings.json';
import EmptyState from '@/app/components/common/EmptyState';
import ListingCard from '@/app/components/listings/ListingCard';
import { AppContext } from '@/app/AppContext';
import { PropertyListingData } from '@/app/interfaces';

interface MapMarkerProps {
    name: string;
    coordinates: number[]
}

const Map = dynamic(() => import('../Map'), {
    ssr: false
});

const SearchResults: React.FC = () => {
    const { location: searchLocation } = useContext(AppContext);
    const [mapData, setMapData] = useState<MapMarkerProps[]>([]);
    const [propertyLocations, setPropertyLocations] = useState<PropertyListingData[]>([]);
    const { data = [] } = listings;

    useEffect(() => {
        if (searchLocation && data.length) {
            const propertyDataByLocation = data.filter(({ info: { location } }) => location && location.city.toLowerCase() === searchLocation.toLowerCase());
            setPropertyLocations(propertyDataByLocation);
            const mapMarkerData = propertyDataByLocation.map(({ info }) => {
                const { price, currency: { symbol }, location: { lat, long } } = info;
                return {
                    name: `${symbol} ${price}`,
                    coordinates: [lat, long]
                }
            });
            setMapData(mapMarkerData);
        }
    }, [searchLocation, data]);

    if (!propertyLocations.length) {
        return <EmptyState />;
    }

    return (
        <div className="flex flex-wrap">
            <div className="w-3/5">
                <div className="pt-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
                    {propertyLocations.map((listing: any, index) => (
                        <ListingCard
                            key={index}
                            listIndex={index}
                            data={listing}
                        />
                    ))}
                </div>
            </div>
            <div className="w-2/5 relative">
                {mapData && mapData.length ?
                    <Map markers={mapData} /> : <>Loading...</>
                }
            </div>
        </div>
    );
};

export default SearchResults;