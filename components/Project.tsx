import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project, flipped }: { project: any; flipped?: boolean }) => {
  const projectTags = project?.tags.split(',') ?? []
  const projectYear = new Date(project.createdAt).getFullYear()
  const imageClass = `rounded-2xl shadow-lg overflow-hidden flex-none ${
    !flipped ? 'mr-20' : 'ml-20'
  }`

  return (
    <div className="project flex align-middle mx-8 mb-20">
      {!!flipped && (
        <div className="flex-1 flex flex-col justify-center">
          <h5 className="text-2xl text-right">
            <Link
              href={project.url}
              className="text-copper-red hover:text-cool-grey transition-colors duration-500"
              target="_blank">
              {project.name}
            </Link>
          </h5>
          <ul className="list-none mb-4 flex justify-end text-sm text-cool-grey text-right">
            <li className="mr-2">{projectYear}</li> |
            {projectTags.map((tag: any, i: number) => {
              const tagClass = i === projectTags.length - 1 ? 'ml-2' : 'mx-2'
              return (
                <>
                  <li className={tagClass} key={`${tag}_${project.name}`}>
                    {tag}
                  </li>{' '}
                  {i < projectTags.length - 1 && <span>•</span>}
                </>
              )
            })}
          </ul>
          <p className="text-lg leading-relaxed text-justify">
            {project.description}
          </p>
        </div>
      )}
      <div className={imageClass}>
        <Image
          src={project.image.url}
          alt={project.name}
          width={600}
          height={633}></Image>
      </div>
      {!flipped && (
        <div className="flex-1 flex flex-col justify-center">
          <h5 className="text-2xl">
            <Link
              href={project.url}
              className="text-copper-red hover:text-cool-grey transition-colors duration-500"
              target="_blank">
              {project.name}
            </Link>
          </h5>
          <ul className="list-none mb-4 flex text-sm text-cool-grey">
            <li className="mr-2">{projectYear}</li> |
            {projectTags.map((tag: any, i: number) => {
              return (
                <>
                  <li className="mx-2" key={`${tag}_${project.name}`}>
                    {tag}
                  </li>{' '}
                  {i < projectTags.length - 1 && <span>•</span>}
                </>
              )
            })}
          </ul>
          <p className="text-lg leading-relaxed text-justify">
            {project.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default Project
