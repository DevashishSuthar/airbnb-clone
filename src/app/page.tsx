'use client';

import { useContext } from 'react';
import { HiOutlineMap } from 'react-icons/hi'

import ListingCard from "@/app/components/listings/ListingCard";
import Container from '@/app/components/common/Container';
import EmptyState from '@/app/components/common/EmptyState';
import SearchResults from '@/app/components/listings/SearchResults';

import listings from '@/app/static/listings.json';
import { AppContext } from './AppContext';

const Home = () => {
  const { location } = useContext(AppContext);

  const { data = [] } = listings;
  if (!data.length) {
    return <EmptyState />;
  }

  const handleShowMapClick = () => {
    console.log('INSIDE HANDLE SHOW MAP CLICK')
  }

  return (
    <>
      <Container>
        {location ?
          <SearchResults /> :
          (<div
            className="pt-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
          >
            {data.map((listing: any, index: number) => (
              <ListingCard
                key={index}
                listIndex={index}
                data={listing}
              />
            ))}
          </div>)
        }
      </Container>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 mb-4 bg-black rounded-full">
        <button
          onClick={handleShowMapClick}
          className=" text-white hover:shadow font-bold py-[14px] px-[19px] items-center">
          <span className="items-center">
            <span>
              Show map
            </span>
            {/* <span>
              <HiOutlineMap size={16} color='#fff' />
            </span> */}
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;