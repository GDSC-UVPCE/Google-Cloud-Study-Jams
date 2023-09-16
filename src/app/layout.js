import './globals.css'
import Script from 'next/script';
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "GDSC UVPCE GCCP Leaderboard",
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


}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head>
        <script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <Script>
          {`
          const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
          `}
        </Script>
      </body>
    </html>
  )
}
