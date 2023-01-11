import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { getSocials, getTextContentByTag } from '../api'
import Footer from '../components/Footer'

export default function Home({
  socials,
  about,
}: {
  socials: any
  about: string
}) {
  return (
    <>
      <Head>
        <title>Ben Bricker | Home</title>
        <meta name="description" content="Ben Bricker portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-cultured">
        <Header socials={socials} />
        <NavBar />
        <div className="my-8 sm:my-16 md:my-24 container mx-auto mb-20 sm:mb-0">
          <div className="2xl:max-w-7xl mx-auto text-xl px-4">
            <h4 className="text-xl md:text-3xl lg:px-0 lg:text-4xl mb-4 hidden sm:block">
              About Me
            </h4>
            <p className="text-sm sm:text-md md:text-lg leading-relaxed text-justify whitespace-pre-line">
              {about}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const socials = (await getSocials()) || []
  const about = (await getTextContentByTag('site-about')) || ''
  return {
    props: { socials, about },
  }
}
