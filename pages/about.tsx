import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { getAssetByTitle, getSocials, getTextContentByTag } from '../api'
import Footer from '../components/Footer'
import SharedHead from '../components/SharedHead'

export default function Home({
  headerImage,
  name,
  jobTitle,
  socials,
  about,
}: {
  headerImage: any
  name: string
  jobTitle: string
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
  const headerImage = (await getAssetByTitle('Ben Square')) || null
  const name = (await getTextContentByTag('site-name')) || ''
  const jobTitle = (await getTextContentByTag('site-job-title')) || ''
  const socials = (await getSocials()) || []
  const about = (await getTextContentByTag('site-about')) || ''
  return {
    props: { headerImage, name, jobTitle, socials, about },
  }
}
