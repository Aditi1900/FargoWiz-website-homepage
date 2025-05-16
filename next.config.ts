import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.pexels.com', 'public.flourish.studio'],
  },
  
    theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
       animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
}

export default nextConfig;
