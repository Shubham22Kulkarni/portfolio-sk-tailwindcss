import React from 'react'
import { FaDribbble, FaEnvelopeOpen, FaFacebookF, FaPhoneSquareAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
	return (
		<div className='flex justify-center mb-14'>
			<div className='container'>
				<section id='contact' className='px-10'>
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
	)
}

export default Contact