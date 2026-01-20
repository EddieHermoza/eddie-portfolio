import {
  Cursor,
  CursorFollow,
} from '@/modules/shared/animate-ui/components/animate/cursor'
import { TbLocationFilled } from 'react-icons/tb'
export default function AppCursor() {
  return (
    <>
      <Cursor>
        <TbLocationFilled
          style={{
            fill: 'white',
            stroke: 'black',
            strokeWidth: 1,
          }}
          className="rotate-270 z-10000"
        />
      </Cursor>
      <CursorFollow align="center">
        <div className="border border-black dark:border-white rounded-full size-16 -translate-y-8 "></div>
      </CursorFollow>
    </>
  )
}
