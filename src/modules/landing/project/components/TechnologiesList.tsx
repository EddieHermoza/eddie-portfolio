type TechnologiesListProps = {
  technologies: string[]
  isPrivate?: boolean
}

export default function TechnologiesList({
  technologies,
  isPrivate = false,
}: TechnologiesListProps) {
  return (
    <div className="flex flex-col gap-5 max-md:gap-2 w-full">
      <h2 className="text-2xl max-md:text-xl">
        {isPrivate ? 'Responsabilidades' : 'Tecnologías'}
      </h2>
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent lg:mb-10 w-full">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs border border-primary px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
