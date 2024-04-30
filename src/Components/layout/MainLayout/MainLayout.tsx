import MainRoute from '../../Routes/MainRoute/MainRoute';
import CoinLayout from '../CoinLayout/CoinLayout';
import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/layout/MainHeader/MainHeader';
import MainMenu from '../MainMenu/MainMenu';

import './MainLayout.css';

function MainLayout(): JSX.Element {
  return (
    <div className='MainLayout'>
      <header>
        <MainHeader />
      </header>

      <aside>
        <MainMenu/>
      </aside>

      <main>
        <MainRoute />
      </main>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default MainLayout;
