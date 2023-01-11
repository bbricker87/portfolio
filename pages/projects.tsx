import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { getProjects, getSocials } from '../api'
import Footer from '../components/Footer'
import Project from '../components/Project'

export default function Home({
  projects,
  socials,
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
        <div className="my-8 sm:my-16 md:my-24 container mx-auto">
          <div className="2xl:max-w-7xl mx-auto text-xl">
            <h4 className="text-xl px-4 md:text-3xl lg:px-0 lg:text-4xl mb-4 hidden sm:block">
              Projects
            </h4>
            {!!projects &&
              projects.map((project: any, i: number) => (
                <Project project={project} key={project.name} />
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
  return {
    props: { projects, socials },
  }
}
