import {
	background,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Hide,
	HStack,
	Show,
	Spacer,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { DarkModeSwitch } from './DarkModeSwitch';
import { HeaderDrawer } from './HeaderDrawer';
import { FiGlobe } from 'react-icons/fi';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const HeaderAddon = ({ title }: { title: string }) => (
	<Flex
		justifyContent="left"
		alignItems="center"
		height="24px"
		color={'brand.400'}
		flexDirection={'row'}
		width={'100%'}
		backgroundColor={'brand.200'}
		paddingX={{ sm: 4, md: 10 }}
		fontSize={'sm'}
	>
		<Hide above="md">
			<Box
				whiteSpace={'nowrap'}
				justifyContent={'center'}
				alignItems="center"
				overflow={'hidden'}
				width={'100%'}
			>
				<Text>
					Our product is currently in Beta.&nbsp;
					<Button
						variant={'link'}
						fontWeight={400}
						color={'white'}
						display={'inline'}
						fontSize={'sm'}
						sx={{ textDecoration: 'underline' }}
					>
						Be careful while using it. &nbsp;
						<ArrowForwardIcon />
					</Button>
				</Text>
			</Box>
		</Hide>

		<Show above="md">
			<Box
				whiteSpace={'nowrap'}
				justifyContent={'center'}
				alignItems="center"
				overflow={'hidden'}
				width={'70%'}
			>
				<Text>
					Our product is currently in Beta. It’s functional but we advise you to
					be careful while using it.
				</Text>
			</Box>
			<Spacer />
			<HStack spacing={5}>
				<Link href="/">
					<Box
						whiteSpace={'nowrap'}
						justifyContent={'center'}
						alignItems="center"
						//variant={'link'} TODO: turn this into button
						fontSize={'sm'}
						color={'white'}
						fontWeight={400}
					>
						<Text>Beta</Text>
					</Box>
				</Link>

				<Link href="/">
					<Box
						whiteSpace={'nowrap'}
						justifyContent={'center'}
						alignItems="center"
						display={'Flex'}
					>
						{/* <ArrowBackIcon /> */}
						<FiGlobe />
						<Text ml={1}>Change Language</Text>
					</Box>
				</Link>
			</HStack>
		</Show>
	</Flex>
);

HeaderAddon.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
