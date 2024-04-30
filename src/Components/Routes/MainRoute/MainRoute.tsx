import { Route, Routes } from "react-router-dom";
import Main from "../../Pages/Main/Main";
import Assets from "../../Pages/Assets/Assets";
import Rates from "../../Pages/Rates/Rates";
import Page404 from "../../Pages/Page404/Page404";
import Login from "../../layout/LoginOld/LoginOld";
import Register from "../../layout/Register/Register";
import Exchanges from "../../Pages/Exchanges/Exchanges";
import ExchangesID from "../../Pages/ExchangesID/ExchangesID";

//remember to install rect-router-dom
//remember to install rect-dom

function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/assets" element={<Assets/>}/>
                <Route path="/rates" element={<Rates/>}/>
                <Route path="/exchanges" element={<Exchanges/>}/>
                <Route path="/exchangesId/:id" element={<ExchangesID/>}/>
                <Route path="*" element={<Page404/>}/>
                
            </Routes>
        </div>
    );
}

export default MainRoute;
