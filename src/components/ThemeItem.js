import React from 'react'
import { ImDroplet } from 'react-icons/im'
const ThemeItem = ({ color, img, changeColor }) => {
	return (
		<ImDroplet
			fill={`${color}`}
			className={`w-8 h-8`}
			onClick={() => {
				changeColor(color)
			}}
		/>
	)
}

export default ThemeItem