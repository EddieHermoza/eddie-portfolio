import { Button } from '@/modules/shared/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/modules/shared/components/ui/tooltip'
import { PiGithubLogoFill } from 'react-icons/pi'
import { GoArrowUpRight } from 'react-icons/go'
import clsx from 'clsx'

type ProjectActionsProps = {
  primaryRepo?: string
  liveDemoLink: string
  isPrivate: boolean
}

export default function ProjectActions({
  primaryRepo,
  liveDemoLink,
  isPrivate,
}: ProjectActionsProps) {
  return (
    <TooltipProvider>
      <div className="group w-fit lg:p-2 max-lg:w-full flex gap-2 relative max-lg:mb-5">
        {!isPrivate && primaryRepo && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={'outline'}
                asChild
                className="flex-center lg:size-16 max-lg:h-12 rounded-full max-lg:w-1/2"
              >
                <a
                  href={primaryRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiGithubLogoFill className="size-6" />
                  <span className="lg:hidden text-xs">Ir al repositorio</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Ir al repositorio</TooltipContent>
          </Tooltip>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              className={clsx(
                'duration-300 lg:size-16 max-lg:h-12 rounded-full flex-center max-lg:w-1/2'
              )}
            >
              <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                <GoArrowUpRight className="size-6" />
                <span className="lg:hidden">Ir a la demo</span>
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Ver demo</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
