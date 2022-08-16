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

export const BlockFive = ({ title }: { title: string }) => (
	<Grid
		templateColumns="repeat(5, 1fr)"
		width={'100%'}
		borderY={'1px solid'}
		borderColor={'brand.200'}
		px="2rem"
		py="3em"
	>
		<GridItem
			colSpan={{ xs: 5, md: 3 }}
			h="10"
			height={'fit-content'}
			alignSelf={'center'}
			paddingBottom={6}
		>
			<Stack>
				<Text fontSize="4xl" paddingY={3}>
					Futurise digital assets on blockchain
				</Text>
				<Text fontSize="xl" paddingY={3}>
					Predict and earn cash for your knowledge
				</Text>
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
						<Button
							paddingX={6}
							fontSize={'sm'}
							size={'lg'}
							variant="outline"
							color={'brand.200'}
							borderColor={'brand.200'}
						>
							<Text> Read our Docs</Text>
						</Button>
					</a>
					{/* <Button
						paddingX={6}
						fontSize={'sm'}
						size={'lg'}
						variant="outline"
						color={'brand.200'}
						borderColor={'brand.200'}
					>
						Download Whitepaper
					</Button>
					<Button
						paddingX={6}
						fontSize={'sm'}
						size={'lg'}
						variant="solid"
						bg={'brand.100'}
					>
						<Text> Get whitelisted</Text>
					</Button> */}
				</Stack>
			</Stack>
		</GridItem>
	</Grid>
);

BlockFive.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
