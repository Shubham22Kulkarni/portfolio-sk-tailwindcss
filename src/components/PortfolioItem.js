import React, { useEffect, useRef, useState } from 'react'

const PortfolioItem = ({ img, title, details }) => {
	const modalRef = useRef()
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	}

	useEffect(() => {
		const checkIfClickedOutside = e => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (modal && modalRef.current && !modalRef.current.contains(e.target)) {
				setModal(false)
			}
		}

		document.addEventListener("mousedown", checkIfClickedOutside)

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	}, [modal])

	return (
		<div className="portfolio__item">
			<img src={img} alt="" className="cursor-pointer w-full h-[250px] object-cover align-middle" />
			<div className="portfolio__hover" onClick={toggleModal}>
				<h3 className="portfolio__title">{title}</h3>
			</div>

			{modal ? (
				<div
					className={`fixed p-6 bg-black bg-opacity-60 inset-0 grid place-items-center 
					${modal ? "block" : "hidden"}`}
					style={{ zIndex: 1000 }}
				>
					<div ref={modalRef} className="relative bg-secondary-90 p-6 max-w-xl w-full rounded-xl inline-block ">
						<div className='flex justify-between mb-5 items-center'>
							<h3 className="text-primary-50 text-center text-lg sm:text-2xl tracking-wide ">{title}</h3>
							<svg
								className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
								onClick={toggleModal}
								stroke="currentColor"
								fill="none"
								stroke-width="0"
								viewBox="0 0 24 24"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
									fill="red"
								></path>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
									fill="red"
								></path>
							</svg>
						</div>
						<ul className="flex flex-row flex-wrap gap-5 mb-5">
							{details.map(({ icon, title, desc }, index) => {
								return (
									<li className="flex items-center gap-2 max-w-[250px] w-full" key={index}>
										<span className="flex">{icon}</span>
										<div className="text-primary-50 text-sm">
											<span className="">{title}</span>
											{title.includes('Preview') ?
												<a href={desc} target='blank' className='font-semibold hover:underline'>{desc}</a>
												: <span className=" font-semibold">{desc}</span>
											}

										</div>
									</li>
								);
							})}
						</ul>
						<img src={img} alt="" className="w-full h-[250px] object-cover align-middle" />
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default PortfolioItem