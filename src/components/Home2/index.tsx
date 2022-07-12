import React, { useState } from 'react'
import { Col, Row, Section } from 'sezy-design'

import _ from 'lodash';
import S from './styled';
import '~css/default';
import '~css/fonts';
import '~css/variables';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";

const Home2 = () => {
    const control = useAnimation();
    const [ref, inView] = useInView()
    const [isMenuOpened, setMenuOpened] = useState(false);
    const variants: Variants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };

    const section3SlideSetting = {
        dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
    };

    const variants1 = _.cloneDeep(variants);
    variants1.onscreen.transition.delay = 0.3;

    const variants2 = _.cloneDeep(variants);
    variants2.onscreen.transition.delay = 0.6;

    const variants3 = _.cloneDeep(variants);
    variants3.onscreen.transition.delay = 0.9;

    const variants4 = _.cloneDeep(variants);
    variants4.onscreen.transition.delay = 1.2;

    return (
        <>
            <S.HeaderSection>
                <S.Logo src="/images/logo.png" />
                <S.Menu>
                    <a href="">Docs</a>
                    <a href="">Community</a>
                    <a href="">Tokens</a>
                    <a href="">News & Tutorial</a>
                    <a href="">Contact</a>
                    <a href=""><button>CONNECT WALLET</button></a>
                </S.Menu>
                <S.Navigation onClick={() => setMenuOpened(!isMenuOpened)}>
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 6.44772 0.447715 6 1 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H1C0.447715 8 0 7.55228 0 7Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 12.4477 0.447715 12 1 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H1C0.447715 14 0 13.5523 0 13Z" fill="white" />
                    </svg>
                    { 
                        isMenuOpened && (
                            <S.NavigationMenu>
                                <div onClick={() => setMenuOpened(false)}/>
                                <div>
                                    <div>COINMAP DEX</div>
                                    <S.NavigationMenuItem>DOCS</S.NavigationMenuItem>
                                    <S.NavigationMenuItem>CUMMUNITY</S.NavigationMenuItem>
                                    <S.NavigationMenuItem>TOKENS</S.NavigationMenuItem>
                                    <S.NavigationMenuItem>NEW & TUTORIAL</S.NavigationMenuItem>
                                    <S.NavigationMenuItem>CONTRACT</S.NavigationMenuItem>
                                    <button>CONNECT WALLET</button>
                                    <button>LAUNCH APP</button>
                                </div>
                            </S.NavigationMenu>
                        )
                    }
                </S.Navigation>
            </S.HeaderSection>
            <S.Section1>
                <Row>
                    <S.Section1Col1 grid={10} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants}>COINMAP</motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants1}>Specialized in data analysis</motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants2}>Coinmap is a trading ecosystem specifically designed for traders. Coinmap applies blockchain technology and AI learning to provide the most modern tools and indicators.</motion.div>
                        <div>
                            <motion.button initial="offscreen" whileInView="onscreen" variants={variants3}>CONNECT WALLET</motion.button>
                            <motion.button initial="offscreen" whileInView="onscreen" variants={variants3}>LAUNCH APP</motion.button>
                        </div>
                    </S.Section1Col1>
                    <S.Section1Col2 grid={14} gutter={{ xs: 24 }}>
                        <motion.img initial="offscreen" whileInView="onscreen" variants={variants2} src='/images/home_bg1.png' />
                    </S.Section1Col2>
                </Row>
            </S.Section1>
            <S.Section2>
                <Row>
                    <S.Section2Col1 grid={12} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants} >
                            <S.Section2Donut>
                                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M200 2.20007C183.817 2.35007 167.7 4.43341 152.017 8.45007L157.75 30.7667C171.283 27.4001 185.433 25.6001 200 25.6001V2.20007Z" fill="#32395A" />
                                    <path d="M200 0V2.2C200.583 2.2 201.167 2.16667 201.75 2.16667V25.6333C297.25 26.5833 374.383 104.267 374.383 200C374.383 296.317 296.317 374.383 200 374.383C103.683 374.383 25.6167 296.317 25.6167 200C25.6167 118.667 81.3 50.3333 156.617 31.05L150.267 6.28333C61.8333 28.9833 0 108.7 0 200C0 310.45 89.55 400 200 400C310.45 400 400 310.45 400 200C400 89.55 310.45 0 200 0Z" fill="url(#paint0_linear_13_17282)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_13_17282" x1="30.5556" y1="221.622" x2="400.02" y2="222.335" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#01C3FE" />
                                            <stop offset="0.994212" stop-color="#45FAC5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div><a>96</a><span>%</span></div>
                            </S.Section2Donut>
                        </motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants1} >
                            Coinmap allows users to achieve an overview of On-chain, candlestick charts, and automated trading tools.
                        </motion.div>
                    </S.Section2Col1>
                    <S.Section2Col2 grid={12} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants2} >
                            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.08602 18.3997 7.96793 18.989 8.93853 19.391C9.90914 19.7931 10.9494 20 12 20H18C19.1046 20 20 20.8954 20 22C20 23.1046 19.1046 24 18 24H12C10.4241 24 8.86371 23.6896 7.4078 23.0866C5.95189 22.4835 4.62902 21.5996 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0H18C19.1046 0 20 0.89543 20 2C20 3.10457 19.1046 4 18 4H12ZM28 2C28 0.89543 28.8954 0 30 0H36C37.5759 0 39.1363 0.310389 40.5922 0.913446C42.0481 1.5165 43.371 2.40042 44.4853 3.51472C45.5996 4.62902 46.4835 5.95189 47.0866 7.4078C47.6896 8.86371 48 10.4241 48 12C48 13.5759 47.6896 15.1363 47.0866 16.5922C46.4835 18.0481 45.5996 19.371 44.4853 20.4853C43.371 21.5996 42.0481 22.4835 40.5922 23.0866C39.1363 23.6896 37.5759 24 36 24H30C28.8954 24 28 23.1046 28 22C28 20.8954 28.8954 20 30 20H36C37.0506 20 38.0909 19.7931 39.0615 19.391C40.0321 18.989 40.914 18.3997 41.6569 17.6569C42.3997 16.914 42.989 16.0321 43.391 15.0615C43.7931 14.0909 44 13.0506 44 12C44 10.9494 43.7931 9.90914 43.391 8.93853C42.989 7.96793 42.3997 7.08601 41.6569 6.34315C40.914 5.60028 40.0321 5.011 39.0615 4.60896C38.0909 4.20693 37.0506 4 36 4H30C28.8954 4 28 3.10457 28 2Z" fill="url(#paint0_linear_13_17246)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 10.8954 14.8954 10 16 10H32C33.1046 10 34 10.8954 34 12C34 13.1046 33.1046 14 32 14H16C14.8954 14 14 13.1046 14 12Z" fill="url(#paint1_linear_13_17246)" />
                                <defs>
                                    <linearGradient id="paint0_linear_13_17246" x1="3.66667" y1="13.2973" x2="48.0018" y2="13.4686" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_13_17246" x1="3.66667" y1="13.2973" x2="48.0018" y2="13.4686" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <div>ON-CHAIN</div>
                                <div>Including information on all data performed on each Blockchain. This data helps to publicize transactions (wallet addresses, amount of token, kind of token), data about blocks (time, gas fees, miners), and actions executed in Smart Contract (add liquidity, participate in governance).
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants3} >
                            <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6667 16C20.1394 16 21.3333 17.1939 21.3333 18.6667V45.3333C21.3333 46.8061 20.1394 48 18.6667 48C17.1939 48 16 46.8061 16 45.3333V18.6667C16 17.1939 17.1939 16 18.6667 16Z" fill="url(#paint0_linear_13_17251)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6667 0C36.1394 0 37.3333 1.19391 37.3333 2.66667V45.3333C37.3333 46.8061 36.1394 48 34.6667 48C33.1939 48 32 46.8061 32 45.3333V2.66667C32 1.19391 33.1939 0 34.6667 0Z" fill="url(#paint1_linear_13_17251)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 32C4.13943 32 5.33333 33.1939 5.33333 34.6667V45.3333C5.33333 46.8061 4.13943 48 2.66667 48C1.19391 48 0 46.8061 0 45.3333V34.6667C0 33.1939 1.19391 32 2.66667 32Z" fill="url(#paint2_linear_13_17251)" />
                                <defs>
                                    <linearGradient id="paint0_linear_13_17251" x1="2.85185" y1="26.5946" x2="37.3352" y2="26.6464" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_13_17251" x1="2.85185" y1="26.5946" x2="37.3352" y2="26.6464" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_13_17251" x1="2.85185" y1="26.5946" x2="37.3352" y2="26.6464" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <div>CHART</div>
                                <div>Through data extracted from On-chain, Coinmap will chart-lizing to a candlestick chart showing the token price (close, open, high, low) on every timeframe, combined with drawing tools and indicator.</div>
                            </div>
                        </motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants4} >
                            <svg width="48" height="33" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13_17253)">
                                    <path d="M0 0V32.4706H48V0H0ZM45.0751 4.44023V27.871V29.5332H42.4903H5.5777H2.92489V27.9165V4.463V2.93738H5.75909H42.2409H45.0751V4.44023Z" fill="url(#paint0_linear_13_17253)" />
                                    <path d="M18.5015 5.12341H4.08105V9.42702H18.5015V5.12341Z" fill="url(#paint1_linear_13_17253)" />
                                    <path d="M32.1736 11.2258H4.08105V15.5294H32.1736V11.2258Z" fill="url(#paint2_linear_13_17253)" />
                                    <path d="M32.3276 17.647H4.23499V21.9506H32.3276V17.647Z" fill="url(#paint3_linear_13_17253)" />
                                    <path d="M9.93084 23.4078H4.08105V27.7114H9.93084V23.4078Z" fill="url(#paint4_linear_13_17253)" />
                                    <path opacity="0.42" d="M43.4879 5.12341H21.7439V9.42702H43.4879V5.12341Z" fill="url(#paint5_linear_13_17253)" />
                                    <path opacity="0.42" d="M43.4882 11.2258H35.2804V15.5294H43.4882V11.2258Z" fill="url(#paint6_linear_13_17253)" />
                                    <path opacity="0.42" d="M43.4882 17.3055H35.2804V21.6091H43.4882V17.3055Z" fill="url(#paint7_linear_13_17253)" />
                                    <path opacity="0.42" d="M43.4879 23.4078H12.425V27.7114H43.4879V23.4078Z" fill="url(#paint8_linear_13_17253)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_13_17253" x1="3.66667" y1="17.9905" x2="48.0021" y2="18.1171" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_13_17253" x1="5.18261" y1="7.50784" x2="18.5017" y2="7.59406" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_13_17253" x1="6.22702" y1="13.6103" x2="32.171" y2="13.9374" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_13_17253" x1="6.38095" y1="20.0314" x2="32.3249" y2="20.3586" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_13_17253" x1="4.52791" y1="25.7923" x2="9.93111" y2="25.8065" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_13_17253" x1="23.4049" y1="7.50784" x2="43.4871" y2="7.70387" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_13_17253" x1="35.9074" y1="13.6103" x2="43.4886" y2="13.6382" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_13_17253" x1="35.9074" y1="19.69" x2="43.4886" y2="19.7179" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_13_17253" x1="14.7979" y1="25.7923" x2="43.4839" y2="26.1923" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#01C3FE" />
                                        <stop offset="0.994212" stop-color="#45FAC5" />
                                    </linearGradient>
                                    <clipPath id="clip0_13_17253">
                                        <rect width="48" height="32.4706" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div>
                                <div>ORDER BOOK</div>
                                <div>Support actual orders (market), pending orders (Pending orders), and customized orders according to the needs of each user to maximize profits.</div>
                            </div>
                        </motion.div>
                    </S.Section2Col2>
                </Row>
            </S.Section2>

            <S.Section3>
                <Row>
                    <S.Section3Col1 grid={12} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants} >News can be purchased and the asset can be manipulated, BUT…</motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants1} ><span>On-Chain</span>DATA<br />CANNOT BE FAKED</motion.div>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants2} >Analyze real-time trading data from blockchain on platforms ERC, BSC, etc. Coinmap also suggests customized trading strategies for each user, moreover, we can help you follow and replicate veteran traders to gain best profits.</motion.div>
                        <motion.button initial="offscreen" whileInView="onscreen" variants={variants3} >LAUNCH APP</motion.button>
                    </S.Section3Col1>
                    <S.Section3Col2 grid={12} gutter={{ xs: 24 }}>
                        <motion.img initial="offscreen" whileInView="onscreen" variants={variants2} src='/images/home_bg3.png' />
                    </S.Section3Col2>
                </Row>
                <S.Section3ItemDesktop gaps={[1.8, 0]}>
                    <Col grid={8} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants2} >
                            <S.Section3Item>
                                <div>
                                    <div>55<span>%</span></div>
                                    <div>CoinMap On-Chain</div>
                                    <div>Overview market On-chain data</div>
                                </div>
                                <img src='/images/home_bg3_i1.png' />
                            </S.Section3Item>
                        </motion.div>
                    </Col>
                    <Col grid={8} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants3} >
                            <S.Section3Item>
                                <div>
                                    <div>39<span>%</span></div>
                                    <div>Order book</div>
                                    <div>Support automated trading</div>
                                </div>
                                <img src='/images/home_bg3_i2.png' />
                            </S.Section3Item>
                        </motion.div>
                    </Col>
                    <Col grid={8} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants4} >
                            <S.Section3Item>
                                <div>
                                    <div>06<span>%</span></div>
                                    <div>Trading Signals</div>
                                    <div>Data from sharks and veteran trader's wallets</div>
                                </div>
                                <img src='/images/home_bg3_i3.png' />
                            </S.Section3Item>
                        </motion.div>
                    </Col>
                </S.Section3ItemDesktop>
            </S.Section3>
            <S.Section3ItemMobile {...section3SlideSetting}>
                {/* <S.Section3Item>
                    <div>
                        <div>55<span>%</span></div>
                        <div>CoinMap On-Chain</div>
                        <div>Overview market On-chain data</div>
                    </div>
                    <img src='/images/home_bg3_i1.png' />
                </S.Section3Item>
                <S.Section3Item>
                    <div>
                        <div>39<span>%</span></div>
                        <div>Order book</div>
                        <div>Support automated trading</div>
                    </div>
                    <img src='/images/home_bg3_i2.png' />
                </S.Section3Item>
                <S.Section3Item>
                    <div>
                        <div>06<span>%</span></div>
                        <div>Trading Signals</div>
                        <div>Data from sharks and veteran trader's wallets</div>
                    </div>
                    <img src='/images/home_bg3_i3.png' />
                </S.Section3Item> */}
            </S.Section3ItemMobile>

            <S.Section4>
                <S.Section4Info>
                    <motion.div initial="offscreen" whileInView="onscreen" variants={variants} >Launch Roadmap</motion.div>
                    <motion.div initial="offscreen" whileInView="onscreen" variants={variants1} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</motion.div>
                </S.Section4Info>
                <S.Section4Row>
                    <S.Section4ColItem grid={4} gutter={{ xs: 24 }}>
                        <div>Q4/2021</div>
                        <div>Event 1</div>
                        <div>Finalizing candlestick chart, fundamental On-chain analysis of BNB Chain ecosystem.
                        </div>
                    </S.Section4ColItem>
                    <S.Section4ColItem grid={4} gutter={{ xs: 24 }}>
                        <div>Q1/2022</div>
                        <div>Event 2</div>
                        <div>Finalizing depth-dive On-Chain analysis of the BNB Chain ecosystem. </div>
                    </S.Section4ColItem>
                    <S.Section4ColItem grid={4} gutter={{ xs: 24 }}>
                        <div>Q2/2022</div>
                        <div>Event 3</div>
                        <div>Finalizing pending orders. </div>
                    </S.Section4ColItem>
                    <S.Section4ColItem grid={4} gutter={{ xs: 24 }}>
                        <div>Q3/2022</div>
                        <div>Event 4</div>
                        <div>Finalizing filtering, multi-token analysis, and token recommendations. </div>
                    </S.Section4ColItem>
                    <S.Section4ColItem grid={4} gutter={{ xs: 24 }}>
                        <div>Q4/2022</div>
                        <div>Event 5</div>
                        <div>Finalizing AI-bot and deploying on other ecosystems. </div>
                    </S.Section4ColItem>
                </S.Section4Row>
            </S.Section4>
            <S.Section5>
                <S.Section5Title>
                    Partner
                </S.Section5Title>
                <Row gaps={[1.5, 1.5]}>
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                    <S.Section5ColItem grid={4} gutter={{ xs: 12 }} />
                </Row>
            </S.Section5>
            <S.Section6>
                <Row gaps={[5, 0]}>
                    <Col grid={6} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants} >
                            <S.Section6Title>JOIN US</S.Section6Title>
                        </motion.div>
                    </Col>
                    <Col grid={16} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants1} >
                            <S.Section6Des>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</S.Section6Des>
                        </motion.div>
                    </Col>
                    <Col grid={2} gutter={{ xs: 24 }}>
                        <motion.div initial="offscreen" whileInView="onscreen" variants={variants2} >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4142 0.585786C16.6332 -0.195262 15.3668 -0.195262 14.5858 0.585786C13.8047 1.36683 13.8047 2.63317 14.5858 3.41421L25.1716 14H2C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18H25.1716L14.5858 28.5858C13.8047 29.3668 13.8047 30.6332 14.5858 31.4142C15.3668 32.1953 16.6332 32.1953 17.4142 31.4142L31.4142 17.4142C32.1953 16.6332 32.1953 15.3668 31.4142 14.5858L17.4142 0.585786Z" fill="white" />
                            </svg>
                        </motion.div>
                    </Col>
                </Row>
            </S.Section6>
            <S.Section7>
                <Row>
                    <Col grid={6}>
                        <motion.img initial="offscreen" whileInView="onscreen" variants={variants} src='/images/fb.png' />
                    </Col>
                    <Col grid={6}>
                        <motion.img initial="offscreen" whileInView="onscreen" variants={variants1} src='/images/twitter.png' />
                    </Col>
                    <Col grid={6}>
                        <motion.img initial="offscreen" whileInView="onscreen" variants={variants2} src='/images/tele.png' />
                    </Col>
                    <Col grid={6}>
                        <motion.img initial="offscreen" whileInView="onscreen" variants={variants3} src='/images/youtube.png' />
                    </Col>
                </Row>
                <motion.div initial="offscreen" whileInView="onscreen" variants={variants4} >
                    <S.Section7Copyright>Copyright 2022 by CoinMap. All rights reserved.</S.Section7Copyright>
                </motion.div>
            </S.Section7>
        </>
    )
}

export default Home2