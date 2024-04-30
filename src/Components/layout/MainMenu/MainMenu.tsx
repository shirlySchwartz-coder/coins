import { NavLink } from "react-router-dom"
import "./MainMenu.css"

function MainMenu() : JSX.Element{
return (
  <div className="MainMenu">
    <NavLink to='/'><h1>Main menu</h1></NavLink><hr />
    <b>Assets</b><hr />
    <NavLink to='/assets'>Assets</NavLink><br />
    assets by ID <br />
    ID history <br />
    ID markets <br /><br />
    <b>Rates</b> <hr />
    <NavLink to="/rates">Rates</NavLink><br/>
    <b>Exchanges</b><hr />
    <NavLink to='/exchanges'>Exchanges </NavLink><br />
    <NavLink to="/exchangesId/binance">Exchanges by ID</NavLink> <br/><br/>
    <b>Markets</b><hr />
    Markets
  </div>
);
}

export default MainMenu


//My version
/* import { MenuType } from '../model/MenuType';
import './MainMenu.css';
import MenuItem from '../../items/MenuItem/MenuItem';

function MainMenu(): JSX.Element {
 
  let URL_COIN='api.coincap.io/v2/';
  let menuList = [
    { id: 1, menuName: 'Assets', urlAddress: URL_COIN+'assets' },
    { id: 2, menuName: 'Rates', urlAddress: URL_COIN+'rates' },
    { id: 3, menuName: 'Exchanges', urlAddress: URL_COIN+'exchanges' },
    { id: 4, menuName: 'Markets', urlAddress: URL_COIN+'markets' }, 
  ];

  return (
    <div className='MainMenu'>
      <h2>Menu</h2>
      <hr />
      <div className='MenuItemsList'>
        {menuList.map((item) => (
          <MenuItem key={item.id}
          id={item.id}
          menuName={item.menuName}
          urlAddress={item.urlAddress}
          />
        ))}
      </div>
    </div>
  );
} 

export default MainMenu;
*/