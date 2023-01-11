import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-jet px-4 py-2">
      <div className="container mx-auto">
        <Link
          href="https://github.com/bbricker87/portfolio"
          target="_blank"
          className="text-sm text-copper-red transition-colors duration-500 hover:text-cool-grey">
          Coded by Ben Bricker
        </Link>
      </div>
    </div>
  )
}

export default Footer
