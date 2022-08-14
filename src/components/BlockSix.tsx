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

export const BlockSix = ({ title }: { title: string }) => (
	<Grid
		templateColumns="repeat(5, 1fr)"
		width={'100%'}
		borderY={'1px solid'}
		borderColor={'brand.200'}
		px="2rem"
	>
		<GridItem
			colSpan={{ xs: 5, md: 3 }}
			h="10"
			height={'fit-content'}
			alignSelf={'center'}
			paddingY={6}
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
					<Button
						paddingX={6}
						fontSize={'sm'}
						size={'lg'}
						variant="outline"
						color={'brand.200'}
						borderColor={'brand.200'}
					>
						Read Our Docs
					</Button>
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

BlockSix.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
