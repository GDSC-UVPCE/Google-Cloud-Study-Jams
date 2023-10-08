import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "GDSC UVPCE",
  image: "https://raw.githubusercontent.com/fenilmodi00/GCCP-Jams/main/public/assets/Screenshot%202023-09-12%20191408.png",
  type: "website",
  description: "This is the leaderboard for the GDSC UVPCE GCCP Jams.",
  keywords: ["gccp", "jams", "uvpce", "gdscuvpce"],
  robots: "index,follow",

  // "og:title": "GDSC UVPCE GCCP Leaderboard",
  // "og:image": "https://raw.githubusercontent.com/fenilmodi00/GCCP-Jams/main/public/assets/Screenshot%202023-09-12%20191408.png",
  // "og:description": "This is the leaderboard for the GDSC UVPCE GCCP Jams.",
  // "twitter:card": "summary_large_image",
  // "twitter:title": "GDSC UVPCE GCCP Leaderboard",
  // "twitter:description": "This is the leaderboard for the GDSC UVPCE GCCP Jams.",
  // "twitter:image": "https://raw.githubusercontent.com/fenilmodi00/GCCP-Jams/main/public/assets/Screenshot%202023-09-12%20191408.png",
  // "twitter:site": "@gdscuvpce"
  //


}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head>
        
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        
      </body>
    </html>
  )
}
