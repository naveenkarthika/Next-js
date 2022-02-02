import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('Run both server and client')
  return <Component {...pageProps} />
}

export default MyApp
