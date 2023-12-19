import React from 'react'
import { CartProvider } from '@/context/CartContext'
import { WishlistProvider } from '@/context/WishlistContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CartProvider>
            <WishlistProvider>
                {children}
            </WishlistProvider>
        </CartProvider>
    )
}

export default GlobalProvider