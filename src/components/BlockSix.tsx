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
import HypePhone from '../public/HypePhone.png';
import SneakerInCase from '../public/SneakerInCase.png';
import BrickBrake from '../public/BrickBreak.png';
import Image from 'next/image';

export const BlockSix = ({ title }: { title: string }) => (
	<HStack paddingY={10} spacing={5} justifyContent={'center'} align='stretch'>
		<Box padding={5} backgroundColor={"#121613"} borderRadius={10} width={"30%"} >
			<VStack >
				<Box paddingY={2} width={"full"}>
					<Image src={SneakerInCase} sizes="" />
				</Box>
				<Heading
					w={"100%"}
					fontWeight={'regular'}
					fontSize={{ xs: 'lg', md: '3xl' }}
					lineHeight={'base'}
					color={'white'}
					paddingBottom={3}
					textAlign={'start'}

				>
					Predict for cash
				</Heading>
					<Text color={'grey'} textAlign={'start'} fontSize={'xl'}>
						Xsauce allows you to predict the price of the next drop. Use your
						knowledge of culture
					</Text>

			</VStack>
		</Box>
		<Box padding={5} backgroundColor={"#121613"} borderRadius={10} width={"30%"}>
			<VStack >
				<Box paddingY={2} width={"full"}>
					<Image src={BrickBrake} sizes="" />
				</Box>
				<Heading
					w={"100%"}
					fontWeight={'regular'}
					fontSize={{ xs: 'lg', md: '3xl' }}
					lineHeight={'base'}
					color={'white'}
					paddingBottom={3}
					textAlign={'start'}

				>
					Balance your risk
				</Heading>
					<Text color={'grey'} textAlign={'start'} fontSize={'xl'}>
					Get exposure to sneaker based indices from multiple brand
					</Text>

			</VStack>
		</Box>
		<Box padding={5} backgroundColor={"#121613"} borderRadius={10} width={"30%"}>
			<VStack  align='stretch'>
				<Box paddingY={2} width={"full"}>
					<Image src={HypePhone} sizes="" />
				</Box>
				<Heading
					w={"100%"}
					fontWeight={'regular'}
					fontSize={{ xs: 'lg', md: '3xl' }}
					lineHeight={'base'}
					color={'white'}
					paddingBottom={3}
					textAlign={'start'}

				>
					Earn Your Respect.

				</Heading>
					<Text color={'grey'} textAlign={'start'} fontSize={'xl'}>
					Claim your spot on the leaderboard. Be known for having an eye for culture.


					</Text>

			</VStack>
		</Box>
	</HStack>
);

BlockSix.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
