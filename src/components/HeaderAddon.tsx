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
		justifyContent="center"
		alignItems="center"
		height="24px"
		color={'brand.700'}
		flexDirection={'row'}
		width={'100%'}
		backgroundColor={'brand.200'}
		paddingX={{ xs: 2, sm: 4, md: 10 }}
		fontSize={'sm'}
	>
		<Hide above="md">
			<Box
				whiteSpace={'nowrap'}
				justifyContent={'center'}
				alignItems="center"
				overflow={'hidden'}
				textAlign={'left'}
				width={'100%'}
				fontSize={{ xs: 'xs', sm: 'sm' }}
			>
				<Text>
					Our product is currently in Beta.&nbsp;
					<Button
						variant={'link'}
						fontWeight={400}
						color={'brand.1000'}
						display={'inline'}
						fontSize={{ xs: 'xs', sm: 'sm' }}
						sx={{ textDecoration: 'underline' }}
					>
						Be careful while using it.
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
