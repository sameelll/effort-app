import Head from 'next/head'
import Center from '../components/Center'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Center />
      </main>
    </div>
  )
}