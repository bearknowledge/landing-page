import { ArrowUpIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';

import {
	Box,
	Button,
	Flex,
	FormControl,
	Grid,
	GridItem,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputRightAddon,
	Spacer,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { ScrollAnimation } from './ScrollAnimation';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
					<Box color="brand.200" p={3} bg="brand.100">
						You have successfully the waitlist!
					</Box>
				),
			});
			setEmail('');
		});
	};

	return (
		<Grid templateColumns="repeat(5, 1fr)" width={'100%'} px="2rem">
			<GridItem
				colSpan={{ xs: 12, md: 2 }}
				h="10"
				height={'fit-content'}
				alignSelf={'center'}
				paddingY={6}
			>
				<ScrollAnimation animation="fade-up">
					<Stack>
						<ScrollAnimation animation="fade-up">
							<Text fontSize="sm" paddingY={3}>
								DRIVING CULTURE FORWARD
							</Text>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Heading
								fontWeight={'semibold'}
								fontSize="4xl"
								lineHeight={'base'}
								paddingY={3}
							>
								<Box>
									The Future of
									<Box display={'inline-block'} color={'brand.100'}>
										&nbsp;Culture
									</Box>
								</Box>
							</Heading>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Text fontSize="xl" paddingY={3}>
								Xsauce is a dynamic, decentralized ecosystem which allows you to
								translate your knowledge of culture into money in your pocket.
							</Text>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<form
								id="email-form"
								method="POST"
								action="https://script.google.com/macros/s/AKfycbxzfszRCRSs2zbE7a4uDmHTUl-oxG_XHjiefFWXv7y-TWgZEOldmD9YcjavzL4ksCYYlw/exec"
								onSubmit={handleSubmit}
							>
								<InputGroup alignSelf="center" border="0px">
									<FormControl>
										<Input
											id="Email"
											name="Email"
											type="email"
											placeholder="Email@xyz.com"
											fontSize={{ xs: 'xs', md: 'sm' }}
											width={'100%'}
											bg="colors.white"
											color="brand.200"
											border="0px"
											borderRightRadius={'0px'}
											onChange={(e) => setEmail(e.target.value)}
											value={email}
										/>
									</FormControl>
									<InputRightAddon
										width={'50%'}
										bg="brand.100"
										color="brand.200"
										border="0px"
										fontSize={{ xs: 'xs', md: 'sm' }}
										as={Button}
										whiteSpace={'break-spaces'}
										type="submit"
									>
										<Text whiteSpace={'break-spaces'} paddingX={2}>
											Join Waitlist
										</Text>
										<FiArrowUpRight />
									</InputRightAddon>
								</InputGroup>
							</form>
						</ScrollAnimation>
					</Stack>
				</ScrollAnimation>
			</GridItem>

			<GridItem
				colStart={{ xs: 1, md: 3 }}
				colEnd={{ xs: 6, md: 6 }}
				h="10"
				height={'fit-content'}
			>
				{/*TODO: Fix scaling on small sc */}
				<Flex
					overflow={'hidden'}
					justifyContent={'flex-end'}
					alignItems={'center'}
					as={ScrollAnimation}
					anchorPlacement={'top-bottom'}
					offset={'120'}
				>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 802 581"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						//xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<path
							d="M786.082 116.756C777.674 131.318 758.955 136.259 744.269 127.78C729.582 119.3 724.502 100.619 732.909 86.0565C741.317 71.4941 760.036 66.5534 774.722 75.0326C789.409 83.5118 794.49 102.193 786.082 116.756Z"
							fill="url(#paint0_linear_1333_1831)"
							stroke="#0C1615"
						/>
						<path
							d="M763.177 106.672L766.293 115.675C766.951 117.585 765.763 119.208 763.933 118.151L760.487 116.162C759.944 115.848 759.533 115.352 759.356 114.775L757.119 107.658C757.008 107.308 756.626 107.087 756.267 107.166L748.951 108.768C748.367 108.896 747.739 108.793 747.196 108.479L743.696 106.458C741.879 105.409 742.128 102.887 744.096 102.483L752.903 100.669C753.472 100.55 753.783 99.9959 753.587 99.4531L750.862 91.8484C750.162 89.9323 752.236 88.4001 754.079 89.4646L757.244 91.2917C757.774 91.5975 758.175 92.0796 758.356 92.6319L760.67 99.5248L763.177 106.672Z"
							fill="#0C1615"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M765.156 98.7946L772.58 103.081C771.348 105.215 768.618 105.948 766.486 104.717C764.354 103.486 763.624 100.756 764.856 98.6215L764.863 98.6254C765.748 97.0933 766.853 96.7634 768.239 96.3496C769.312 96.0294 770.553 95.6589 771.99 94.6422C772.2 94.495 772.499 94.6586 772.477 94.9142C772.348 96.6369 772.647 97.8567 772.905 98.9101C773.253 100.327 773.526 101.442 772.584 103.074L765.156 98.7946Z"
							fill="#0C1615"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 336.069 144.44)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866123 0.865927 0.50017 357.274 144.13)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766188 0.765901 0.642958 378.592 143.818)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642617 0.766188 400.053 143.197)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642958 0.642617 -0.766188 187.656 143.197)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(-0.642617 -0.766188 0.765901 -0.642958 209.12 143.818)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866123 0.865927 -0.50017 230.438 144.13)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(-0.341884 -0.939742 0.939643 -0.342156 251.643 144.44)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173572 -0.984821 0.984794 -0.173724 272.77 144.752)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="292.856"
							y1="144.752"
							x2="292.856"
							y2="134.799"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173573 -0.984821 0.984794 0.173724 314.942 144.752)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 313.688 161.857)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866123 0.865927 0.50017 334.891 161.546)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766188 0.765901 0.642958 356.208 161.235)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642617 0.766188 377.672 160.614)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94895"
							y2="-1"
							transform="matrix(0.865927 -0.500171 0.49983 0.866124 399.308 159.68)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(-0.642617 -0.766188 0.765901 -0.642958 186.739 161.235)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866123 0.865927 -0.50017 208.057 161.546)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 229.259 161.857)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173572 -0.984821 0.984794 -0.173724 250.386 162.168)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="270.472"
							y1="162.168"
							x2="270.472"
							y2="152.215"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173572 -0.984821 0.984794 0.173724 292.562 162.168)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341884 -0.939742 0.939643 0.342156 291.305 179.274)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866123 0.865927 0.50017 312.51 178.963)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766188 0.765901 0.642958 333.826 178.651)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94971"
							y2="-1"
							transform="matrix(0.765901 -0.642958 0.642617 0.766187 355.29 178.03)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(0.865927 -0.50017 0.49983 0.866123 376.926 177.096)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341884 0.939742 398.758 176.474)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866123 0.865927 -0.50017 185.673 178.963)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 206.877 179.274)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173572 -0.984821 0.984794 -0.173725 228.005 179.585)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="248.091"
							y1="179.585"
							x2="248.091"
							y2="169.632"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173572 -0.984821 0.984794 0.173724 270.178 179.585)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341884 -0.939742 0.939643 0.342156 268.923 196.69)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866123 0.865927 0.50017 290.125 196.38)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766188 0.765901 0.642958 311.442 196.068)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642617 0.766188 332.906 195.447)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(0.865927 -0.50017 0.49983 0.866123 354.545 194.513)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939742 376.377 193.891)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173725 0.173572 0.984821 398.424 192.958)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 184.493 196.69)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173572 -0.984821 0.984794 -0.173725 205.62 197.002)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="225.707"
							y1="197.002"
							x2="225.707"
							y2="187.049"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173572 -0.984821 0.984794 0.173724 247.796 197.002)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341884 -0.939742 0.939643 0.342156 246.539 214.107)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.499831 -0.866123 0.865928 0.500169 267.744 213.796)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766188 0.765901 0.642958 289.062 213.485)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642958 0.642617 0.766188 310.525 212.863)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(0.865927 -0.50017 0.49983 0.866123 332.16 211.93)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939742 353.993 211.307)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173724 0.173572 0.984821 376.04 210.375)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173572 -0.984821 0.984794 -0.173725 183.239 214.418)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="203.325"
							y1="214.418"
							x2="203.325"
							y2="204.465"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173572 -0.984821 0.984794 0.173724 225.412 214.418)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="410.744"
							y1="210.442"
							x2="400.796"
							y2="210.442"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 224.158 231.523)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866123 0.865927 0.50017 245.359 231.213)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766188 0.765901 0.642958 266.677 230.901)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642958 0.642617 0.766188 288.141 230.28)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(0.865927 -0.50017 0.49983 0.866123 309.779 229.346)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939742 331.611 228.724)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173724 0.173572 0.984821 353.659 227.791)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="180.941"
							y1="231.835"
							x2="180.941"
							y2="221.882"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173572 -0.984821 0.984794 0.173725 203.031 231.835)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="388.36"
							y1="227.859"
							x2="378.413"
							y2="227.859"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173724 0.173572 -0.984821 410.632 227.791)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 201.773 248.94)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866124 0.865927 0.50017 222.979 248.629)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766188 0.765901 0.642958 244.296 248.318)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642616 0.766188 265.76 247.697)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(0.865927 -0.50017 0.49983 0.866123 287.396 246.763)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939743 309.228 246.141)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173724 0.173572 0.984821 331.274 245.208)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173572 -0.984821 0.984794 0.173725 180.646 249.251)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="365.979"
							y1="245.275"
							x2="356.031"
							y2="245.275"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173724 0.173572 -0.984821 388.248 245.208)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341883 -0.939743 410.295 246.141)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 179.393 266.357)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866123 0.865927 0.50017 200.595 266.046)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766187 0.765901 0.642958 221.911 265.734)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642616 0.766188 243.375 265.113)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(0.865927 -0.50017 0.49983 0.866124 265.014 264.179)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939742 286.846 263.557)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173724 0.173572 0.984821 308.894 262.625)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(-0.865927 -0.50017 0.49983 -0.866123 409.746 264.179)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="343.598"
							y1="262.692"
							x2="333.65"
							y2="262.692"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173724 0.173572 -0.984821 365.866 262.625)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341883 -0.939742 387.911 263.557)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866124 0.865927 0.50017 178.213 283.463)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766187 0.765901 0.642958 199.53 283.151)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642616 0.766188 220.994 282.53)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(0.865927 -0.50017 0.49983 0.866123 242.63 281.596)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939742 264.462 280.974)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173725 0.173572 0.984821 286.509 280.041)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(-0.865928 -0.500169 0.499831 -0.866123 387.361 281.596)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642959 0.642616 -0.766188 409 282.53)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="321.214"
							y1="280.108"
							x2="311.266"
							y2="280.108"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173725 0.173572 -0.984821 343.482 280.041)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341883 -0.939742 365.529 280.974)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95049"
							y2="-1"
							transform="matrix(0.642616 -0.766188 0.765901 0.642959 177.146 300.568)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642616 0.766188 198.61 299.946)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(0.865928 -0.500169 0.499831 0.866123 220.249 299.013)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939742 242.081 298.391)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94798"
							y2="-1"
							transform="matrix(0.984794 -0.173725 0.173572 0.984821 264.128 297.458)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(-0.865928 -0.500169 0.499831 -0.866123 364.98 299.013)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642959 0.642616 -0.766188 386.616 299.946)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95049"
							y2="-1"
							transform="matrix(-0.642616 -0.766188 0.765901 -0.642959 408.08 300.568)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="298.832"
							y1="297.525"
							x2="288.884"
							y2="297.525"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173725 0.173572 -0.984821 321.102 297.458)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341883 -0.939742 343.148 298.391)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642617 0.766188 176.229 317.363)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(0.865927 -0.500171 0.49983 0.866124 197.864 316.429)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341884 0.939742 219.696 315.807)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94798"
							y2="-1"
							transform="matrix(0.984794 -0.173725 0.173572 0.984821 241.744 314.874)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(-0.865927 -0.50017 0.49983 -0.866124 342.597 316.429)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642959 0.642616 -0.766188 364.234 317.363)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(-0.642617 -0.766187 0.765901 -0.642958 385.695 317.984)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866123 0.865927 -0.50017 407.016 318.296)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="276.448"
							y1="314.942"
							x2="266.5"
							y2="314.942"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173725 0.173572 -0.984821 298.717 314.874)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341884 -0.939742 320.764 315.807)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(0.865928 -0.500169 0.499831 0.866123 175.483 333.846)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341883 0.939742 197.315 333.224)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173725 0.173572 0.984821 219.362 332.291)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94895"
							y2="-1"
							transform="matrix(-0.865927 -0.50017 0.49983 -0.866123 320.215 333.846)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94969"
							y2="-1"
							transform="matrix(-0.765902 -0.642958 0.642617 -0.766187 341.851 334.779)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95049"
							y2="-1"
							transform="matrix(-0.642616 -0.766188 0.765901 -0.642959 363.314 335.401)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95121"
							y2="-1"
							transform="matrix(-0.499831 -0.866123 0.865928 -0.500169 384.632 335.712)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 405.837 336.023)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="254.066"
							y1="332.358"
							x2="244.119"
							y2="332.358"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173725 0.173572 -0.984821 276.336 332.291)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341883 -0.939742 298.383 333.224)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(0.939643 -0.342157 0.341884 0.939742 174.931 350.64)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173723 0.173573 0.984821 196.979 349.708)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(-0.865928 -0.500169 0.499831 -0.866123 297.831 351.263)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642959 0.642616 -0.766188 319.47 352.196)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(-0.642617 -0.766187 0.765901 -0.642958 340.934 352.817)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866123 0.865927 -0.50017 362.251 353.129)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 383.452 353.44)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173573 -0.984821 0.984794 -0.173724 404.579 353.751)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="231.683"
							y1="349.775"
							x2="221.735"
							y2="349.775"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173723 0.173573 -0.984821 253.951 349.708)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341883 -0.939742 275.999 350.64)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(0.984794 -0.173725 0.173572 0.984821 174.598 367.124)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94897"
							y2="-1"
							transform="matrix(-0.865927 -0.50017 0.49983 -0.866124 275.449 368.679)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94971"
							y2="-1"
							transform="matrix(-0.765901 -0.642958 0.642617 -0.766188 297.085 369.613)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(-0.642617 -0.766187 0.765901 -0.642958 318.549 370.234)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866123 0.865927 -0.50017 339.866 370.546)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 361.071 370.856)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173573 -0.984821 0.984794 -0.173724 382.198 371.167)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="402.285"
							y1="371.167"
							x2="402.285"
							y2="361.215"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="209.302"
							y1="367.191"
							x2="199.354"
							y2="367.191"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173725 0.173572 -0.984821 231.57 367.124)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341883 -0.939742 253.617 368.057)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(-0.865928 -0.500169 0.499831 -0.866123 253.065 386.096)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94971"
							y2="-1"
							transform="matrix(-0.765901 -0.642958 0.642617 -0.766188 274.704 387.029)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95049"
							y2="-1"
							transform="matrix(-0.642616 -0.766188 0.7659 -0.642959 296.168 387.651)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95121"
							y2="-1"
							transform="matrix(-0.499831 -0.866123 0.865928 -0.500169 317.485 387.962)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 338.688 388.273)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173571 -0.984821 0.984794 -0.173725 359.814 388.584)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="379.9"
							y1="388.584"
							x2="379.9"
							y2="378.631"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173571 -0.984821 0.984794 0.173725 401.99 388.584)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="186.917"
							y1="384.608"
							x2="176.969"
							y2="384.608"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173725 0.173572 -0.984821 209.187 384.541)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341884 -0.939742 231.233 385.474)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 400.732 405.689)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(-0.865928 -0.500169 0.499831 -0.866123 230.685 403.512)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94969"
							y2="-1"
							transform="matrix(-0.765903 -0.642957 0.642619 -0.766186 252.319 404.446)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9505"
							y2="-1"
							transform="matrix(-0.642615 -0.766189 0.7659 -0.64296 273.784 405.067)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866124 0.865927 -0.50017 295.101 405.379)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 316.306 405.689)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173571 -0.984821 0.984794 -0.173725 337.433 406.001)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="357.52"
							y1="406.001"
							x2="357.52"
							y2="396.048"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173573 -0.984821 0.984794 0.173724 379.605 406.001)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94797"
							y2="-1"
							transform="matrix(-0.984794 -0.173725 0.173572 -0.984821 186.805 401.957)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94837"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341884 -0.939742 208.853 402.89)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 378.352 423.106)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.499829 -0.866124 0.865927 0.500171 399.554 422.795)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94898"
							y2="-1"
							transform="matrix(-0.865926 -0.500172 0.499828 -0.866124 208.3 420.929)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642959 0.642616 -0.766188 229.938 421.862)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95047"
							y2="-1"
							transform="matrix(-0.642617 -0.766188 0.765901 -0.642958 251.402 422.484)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866124 0.865927 -0.50017 272.72 422.795)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 293.922 423.106)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173573 -0.984821 0.984794 -0.173724 315.049 423.417)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="335.135"
							y1="423.417"
							x2="335.135"
							y2="413.465"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173573 -0.984821 0.984794 0.173724 357.225 423.417)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94836"
							y2="-1"
							transform="matrix(-0.939643 -0.342157 0.341884 -0.939742 186.468 420.307)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(0.341883 -0.939742 0.939643 0.342157 355.968 440.523)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.499829 -0.866124 0.865927 0.500171 377.173 440.212)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9505"
							y2="-1"
							transform="matrix(0.642616 -0.766189 0.7659 0.64296 398.49 439.9)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.94896"
							y2="-1"
							transform="matrix(-0.865928 -0.500169 0.499831 -0.866123 185.919 438.346)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642959 0.642616 -0.766188 207.555 439.279)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9505"
							y2="-1"
							transform="matrix(-0.642616 -0.766189 0.7659 -0.64296 229.019 439.9)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866124 0.865927 -0.50017 250.336 440.212)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 271.541 440.523)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173572 -0.984821 0.984794 -0.173724 292.668 440.834)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="312.754"
							y1="440.834"
							x2="312.754"
							y2="430.881"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173571 -0.984821 0.984794 0.173725 334.841 440.834)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95182"
							y2="-1"
							transform="matrix(0.341885 -0.939742 0.939643 0.342156 333.586 457.939)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(0.49983 -0.866123 0.865927 0.50017 354.788 457.629)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(0.642617 -0.766187 0.765901 0.642958 376.105 457.317)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(0.765901 -0.642959 0.642616 0.766188 397.569 456.696)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.9497"
							y2="-1"
							transform="matrix(-0.765901 -0.642959 0.642616 -0.766188 185.173 456.696)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95048"
							y2="-1"
							transform="matrix(-0.642617 -0.766187 0.765901 -0.642958 206.638 457.317)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95122"
							y2="-1"
							transform="matrix(-0.49983 -0.866124 0.865927 -0.50017 227.954 457.629)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95181"
							y2="-1"
							transform="matrix(-0.341883 -0.939742 0.939643 -0.342157 249.156 457.939)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(-0.173572 -0.984821 0.984794 -0.173724 270.283 458.25)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							x1="290.37"
							y1="458.25"
							x2="290.37"
							y2="448.298"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<line
							y1="-1"
							x2="9.95221"
							y2="-1"
							transform="matrix(0.173571 -0.984821 0.984794 0.173725 312.459 458.25)"
							stroke="#0C1615"
							stroke-width="2"
						/>
						<rect
							x="298.5"
							y="35.5"
							width="449"
							height="545"
							rx="11.5"
							fill="#A1A7A7"
							stroke="#0C1615"
						/>
						<path
							d="M298 47C298 40.3726 303.373 35 310 35H412V79C412 85.6274 406.627 91 400 91H298V47Z"
							fill="#0C1615"
						/>
						<path
							d="M383.92 58L386.39 60.47"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M383.92 58L386.39 55.53"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M388.05 68L385.59 65.53"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M388.05 68L385.59 70.47"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M388.05 68H381.75C378.99 68 376.75 65.76 376.75 63C376.75 60.24 378.99 58 381.75 58"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M383.92 58H390.25C393.01 58 395.25 60.24 395.25 63C395.25 65.76 393.01 68 390.25 68"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M350 67H362"
							stroke="#748282"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M332 56.9099L320 69.0899"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M320 56.9099L332 69.0899"
							stroke="#748282"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<rect
							x="314"
							y="152"
							width="419"
							height="312"
							fill="url(#pattern0)"
						/>
						<mask id="path-225-inside-1_1333_1831" fill="white">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M556.424 174.258C541.457 194.278 529.522 210.241 529.522 243.93L529.539 243.93C529.716 288.001 559.748 323.691 596.739 323.691C633.839 323.691 663.939 287.789 663.939 243.537H663.753C663.698 207.827 651.748 192.066 636.579 172.059C625.275 157.15 612.183 139.883 600.894 110.247C599.262 105.82 594.13 105.968 592.498 110.395C581.407 140.842 568.007 158.765 556.424 174.258Z"
							/>
						</mask>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M556.424 174.258C541.457 194.278 529.522 210.241 529.522 243.93L529.539 243.93C529.716 288.001 559.748 323.691 596.739 323.691C633.839 323.691 663.939 287.789 663.939 243.537H663.753C663.698 207.827 651.748 192.066 636.579 172.059C625.275 157.15 612.183 139.883 600.894 110.247C599.262 105.82 594.13 105.968 592.498 110.395C581.407 140.842 568.007 158.765 556.424 174.258Z"
							fill="url(#paint1_linear_1333_1831)"
						/>
						<path
							d="M529.522 243.93H528.522V244.931L529.523 244.93L529.522 243.93ZM556.424 174.258L555.623 173.659L555.623 173.659L556.424 174.258ZM529.539 243.93L530.539 243.926L530.535 242.929L529.538 242.93L529.539 243.93ZM663.939 243.537H664.939V242.537H663.939V243.537ZM663.753 243.537L662.753 243.539L662.754 244.537H663.753V243.537ZM636.579 172.059L637.376 171.454L637.376 171.454L636.579 172.059ZM600.894 110.247L599.956 110.593L599.96 110.603L600.894 110.247ZM592.498 110.395L591.559 110.049L591.558 110.052L592.498 110.395ZM530.522 243.93C530.522 227.215 533.481 214.945 538.271 204.381C543.074 193.792 549.731 184.881 557.225 174.857L555.623 173.659C548.15 183.655 541.357 192.736 536.45 203.555C531.531 214.401 528.522 226.956 528.522 243.93H530.522ZM529.538 242.93L529.522 242.93L529.523 244.93L529.54 244.93L529.538 242.93ZM596.739 322.691C560.456 322.691 530.715 287.618 530.539 243.926L528.539 243.934C528.718 288.384 559.04 324.691 596.739 324.691V322.691ZM662.939 243.537C662.939 287.409 633.129 322.691 596.739 322.691V324.691C634.549 324.691 664.939 288.169 664.939 243.537H662.939ZM663.753 244.537H663.939V242.537H663.753V244.537ZM635.782 172.663C643.377 182.68 650.085 191.534 654.921 202.318C659.747 213.078 662.726 225.805 662.753 243.539L664.753 243.536C664.725 225.559 661.702 212.55 656.746 201.5C651.802 190.474 644.95 181.444 637.376 171.454L635.782 172.663ZM599.96 110.603C611.301 140.377 624.464 157.736 635.782 172.663L637.376 171.454C626.085 156.564 613.065 139.389 601.829 109.891L599.96 110.603ZM593.436 110.741C594.131 108.856 595.495 108.027 596.718 108.001C597.927 107.974 599.267 108.726 599.956 110.593L601.833 109.901C600.889 107.342 598.847 105.954 596.674 106.001C594.515 106.048 592.497 107.507 591.559 110.049L593.436 110.741ZM557.225 174.857C568.821 159.346 582.294 141.327 593.437 110.737L591.558 110.052C580.519 140.357 567.193 158.184 555.623 173.659L557.225 174.857Z"
							fill="#0C1615"
							mask="url(#path-225-inside-1_1333_1831)"
						/>
						<mask id="path-227-inside-2_1333_1831" fill="white">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M523.196 160.205C517.523 167.78 513 173.82 513 186.567L513.07 186.567C513.172 203.189 524.51 216.636 538.469 216.636C552.444 216.636 563.791 203.159 563.868 186.512L563.875 186.512C563.875 172.934 559.338 166.96 553.575 159.373C549.291 153.732 544.329 147.198 540.051 135.985C539.432 134.31 537.487 134.366 536.868 136.041C532.665 147.561 527.586 154.343 523.196 160.205Z"
							/>
						</mask>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M523.196 160.205C517.523 167.78 513 173.82 513 186.567L513.07 186.567C513.172 203.189 524.51 216.636 538.469 216.636C552.444 216.636 563.791 203.159 563.868 186.512L563.875 186.512C563.875 172.934 559.338 166.96 553.575 159.373C549.291 153.732 544.329 147.198 540.051 135.985C539.432 134.31 537.487 134.366 536.868 136.041C532.665 147.561 527.586 154.343 523.196 160.205Z"
							fill="#A0A7A7"
						/>
						<path
							d="M513 186.567H512.2V187.368L513.001 187.367L513 186.567ZM523.196 160.205L522.556 159.725L522.556 159.725L523.196 160.205ZM513.07 186.567L513.87 186.562L513.865 185.767L513.069 185.767L513.07 186.567ZM563.868 186.512L563.867 185.712L563.072 185.713L563.068 186.508L563.868 186.512ZM563.875 186.512L563.876 187.312L564.675 187.311V186.512H563.875ZM553.575 159.373L554.212 158.889L554.212 158.889L553.575 159.373ZM540.051 135.985L539.3 136.262L539.303 136.27L540.051 135.985ZM536.868 136.041L536.118 135.763L536.117 135.766L536.868 136.041ZM513.8 186.567C513.8 180.298 514.91 175.715 516.699 171.778C518.497 167.82 520.991 164.484 523.836 160.685L522.556 159.725C519.728 163.502 517.124 166.973 515.242 171.116C513.351 175.279 512.2 180.09 512.2 186.567H513.8ZM513.069 185.767L512.999 185.767L513.001 187.367L513.071 187.367L513.069 185.767ZM538.469 215.836C525.075 215.836 513.97 202.881 513.87 186.562L512.27 186.572C512.374 203.497 523.944 217.436 538.469 217.436V215.836ZM563.068 186.508C562.993 202.852 551.878 215.836 538.469 215.836V217.436C553.01 217.436 564.59 203.466 564.668 186.515L563.068 186.508ZM563.874 185.712L563.867 185.712L563.869 187.312L563.876 187.312L563.874 185.712ZM552.938 159.857C555.828 163.662 558.345 166.981 560.156 171.023C561.958 175.046 563.075 179.82 563.075 186.512H564.675C564.675 179.626 563.523 174.624 561.616 170.369C559.718 166.133 557.085 162.672 554.212 158.889L552.938 159.857ZM539.303 136.27C543.624 147.594 548.643 154.201 552.938 159.857L554.212 158.889C549.939 153.262 545.035 146.803 540.798 135.7L539.303 136.27ZM537.619 136.318C537.831 135.743 538.21 135.562 538.477 135.556C538.733 135.551 539.093 135.702 539.3 136.262L540.801 135.707C540.389 134.593 539.468 133.934 538.442 133.957C537.427 133.979 536.524 134.663 536.118 135.763L537.619 136.318ZM523.836 160.685C528.237 154.808 533.374 147.95 537.62 136.315L536.117 135.766C531.955 147.172 526.935 153.877 522.556 159.725L523.836 160.685Z"
							fill="#0C1615"
							mask="url(#path-227-inside-2_1333_1831)"
						/>
						<mask id="path-229-inside-3_1333_1831" fill="white">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M629.321 354.052C623.648 361.627 619.125 367.667 619.125 380.414L619.195 380.414C619.297 397.036 630.635 410.483 644.594 410.483C658.569 410.483 669.916 397.006 669.993 380.359L670 380.359C670 366.781 665.463 360.807 659.7 353.22C655.416 347.579 650.454 341.045 646.176 329.832C645.557 328.157 643.612 328.213 642.993 329.887C638.79 341.408 633.711 348.19 629.321 354.052Z"
							/>
						</mask>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M629.321 354.052C623.648 361.627 619.125 367.667 619.125 380.414L619.195 380.414C619.297 397.036 630.635 410.483 644.594 410.483C658.569 410.483 669.916 397.006 669.993 380.359L670 380.359C670 366.781 665.463 360.807 659.7 353.22C655.416 347.579 650.454 341.045 646.176 329.832C645.557 328.157 643.612 328.213 642.993 329.887C638.79 341.408 633.711 348.19 629.321 354.052Z"
							fill="#A0A7A7"
						/>
						<path
							d="M619.125 380.414H618.325V381.215L619.126 381.214L619.125 380.414ZM629.321 354.052L628.681 353.572L628.681 353.572L629.321 354.052ZM619.195 380.414L619.995 380.409L619.99 379.613L619.194 379.614L619.195 380.414ZM669.993 380.359L669.992 379.559L669.197 379.56L669.193 380.355L669.993 380.359ZM670 380.359L670.001 381.159L670.8 381.158V380.359H670ZM659.7 353.22L660.337 352.736L660.337 352.736L659.7 353.22ZM646.176 329.832L645.425 330.109L645.428 330.117L646.176 329.832ZM642.993 329.887L642.243 329.61L642.242 329.613L642.993 329.887ZM619.925 380.414C619.925 374.145 621.035 369.562 622.824 365.625C624.622 361.666 627.116 358.331 629.961 354.531L628.681 353.572C625.853 357.349 623.249 360.82 621.367 364.963C619.476 369.126 618.325 373.937 618.325 380.414H619.925ZM619.194 379.614L619.124 379.614L619.126 381.214L619.196 381.214L619.194 379.614ZM644.594 409.683C631.2 409.683 620.095 396.728 619.995 380.409L618.395 380.419C618.499 397.344 630.069 411.283 644.594 411.283V409.683ZM669.193 380.355C669.118 396.699 658.003 409.683 644.594 409.683V411.283C659.135 411.283 670.715 397.313 670.793 380.362L669.193 380.355ZM669.999 379.559L669.992 379.559L669.994 381.159L670.001 381.159L669.999 379.559ZM659.063 353.704C661.953 357.509 664.47 360.828 666.281 364.87C668.083 368.893 669.2 373.667 669.2 380.359H670.8C670.8 373.473 669.648 368.471 667.741 364.216C665.843 359.98 663.21 356.518 660.337 352.736L659.063 353.704ZM645.428 330.117C649.749 341.441 654.768 348.048 659.063 353.704L660.337 352.736C656.064 347.109 651.16 340.65 646.923 329.546L645.428 330.117ZM643.744 330.165C643.956 329.59 644.335 329.409 644.602 329.403C644.858 329.398 645.218 329.549 645.425 330.109L646.926 329.554C646.514 328.44 645.593 327.781 644.567 327.804C643.552 327.826 642.649 328.51 642.243 329.61L643.744 330.165ZM629.961 354.531C634.362 348.655 639.499 341.797 643.745 330.162L642.242 329.613C638.08 341.019 633.06 347.724 628.681 353.572L629.961 354.531Z"
							fill="#0C1615"
							mask="url(#path-229-inside-3_1333_1831)"
						/>
						<mask id="path-231-inside-4_1333_1831" fill="white">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M608.589 441.668C605.259 446.115 602.604 449.661 602.604 457.145L602.644 457.145C602.704 466.903 609.36 474.798 617.555 474.798C625.76 474.798 632.422 466.886 632.467 457.112L632.471 457.112C632.471 449.141 629.808 445.634 626.425 441.179C623.909 437.868 620.996 434.032 618.484 427.449C618.121 426.465 616.979 426.498 616.616 427.481C614.148 434.245 611.167 438.226 608.589 441.668Z"
							/>
						</mask>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M608.589 441.668C605.259 446.115 602.604 449.661 602.604 457.145L602.644 457.145C602.704 466.903 609.36 474.798 617.555 474.798C625.76 474.798 632.422 466.886 632.467 457.112L632.471 457.112C632.471 449.141 629.808 445.634 626.425 441.179C623.909 437.868 620.996 434.032 618.484 427.449C618.121 426.465 616.979 426.498 616.616 427.481C614.148 434.245 611.167 438.226 608.589 441.668Z"
							fill="url(#paint2_linear_1333_1831)"
						/>
						<path
							d="M602.604 457.145H601.604V458.146L602.605 458.145L602.604 457.145ZM608.589 441.668L609.39 442.267L609.39 442.267L608.589 441.668ZM602.644 457.145L603.644 457.139L603.638 456.144L602.643 456.145L602.644 457.145ZM632.467 457.112L632.466 456.112L631.472 456.113L631.467 457.108L632.467 457.112ZM632.471 457.112L632.472 458.112L633.471 458.111V457.112H632.471ZM626.425 441.179L627.221 440.575L627.221 440.575L626.425 441.179ZM618.484 427.449L617.546 427.795L617.55 427.805L618.484 427.449ZM616.616 427.481L615.678 427.135L615.677 427.139L616.616 427.481ZM603.604 457.145C603.604 453.533 604.242 450.918 605.258 448.681C606.286 446.419 607.714 444.505 609.39 442.267L607.789 441.069C606.135 443.278 604.57 445.361 603.437 447.854C602.293 450.373 601.604 453.273 601.604 457.145H603.604ZM602.643 456.145L602.602 456.145L602.605 458.145L602.645 458.145L602.643 456.145ZM617.555 473.798C610.067 473.798 603.702 466.518 603.644 457.139L601.644 457.151C601.706 467.288 608.653 475.798 617.555 475.798V473.798ZM631.467 457.108C631.423 466.502 625.052 473.798 617.555 473.798V475.798C626.467 475.798 633.42 467.269 633.467 457.117L631.467 457.108ZM632.47 456.112L632.466 456.112L632.468 458.112L632.472 458.112L632.47 456.112ZM625.628 441.784C627.331 444.026 628.77 445.927 629.804 448.236C630.828 450.52 631.471 453.248 631.471 457.112H633.471C633.471 453.005 632.783 449.994 631.629 447.418C630.486 444.867 628.902 442.788 627.221 440.575L625.628 441.784ZM617.55 427.805C620.115 434.526 623.099 438.454 625.628 441.784L627.221 440.575C624.719 437.281 621.878 433.538 619.419 427.092L617.55 427.805ZM617.554 427.828C617.57 427.784 617.587 427.756 617.599 427.74C617.61 427.723 617.619 427.717 617.62 427.716C617.621 427.715 617.618 427.718 617.609 427.721C617.6 427.724 617.587 427.727 617.572 427.727C617.557 427.728 617.542 427.725 617.528 427.721C617.514 427.717 617.504 427.711 617.5 427.708C617.495 427.704 617.499 427.706 617.507 427.717C617.516 427.729 617.531 427.753 617.546 427.795L619.423 427.102C619.113 426.264 618.386 425.709 617.529 425.728C616.685 425.746 615.981 426.314 615.678 427.135L617.554 427.828ZM609.39 442.267C611.98 438.808 615.035 434.731 617.556 427.824L615.677 427.139C613.261 433.759 610.353 437.644 607.789 441.069L609.39 442.267Z"
							fill="#0C1615"
							mask="url(#path-231-inside-4_1333_1831)"
						/>
						<mask id="path-233-inside-5_1333_1831" fill="white">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M559.901 116.478C558.201 118.748 556.846 120.558 556.846 124.378L556.866 124.378C556.897 129.359 560.295 133.39 564.478 133.39C568.667 133.39 572.067 129.35 572.09 124.362L572.093 124.362C572.093 120.292 570.733 118.502 569.006 116.228C567.722 114.537 566.235 112.579 564.953 109.219C564.767 108.717 564.184 108.734 563.999 109.236C562.739 112.688 561.217 114.721 559.901 116.478Z"
							/>
						</mask>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M559.901 116.478C558.201 118.748 556.846 120.558 556.846 124.378L556.866 124.378C556.897 129.359 560.295 133.39 564.478 133.39C568.667 133.39 572.067 129.35 572.09 124.362L572.093 124.362C572.093 120.292 570.733 118.502 569.006 116.228C567.722 114.537 566.235 112.579 564.953 109.219C564.767 108.717 564.184 108.734 563.999 109.236C562.739 112.688 561.217 114.721 559.901 116.478Z"
							fill="#A0A7A7"
						/>
						<path
							d="M556.846 124.378H556.046V125.179L556.847 125.178L556.846 124.378ZM559.901 116.478L559.261 115.998L559.261 115.998L559.901 116.478ZM556.866 124.378L557.666 124.373L557.661 123.577L556.866 123.578L556.866 124.378ZM572.09 124.362L572.09 123.562L571.294 123.562L571.29 124.358L572.09 124.362ZM572.093 124.362L572.093 125.162L572.893 125.161V124.362H572.093ZM569.006 116.228L569.643 115.744L569.643 115.744L569.006 116.228ZM564.953 109.219L564.202 109.496L564.205 109.504L564.953 109.219ZM563.999 109.236L563.248 108.958L563.247 108.961L563.999 109.236ZM557.646 124.378C557.646 122.572 557.964 121.279 558.464 120.178C558.974 119.056 559.683 118.104 560.542 116.957L559.261 115.998C558.42 117.122 557.601 118.21 557.008 119.516C556.405 120.842 556.046 122.364 556.046 124.378H557.646ZM556.866 123.578L556.845 123.578L556.847 125.178L556.867 125.178L556.866 123.578ZM564.478 132.59C560.86 132.59 557.695 129.052 557.666 124.373L556.066 124.383C556.099 129.667 559.73 134.19 564.478 134.19V132.59ZM571.29 124.358C571.269 129.044 568.101 132.59 564.478 132.59V134.19C569.233 134.19 572.866 129.657 572.89 124.365L571.29 124.358ZM572.092 123.562L572.09 123.562L572.091 125.162L572.093 125.162L572.092 123.562ZM568.369 116.712C569.241 117.86 569.955 118.805 570.467 119.949C570.97 121.073 571.293 122.424 571.293 124.362H572.893C572.893 122.23 572.535 120.651 571.927 119.295C571.328 117.957 570.498 116.87 569.643 115.744L568.369 116.712ZM564.205 109.504C565.53 112.975 567.074 115.007 568.369 116.712L569.643 115.744C568.37 114.068 566.94 112.184 565.7 108.934L564.205 109.504ZM564.749 109.513C564.745 109.525 564.675 109.647 564.493 109.651C564.412 109.652 564.336 109.626 564.279 109.585C564.222 109.543 564.204 109.501 564.202 109.496L565.703 108.942C565.508 108.413 565.035 108.038 564.458 108.051C563.892 108.063 563.438 108.444 563.248 108.958L564.749 109.513ZM560.542 116.957C561.868 115.186 563.449 113.077 564.75 109.51L563.247 108.961C562.029 112.3 560.566 114.255 559.261 115.998L560.542 116.957Z"
							fill="#0C1615"
							mask="url(#path-233-inside-5_1333_1831)"
						/>
						<rect
							x="90"
							y="382"
							width="450"
							height="144"
							rx="12"
							fill="#0C1615"
						/>
						<path
							d="M132.673 452.636V473H129.849L119.499 458.065H119.31V473H116.237V452.636H119.081L129.442 467.591H129.631V452.636H132.673ZM136.917 473V457.727H139.89V473H136.917ZM138.418 455.371C137.901 455.371 137.457 455.198 137.086 454.854C136.721 454.502 136.539 454.085 136.539 453.601C136.539 453.11 136.721 452.693 137.086 452.348C137.457 451.997 137.901 451.821 138.418 451.821C138.935 451.821 139.376 451.997 139.74 452.348C140.112 452.693 140.297 453.11 140.297 453.601C140.297 454.085 140.112 454.502 139.74 454.854C139.376 455.198 138.935 455.371 138.418 455.371ZM146.624 467.82L146.604 464.19H147.121L153.206 457.727H156.766L149.825 465.085H149.358L146.624 467.82ZM143.889 473V452.636H146.862V473H143.889ZM153.534 473L148.065 465.741L150.114 463.663L157.183 473H153.534ZM165.429 473.308C163.924 473.308 162.628 472.987 161.541 472.344C160.46 471.694 159.625 470.783 159.035 469.609C158.452 468.429 158.16 467.047 158.16 465.463C158.16 463.899 158.452 462.52 159.035 461.327C159.625 460.134 160.447 459.202 161.501 458.533C162.562 457.863 163.801 457.528 165.22 457.528C166.082 457.528 166.917 457.671 167.725 457.956C168.534 458.241 169.26 458.688 169.903 459.298C170.546 459.908 171.053 460.7 171.424 461.675C171.796 462.643 171.981 463.819 171.981 465.205V466.259H159.841V464.031H169.068C169.068 463.249 168.909 462.556 168.591 461.953C168.272 461.343 167.825 460.863 167.248 460.511C166.678 460.16 166.009 459.984 165.24 459.984C164.404 459.984 163.675 460.19 163.052 460.601C162.436 461.005 161.958 461.536 161.62 462.192C161.289 462.841 161.123 463.547 161.123 464.31V466.05C161.123 467.071 161.302 467.939 161.66 468.655C162.025 469.371 162.532 469.918 163.181 470.295C163.831 470.667 164.59 470.852 165.458 470.852C166.022 470.852 166.536 470.773 167 470.614C167.464 470.448 167.865 470.203 168.203 469.878C168.541 469.553 168.799 469.152 168.978 468.675L171.792 469.182C171.567 470.01 171.163 470.736 170.579 471.359C170.002 471.976 169.277 472.456 168.402 472.801C167.533 473.139 166.542 473.308 165.429 473.308ZM189.521 473H182.929V452.636H189.73C191.725 452.636 193.439 453.044 194.87 453.859C196.302 454.668 197.399 455.831 198.162 457.349C198.931 458.861 199.315 460.674 199.315 462.788C199.315 464.91 198.927 466.732 198.152 468.257C197.383 469.782 196.269 470.955 194.811 471.777C193.352 472.592 191.589 473 189.521 473ZM186.001 470.315H189.352C190.903 470.315 192.192 470.024 193.22 469.44C194.247 468.85 195.016 467.999 195.527 466.885C196.037 465.765 196.292 464.399 196.292 462.788C196.292 461.191 196.037 459.835 195.527 458.722C195.023 457.608 194.27 456.763 193.27 456.186C192.269 455.609 191.026 455.321 189.541 455.321H186.001V470.315ZM212.572 466.666V457.727H215.555V473H212.631V470.355H212.472C212.121 471.17 211.558 471.85 210.782 472.393C210.013 472.93 209.055 473.199 207.908 473.199C206.927 473.199 206.059 472.983 205.303 472.553C204.554 472.115 203.964 471.469 203.533 470.614C203.109 469.759 202.897 468.701 202.897 467.442V457.727H205.87V467.084C205.87 468.125 206.158 468.953 206.735 469.57C207.312 470.186 208.061 470.494 208.982 470.494C209.539 470.494 210.093 470.355 210.643 470.077C211.2 469.798 211.66 469.377 212.025 468.814C212.396 468.25 212.578 467.535 212.572 466.666ZM222.522 463.932V473H219.549V457.727H222.403V460.213H222.592C222.943 459.404 223.493 458.755 224.243 458.264C224.998 457.774 225.949 457.528 227.096 457.528C228.137 457.528 229.048 457.747 229.831 458.185C230.613 458.616 231.219 459.259 231.65 460.114C232.081 460.969 232.297 462.026 232.297 463.286V473H229.324V463.643C229.324 462.536 229.035 461.671 228.458 461.048C227.882 460.419 227.09 460.104 226.082 460.104C225.393 460.104 224.779 460.253 224.243 460.551C223.712 460.849 223.291 461.287 222.98 461.864C222.675 462.434 222.522 463.123 222.522 463.932ZM239.018 467.82L238.998 464.19H239.515L245.6 457.727H249.16L242.22 465.085H241.752L239.018 467.82ZM236.284 473V452.636H239.257V473H236.284ZM245.929 473L240.46 465.741L242.508 463.663L249.578 473H245.929ZM259.518 473V452.636H262.591V470.355H271.818V473H259.518ZM281.518 473.308C280.086 473.308 278.836 472.98 277.769 472.324C276.702 471.668 275.873 470.75 275.283 469.57C274.693 468.39 274.398 467.011 274.398 465.433C274.398 463.849 274.693 462.464 275.283 461.277C275.873 460.09 276.702 459.169 277.769 458.513C278.836 457.857 280.086 457.528 281.518 457.528C282.95 457.528 284.199 457.857 285.266 458.513C286.334 459.169 287.162 460.09 287.752 461.277C288.342 462.464 288.637 463.849 288.637 465.433C288.637 467.011 288.342 468.39 287.752 469.57C287.162 470.75 286.334 471.668 285.266 472.324C284.199 472.98 282.95 473.308 281.518 473.308ZM281.528 470.812C282.456 470.812 283.225 470.567 283.835 470.077C284.444 469.586 284.895 468.933 285.187 468.118C285.485 467.303 285.634 466.404 285.634 465.423C285.634 464.449 285.485 463.554 285.187 462.739C284.895 461.917 284.444 461.257 283.835 460.76C283.225 460.263 282.456 460.014 281.528 460.014C280.593 460.014 279.817 460.263 279.201 460.76C278.591 461.257 278.137 461.917 277.839 462.739C277.547 463.554 277.401 464.449 277.401 465.423C277.401 466.404 277.547 467.303 277.839 468.118C278.137 468.933 278.591 469.586 279.201 470.077C279.817 470.567 280.593 470.812 281.528 470.812ZM294.802 473L290.308 457.727H293.38L296.373 468.943H296.522L299.525 457.727H302.597L305.58 468.893H305.729L308.702 457.727H311.775L307.29 473H304.258L301.156 461.973H300.927L297.825 473H294.802ZM322.245 473V452.636H329.504C331.081 452.636 332.39 452.908 333.431 453.452C334.478 453.995 335.261 454.748 335.778 455.709C336.295 456.663 336.553 457.767 336.553 459.02C336.553 460.266 336.291 461.363 335.768 462.311C335.251 463.252 334.469 463.985 333.421 464.509C332.38 465.032 331.071 465.294 329.494 465.294H323.995V462.649H329.215C330.21 462.649 331.018 462.507 331.641 462.222C332.271 461.937 332.732 461.522 333.023 460.979C333.315 460.435 333.461 459.782 333.461 459.02C333.461 458.251 333.312 457.585 333.013 457.021C332.722 456.458 332.261 456.027 331.631 455.729C331.008 455.424 330.19 455.271 329.175 455.271H325.317V473H322.245ZM332.298 463.812L337.329 473H333.829L328.897 463.812H332.298ZM346.444 473.308C344.94 473.308 343.644 472.987 342.556 472.344C341.476 471.694 340.641 470.783 340.051 469.609C339.467 468.429 339.176 467.047 339.176 465.463C339.176 463.899 339.467 462.52 340.051 461.327C340.641 460.134 341.463 459.202 342.517 458.533C343.577 457.863 344.817 457.528 346.235 457.528C347.097 457.528 347.932 457.671 348.741 457.956C349.55 458.241 350.276 458.688 350.919 459.298C351.562 459.908 352.069 460.7 352.44 461.675C352.811 462.643 352.997 463.819 352.997 465.205V466.259H340.856V464.031H350.083C350.083 463.249 349.924 462.556 349.606 461.953C349.288 461.343 348.841 460.863 348.264 460.511C347.694 460.16 347.024 459.984 346.255 459.984C345.42 459.984 344.691 460.19 344.068 460.601C343.451 461.005 342.974 461.536 342.636 462.192C342.305 462.841 342.139 463.547 342.139 464.31V466.05C342.139 467.071 342.318 467.939 342.676 468.655C343.04 469.371 343.547 469.918 344.197 470.295C344.847 470.667 345.606 470.852 346.474 470.852C347.038 470.852 347.551 470.773 348.015 470.614C348.479 470.448 348.88 470.203 349.218 469.878C349.556 469.553 349.815 469.152 349.994 468.675L352.808 469.182C352.583 470.01 352.178 470.736 351.595 471.359C351.018 471.976 350.292 472.456 349.417 472.801C348.549 473.139 347.558 473.308 346.444 473.308ZM363.425 457.727V460.114H355.082V457.727H363.425ZM357.32 454.068H360.293V468.516C360.293 469.092 360.379 469.527 360.551 469.818C360.723 470.103 360.946 470.299 361.217 470.405C361.496 470.504 361.797 470.554 362.122 470.554C362.361 470.554 362.57 470.537 362.749 470.504C362.928 470.471 363.067 470.445 363.166 470.425L363.703 472.881C363.531 472.947 363.286 473.013 362.967 473.08C362.649 473.152 362.251 473.192 361.774 473.199C360.992 473.212 360.263 473.073 359.587 472.781C358.911 472.49 358.364 472.039 357.946 471.429C357.528 470.819 357.32 470.054 357.32 469.132V454.068ZM366.713 473V457.727H369.587V460.153H369.746C370.025 459.331 370.515 458.685 371.218 458.214C371.927 457.737 372.729 457.499 373.624 457.499C373.81 457.499 374.028 457.505 374.28 457.518C374.539 457.532 374.741 457.548 374.887 457.568V460.412C374.767 460.379 374.555 460.342 374.25 460.303C373.945 460.256 373.641 460.233 373.336 460.233C372.633 460.233 372.007 460.382 371.456 460.68C370.913 460.972 370.482 461.38 370.164 461.903C369.846 462.42 369.686 463.01 369.686 463.673V473H366.713ZM383.346 473.308C381.914 473.308 380.665 472.98 379.597 472.324C378.53 471.668 377.701 470.75 377.112 469.57C376.522 468.39 376.227 467.011 376.227 465.433C376.227 463.849 376.522 462.464 377.112 461.277C377.701 460.09 378.53 459.169 379.597 458.513C380.665 457.857 381.914 457.528 383.346 457.528C384.778 457.528 386.027 457.857 387.094 458.513C388.162 459.169 388.99 460.09 389.58 461.277C390.17 462.464 390.465 463.849 390.465 465.433C390.465 467.011 390.17 468.39 389.58 469.57C388.99 470.75 388.162 471.668 387.094 472.324C386.027 472.98 384.778 473.308 383.346 473.308ZM383.356 470.812C384.284 470.812 385.053 470.567 385.663 470.077C386.272 469.586 386.723 468.933 387.015 468.118C387.313 467.303 387.462 466.404 387.462 465.423C387.462 464.449 387.313 463.554 387.015 462.739C386.723 461.917 386.272 461.257 385.663 460.76C385.053 460.263 384.284 460.014 383.356 460.014C382.421 460.014 381.646 460.263 381.029 460.76C380.419 461.257 379.965 461.917 379.667 462.739C379.375 463.554 379.229 464.449 379.229 465.423C379.229 466.404 379.375 467.303 379.667 468.118C379.965 468.933 380.419 469.586 381.029 470.077C381.646 470.567 382.421 470.812 383.356 470.812Z"
							fill="#748282"
						/>
						<path
							d="M344.533 419.091V408.182H345.232V419.091H344.533ZM346.719 411.565C346.673 411.162 346.486 410.849 346.156 410.628C345.827 410.403 345.412 410.291 344.912 410.291C344.554 410.291 344.244 410.348 343.983 410.462C343.722 410.572 343.518 410.726 343.374 410.922C343.232 411.115 343.161 411.335 343.161 411.582C343.161 411.79 343.209 411.969 343.305 412.119C343.405 412.27 343.534 412.396 343.693 412.499C343.855 412.598 344.028 412.682 344.213 412.75C344.398 412.815 344.575 412.869 344.746 412.912L345.598 413.134C345.876 413.202 346.162 413.294 346.455 413.411C346.747 413.527 347.018 413.68 347.268 413.871C347.518 414.061 347.72 414.297 347.874 414.578C348.03 414.859 348.108 415.196 348.108 415.588C348.108 416.082 347.98 416.521 347.724 416.905C347.472 417.288 347.104 417.591 346.621 417.812C346.141 418.034 345.56 418.145 344.878 418.145C344.224 418.145 343.659 418.041 343.182 417.834C342.705 417.626 342.331 417.332 342.061 416.952C341.791 416.568 341.642 416.114 341.614 415.588H342.935C342.96 415.903 343.063 416.166 343.241 416.376C343.423 416.584 343.655 416.739 343.936 416.841C344.22 416.94 344.531 416.99 344.869 416.99C345.241 416.99 345.572 416.932 345.862 416.815C346.155 416.696 346.385 416.531 346.553 416.321C346.72 416.108 346.804 415.859 346.804 415.575C346.804 415.317 346.73 415.105 346.582 414.94C346.438 414.776 346.24 414.639 345.99 414.531C345.743 414.423 345.463 414.328 345.151 414.246L344.119 413.964C343.42 413.774 342.866 413.494 342.457 413.125C342.051 412.756 341.848 412.267 341.848 411.659C341.848 411.156 341.984 410.717 342.257 410.342C342.53 409.967 342.899 409.676 343.365 409.469C343.831 409.259 344.357 409.153 344.942 409.153C345.533 409.153 346.054 409.257 346.506 409.464C346.96 409.672 347.318 409.957 347.58 410.321C347.841 410.682 347.977 411.097 347.989 411.565H346.719ZM356.049 409.273V418H354.728V410.594H354.677L352.589 411.957V410.696L354.766 409.273H356.049ZM361.312 409.153C361.701 409.156 362.085 409.227 362.462 409.366C362.84 409.506 363.181 409.733 363.485 410.048C363.792 410.364 364.036 410.79 364.218 411.327C364.403 411.861 364.496 412.526 364.499 413.321C364.499 414.085 364.423 414.766 364.269 415.362C364.116 415.956 363.896 416.457 363.609 416.866C363.325 417.276 362.979 417.587 362.573 417.8C362.167 418.013 361.71 418.119 361.201 418.119C360.681 418.119 360.219 418.017 359.816 417.812C359.413 417.608 359.085 417.325 358.832 416.964C358.579 416.601 358.421 416.183 358.359 415.712H359.658C359.744 416.087 359.917 416.391 360.178 416.624C360.442 416.854 360.783 416.969 361.201 416.969C361.84 416.969 362.339 416.69 362.697 416.134C363.055 415.574 363.235 414.793 363.238 413.79H363.17C363.022 414.034 362.837 414.244 362.616 414.42C362.397 414.597 362.151 414.733 361.879 414.83C361.606 414.926 361.315 414.974 361.005 414.974C360.502 414.974 360.045 414.851 359.633 414.604C359.221 414.357 358.893 414.017 358.648 413.585C358.404 413.153 358.282 412.661 358.282 412.107C358.282 411.555 358.407 411.055 358.657 410.607C358.91 410.158 359.262 409.803 359.714 409.541C360.168 409.277 360.701 409.148 361.312 409.153ZM361.316 410.261C360.984 410.261 360.684 410.344 360.417 410.509C360.153 410.67 359.944 410.891 359.79 411.169C359.637 411.445 359.56 411.751 359.56 412.089C359.56 412.428 359.634 412.734 359.782 413.01C359.933 413.283 360.137 413.5 360.396 413.662C360.657 413.821 360.955 413.901 361.29 413.901C361.54 413.901 361.773 413.852 361.989 413.756C362.205 413.659 362.394 413.526 362.556 413.355C362.718 413.182 362.844 412.986 362.935 412.767C363.026 412.548 363.072 412.318 363.072 412.077C363.072 411.756 362.995 411.457 362.842 411.182C362.691 410.906 362.484 410.685 362.219 410.517C361.955 410.347 361.654 410.261 361.316 410.261ZM365.855 416.295V415.23L369.627 409.273H370.466V410.841H369.934L367.236 415.111V415.179H372.405V416.295H365.855ZM369.993 418V415.972L370.002 415.486V409.273H371.25V418H369.993ZM375.237 416.807L375.173 417.271C375.13 417.612 375.058 417.967 374.956 418.337C374.856 418.709 374.752 419.054 374.645 419.372C374.539 419.69 374.453 419.943 374.385 420.131H373.481C373.518 419.955 373.569 419.716 373.635 419.415C373.7 419.116 373.764 418.783 373.826 418.413C373.889 418.044 373.936 417.668 373.967 417.284L374.01 416.807H375.237ZM376.836 416.295V415.23L380.607 409.273H381.447V410.841H380.914L378.217 415.111V415.179H383.386V416.295H376.836ZM380.974 418V415.972L380.982 415.486V409.273H382.231V418H380.974ZM387.909 418.119C387.324 418.119 386.801 418.018 386.341 417.817C385.884 417.615 385.521 417.335 385.254 416.977C384.99 416.616 384.848 416.199 384.828 415.724H386.166C386.183 415.983 386.27 416.207 386.426 416.398C386.585 416.585 386.793 416.73 387.048 416.832C387.304 416.935 387.588 416.986 387.901 416.986C388.244 416.986 388.548 416.926 388.812 416.807C389.08 416.687 389.288 416.521 389.439 416.308C389.589 416.092 389.665 415.844 389.665 415.562C389.665 415.27 389.589 415.013 389.439 414.791C389.291 414.567 389.074 414.391 388.787 414.263C388.503 414.135 388.159 414.071 387.756 414.071H387.018V412.997H387.756C388.08 412.997 388.364 412.939 388.608 412.822C388.855 412.706 389.048 412.544 389.188 412.337C389.327 412.126 389.396 411.881 389.396 411.599C389.396 411.33 389.335 411.095 389.213 410.896C389.094 410.695 388.923 410.537 388.702 410.423C388.483 410.31 388.224 410.253 387.926 410.253C387.642 410.253 387.376 410.305 387.129 410.411C386.885 410.513 386.686 410.661 386.533 410.854C386.379 411.044 386.297 411.273 386.286 411.54H385.011C385.026 411.068 385.165 410.653 385.429 410.295C385.696 409.937 386.048 409.658 386.486 409.456C386.923 409.254 387.409 409.153 387.943 409.153C388.503 409.153 388.986 409.263 389.392 409.482C389.801 409.697 390.116 409.986 390.338 410.347C390.563 410.707 390.673 411.102 390.67 411.531C390.673 412.02 390.537 412.435 390.261 412.776C389.989 413.116 389.625 413.345 389.17 413.462V413.53C389.75 413.618 390.199 413.848 390.517 414.22C390.838 414.592 390.997 415.054 390.994 415.605C390.997 416.085 390.864 416.516 390.594 416.896C390.327 417.277 389.962 417.577 389.499 417.795C389.036 418.011 388.506 418.119 387.909 418.119Z"
							fill="#748282"
						/>
						<path
							d="M117.668 500L115.247 491.273H116.632L118.332 498.031H118.413L120.182 491.273H121.554L123.322 498.036H123.403L125.099 491.273H126.489L124.064 500H122.739L120.902 493.463H120.834L118.997 500H117.668ZM128.861 496.114V500H127.587V491.273H128.844V494.52H128.925C129.078 494.168 129.313 493.888 129.628 493.68C129.944 493.473 130.355 493.369 130.864 493.369C131.313 493.369 131.705 493.462 132.04 493.646C132.378 493.831 132.64 494.107 132.824 494.473C133.012 494.837 133.105 495.291 133.105 495.837V500H131.831V495.99C131.831 495.51 131.708 495.138 131.461 494.874C131.213 494.607 130.87 494.473 130.429 494.473C130.128 494.473 129.858 494.537 129.62 494.665C129.384 494.793 129.198 494.98 129.061 495.227C128.928 495.472 128.861 495.767 128.861 496.114ZM134.806 500V493.455H136.08V500H134.806ZM135.449 492.445C135.228 492.445 135.037 492.371 134.878 492.223C134.722 492.072 134.644 491.893 134.644 491.686C134.644 491.476 134.722 491.297 134.878 491.149C135.037 490.999 135.228 490.923 135.449 490.923C135.671 490.923 135.86 490.999 136.016 491.149C136.175 491.297 136.255 491.476 136.255 491.686C136.255 491.893 136.175 492.072 136.016 492.223C135.86 492.371 135.671 492.445 135.449 492.445ZM140.849 493.455V494.477H137.274V493.455H140.849ZM138.233 491.886H139.507V498.078C139.507 498.325 139.544 498.511 139.618 498.636C139.692 498.759 139.787 498.842 139.903 498.888C140.023 498.93 140.152 498.952 140.291 498.952C140.393 498.952 140.483 498.945 140.56 498.93C140.636 498.916 140.696 498.905 140.739 498.896L140.969 499.949C140.895 499.977 140.79 500.006 140.653 500.034C140.517 500.065 140.347 500.082 140.142 500.085C139.807 500.091 139.494 500.031 139.205 499.906C138.915 499.781 138.68 499.588 138.501 499.327C138.322 499.065 138.233 498.737 138.233 498.342V491.886ZM145.01 500.132C144.365 500.132 143.809 499.994 143.343 499.719C142.88 499.44 142.522 499.05 142.27 498.547C142.02 498.041 141.895 497.449 141.895 496.77C141.895 496.099 142.02 495.509 142.27 494.997C142.522 494.486 142.875 494.087 143.326 493.8C143.781 493.513 144.312 493.369 144.92 493.369C145.289 493.369 145.647 493.43 145.994 493.553C146.341 493.675 146.652 493.866 146.927 494.128C147.203 494.389 147.42 494.729 147.579 495.146C147.738 495.561 147.818 496.065 147.818 496.659V497.111H142.615V496.156H146.569C146.569 495.821 146.501 495.524 146.365 495.266C146.228 495.004 146.037 494.798 145.789 494.648C145.545 494.497 145.258 494.422 144.929 494.422C144.571 494.422 144.258 494.51 143.991 494.686C143.727 494.859 143.522 495.087 143.377 495.368C143.235 495.646 143.164 495.949 143.164 496.276V497.021C143.164 497.459 143.241 497.831 143.395 498.138C143.551 498.445 143.768 498.679 144.047 498.841C144.325 499 144.65 499.08 145.022 499.08C145.264 499.08 145.484 499.045 145.683 498.977C145.882 498.906 146.054 498.801 146.199 498.662C146.343 498.523 146.454 498.351 146.531 498.146L147.737 498.364C147.64 498.719 147.467 499.03 147.217 499.297C146.97 499.561 146.659 499.767 146.284 499.915C145.912 500.06 145.487 500.132 145.01 500.132ZM152.51 500V491.273H155.706C156.325 491.273 156.838 491.375 157.244 491.58C157.65 491.781 157.954 492.055 158.156 492.402C158.358 492.746 158.458 493.134 158.458 493.565C158.458 493.929 158.392 494.236 158.258 494.486C158.125 494.733 157.946 494.932 157.721 495.082C157.5 495.23 157.255 495.338 156.988 495.406V495.491C157.278 495.506 157.561 495.599 157.836 495.773C158.115 495.943 158.345 496.186 158.527 496.501C158.708 496.817 158.799 497.2 158.799 497.652C158.799 498.098 158.694 498.499 158.484 498.854C158.277 499.206 157.956 499.486 157.521 499.693C157.086 499.898 156.531 500 155.855 500H152.51ZM153.826 498.871H155.727C156.358 498.871 156.809 498.749 157.082 498.504C157.355 498.26 157.491 497.955 157.491 497.588C157.491 497.312 157.422 497.06 157.282 496.83C157.143 496.599 156.944 496.416 156.686 496.28C156.43 496.143 156.126 496.075 155.774 496.075H153.826V498.871ZM153.826 495.048H155.591C155.886 495.048 156.152 494.991 156.387 494.878C156.626 494.764 156.815 494.605 156.954 494.401C157.096 494.193 157.167 493.949 157.167 493.668C157.167 493.307 157.041 493.004 156.788 492.76C156.535 492.516 156.147 492.393 155.625 492.393H153.826V495.048ZM161.533 491.273V500H160.259V491.273H161.533ZM165.152 500.145C164.737 500.145 164.362 500.068 164.027 499.915C163.692 499.759 163.426 499.533 163.23 499.237C163.037 498.942 162.94 498.58 162.94 498.151C162.94 497.781 163.011 497.477 163.153 497.239C163.295 497 163.487 496.811 163.729 496.672C163.97 496.533 164.24 496.428 164.538 496.357C164.837 496.286 165.141 496.232 165.45 496.195C165.842 496.149 166.161 496.112 166.405 496.084C166.649 496.053 166.827 496.003 166.938 495.935C167.048 495.866 167.104 495.756 167.104 495.602V495.572C167.104 495.2 166.999 494.912 166.788 494.707C166.581 494.503 166.271 494.401 165.859 494.401C165.43 494.401 165.092 494.496 164.845 494.686C164.601 494.874 164.432 495.082 164.338 495.312L163.141 495.04C163.283 494.642 163.49 494.321 163.763 494.077C164.038 493.83 164.355 493.651 164.713 493.54C165.071 493.426 165.447 493.369 165.842 493.369C166.104 493.369 166.381 493.401 166.673 493.463C166.969 493.523 167.244 493.634 167.5 493.795C167.759 493.957 167.97 494.189 168.135 494.49C168.3 494.788 168.382 495.176 168.382 495.653V500H167.138V499.105H167.087C167.004 499.27 166.881 499.432 166.716 499.591C166.551 499.75 166.339 499.882 166.081 499.987C165.822 500.092 165.513 500.145 165.152 500.145ZM165.429 499.122C165.781 499.122 166.082 499.053 166.332 498.913C166.585 498.774 166.777 498.592 166.908 498.368C167.041 498.141 167.108 497.898 167.108 497.639V496.795C167.063 496.841 166.974 496.884 166.844 496.923C166.716 496.96 166.57 496.993 166.405 497.021C166.24 497.047 166.08 497.071 165.923 497.094C165.767 497.114 165.636 497.131 165.531 497.145C165.284 497.176 165.058 497.229 164.854 497.303C164.652 497.376 164.49 497.483 164.368 497.622C164.249 497.759 164.189 497.94 164.189 498.168C164.189 498.483 164.305 498.722 164.538 498.884C164.771 499.043 165.068 499.122 165.429 499.122ZM172.836 500.132C172.203 500.132 171.657 499.989 171.2 499.702C170.745 499.412 170.396 499.013 170.152 498.504C169.907 497.996 169.785 497.413 169.785 496.757C169.785 496.092 169.91 495.506 170.16 494.997C170.41 494.486 170.762 494.087 171.217 493.8C171.672 493.513 172.207 493.369 172.824 493.369C173.321 493.369 173.764 493.462 174.153 493.646C174.542 493.828 174.856 494.084 175.095 494.413C175.336 494.743 175.48 495.128 175.525 495.568H174.285C174.217 495.261 174.061 494.997 173.816 494.776C173.575 494.554 173.251 494.443 172.845 494.443C172.49 494.443 172.179 494.537 171.912 494.724C171.647 494.909 171.441 495.173 171.294 495.517C171.146 495.858 171.072 496.261 171.072 496.727C171.072 497.205 171.145 497.616 171.289 497.963C171.434 498.31 171.639 498.578 171.903 498.768C172.17 498.959 172.484 499.054 172.845 499.054C173.086 499.054 173.305 499.01 173.501 498.922C173.7 498.831 173.866 498.702 174 498.534C174.136 498.366 174.231 498.165 174.285 497.929H175.525C175.48 498.352 175.342 498.73 175.112 499.062C174.882 499.395 174.574 499.656 174.187 499.847C173.804 500.037 173.353 500.132 172.836 500.132ZM178.06 497.78L178.051 496.224H178.273L180.881 493.455H182.406L179.432 496.608H179.232L178.06 497.78ZM176.888 500V491.273H178.162V500H176.888ZM181.021 500L178.678 496.889L179.555 495.999L182.585 500H181.021ZM186.846 500V491.273H189.956C190.635 491.273 191.198 491.396 191.644 491.643C192.09 491.891 192.424 492.229 192.645 492.658C192.867 493.084 192.978 493.564 192.978 494.098C192.978 494.635 192.865 495.118 192.641 495.547C192.419 495.973 192.084 496.311 191.635 496.561C191.189 496.808 190.628 496.932 189.952 496.932H187.813V495.815H189.833C190.262 495.815 190.61 495.741 190.877 495.594C191.144 495.443 191.34 495.239 191.465 494.98C191.59 494.722 191.652 494.428 191.652 494.098C191.652 493.768 191.59 493.476 191.465 493.22C191.34 492.964 191.142 492.764 190.873 492.619C190.605 492.474 190.253 492.402 189.816 492.402H188.162V500H186.846ZM196.265 500.145C195.85 500.145 195.475 500.068 195.14 499.915C194.805 499.759 194.539 499.533 194.343 499.237C194.15 498.942 194.054 498.58 194.054 498.151C194.054 497.781 194.125 497.477 194.267 497.239C194.409 497 194.6 496.811 194.842 496.672C195.083 496.533 195.353 496.428 195.652 496.357C195.95 496.286 196.254 496.232 196.564 496.195C196.956 496.149 197.274 496.112 197.518 496.084C197.762 496.053 197.94 496.003 198.051 495.935C198.162 495.866 198.217 495.756 198.217 495.602V495.572C198.217 495.2 198.112 494.912 197.902 494.707C197.694 494.503 197.385 494.401 196.973 494.401C196.544 494.401 196.206 494.496 195.958 494.686C195.714 494.874 195.545 495.082 195.451 495.312L194.254 495.04C194.396 494.642 194.603 494.321 194.876 494.077C195.152 493.83 195.468 493.651 195.826 493.54C196.184 493.426 196.561 493.369 196.956 493.369C197.217 493.369 197.494 493.401 197.787 493.463C198.082 493.523 198.358 493.634 198.613 493.795C198.872 493.957 199.083 494.189 199.248 494.49C199.413 494.788 199.495 495.176 199.495 495.653V500H198.251V499.105H198.2C198.118 499.27 197.994 499.432 197.829 499.591C197.664 499.75 197.453 499.882 197.194 499.987C196.936 500.092 196.626 500.145 196.265 500.145ZM196.542 499.122C196.895 499.122 197.196 499.053 197.446 498.913C197.699 498.774 197.89 498.592 198.021 498.368C198.154 498.141 198.221 497.898 198.221 497.639V496.795C198.176 496.841 198.088 496.884 197.957 496.923C197.829 496.96 197.683 496.993 197.518 497.021C197.353 497.047 197.193 497.071 197.037 497.094C196.88 497.114 196.75 497.131 196.645 497.145C196.397 497.176 196.172 497.229 195.967 497.303C195.765 497.376 195.603 497.483 195.481 497.622C195.362 497.759 195.302 497.94 195.302 498.168C195.302 498.483 195.419 498.722 195.652 498.884C195.885 499.043 196.181 499.122 196.542 499.122ZM202.467 496.114V500H201.192V493.455H202.415V494.52H202.496C202.647 494.173 202.883 493.895 203.204 493.685C203.528 493.474 203.935 493.369 204.427 493.369C204.873 493.369 205.263 493.463 205.599 493.651C205.934 493.835 206.194 494.111 206.379 494.477C206.563 494.844 206.656 495.297 206.656 495.837V500H205.381V495.99C205.381 495.516 205.258 495.145 205.011 494.878C204.763 494.608 204.424 494.473 203.992 494.473C203.697 494.473 203.434 494.537 203.204 494.665C202.977 494.793 202.796 494.98 202.663 495.227C202.532 495.472 202.467 495.767 202.467 496.114ZM210.815 500.128C210.286 500.128 209.815 499.993 209.4 499.723C208.988 499.45 208.664 499.062 208.428 498.56C208.195 498.054 208.079 497.447 208.079 496.74C208.079 496.033 208.197 495.428 208.433 494.925C208.671 494.422 208.998 494.037 209.413 493.77C209.827 493.503 210.298 493.369 210.823 493.369C211.229 493.369 211.556 493.438 211.803 493.574C212.053 493.707 212.246 493.864 212.383 494.043C212.522 494.222 212.63 494.379 212.707 494.516H212.783V491.273H214.058V500H212.813V498.982H212.707C212.63 499.121 212.519 499.28 212.374 499.459C212.232 499.638 212.036 499.794 211.786 499.928C211.536 500.061 211.212 500.128 210.815 500.128ZM211.096 499.041C211.462 499.041 211.772 498.945 212.025 498.751C212.281 498.555 212.474 498.284 212.604 497.938C212.738 497.591 212.805 497.187 212.805 496.727C212.805 496.273 212.739 495.875 212.609 495.534C212.478 495.193 212.286 494.928 212.033 494.737C211.781 494.547 211.468 494.452 211.096 494.452C210.712 494.452 210.393 494.551 210.137 494.75C209.881 494.949 209.688 495.22 209.558 495.564C209.43 495.908 209.366 496.295 209.366 496.727C209.366 497.165 209.431 497.558 209.562 497.908C209.692 498.257 209.886 498.534 210.141 498.739C210.4 498.94 210.718 499.041 211.096 499.041ZM217.781 500.145C217.366 500.145 216.991 500.068 216.656 499.915C216.321 499.759 216.055 499.533 215.859 499.237C215.666 498.942 215.569 498.58 215.569 498.151C215.569 497.781 215.64 497.477 215.782 497.239C215.924 497 216.116 496.811 216.358 496.672C216.599 496.533 216.869 496.428 217.167 496.357C217.466 496.286 217.77 496.232 218.079 496.195C218.471 496.149 218.789 496.112 219.034 496.084C219.278 496.053 219.456 496.003 219.566 495.935C219.677 495.866 219.733 495.756 219.733 495.602V495.572C219.733 495.2 219.627 494.912 219.417 494.707C219.21 494.503 218.9 494.401 218.488 494.401C218.059 494.401 217.721 494.496 217.474 494.686C217.23 494.874 217.061 495.082 216.967 495.312L215.77 495.04C215.912 494.642 216.119 494.321 216.392 494.077C216.667 493.83 216.984 493.651 217.342 493.54C217.7 493.426 218.076 493.369 218.471 493.369C218.733 493.369 219.01 493.401 219.302 493.463C219.598 493.523 219.873 493.634 220.129 493.795C220.387 493.957 220.599 494.189 220.764 494.49C220.929 494.788 221.011 495.176 221.011 495.653V500H219.767V499.105H219.716C219.633 499.27 219.51 499.432 219.345 499.591C219.18 499.75 218.968 499.882 218.71 499.987C218.451 500.092 218.142 500.145 217.781 500.145ZM218.058 499.122C218.41 499.122 218.711 499.053 218.961 498.913C219.214 498.774 219.406 498.592 219.537 498.368C219.67 498.141 219.737 497.898 219.737 497.639V496.795C219.691 496.841 219.603 496.884 219.473 496.923C219.345 496.96 219.199 496.993 219.034 497.021C218.869 497.047 218.708 497.071 218.552 497.094C218.396 497.114 218.265 497.131 218.16 497.145C217.913 497.176 217.687 497.229 217.483 497.303C217.281 497.376 217.119 497.483 216.997 497.622C216.877 497.759 216.818 497.94 216.818 498.168C216.818 498.483 216.934 498.722 217.167 498.884C217.4 499.043 217.697 499.122 218.058 499.122ZM226.255 495.636C226.255 494.568 226.395 493.585 226.676 492.688C226.958 491.79 227.368 490.962 227.908 490.203H229.076C228.865 490.484 228.669 490.83 228.488 491.239C228.306 491.648 228.147 492.097 228.01 492.585C227.874 493.071 227.767 493.575 227.691 494.098C227.614 494.618 227.576 495.131 227.576 495.636C227.576 496.312 227.642 496.997 227.776 497.69C227.909 498.384 228.09 499.027 228.317 499.621C228.544 500.214 228.797 500.699 229.076 501.074H227.908C227.368 500.315 226.958 499.487 226.676 498.589C226.395 497.692 226.255 496.707 226.255 495.636ZM230.402 500V499.045L233.355 495.986C233.67 495.653 233.93 495.362 234.135 495.112C234.342 494.859 234.497 494.619 234.599 494.392C234.702 494.165 234.753 493.923 234.753 493.668C234.753 493.378 234.685 493.128 234.548 492.918C234.412 492.705 234.226 492.541 233.99 492.428C233.754 492.311 233.489 492.253 233.193 492.253C232.881 492.253 232.608 492.317 232.375 492.445C232.142 492.572 231.963 492.753 231.838 492.986C231.713 493.219 231.651 493.491 231.651 493.804H230.393C230.393 493.273 230.516 492.808 230.76 492.411C231.004 492.013 231.339 491.705 231.766 491.486C232.192 491.264 232.676 491.153 233.219 491.153C233.767 491.153 234.25 491.263 234.668 491.482C235.088 491.697 235.416 491.993 235.652 492.368C235.888 492.74 236.006 493.161 236.006 493.629C236.006 493.953 235.945 494.27 235.822 494.58C235.703 494.889 235.494 495.234 235.196 495.615C234.898 495.993 234.483 496.452 233.952 496.991L232.217 498.807V498.871H236.146V500H230.402ZM240.8 500.145C240.126 500.142 239.551 499.964 239.074 499.612C238.597 499.26 238.232 498.747 237.979 498.074C237.726 497.401 237.599 496.589 237.599 495.641C237.599 494.695 237.726 493.886 237.979 493.216C238.234 492.545 238.601 492.034 239.078 491.682C239.558 491.33 240.132 491.153 240.8 491.153C241.467 491.153 242.04 491.331 242.517 491.686C242.994 492.038 243.359 492.55 243.612 493.22C243.868 493.888 243.996 494.695 243.996 495.641C243.996 496.592 243.869 497.405 243.616 498.078C243.364 498.749 242.999 499.261 242.521 499.616C242.044 499.969 241.47 500.145 240.8 500.145ZM240.8 499.007C241.391 499.007 241.852 498.719 242.185 498.142C242.52 497.565 242.688 496.732 242.688 495.641C242.688 494.916 242.611 494.304 242.457 493.804C242.307 493.301 242.089 492.92 241.805 492.662C241.524 492.401 241.189 492.27 240.8 492.27C240.212 492.27 239.75 492.56 239.415 493.139C239.08 493.719 238.911 494.553 238.908 495.641C238.908 496.368 238.983 496.983 239.134 497.486C239.287 497.986 239.504 498.365 239.786 498.624C240.067 498.879 240.405 499.007 240.8 499.007ZM245.507 500V499.045L248.461 495.986C248.776 495.653 249.036 495.362 249.24 495.112C249.448 494.859 249.603 494.619 249.705 494.392C249.807 494.165 249.858 493.923 249.858 493.668C249.858 493.378 249.79 493.128 249.654 492.918C249.517 492.705 249.331 492.541 249.096 492.428C248.86 492.311 248.594 492.253 248.299 492.253C247.986 492.253 247.713 492.317 247.48 492.445C247.248 492.572 247.069 492.753 246.944 492.986C246.819 493.219 246.756 493.491 246.756 493.804H245.499C245.499 493.273 245.621 492.808 245.865 492.411C246.11 492.013 246.445 491.705 246.871 491.486C247.297 491.264 247.782 491.153 248.324 491.153C248.873 491.153 249.355 491.263 249.773 491.482C250.194 491.697 250.522 491.993 250.757 492.368C250.993 492.74 251.111 493.161 251.111 493.629C251.111 493.953 251.05 494.27 250.928 494.58C250.809 494.889 250.6 495.234 250.301 495.615C250.003 495.993 249.588 496.452 249.057 496.991L247.323 498.807V498.871H251.252V500H245.507ZM256.178 491.273V500H254.857V492.594H254.806L252.718 493.957V492.696L254.895 491.273H256.178ZM261.006 495.636C261.006 496.707 260.865 497.692 260.584 498.589C260.303 499.487 259.892 500.315 259.353 501.074H258.185C258.395 500.793 258.591 500.447 258.773 500.038C258.955 499.629 259.114 499.182 259.25 498.696C259.387 498.207 259.493 497.702 259.57 497.179C259.647 496.656 259.685 496.142 259.685 495.636C259.685 494.963 259.618 494.28 259.485 493.587C259.351 492.893 259.171 492.25 258.944 491.656C258.716 491.062 258.463 490.578 258.185 490.203H259.353C259.892 490.962 260.303 491.79 260.584 492.688C260.865 493.585 261.006 494.568 261.006 495.636Z"
							fill="#748282"
						/>
						<path
							d="M114.839 418V417.045L117.793 413.986C118.108 413.653 118.368 413.362 118.572 413.112C118.78 412.859 118.935 412.619 119.037 412.392C119.139 412.165 119.19 411.923 119.19 411.668C119.19 411.378 119.122 411.128 118.986 410.918C118.849 410.705 118.663 410.541 118.428 410.428C118.192 410.311 117.926 410.253 117.631 410.253C117.318 410.253 117.045 410.317 116.812 410.445C116.58 410.572 116.401 410.753 116.276 410.986C116.151 411.219 116.088 411.491 116.088 411.804H114.831C114.831 411.273 114.953 410.808 115.197 410.411C115.442 410.013 115.777 409.705 116.203 409.486C116.629 409.264 117.114 409.153 117.656 409.153C118.205 409.153 118.688 409.263 119.105 409.482C119.526 409.697 119.854 409.993 120.089 410.368C120.325 410.74 120.443 411.161 120.443 411.629C120.443 411.953 120.382 412.27 120.26 412.58C120.141 412.889 119.932 413.234 119.634 413.615C119.335 413.993 118.92 414.452 118.389 414.991L116.655 416.807V416.871H120.584V418H114.839ZM121.828 416.295V415.23L125.599 409.273H126.439V410.841H125.906L123.209 415.111V415.179H128.378V416.295H121.828ZM125.966 418V415.972L125.974 415.486V409.273H127.223V418H125.966ZM134.33 414.114V418H133.056V409.273H134.313V412.52H134.394C134.547 412.168 134.782 411.888 135.097 411.68C135.412 411.473 135.824 411.369 136.333 411.369C136.782 411.369 137.174 411.462 137.509 411.646C137.847 411.831 138.108 412.107 138.293 412.473C138.48 412.837 138.574 413.291 138.574 413.837V418H137.3V413.99C137.3 413.51 137.176 413.138 136.929 412.874C136.682 412.607 136.338 412.473 135.898 412.473C135.597 412.473 135.327 412.537 135.088 412.665C134.853 412.793 134.667 412.98 134.53 413.227C134.397 413.472 134.33 413.767 134.33 414.114ZM143.032 418.132C142.418 418.132 141.882 417.991 141.425 417.71C140.968 417.429 140.613 417.036 140.36 416.53C140.107 416.024 139.98 415.433 139.98 414.757C139.98 414.078 140.107 413.484 140.36 412.976C140.613 412.467 140.968 412.072 141.425 411.791C141.882 411.51 142.418 411.369 143.032 411.369C143.645 411.369 144.181 411.51 144.638 411.791C145.096 412.072 145.451 412.467 145.703 412.976C145.956 413.484 146.083 414.078 146.083 414.757C146.083 415.433 145.956 416.024 145.703 416.53C145.451 417.036 145.096 417.429 144.638 417.71C144.181 417.991 143.645 418.132 143.032 418.132ZM143.036 417.062C143.434 417.062 143.763 416.957 144.025 416.747C144.286 416.537 144.479 416.257 144.604 415.908C144.732 415.558 144.796 415.173 144.796 414.753C144.796 414.335 144.732 413.952 144.604 413.602C144.479 413.25 144.286 412.967 144.025 412.754C143.763 412.541 143.434 412.435 143.036 412.435C142.635 412.435 142.303 412.541 142.039 412.754C141.777 412.967 141.583 413.25 141.455 413.602C141.33 413.952 141.267 414.335 141.267 414.753C141.267 415.173 141.33 415.558 141.455 415.908C141.583 416.257 141.777 416.537 142.039 416.747C142.303 416.957 142.635 417.062 143.036 417.062ZM151.651 415.286V411.455H152.93V418H151.677V416.866H151.609C151.458 417.216 151.217 417.507 150.884 417.74C150.555 417.97 150.144 418.085 149.653 418.085C149.232 418.085 148.86 417.993 148.536 417.808C148.215 417.621 147.962 417.344 147.778 416.977C147.596 416.611 147.505 416.158 147.505 415.618V411.455H148.779V415.464C148.779 415.911 148.903 416.266 149.15 416.53C149.397 416.794 149.718 416.926 150.113 416.926C150.352 416.926 150.589 416.866 150.825 416.747C151.063 416.628 151.261 416.447 151.417 416.206C151.576 415.964 151.654 415.658 151.651 415.286ZM154.642 418V411.455H155.873V412.494H155.941C156.061 412.142 156.271 411.865 156.572 411.663C156.876 411.459 157.22 411.357 157.603 411.357C157.683 411.357 157.777 411.359 157.885 411.365C157.995 411.371 158.082 411.378 158.145 411.386V412.605C158.093 412.591 158.002 412.575 157.872 412.558C157.741 412.538 157.61 412.528 157.48 412.528C157.179 412.528 156.91 412.592 156.674 412.72C156.441 412.845 156.257 413.02 156.12 413.244C155.984 413.466 155.916 413.719 155.916 414.003V418H154.642ZM164.152 413.053L162.997 413.257C162.949 413.109 162.872 412.969 162.767 412.835C162.665 412.702 162.526 412.592 162.349 412.507C162.173 412.422 161.953 412.379 161.689 412.379C161.328 412.379 161.027 412.46 160.786 412.622C160.544 412.781 160.423 412.987 160.423 413.24C160.423 413.459 160.504 413.635 160.666 413.768C160.828 413.902 161.089 414.011 161.45 414.097L162.49 414.335C163.092 414.474 163.541 414.689 163.837 414.979C164.132 415.268 164.28 415.645 164.28 416.108C164.28 416.5 164.166 416.849 163.939 417.156C163.714 417.46 163.401 417.699 162.997 417.872C162.597 418.045 162.132 418.132 161.604 418.132C160.871 418.132 160.273 417.976 159.81 417.663C159.347 417.348 159.063 416.901 158.957 416.321L160.189 416.134C160.266 416.455 160.423 416.697 160.662 416.862C160.901 417.024 161.212 417.105 161.595 417.105C162.013 417.105 162.347 417.018 162.597 416.845C162.847 416.669 162.972 416.455 162.972 416.202C162.972 415.997 162.895 415.825 162.741 415.686C162.591 415.547 162.359 415.442 162.047 415.371L160.939 415.128C160.328 414.989 159.876 414.767 159.584 414.463C159.294 414.159 159.149 413.774 159.149 413.308C159.149 412.922 159.257 412.584 159.473 412.294C159.689 412.004 159.987 411.778 160.368 411.616C160.749 411.452 161.185 411.369 161.676 411.369C162.384 411.369 162.94 411.523 163.347 411.83C163.753 412.134 164.021 412.541 164.152 413.053Z"
							fill="#748282"
						/>
						<path
							d="M184.422 416.534V410.773H185.568V416.534H184.422ZM182.116 414.224V413.082H187.878V414.224H182.116ZM196.319 409.273V418H194.998V410.594H194.946L192.858 411.957V410.696L195.036 409.273H196.319ZM198.679 418V417.045L201.632 413.986C201.948 413.653 202.208 413.362 202.412 413.112C202.62 412.859 202.775 412.619 202.877 412.392C202.979 412.165 203.03 411.923 203.03 411.668C203.03 411.378 202.962 411.128 202.826 410.918C202.689 410.705 202.503 410.541 202.267 410.428C202.032 410.311 201.766 410.253 201.471 410.253C201.158 410.253 200.885 410.317 200.652 410.445C200.419 410.572 200.24 410.753 200.115 410.986C199.99 411.219 199.928 411.491 199.928 411.804H198.671C198.671 411.273 198.793 410.808 199.037 410.411C199.282 410.013 199.617 409.705 200.043 409.486C200.469 409.264 200.953 409.153 201.496 409.153C202.044 409.153 202.527 409.263 202.945 409.482C203.365 409.697 203.694 409.993 203.929 410.368C204.165 410.74 204.283 411.161 204.283 411.629C204.283 411.953 204.222 412.27 204.1 412.58C203.98 412.889 203.772 413.234 203.473 413.615C203.175 413.993 202.76 414.452 202.229 414.991L200.495 416.807V416.871H204.424V418H198.679ZM210.594 416.364V415.903C210.594 415.574 210.662 415.273 210.799 415C210.938 414.724 211.14 414.504 211.404 414.339C211.671 414.172 211.993 414.088 212.371 414.088C212.757 414.088 213.081 414.17 213.343 414.335C213.604 414.5 213.801 414.72 213.935 414.996C214.071 415.271 214.14 415.574 214.14 415.903V416.364C214.14 416.693 214.071 416.996 213.935 417.271C213.799 417.544 213.598 417.764 213.334 417.932C213.073 418.097 212.752 418.179 212.371 418.179C211.988 418.179 211.664 418.097 211.4 417.932C211.135 417.764 210.935 417.544 210.799 417.271C210.662 416.996 210.594 416.693 210.594 416.364ZM211.587 415.903V416.364C211.587 416.608 211.645 416.83 211.762 417.028C211.878 417.227 212.081 417.327 212.371 417.327C212.658 417.327 212.858 417.227 212.972 417.028C213.086 416.83 213.142 416.608 213.142 416.364V415.903C213.142 415.659 213.087 415.437 212.976 415.239C212.868 415.04 212.667 414.94 212.371 414.94C212.087 414.94 211.885 415.04 211.766 415.239C211.647 415.437 211.587 415.659 211.587 415.903ZM206.205 411.369V410.909C206.205 410.58 206.273 410.277 206.409 410.001C206.549 409.726 206.75 409.506 207.015 409.341C207.282 409.176 207.604 409.094 207.982 409.094C208.368 409.094 208.692 409.176 208.953 409.341C209.215 409.506 209.412 409.726 209.546 410.001C209.679 410.277 209.746 410.58 209.746 410.909V411.369C209.746 411.699 209.678 412.001 209.542 412.277C209.408 412.55 209.209 412.77 208.945 412.938C208.684 413.102 208.363 413.185 207.982 413.185C207.596 413.185 207.27 413.102 207.006 412.938C206.745 412.77 206.546 412.55 206.409 412.277C206.273 412.001 206.205 411.699 206.205 411.369ZM207.202 410.909V411.369C207.202 411.614 207.259 411.835 207.373 412.034C207.489 412.233 207.692 412.332 207.982 412.332C208.266 412.332 208.465 412.233 208.578 412.034C208.695 411.835 208.753 411.614 208.753 411.369V410.909C208.753 410.665 208.698 410.443 208.587 410.244C208.476 410.045 208.275 409.946 207.982 409.946C207.698 409.946 207.496 410.045 207.377 410.244C207.26 410.443 207.202 410.665 207.202 410.909ZM206.61 418L212.61 409.273H213.628L207.628 418H206.61Z"
							fill="#748282"
						/>
						<rect
							x="0.5"
							y="0.5"
							width="195"
							height="72"
							rx="11.5"
							stroke="#0C1615"
						/>
						<rect x="24" y="41" width="63" height="20" rx="4" fill="#ACFF00" />
						<path d="M39 53.75H32L35.5 48.25L39 53.75Z" fill="#0C1615" />
						<path
							d="M45.9439 55.9091V46.8182H46.5263V55.9091H45.9439ZM47.7656 49.6378C47.7277 49.3016 47.5715 49.0412 47.2969 48.8565C47.0223 48.6695 46.6766 48.576 46.2599 48.576C45.9616 48.576 45.7036 48.6233 45.4858 48.718C45.268 48.8104 45.0987 48.9382 44.978 49.1016C44.8596 49.2625 44.8004 49.446 44.8004 49.652C44.8004 49.8248 44.8407 49.974 44.9212 50.0994C45.004 50.2249 45.1117 50.3303 45.2443 50.4155C45.3793 50.4983 45.5237 50.5682 45.6776 50.625C45.8314 50.6795 45.9794 50.7244 46.1214 50.7599L46.8317 50.9446C47.0637 51.0014 47.3016 51.0784 47.5455 51.1754C47.7893 51.2725 48.0154 51.4003 48.2237 51.5589C48.4321 51.7176 48.6001 51.9141 48.728 52.1484C48.8582 52.3828 48.9233 52.6634 48.9233 52.9901C48.9233 53.402 48.8168 53.7678 48.6037 54.0874C48.393 54.407 48.0864 54.6591 47.6839 54.8438C47.2839 55.0284 46.7997 55.1207 46.2315 55.1207C45.687 55.1207 45.2159 55.0343 44.8182 54.8615C44.4205 54.6887 44.1091 54.4437 43.8842 54.1264C43.6593 53.8068 43.535 53.428 43.5114 52.9901H44.6122C44.6335 53.2528 44.7188 53.4718 44.8679 53.647C45.0194 53.8198 45.2124 53.9489 45.4467 54.0341C45.6835 54.117 45.9427 54.1584 46.2244 54.1584C46.5346 54.1584 46.8104 54.1098 47.0518 54.0128C47.2957 53.9134 47.4875 53.776 47.6271 53.6009C47.7668 53.4233 47.8366 53.2161 47.8366 52.9794C47.8366 52.764 47.7751 52.5876 47.652 52.4503C47.5313 52.313 47.3667 52.1993 47.1584 52.1094C46.9524 52.0194 46.7192 51.9401 46.4588 51.8714L45.5994 51.6371C45.017 51.4785 44.5554 51.2453 44.2145 50.9375C43.8759 50.6297 43.7067 50.2225 43.7067 49.7159C43.7067 49.2969 43.8203 48.9311 44.0476 48.6186C44.2749 48.3061 44.5826 48.0634 44.9709 47.8906C45.3591 47.7154 45.7971 47.6278 46.2848 47.6278C46.7772 47.6278 47.2116 47.7143 47.5881 47.8871C47.9669 48.0599 48.2652 48.2978 48.483 48.6009C48.7008 48.9015 48.8144 49.2472 48.8239 49.6378H47.7656ZM52.6289 53.5795V52.6918L55.7717 47.7273H56.4712V49.0341H56.0273L53.7795 52.5923V52.6491H58.087V53.5795H52.6289ZM56.0771 55V53.3097L56.0842 52.9048V47.7273H57.1246V55H56.0771ZM61.7251 55.0994C61.2801 55.0994 60.88 55.0142 60.5249 54.8438C60.1721 54.6709 59.8904 54.4342 59.6797 54.1335C59.469 53.8329 59.3565 53.4896 59.3423 53.1037H60.4077C60.4337 53.4162 60.5722 53.6731 60.8232 53.8743C61.0741 54.0755 61.3748 54.1761 61.7251 54.1761C62.0045 54.1761 62.2519 54.1122 62.4673 53.9844C62.6851 53.8542 62.8556 53.6754 62.9787 53.4482C63.1042 53.2209 63.1669 52.9616 63.1669 52.6705C63.1669 52.3745 63.103 52.1106 62.9751 51.8786C62.8473 51.6465 62.6709 51.4643 62.446 51.3317C62.2235 51.1991 61.9678 51.1316 61.679 51.1293C61.4588 51.1293 61.2375 51.1671 61.0149 51.2429C60.7924 51.3187 60.6125 51.4181 60.4751 51.5412L59.4702 51.392L59.8786 47.7273H63.8771V48.6683H60.7912L60.5604 50.7031H60.603C60.745 50.5658 60.9332 50.451 61.1676 50.3587C61.4044 50.2663 61.6577 50.2202 61.9276 50.2202C62.3703 50.2202 62.7644 50.3255 63.1101 50.5362C63.4581 50.7469 63.7315 51.0346 63.9304 51.3991C64.1316 51.7614 64.2311 52.178 64.2287 52.6491C64.2311 53.1203 64.1245 53.5405 63.9091 53.9098C63.696 54.2791 63.4001 54.5703 63.0213 54.7834C62.6449 54.9941 62.2128 55.0994 61.7251 55.0994ZM66.6577 54.0057L66.6044 54.3928C66.5689 54.6768 66.5085 54.9728 66.4233 55.2805C66.3404 55.5907 66.254 55.8783 66.1641 56.1435C66.0765 56.4086 66.0043 56.6193 65.9474 56.7756H65.1946C65.2254 56.6288 65.268 56.4299 65.3224 56.179C65.3769 55.9304 65.4302 55.6522 65.4822 55.3445C65.5343 55.0367 65.5734 54.723 65.5994 54.4034L65.6349 54.0057H66.6577ZM70.4112 55.1207C69.8501 55.1184 69.3707 54.9704 68.973 54.6768C68.5753 54.3833 68.2711 53.956 68.0604 53.3949C67.8497 52.8338 67.7443 52.1579 67.7443 51.3672C67.7443 50.5788 67.8497 49.9053 68.0604 49.3466C68.2734 48.7879 68.5788 48.3617 68.9766 48.0682C69.3767 47.7746 69.8549 47.6278 70.4112 47.6278C70.9676 47.6278 71.4446 47.7758 71.8423 48.0717C72.2401 48.3653 72.5443 48.7914 72.755 49.3501C72.968 49.9065 73.0746 50.5788 73.0746 51.3672C73.0746 52.1603 72.9692 52.8374 72.7585 53.3984C72.5478 53.9571 72.2436 54.3845 71.8459 54.6804C71.4482 54.974 70.9699 55.1207 70.4112 55.1207ZM70.4112 54.1726C70.9036 54.1726 71.2884 53.9323 71.5653 53.4517C71.8447 52.9711 71.9844 52.2763 71.9844 51.3672C71.9844 50.7635 71.9205 50.2533 71.7926 49.8366C71.6671 49.4176 71.486 49.1004 71.2493 48.8849C71.0149 48.6671 70.7356 48.5582 70.4112 48.5582C69.9212 48.5582 69.5365 48.7997 69.2571 49.2827C68.9777 49.7656 68.8369 50.4605 68.8345 51.3672C68.8345 51.9732 68.8973 52.4858 69.0227 52.9048C69.1506 53.3215 69.3317 53.6375 69.5661 53.853C69.8004 54.0661 70.0821 54.1726 70.4112 54.1726ZM77.0936 47.7273V55H75.9927V48.8281H75.9501L74.21 49.9645V48.9134L76.0247 47.7273H77.0936Z"
							fill="#0C1615"
						/>
						<path
							d="M25.875 15.2727L27.9631 18.6861H28.0312L30.1193 15.2727H31.6449L28.9261 19.6364L31.6619 24H30.1278L28.0312 20.6335H27.9631L25.8665 24H24.3324L27.1151 19.6364L24.3494 15.2727H25.875ZM37.7536 19.0526L36.5987 19.2571C36.5504 19.1094 36.4737 18.9687 36.3686 18.8352C36.2663 18.7017 36.1271 18.5923 35.951 18.5071C35.7749 18.4219 35.5547 18.3793 35.2905 18.3793C34.9297 18.3793 34.6286 18.4602 34.3871 18.6222C34.1456 18.7812 34.0249 18.9872 34.0249 19.2401C34.0249 19.4588 34.1058 19.6349 34.2678 19.7685C34.4297 19.902 34.6911 20.0114 35.0518 20.0966L36.0916 20.3352C36.6939 20.4744 37.1428 20.6889 37.4382 20.9787C37.7337 21.2685 37.8814 21.6449 37.8814 22.108C37.8814 22.5 37.7678 22.8494 37.5405 23.1562C37.3161 23.4602 37.0021 23.6989 36.5987 23.8722C36.1982 24.0455 35.7337 24.1321 35.2053 24.1321C34.4723 24.1321 33.8743 23.9759 33.4112 23.6634C32.9482 23.348 32.6641 22.9006 32.5589 22.321L33.7905 22.1335C33.8672 22.4545 34.0249 22.6974 34.2635 22.8622C34.5021 23.0241 34.8132 23.1051 35.1967 23.1051C35.6143 23.1051 35.9482 23.0185 36.1982 22.8452C36.4482 22.669 36.5732 22.4545 36.5732 22.2017C36.5732 21.9972 36.4964 21.8253 36.343 21.6861C36.1925 21.5469 35.9609 21.4418 35.6484 21.3707L34.5405 21.1278C33.9297 20.9886 33.478 20.767 33.1854 20.4631C32.8956 20.1591 32.7507 19.7741 32.7507 19.3082C32.7507 18.9219 32.8587 18.5838 33.0746 18.294C33.2905 18.0043 33.5888 17.7784 33.9695 17.6165C34.3501 17.4517 34.7862 17.3693 35.2777 17.3693C35.9851 17.3693 36.5419 17.5227 36.9482 17.8295C37.3544 18.1335 37.6229 18.5412 37.7536 19.0526ZM41.1871 24.1449C40.7724 24.1449 40.3974 24.0682 40.0621 23.9148C39.7269 23.7585 39.4613 23.5327 39.2653 23.2372C39.0721 22.9418 38.9755 22.5795 38.9755 22.1506C38.9755 21.7812 39.0465 21.4773 39.1886 21.2386C39.3306 21 39.5224 20.8111 39.7638 20.6719C40.0053 20.5327 40.2752 20.4276 40.5735 20.3565C40.8718 20.2855 41.1758 20.2315 41.4854 20.1946C41.8775 20.1491 42.1957 20.1122 42.44 20.0838C42.6843 20.0526 42.8619 20.0028 42.9727 19.9347C43.0835 19.8665 43.1388 19.7557 43.1388 19.6023V19.5724C43.1388 19.2003 43.0337 18.9119 42.8235 18.7074C42.6161 18.5028 42.3065 18.4006 41.8945 18.4006C41.4656 18.4006 41.1275 18.4957 40.8803 18.6861C40.636 18.8736 40.467 19.0824 40.3732 19.3125L39.1758 19.0398C39.3178 18.642 39.5252 18.321 39.7979 18.0767C40.0735 17.8295 40.3903 17.6506 40.7482 17.5398C41.1062 17.4261 41.4826 17.3693 41.8775 17.3693C42.1388 17.3693 42.4158 17.4006 42.7085 17.4631C43.0039 17.5227 43.2795 17.6335 43.5352 17.7955C43.7937 17.9574 44.0053 18.1889 44.1701 18.4901C44.3349 18.7884 44.4173 19.1761 44.4173 19.6534V24H43.1729V23.1051H43.1218C43.0394 23.2699 42.9158 23.4318 42.7511 23.5909C42.5863 23.75 42.3746 23.8821 42.1161 23.9872C41.8576 24.0923 41.5479 24.1449 41.1871 24.1449ZM41.4641 23.1222C41.8164 23.1222 42.1175 23.0526 42.3675 22.9134C42.6204 22.7741 42.8121 22.5923 42.9428 22.3679C43.0763 22.1406 43.1431 21.8977 43.1431 21.6392V20.7955C43.0977 20.8409 43.0096 20.8835 42.8789 20.9233C42.7511 20.9602 42.6048 20.9929 42.44 21.0213C42.2752 21.0469 42.1147 21.071 41.9585 21.0938C41.8022 21.1136 41.6715 21.1307 41.5664 21.1449C41.3192 21.1761 41.0934 21.2287 40.8888 21.3026C40.6871 21.3764 40.5252 21.483 40.4031 21.6222C40.2837 21.7585 40.2241 21.9403 40.2241 22.1676C40.2241 22.483 40.3406 22.7216 40.5735 22.8835C40.8065 23.0426 41.1033 23.1222 41.4641 23.1222ZM50.2607 21.2855V17.4545H51.5391V24H50.2862V22.8665H50.218C50.0675 23.2159 49.826 23.5071 49.4936 23.7401C49.1641 23.9702 48.7536 24.0852 48.2621 24.0852C47.8416 24.0852 47.4695 23.9929 47.1456 23.8082C46.8246 23.6207 46.5717 23.3438 46.3871 22.9773C46.2053 22.6108 46.1143 22.1577 46.1143 21.6179V17.4545H47.3885V21.4645C47.3885 21.9105 47.5121 22.2656 47.7592 22.5298C48.0064 22.794 48.3274 22.9261 48.7223 22.9261C48.9609 22.9261 49.1982 22.8665 49.4339 22.7472C49.6726 22.6278 49.87 22.4474 50.0263 22.206C50.1854 21.9645 50.2635 21.6577 50.2607 21.2855ZM56.0082 24.1321C55.3746 24.1321 54.8292 23.9886 54.3718 23.7017C53.9173 23.4119 53.5678 23.0128 53.3235 22.5043C53.0792 21.9957 52.957 21.4134 52.957 20.7571C52.957 20.0923 53.082 19.5057 53.332 18.9972C53.582 18.4858 53.9343 18.0866 54.3888 17.7997C54.8434 17.5128 55.3789 17.3693 55.9954 17.3693C56.4925 17.3693 56.9357 17.4616 57.3249 17.6463C57.7141 17.8281 58.0281 18.0838 58.2667 18.4134C58.5082 18.7429 58.6516 19.1278 58.6971 19.5682H57.457C57.3888 19.2614 57.2326 18.9972 56.9883 18.7756C56.7468 18.554 56.4229 18.4432 56.0167 18.4432C55.6616 18.4432 55.3505 18.5369 55.0835 18.7244C54.8192 18.9091 54.6133 19.1733 54.4656 19.517C54.3178 19.858 54.244 20.2614 54.244 20.7273C54.244 21.2045 54.3164 21.6165 54.4613 21.9631C54.6062 22.3097 54.8107 22.5781 55.0749 22.7685C55.342 22.9588 55.6559 23.054 56.0167 23.054C56.2582 23.054 56.4769 23.0099 56.6729 22.9219C56.8718 22.831 57.038 22.7017 57.1715 22.5341C57.3079 22.3665 57.4031 22.1648 57.457 21.929H58.6971C58.6516 22.3523 58.5138 22.7301 58.2837 23.0625C58.0536 23.3949 57.7454 23.6562 57.359 23.8466C56.9755 24.0369 56.5252 24.1321 56.0082 24.1321ZM62.8807 24.1321C62.2358 24.1321 61.6804 23.9943 61.2145 23.7188C60.7514 23.4403 60.3935 23.0497 60.1406 22.5469C59.8906 22.0412 59.7656 21.4489 59.7656 20.7699C59.7656 20.0994 59.8906 19.5085 60.1406 18.9972C60.3935 18.4858 60.7457 18.0866 61.1974 17.7997C61.652 17.5128 62.1832 17.3693 62.7912 17.3693C63.1605 17.3693 63.5185 17.4304 63.8651 17.5526C64.2116 17.6747 64.5227 17.8665 64.7983 18.1278C65.0739 18.3892 65.2912 18.7287 65.4503 19.1463C65.6094 19.5611 65.6889 20.0653 65.6889 20.6591V21.1108H60.4858V20.1562H64.4403C64.4403 19.821 64.3722 19.5241 64.2358 19.2656C64.0994 19.0043 63.9077 18.7983 63.6605 18.6477C63.4162 18.4972 63.1293 18.4219 62.7997 18.4219C62.4418 18.4219 62.1293 18.5099 61.8622 18.6861C61.598 18.8594 61.3935 19.0866 61.2486 19.3679C61.1065 19.6463 61.0355 19.9489 61.0355 20.2756V21.0213C61.0355 21.4588 61.1122 21.831 61.2656 22.1378C61.4219 22.4446 61.6392 22.679 61.9176 22.8409C62.196 23 62.5213 23.0795 62.8935 23.0795C63.1349 23.0795 63.3551 23.0455 63.554 22.9773C63.7528 22.9062 63.9247 22.8011 64.0696 22.6619C64.2145 22.5227 64.3253 22.3509 64.402 22.1463L65.608 22.3636C65.5114 22.7187 65.3381 23.0298 65.0881 23.2969C64.8409 23.5611 64.5298 23.767 64.1548 23.9148C63.7827 24.0597 63.358 24.1321 62.8807 24.1321ZM71.1179 24H69.7202L72.8608 15.2727H74.3821L77.5227 24H76.125L73.6577 16.858H73.5895L71.1179 24ZM71.3523 20.5824H75.8864V21.6903H71.3523V20.5824ZM83.5387 19.0526L82.3839 19.2571C82.3356 19.1094 82.2589 18.9687 82.1538 18.8352C82.0515 18.7017 81.9123 18.5923 81.7362 18.5071C81.56 18.4219 81.3398 18.3793 81.0756 18.3793C80.7148 18.3793 80.4137 18.4602 80.1722 18.6222C79.9308 18.7812 79.81 18.9872 79.81 19.2401C79.81 19.4588 79.891 19.6349 80.0529 19.7685C80.2148 19.902 80.4762 20.0114 80.837 20.0966L81.8768 20.3352C82.479 20.4744 82.9279 20.6889 83.2234 20.9787C83.5188 21.2685 83.6665 21.6449 83.6665 22.108C83.6665 22.5 83.5529 22.8494 83.3256 23.1562C83.1012 23.4602 82.7873 23.6989 82.3839 23.8722C81.9833 24.0455 81.5188 24.1321 80.9904 24.1321C80.2575 24.1321 79.6594 23.9759 79.1964 23.6634C78.7333 23.348 78.4492 22.9006 78.3441 22.321L79.5756 22.1335C79.6523 22.4545 79.81 22.6974 80.0487 22.8622C80.2873 23.0241 80.5984 23.1051 80.9819 23.1051C81.3995 23.1051 81.7333 23.0185 81.9833 22.8452C82.2333 22.669 82.3583 22.4545 82.3583 22.2017C82.3583 21.9972 82.2816 21.8253 82.1282 21.6861C81.9776 21.5469 81.7461 21.4418 81.4336 21.3707L80.3256 21.1278C79.7148 20.9886 79.2631 20.767 78.9705 20.4631C78.6808 20.1591 78.5359 19.7741 78.5359 19.3082C78.5359 18.9219 78.6438 18.5838 78.8597 18.294C79.0756 18.0043 79.3739 17.7784 79.7546 17.6165C80.1353 17.4517 80.5714 17.3693 81.0629 17.3693C81.7702 17.3693 82.3271 17.5227 82.7333 17.8295C83.1396 18.1335 83.408 18.5412 83.5387 19.0526ZM89.9723 19.0526L88.8175 19.2571C88.7692 19.1094 88.6925 18.9687 88.5874 18.8352C88.4851 18.7017 88.3459 18.5923 88.1697 18.5071C87.9936 18.4219 87.7734 18.3793 87.5092 18.3793C87.1484 18.3793 86.8473 18.4602 86.6058 18.6222C86.3643 18.7812 86.2436 18.9872 86.2436 19.2401C86.2436 19.4588 86.3246 19.6349 86.4865 19.7685C86.6484 19.902 86.9098 20.0114 87.2706 20.0966L88.3104 20.3352C88.9126 20.4744 89.3615 20.6889 89.657 20.9787C89.9524 21.2685 90.1001 21.6449 90.1001 22.108C90.1001 22.5 89.9865 22.8494 89.7592 23.1562C89.5348 23.4602 89.2209 23.6989 88.8175 23.8722C88.4169 24.0455 87.9524 24.1321 87.424 24.1321C86.6911 24.1321 86.093 23.9759 85.63 23.6634C85.1669 23.348 84.8828 22.9006 84.7777 22.321L86.0092 22.1335C86.0859 22.4545 86.2436 22.6974 86.4822 22.8622C86.7209 23.0241 87.032 23.1051 87.4155 23.1051C87.8331 23.1051 88.1669 23.0185 88.4169 22.8452C88.6669 22.669 88.7919 22.4545 88.7919 22.2017C88.7919 21.9972 88.7152 21.8253 88.5618 21.6861C88.4112 21.5469 88.1797 21.4418 87.8672 21.3707L86.7592 21.1278C86.1484 20.9886 85.6967 20.767 85.4041 20.4631C85.1143 20.1591 84.9695 19.7741 84.9695 19.3082C84.9695 18.9219 85.0774 18.5838 85.2933 18.294C85.5092 18.0043 85.8075 17.7784 86.1882 17.6165C86.5689 17.4517 87.005 17.3693 87.4964 17.3693C88.2038 17.3693 88.7607 17.5227 89.1669 17.8295C89.5732 18.1335 89.8416 18.5412 89.9723 19.0526ZM94.3221 24.1321C93.6772 24.1321 93.1218 23.9943 92.6559 23.7188C92.1928 23.4403 91.8349 23.0497 91.582 22.5469C91.332 22.0412 91.207 21.4489 91.207 20.7699C91.207 20.0994 91.332 19.5085 91.582 18.9972C91.8349 18.4858 92.1871 18.0866 92.6388 17.7997C93.0934 17.5128 93.6246 17.3693 94.2326 17.3693C94.6019 17.3693 94.9599 17.4304 95.3065 17.5526C95.6531 17.6747 95.9641 17.8665 96.2397 18.1278C96.5153 18.3892 96.7326 18.7287 96.8917 19.1463C97.0508 19.5611 97.1303 20.0653 97.1303 20.6591V21.1108H91.9272V20.1562H95.8817C95.8817 19.821 95.8136 19.5241 95.6772 19.2656C95.5408 19.0043 95.3491 18.7983 95.1019 18.6477C94.8576 18.4972 94.5707 18.4219 94.2411 18.4219C93.8832 18.4219 93.5707 18.5099 93.3036 18.6861C93.0394 18.8594 92.8349 19.0866 92.69 19.3679C92.5479 19.6463 92.4769 19.9489 92.4769 20.2756V21.0213C92.4769 21.4588 92.5536 21.831 92.707 22.1378C92.8633 22.4446 93.0806 22.679 93.359 22.8409C93.6374 23 93.9627 23.0795 94.3349 23.0795C94.5763 23.0795 94.7965 23.0455 94.9954 22.9773C95.1942 22.9062 95.3661 22.8011 95.511 22.6619C95.6559 22.5227 95.7667 22.3509 95.8434 22.1463L97.0494 22.3636C96.9528 22.7187 96.7795 23.0298 96.5295 23.2969C96.2823 23.5611 95.9712 23.767 95.5962 23.9148C95.2241 24.0597 94.7994 24.1321 94.3221 24.1321ZM101.599 17.4545V18.4773H98.0241V17.4545H101.599ZM98.983 15.8864H100.257V22.0781C100.257 22.3253 100.294 22.5114 100.368 22.6364C100.442 22.7585 100.537 22.8423 100.653 22.8878C100.773 22.9304 100.902 22.9517 101.041 22.9517C101.143 22.9517 101.233 22.9446 101.31 22.9304C101.386 22.9162 101.446 22.9048 101.489 22.8963L101.719 23.9489C101.645 23.9773 101.54 24.0057 101.403 24.0341C101.267 24.0653 101.097 24.0824 100.892 24.0852C100.557 24.0909 100.244 24.0312 99.9545 23.9062C99.6648 23.7812 99.4304 23.5881 99.2514 23.3267C99.0724 23.0653 98.983 22.7372 98.983 22.3423V15.8864Z"
							fill="#0C1615"
						/>
						<path
							d="M122.533 25.0909V14.1818H123.232V25.0909H122.533ZM124.719 17.5653C124.673 17.1619 124.486 16.8494 124.156 16.6278C123.827 16.4034 123.412 16.2912 122.912 16.2912C122.554 16.2912 122.244 16.348 121.983 16.4616C121.722 16.5724 121.518 16.7259 121.374 16.9219C121.232 17.1151 121.161 17.3352 121.161 17.5824C121.161 17.7898 121.209 17.9687 121.305 18.1193C121.405 18.2699 121.534 18.3963 121.693 18.4986C121.855 18.598 122.028 18.6818 122.213 18.75C122.398 18.8153 122.575 18.8693 122.746 18.9119L123.598 19.1335C123.876 19.2017 124.162 19.294 124.455 19.4105C124.747 19.527 125.018 19.6804 125.268 19.8707C125.518 20.0611 125.72 20.2969 125.874 20.5781C126.03 20.8594 126.108 21.196 126.108 21.5881C126.108 22.0824 125.98 22.5213 125.724 22.9048C125.472 23.2884 125.104 23.5909 124.621 23.8125C124.141 24.0341 123.56 24.1449 122.878 24.1449C122.224 24.1449 121.659 24.0412 121.182 23.8338C120.705 23.6264 120.331 23.3324 120.061 22.9517C119.791 22.5682 119.642 22.1136 119.614 21.5881H120.935C120.96 21.9034 121.063 22.1662 121.241 22.3764C121.423 22.5838 121.655 22.7386 121.936 22.8409C122.22 22.9403 122.531 22.9901 122.869 22.9901C123.241 22.9901 123.572 22.9318 123.862 22.8153C124.155 22.696 124.385 22.5312 124.553 22.321C124.72 22.108 124.804 21.8594 124.804 21.5753C124.804 21.3168 124.73 21.1051 124.582 20.9403C124.438 20.7756 124.24 20.6392 123.99 20.5312C123.743 20.4233 123.463 20.3281 123.151 20.2457L122.119 19.9645C121.42 19.7741 120.866 19.4943 120.457 19.125C120.051 18.7557 119.848 18.267 119.848 17.6591C119.848 17.1562 119.984 16.7173 120.257 16.3423C120.53 15.9673 120.899 15.6761 121.365 15.4688C121.831 15.2585 122.357 15.1534 122.942 15.1534C123.533 15.1534 124.054 15.2571 124.506 15.4645C124.96 15.6719 125.318 15.9574 125.58 16.321C125.841 16.6818 125.977 17.0966 125.989 17.5653H124.719ZM134.049 15.2727V24H132.728V16.5938H132.677L130.589 17.9574V16.696L132.766 15.2727H134.049ZM139.312 15.1534C139.701 15.1562 140.085 15.2273 140.462 15.3665C140.84 15.5057 141.181 15.733 141.485 16.0483C141.792 16.3636 142.036 16.7898 142.218 17.3267C142.403 17.8608 142.496 18.5256 142.499 19.321C142.499 20.0852 142.423 20.7656 142.269 21.3622C142.116 21.956 141.896 22.4574 141.609 22.8665C141.325 23.2756 140.979 23.5866 140.573 23.7997C140.167 24.0128 139.71 24.1193 139.201 24.1193C138.681 24.1193 138.219 24.017 137.816 23.8125C137.413 23.608 137.085 23.3253 136.832 22.9645C136.579 22.6009 136.421 22.1832 136.359 21.7116H137.658C137.744 22.0866 137.917 22.3906 138.178 22.6236C138.442 22.8537 138.783 22.9688 139.201 22.9688C139.84 22.9688 140.339 22.6903 140.697 22.1335C141.055 21.5739 141.235 20.7926 141.238 19.7898H141.17C141.022 20.0341 140.837 20.2443 140.616 20.4205C140.397 20.5966 140.151 20.733 139.879 20.8295C139.606 20.9261 139.315 20.9744 139.005 20.9744C138.502 20.9744 138.045 20.8509 137.633 20.6037C137.221 20.3565 136.893 20.017 136.648 19.5852C136.404 19.1534 136.282 18.6605 136.282 18.1065C136.282 17.5554 136.407 17.0554 136.657 16.6065C136.91 16.1577 137.262 15.8026 137.714 15.5412C138.168 15.277 138.701 15.1477 139.312 15.1534ZM139.316 16.2614C138.984 16.2614 138.684 16.3437 138.417 16.5085C138.153 16.6705 137.944 16.8906 137.79 17.169C137.637 17.4446 137.56 17.7514 137.56 18.0895C137.56 18.4276 137.634 18.7344 137.782 19.0099C137.933 19.2827 138.137 19.5 138.396 19.6619C138.657 19.821 138.955 19.9006 139.29 19.9006C139.54 19.9006 139.773 19.8523 139.989 19.7557C140.205 19.6591 140.394 19.5256 140.556 19.3551C140.718 19.1818 140.844 18.9858 140.935 18.767C141.026 18.5483 141.072 18.3182 141.072 18.0767C141.072 17.7557 140.995 17.4574 140.842 17.1818C140.691 16.9062 140.484 16.6847 140.219 16.517C139.955 16.3466 139.654 16.2614 139.316 16.2614ZM146.988 24.1193C146.377 24.1193 145.837 24.0142 145.368 23.804C144.902 23.5937 144.537 23.304 144.273 22.9347C144.009 22.5653 143.878 22.1449 143.881 21.6733C143.878 21.304 143.953 20.9645 144.107 20.6548C144.263 20.3423 144.475 20.0824 144.742 19.875C145.009 19.6648 145.307 19.5312 145.637 19.4744V19.4233C145.202 19.3182 144.854 19.0852 144.593 18.7244C144.331 18.3636 144.202 17.9489 144.205 17.4801C144.202 17.0341 144.32 16.6364 144.559 16.2869C144.8 15.9347 145.131 15.6577 145.551 15.456C145.972 15.2543 146.451 15.1534 146.988 15.1534C147.519 15.1534 147.993 15.2557 148.411 15.4602C148.831 15.6619 149.162 15.9389 149.404 16.2912C149.645 16.6406 149.767 17.0369 149.77 17.4801C149.767 17.9489 149.634 18.3636 149.37 18.7244C149.105 19.0852 148.762 19.3182 148.338 19.4233V19.4744C148.665 19.5312 148.959 19.6648 149.221 19.875C149.485 20.0824 149.695 20.3423 149.851 20.6548C150.01 20.9645 150.091 21.304 150.094 21.6733C150.091 22.1449 149.958 22.5653 149.694 22.9347C149.429 23.304 149.063 23.5937 148.594 23.804C148.128 24.0142 147.593 24.1193 146.988 24.1193ZM146.988 23.0412C147.348 23.0412 147.661 22.9815 147.925 22.8622C148.189 22.7401 148.394 22.571 148.539 22.3551C148.684 22.1364 148.757 21.8807 148.76 21.5881C148.757 21.2841 148.678 21.0156 148.522 20.7827C148.368 20.5497 148.159 20.3665 147.895 20.233C147.631 20.0994 147.328 20.0327 146.988 20.0327C146.644 20.0327 146.338 20.0994 146.071 20.233C145.804 20.3665 145.594 20.5497 145.441 20.7827C145.287 21.0156 145.212 21.2841 145.215 21.5881C145.212 21.8807 145.282 22.1364 145.424 22.3551C145.569 22.571 145.775 22.7401 146.042 22.8622C146.309 22.9815 146.624 23.0412 146.988 23.0412ZM146.988 18.9801C147.277 18.9801 147.534 18.9219 147.759 18.8054C147.983 18.6889 148.159 18.527 148.287 18.3196C148.418 18.1122 148.485 17.8693 148.488 17.5909C148.485 17.3182 148.419 17.0795 148.292 16.875C148.167 16.6705 147.992 16.5128 147.767 16.402C147.543 16.2884 147.283 16.2315 146.988 16.2315C146.686 16.2315 146.422 16.2884 146.195 16.402C145.971 16.5128 145.796 16.6705 145.671 16.875C145.546 17.0795 145.485 17.3182 145.488 17.5909C145.485 17.8693 145.547 18.1122 145.675 18.3196C145.803 18.527 145.979 18.6889 146.203 18.8054C146.431 18.9219 146.692 18.9801 146.988 18.9801ZM153.038 22.8068L152.974 23.2713C152.931 23.6122 152.859 23.9673 152.756 24.3366C152.657 24.7088 152.553 25.054 152.445 25.3722C152.34 25.6903 152.254 25.9432 152.185 26.1307H151.282C151.319 25.9545 151.37 25.7159 151.435 25.4148C151.501 25.1165 151.565 24.7827 151.627 24.4134C151.69 24.044 151.737 23.6676 151.768 23.2841L151.81 22.8068H153.038ZM154.637 22.2955V21.2301L158.408 15.2727H159.248V16.8409H158.715L156.017 21.1108V21.179H161.186V22.2955H154.637ZM158.775 24V21.9716L158.783 21.4858V15.2727H160.032V24H158.775ZM165.62 24.1193C165.01 24.1193 164.47 24.0142 164.001 23.804C163.535 23.5937 163.17 23.304 162.906 22.9347C162.642 22.5653 162.511 22.1449 162.514 21.6733C162.511 21.304 162.586 20.9645 162.74 20.6548C162.896 20.3423 163.108 20.0824 163.375 19.875C163.642 19.6648 163.94 19.5312 164.27 19.4744V19.4233C163.835 19.3182 163.487 19.0852 163.225 18.7244C162.964 18.3636 162.835 17.9489 162.838 17.4801C162.835 17.0341 162.953 16.6364 163.191 16.2869C163.433 15.9347 163.764 15.6577 164.184 15.456C164.605 15.2543 165.083 15.1534 165.62 15.1534C166.152 15.1534 166.626 15.2557 167.044 15.4602C167.464 15.6619 167.795 15.9389 168.037 16.2912C168.278 16.6406 168.4 17.0369 168.403 17.4801C168.4 17.9489 168.267 18.3636 168.002 18.7244C167.738 19.0852 167.395 19.3182 166.971 19.4233V19.4744C167.298 19.5312 167.592 19.6648 167.853 19.875C168.118 20.0824 168.328 20.3423 168.484 20.6548C168.643 20.9645 168.724 21.304 168.727 21.6733C168.724 22.1449 168.591 22.5653 168.326 22.9347C168.062 23.304 167.696 23.5937 167.227 23.804C166.761 24.0142 166.225 24.1193 165.62 24.1193ZM165.62 23.0412C165.981 23.0412 166.294 22.9815 166.558 22.8622C166.822 22.7401 167.027 22.571 167.172 22.3551C167.316 22.1364 167.39 21.8807 167.393 21.5881C167.39 21.2841 167.311 21.0156 167.154 20.7827C167.001 20.5497 166.792 20.3665 166.528 20.233C166.264 20.0994 165.961 20.0327 165.62 20.0327C165.277 20.0327 164.971 20.0994 164.704 20.233C164.437 20.3665 164.227 20.5497 164.074 20.7827C163.92 21.0156 163.845 21.2841 163.848 21.5881C163.845 21.8807 163.914 22.1364 164.056 22.3551C164.201 22.571 164.407 22.7401 164.674 22.8622C164.941 22.9815 165.257 23.0412 165.62 23.0412ZM165.62 18.9801C165.91 18.9801 166.167 18.9219 166.392 18.8054C166.616 18.6889 166.792 18.527 166.92 18.3196C167.051 18.1122 167.118 17.8693 167.12 17.5909C167.118 17.3182 167.052 17.0795 166.924 16.875C166.799 16.6705 166.625 16.5128 166.4 16.402C166.176 16.2884 165.916 16.2315 165.62 16.2315C165.319 16.2315 165.055 16.2884 164.828 16.402C164.603 16.5128 164.429 16.6705 164.304 16.875C164.179 17.0795 164.118 17.3182 164.12 17.5909C164.118 17.8693 164.18 18.1122 164.308 18.3196C164.436 18.527 164.612 18.6889 164.836 18.8054C165.064 18.9219 165.325 18.9801 165.62 18.9801Z"
							fill="#0C1615"
						/>
						<path
							d="M101.057 56V47.2727H102.114V55.0625H106.17V56H101.057ZM109.597 56.1534C109.182 56.1534 108.805 56.0753 108.467 55.919C108.129 55.7599 107.861 55.5312 107.662 55.233C107.463 54.9318 107.364 54.5682 107.364 54.142C107.364 53.767 107.438 53.4631 107.585 53.2301C107.733 52.9943 107.93 52.8097 108.178 52.6761C108.425 52.5426 108.697 52.4432 108.996 52.3778C109.297 52.3097 109.599 52.2557 109.903 52.2159C110.301 52.1648 110.624 52.1264 110.871 52.1009C111.121 52.0724 111.303 52.0256 111.416 51.9602C111.533 51.8949 111.591 51.7812 111.591 51.6193V51.5852C111.591 51.1648 111.476 50.8381 111.246 50.6051C111.018 50.3722 110.673 50.2557 110.21 50.2557C109.73 50.2557 109.354 50.3608 109.081 50.571C108.808 50.7812 108.616 51.0057 108.506 51.2443L107.551 50.9034C107.722 50.5057 107.949 50.196 108.233 49.9744C108.52 49.75 108.832 49.5937 109.17 49.5057C109.511 49.4148 109.847 49.3693 110.176 49.3693C110.386 49.3693 110.628 49.3949 110.901 49.446C111.176 49.4943 111.442 49.5952 111.697 49.7486C111.956 49.902 112.17 50.1335 112.341 50.4432C112.511 50.7528 112.597 51.1676 112.597 51.6875V56H111.591V55.1136H111.54C111.472 55.2557 111.358 55.4077 111.199 55.5696C111.04 55.7315 110.828 55.8693 110.564 55.983C110.3 56.0966 109.977 56.1534 109.597 56.1534ZM109.75 55.25C110.148 55.25 110.483 55.1719 110.756 55.0156C111.031 54.8594 111.239 54.6577 111.378 54.4105C111.52 54.1634 111.591 53.9034 111.591 53.6307V52.7102C111.548 52.7614 111.455 52.8082 111.31 52.8509C111.168 52.8906 111.003 52.9261 110.815 52.9574C110.631 52.9858 110.45 53.0114 110.274 53.0341C110.101 53.054 109.96 53.071 109.852 53.0852C109.591 53.1193 109.347 53.1747 109.119 53.2514C108.895 53.3253 108.713 53.4375 108.574 53.5881C108.438 53.7358 108.369 53.9375 108.369 54.1932C108.369 54.5426 108.499 54.8068 108.757 54.9858C109.018 55.1619 109.349 55.25 109.75 55.25ZM119.069 50.9205L118.165 51.1761C118.108 51.0256 118.025 50.8793 117.914 50.7372C117.806 50.5923 117.658 50.473 117.471 50.3793C117.283 50.2855 117.043 50.2386 116.75 50.2386C116.35 50.2386 116.016 50.331 115.749 50.5156C115.485 50.6974 115.353 50.929 115.353 51.2102C115.353 51.4602 115.444 51.6577 115.625 51.8026C115.807 51.9474 116.091 52.0682 116.478 52.1648L117.449 52.4034C118.034 52.5455 118.471 52.7628 118.757 53.0554C119.044 53.3452 119.188 53.7187 119.188 54.1761C119.188 54.5511 119.08 54.8864 118.864 55.1818C118.651 55.4773 118.353 55.7102 117.969 55.8807C117.586 56.0511 117.14 56.1364 116.631 56.1364C115.963 56.1364 115.411 55.9915 114.973 55.7017C114.536 55.4119 114.259 54.9886 114.142 54.4318L115.097 54.1932C115.188 54.5455 115.36 54.8097 115.613 54.9858C115.868 55.1619 116.202 55.25 116.614 55.25C117.083 55.25 117.455 55.1506 117.73 54.9517C118.009 54.75 118.148 54.5085 118.148 54.2273C118.148 54 118.069 53.8097 117.909 53.6562C117.75 53.5 117.506 53.3835 117.176 53.3068L116.086 53.0511C115.486 52.9091 115.046 52.6889 114.765 52.3906C114.486 52.0895 114.347 51.7131 114.347 51.2614C114.347 50.892 114.451 50.5653 114.658 50.2812C114.868 49.9972 115.154 49.7741 115.515 49.6122C115.878 49.4503 116.29 49.3693 116.75 49.3693C117.398 49.3693 117.907 49.5114 118.276 49.7955C118.648 50.0795 118.912 50.4545 119.069 50.9205ZM123.548 49.4545V50.3068H120.156V49.4545H123.548ZM121.145 47.8864H122.151V54.125C122.151 54.4091 122.192 54.6222 122.274 54.7642C122.359 54.9034 122.467 54.9972 122.598 55.0455C122.732 55.0909 122.872 55.1136 123.02 55.1136C123.131 55.1136 123.222 55.108 123.293 55.0966C123.364 55.0824 123.42 55.071 123.463 55.0625L123.668 55.9659C123.599 55.9915 123.504 56.017 123.382 56.0426C123.26 56.071 123.105 56.0852 122.918 56.0852C122.634 56.0852 122.355 56.0241 122.082 55.902C121.813 55.7798 121.588 55.5938 121.409 55.3438C121.233 55.0938 121.145 54.7784 121.145 54.3977V47.8864ZM128.692 56L132.595 48.2784V48.2102H128.095V47.2727H133.686V48.2614L129.8 56H128.692ZM141.138 56.1364C140.593 56.1364 140.111 55.9986 139.694 55.723C139.276 55.4446 138.949 55.0526 138.713 54.5469C138.478 54.0384 138.36 53.4375 138.36 52.7443C138.36 52.0568 138.478 51.4602 138.713 50.9545C138.949 50.4489 139.277 50.0582 139.698 49.7827C140.118 49.5071 140.604 49.3693 141.155 49.3693C141.581 49.3693 141.918 49.4403 142.165 49.5824C142.415 49.7216 142.605 49.8807 142.736 50.0597C142.87 50.2358 142.973 50.3807 143.047 50.4943H143.132V47.2727H144.138V56H143.167V54.9943H143.047C142.973 55.1136 142.868 55.2642 142.732 55.446C142.596 55.625 142.401 55.7855 142.148 55.9276C141.895 56.0668 141.559 56.1364 141.138 56.1364ZM141.275 55.233C141.678 55.233 142.019 55.1278 142.297 54.9176C142.576 54.7045 142.787 54.4105 142.932 54.0355C143.077 53.6577 143.15 53.2216 143.15 52.7273C143.15 52.2386 143.078 51.8111 142.936 51.4446C142.794 51.0753 142.584 50.7884 142.306 50.5838C142.027 50.3764 141.684 50.2727 141.275 50.2727C140.848 50.2727 140.493 50.3821 140.209 50.6009C139.928 50.8168 139.716 51.1108 139.574 51.483C139.435 51.8523 139.365 52.267 139.365 52.7273C139.365 53.1932 139.436 53.6165 139.578 53.9972C139.723 54.375 139.936 54.6761 140.218 54.9006C140.502 55.1222 140.854 55.233 141.275 55.233ZM148.046 56.1534C147.631 56.1534 147.255 56.0753 146.917 55.919C146.578 55.7599 146.31 55.5312 146.111 55.233C145.912 54.9318 145.813 54.5682 145.813 54.142C145.813 53.767 145.887 53.4631 146.034 53.2301C146.182 52.9943 146.38 52.8097 146.627 52.6761C146.874 52.5426 147.147 52.4432 147.445 52.3778C147.746 52.3097 148.049 52.2557 148.353 52.2159C148.75 52.1648 149.073 52.1264 149.32 52.1009C149.57 52.0724 149.752 52.0256 149.865 51.9602C149.982 51.8949 150.04 51.7812 150.04 51.6193V51.5852C150.04 51.1648 149.925 50.8381 149.695 50.6051C149.468 50.3722 149.123 50.2557 148.659 50.2557C148.179 50.2557 147.803 50.3608 147.53 50.571C147.257 50.7812 147.066 51.0057 146.955 51.2443L146 50.9034C146.171 50.5057 146.398 50.196 146.682 49.9744C146.969 49.75 147.282 49.5937 147.62 49.5057C147.961 49.4148 148.296 49.3693 148.625 49.3693C148.836 49.3693 149.077 49.3949 149.35 49.446C149.625 49.4943 149.891 49.5952 150.147 49.7486C150.405 49.902 150.62 50.1335 150.79 50.4432C150.961 50.7528 151.046 51.1676 151.046 51.6875V56H150.04V55.1136H149.989C149.921 55.2557 149.807 55.4077 149.648 55.5696C149.489 55.7315 149.277 55.8693 149.013 55.983C148.749 56.0966 148.426 56.1534 148.046 56.1534ZM148.199 55.25C148.597 55.25 148.932 55.1719 149.205 55.0156C149.48 54.8594 149.688 54.6577 149.827 54.4105C149.969 54.1634 150.04 53.9034 150.04 53.6307V52.7102C149.998 52.7614 149.904 52.8082 149.759 52.8509C149.617 52.8906 149.452 52.9261 149.265 52.9574C149.08 52.9858 148.9 53.0114 148.723 53.0341C148.55 53.054 148.409 53.071 148.301 53.0852C148.04 53.1193 147.796 53.1747 147.569 53.2514C147.344 53.3253 147.162 53.4375 147.023 53.5881C146.887 53.7358 146.819 53.9375 146.819 54.1932C146.819 54.5426 146.948 54.8068 147.206 54.9858C147.468 55.1619 147.799 55.25 148.199 55.25ZM153.295 58.4545C153.124 58.4545 152.972 58.4403 152.839 58.4119C152.705 58.3864 152.613 58.3608 152.562 58.3352L152.817 57.4489C153.062 57.5114 153.278 57.5341 153.465 57.517C153.653 57.5 153.819 57.4162 153.964 57.2656C154.112 57.1179 154.246 56.8778 154.369 56.5455L154.556 56.0341L152.136 49.4545H153.227L155.033 54.6705H155.102L156.908 49.4545H157.999L155.221 56.9545C155.096 57.2926 154.941 57.5724 154.756 57.794C154.572 58.0185 154.357 58.1847 154.113 58.2926C153.871 58.4006 153.599 58.4545 153.295 58.4545ZM163.963 50.9205L163.06 51.1761C163.003 51.0256 162.919 50.8793 162.808 50.7372C162.7 50.5923 162.553 50.473 162.365 50.3793C162.178 50.2855 161.938 50.2386 161.645 50.2386C161.244 50.2386 160.911 50.331 160.643 50.5156C160.379 50.6974 160.247 50.929 160.247 51.2102C160.247 51.4602 160.338 51.6577 160.52 51.8026C160.702 51.9474 160.986 52.0682 161.372 52.1648L162.344 52.4034C162.929 52.5455 163.365 52.7628 163.652 53.0554C163.939 53.3452 164.082 53.7187 164.082 54.1761C164.082 54.5511 163.974 54.8864 163.759 55.1818C163.545 55.4773 163.247 55.7102 162.864 55.8807C162.48 56.0511 162.034 56.1364 161.526 56.1364C160.858 56.1364 160.305 55.9915 159.868 55.7017C159.43 55.4119 159.153 54.9886 159.037 54.4318L159.991 54.1932C160.082 54.5455 160.254 54.8097 160.507 54.9858C160.763 55.1619 161.097 55.25 161.509 55.25C161.977 55.25 162.349 55.1506 162.625 54.9517C162.903 54.75 163.043 54.5085 163.043 54.2273C163.043 54 162.963 53.8097 162.804 53.6562C162.645 53.5 162.401 53.3835 162.071 53.3068L160.98 53.0511C160.381 52.9091 159.94 52.6889 159.659 52.3906C159.381 52.0895 159.241 51.7131 159.241 51.2614C159.241 50.892 159.345 50.5653 159.553 50.2812C159.763 49.9972 160.048 49.7741 160.409 49.6122C160.773 49.4503 161.185 49.3693 161.645 49.3693C162.293 49.3693 162.801 49.5114 163.17 49.7955C163.543 50.0795 163.807 50.4545 163.963 50.9205Z"
							fill="#0C1615"
						/>
						<defs>
							<pattern
								id="pattern0"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									//xlink:href="#image0_1333_1831"
									transform="translate(-0.00119332) scale(0.00119332 0.00160256)"
								/>
							</pattern>
							<linearGradient
								id="paint0_linear_1333_1831"
								x1="737.219"
								y1="140.42"
								x2="779.717"
								y2="77.8005"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#ACFF00" />
								<stop offset="1" stop-color="#E0FF9D" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_1333_1831"
								x1="592.692"
								y1="114.402"
								x2="615.635"
								y2="352.701"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#ACFF00" />
								<stop offset="1" stop-color="#D4FF78" stop-opacity="0" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_1333_1831"
								x1="616.64"
								y1="428.369"
								x2="621.721"
								y2="481.235"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#ACFF00" />
								<stop offset="1" stop-color="#D4FF78" stop-opacity="0" />
							</linearGradient>
							<image id="image0_1333_1831" width="840" height="624" />
						</defs>
					</svg>
				</Flex>
			</GridItem>
		</Grid>
	);
};

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
