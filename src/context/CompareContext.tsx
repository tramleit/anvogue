'use client'

// CompareContext.tsx
import React, { createContext, useContext, useState, useReducer, useEffect } from 'react';
import { ProductType } from '@/type/ProductType';

interface CompareItem extends ProductType {
}

interface CompareState {
    compareArray: CompareItem[]
}

type CompareAction =
    | { type: 'ADD_TO_WISHLIST'; payload: ProductType }
    | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
    | { type: 'LOAD_WISHLIST'; payload: CompareItem[] }

interface CompareContextProps {
    compareState: CompareState;
    addToCompare: (item: ProductType) => void;
    removeFromCompare: (itemId: string) => void;
}

const CompareContext = createContext<CompareContextProps | undefined>(undefined);

const CompareReducer = (state: CompareState, action: CompareAction): CompareState => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            const newItem: CompareItem = { ...action.payload };
            return {
                ...state,
                compareArray: [...state.compareArray, newItem],
            };
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                compareArray: state.compareArray.filter((item) => item.id !== action.payload),
            };
        case 'LOAD_WISHLIST':
            return {
                ...state,
                compareArray: action.payload,
            };
        default:
            return state;
    }
};

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [compareState, dispatch] = useReducer(CompareReducer, { compareArray: [] });

    const addToCompare = (item: ProductType) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
    };

    const removeFromCompare = (itemId: string) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: itemId });
    };

    return (
        <CompareContext.Provider value={{ compareState, addToCompare, removeFromCompare }}>
            {children}
        </CompareContext.Provider>
    );
};

export const useCompare = () => {
    const context = useContext(CompareContext);
    if (!context) {
        throw new Error('useCompare must be used within a CompareProvider');
    }
    return context;
};
