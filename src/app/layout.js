
import './globals.css'

//UI
import Navbar from './components/UI/navbar';
import Banner from "./components/UI/banner";
import Footer from './components/UI/footer';

export const metadata = {
  title: 'CREAR TU WEB - CuanticoIT',
  description: 'En CuanticoIT te hacemos generar mas dinero aprovechando el trafico de internet.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
   
  
      <body className='bg-white'>

      <Navbar></Navbar>

        {children}

        <Footer></Footer>

        </body>

    </html>

  )
}
