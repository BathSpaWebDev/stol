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
            <Header />
                            <Routes>
                                <Route
                                    path={"/product/:name"}
                                    element={<ItemPage />} />
                                <Route
                                    path={"/"}
                                    element={<Results />} />
                                <Route
                                    path={"/checkout"}
                                    element={<Checkout basketItems={basketItems}/>} />
                            </Routes>
            <Footer />                
            </BrowserRouter>
        </div>
    );
}

export default App;