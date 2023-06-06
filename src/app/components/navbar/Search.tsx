'use client';

import { useSearchParams, usePathname } from 'next/navigation';
import { useMemo, useState, useRef, useCallback, useContext, KeyboardEventHandler, KeyboardEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { AppContext } from '@/app/AppContext';
import GuestForm from '@/app/components/GuestsForm';
import DatePickerModal from '@/app/components/DatePickerModal';

const Search = () => {
  const params = useSearchParams();
  const pathname = usePathname();

  const guestCount = params?.get('guestCount');
  const isDetailPageOpen = pathname.includes('listings/');
  const { location, isFullSearchOpen, setLocation, setIsFullSearchOpen } = useContext(AppContext);

  const [isGuestModalOpen, setIsGuestModalOpen] = useState<boolean>(false);
  const [isDatePickerMoalOpen, setIsDatePickerModalOpen] = useState<boolean>(false);
  const [isDestinationSearchMoalOpen, setIsDestinationSearchMoalOpen] = useState<boolean>(false);
  const [currentInOutState, setCurrentInOutState] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const closeAllModals = () => {
    setIsFullSearchOpen(false);
    setIsGuestModalOpen(false);
    setIsDatePickerModalOpen(false);
    setIsDestinationSearchMoalOpen(false);
    toggleInOutState('');
  };

  const ref = useDetectClickOutside({ onTriggered: closeAllModals });

  const locationLabel = useMemo(() => {
    if (location) {
      return location;
    }

    return 'Anywhere';
  }, [location]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add Guests';
  }, [guestCount]);

  const handleSearch = useCallback(() => {
    if (inputRef.current) {
      const location = inputRef.current?.value;
      setLocation(location.charAt(0).toUpperCase() + location.slice(1).toLowerCase());
      setIsFullSearchOpen(false);
    }
  }, []);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleSearch();
    }
  };

  const openGuestModal = () => {
    setIsGuestModalOpen(true);
    setIsDatePickerModalOpen(false);
    setIsDestinationSearchMoalOpen(false);
    toggleInOutState('');
  };

  const openDatePickerModal = () => {
    setIsDatePickerModalOpen(true);
    setIsGuestModalOpen(false);
    setIsDestinationSearchMoalOpen(false);
  };

  const toggleInOutState = (state: string) => {
    setCurrentInOutState(state);
  };

  const handleDestinationSearch = () => {
    setIsDestinationSearchMoalOpen(true);
    setIsDatePickerModalOpen(false);
    setIsGuestModalOpen(false);
    toggleInOutState('');
  };

  const renderFullSearch = () => {
    return (
      <>
        <div className="min-w-[500px]" ref={ref}>
          {/* Top Navigation Menu */}
          <div className="flex justify-evenly items-center">
            <div className="border-b-2 border-b-slate-600 cursor-pointer mr-[8px]">
              Stays
            </div>
            <div className="hover:border-b-2 hover:border-b-slate-600 cursor-pointer mr-[8px]">
              Experiences
            </div>
            <div className="hover:border-b-2 hover:border-b-slate-600 cursor-pointer">
              Online Experiences
            </div>
          </div>
          <div className="absolute bg-white shadow-md z-10 top-[70px] left-0 right-0 p-4">
            <div className="border w-[720px] mx-auto flex rounded-full transition cursor-pointer overflow-hidden bg-[#ebebeb]">
              <div className="flex items-center w-full">
                <div
                  onClick={handleDestinationSearch}
                  className={`py-[10px] px-[30px] group ${isDestinationSearchMoalOpen ? 'bg-white rounded-full shadow-lg' : 'hover:bg-[#dddddd] hover:rounded-full'}`}>
                  <div id="destinationBox" className="text-xs font-bold">Where</div>
                  <input
                    type="text"
                    className={`border-none border-transparent focus:border-none outline-none text-sm ${isDestinationSearchMoalOpen ? 'bg-white' : 'bg-[#ebebeb] group-hover:bg-[#dddddd]'}`}
                    placeholder="Search destinations"
                    ref={inputRef}
                    defaultValue={location}
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <div onClick={openDatePickerModal} >
                  <div className="flex flex-row">
                    <div
                      onClick={() => toggleInOutState('checkin')}
                      className={`py-[10px] px-[30px] ${currentInOutState === 'checkin' ? 'bg-white rounded-full shadow-lg' : 'hover:bg-[#dddddd] hover:rounded-full'}`}>
                      <div className="text-xs font-bold">
                        Check in
                      </div>
                      <div className="text-sm text-[#717171] hover:rounded-full">
                        Add dates
                      </div>
                    </div>

                    <div
                      onClick={() => toggleInOutState('checkout')}
                      className={`py-[10px] px-[30px] ${currentInOutState === 'checkout' ? 'bg-white rounded-full shadow-lg' : 'hover:bg-[#dddddd] hover:rounded-full'}`}>
                      <div className="text-xs font-bold">
                        Check out
                      </div>
                      <div className="text-sm text-[#717171] hover:rounded-full">
                        Add dates
                      </div>
                    </div>
                  </div>
                  {isDatePickerMoalOpen ? <div className="absolute">
                    <DatePickerModal />
                  </div> : null}
                </div>

                <div
                  className={`py-[10px] px-[30px] ${isGuestModalOpen ? 'bg-white rounded-full shadow-lg' : 'hover:bg-[#dddddd] hover:rounded-full'}`}
                  onClick={openGuestModal}
                >
                  <div className="text-xs font-bold">
                    Who
                  </div>
                  <div className="text-sm text-[#717171] hover:rounded-full">
                    Add Guests
                  </div>
                  {isGuestModalOpen ? <div className="absolute mt-[8px]">
                    <GuestForm />
                  </div> : null}
                </div>

                <div className="ml-auto pr-3">
                  <div
                    onClick={handleSearch}
                    className="p-2 bg-primary rounded-full text-white flex flex-row justify-center items-center"
                  >
                    <BiSearch size={18} />
                    Search
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderSearchButton = () => {
    return (
      <div className="p-2 bg-primary rounded-full text-white">
        <BiSearch size={18} />
      </div>);
  };

  return (
    <>
      {isFullSearchOpen ? (
        renderFullSearch()
      ) : (
        <>
          <div
            onClick={() => setIsFullSearchOpen(!isFullSearchOpen)}
            className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {isDetailPageOpen ? (<>
              <div className="flex flex-row items-center justify-between min-w-[348px]">
                <div className="text-sm font-semibold px-6">
                  Start your search
                </div>
                <div className="pl-6 pr-2 gap-3">
                  {renderSearchButton()}
                </div>
              </div>
            </>) :
              (<div className="flex flex-row items-center justify-between">
                <div
                  onClick={handleDestinationSearch}
                  className="text-sm font-semibold px-6"
                >
                  {locationLabel}
                </div>
                <div
                  onClick={() => { openDatePickerModal(); toggleInOutState('checkin') }}
                  className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                  Any Week
                </div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                  <div
                    className="hidden sm:block"
                    onClick={openGuestModal}
                  >{guestLabel}</div>
                  {renderSearchButton()}
                </div>
              </div>)}
          </div>
        </>
      )}
    </>
  );
};

export default Search;
