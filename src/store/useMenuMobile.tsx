import { useState, useEffect, useCallback } from 'react';

const useMenuMobile = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)

    const handleMenuMobile = () => {
        setOpenMenuMobile((toggleOpen) => !toggleOpen)
    }

    const handleClickOutsideMenuMobile = useCallback((event: Event) => {
        const targetElement = event.target as Element;

        if (openMenuMobile && !targetElement.closest('#menu-mobile')) {
            setOpenMenuMobile(false)
        }
    }, [openMenuMobile]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideMenuMobile);

        return () => {
            document.removeEventListener('click', handleClickOutsideMenuMobile);
        };
    }, [handleClickOutsideMenuMobile, openMenuMobile])

    return {
        openMenuMobile,
        handleMenuMobile,
    }
}

export default useMenuMobile
