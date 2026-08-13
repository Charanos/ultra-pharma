import Image from "next/image";
import type { Media } from "@/content/media";
import { cn } from "@/lib/utils";

export type FigureImageProps = {
  readonly media: Media;
  /** Set accurately per placement. The highest-leverage control on the budget. */
  readonly sizes: string;
  readonly priority?: boolean;
  readonly className?: string;
  readonly aspect?: string;
};

/**
 * A photograph through the canvas grade. Dimensions are always explicit, so
 * nothing shifts on load.
 */
export function FigureImage({
  media,
  sizes,
  priority = false,
  className,
  aspect,
}: FigureImageProps) {
  return (
    <div
      data-slot="figure-image"
      /* The hero is already in view on load, so it never waits on a scroll trigger. */
      {...(priority ? {} : { "data-media-in": "" })}
      className={cn("media", className)}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="photo h-full w-full object-cover"
      />
    </div>
  );
}
