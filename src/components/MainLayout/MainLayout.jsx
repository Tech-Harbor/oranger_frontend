import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '../Loader/Loader.jsx';
import Slider from '../../ui_reuse/slider/Slider.jsx';
import ProductCardListItem from '../ProductCardListItem/ProductCardListItem.jsx';
import SideBar from '../SideBar/SideBar.jsx';

import useGetData from '../../hooks/useGetData.js';
import s from './MainLayout.module.scss';

const MainLayout = () => {
  const { data } = useGetData('products');
  const location = useLocation().pathname;

  const isHomePage = location === '/';

  return (
    <div>
      <Header />
      {/* TODO: Hi, dev : ) Look at the "shell" class below. */}
      {/* I don't know what is that and why it needs. Delete it if it doesn't need anymore */}
      <main className={`${s.shell} ${s.mainContainer}`}>
        {isHomePage && <SideBar />}

        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      {!data && <Loader />}

      {data && (
        <Slider
          settings={{ type: 'carousel', startAt: 0, perView: 4, gap: 100 }}
          title="Новинки"
          slideArray={data.map(i => (
            <ProductCardListItem key={i.id} name={i.name} price={i.price} image={i.image[0]} />
          ))}
        />
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;
