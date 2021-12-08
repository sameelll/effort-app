import Head from 'next/head'
import Center from '../components/Center'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="bg-gray-700 h-screen overflow-y-scroll">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex items-center justify-center">
        <Center />
      </main>
    </div>
  )
}