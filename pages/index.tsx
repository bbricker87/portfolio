import NavBar from '../components/NavBar'
import Header from '../components/Header'
import {
  getAssetByTitle,
  getFeaturedProject,
  getSocials,
  getTextContentByTag,
} from '../api'
import Project from '../components/Project'
import Footer from '../components/Footer'
import SharedHead from '../components/SharedHead'

export default function Home({
  headerImage,
  name,
  jobTitle,
  featured,
  socials,
  intro,
}: {
  headerImage: any
  name: string
  jobTitle: string
  featured: any
  socials: any
  intro: string
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
          <div className="2xl:max-w-7xl mx-auto text-xl px-4">
            <p className="text-sm sm:text-md md:text-lg leading-relaxed text-justify whitespace-pre-line">
              {intro}
            </p>
          </div>
          <div className="max-w-7xl mx-auto my-8 sm:my-15 lg:my-20 px-1">
            <h4 className="text-2xl md:text-3xl px-2 lg:px-0 lg:text-4xl mb-1 md:mb-4">
              Featured
            </h4>
            <Project project={featured} />
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
  const featured = (await getFeaturedProject()) || null
  const intro = (await getTextContentByTag('site-intro')) || ''
  return {
    props: { headerImage, name, jobTitle, featured, socials, intro },
  }
}
