import {
  ArrowsClockwise,
  Calculator,
  Files,
  GlobeHemisphereEast,
  Scales,
  SealCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Fixed semantic assignments per `03 §8`, so meaning stays stable across the
 * site. Icons label a stage, a service type or a document class. An icon that
 * labels nothing is removed rather than kept for visual interest.
 */
const icons = {
  SealCheck,
  GlobeHemisphereEast,
  Scales,
  ArrowsClockwise,
  Files,
  Calculator,
  UsersThree,
};

export type IconName = keyof typeof icons;

export function StageIcon({
  name,
  size = 24,
  className,
}: {
  readonly name: IconName;
  readonly size?: number;
  readonly className?: string;
}) {
  const Component = icons[name];
  return <Component size={size} weight="regular" className={className} aria-hidden />;
}
