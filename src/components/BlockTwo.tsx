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
import MobileAppExample from '../public/mobile.svg'

export const BlockTwo = ({ title }: { title: string }) => (
	<VStack padding={10}>
		<Box width={{ xs: '70%', md: '50%' }}>
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
		<Box width={{ xs: '70%', md: '50%' }}>
			<Text color={'white'} textAlign={'center'} fontSize={{ xs: 'md', md: 'xl' }}>
				Xsauce allows you to predict the price of the next drop. Use your
				knowledge of culture and earn money
			</Text>
		</Box>
		<Box paddingY={2}>
			<a
				href="https://docs.xsauce.io/getting-started/introduction"
				target={'_blank'}
				rel={'noreferrer'}
			>
				<Button color={'brand.100'} variant="link" fontSize={{ xs: 'xs',md:'md'}}>
					<Text>Learn more</Text>
				</Button>
			</a>
		</Box>
		<MobileAppExample/>

	</VStack>
);

BlockTwo.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
