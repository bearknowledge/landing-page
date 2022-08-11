import {
	Link as ChakraLink,
	Text,
	Code,
	List,
	ListIcon,
	ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAddon } from '../components/HeaderAddon';
import { BlockOne } from '../components/BlockOne';
import { BlockTwo } from '../components/BlockTwo';

const Index = () => (
	<Container minHeight="100vh" height={'fit-content'}>
		<HeaderAddon />
		<Header />
		<Main alignItems={'center'} justifyContent={'start'}>
			<BlockOne />
			<BlockTwo />
		</Main>
	</Container>
);

export default Index;
