'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { IMG_FILTER } from '@/app/helpers/ImageHelper';

const Filters = () => {
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <div
            className="hidden py-2 px-5 md:flex items-center justify-items-center md:justify-around border rounded-lg cursor-pointer ml-[10px]">
            <Image
                src={IMG_FILTER}
                width={14}
                height={14}
                style={{ marginRight: 10 }}
                alt="Filter"
            />
            Filters
        </div>
    );
};

export default Filters;