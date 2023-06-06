'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import CategoryBox from '@/app/components/CategoryBox';
import categories from '@/app/static/categories.json';

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Swiper
      slidesPerView={15}
      spaceBetween={10}
      slidesPerGroup={14}
      cssMode={true}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 4
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5,
          spaceBetween: 10,
          slidesPerGroup: 5
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 7,
          spaceBetween: 10,
          slidesPerGroup: 7
        },
        // when window width is >= 1536px
        1536: {
          slidesPerView: 10,
          spaceBetween: 10,
          slidesPerGroup: 10
        },
      }}
    >
      {categories.map((item, index) => (
        <SwiperSlide key={index}>
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
