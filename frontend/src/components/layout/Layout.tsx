import type { ReactNode } from 'react';
import Footer from './Footer.tsx';


interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/*<Navigation />*/}
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout;