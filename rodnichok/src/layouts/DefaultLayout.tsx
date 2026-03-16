import { Outlet } from 'react-router'
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'

export default function DefaultLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}