import Link from 'next/link'
import EmailSvg from '../public/socials/email.svg'
import GithubSvg from '../public/socials/github.svg'
import LinkedinSvg from '../public/socials/linkedin.svg'

const SocialLinks = ({ socials }: { socials: any }) => {
  const svgClass =
    'transition ease-in-out duration-500 w-8 h-8 fill-copper-red scale-100 hover:fill-cool-grey hover:scale-125'
  return (
    <ul className="flex justify-center align-middle my-8">
      {socials?.length &&
        socials.map((social: any) => (
          <li className="mx-6">
            <Link
              href={`${social.type === 'email' ? 'mailto:' : ''}${social.url}`}
              target="_blank">
              {social.type === 'email' && <EmailSvg className={svgClass} />}
              {social.type === 'github' && <GithubSvg className={svgClass} />}
              {social.type === 'linkedin' && (
                <LinkedinSvg className={svgClass} />
              )}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default SocialLinks
