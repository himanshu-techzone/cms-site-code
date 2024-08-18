import '../styles/globals.css'
import '../styles/datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../public/js/custom.js'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  useEffect(() => {
    if (window) { 
        
          localStorage.setItem('it',document.referrer);
        // let getvalue = localStorage.getItem('it')?localStorage.getItem('it'):localStorage.setItem('it',document.referrer);
      }
}, []);
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
 