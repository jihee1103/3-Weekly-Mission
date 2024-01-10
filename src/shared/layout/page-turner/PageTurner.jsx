import { Fragment, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const PageTurner = () => {
  // 아직 어디가 웹사이트의 루트 페이지인지 명확하지 않아서 일단은 shared 페이지로 강제이동.,.
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === '/') {
      navigate('shared');
    }
  }, [pathname, navigate]);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default PageTurner;
