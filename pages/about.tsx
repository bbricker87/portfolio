import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { getFeaturedProject, getSocials, getTextContentByTag } from '../api'
import Project from '../components/Project'
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
        <div className="my-24 container mx-auto">
          <div className="max-w-7xl mx-auto text-xl leading-relaxed">
            <h4 className="text-xanadu text-xl md:text-2xl lg:text-3xl mb-4">
              About Me
            </h4>
            <p className="px-8 text-justify whitespace-pre-line">{about}</p>
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
