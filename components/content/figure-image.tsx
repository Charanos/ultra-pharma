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
  /**
   * Extra classes on the `<img>` itself, for a caller-driven hover such as
   * `group-hover:scale-[1.03]` on a card that stretches its link over the
   * whole card rather than just the image.
   */
  readonly imgClassName?: string;
};

/**
 * A photograph through the canvas grade. Dimensions are always explicit, so
 * nothing shifts on load. The wrapper carries a neutral ground so a slow
 * network doesn't leave a hole where the image will be.
 */
export function FigureImage({
  media,
  sizes,
  priority = false,
  className,
  aspect,
  imgClassName,
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
        className={cn("photo h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
