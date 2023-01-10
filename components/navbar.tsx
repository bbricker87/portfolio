import Link from 'next/link'

export default function NavBar() {
  const navItemClass = `text-center px-30 pt-3 pb-2 w-40 text-lg text-cultured hover:text-copper-red transition-all duration-500`
  return (
    <nav className="px-1 bg-xanadu">
      <ul className="flex justify-center list-none m-0 h-full">
        <li className={navItemClass}>
          <Link href="/about">About</Link>
        </li>
        <li className={navItemClass}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
