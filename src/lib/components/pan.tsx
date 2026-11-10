import Image from "next/image"
import type { Photo } from "@/lib/photos"

type PanProps = {
  photo: Photo
  /** Tailwind aspect class for the crop, e.g. "aspect-[4/5]". */
  ratio: string
  sizes: string
  label?: string
  /** Where the tape label sits. */
  labelAt?: "tl" | "br" | "bl"
  objectPosition?: string
  priority?: boolean
  className?: string
}

const labelPos = {
  tl: "left-4 top-4 -rotate-[1.5deg]",
  br: "bottom-4 right-4 rotate-[1deg]",
  bl: "bottom-3 left-3 -rotate-[1deg] sm:bottom-4 sm:left-4",
}

/** A photo set in a foil half pan, optionally labeled with a strip of tape like a catering tray. */
export function Pan({ photo, ratio, sizes, label, labelAt = "tl", objectPosition, priority, className = "" }: PanProps) {
  return (
    <figure className={`pan zoom ${className}`}>
      <div className={`pan-in ${ratio}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={priority}
          className="grade object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
        {label ? (
          <figcaption className={`tape absolute z-10 ${labelPos[labelAt]}`}>{label}</figcaption>
        ) : null}
      </div>
    </figure>
  )
}
