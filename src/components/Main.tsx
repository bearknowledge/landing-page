import { Stack, StackProps } from '@chakra-ui/react';

export const Main = (props: StackProps) => (
	<Stack
		spacing="1.5rem"
		width="100%"
		maxWidth="100%"
		bgColor="#0E0F0D"
		pt="1rem"
		borderBottomWidth={"0px"}
		borderBottomColor={"#0E0F0D"}
		px={{ base: '0rem', md: '2rem', lg: '8rem' }} //-2rem since there is already a 2px padding in each block
		minHeight="fit-content"
		{...props}
	/>
);
