import { Icon, SearchContainer, SearchInput } from './styles';
import SearchIcon from './assets/SearchIcon.svg';
import { motion } from 'framer-motion';

const Search = () => {
  return (
    //The search bar does not filter the items
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Type to find something nice..."
      />
      <motion.div
        whileHover={{
          scale: 1.1,
          translateX: '1px',
          translateY: '1px',
          translateZ: '1px',
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon src={SearchIcon} width={40} height={40} alt="search" />
      </motion.div>
    </SearchContainer>
  );
};

export default Search;
