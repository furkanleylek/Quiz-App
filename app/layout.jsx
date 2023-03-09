import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='h-screen w-full m-0 p-0 border-box bg-slate-900 text-white'>
        {children}
      </body>
    </html>
  )
} 
