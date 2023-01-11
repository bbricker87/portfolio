import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  const navItemClass = `text-center pt-2 pb-1 md:pt-3 md:pb-2 w-40 text-base sm:text-md md:text-lg text-cultured hover:text-copper-red transition-all duration-500`

  return (
    <nav className="px-1 bg-xanadu">
      <ul className="flex justify-center list-none m-0 h-full">
        {router?.pathname !== '/' && (
          <li className={navItemClass}>
            <Link href="/">Home</Link>
          </li>
        )}
        {router?.pathname !== '/about' && (
          <li className={navItemClass}>
            <Link href="/about">About</Link>
          </li>
        )}
        {router?.pathname !== '/projects' && (
          <li className={navItemClass}>
            <Link href="/projects">Projects</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
