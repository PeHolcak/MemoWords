import * as React from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

import * as S from './styled';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search query:', searchQuery);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <S.StyledSearchBar
        variant="outlined"
        fullWidth
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearchClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{ mb: 2 }}
      />
    </motion.div>
  );
};

export default SearchBar;
