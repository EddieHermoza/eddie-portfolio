import { NextResponse } from 'next/server'
import { PROJECTS } from '@/__mocks__/projects'
export async function GET() {
  return NextResponse.json({
    data: PROJECTS,
  })
}
