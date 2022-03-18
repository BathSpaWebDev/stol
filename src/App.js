import './normalize.css'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Header } from './components/Header/Header'
import { Results } from './components/Results/Results'
import { Footer } from './components/Footer/Footer'
import { ItemPage } from './components/ItemPage/ItemPage'
import { Checkout } from './components/Checkout/Checkout';

const App = () => {
const basketItems = [ {
    "id": "_HqHX3LBN18",
    "quantity": 2,
    },
    {
    "id": "9489sFfgk4c",
    "quantity": 8,
}
];

    return (
        <div className={"App"}>
            <BrowserRouter>
                            <Routes>
                                <Route
                                    path={"/product/:name"}
                                    element={<><Header /><ItemPage /><Footer /></>} />
                                <Route
                                    path={"/"}
                                    element={<><Header /><Results /><Footer /></>} />
                                <Route
                                    path={"/checkout"}
                                    element={<><Header /><Checkout basketItems={basketItems}/><Footer /></>} />
                            </Routes>
                            
            </BrowserRouter>
        </div>
    );
}

export default App;