import {
	background,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Show,
	Spacer,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { DarkModeSwitch } from './DarkModeSwitch';
import { HeaderDrawer } from './HeaderDrawer';
import { FiGlobe } from 'react-icons/fi';

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
		<Show above="md">
			<Box
				whiteSpace={'nowrap'}
				justifyContent={'center'}
				alignItems="center"
				overflow={'ellipsis'}
				width={'70%'}
				textOverflow={'ellipsis'}
			>
				<Text textOverflow={'ellipsis'}>
					Our product is currently in Beta. It’s functional but we advise you to
					be careful while using it.
				</Text>
			</Box>
		</Show>

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
	</Flex>
);

HeaderAddon.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
