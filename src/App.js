import './normalize.css'
import './App.css'
import { Header } from './components/Header/Header'
import { Results } from './components/Results/Results'
import { Footer } from './components/Footer/Footer'

const App = () => {

    return (
        <div className={"App"}>
          <Header />
          <Results />
          <Footer />
        </div>
    );
}

export default App;