import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }: { project: any }) => {
  const projectTags = project?.tags.split(',') ?? []
  const projectYear = new Date(project.createdAt).getFullYear()

  return (
    <div className="project">
      <div className="project-image project-image-tailwind">
        <Image src={project.image.url} alt={project.name} fill={true}></Image>
      </div>
      <div className="project-details">
        <h5 className="text-lg sm:text-xl md:text-2xl">
          <Link
            href={project.url}
            className="text-copper-red hover:text-cool-grey transition-colors duration-500"
            target="_blank">
            {project.name}
          </Link>
        </h5>
        <ul className="list-none mb-4 flex text-xs md:text-sm text-cool-grey">
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
        <p className="text-sm sm:text-md md:text-lg leading-relaxed text-justify">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default Project
