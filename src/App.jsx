import './normalize.css'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Header } from './components/Header/Header'
import { Results } from './components/Results/Results'
import { Footer } from './components/Footer/Footer'
import { ItemPage } from './components/ItemPage/ItemPage'
import { Checkout } from './components/Checkout/Checkout';
import { BasketContext } from './BasketContext';
import { useState, useMemo } from 'react';
import { OrderConfirmation } from './components/OrderConfirmation/OrderConfirmation';

const App = () => {
    const [cart, setCart] = useState([]);
    const providerValue = useMemo(() => ({cart, setCart}), [cart, setCart]) 

    return (
        <div className={"App"}>
            <BasketContext.Provider value={providerValue}>
                <BrowserRouter>
                    <Header />
                            <Routes>
                                <Route
                                    path={"/product/:name"}
                                    element={<ItemPage />} />
                                <Route
                                    path={"/"}
                                    element={<Results/>} />
                                <Route
                                    path={"/checkout"}
                                    element={<Checkout />} />
                                <Route
                                    path={"/success"}
                                    element={<OrderConfirmation />} />
                            </Routes>
                    <Footer />                
                </BrowserRouter>
            </BasketContext.Provider>
        </div>
    );
}

export default App;