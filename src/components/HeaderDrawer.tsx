import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  Input,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { XSauceIconButton } from "./XSauceIconButton";

export const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navColor = useColorModeValue("#0E0F0D", "#0E0F0D");
  const drawerBg = useColorModeValue("brand.900", "brand.200");

  return (
    <>
      <Button color="text" onClick={onOpen} backgroundColor={"inherit"}>
        <HamburgerIcon boxSize={5} color={"white"} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#0E0F0D"}>
          <DrawerCloseButton size={"lg"} color={"white"} />
          <DrawerHeader borderBottom={"1px solid"} borderColor={"brand.200"}>
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
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          </DrawerHeader>
          <DrawerBody>
            <VStack
              spacing={5}
              align="stretch"
              marginTop={10}
              alignItems="left"
              justifyContent="left"
              flex={1}
              color="white"
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              <a
                href="https://docs.xsauce.io/getting-started/introduction"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Button
                  display="flex"
                  variant={"link"}
                  fontSize={"lg"}
                  fontWeight={"normal"}
                  color={"white"}
                >
                  <Text>About</Text>
                </Button>
              </a>
              <a
                href="https://docs.xsauce.io/applications/how-it-works-the-alpha-simulator"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Button
                  display="flex"
                  variant={"link"}
                  fontSize={"lg"}
                  fontWeight={"normal"}
                  color={"white"}
                >
                  <Text>How it works</Text>
                </Button>
              </a>
              <Flex flexDirection={"column"}>
                <Link href="/">
                  <Button
                    whiteSpace={"nowrap"}
                    variant="link"
                    color={"white"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"left"}
                    alignItems="left"
                    disabled
                    fontWeight={"normal"}
                  >
                    <Text paddingX={1} textDecoration="line-through">
                      The Xchange{" "}
                    </Text>
                    <svg
                      width="54"
                      height="22"
                      viewBox="0 0 54 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.704 16L12.356 7.6H11.432L8.084 16H9.152L10.028 13.732H13.772L14.636 16H15.704ZM11.9 8.86L13.412 12.82H10.376L11.9 8.86ZM17.593 16V7.468H16.633V16H17.593ZM20.1817 16V12.448C20.1817 11.416 20.7817 10.708 21.8017 10.708C22.6417 10.708 23.1577 11.416 23.1577 12.448V16H24.1177V12.448C24.1177 11.416 24.7177 10.708 25.7257 10.708C26.5777 10.708 27.0937 11.416 27.0937 12.448V16H28.0537V12.196C28.0537 10.732 27.2617 9.856 25.9537 9.856C25.0297 9.856 24.2257 10.42 23.9977 11.14C23.7817 10.312 23.0017 9.856 22.0057 9.856C21.0817 9.856 20.4097 10.384 20.1817 11.116V9.952H19.2217V16H20.1817ZM32.3637 16.096C34.1637 16.096 35.4477 14.788 35.4477 12.976C35.4477 11.152 34.1637 9.856 32.3637 9.856C30.5757 9.856 29.2917 11.152 29.2917 12.976C29.2917 14.788 30.5757 16.096 32.3637 16.096ZM32.3637 15.232C31.1277 15.232 30.2757 14.296 30.2757 12.976C30.2757 11.656 31.1277 10.72 32.3637 10.72C33.6117 10.72 34.4637 11.656 34.4637 12.976C34.4637 14.296 33.6117 15.232 32.3637 15.232ZM38.724 16.096C40.056 16.096 40.944 15.4 40.944 14.32C40.944 11.548 37.404 13.168 37.404 11.536C37.404 11.008 37.872 10.672 38.58 10.672C39.132 10.672 39.888 10.936 39.972 11.704H40.908C40.836 10.588 39.936 9.856 38.604 9.856C37.332 9.856 36.468 10.528 36.468 11.548C36.468 14.164 39.984 12.544 39.984 14.344C39.984 14.836 39.48 15.256 38.724 15.256C37.848 15.256 37.32 14.836 37.236 14.056H36.312C36.408 15.316 37.32 16.096 38.724 16.096ZM42.8387 9.952H41.5787V10.804H42.8387V14.104C42.8387 15.28 43.5827 16 44.7347 16H45.6587V15.124H44.7707C44.1827 15.124 43.7987 14.728 43.7987 14.056V10.804H45.6587V9.952H43.7987V8.02H42.8387V9.952Z"
                        fill="white"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="53"
                        height="21"
                        rx="3.5"
                        stroke="url(#paint0_linear_2657_12800)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2657_12800"
                          x1="10.2"
                          y1="26.5"
                          x2="30.5744"
                          y2="-8.50695"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#2FFD76" />
                          <stop
                            offset="1"
                            stop-color="#2FFD76"
                            stop-opacity="0.07"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Button>
                </Link>
              </Flex>
              <a
                href="https://docs.xsauce.io/connect/socials"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Button
                  display="flex"
                  variant={"link"}
                  fontSize={"lg"}
                  fontWeight={"normal"}
                  color={"white"}
                >
                  {/* <ArrowBackIcon /> */}
                  <Text>Contact us</Text>
                </Button>
              </a>
            </VStack>
          </DrawerBody>
          <DrawerFooter borderTop={"1px solid"} borderColor={"brand.200"} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
