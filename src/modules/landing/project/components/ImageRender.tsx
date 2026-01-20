'use clietn'

import { RenderImageContext, RenderImageProps } from 'react-photo-album'
import Image from 'next/image'
export function renderNextImage(
  { alt = '', title, sizes, className, onClick }: RenderImageProps,
  { photo, width, height, index }: RenderImageContext
) {
  return (
    <div
      className={`bg-black overflow-hidden rounded ${
        className || ''
      }`}
      style={{
        width: '100%',
        position: 'relative',
        aspectRatio: `${width} / ${height}`,
      }}
      onClick={onClick}
    >
      <Image
        fill
        src={photo}
        alt={alt || `Imagen ${index + 1}`}
        title={title}
        sizes={sizes}
        draggable={false}
        className="duration-200 hover:opacity-75 transition-opacity object-cover"
      />
    </div>
  )
}
