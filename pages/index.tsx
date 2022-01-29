import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Staking } from '../components/Staking/Staking'
import { Widgets } from '../components/Widgets/Widgets'
import styles from '../styles/Home.module.css'
import theme from '../themes/theme'

const soceanTheme = createTheme(theme);

const Home: NextPage = () => {
    return (
        <ThemeProvider theme={soceanTheme}>
            <Head>
                <title>Socean Finance</title>
                <meta name="description" content="The best risk-free yields on Solana." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

            <main className={styles.main}>
                <Widgets />
                <Typography fontSize={40} textAlign="center" fontWeight={700}>
                    Stake SOL and Earn<br />6% APY
                </Typography>
                <Staking />
            </main>
        </ThemeProvider>
    )
}

export default Home
