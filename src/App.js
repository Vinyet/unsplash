import { useState } from 'react';
import Home from './pages/Home';
import searchImages from './api';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    const [images, setImages] = useState();

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <Router>
        <div>
            <Routes>
                <Route path="/" exact element={<Home images={images} handleSubmit={handleSubmit} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route render={() => <NotFound />} />
            </Routes>
        </div>
        </Router>
    )
}

export default App;
