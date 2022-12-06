import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "swiper/css/bundle";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
