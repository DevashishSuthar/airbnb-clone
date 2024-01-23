'use client';

import Image from 'next/image';
import { IMG_USER_PROFILE } from '@/lib/data';

interface AvatarProps {
    src?: string | null | undefined;
    height?: number;
    width?: number;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, height = 30, width = 30, className = 'rounded-full' }) => {
    return (
        <Image
            className={className}
            height={height}
            width={width}
            alt="Avatar"
            src={src || IMG_USER_PROFILE}
        />
    );
};

export default Avatar;