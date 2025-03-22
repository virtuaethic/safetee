import localFont from 'next/font/local'

export const bertholdAkzidenz = localFont({
  src: [
    {
      path: '../public/fonts/Berthold-Akzidenz-Grotesk-Extended.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Berthold-Akzidenz-Grotesk-Extended.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Berthold-Akzidenz-Grotesk-Extended.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-berthold-akzidenz',
  display: 'swap',
})

export const avantgarde = localFont({
  src: [
    {
      path: '../public/fonts/Avantgarde.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avantgarde.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avantgarde.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avantgarde.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avantgarde-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avantgarde-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avantgarde-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avantgarde-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-avantgarde',
  display: 'swap',
}) 