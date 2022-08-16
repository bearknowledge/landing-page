import { Flex, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => (
	<Flex
		direction="column"
		alignItems="center"
		justifyContent="flex-start"
		bg="brand.900"
		color="black"
		_dark={{
			bg: 'brand.200',
			color: 'white',
		}}
		transition="all 0.15s ease-out"
		{...props}
	/>
);
