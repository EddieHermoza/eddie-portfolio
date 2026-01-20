'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ADMIN_LINKS } from '../constants/admin-links'
import Link from 'next/link'
import { aldrich } from '@/config/fonts'
import { SOCIAL_NETWORKS } from '@/modules/landing/home/constants/social-networks'
import { Button } from '@/modules/shared/components/ui/button'

export default function AdminNavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
                   size-9 rounded-md bg-foreground text-primary-foreground
                   flex items-center justify-center shadow-lg 
                 transition-colors duration-300"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              className="text-primary-foreground"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="xl:hidden fixed h-[100svh] max-lg:h-[calc(100svh-54px)] inset-0 z-1000 bg-background backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-between h-full gap-10 text-primary-foreground p-5"
            >
              <motion.div className="flex flex-col gap-2">
                <span
                  className={`${aldrich.className} text-foreground text-3xl`}
                >
                  Full-Stack Developer
                </span>
                <span className="text-2xl font-light text-muted-foreground">
                  Eddie Hermoza
                </span>
              </motion.div>
              <div className="flex flex-col gap-5">
                {ADMIN_LINKS.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="relative w-full flex text-start rounded text-4xl hover:text-muted-foreground active:text-muted-foreground transition-colors text-foreground active:bg-muted hover:bg-muted"
                  >
                    <Link
                      href={item.href}
                      className="relative w-full flex text-start p-2 rounded text-4xl hover:text-muted-foreground active:text-muted-foreground transition-colors text-foreground active:bg-muted hover:bg-muted"
                      onClick={() => {
                        setIsOpen(false)
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 py-4 text-xl border-foreground/20 border rounded-full flex-center  transition-colors text-primary-foreground gap-3"
                >
                  {SOCIAL_NETWORKS.map((item) => (
                    <Button
                      key={item.name}
                      asChild
                      className="size-9 rounded-full gap-3 flex-center "
                    >
                      <a key={item.name} href="#">
                        <item.icon size={22} />
                      </a>
                    </Button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
