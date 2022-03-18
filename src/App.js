import './normalize.css'
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header'
import { Results } from './components/Results/Results'
import { Footer } from './components/Footer/Footer'
import { ItemPage } from './components/ItemPage/ItemPage'

const App = () => {

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
                            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;