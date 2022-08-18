import {
	Link as ChakraLink,
	Text,
	Code,
	List,
	ListIcon,
	ListItem,
	Box,
	keyframes,
	ScaleFade,
	SlideFade,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAddon } from '../components/HeaderAddon';
import { Hero } from '../components/Hero';
import { BlockTwo } from '../components/BlockTwo';
import { BlockThree } from '../components/BlockThree';
import { BlockFour } from '../components/BlockFour';
import { BlockFive } from '../components/BlockFive';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ScrollAnimation } from '../components/ScrollAnimation';

const Index = () => {
	// useEffect(() => {
	// 	Aos.init({ duration: 1000 });
	// }, []);
	return (
		<Container minHeight="100vh" height={'fit-content'}>
			<HeaderAddon />
			<Header />
			<Main alignItems={'center'} justifyContent={'start'}>
				<ScrollAnimation animation="fade-up">
					<Box m={[2, 3]} />
					<Hero />
				</ScrollAnimation>
				<ScrollAnimation animation="fade-up">
					<Box m={[2, 6]} />
					<BlockTwo />
				</ScrollAnimation>

				<ScrollAnimation animation="fade-up">
					<Box m={[2, 6]} />
					<BlockThree />
				</ScrollAnimation>

				<ScrollAnimation animation="fade-up">
					<Box m={[2, 6]} h={['1em', '4em']} />
					<BlockFour />
				</ScrollAnimation>
				<Box m={[2, 6]} h={['1em', '4em']} />
				{/* <BlockFive /> */}
			</Main>

			<Footer />
		</Container>
	);
};

export default Index;
