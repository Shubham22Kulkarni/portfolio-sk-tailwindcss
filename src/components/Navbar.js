import React, { useEffect, useRef, useState } from 'react'
import { links } from '../data';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const menuRef = useRef()
	const location = useLocation();
	
	let origin = window.location.origin;
	let path = window.location.href;
	console.log(origin, path);
	let newPath = (path.replace(origin, '')).replace('/','')

	const [currentPath, setCurrentPath] = useState(window.location.hash);

	const [showMenu, setShowMenu] = useState(false)

	console.log("current:-", currentPath);
	const handleClick = (id) => {
		let element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	};

	// useEffect(() => {
	// 	const handleHashChange = () => {
	// 	  const hash = window.location.hash;
	// 	  setCurrentPath(hash);
	// 	};
	
	// 	window.addEventListener('hashchange', handleHashChange);
	
	// 	return () => {
	// 	  window.removeEventListener('hashchange', handleHashChange);
	// 	};
	//   }, [window.location.href]);

	useEffect(() => {
		const checkIfClickedOutside = e => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (showMenu && menuRef.current && !menuRef.current.contains(e.target)) {
				if(showMenu) setShowMenu(false)
			}
		}

		document.addEventListener("mousedown", checkIfClickedOutside)

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	}, [showMenu])

	return (
		<nav className='nav'>
			<div ref={menuRef} className={`${showMenu ? 'show-menu' : ''} nav__menu`}>
				<ul className='nav__list'>
					{links.map(({ name, icon, path, hashId }, index) => {
						return (
							<li className='nav__item' key={index}>
								<Link
									to={path}
									className={`${currentPath == path ? 'active-nav' : ''} nav__link`}
									onClick={() => { 
										handleClick(hashId)
										setCurrentPath(path)
										// window.location.replace(path)
										setShowMenu(false) }}
								>
									{icon}
									<h3 className='nav__name'>{name}</h3>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			<div ref={menuRef} className={`${showMenu ? 'animate-toggle' : ''} nav__toggle`} onClick={() => { setShowMenu(!showMenu) }}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/* {!showMenu
				?
				<FaBars className='hamburger lg:hidden' onClick={() => { setShowMenu(true) }} />
				:
				<GrFormClose className='hamburger lg:hidden' onClick={() => { setShowMenu(false) }} />
			} */}
		</nav>
	)
}

export default Navbar