import React from 'react';
import Link from 'next/link';
import { FaShoppingCart} from  'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Dress World</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/Dresses">Dresses</Link>
                <Link href="/contact">Contact</Link>
                <FaShoppingCart color="white" size={24} />
            </nav>

        </header>
    )
}
export default Header