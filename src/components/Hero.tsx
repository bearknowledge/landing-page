import { ArrowUpIcon, CheckIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	FormControl,
	Grid,
	GridItem,
	Heading,
	Hide,
	HStack,
	Input,
	InputGroup,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';
import { useState } from 'react';
import { Banner } from './Banner';
import ChipsConnected from "../public/ChipsConnected.svg";

export const Hero = ({ title }: { title: string }) => {
	const toast = useToast();

	const [email, setEmail] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		let data = new FormData(event.target);
		//alert(`The name you entered was: ${email}`);

		console.log(data);
		const action = event.target.action;
		fetch(action, {
			method: 'POST',
			body: data,
		}).then(() => {
			//alert('Success!');

			toast({
				position: 'bottom-right',
				render: () => (
					<Flex
						flexDirection={{ xs: 'column', md: 'row' }}
						color="brand.200"
						p={3}
						bg="brand.100"
						maxWidth={'100%'}
						alignItems={'center'}
						borderRadius={6}
					>
						<CheckIcon margin={2} />
						<Text overflowWrap={'break-word'} textAlign={'center'}>
							You have successfully joined the waitlist!
						</Text>
					</Flex>
				),
			});
			setEmail('');
		});
	};

	return (
		<Grid
			templateColumns="repeat(5, 1fr)"
			templateRows="repeat(6, 1fr)"
			width={'100%'}
			placeItems={'center'}
			height={'calc(100vh - 64px)'}
			px="2rem"
			py="1rem"
		>
			<GridItem
				rowSpan={{ xs: 3, md: 4 }}
				colSpan={{ xs: 6, md: 2 }}
				height={'fit-content'}
				alignSelf={'center'}
				paddingY={6}
				placeSelf={'center'}
			>
				<Stack>
					<Heading
						fontWeight={'regular'}
						fontSize={{ xs: '2xl', md: '6xl' }}
						lineHeight={'base'}
						paddingY={3}
					>
						<Box color={'white'}>
							Culture is&nbsp;
							<Box display={'inline-block'} color={'white'}>
								your currency
							</Box>
						</Box>
					</Heading>
					<Text
						fontSize={{ xs: 'md', md: 'lg' }}
						color={'rgba(153, 153, 153, 1)'}
						paddingY={3}
					>
						Xsauce is a dynamic, decentralized ecosystem which allows you to
						translate your knowledge of culture into money in your pocket.
					</Text>
				</Stack>
			</GridItem>

			<GridItem
				rowSpan={{ xs: 3, md: 4 }}
				colStart={{ xs: 1, md: 3 }}
				colEnd={{ xs: 6, md: 6 }}
				height={'fit-content'}
				width={'100%'}
				placeSelf={'center'}
			>
				{/*TODO: Fix scaling on small sc */}
				<Flex
					justifyContent={'center'}
					alignItems={'center'}
					as={ScrollAnimation}
					anchorPlacement={'top-bottom'}
					offset={'120'}
					maxHeight={'50vh'}
					paddingLeft={{ md: '2em' }}
				>
					<ChipsConnected  />
				</Flex>
			</GridItem>

			<GridItem
				rowSpan={{ xs: 1, md: 2 }}
				colSpan={5}
				width={'100%'}
				height={'full'}
				border={'0.5.px'}
				paddingY={8}
				placeSelf={'center'}
				borderColor={'grey'}
				borderTopWidth={'1px'}
				borderBottomWidth={'1px'}
			>
				<Box paddingY={3}>
					<Text color={'white'} fontSize={{ xs: 'xs', md: 'xs' }}>
						Want early access to our Beta? Join the waitinglist
					</Text>
				</Box>
				<form
					id="email-form"
					method="POST"
					action="https://script.google.com/macros/s/AKfycbxzfszRCRSs2zbE7a4uDmHTUl-oxG_XHjiefFWXv7y-TWgZEOldmD9YcjavzL4ksCYYlw/exec"
					onSubmit={handleSubmit}
				>
					<HStack spacing="10px" align="flex-start">
						<InputGroup
							width={{ sx: '10%', md: '15%' }}
							alignSelf="center"
							border="0px"
						>
							<FormControl>
								<Input
									id="Email"
									name="Email"
									type="email"
									shadow={10}
									placeholder="Email@xyz.com"
									fontSize={{ xs: 'xs', md: 'sm' }}
									color="Colors.white"
									border={'1px'}
									borderBottomWidth={'0.5px'}
									boxShadow="0px 4px 15px rgba(47, 253, 118, 0.3)"
									borderRadius={15}
									borderColor={'brand.100'}
									background={'black'}
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</FormControl>
						</InputGroup>
						<Box
							width={{ sx: '10%', md: '15%' }}
							bg="brand.100"
							color="black"
							fontSize={{ xs: 'xs', md: 'xs' }}
							as={Button}
							whiteSpace={'break-spaces'}
							type="submit"
							borderRadius={'10px'}
							borderColor={'black'}
						>
							<Text whiteSpace={'break-spaces'} paddingX={1}>
								Join the waitlist
							</Text>
						</Box>
					</HStack>
				</form>
			</GridItem>
		</Grid>
	);
};

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
