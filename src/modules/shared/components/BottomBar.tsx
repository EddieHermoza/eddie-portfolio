'use client'

import Link from 'next/link'
import { ThemeTogglerButton } from '../animate-ui/components/buttons/theme-toggler'
import { usePathname } from 'next/navigation'
import { MdHome } from 'react-icons/md'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import NavBar from '@/modules/landing/home/components/NavBar'
import { IoAnalyticsSharp } from 'react-icons/io5'

export default function BottomBar() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  const isHome = pathname === '/'

  return (
    <div className="lg:border rounded-full fixed bg-background z-50 bottom-0 right-0 m-4 px-10 h-14 flex-center gap-3 max-lg:m-0 max-lg:w-full max-lg:rounded-none border-t">
      <Tooltip>
        <TooltipTrigger asChild>
          <ThemeTogglerButton modes={['light', 'dark']} direction="rtl" />
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          {theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} asChild className="rounded-md">
            <Link href={isAdmin ? '/' : '/admin/dashboard'}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isAdmin ? 'home' : 'admin'}
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  whileTap={{ scale: 0.8 }}
                  className="flex-center"
                >
                  {isAdmin ? <MdHome /> : <IoAnalyticsSharp />}
                </motion.div>
              </AnimatePresence>
            </Link>
          </Button>
        </TooltipTrigger>

        <TooltipContent sideOffset={8}>
          {isAdmin ? 'Landing' : 'Analíticas'}
        </TooltipContent>
      </Tooltip>

      <div className="xl:hidden">{!isAdmin && isHome && <NavBar />}</div>
    </div>
  )
}
