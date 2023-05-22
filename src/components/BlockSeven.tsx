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
	InputLeftAddon,
	InputRightAddon,
	Spacer,
	Stack,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import ChipsConnected from '../public/ChipsConnected.png';

export const BlockSeven = ({ title }: { title: string }) => {
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
		<VStack
			width={'100%'}
			borderColor={'grey'}
			borderTopWidth={'1px'}
			borderBottomWidth={'1px'}
			paddingY={5}
		>
			<HStack width={'100%'}>
				<VStack width={'fit-content'}>
					<Text
						color={'white'}
						fontSize={'2xl'}
						textAlign={'left'}
						width={'full'}
					>
						Join our newsletter
					</Text>
					<Text color={'white'}>
						Join the waiting list and get access early to the app
					</Text>
				</VStack>
				<Box width={'full'} height={'full'} border={'0.5.px'} paddingY={8}>
					<form
						id="email-form"
						method="POST"
						action="https://script.google.com/macros/s/AKfycbxzfszRCRSs2zbE7a4uDmHTUl-oxG_XHjiefFWXv7y-TWgZEOldmD9YcjavzL4ksCYYlw/exec"
						onSubmit={handleSubmit}
					>
						<HStack spacing="10px" width={'full'} justifyContent={'flex-end'}>
							<InputGroup width={'50%'} alignSelf="center" border="0px">
								<FormControl>
									<Input
										id="Email"
										name="Email"
										type="email"
										shadow={10}
										placeholder="Example-email@xyz.com"
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
								width={'25%'}
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
				</Box>
			</HStack>
		</VStack>
	);
};

BlockSeven.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
