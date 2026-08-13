import type { CSSProperties, ElementType, ReactNode } from "react";

export type RevealProps = {
  readonly children: ReactNode;
  readonly as?: ElementType;
  readonly className?: string;
  readonly style?: CSSProperties;
  /** Stagger the element's own children instead of moving it as one block. */
  readonly group?: boolean;
};

/**
 * Marks a block for the motion layer. No client JS of its own: `MotionProvider`
 * picks the attribute up, and the inline guard in `layout.tsx` means the
 * pre-animation state is only applied when motion will actually run.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  style,
  group = false,
}: RevealProps) {
  const attrs = group ? { "data-reveal-group": "" } : { "data-reveal": "" };
  return (
    <Tag {...attrs} className={className} style={style}>
      {children}
    </Tag>
  );
}
