import { Stack, StackProps } from '@chakra-ui/react';

export const Main = (props: StackProps) => (
	<Stack
		spacing="1.5rem"
		width="100%"
		maxWidth="100%"
		pt="1rem"
		px="1rem"
		height={'100rem'}
		minHeight="fit-content"
		{...props}
	/>
);
