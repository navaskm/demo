/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
};

export default nextConfig;