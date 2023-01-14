import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
   
    <div>
  <ThemeProvider enableSystem={true} attribute='class'>
  <Component {...pageProps} />
  </ThemeProvider>
  </div>
  
  )
}
