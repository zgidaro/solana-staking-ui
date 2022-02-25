import { createTheme, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SolanaProvider } from '../components/SolanaProvider/SolanaProvider'
import { Staking } from '../components/Staking/Staking'
import { Widgets } from '../components/Widgets/Widgets'
import { StakingContext } from '../contexts/StakingContext'
import styles from '../styles/Home.module.css'
import theme from '../themes/theme'
import { useIndex } from '../hooks/index.hooks';

const stakingTheme = createTheme(theme);

const Home: NextPage = () => {
    const { apr, endpoint, connection } = useIndex();

    return (
        <ThemeProvider theme={stakingTheme}>
            <Head>
                <title>Solana Staking Finance</title>
                <meta name="description" content="The best risk-free yields on Solana." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

            <main className={styles.main}>
                <SolanaProvider endpoint={endpoint}>
                    <StakingContext.Provider value={{ apr, connection, stakedToken: "xSOL" }}>
                        <Widgets />
                        <Typography fontSize={40} textAlign="center" fontWeight={700}>
                            Stake SOL and Earn<br />{apr.toFixed(2)}% APY
                        </Typography>
                        <Staking />
                    </StakingContext.Provider>
                </SolanaProvider>
            </main>
        </ThemeProvider>
    )
}

export default Home
