import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  /* Every image on the site is now local. No remote pattern is allowed. */
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{ source: "/about", destination: "/practice", permanent: true }];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
