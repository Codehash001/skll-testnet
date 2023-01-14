import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
   
    <div className='w-srceen'>
  <ThemeProvider enableSystem={true} attribute='class'>
  <Component {...pageProps} />
  </ThemeProvider>
  </div>
  
  )
}
