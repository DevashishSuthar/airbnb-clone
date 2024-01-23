'use client';

import { useCallback, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDetectClickOutside } from 'react-detect-click-outside';

import MenuItem from './menu-item';
import Avatar from '@/components/general/avatar';

const UserMenu: React.FC = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const ref = useDetectClickOutside({ onTriggered: () => setIsUserMenuOpen(false) });

    const toggleOpen = useCallback(() => {
        setIsUserMenuOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <RxHamburgerMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isUserMenuOpen && (
                <div
                    className="absolute rounded-xl shadow-md w-[150px] bg-white overflow-hidden right-0 top-12 text-sm z-10"
                    ref={ref}
                >
                    <MenuItem
                        label="Login"
                        onClick={() => console.log('LOGIN CALLED')}
                    />
                    <MenuItem
                        label="Sign up"
                        onClick={() => console.log('SIGN UP CALLED')}
                    />
                </div>
            )}
        </div>
    );
};

export default UserMenu;