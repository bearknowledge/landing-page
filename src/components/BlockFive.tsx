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
	useColorModeValue,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';

export const BlockFive = ({ ...props }) => {
	const buttonColor = useColorModeValue('brand.200', 'white');
	return (
		<Grid
			templateColumns="repeat(5, 1fr)"
			width={'100%'}
			// borderTop={'1px solid'}
			// borderColor={'brand.200'}
			px="2rem"
			py="3em"
			{...props}
		>
			<GridItem
				colSpan={{ xs: 5, md: 3 }}
				h="10"
				height={'fit-content'}
				alignSelf={'center'}
				paddingBottom={6}
			>
				<Stack>
					<ScrollAnimation animation="fade-up">
						<Heading fontWeight={'semibold'} fontSize="4xl" paddingY={3}>
							<Box display="inline-block" color={'brand.100'}>
								Culture
							</Box>
							&nbsp;is up next
						</Heading>
					</ScrollAnimation>
					<ScrollAnimation animation="fade-up">
						<Text fontSize="xl" paddingY={3}>
							Interested in learning more?
						</Text>
					</ScrollAnimation>
					<Stack
						spacing={4}
						direction={['column', 'row']}
						//TODO: fix overflow on buttons
					>
						<a
							href="https://docs.xsauce.io/getting-started/introduction"
							target={'_blank'}
							rel={'noreferrer'}
						>
							<ScrollAnimation animation={'fade-up'}>
								<Button
									paddingX={6}
									fontSize={'sm'}
									size={'lg'}
									variant="outline"
									color={buttonColor}
									borderColor={buttonColor}
								>
									<Text> Read our Docs</Text>
								</Button>
							</ScrollAnimation>
						</a>
					</Stack>
				</Stack>
			</GridItem>
		</Grid>
	);
};

BlockFive.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
