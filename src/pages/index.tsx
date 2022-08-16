import {
	Link as ChakraLink,
	Text,
	Code,
	List,
	ListIcon,
	ListItem,
	Box,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAddon } from '../components/HeaderAddon';
import { BlockOne } from '../components/BlockOne';
import { BlockTwo } from '../components/BlockTwo';
import { BlockThree } from '../components/BlockThree';
import { BlockFour } from '../components/BlockFour';
import { BlockFive } from '../components/BlockFive';

const Index = () => (
	<Container minHeight="100vh" height={'fit-content'}>
		<HeaderAddon />
		<Header />
		<Main alignItems={'center'} justifyContent={'start'}>
			<Box m={[2, 3]} />

			<BlockOne />
			<Box m={[2, 6]} />

			<BlockTwo />
			<Box m={[2, 6]} />

			<BlockThree />
			<Box m={[2, 6]} h={['1em', '4em']} />
			<BlockFour />
			<Box m={[2, 6]} h={['1em', '4em']} />
			<BlockFive />
		</Main>
		<Footer />
	</Container>
);

export default Index;
