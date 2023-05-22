import { Search2Icon, SearchIcon } from '@chakra-ui/icons';
import {
	background,
	border,
	Box,
	Button,
	Divider,
	Flex,
	FlexProps,
	Grid,
	GridItem,
	HStack,
	IconButton,
	Spacer,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaRegHandPeace, FaTwitter, FaGithub } from 'react-icons/fa';

export const Footer = (props: FlexProps) => {

	return (
		<Flex
			as="footer"
			width={'100%'}
			paddingBottom={"1.5rem"} //match the default spacing of main component
		>
			<Text alignSelf={'center'} fontSize={'xs'} color={'brand.300'}>
				© Xsauce ltd 2023
			</Text>
			<Spacer />
			<HStack spacing={0}>
				<a
					href="https://twitter.com/xsauce_io"
					target={'_blank'}
					rel={'noreferrer'}
				>
					<IconButton
						color={'white'}
						bg={'none'}
						aria-label="Twitter icon"
						icon={<FaTwitter />}
					/>
				</a>
				<a
					href="https://github.com/xsauce-io"
					target={'_blank'}
					rel={'noreferrer'}
				>
					<IconButton
						color={'white'}
						bg={'none'}
						aria-label="Twitter Icon"
						icon={<FaGithub />}
					/>
				</a>
				<a
					href="https://angel.co/company/xsauced-1"
					target={'_blank'}
					rel={'noreferrer'}
				>
					<IconButton
						color={'white'}
						bg={'none'}
						aria-label="Hand Peace"
						icon={<FaRegHandPeace />}
					/>
				</a>
			</HStack>
		</Flex>
	);
};
