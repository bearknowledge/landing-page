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
import easyToUseImage from '../public/easyToUseImage.png';
import Image from 'next/image';

export const BlockFour = ({ title }: { title: string }) => (
	<VStack paddingY={10}>
		<Box width={'60%'}>
			<Tabs variant="unstyled">
				<TabList color={'grey'}>
					<Tab color={'brand.100'} fontSize={{ xs: 'xs', md: 'xs' }}>
						Easy to use
					</Tab>
					<Tab fontSize={{ xs: 'xs', md: 'xs' }}>Instant</Tab>
					<Tab fontSize={{ xs: 'xs', md: 'xs' }}>Dynamic</Tab>
				</TabList>
				<TabIndicator
					mt="-1.5px"
					height="2px"
					bg="brand.100"
					borderRadius="1px"
				/>
				<TabPanels>
					<TabPanel>
						<VStack>
							<Box width={'90%'} paddingY={5}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
								An easy to use interface for investors familar with platforms such as robinhood or coinbase.
								</Text>
							</Box>
							<Image src={easyToUseImage} style={{ borderRadius: 15 }} />
						</VStack>
					</TabPanel>
					<TabPanel>
						<VStack>
							<Box width={'90%'} paddingY={5}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
									Xsauce allows you to predict the price of the next drop. Use
									your knowledge of culture and earn money
								</Text>
							</Box>
							<Image src={easyToUseImage} style={{ borderRadius: 15 }} />
						</VStack>
					</TabPanel>
					<TabPanel>
						<VStack>
							<Box width={'90%'} paddingY={5}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
									Xsauce allows you to predict the price of the next drop. Use
									your knowledge of culture and earn money
								</Text>
							</Box>
							<Image src={easyToUseImage} style={{ borderRadius: 15 }} />
						</VStack>
					</TabPanel>
					<TabPanel>
						<VStack>
							<Box width={'90%'} paddingY={5}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
									Xsauce allows you to predict the price of the next drop. Use
									your knowledge of culture and earn money
								</Text>
							</Box>
							<Image src={easyToUseImage} style={{ borderRadius: 15 }} />
						</VStack>
					</TabPanel>
					<TabPanel>
						<VStack>
							<Box width={'90%'} paddingY={5}>
								<Text color={'white'} textAlign={'center'} fontWeight={400}>
									Xsauce allows you to predict the price of the next drop. Use
									your knowledge of culture and earn money
								</Text>
							</Box>
							<Image src={easyToUseImage} style={{ borderRadius: 15 }} />
						</VStack>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	</VStack>
);

BlockFour.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
