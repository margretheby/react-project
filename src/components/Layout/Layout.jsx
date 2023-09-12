import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'

function Layout() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }

export default Layout;