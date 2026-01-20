export type GalleryImage = {
  src: string
  width: number
  height: number
  isPreview?: boolean
}

export function getPreviewImage(galleryImages?: GalleryImage[]) {
  return galleryImages?.find((img) => img.isPreview)
}
