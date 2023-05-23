import {
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
import DownloadAppleStore from '../public/DownloadAppleStore.svg';



export const BlockThree = ({ title }: { title: string }) => (
	<VStack paddingY={10} >

		<Box width={{ xs: '70%', md: '50%' }}>
			<Text color={'white'} textAlign={'center'} fontSize={{ xs: 'xl', md: '4xl' }}>
				Download
			</Text>
			<Heading

				alignContent={'center'}
				fontWeight={'regular'}
				fontSize={{ xs: '2xl', md: '5xl', xl:'6xl' }}
				lineHeight={'base'}
				color={'white'}
				paddingBottom={3}
				textAlign={'center'}
			>
				Xsauce in<Box>the App Store</Box>
			</Heading>
		</Box>
		<Box width={{ xs: '70%', md: '50%' }}>
			<Text color={'grey'} textAlign={'center'} fontSize={{ xs: 'xl', md: '3xl' }}>
			Install Play for iOS and iPad today and start designing today for free!
			</Text>
		</Box>

		<Box paddingY={10}><DownloadAppleStore /></Box>

	</VStack>
);

BlockThree.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
