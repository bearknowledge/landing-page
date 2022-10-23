import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ScrollAnimation } from './ScrollAnimation';
import LiveMarket4CardImage from '../public/LiveMarket4CardImage.png'

import Image from 'next/image';
export const BlockThree = ({ title }: { title: string }) => (
	<Grid templateColumns="repeat(5, 1fr)" width={'100%'} px="2rem">
		<GridItem
			colSpan={{ xs: 12, md: 2 }}
			h="10"
			height={'fit-content'}
			alignSelf={'center'}
			paddingY={6}
			placeItems={'center'}
		>
			<Stack>
				<ScrollAnimation animation="fade-up">
					<Text fontSize="sm" paddingY={3}>
						PUT YOUR KNOWLEDGE TO WORK
					</Text>
				</ScrollAnimation>
				<ScrollAnimation animation="fade-up">
					<Heading
						fontWeight={'semibold'}
						fontSize="4xl"
						lineHeight={'base'}
						paddingY={3}
					>
						How do you profit from Xsauce?
					</Heading>
				</ScrollAnimation>
				<ScrollAnimation animation="fade-up">
					<Text fontSize="xl" paddingY={3}>
						Xsauce allows you to predict the price of the next drop. Put your
						knowledge of culture to the test and decide whether a sneaker,
						collab or drop will go up or down in price. Predict right and earn
						hard cash.
					</Text>
				</ScrollAnimation>
				<HStack spacing={4}>
					<ScrollAnimation animation="fade-up">
						<a
							href="https://docs.xsauce.io/getting-started/introduction"
							target={'_blank'}
							rel={'noreferrer'}
						>
							<Button
								paddingX={6}
								fontSize={'sm'}
								size={'lg'}
								variant="outline"
								color={'brand.200'}
								borderColor={'brand.200'}
							>
								<Text>Read our Docs</Text>
							</Button>
						</a>
					</ScrollAnimation>
				</HStack>
			</Stack>
		</GridItem>

		<GridItem
			colStart={{ xs: 1, md: 3 }}
			colEnd={{ xs: 6, md: 6 }}
			h="10"
			height={'fit-content'}
			alignSelf={'center'}
		>
			{/*TODO: Fix scaling on small sc */}
			<Flex
				as={ScrollAnimation}
				anchorPlacement={'center-bottom'}
				offset={'1'}
				overflow={'hidden'}
				justifyContent={'end'}
				alignItems={'center'}
				paddingLeft={{ md: 10 }}
			>
				<Image src={LiveMarket4CardImage} style={{ borderRadius: 10 }} />

			</Flex>
		</GridItem>
	</Grid>
);

BlockThree.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
