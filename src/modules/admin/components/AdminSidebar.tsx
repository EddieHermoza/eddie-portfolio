import { ADMIN_LINKS } from '@/modules/admin/constants/admin-links'
import Link from 'next/link'
export default function AdminSidebar() {
  return (
    <>
      <aside className="relative group flex-center h-screen bg-sidebar border-r w-60  max-xl:hidden">
        <ul className="flex-col flex gap-4">
          {ADMIN_LINKS.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              prefetch
              className="cursor-pointer h-14 flex items-center gap-5 duration-300 hover:bg-primary/10 p-3 rounded-full"
            >
              <item.icon size={24} className="shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </ul>
      </aside>
    </>
  )
}
