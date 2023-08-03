import './globals.css'
import './animation.scss'
import { Raleway } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Animation from '@/components/animation/animation'
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'IEEE CS GECI'
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <div className='overflow-hidden w-screen absolute'>
          <Animation/>
          <div className='bg-[rgba(248,252,251,0.7)] fixed w-full h-full z-[-2]'></div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html >
  )
}
