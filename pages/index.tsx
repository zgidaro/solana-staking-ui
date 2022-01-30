import { createTheme, ThemeProvider, Typography } from '@mui/material'
import { Cluster, clusterApiUrl, Connection } from '@solana/web3.js'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { SolanaProvider } from '../components/SolanaProvider/SolanaProvider'
import { Staking } from '../components/Staking/Staking'
import { Widgets } from '../components/Widgets/Widgets'
import { SoceanContext } from '../contexts/SoceanContext'
import styles from '../styles/Home.module.css'
import theme from '../themes/theme'
import { useIndex } from '../hooks/index.hooks';

const soceanTheme = createTheme(theme);

const Home: NextPage = () => {
    const { apr, endpoint, connection, stakePool } = useIndex();

    return (
        <ThemeProvider theme={soceanTheme}>
            <Head>
                <title>Socean Finance</title>
                <meta name="description" content="The best risk-free yields on Solana." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

            <main className={styles.main}>
                <SolanaProvider endpoint={endpoint}>
                    <SoceanContext.Provider value={{ apr, stakePool, connection }}>
                        <Widgets />
                        <Typography fontSize={40} textAlign="center" fontWeight={700}>
                            Stake SOL and Earn<br />{apr.toFixed(2)}% APY
                        </Typography>
                        <Staking />
                    </SoceanContext.Provider>
                </SolanaProvider>
            </main>
        </ThemeProvider>
    )
}

export default Home
