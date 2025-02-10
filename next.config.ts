/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  }
};

export default nextConfig;

//,pageExtensions: ['page.tsx', 'page.ts'],