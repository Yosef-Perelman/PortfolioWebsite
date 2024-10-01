import React from 'react'

const TabButton = ({ active, selectTab, children }) => {

    const buttonClasses = active ? 'border-b border-purple-500' : '';
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton