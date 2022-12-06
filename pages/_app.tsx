import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "swiper/css/bundle";
import "../styles/globals.css"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
