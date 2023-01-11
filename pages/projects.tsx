import NavBar from '../components/NavBar'
import Header from '../components/Header'
import {
  getAssetByTitle,
  getProjects,
  getSocials,
  getTextContentByTag,
} from '../api'
import Footer from '../components/Footer'
import Project from '../components/Project'
import SharedHead from '../components/SharedHead'

export default function Projects({
  headerImage,
  name,
  jobTitle,
  projects,
  socials,
}: {
  headerImage: any
  name: string
  jobTitle: string
  projects: any
  socials: any
  about: string
}) {
  return (
    <>
      <SharedHead />
      <div className="min-h-screen bg-cultured">
        <Header
          image={headerImage}
          name={name}
          jobTitle={jobTitle}
          socials={socials}
        />
        <NavBar />
        <div className="my-8 sm:my-16 md:my-24 container mx-auto">
          <div className="2xl:max-w-7xl mx-auto text-xl">
            <h4 className="text-xl px-4 md:text-3xl lg:px-0 lg:text-4xl mb-4 hidden sm:block">
              Projects
            </h4>
            {!!projects &&
              projects.map((project: any, i: number) => (
                <Project project={project} key={i} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const headerImage = (await getAssetByTitle('Ben Square')) || null
  const name = (await getTextContentByTag('site-name')) || ''
  const jobTitle = (await getTextContentByTag('site-job-title')) || ''
  const socials = (await getSocials()) || []
  const projects = (await getProjects()) || []
  return {
    props: { headerImage, name, jobTitle, projects, socials },
  }
}
