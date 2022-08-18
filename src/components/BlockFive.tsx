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

export const BlockFive = ({ ...props }) => (
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
				<Heading fontWeight={'semibold'} fontSize="4xl" paddingY={3}>
					<Box display="inline-block" color={'brand.100'}>
						Culture
					</Box>{' '}
					is up next
				</Heading>
				<Text fontSize="xl" paddingY={3}>
					Interested in learning more?
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
				</Stack>
			</Stack>
		</GridItem>
	</Grid>
);

BlockFive.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
