import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }: { project: any }) => {
  const projectTags = project?.tags.split(',') ?? []
  const projectYear = new Date(project.createdAt).getFullYear()

  return (
    <div className="project flex align-middle mx-8">
      <div className="rounded-md shadow-lg overflow-hidden flex-none mr-20">
        <Image
          src={project.image.url}
          alt={project.name}
          width={600}
          height={633}></Image>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h5 className="text-2xl">
          <Link
            href={project.url}
            className="text-copper-red hover:text-cool-grey"
            target="_blank">
            {project.name}
          </Link>
        </h5>
        <ul className="list-none mb-4 flex text-cool-grey">
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
    </div>
  )
}

export default Project
