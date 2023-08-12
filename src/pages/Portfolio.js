import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import { portfolio } from '../data'


const Portfolio = () => {
	return (
		<div className='flex justify-center '>
			<div className='container'>
				<section id='portfolio' className='px-10'>
					<h2 className='text-5xl font-extrabold text-center mb-14'>My <span className='text-primary-50'>Portfolio</span></h2>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6'>
						{portfolio.map((item) => {
							return <PortfolioItem key={item.id} {...item} />
						})}
					</div>
				</section>
			</div>
		</div>
	)
}

export default Portfolio