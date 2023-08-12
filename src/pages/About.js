import React from 'react'
import { FaDownload } from 'react-icons/fa'
import CV from '../images/assets/Shubham Kulkarni CV.pdf';
import { resume, personalInfo, stats, skills } from '../data';
import ResumeItem from '../components/ResumeItem';
import parse from 'html-react-parser';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const About = () => {
	return (
		<div className='flex justify-center '>
			<main className='container'>̥
				<section id='about' className='px-10'>
					<h2 className='text-5xl font-extrabold text-center mb-14'>
						About <span className='text-primary-50'>Me</span>
					</h2>
					<div className='grid lg:grid-cols-2 gap-10'>
						<div className='flex flex-col justify-center w-full'>
							<h3 className='text-2xl font-semibold mb-5 text-center sm:text-start'>Personal Info</h3>
							<ul className='grid sm:grid-cols-2 justify-center gap-6 mb-8'>
								{personalInfo.map(({ title, description }, index) => {
									return (
										<li className='max-w-xs w-full' key={index}>
											<span className='text-sm'>{title}</span>
											<span className='text-sm font-semibold text-secondary-40'>{description}</span>
										</li>
									)
								})}
							</ul>
							<div className='flex justify-center sm:justify-start'>
								<a href={CV} download='' className='button'>
									Download CV
									<span className='button__icon'>
										<FaDownload />
									</span>
								</a>
							</div>
						</div>
						<div className='grid sm:grid-cols-2 justify-center h-max gap-6 w-full'>
							{stats.map(({ no, title }, index) => {
								return (
									<div className='border sm:max-w-xs w-full h-max border-primary-50 rounded-md p-5 flex gap-4' key={index}>
										<h3 className='text-primary-50 text-4xl'>{no}</h3>
										<p className='text-sm'>{parse(title)}</p>
									</div>
								)
							})}
						</div>
					</div>
				</section>

				<hr className='h-[2px] bg-primary-50 w-full max-w-[40%] my-14 mx-auto shadow-secondary' />

				<section id='skills' className='px-10'>
					<h3 className='text-2xl font-semibold mb-5 text-center'>My Skills</h3>
					<div className='grid progress-grid-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-center'>
						{skills.map(({ title, percentage }, index) => {
							return (
								<div className='flex justify-center' key={index}>
									<div className='w-max ' >
										<div className='progress__circle'>
											<CircularProgressbar
												strokeWidth={7.5}
												text={`${percentage}`}
												value={percentage}
											/>
										</div>
										<h3 className='text-base font-normal aldrich text-center mt-5'>{title}</h3>
									</div>
								</div>
							)
						})}
					</div>
				</section>

				<hr className='h-[2px] bg-primary-50 w-full max-w-[40%] my-14 mx-auto shadow-secondary' />

				<div id='resume' className='px-10'>
					<h3 className='text-2xl font-semibold mb-5 text-center'>
						Experience & Education
					</h3>
					<div className='grid lg:grid-cols-2 gap-10'>
						<div className='grid gap-10 w-full'>
							{resume.map((val) => {
								if (val.category === 'experience') {
									return <ResumeItem key={val.id} {...val} />
								}
							})}
						</div>
						<div className='grid gap-10 w-full'>
							{resume.map((val) => {
								if (val.category === 'education') {
									return <ResumeItem key={val.id} {...val} />
								}
							})}
						</div>
					</div>

				</div>
			</main>
		</div>
	)
}

export default About