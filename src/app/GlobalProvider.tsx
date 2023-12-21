import React from 'react'
import { CartProvider } from '@/context/CartContext'
import { WishlistProvider } from '@/context/WishlistContext'
import { ModalCartProvider } from '@/context/ModalCartContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CartProvider>
            <WishlistProvider>
                <ModalCartProvider>
                    {children}
                </ModalCartProvider>
            </WishlistProvider>
        </CartProvider>
    )
}

export default GlobalProvider