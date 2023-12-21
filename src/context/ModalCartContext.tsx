'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalCartContextProps {
    children: ReactNode;
}

interface ModalCartContextValue {
    isModalOpen: boolean;
    openModalCart: () => void;
    closeModalCart: () => void;
}

const ModalCartContext = createContext<ModalCartContextValue | undefined>(undefined);

export const useModalCartContext = (): ModalCartContextValue => {
    const context = useContext(ModalCartContext);
    if (!context) {
        throw new Error('useModalCartContext must be used within a ModalCartProvider');
    }
    return context;
};

export const ModalCartProvider: React.FC<ModalCartContextProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalCart = () => {
        setIsModalOpen(true);
    };

    const closeModalCart = () => {
        setIsModalOpen(false);
    };

    const contextValue: ModalCartContextValue = {
        isModalOpen,
        openModalCart,
        closeModalCart,
    };

    return (
        <ModalCartContext.Provider value={contextValue}>
            {children}
        </ModalCartContext.Provider>
    );
};
