import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { getProjects, getSocials, getTextContentByTag } from '../api'
import Footer from '../components/Footer'
import Project from '../components/Project'

export default function Home({
  projects,
  socials,
  about,
}: {
  projects: any
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
          <div className="max-w-7xl mx-auto text-xl">
            <h4 className="text-xanadu text-xl md:text-2xl lg:text-3xl mb-4">
              Projects
            </h4>
            {!!projects &&
              projects.map((project: any, i: number) => (
                <Project
                  project={project}
                  key={project.name}
                  flipped={i % 2 === 1}
                />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const projects = (await getProjects()) || []
  const socials = (await getSocials()) || []
  const about = (await getTextContentByTag('site-about')) || ''
  return {
    props: { projects, socials, about },
  }
}
