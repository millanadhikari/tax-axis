import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {Provider, session} from 'next-auth/client'
import BottomNav from '../components/taxreturn/ui/bottomNav'


function MyApp({ Component, pageProps }) {
  
  
  return (
    <div>
      <Provider session={pageProps.session}>
    <Navbar user={session.user}/> 
  <Component {...pageProps} />
  <BottomNav session={session}/>
  </Provider>
  </div>
  )
}

export default MyApp
