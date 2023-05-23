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
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';
import Target from '../public/Target.png';
import Gauge from '../public/Gauge.png';
import Instant from '../public/Instant.svg';
import EasyToUse from '../public/EasyToUse.svg';
import Accurate from '../public/Accurate.svg';
import DeviceMobile from '../public/DeviceMobile.png';

import Image from 'next/image';

export const BlockFour = ({ title }: { title: string }) => (
	<VStack paddingY={10} >
			<Tabs variant="unstyled"  >
				<TabList color={'grey'} width={"full"} justifyContent={'center'}>
					<Tab
						fontSize={{ xs: 'xs', md: 'xs' }}
						_selected={{ color: 'brand.100', borderColor: 'brand.100' }}
						_focus={{ outline: 'none' }}
					>
						Easy to use
					</Tab>
					<Tab
						fontSize={{ xs: 'xs', md: 'xs' }}
						_selected={{ color: 'brand.100', borderColor: 'brand.100' }}
					>
						Instant
					</Tab>
					<Tab
						fontSize={{ xs: 'xs', md: 'xs' }}
						_selected={{ color: 'brand.100', borderColor: 'brand.100' }}
					>
						Accurate
					</Tab>
				</TabList>
				<TabIndicator
					mt="-1.5px"
					height="2px"
					bg="brand.100"
					borderRadius="1px"
				/>
				<TabPanels width={"50%"}>
					<TabPanel>
						<VStack>
							<Box paddingY={5} width={"50%"}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
									An easy to use interface for investors familar with platforms
									such as robinhood or coinbase.
								</Text>
							</Box>
							<EasyToUse/>
						</VStack>
					</TabPanel>

					<TabPanel>
						<VStack>
							<Box  paddingY={5} width={"50%"}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
									The Xchange is real-time allowing you to react to market
									conditions in a near instance
								</Text>
							</Box>
							<Instant/>
						</VStack>
					</TabPanel>
					<TabPanel>
						<VStack>
							<Box paddingY={5} width={"50%"}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
								We source our price feeds from a combination of industry leading resale platforms such as StockX, Goat,  and Flight Club to name a few.
								</Text>
							</Box>
							<Box width={"50%"}><Accurate/></Box>
						</VStack>
					</TabPanel>
				</TabPanels>
			</Tabs>

	</VStack>
);

BlockFour.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
