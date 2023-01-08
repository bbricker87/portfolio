import Image from 'next/image'
import SocialLinks from './social'

const HeaderImage = () => {
  return (
    <div className="mx-auto mb-8 w-full sm:w-60 md:w-80 aspect-square rounded-full overflow-hidden relative">
      <Image src="/ben-square.jpeg" alt="ben-bricker" fill={true}></Image>
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
      <h1 className="text-jet font-bold text-4xl md:text-5xl lg:text-7xl">
        {title}
      </h1>
      <h4 className="text-xanadu text-xl md:text-2xl lg:text-3xl">
        {subtitle}
      </h4>
    </div>
  )
}

export default function Header({ socials }: { socials: any }) {
  return (
    <div className="container mx-auto min-h-screen sm:min-h-0 py-20">
      <HeaderImage />
      <HeaderTitle title="Ben Bricker" subtitle="Software Engineer" />
      <SocialLinks socials={socials} />
    </div>
  )
}
