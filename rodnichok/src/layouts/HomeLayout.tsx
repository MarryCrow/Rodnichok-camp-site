import { Outlet } from 'react-router'
import HomeHeader from '../components/HomeHeader.tsx'
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'

export default function HomeLayout() {
    return (
        <>
            <HomeHeader />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}