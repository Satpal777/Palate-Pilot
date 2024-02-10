import React from 'react'


const Chip = ({ title, children, selectedBadge, active }) => {

    return (
        <button className={active ? 'chip active' : 'chip '} onClick={() => selectedBadge.setBadge(selectedBadge.id)}>{children}{title}
        </button>
    )
};

export default Chip