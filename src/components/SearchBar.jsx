import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '4px', padding: '0 8px' }}>
      <InputBase
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ color: 'white', flex: 1 }}
      />
      <IconButton onClick={handleSearch} sx={{ color: 'white' }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;