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
import CoinsFalling from '../public/CoinsFalling.svg'
import Image from 'next/image';
import DownloadAppleStore from '../public/DownloadAppleStore.svg';


export const BlockFive= ({ title }: { title: string }) => (
	<VStack paddingY={10} >
		<Box paddingY={2}><Image src={CoinsFalling}  sizes=''/></Box>

		<Box  width={{ xs: '70%', md: '50%' }}>

			<Heading
				alignContent={'center'}
				fontWeight={'regular'}
				fontSize={{ xs: '2xl', md: '6xl' }}
				lineHeight={'base'}
				color={'white'}
				paddingBottom={3}
				textAlign={'center'}
			>
				Where is culture<Box>headed next?</Box>
			</Heading>
		</Box>
		<Box width={{ xs: '70%', md: '50%' }}>
			<Text color={'grey'} textAlign={'center'} fontSize={{ xs: 'xl', md: '3xl' }}>
			Xsauce allows you to predict the price of the next drop. Use your knowledge of culture
			</Text>
		</Box>

		<Box paddingY={10}><DownloadAppleStore /></Box>

	</VStack>
);

BlockFive.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
