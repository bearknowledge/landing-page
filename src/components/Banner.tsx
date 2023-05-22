import { Box, css } from '@chakra-ui/react';

export function Banner() {
  const moveBannerKeyframes = css`
    @keyframes moveBanner {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <Box
      width="100%"
      height="100px"
      backgroundColor="blue.500"
          position="relative"

      overflow="hidden"

    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        backgroundColor="green.500"
        animation={`${moveBannerKeyframes} 10s linear infinite`}
      />
    </Box>
  );
}