/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Keep the dev file-watcher from picking up local tooling artifacts
  // (e.g. Playwright MCP downloads/logs written into the project tree),
  // which otherwise triggers an endless recompile loop.
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/node_modules/**", "**/.git/**", "**/.next/**", "**/.playwright-mcp/**"],
    }
    return config
  },
}

export default nextConfig
