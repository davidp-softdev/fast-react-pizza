import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

/**
 * Parent Route of all other elements
 */
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}

      <Header />
      <div className='overflow-scroll'>
        <main className='mx-auto max-w-3xl'>
          {/* Render nested route elements */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
