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
import Image from 'next/image';


export const BlockTwo = ({ title }: { title: string }) => (
	<VStack padding={10}>
		<Box width={'50%'}>
			<Heading
				alignContent={'center'}
				fontWeight={'regular'}
				fontSize={{ xs: '2xl', md: '6xl' }}
				lineHeight={'base'}
				color={'white'}
				paddingY={3}
				textAlign={'center'}
			>
				Predict and cash out
			</Heading>
		</Box>
		<Box width={'50%'}>
			<Text color={'white'} textAlign={'center'}>
				Xsauce allows you to predict the price of the next drop. Use your
				knowledge of culture and earn money
			</Text>
		</Box>
		<Box>
			<a
				href="https://docs.xsauce.io/getting-started/introduction"
				target={'_blank'}
				rel={'noreferrer'}
			>
				<Button color={'brand.100'} variant="link" fontSize={'md'}>
					<Text>Learn more</Text>
				</Button>
			</a>
		</Box>
		<Image src={mobileAppExample} style={{ borderRadius: 15 }} />

	</VStack>
);

BlockTwo.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
