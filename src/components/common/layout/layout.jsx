import { memo } from 'react'
import Sidebar from '../sidebar/sidebar'
import "./layout.css"

const Layout = memo(function Layout({ children }) {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='container'>
        {children}
        <footer className='footer'>
          <ul>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </footer>
      </div>
    </div>
  )
})

export default Layout