import { Fragment, useContext } from 'react';
import { HeaderContext } from '../../../store/header-context';
import NavBar from './Nav';
import SideDrawer from './SideDrawer';

const Header = () => {
    const headerCtx = useContext(HeaderContext);
    const showSideDrawer = headerCtx.isSideDrawerShown;

    return (
    <Fragment>
      {!showSideDrawer && <NavBar />}
      {showSideDrawer && <SideDrawer />}
    </Fragment>
  );
};

export default Header;
