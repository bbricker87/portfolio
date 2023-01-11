import Head from 'next/head'

const SharedHead = ({ title }: { title?: string }) => {
  return (
    <Head>
      <title>{title ?? `Ben Bricker | Software Engineer`}</title>
      <meta name="description" content="Ben Bricker portfolio website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon-32.png" />
    </Head>
  )
}

export default SharedHead
