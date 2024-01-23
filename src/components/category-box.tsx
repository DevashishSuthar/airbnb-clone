'use client';

import Image from 'next/image';

interface CategoryBoxProps {
  icon: string;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon, label, selected }) => {

  return (
    <div
      className={`py-3 cursor-pointer text-center group hover:border-b-[1px] hover:border-b-[#717171]
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Image
        src={icon}
        width={24}
        height={24}
        alt={label}
        className="min-w-[20px] mx-auto"
      />
      <div className="font-medium text-[13px] overflow-hidden text-ellipsis whitespace-nowrap text-[#717171] group-hover:text-black">{label}</div>
    </div>
  );
};

export default CategoryBox;
