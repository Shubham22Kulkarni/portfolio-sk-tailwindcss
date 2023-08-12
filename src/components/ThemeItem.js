import React from 'react'
import { ImDroplet } from 'react-icons/im'
import { BsDropletFill } from 'react-icons/bs'
const ThemeItem = ({ color, img, changeColor }) => {
	return (
		<ImDroplet
			fill={`${color}`}
			className={`w-8 h-8`}
			onClick={() => {
				changeColor(color)
			}}
		/>
		// <img
		// 	src={img}
		// 	alt=''
		// 	className='theme__img'
		// 	onClick={() => {
		// 		changeColor(color)
		// 	}}
		// />
	)
}

export default ThemeItem