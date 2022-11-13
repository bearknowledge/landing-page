import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Show,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';

export const BlockTwo = ({ title }: { title: string }) => (
	<Grid px="2rem" width={'100%'} templateColumns="repeat(1, 1fr)">
		<GridItem
			border={'1px solid'}
			borderColor={'brand.200'}
			borderRadius={12}
			padding={12}
			bg={'brand.700'}
			colSpan={1}
			color={'black'}
		>
			<Stack>
				<ScrollAnimation animation="fade-up">
					<Heading
						fontWeight={'semibold'}
						fontSize="4xl"
						lineHeight={'base'}
						paddingY={3}
					>
						Know what moves culture?
						<Show above="sm">
							<br /> Put your knowledge to work.
						</Show>
					</Heading>
				</ScrollAnimation>

				<SimpleGrid columns={{ sm: 1, md: 3 }} spacing={5}>
					<Box height="fit-content" marginTop={12}>
						<Flex
							as={ScrollAnimation}
							minHeight={'158px'}
							alignItems={'center'}
						>
							<svg
								width="82"
								height="152"
								viewBox="0 0 82 152"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.001 128.981C10.001 128.336 10.5607 127.813 11.2511 127.813C11.9415 127.813 12.5012 128.336 12.5012 128.981V150.397C12.5012 151.042 11.9415 151.565 11.2511 151.565C10.5607 151.565 10.001 151.042 10.001 150.397V128.981Z"
									fill="#ACFF00"
								/>

								<path
									d="M0.10227 127.173C0.236174 128.007 1.07271 128.492 1.75627 128.989L2.87013 129.798V66.7652C2.87013 66.0484 3.35468 65.4249 4.04227 65.257L18.7515 61.6648L16.6467 60.3074L1.2206 63.542C0.509789 63.6911 2.6365e-10 64.3256 2.6365e-10 65.0612V125.406C-1.20947e-07 125.776 -1.14825e-07 126.536 0.10227 127.173Z"
									fill="black"
								/>
								<path
									d="M2.05028 128.584C1.95086 128.512 1.85444 128.444 1.76112 128.378C1.50362 128.196 1.26982 128.032 1.06237 127.84C0.792074 127.59 0.637931 127.355 0.595954 127.094C0.501014 126.502 0.5 125.782 0.5 125.406V65.0612C0.5 64.5577 0.848325 64.1309 1.32321 64.0314L16.5483 60.8389L17.5035 61.4549L3.92365 64.7713C3.00811 64.9949 2.37013 65.8222 2.37013 66.7652V128.817L2.05028 128.584Z"
									stroke="black"
								/>

								<path
									d="M10.001 42.724C10.001 42.0789 10.5607 41.5559 11.2511 41.5559C11.9415 41.5559 12.5012 42.0789 12.5012 42.724V64.1397C12.5012 64.7848 11.9415 65.3078 11.2511 65.3078C10.5607 65.3078 10.001 64.7848 10.001 64.1397V42.724Z"
									fill="#ACFF00"
								/>

								<path
									d="M2.5 66.2851C2.5 65.5596 2.99899 64.9322 3.69857 64.7781L18.1562 61.5932C19.1048 61.3842 20.0014 62.1165 20.0014 63.1001V126.382C20.0014 127.138 19.4607 127.782 18.7244 127.904L4.26675 130.292C3.34074 130.445 2.5 129.721 2.5 128.77V66.2851Z"
									fill="#868686"
								/>
								<path
									d="M2.75 66.2851C2.75 65.6747 3.16949 65.1506 3.75236 65.0222L18.21 61.8373C18.9985 61.6636 19.7514 62.272 19.7514 63.1001V126.382C19.7514 127.018 19.2969 127.556 18.6837 127.657L4.226 130.046C3.45612 130.173 2.75 129.571 2.75 128.77V66.2851Z"
									stroke="black"
									stroke-width="0.5"
								/>

								<path
									d="M72 87.4254C72 86.7803 72.5597 86.2573 73.2501 86.2573C73.9405 86.2573 74.5002 86.7803 74.5002 87.4254V108.841C74.5002 109.486 73.9405 110.009 73.2501 110.009C72.5597 110.009 72 109.486 72 108.841V87.4254Z"
									fill="#ACFF00"
								/>

								<path
									d="M62.1013 85.6173C62.2352 86.4517 63.0717 86.936 63.7553 87.4329L64.8691 88.2427V25.2095C64.8691 24.4927 65.3537 23.8692 66.0413 23.7013L80.7505 20.1092L78.6458 18.7517L63.2196 21.9863C62.5088 22.1354 61.999 22.7699 61.999 23.5055V83.8503C61.999 84.2205 61.999 84.98 62.1013 85.6173Z"
									fill="black"
								/>
								<path
									d="M64.0493 87.0285C63.9499 86.9562 63.8535 86.8882 63.7601 86.8224C63.5026 86.6408 63.2688 86.4759 63.0614 86.2843C62.7911 86.0347 62.637 85.7996 62.595 85.538C62.5 84.9464 62.499 84.2265 62.499 83.8503V23.5055C62.499 23.002 62.8473 22.5753 63.3222 22.4757L78.5474 19.2832L79.5025 19.8992L65.9227 23.2156C65.0071 23.4392 64.3691 24.2665 64.3691 25.2095V87.261L64.0493 87.0285Z"
									stroke="black"
								/>

								<path
									d="M72 1.16837C72 0.523232 72.5597 0.000244141 73.2501 0.000244141C73.9405 0.000244141 74.5002 0.523232 74.5002 1.16837V22.584C74.5002 23.2291 73.9405 23.7521 73.2501 23.7521C72.5597 23.7521 72 23.2291 72 22.584V1.16837Z"
									fill="#ACFF00"
								/>

								<path
									d="M64.499 24.7291C64.499 24.0037 64.998 23.3763 65.6976 23.2222L80.1553 20.0373C81.1038 19.8283 82.0004 20.5606 82.0004 21.5442V84.8257C82.0004 85.5816 81.4597 86.2261 80.7234 86.3478L66.2658 88.7365C65.3398 88.8894 64.499 88.1651 64.499 87.2144V24.7291Z"
									fill="#ACFF00"
								/>
								<path
									d="M64.749 24.7291C64.749 24.1188 65.1685 23.5947 65.7514 23.4663L80.209 20.2814C80.9975 20.1077 81.7504 20.7161 81.7504 21.5442V84.8257C81.7504 85.4617 81.2959 85.9998 80.6827 86.1011L66.225 88.4898C65.4551 88.617 64.749 88.0147 64.749 87.2144V24.7291Z"
									stroke="black"
									stroke-width="0.5"
								/>

								<path
									d="M41 107.152C41 106.507 41.5597 105.984 42.2501 105.984C42.9405 105.984 43.5002 106.507 43.5002 107.152V128.568C43.5002 129.213 42.9405 129.736 42.2501 129.736C41.5597 129.736 41 129.213 41 128.568V107.152Z"
									fill="#ACFF00"
								/>

								<path
									d="M31.1013 105.344C31.2352 106.178 32.0717 106.663 32.7553 107.16L33.8691 107.969V44.9363C33.8691 44.2195 34.3537 43.5961 35.0413 43.4281L49.7505 39.836L47.6458 38.4785L32.2196 41.7132C31.5088 41.8622 30.999 42.4967 30.999 43.2323V103.577C30.999 103.947 30.999 104.707 31.1013 105.344Z"
									fill="black"
								/>
								<path
									d="M33.0493 106.755C32.9499 106.683 32.8535 106.615 32.7601 106.549C32.5026 106.368 32.2688 106.203 32.0614 106.011C31.7911 105.762 31.637 105.526 31.595 105.265C31.5 104.673 31.499 103.953 31.499 103.577V43.2323C31.499 42.7288 31.8473 42.3021 32.3222 42.2025L47.5474 39.01L48.5025 39.626L34.9227 42.9424C34.0071 43.166 33.3691 43.9933 33.3691 44.9363V106.988L33.0493 106.755Z"
									stroke="black"
								/>

								<path
									d="M41 20.8952C41 20.25 41.5597 19.7271 42.2501 19.7271C42.9405 19.7271 43.5002 20.25 43.5002 20.8952V42.3108C43.5002 42.9559 42.9405 43.4789 42.2501 43.4789C41.5597 43.4789 41 42.9559 41 42.3108V20.8952Z"
									fill="#ACFF00"
								/>

								<path
									d="M33.499 44.456C33.499 43.7305 33.998 43.1031 34.6976 42.949L49.1553 39.7641C50.1038 39.5551 51.0004 40.2874 51.0004 41.271V104.553C51.0004 105.308 50.4597 105.953 49.7234 106.075L35.2658 108.463C34.3398 108.616 33.499 107.892 33.499 106.941V44.456Z"
									fill="#868686"
								/>
								<path
									d="M33.749 44.456C33.749 43.8456 34.1685 43.3215 34.7514 43.1931L49.209 40.0082C49.9975 39.8345 50.7504 40.4429 50.7504 41.271V104.553C50.7504 105.188 50.2959 105.727 49.6827 105.828L35.225 108.217C34.4551 108.344 33.749 107.742 33.749 106.941V44.456Z"
									stroke="black"
									stroke-width="0.5"
								/>

								<defs>
									<filter
										id="filter0_b_1129_3074"
										x="-69.999"
										y="47.8127"
										width="162.5"
										height="183.752"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter1_b_1129_3074"
										x="-80"
										y="-19.6926"
										width="178.752"
										height="229.491"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter2_b_1129_3074"
										x="-69.999"
										y="-38.4441"
										width="162.5"
										height="183.752"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter3_b_1129_3074"
										x="-77.5"
										y="-18.4426"
										width="177.501"
										height="228.755"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter4_b_1129_3074"
										x="-8"
										y="6.25732"
										width="162.5"
										height="183.752"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter5_b_1129_3074"
										x="-18.001"
										y="-61.2483"
										width="178.752"
										height="229.491"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter6_b_1129_3074"
										x="-8"
										y="-79.9998"
										width="162.5"
										height="183.752"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter7_b_1129_3074"
										x="-15.501"
										y="-59.9985"
										width="177.501"
										height="228.755"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter8_b_1129_3074"
										x="-39"
										y="25.9841"
										width="162.5"
										height="183.752"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter9_b_1129_3074"
										x="-49.001"
										y="-41.5215"
										width="178.752"
										height="229.491"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter10_b_1129_3074"
										x="-39"
										y="-60.2729"
										width="162.5"
										height="183.752"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
									<filter
										id="filter11_b_1129_3074"
										x="-46.501"
										y="-40.2717"
										width="177.501"
										height="228.755"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="40" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1129_3074"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1129_3074"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>
						</Flex>
						<ScrollAnimation animation="fade-up">
							<Heading fontWeight={'semibold'} paddingY={2} fontSize={24}>
							Invest in culture.
							</Heading>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Text>
							Make money on the things you truly understand.
							</Text>
						</ScrollAnimation>
					</Box>
					<Box height="fit-content" marginTop={12}>
						<Flex
							minHeight={'158px'}
							alignItems={'center'}
							//justifyContent={'center'}
							as={ScrollAnimation}
						>
							<svg
								width="83"
								height="84"
								viewBox="0 0 83 84"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M37.6445 82.9828V64.7894V42.9573H0.998859V60.7868C0.998859 65.2988 3.93051 69.9442 5.39634 71.7029C14.6311 81.6001 30.7429 83.3466 37.6445 82.9828Z"
									stroke="black"
									stroke-width="0.5"
								/>
								<path
									d="M37.6445 64.7968V42.9573H1.18027C4.80856 61.2953 27.062 65.1578 37.6445 64.7968Z"
									fill="#ACFF00"
									stroke="black"
									stroke-width="0.5"
								/>
								<path
									d="M77.9195 26.6958H78.1695V27.3601L77.7315 26.8606L77.9195 26.6958ZM77.9195 22.02H77.6695V21.77H77.9195V22.02ZM21.0769 22.02L21.2132 22.2296L21.151 22.27H21.0769V22.02ZM11.1586 22.02H10.9086V21.77H11.1586V22.02ZM11.1586 37.1814V37.4314H10.9086V37.1814H11.1586ZM11.1602 37.1814V36.9314H11.4135L11.4102 37.1846L11.1602 37.1814ZM11.1591 37.3619V37.6119H10.9091V37.3619H11.1591ZM46.8067 37.3619V37.1119H47.0567V37.3619H46.8067ZM46.8067 59.5625V59.8125H46.5567V59.5625H46.8067ZM82.2631 37.9033L82.0133 37.8937L82.0225 37.6533H82.2631V37.9033ZM82.2734 37.9033H82.5234V38.1533H82.2734V37.9033ZM82.2734 22.02V21.77H82.5234V22.02H82.2734ZM77.6695 26.6958V22.02H78.1695V26.6958H77.6695ZM46.8067 14.9114C60.2658 14.9114 72.0182 19.5861 78.1075 26.531L77.7315 26.8606C71.7657 20.0566 60.1716 15.4114 46.8067 15.4114V14.9114ZM20.9407 21.8104C27.4912 17.5536 36.6863 14.9114 46.8067 14.9114V15.4114C36.7668 15.4114 27.67 18.0337 21.2132 22.2296L20.9407 21.8104ZM11.1586 21.77H21.0769V22.27H11.1586V21.77ZM10.9086 37.1814V22.02H11.4086V37.1814H10.9086ZM11.1602 37.4314H11.1586V36.9314H11.1602V37.4314ZM10.9091 37.3619C10.9091 37.3006 10.9095 37.2393 10.9102 37.1782L11.4102 37.1846C11.4094 37.2436 11.4091 37.3027 11.4091 37.3619H10.9091ZM46.8067 37.6119H11.1591V37.1119H46.8067V37.6119ZM46.5567 59.5625V37.3619H47.0567V59.5625H46.5567ZM82.5129 37.9129C82.279 44.0319 78.1657 49.5116 71.7302 53.4502C65.2909 57.3911 56.495 59.8125 46.8067 59.8125V59.3125C56.4171 59.3125 65.1197 56.9097 71.4692 53.0237C77.8223 49.1355 81.788 43.7856 82.0133 37.8937L82.5129 37.9129ZM82.2734 38.1533H82.2631V37.6533H82.2734V38.1533ZM82.5234 37.3619V37.9033H82.0234V37.3619H82.5234ZM82.5234 22.02V37.3619H82.0234V22.02H82.5234ZM77.9195 21.77H82.2734V22.27H77.9195V21.77Z"
									fill="black"
								/>
								<path
									d="M46.7153 21.9505H46.9653V22.2005V44.1505C56.6454 44.1087 65.3911 41.6416 71.7256 37.6866C78.1181 33.6954 82.0225 28.2136 82.0225 22.2005C82.0225 16.1875 78.1181 10.7057 71.7256 6.71445C65.3366 2.72543 56.4948 0.25 46.7153 0.25C36.9357 0.25 28.0482 2.72546 21.6136 6.71486C15.2643 10.6513 11.3368 16.0368 11.229 21.9505H46.7153Z"
									fill="#1E231E"
									stroke="black"
									stroke-width="0.5"
								/>
								<path
									d="M46.8071 21.9505H47.0571V22.2005V44.1505C56.8126 44.1091 65.6264 41.6417 72.0101 37.6862C78.4521 33.6945 82.3857 28.2127 82.3857 22.2005C82.3857 16.1884 78.4521 10.7066 72.0101 6.7149C65.5719 2.7256 56.662 0.25 46.8071 0.25C36.9522 0.25 27.9963 2.72562 21.5121 6.71531C15.1137 10.6522 11.1566 16.0377 11.048 21.9505H46.8071Z"
									fill="#ACFF00"
									stroke="black"
									stroke-width="0.5"
								/>
							</svg>
						</Flex>
						<ScrollAnimation animation="fade-up">
							<Heading fontWeight={'semibold'} paddingY={2} fontSize={24}>
							Diversify your assets.
							</Heading>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Text>Balance your exposure across your portfolio.</Text>
						</ScrollAnimation>
					</Box>
					<Box height="fit-content" marginTop={12}>
						<Flex
							minHeight={'158px'}
							alignItems={'center'}
							//justifyContent={'center'}
							as={ScrollAnimation}
						>
							<svg
								width="82"
								height="92"
								viewBox="0 0 82 92"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M78.127 69C78.127 75.2297 73.9427 80.9116 67.088 85.0494C60.238 89.1844 50.7588 91.75 40.2749 91.75C29.7911 91.75 20.3119 89.1844 13.4619 85.0494C6.60715 80.9116 2.42285 75.2297 2.42285 69C2.42285 62.7703 6.60715 57.0884 13.4619 52.9506C20.3119 48.8156 29.7911 46.25 40.2749 46.25C50.7588 46.25 60.238 48.8156 67.088 52.9506C73.9427 57.0884 78.127 62.7703 78.127 69Z"
									fill="#ACFF00"
									stroke="#0C1615"
									stroke-width="0.5"
								/>
								<path
									d="M78.127 61.3333C78.127 67.563 73.9427 73.2449 67.088 77.3827C60.238 81.5176 50.7588 84.0832 40.2749 84.0832C29.7911 84.0832 20.3119 81.5176 13.4619 77.3827C6.60715 73.2449 2.42285 67.563 2.42285 61.3333C2.42285 55.1035 6.60715 49.4216 13.4619 45.2838C20.3119 41.1489 29.7911 38.5833 40.2749 38.5833C50.7588 38.5833 60.238 41.1489 67.088 45.2838C73.9427 49.4216 78.127 55.1035 78.127 61.3333Z"
									fill="#ACFF00"
									stroke="#0C1615"
									stroke-width="0.5"
								/>
								<path
									d="M75.9542 53.6667C75.9542 59.8965 71.7699 65.5784 64.9151 69.7162C58.0651 73.8511 48.5859 76.4167 38.1021 76.4167C27.6183 76.4167 18.139 73.8511 11.289 69.7162C4.4343 65.5784 0.25 59.8965 0.25 53.6667C0.25 47.437 4.4343 41.7551 11.289 37.6173C18.139 33.4824 27.6183 30.9167 38.1021 30.9167C48.5859 30.9167 58.0651 33.4824 64.9151 37.6173C71.7699 41.7551 75.9542 47.437 75.9542 53.6667Z"
									fill="#ACFF00"
									stroke="#0C1615"
									stroke-width="0.5"
								/>
								<path
									d="M78.127 46C78.127 52.2297 73.9427 57.9116 67.088 62.0494C60.238 66.1844 50.7588 68.75 40.2749 68.75C29.7911 68.75 20.3119 66.1844 13.4619 62.0494C6.60715 57.9116 2.42285 52.2297 2.42285 46C2.42285 39.7703 6.60715 34.0884 13.4619 29.9506C20.3119 25.8156 29.7911 23.25 40.2749 23.25C50.7588 23.25 60.238 25.8156 67.088 29.9506C73.9427 34.0884 78.127 39.7703 78.127 46Z"
									fill="#ACFF00"
									stroke="#0C1615"
									stroke-width="0.5"
								/>
								<path
									d="M81.7501 38.3333C81.7501 44.563 77.5658 50.2449 70.711 54.3827C63.861 58.5176 54.3818 61.0832 43.898 61.0832C33.4142 61.0832 23.9349 58.5176 17.0849 54.3827C10.2302 50.2449 6.0459 44.563 6.0459 38.3333C6.0459 32.1035 10.2302 26.4216 17.0849 22.2838C23.9349 18.1489 33.4142 15.5833 43.898 15.5833C54.3818 15.5833 63.861 18.1489 70.711 22.2838C77.5658 26.4216 81.7501 32.1035 81.7501 38.3333Z"
									fill="#ACFF00"
									stroke="#0C1615"
									stroke-width="0.5"
								/>
								<path
									d="M78.127 30.6667C78.127 36.8965 73.9427 42.5784 67.088 46.7162C60.238 50.8511 50.7588 53.4167 40.2749 53.4167C29.7911 53.4167 20.3119 50.8511 13.4619 46.7162C6.60715 42.5784 2.42285 36.8965 2.42285 30.6667C2.42285 24.437 6.60715 18.7551 13.4619 14.6173C20.3119 10.4824 29.7911 7.91675 40.2749 7.91675C50.7588 7.91675 60.238 10.4824 67.088 14.6173C73.9427 18.7551 78.127 24.437 78.127 30.6667Z"
									fill="#ACFF00"
									stroke="#0C1615"
									stroke-width="0.5"
								/>
								<path
									d="M78.128 23C78.128 29.2297 73.9437 34.9116 67.089 39.0494C60.239 43.1844 50.7597 45.75 40.2759 45.75C29.7921 45.75 20.3129 43.1844 13.4629 39.0494C6.60813 34.9116 2.42383 29.2297 2.42383 23C2.42383 16.7703 6.60813 11.0884 13.4629 6.95057C20.3129 2.81563 29.7921 0.25 40.2759 0.25C50.7597 0.25 60.239 2.81563 67.089 6.95057C73.9437 11.0884 78.128 16.7703 78.128 23Z"
									fill="#ACFF00"
									stroke="#0C1615"
									stroke-width="0.5"
								/>
								<g clip-path="url(#clip0_1129_3108)">
									<path
										d="M44.4544 20.6612L52.3226 24.326C53.9905 25.1052 54.479 26.6589 52.7767 26.9763L49.5715 27.574C49.0664 27.6682 48.5055 27.5879 48.0138 27.3417L41.9133 24.329C41.6128 24.181 41.2574 24.2473 41.1214 24.4766L38.3359 29.1462C38.1141 29.5191 37.7085 29.7796 37.2034 29.8738L33.9484 30.4808C32.2585 30.7959 30.6508 29.1958 31.4185 27.9562L34.8495 22.4011C35.0702 22.0412 34.8533 21.5589 34.3745 21.3422L27.6786 18.2939C25.9846 17.5323 26.0301 15.5794 27.7449 15.2597L30.6882 14.7109C31.1808 14.619 31.7267 14.6957 32.2044 14.9254L38.1904 17.7682L44.4544 20.6612Z"
										fill="#0C1615"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M39.9198 15.0803L46.9768 13.7645C47.7941 15.6394 46.8483 17.4605 44.8654 17.8303C42.8824 18.2 40.6105 16.9788 39.7932 15.1039L39.7995 15.1028C39.2128 13.7567 39.5728 12.9999 40.0244 12.0507C40.3739 11.3161 40.7782 10.4664 40.8409 9.13916C40.8511 8.946 41.1229 8.88895 41.2873 9.04955C42.4072 10.1212 43.4079 10.6806 44.272 11.1636C45.4343 11.8133 46.3493 12.3248 46.9743 13.7586L39.9198 15.0803Z"
										fill="#0C1615"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1129_3108">
										<rect
											width="22.5438"
											height="20.3886"
											fill="white"
											transform="matrix(0.983056 -0.183304 0.399593 0.916692 23.9082 12.1499)"
										/>
									</clipPath>
								</defs>
							</svg>
						</Flex>
						<ScrollAnimation animation="fade-up">
							<Heading fontWeight={'semibold'} paddingY={2} fontSize={24}>
								Earn Your Respect.
							</Heading>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Text>
								Claim your spot on the leaderboard. Be known for having an eye for culture.
							</Text>
						</ScrollAnimation>
					</Box>
				</SimpleGrid>
			</Stack>
		</GridItem>
	</Grid>
);

BlockTwo.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
