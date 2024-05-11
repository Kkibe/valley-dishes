import { useEffect, useState } from 'react'
import Topnav from './components/Topnav/Topnav';
import Search from './components/Search/Search';

import Dishes from './components/Dishes/Dishes';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Review from './components/Review/Review';
import Order from './components/Order/Order';
import Footer from './components/Footer/Footer';
import Flyer from './components/Flyer/Flyer';
import Single from './components/Single/Single';
import Loader from './components/Loader/Loader';
import Cart from './components/Cart/Cart';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() =>{
      setLoading(!loading);
    }, 2000);
  }, []);
  
  return (
    <>
      {
        loading && <Loader />
      }
      {
        !loading && (<>
      <Topnav />
      <Search />
      <Single />
      <Flyer />
      <Dishes />
      <Menu />
      <About />
      <Review />
      <Order />
      <Footer />
        </>)
      }
    </>
  )
}

export default App
