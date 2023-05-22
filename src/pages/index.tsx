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
	Flex,
} from '@chakra-ui/react';
import { CheckCircleIcon, CheckIcon, LinkIcon } from '@chakra-ui/icons';

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
import { BlockSix } from '../components/BlockSix';
import { BlockSeven } from '../components/BlockSeven';

const Index = () => {
	return (
		<Container minHeight="100vh" height={'fit-content'}>
			{/* <HeaderAddon /> */}
			<Header />
			<Main alignItems={'center'} justifyContent={'start'}>
				<Hero />
				<BlockTwo />

				<BlockThree />

				<BlockFour />

				<BlockFive />
				<BlockSix />
				<Box padding={20}></Box>
				<BlockSeven />
				<Footer />
			</Main>

		</Container>
	);
};

export default Index;
