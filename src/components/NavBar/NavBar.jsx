import { Header, NavBarItem } from './NavBar.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../services';

export const NavBar = () => {
  return (
    <>
      <Header>
        <NavBarItem to="/">Home</NavBarItem>
        <NavBarItem to="/movies">Movies</NavBarItem>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
