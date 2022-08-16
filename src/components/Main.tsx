import { Stack, StackProps } from '@chakra-ui/react';

export const Main = (props: StackProps) => (
	<Stack
		spacing="1.5rem"
		width="100%"
		maxWidth="100%"
		pt="1rem"
		px={{ md: '8rem' }}
		minHeight="fit-content"
		{...props}
	/>
);
