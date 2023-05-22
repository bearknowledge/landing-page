import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export const XSauceIconButton = () => {
	return (
		<Link href="/">
			<IconButton
				position={'absolute'}
				left={{ base: '1rem', md: '3rem', lg: '9rem' }}
				aria-label="Xsauce Icon Button"
				colorScheme="brand.100"
				onClick={null}
			>
				<svg
					width="66"
					height="65"
					viewBox="0 0 66 65"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d_3201_12786)">
						<path
							d="M41.0962 34.9027L51.5625 44.4253C53.7795 46.4482 53.4644 49.5001 50.3921 49.5001H44.6074C43.6959 49.5001 42.818 49.1571 42.1766 48.5301L34.1861 40.8292C33.7922 40.4507 33.1508 40.4507 32.7569 40.8292L24.7102 48.5301C24.0687 49.1453 23.2021 49.4883 22.2905 49.4883H16.4159C13.366 49.4883 11.8467 45.9632 14.03 43.9285L23.7986 34.8081C24.4288 34.2166 24.4176 33.2466 23.7761 32.6788L14.8178 24.7058C12.5445 22.7066 14.0413 19.0986 17.1362 19.0986H22.4481C23.3372 19.0986 24.1925 19.4299 24.8227 20.0213L32.7456 27.3674L41.0962 34.9027Z"
							fill="#2FFD76"
						/>
						<path
							d="M51 23C51 26.8646 47.8647 30 44.0001 30C40.1355 30 37.0001 26.8646 37.0001 23"
							fill="#2FFD76"
						/>
						<path
							d="M37 23C37 17.763 40.9166 17.4138 43.5682 11.2975C43.7385 10.9096 44.2737 10.8966 44.444 11.2846C47.205 17.375 51 17.5173 51 23"
							fill="#2FFD76"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_3201_12786"
							x="0"
							y="0"
							width="66"
							height="64.5"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="2" />
							<feGaussianBlur stdDeviation="6.5" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.184314 0 0 0 0 0.992157 0 0 0 0 0.462745 0 0 0 0.63 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_3201_12786"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_3201_12786"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</IconButton>
		</Link>
	);
};
