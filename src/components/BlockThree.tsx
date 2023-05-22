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
import mobileAppExample from '../public/mobileAppExample.png'
import downloadInStore from '../public/downloadInAppStore.png'
import Image from 'next/image';


export const BlockThree = ({ title }: { title: string }) => (
	<VStack paddingY={10} >

		<Box width={'50%'}>
			<Text color={'white'} textAlign={'center'} fontSize={{ xs: 'xl', md: '4xl' }}>
				Download
			</Text>
			<Heading

				alignContent={'center'}
				fontWeight={'regular'}
				fontSize={{ xs: '2xl', md: '6xl' }}
				lineHeight={'base'}
				color={'white'}
				paddingBottom={3}
				textAlign={'center'}
			>
				Xsauce in<Box>the App Store</Box>
			</Heading>
		</Box>
		<Box width={'50%'}>
			<Text color={'grey'} textAlign={'center'} fontSize={'3xl'}>
			Install Play for iOS and iPad today and start designing today for free!
			</Text>
		</Box>

		<Box paddingY={10}><Image src={downloadInStore}  sizes=''/></Box>

	</VStack>
);

BlockThree.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
