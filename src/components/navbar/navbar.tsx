import Container from '@/components/general/container';
import Categories from './categories';
import Logo from './logo';
import Search from './search';
import UserMenu from './user-menu';
import Filters from './filters';
import { Suspense } from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px] relative">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Suspense>
              <Search />
            </Suspense>
            <UserMenu />
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex items-center justify-between">
          <Suspense>
            <Categories />
          </Suspense>
          <Filters />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
