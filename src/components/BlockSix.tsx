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
import HypePhone from '../public/HypePhone.svg';
import SneakerInCase from '../public/SneakerInCase.svg';
import BrickBreak from '../public/BrickBreak.svg';
import Image from 'next/image';

export const BlockSix = ({ title }: { title: string }) => (
	<Stack direction={{ xs:'column', md:'row'}}  paddingY={10} paddingX={{xs:'10', md:'0'}} spacing={5} justifyContent={'center'} alignItems='stretch'>
		<Box padding={5} backgroundColor={"#121613"} borderRadius={10} width={["30%", "100%"]} >
			<VStack  >
				<Box paddingY={2} width={"full"}>
					<SneakerInCase/>
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
		<Box padding={5} backgroundColor={"#121613"} borderRadius={10} width={["30%", "100%"]}>
			<VStack height={"100%"}>
				<Box paddingY={2} width={"full"}>
					<BrickBreak/>
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
		<Box padding={5} backgroundColor={"#121613"} borderRadius={10} width={["30%", "100%"]}>
			<VStack  align='stretch'>
				<Box paddingY={2} width={"full"}>
					<HypePhone/>
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
	</Stack>
);

BlockSix.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
