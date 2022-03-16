import './App.css'
import chairData from './db.json'

const App = () => {

    return (
        <div className={"App"}>
            {chairData.results.map(chair => <p>{chair.productName}</p>)}
        </div>
    );
}

export default App;