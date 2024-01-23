'use client';

import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { HiOutlineMap, } from 'react-icons/hi';
import { HiListBullet } from 'react-icons/hi2';

import ListingCard from "@/components/listings/listing-card";
import Container from '@/components/general/container';
import EmptyState from '@/components/general/empty-state';
import SearchResults from '@/components/listings/search-results';

import listings from '@/static/listings.json';
import { AppContext } from './AppContext';
import { MapMarkerProps } from '@/lib/types';

const Map = dynamic(() => import('@/components/map'), {
  ssr: false
});

const Home = () => {
  const { location } = useContext(AppContext);
  const [isPropertyOnMapVisible, setIsPropertyOnMapVisible] = useState<boolean>(false);
  const [mapData, setMapData] = useState<MapMarkerProps[]>([]);

  const { data = [] } = listings;

  useEffect(() => {
    if (data.length) {
      const mapMarkerData = data.map(({ info }) => {
        const { price, currency: { symbol }, location: { lat, long } } = info;
        return {
          name: `${symbol} ${price}`,
          coordinates: [lat, long]
        }
      });
      setMapData(mapMarkerData);
    }
  }, []);

  const handleShowMapClick = () => {
    setIsPropertyOnMapVisible(!isPropertyOnMapVisible);
  };

  if (!data.length) {
    return <EmptyState />;
  }

  if (location) {
    return (
      <Container>
        <SearchResults />
      </Container>
    );
  }

  return (
    <>
      <Container>
        {isPropertyOnMapVisible ?
          <>
            {mapData && mapData.length ?
              <Map markers={mapData} /> : <>Loading...</>
            }
          </> :
          <div className="pt-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"        >
            {data.map((listing: any, index: number) => (
              <ListingCard
                key={index}
                listIndex={index}
                data={listing}
              />
            ))}
          </div>
        }
      </Container>
      <div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 mb-4 px-[10px] bg-black rounded-full items-center flex flex-row cursor-pointer z-10"
        onClick={handleShowMapClick}>
        <div className=" text-white hover:shadow font-bold py-[14px] px-[10px]">
          Show {isPropertyOnMapVisible ? 'list' : 'map'}
        </div>
        {isPropertyOnMapVisible ? <HiListBullet size={20} color='#fff' /> : <HiOutlineMap size={20} color='#fff' />}
      </div>
    </>
  );
};

export default Home;