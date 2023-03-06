import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  getAunctions,
  getEthPrice,
  getPopulars,
} from '../features/aunctions';
import Aunctions from '../components/Aunctions/Aunctions';
import Popular from '../components/Popular/Popular';
import { HomeContainer, HomeWrapper } from '../styles/styles';
import Search from '../components/Search/Search';
import { aunctionsSelector } from '../features/aunctions/selectors';
import Filters from '../components/Filters/Filters';
import Logo from '../components/Navbar/assets/logo.svg';

const home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAunctions());
    dispatch(getPopulars());
    dispatch(getEthPrice());
  }, []);
  const { aunctions, popular, ethPrice, pending, error } =
    useAppSelector(aunctionsSelector);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const [showDropDownColors, setShowDropDownColors] =
    useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<string>('Newest');
  const [auctions, setAuctions] = useState([]);
  const [priceRange, setPriceRange] = useState<number>(0);
  const [colorsSelected] = useState<string[]>([]);
  const [likesSelected, setLikesSelected] =
    useState<string>('Most Liked');
  const [showDropDownLikes, setShowDropDownLikes] =
    useState<boolean>(false);
  const [filterByType, setFilterByType] =
    useState<string>('All items');
  const prices = aunctions.map((auction) =>
    parseFloat(auction.instantPrice)
  );
  useEffect(() => {
    setAuctions([...aunctions]);
  }, [aunctions]);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  useEffect(() => {
    setPriceRange(maxPrice);
  }, [maxPrice]);
  const onSelectOrderBy = (orderBy: string): void => {
    setShowDropDown(!showDropDown);
    setOrderBy(orderBy);
  };

  const toggleDropDown = ({
    showDropDown,
    showDropDownColors,
    showDropDownLikes,
  }): void => {
    setShowDropDown(showDropDown);
    setShowDropDownColors(showDropDownColors);
    setShowDropDownLikes(showDropDownLikes);
  };

  const setOrderLikes = (likesSelected: string): void => {
    setLikesSelected(likesSelected);
    setShowDropDownLikes(!showDropDownLikes);
  };

  return (
    <HomeContainer>
      <meta name="black"></meta>
      <link rel="apple-touch-icon" href={Logo}></link>
      {auctions.length !== 0 && popular.length !== 0 ? (
        <HomeWrapper>
          <Popular
            popular={[...popular]}
            ethPrice={ethPrice.toString()}
          />
          <Search></Search>
          <div style={{ display: 'flex' }}>
            <Filters
              maxPrice={maxPrice}
              minPrice={minPrice}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              showDropDown={showDropDown}
              toggleDropDown={toggleDropDown}
              onSelectOrderBy={onSelectOrderBy}
              orderBy={orderBy}
              filterByType={filterByType}
              setFilterByType={setFilterByType}
              colors={aunctions.map((auction) => {
                return auction.attributes.color;
              })}
              colorsSelected={colorsSelected}
              showDropDownColors={showDropDownColors}
              showDropDownLikes={showDropDownLikes}
              likesSelected={likesSelected}
              setLikesSelected={setOrderLikes}
            >
              <Aunctions
                aunctions={[...aunctions]}
                sortBy={orderBy}
                priceRange={priceRange}
                filterByType={filterByType}
              />
            </Filters>
          </div>
        </HomeWrapper>
      ) : (
        <p>Loading...</p>
      )}
    </HomeContainer>
  );
};

export default home;
