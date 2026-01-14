'use client'

import { useEffect, useState } from "react"

export default function BackToTop({ 
  target, 
  backAlt 
}: { 
  target: string; 
  backAlt?: boolean;
}) {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setHasScrolled(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const handleClick = () => {
		const element = document.querySelector(target);
		if (element) {
			window.scrollTo({
				top: (element as HTMLElement).offsetTop,
				behavior: 'smooth'
			})
		}
	}

	return (
		<>
			{hasScrolled && (
				<a className={`go-top show ${backAlt ? "back-alt" : ""}`} onClick={handleClick}>
					<i className="icon-ctrl"></i>
				</a>
			)}
		</>
	)
}

