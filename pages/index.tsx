import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Staking } from '../components/Staking/Staking'
import { Widgets } from '../components/Widgets/Widgets'
import { SoceanContext } from '../contexts/SoceanContext'
import styles from '../styles/Home.module.css'
import theme from '../themes/theme'

const soceanTheme = createTheme(theme);

const Home: NextPage = () => {
    const [apr, setApr] = useState(0);

    return (
        <ThemeProvider theme={soceanTheme}>
            <Head>
                <title>Socean Finance</title>
                <meta name="description" content="The best risk-free yields on Solana." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

            <main className={styles.main}>
                <SoceanContext.Provider value={{ cluster: "mainnet-beta", apr, setApr }}>
                    <Widgets />
                    <Typography fontSize={40} textAlign="center" fontWeight={700}>
                        Stake SOL and Earn<br />{apr.toFixed(2)}% APY
                    </Typography>
                    <Staking />
                </SoceanContext.Provider>
            </main>
        </ThemeProvider>
    )
}

export default Home
