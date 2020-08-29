import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

const SearchBar = ({ value, handleChange }) => {

    // translations
    const { t } = useTranslation();

    return (
        <div className="wrap_search">
            <div className="search">
                <input className="searchTerm" placeholder={t('Search.placeholder')} value={value} onChange={handleChange} />
                <div class="searchImg">
                <span role="img" aria-label="magnifying glass">🔍</span>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;