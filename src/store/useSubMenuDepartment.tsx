import { useState } from 'react';

const useSubMenuDepartment = () => {
    const [openSubMenuDepartment, setOpenSubMenuDepartment] = useState(true)

    const handleSubMenuDepartment = () => {
        setOpenSubMenuDepartment((toggleOpen) => !toggleOpen)
    }
    
    return {
        openSubMenuDepartment,
        handleSubMenuDepartment,
    }
}

export default useSubMenuDepartment
