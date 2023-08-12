import React from 'react'
import parse from 'html-react-parser'

const ResumeItem = ({ icon, year, title, desc }) => {
	return (
		<div className='relative resume__item flex flex-row gap-3'>
			<div
				className='z-10 min-w-[40px] min-h-[40px] w-10 h-10 rounded-[50%] 
				 flex justify-center items-center bg-primary-50 text-secondary-100'
			>
				{icon}
			</div>
			<div className='pt-2'>
				<span className='bg-secondary-90 rounded-2xl text-xs px-3 py-1'>{year}</span>
				<h3 className='resume__subtitle'>{parse(title)}</h3>
				<p className='text-sm'>{desc}</p>
			</div>
		</div>
	)
}

export default ResumeItem