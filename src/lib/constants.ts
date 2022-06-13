export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof document !== 'undefined'
export const isServer = !isClient

export enum BREAKPOINT {
  mobile = 672,
  tablet = 990,
  desktop = 1296
}

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error(
    `Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.
    
1. Create .env file at the root of your project.
2. Add NEXT_PUBLIC_SITE_URL=http://localhost:3000
3. For other environments (like production), make sure you set the correct URL.
    `
  )
}

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL)
export const siteOrigin = siteURL.origin

// we like putting this in the JavaScript console,
// as our signature.
// you can delete it if not needed.
export const basementLog = `

   __  ___      ___       __    __   _______  .______     __  
  |  |/  /     /   \\     |  |  |  | |       \\ |   _  \\   |  | 
  |  '  /     /  ^  \\    |  |__|  | |  .--.  ||  |_)  |  |  | 
  |    <     /  /_\\  \\   |   __   | |  |  |  ||      /   |  | 
  |  .  \\   /  _____  \\  |  |  |  | |  '--'  ||  |\\  \\---|  | 
  |__|\\__\\ /__/     \\__\\ |__|  |__| |_______/ | _| \\.____|__| 
                                                                                
  On my way to the basement. https://basement.studio
`

export const defaultMeta = {
  title: 'Basement Supply',
  description: `Landing page for e-commerce site — Basement Challenge made by Justkahdri.`,
  ogImage: `${siteOrigin}/og.png`,
  twitter: {
    handle: '@justkahdri',
    site: '@basementstudio'
  }
}

export const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID
