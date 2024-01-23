import React from 'react';

interface MapIconProps {
    label: string;
}

const MapIcon: React.FC<MapIconProps> = ({ label }) => {
    return (
        <div className="border-[1px] flex min-w-[56px] px-1 py-1 bg-white rounded-full text-center items-center justify-center font-bold">
            {label}
        </div>
    );
};

export default MapIcon;