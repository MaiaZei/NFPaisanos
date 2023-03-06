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
import Head from 'next/head';

const home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopulars());
    dispatch(getAunctions());
    dispatch(getEthPrice());
  }, []);
  const { aunctions, popular, ethPrice } =
    useAppSelector(aunctionsSelector);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const [showDropDownColors, setShowDropDownColors] =
    useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<string>('Newest');
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
    <>
      <Head>
        <title>NFPaisanosMaia</title>
        <meta name="black"></meta>
        <link rel="apple-touch-icon" href={'hola'}></link>
      </Head>
      <HomeContainer>
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
      </HomeContainer>
    </>
  );
};

export default home;
