import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "deep"
  | "on-image"
  | "on-image-primary";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  deep: "btn-deep",
  "on-image": "btn-on-image",
  "on-image-primary": "btn-on-image-primary",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly variant?: ButtonVariant;
  readonly size?: "md" | "sm";
  readonly asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", asChild = false, className, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      data-slot="button"
      data-variant={variant}
      className={cn("btn", variantClass[variant], size === "sm" && "btn-sm", className)}
      {...props}
    />
  );
});
