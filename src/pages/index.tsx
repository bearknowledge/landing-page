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
import { motion } from 'framer-motion';
import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

const Index = () => {
	const ref = useRef(null);
	const { inViewport } = useInViewport(
		ref,
		{ rootMargin: '-100px' },
		{ disconnectOnLeave: false },
		{}
	);
	return (
		<Container minHeight="100vh" height={'fit-content'}>
			<HeaderAddon />
			<Header />
			<Main alignItems={'center'} justifyContent={'start'}>
				<Box m={[2, 3]} bgColor={'brand..100'}>
					<SlideFade offsetY={'2rem'} in={inViewport}>
						<Box ref={ref} bgColor={'brand..100'}>
							knjnksf
						</Box>
					</SlideFade>
				</Box>

				<Hero />
				<Box m={[2, 6]} />

				<BlockTwo />
				<Box m={[2, 6]} />

				<BlockThree />
				<Box m={[2, 6]} h={['1em', '4em']} />
				<BlockFour />
				<Box m={[2, 6]} h={['1em', '4em']} />
				{/* <BlockFive /> */}
			</Main>

			<Footer />
		</Container>
	);
};

export default Index;
