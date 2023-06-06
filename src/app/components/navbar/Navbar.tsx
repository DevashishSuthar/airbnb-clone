import Container from '@/app/components/common/Container';
import Categories from './Categories';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Filters from './Filters';

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px] relative">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex items-center justify-between">
          <Categories />
          <Filters />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
