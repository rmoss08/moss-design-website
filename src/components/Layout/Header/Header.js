import { Fragment, useContext } from 'react';
import { HeaderContext } from '../../../store/header-context';
import Nav from './Nav';
import Menu from './Menu';

const Header = () => {
    const headerCtx = useContext(HeaderContext);

    return (
    <Fragment>
      <Nav />
      <Menu />
    </Fragment>
  );
};

export default Header;
