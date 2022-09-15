// https: //www.kindacode.com/article/how-to-correctly-use-bootstrap-5-in-next-js/
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import { useEffect } from 'react'

function Application({
  Component,
  pageProps
}) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])

  return <Component {
    ...pageProps
  }
  />
}

export default Application