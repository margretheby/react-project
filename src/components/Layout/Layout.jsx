import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'

function Layout() {
    return (
      <div className='flex flex-col justify-center items-center max-w-full'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }

export default Layout;