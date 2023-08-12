import React, { useEffect, useRef, useState } from 'react'
import { themes } from '../data'
import { RiPaintBrushFill } from 'react-icons/ri'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import ThemeItem from './ThemeItem'

const getStorageColor = () => {
	let color = 'hsl(19, 80%, 50%)';
	if (localStorage.getItem('color')) {
		color = localStorage.getItem('color')
	}
	return color;
}
const getStorageTheme = () => {
	let theme = 'light-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme;
}

const Themes = () => {
	const switcherRef = useRef()
	const [showSwitcher, setShowSwitcher] = useState(false)
	const [color, setColor] = useState(getStorageColor());
	const [theme, setTheme] = useState(getStorageTheme());

	const changeColor = (color) => {
		setColor(color);
	}
	const toggleTheme = (color) => {
		if(theme==='light-theme'){
			setTheme('dark-theme');
		} else {
			setTheme('light-theme')
		}
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--primary-50', color)
		localStorage.setItem('color', color)
	}, [color])

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem('theme', theme)
	}, [theme])

	useEffect(() => {
		const checkIfClickedOutside = e => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (showSwitcher && switcherRef.current && !switcherRef.current.contains(e.target)) {
				setShowSwitcher(false)
			}
		}

		document.addEventListener("mousedown", checkIfClickedOutside)

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	}, [showSwitcher])

	return (
		<div>
			<div ref={switcherRef} className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
				<div
					className='style__switcher-toggler'
					onClick={() => {
						setShowSwitcher(!showSwitcher)
					}}
				>
					<RiPaintBrushFill />
					{/* <FaCog /> */}
				</div>
				<div className='theme__toggler' onClick={toggleTheme}>
					{theme==='light-theme' ? <BsMoonStars /> : <BsSun />}
				</div>

				<h3 className='style__switcher-title'>Style Switcher</h3>
				<div className='style__switcher-items'>
					{themes.map((theme, index) => {
						return (
							<ThemeItem key={index} {...theme} changeColor={changeColor} />
						)
					})}
				</div>

				<div
					className='style__switcher-close'
					onClick={() => {
						setShowSwitcher(!showSwitcher)
					}}
				>
					&times;
				</div>
			</div>
		</div>
	)
}

export default Themes