import '@/styles/globals.css'
import Provider from '@/components/context'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='h-full text-white'>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
} 
