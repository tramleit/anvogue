import React from 'react'
import { CartProvider } from '@/context/CartContext'
import { WishlistProvider } from '@/context/WishlistContext'
import { ModalCartProvider } from '@/context/ModalCartContext'
import { ModalWishlistProvider } from '@/context/ModalWishlistContext'
import { ModalSearchProvider } from '@/context/ModalSearchContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CartProvider>
            <WishlistProvider>
                <ModalCartProvider>
                    <ModalWishlistProvider>
                        <ModalSearchProvider>
                            {children}
                        </ModalSearchProvider>
                    </ModalWishlistProvider>
                </ModalCartProvider>
            </WishlistProvider>
        </CartProvider>
    )
}

export default GlobalProvider