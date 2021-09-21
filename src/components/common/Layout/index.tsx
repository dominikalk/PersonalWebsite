import React from 'react';
import './styles.scss'

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return(
        <div className='content'>
            {/* Header */}
            <main className='wrapper'>
                {children}
            </main>
             {/* Footer */}
        </div>
    );
}

export default Layout;