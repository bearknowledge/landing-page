import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

interface animationProps {
	animation?: string;
	children?: JSX.Element | JSX.Element[];
}

export const ScrollAnimation = ({
	animation,
	children,
	...props
}: animationProps) => {
	useEffect(() => {
		Aos.init({ duration: 900 });
	});

	return (
		<div data-aos={animation} data-aos-anchor-placement="top-bottom" {...props}>
			{children}
		</div>
	);
};

ScrollAnimation.defaultProps = {
	animation: 'fade-up',
};
