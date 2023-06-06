'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IMG_APP_LOGO } from '@/app/helpers/ImageHelper';

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push('/')}
            className="hidden md:block cursor-pointer"
            src={IMG_APP_LOGO}
            height="100"
            width="100"
            alt="Logo"
        />
    );
};

export default Logo;