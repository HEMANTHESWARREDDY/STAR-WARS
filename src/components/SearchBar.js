import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; 

const SearchBar = ({ value, onChange }) => {
    const [focused, setFocused] = useState(false); 

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
        <div className={`search-bar ${focused ? 'focused' : ''}`}>
            <input
                type="text"
                placeholder="Search for a planet..."
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <FaSearch className="search-icon" /> {/* Search icon */}
        </div>
    );
};

export default SearchBar;
