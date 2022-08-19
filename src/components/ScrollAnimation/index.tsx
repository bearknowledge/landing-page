import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

interface animationProps {
	animation?: string;
	duration?: string;
	anchorPlacement?: string;

	children?: JSX.Element | JSX.Element[];
}

export const ScrollAnimation = ({
	animation,
	children,
	anchorPlacement,
	...props
}: animationProps) => {
	useEffect(() => {
		Aos.init({ duration: 800, easing: 'linear' });
	});

	return (
		<div
			data-aos={animation}
			data-aos-anchor-placement={anchorPlacement}
			//data-aos-offset="-100"

			{...props}
		>
			{children}
		</div>
	);
};

ScrollAnimation.defaultProps = {
	animation: 'fade-up',
	anchorPlacement: 'bottom-bottom',
};
