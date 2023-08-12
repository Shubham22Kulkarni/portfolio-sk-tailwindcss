import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Themes />
			<Routes>
				<Route path='/' Component={Home} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
