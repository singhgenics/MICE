// Matches next.config.mjs: GitHub Pages serves this repo under /MICE, but
// next/image's static-export output doesn't automatically prefix local
// public/ image src attributes with basePath (unlike _next/static assets),
// so plain <img> src values built from public/ need this applied by hand.
export const basePath = process.env.NODE_ENV === "production" ? "/MICE" : "";
