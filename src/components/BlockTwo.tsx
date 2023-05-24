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
	<ScrollAnimation>
	<VStack >
		<Box width={{ xs: '70%', md: '50%' }}>
			<Heading
				alignContent={'center'}
				fontWeight={'regular'}
				fontSize={{ xs: '2xl', md: '3xl', xl:'4xl' }}
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
			The Xchange allows you to predict how various streetwear items will perform on the resale market. Use your knowledge of culture to earn money.
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
		<MobileAppExample style={{width:'50%'}}/>

	</VStack>
	</ScrollAnimation>
);

BlockTwo.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
