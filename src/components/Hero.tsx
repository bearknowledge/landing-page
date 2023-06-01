import { ArrowUpIcon, CheckIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
	AspectRatio,
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
	Tag,
	TagLabel,
	TagLeftIcon,
	Text,
	useDimensions,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';
import { useEffect, useState } from 'react';
import { Banner } from './Banner';
import ChipsConnected from '../public/ChipsConnected.svg';
import Marquee from 'react-fast-marquee';
import { FaArrowUp } from 'react-icons/fa';

//import { useDimensions } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => {
	const toast = useToast();

	const [email, setEmail] = useState('');

	const data = [
		{ price: '120.98', name: 'Jordan 4 Retro Midnight Navy' },
		{ price: '144.22', name: 'Jordan 1 MidIce Blue (GS)' },
		{ price: '20.45', name: 'Adidas Forum Buckle Low' },
		{ price: '248.39', name: 'Jordan 1 MidCanvas Ice Blue (GS)' },
		{ price: '99.90', name: 'Nike Air Force 1 low Supreme White' },
	];

	const generateListItems = () => {
		return data.map((item, index) => (
			<Box
				key={index}
				as="span"
				maxWidth="100%"
				display="inline-block"
				marginRight="1rem"
			>
				<HStack justifyContent={'center'} height={'100%'}>
					<HStack
						height={'20px'}
						width={'fit-content'}
						p={1}
						py={2}
						borderWidth={'0.5px'}
						spacing={'1'}
						borderColor={'brand.100'}
						borderRadius={'5'}
					>
						<TriangleUpIcon
							color={'brand.100'}
							height={{ xs: '8px', md: '10px' }}
							width={{ xs: '8px', md: '10px' }}
						></TriangleUpIcon>
						<Text
							color={'brand.100'}
							fontWeight={'normal'}
							fontSize={{ xs: 'xs ', md: 'xs' }}
						>
							${item.price}
						</Text>
					</HStack>
					<Text
						color={'brand.1100'}
						fontWeight={'300'}
						fontSize={{ xs: 'xs ', md: 'md' }}
					>
						{item.name}
					</Text>
				</HStack>
			</Box>
		));
	};

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
		<VStack
			alignItems={'center'}
			justifyContent={'start'}
			spacing="1.5rem"
			width="100%"
			maxWidth="100%"
			bgColor="#0E0F0D"
			borderBottomWidth={'0px'}
			borderBottomColor={'#0E0F0D'}
			minHeight="fit-content"
			height={'calc(100vh - 64px)'}
		>
			<Grid
				templateColumns="repeat(5, 1fr)"
				templateRows="repeat(5, 1fr)"
				width={'100%'}
				gap={2}
				placeItems={'center'}
				height={'calc(100vh - 64px - 71px)'}
				//px="2rem"
				py="1rem"
				px={{ base: '2rem', md: '4rem', lg: '10rem' }}
			>
				<GridItem
					rowSpan={{ xs: 2, md: 4 }}
					colSpan={{ xs: 6, md: 2 }}
					height={'fit-content'}
					alignSelf={'center'}
					paddingY={6}
					placeSelf={'center'}
				>
					<Stack>
						<Heading
							fontWeight={'regular'}
							fontSize={{ xs: '2xl', md: '5xl', xl: '6xl' }}
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
							Xsauce Inc combines culture with financial technology to create new opportunities for the world to interact with alternative assets. Scroll down to learn more.
						</Text>
					</Stack>
				</GridItem>

				<GridItem
					rowSpan={{ xs: 2, md: 4 }}
					colStart={{ xs: 1, md: 3 }}
					colEnd={{ xs: 6, md: 6 }}
					width={'100%'}
					height={'85%'}
					placeItems="center"
				>
					<AspectRatio width={'100%'} height={'100%'}>
						<ChipsConnected />
					</AspectRatio>
				</GridItem>


				<GridItem
					rowSpan={{ xs: 1 }}
					colSpan={5}
					width={'100%'}
					height={'full'}
					border={'0.5.px'}
					paddingY={8}
					placeSelf={'center'}
					borderColor={'rgba(255, 255, 255, 0.2)'}
					borderTopWidth={'1px'}
				>
					<VStack align={'start'} height={'100%'}>
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
					</VStack>
				</GridItem>
			</Grid>
			<Box
				width={'100%'}
				height={'71px'}
				borderColor={'rgba(255, 255, 255, 0.2)'}
				borderTopWidth={'0.2px'}
				borderBottomWidth={'0.2px'}
				overflow="hidden"
			>
				<Box
					as={'span'}
					display={'inline-block'}
					width={'fit-content'}
					paddingY={'10px'}
					animation="marquee 30s linear infinite"
					whiteSpace={'nowrap'}
				>
					{generateListItems()}
					{generateListItems()}
				</Box>
			</Box>
		</VStack>
	);
};

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
