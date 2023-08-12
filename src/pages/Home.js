import React, { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Profile from '../images/assets/profile1.png';
// import Profile from '../images/assets/home.jpg';
import { Link } from 'react-router-dom'

import { FaDownload } from 'react-icons/fa'
import CV from '../images/assets/Shubham Kulkarni CV.pdf';
import { resume, personalInfo, stats, skills } from '../data';
import ResumeItem from '../components/ResumeItem';
import parse from 'html-react-parser';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

import PortfolioItem from '../components/PortfolioItem'
import { portfolio } from '../data'

import { FaDribbble, FaEnvelopeOpen, FaFacebookF, FaPhoneSquareAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';


const Home = () => {
	const handleClick = (id) => {
		let element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className='mt-16 lg:mt-0'>
			<section id='home' className='relative overflow-hidden lg:h-screen items-center gap-7 px-16 pt-4 lg:p-16 flex flex-col lg:flex-row'>
				<img
					src={Profile}
					alt='profile-img'
					className='rounded-full h-[160px] w-[160px]
				lg:rounded-3xl lg:h-full z-10 max-w-full lg:w-1/2 object-cover shadow-secondary'
				/>

				<div className='w-full'>
					<div className='max-w-[700px] m-auto pr-10'>
						<h1 className='text-4xl leading-tight'>
							<span className='text-primary-50'>
								Hey, I'm Shubham Kulkarni.
							</span> Web Developer
						</h1>
						<p className='mt-4 mb-8 leading-relaxed'>
							I'm Experienced web developer crafting digital solutions with clean code and stunning designs
						</p>
						<Link to='#about'
							className='button'
							onClick={() => {
								handleClick('about')
								//  window.location.replace('#about')
							}}
						>
							More About Me {' '}
							<span className='button__icon'>
								<FaArrowRight />
							</span>
						</Link>
					</div>
				</div>

				<div className='hidden lg:block absolute h-[200%] w-full bg-primary-50 -top-[50%] -left-[83%] -rotate-12'></div>
			</section>
			<hr className='h-[2px] bg-primary-50 w-full max-w-[40%] my-14 mx-auto shadow-secondary' />
			<div id='about' className='flex justify-center '>
				<main className='container'>̥
					<section className='px-10'>
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
			<hr className='h-[2px] bg-primary-50 w-full max-w-[40%] my-14 mx-auto shadow-secondary' />
			<div id='portfolio' className='flex justify-center '>
				<div className='container'>
					<section className='px-10'>
						<h2 className='text-5xl font-extrabold text-center mb-14'>My <span className='text-primary-50'>Portfolio</span></h2>
						<div className='grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6'>
							{portfolio.map((item) => {
								return <PortfolioItem key={item.id} {...item} />
							})}
						</div>
					</section>
				</div>
			</div>
			<hr className='h-[2px] bg-primary-50 w-full max-w-[40%] my-14 mx-auto shadow-secondary' />
			<div id='contact' className='flex justify-center mb-14'>
				<div className='container'>
					<section className='px-10'>
						<h2 className='text-5xl font-extrabold text-center mb-14'>Get In <span className='text-primary-50'>Touch</span></h2>
						<div className='grid lg:grid-cols-2 gap-10'>
							<div className='flex flex-col gap-5'>
								<h3 className='text-2xl font-semibold'>Don't be Shy !</h3>
								<p className='text-sm leading-6'>
									Feel free to get in touch with me. I am always open to discussing
									new projects, creative ideas or opportunities to be part of your Vesions.
								</p>
								<div className='flex flex-col gap-5'>
									<div className='flex items-center gap-4'>
										<FaEnvelopeOpen className='text-primary-50 text-3xl' />
										<div>
											<span className='text-sm'>Mail me</span>
											<h4 className='aldrich text-sm font-semibold'>shubhamkulkarni731@gmail.com</h4>
										</div>
									</div>
									<div className='flex items-center gap-4'>
										<FaPhoneSquareAlt className='text-primary-50 text-3xl' />
										<div>
											<span className='text-sm'>Call me</span>
											<h4 className='aldrich text-sm font-semibold'>+91 9604514363</h4>
										</div>
									</div>
								</div>
								<div className='flex gap-4'>
									<a href='https://facebook.com' className='w-10 h-10 rounded-[50%] flex justify-center items-center text-secondary-40 bg-secondary-90 hover:bg-primary-50 hover:text-white transition-all-ease'>
										<FaFacebookF />
									</a>
									<a href='https://twitter.com' className='w-10 h-10 rounded-[50%] flex justify-center items-center text-secondary-40 bg-secondary-90 hover:bg-primary-50 hover:text-white transition-all-ease'>
										<FaTwitter />
									</a>
									<a href='https://youtube.com' className='w-10 h-10 rounded-[50%] flex justify-center items-center text-secondary-40 bg-secondary-90 hover:bg-primary-50 hover:text-white transition-all-ease'>
										<FaYoutube />
									</a>
									<a href='https://dribble.com' className='w-10 h-10 rounded-[50%] flex justify-center items-center text-secondary-40 bg-secondary-90 hover:bg-primary-50 hover:text-white transition-all-ease'>
										<FaDribbble />
									</a>
								</div>
							</div>

							<form className='flex flex-col gap-7'>
								<div className='grid sm:grid-cols-2 gap-7'>
									<input
										type='text'
										placeholder='Your Name'
										className='bg-secondary-90 text-secondary-40 w-full px-6 py-3 rounded-3xl text-sm transition-all-ease form__control'
									/>
									<input
										type='email'
										placeholder='Your Email'
										className='bg-secondary-90 text-secondary-40 w-full px-6 py-3 rounded-3xl text-sm transition-all-ease form__control'
									/>
									<input
										type='text'
										placeholder='Your Subject'
										className='bg-secondary-90 text-secondary-40 w-full px-6 py-3 rounded-3xl text-sm transition-all-ease form__control'
									/>
								</div>
								<textarea
									rows={4}
									placeholder='Your Message'
									className='bg-secondary-90 text-secondary-40 w-full px-6 py-3 rounded-3xl text-sm transition-all-ease form__control'
								></textarea>

								<button className='button'>
									Send Message
									<soan className='button__icon text-3xl'>
										<FiSend />
									</soan>
								</button>
							</form>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Home