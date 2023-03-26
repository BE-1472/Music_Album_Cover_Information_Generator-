import Register from './Register';
import ImageUpload from './ImageUpload';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
            <Upload/>
            <Route path = "/" exact component = {<Home/>}/>
            <Route path = "/Register" component = {<Register/>}/>
        </Routes>

    </Router>
    );
}

export default App;