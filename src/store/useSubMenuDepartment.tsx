import { useState, useEffect } from 'react';

const useSubMenuDepartment = () => {
    const [openSubMenuDepartment, setOpenSubMenuDepartment] = useState(true)

    const handleSubMenuDepartment = () => {
        setOpenSubMenuDepartment((toggleOpen) => !toggleOpen)
    }

    // Check if the click event occurs outside the popup.
    const handleClickOutsideSubMenuDepartment: EventListener = (event) => {
        // Cast event.target to Element to use the closest method.
        const targetElement = event.target as Element;

        if (openSubMenuDepartment && !targetElement.closest('.sub-menu-department')) {
            setOpenSubMenuDepartment(false)
        }
    }

    useEffect(() => {
        // Add a global click event to track clicks outside the popup.
        document.addEventListener('click', handleClickOutsideSubMenuDepartment);

        // Cleanup to avoid memory leaks.
        return () => {
            document.removeEventListener('click', handleClickOutsideSubMenuDepartment);
        };
    }, [openSubMenuDepartment])
    
    return {
        openSubMenuDepartment,
        handleSubMenuDepartment,
    }
}

export default useSubMenuDepartment
