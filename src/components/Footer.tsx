import {
	Flex,
	FlexProps,
	Grid,
	GridItem,
	HStack,
	IconButton,
	Spacer,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaRegHandPeace, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = (props: FlexProps) => {

	return (
		<Flex
			as="footer"
			width={'100%'}
			px="2rem"
			paddingBottom={"1.5rem"} //match the default spacing of main component
		>
			<Text alignSelf={'center'} fontSize={'xs'} color={'brand.300'}>
				© Xsauce inc 2023
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
					href="https://www.instagram.com/xsauce_io/"
					target={'_blank'}
					rel={'noreferrer'}
				>
					<IconButton
						color={'white'}
						bg={'none'}
						aria-label="Hand Peace"
						icon={<FaInstagram />}
					/>
				</a>
				<a
					href="https://www.linkedin.com/company/xsauce/"
					target={'_blank'}
					rel={'noreferrer'}
				>
					<IconButton
						color={'white'}
						bg={'none'}
						aria-label="Hand Peace"
						icon={<FaLinkedin />}
					/>
				</a>
			</HStack>
		</Flex>
	);
};
