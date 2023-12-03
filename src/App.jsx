import './App.scss';
import About from './components/About/About';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Latest from './components/Latest/Latest';
import Reviews from './components/Reviews/Reviews';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <Latest />
            <About />
            <Reviews />
            <Footer />
        </div>
    );
}

export default App;
