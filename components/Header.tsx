import Image from 'next/image'
import SocialLinks from './SocialLinks'
import Link from 'next/link'

const HeaderImage = ({ image }: { image: any }) => {
  return (
    <div className="mx-auto mb-8 w-60 md:w-80 aspect-square rounded-full overflow-hidden relative">
      <Link href="/">
        <Image
          src={image?.url ?? `/ben-square.jpeg`}
          alt="ben-bricker"
          fill={true}></Image>
      </Link>
    </div>
  )
}

const HeaderTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className="mx-auto text-center my-4">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl">
        <Link
          className="text-jet hover:text-cool-grey transition-all duration-500"
          href="/">
          {title ?? `Ben Bricker`}
        </Link>
      </h1>
      <h4 className="text-xanadu text-xl md:text-2xl lg:text-3xl">
        {subtitle ?? `Software Engineer`}
      </h4>
    </div>
  )
}

export default function Header({
  image,
  name,
  jobTitle,
  socials,
}: {
  image: any
  name: string
  jobTitle: string
  socials: any
}) {
  return (
    <div className="container px-4 sm:mx-auto py-4 sm:py-10 md:py-20">
      <HeaderImage image={image} />
      <HeaderTitle title={name} subtitle={jobTitle} />
      <SocialLinks socials={socials} />
    </div>
  )
}
