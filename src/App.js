import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Themes from './components/Themes';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Themes />
			<Routes>
				<Route path='/' Component={Home} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
