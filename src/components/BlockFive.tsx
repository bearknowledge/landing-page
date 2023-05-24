import {
	background,
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Show,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';
import CoinsFalling from '../public/CoinsFalling.svg';
import Image from 'next/image';
import DownloadAppleStore from '../public/DownloadAppleStore.svg';

export const BlockFive = ({ title }: { title: string }) => (
	<ScrollAnimation>
	<VStack paddingY={10}>
		<Box paddingY={2}>
			<Image src={CoinsFalling} sizes="" alt="coinsFalling" />
		</Box>

		<Box width={{ xs: '70%', md: '50%' }}>
			<Heading
				alignContent={'center'}
				fontWeight={'regular'}
				fontSize={{ xs: '2xl', md: '3xl', xl: '4xl' }}
				lineHeight={'base'}
				color={'white'}
				paddingBottom={3}
				textAlign={'center'}
			>
				Where is culture<Box>headed next?</Box>
			</Heading>
		</Box>
		<Box width={{ xs: '70%', md: '50%' }}>
			<Text
				color={'grey'}
				textAlign={'center'}
				fontSize={{ xs: 'xl', md: '3xl' }}
			>
				Stay tuned for our much anticipated launch of the Xchange on the App Store.
			</Text>
		</Box>

		<Box paddingY={10}>
			<Button disabled style={{background: 'transparent', border:'none', outline:'none', width: 'fit-content'}}>
			<DownloadAppleStore />
			</Button>
			
		</Box>
	</VStack>
	</ScrollAnimation>
);

BlockFive.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
