'use client';

import { IoMdClose } from 'react-icons/io';
import { TbBrandAirbnb } from 'react-icons/tb';

import { PropertyAmenitiesProps } from '../interfaces';

interface AmenitiesModalProps {
    isOpen?: boolean;
    onClose: () => void;
    amenities: PropertyAmenitiesProps[];
}

interface AmenitiesGroupedData {
    [group: string]: PropertyAmenitiesProps[];
}

const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
    isOpen,
    onClose,
    amenities
}) => {
    console.log('AMENITIES DATA: ', amenities);

    const groupedData: AmenitiesGroupedData = amenities.reduce((acc: { [key: string]: PropertyAmenitiesProps[] }, item: PropertyAmenitiesProps) => {
        if (!acc[item.group]) {
            acc[item.group] = [];
        }
        acc[item.group].push(item);
        return acc;
    }, {});

    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
                <div className="bg-white w-2/5 h-[90%] rounded-xl overflow-hidden">
                    <div className="bg-white pt-4 pl-4">
                        <button onClick={onClose} className="hover:bg-gray-100 rounded-full w-9 h-9 items-center justify-center flex">
                            <IoMdClose size={18} />
                        </button>
                    </div>
                    <div className="bg-white h-full p-4 overflow-y-scroll pt-10 px-6 pb-6 ">
                        <div className="text-2xl font-semibold mb-8">
                            What this place offers
                        </div>
                        <div className="pb-16">
                            {Object.entries(groupedData).map(([group, items]) => (
                                <div key={group} className="mb-8">
                                    <h2 className="text-lg font-semibold">{group}</h2>
                                    <div className="py-6">
                                        {items.map(({ title, available }) => (
                                            <div key={title} className="border-b flex items-center py-6">
                                                <div className="mr-3">
                                                    <TbBrandAirbnb size={18} />
                                                </div>
                                                <div className={`${available ? '' : 'line-through'} text-base text-[#222222]`}>
                                                    {title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AmenitiesModal;
