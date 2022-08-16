import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	FlexProps,
	Input,
	Text,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const HeaderDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button color="text" onClick={onOpen}>
				<HamburgerIcon boxSize={5} />
			</Button>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />

					<DrawerBody>
						<VStack
							spacing={4}
							align="stretch"
							marginTop={10}
							alignItems="center"
							justifyContent="center"
							flex={1}
							color="colors.gray.500"
							fontSize={'xl'}
						>
							<a
								href="https://docs.xsauce.io/getting-started/introduction"
								target={'_blank'}
								rel={'noreferrer'}
							>
								<Button
									display="flex"
									justifyContent={'center'}
									alignItems="center"
									variant={'link'}
									fontWeight={400}
									fontSize={'xl'}
									color={'colors.black'}
								>
									<Text>About</Text>
								</Button>
							</a>
							<Divider borderColor="gray.200" />
							<a
								href="https://docs.xsauce.io/applications/prediction-markets-v.0-beta"
								target={'_blank'}
								rel={'noreferrer'}
							>
								<Button
									display="flex"
									justifyContent={'center'}
									alignItems="center"
									variant={'link'}
									fontWeight={400}
									fontSize={'xl'}
									color={'colors.black'}
								>
									<Text>How it works</Text>
								</Button>
							</a>
							<Divider borderColor="gray.200" />
							<Flex flexDirection={'column'}>
								<Link href="/">
									<Button
										whiteSpace={'nowrap'}
										variant="link"
										fontWeight={400}
										color={'black'}
										display={'flex'}
										flexDirection={'row'}
										disabled
									>
										<Text paddingX={1}>The Xchange </Text>
										<svg
											width="43"
											height="22"
											viewBox="0 0 43 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												width="43"
												height="22"
												rx="11"
												fill="#ACFF00"
												fill-opacity="0.2"
											/>
											<path
												d="M9.3631 15V6.27273H12.5591C13.1784 6.27273 13.6912 6.375 14.0975 6.57955C14.5037 6.78125 14.8077 7.0554 15.0094 7.40199C15.2111 7.74574 15.312 8.13352 15.312 8.56534C15.312 8.92898 15.2452 9.2358 15.1117 9.4858C14.9782 9.73295 14.7992 9.93182 14.5748 10.0824C14.3532 10.2301 14.1088 10.3381 13.8418 10.4062V10.4915C14.1316 10.5057 14.4142 10.5994 14.6898 10.7727C14.9682 10.9432 15.1983 11.1861 15.3801 11.5014C15.562 11.8168 15.6529 12.2003 15.6529 12.652C15.6529 13.098 15.5478 13.4986 15.3375 13.8537C15.1301 14.206 14.8091 14.4858 14.3745 14.6932C13.9398 14.8977 13.3844 15 12.7083 15H9.3631ZM10.6799 13.8707H12.5804C13.2111 13.8707 13.6628 13.7486 13.9355 13.5043C14.2083 13.2599 14.3446 12.9545 14.3446 12.5881C14.3446 12.3125 14.275 12.0597 14.1358 11.8295C13.9966 11.5994 13.7978 11.4162 13.5392 11.2798C13.2836 11.1435 12.9796 11.0753 12.6273 11.0753H10.6799V13.8707ZM10.6799 10.0483H12.4441C12.7395 10.0483 13.0051 9.99148 13.2409 9.87784C13.4796 9.7642 13.6685 9.60511 13.8077 9.40057C13.9498 9.19318 14.0208 8.94886 14.0208 8.66761C14.0208 8.30682 13.8944 8.00426 13.6415 7.75994C13.3887 7.51562 13.0009 7.39347 12.4782 7.39347H10.6799V10.0483ZM19.9334 15.1321C19.2885 15.1321 18.7331 14.9943 18.2672 14.7188C17.8042 14.4403 17.4462 14.0497 17.1934 13.5469C16.9434 13.0412 16.8184 12.4489 16.8184 11.7699C16.8184 11.0994 16.9434 10.5085 17.1934 9.99716C17.4462 9.4858 17.7985 9.08665 18.2502 8.79972C18.7047 8.51278 19.236 8.36932 19.8439 8.36932C20.2132 8.36932 20.5712 8.4304 20.9178 8.55256C21.2644 8.67472 21.5755 8.86648 21.851 9.12784C22.1266 9.3892 22.3439 9.72869 22.503 10.1463C22.6621 10.5611 22.7417 11.0653 22.7417 11.6591V12.1108H17.5385V11.1562H21.4931C21.4931 10.821 21.4249 10.5241 21.2885 10.2656C21.1522 10.0043 20.9604 9.7983 20.7132 9.64773C20.4689 9.49716 20.182 9.42188 19.8525 9.42188C19.4945 9.42188 19.182 9.50994 18.915 9.68608C18.6507 9.85937 18.4462 10.0866 18.3013 10.3679C18.1593 10.6463 18.0882 10.9489 18.0882 11.2756V12.0213C18.0882 12.4588 18.165 12.831 18.3184 13.1378C18.4746 13.4446 18.6919 13.679 18.9703 13.8409C19.2488 14 19.574 14.0795 19.9462 14.0795C20.1877 14.0795 20.4078 14.0455 20.6067 13.9773C20.8056 13.9062 20.9775 13.8011 21.1223 13.6619C21.2672 13.5227 21.378 13.3509 21.4547 13.1463L22.6607 13.3636C22.5641 13.7187 22.3908 14.0298 22.1408 14.2969C21.8936 14.5611 21.5826 14.767 21.2076 14.9148C20.8354 15.0597 20.4107 15.1321 19.9334 15.1321ZM27.2108 8.45455V9.47727H23.6355V8.45455H27.2108ZM24.5943 6.88636H25.8684V13.0781C25.8684 13.3253 25.9054 13.5114 25.9792 13.6364C26.0531 13.7585 26.1483 13.8423 26.2647 13.8878C26.3841 13.9304 26.5133 13.9517 26.6525 13.9517C26.7548 13.9517 26.8443 13.9446 26.921 13.9304C26.9977 13.9162 27.0574 13.9048 27.1 13.8963L27.3301 14.9489C27.2562 14.9773 27.1511 15.0057 27.0147 15.0341C26.8784 15.0653 26.7079 15.0824 26.5034 15.0852C26.1681 15.0909 25.8556 15.0312 25.5659 14.9062C25.2761 14.7812 25.0417 14.5881 24.8627 14.3267C24.6838 14.0653 24.5943 13.7372 24.5943 13.3423V6.88636ZM30.525 15.1449C30.1103 15.1449 29.7353 15.0682 29.4 14.9148C29.0648 14.7585 28.7992 14.5327 28.6032 14.2372C28.41 13.9418 28.3134 13.5795 28.3134 13.1506C28.3134 12.7812 28.3844 12.4773 28.5265 12.2386C28.6685 12 28.8603 11.8111 29.1017 11.6719C29.3432 11.5327 29.6131 11.4276 29.9114 11.3565C30.2097 11.2855 30.5137 11.2315 30.8233 11.1946C31.2154 11.1491 31.5336 11.1122 31.7779 11.0838C32.0222 11.0526 32.1998 11.0028 32.3105 10.9347C32.4213 10.8665 32.4767 10.7557 32.4767 10.6023V10.5724C32.4767 10.2003 32.3716 9.91193 32.1614 9.70739C31.954 9.50284 31.6444 9.40057 31.2324 9.40057C30.8034 9.40057 30.4654 9.49574 30.2182 9.68608C29.9739 9.87358 29.8049 10.0824 29.7111 10.3125L28.5137 10.0398C28.6557 9.64205 28.8631 9.32102 29.1358 9.0767C29.4114 8.82955 29.7282 8.65057 30.0861 8.53977C30.4441 8.42614 30.8205 8.36932 31.2154 8.36932C31.4767 8.36932 31.7537 8.40057 32.0463 8.46307C32.3418 8.52273 32.6174 8.63352 32.873 8.79545C33.1316 8.95739 33.3432 9.18892 33.508 9.49006C33.6728 9.78835 33.7551 10.1761 33.7551 10.6534V15H32.5108V14.1051H32.4597C32.3773 14.2699 32.2537 14.4318 32.089 14.5909C31.9242 14.75 31.7125 14.8821 31.454 14.9872C31.1955 15.0923 30.8858 15.1449 30.525 15.1449ZM30.802 14.1222C31.1543 14.1222 31.4554 14.0526 31.7054 13.9134C31.9583 13.7741 32.15 13.5923 32.2807 13.3679C32.4142 13.1406 32.481 12.8977 32.481 12.6392V11.7955C32.4355 11.8409 32.3475 11.8835 32.2168 11.9233C32.089 11.9602 31.9426 11.9929 31.7779 12.0213C31.6131 12.0469 31.4526 12.071 31.2963 12.0938C31.1401 12.1136 31.0094 12.1307 30.9043 12.1449C30.6571 12.1761 30.4313 12.2287 30.2267 12.3026C30.025 12.3764 29.8631 12.483 29.7409 12.6222C29.6216 12.7585 29.562 12.9403 29.562 13.1676C29.562 13.483 29.6784 13.7216 29.9114 13.8835C30.1444 14.0426 30.4412 14.1222 30.802 14.1222Z"
												fill="#ACFF00"
											/>
										</svg>
									</Button>
								</Link>
								<Text fontSize={'10px'} alignSelf={'center'}>
									- Coming Soon -
								</Text>
							</Flex>
							<Divider borderColor="gray.200" />
							<a
								href="https://docs.xsauce.io/connect/socials"
								target={'_blank'}
								rel={'noreferrer'}
							>
								<Button
									display="flex"
									justifyContent={'center'}
									alignItems="center"
									variant={'link'}
									fontWeight={400}
									fontSize={'xl'}
									color={'colors.black'}
								>
									{/* <ArrowBackIcon /> */}
									<Text>Contact us</Text>
								</Button>
							</a>
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
