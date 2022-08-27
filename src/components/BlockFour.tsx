import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	Hide,
	Show,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import MarketImage from '../public/MarketImage.svg';
import { XSauceIconButton } from './XSauceIconButton';
import { DarkModeSwitch } from './DarkModeSwitch';

export const BlockFour = ({ title }: { title: string }) => {
	return (

		<React.Fragment>
			<Hide above="lg">
				<SimpleGrid column={1} width={'100%'} px="2rem">
					<Flex flexDirection={'column'}>
						<ScrollAnimation animation="fade-up">
							<Text fontSize="sm" paddingY={3}>
								WELCOME TO THE NEXT STAGE
							</Text>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Heading
								fontWeight={'semibold'}
								fontSize="4xl"
								lineHeight={'base'}
								paddingY={3}
							>
								Culture is the only constant.
								<Box display={'block'}>Xsauce unlocks the</Box>
								<Box display={'block'}>full potential assets.</Box>
							</Heading>
						</ScrollAnimation>
					</Flex>
					<Flex
						as={ScrollAnimation}
						overflow={'hidden'}
						// justifyContent={'center'}
						// alignItems={'center'}
						anchorPlacement={'center-bottom'}
						offset={'-200'}
						paddingY={5}
						
					>
						
						<MarketImage />
					</Flex>

					<Stack spacing={3} textAlign={'center'}>
						<ScrollAnimation animation="fade-up">
							<Stack alignItems={'center'}>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Instant payouts
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									No need to wait, cash out on your own terms
								</Text>
							</Stack>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Stack alignItems={'center'}>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Dynamic Value
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									Generate gains in all market conditions
								</Text>
							</Stack>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Stack alignItems={'center'}>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Protect Your Downside
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									Hedge your risk on sneakers you bought or intend to buy.
								</Text>
							</Stack>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Stack alignItems={'center'}>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Powerful tools
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									Tools to help you stay ahead of the curve and elevate your
									game.
								</Text>
							</Stack>
						</ScrollAnimation>
					</Stack>
				</SimpleGrid>
			</Hide>
			<Show above="lg">
				<Grid 
					width={'100%'}
					height={{ md: '800px', lg: '700px' }} //TODO: remove height
					templateRows={{ md: 'repeat(4, 2fr)' }}
					templateColumns={{ md: 'repeat(4, 1fr)' }}
					px="2rem"
				> 
					<GridItem rowSpan={{ md: 2 }} colSpan={{ md: 2 }}>
						<Flex flexDirection={'column'}>
							<Text fontSize="sm" paddingY={3}>
								WELCOME TO THE NEXT STAGE
							</Text>
							<ScrollAnimation animation="fade-up">
								<Heading
									fontWeight={'semibold'}
									fontSize="4xl"
									lineHeight={'base'}
									paddingY={0}
								>
									Culture is the only
									<Box display={'block'}>constant. Xsauce </Box>
									<Box display={'block'}>unlocks the full </Box>
									<Box display={'block'}>potential of assets.</Box>
								</Heading>
							</ScrollAnimation>
						</Flex>
					</GridItem>

					<GridItem rowSpan={{ md: 4 }} colSpan={{ md: 2 }}
					alignSelf={'center'}>
						
						<Flex
							justifyContent={'center'}
							alignItems={'center'}
							as={ScrollAnimation}
							anchorPlacement={'center-bottom'}
							offset={'-100'}
						>
							{/* TODO: export svg to public folder*/}
							<MarketImage />
							
						</Flex>
					</GridItem>

					<GridItem rowSpan={{ md: 1 }} colSpan={{ md: 1 }} paddingRight={5}>
						<ScrollAnimation animation="fade-up">
							<Stack>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Instant payouts
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									No need to wait, cash out on your own terms
								</Text>
							</Stack>
						</ScrollAnimation>
					</GridItem>
					<GridItem rowSpan={{ md: 1 }} colSpan={{ md: 1 }} paddingRight={5}>
						<ScrollAnimation animation="fade-up">
							<Stack>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Dynamic Value
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									Generate gains in all market conditions
								</Text>
							</Stack>
						</ScrollAnimation>
					</GridItem>

					<GridItem rowSpan={{ md: 1 }} colSpan={{ md: 1 }} paddingRight={5}>
						<ScrollAnimation animation="fade-up">
							<Stack>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Protect Your Downside
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									Hedge your risk on sneakers you bought or intend to buy
								</Text>
							</Stack>
						</ScrollAnimation>
					</GridItem>
					<GridItem rowSpan={{ md: 1 }} colSpan={{ md: 1 }} paddingRight={5}>
						<ScrollAnimation animation="fade-up">
							<Stack>
								<Heading fontSize="xl" paddingTop={3} fontWeight={'bold'}>
									Powerful tools
								</Heading>

								<Text fontSize="lg" paddingBottom={3}>
									Tools to help you stay ahead of the curve and elevate your
									game
								</Text>
							</Stack>
						</ScrollAnimation>
					</GridItem>
				</Grid>
			</Show>
		</React.Fragment>
	);
};

BlockFour.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
