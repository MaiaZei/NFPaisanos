import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  aunctionsSelector,
  getAunctions,
  getEthPrice,
  getPopulars,
} from '../features/aunctions';
import Aunctions from '../components/Aunctions/Aunctions';
import Popular from '../components/Popular/Popular';
import { HomeContainer, HomeWrapper } from '../styles/styles';
import Filters from '../components/Filters/Filters';
import { AunctionsContainer } from './styles';

const home: React.FC = () => {
  const dispatch = useAppDispatch();
  //useEffect(() => {
  //  dispatch(getAunctions());
  //}, []);
  useEffect(() => {
    dispatch(getAunctions());
    dispatch(getPopulars());
    dispatch(getEthPrice());
  }, []);
  const { aunctions, popular, ethPrice, pending, error } =
    useAppSelector(aunctionsSelector);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<string>('Newest');
  const [auctions, setAuctions] = useState([]);
  const [priceRange, setPriceRange] = useState<number>(0);
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

  const toggleDropDown = (): void => {
    setShowDropDown(!showDropDown);
  };
  const dismissHandler = (
    event: React.FocusEvent<HTMLButtonElement>
  ): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  return (
    <HomeContainer>
      {auctions.length !== 0 && (
        <HomeWrapper>
          <Popular
            popular={[...popular]}
            ethPrice={ethPrice.toString()}
          />
          <AunctionsContainer>
            <Filters
              maxPrice={maxPrice}
              minPrice={minPrice}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              showDropDown={showDropDown}
              toggleDropDown={toggleDropDown}
              dismissHandler={dismissHandler}
              onSelectOrderBy={onSelectOrderBy}
              orderBy={orderBy}
            ></Filters>
            <Aunctions
              aunctions={[...aunctions]}
              sortBy={orderBy}
              priceRange={priceRange}
              filterByType="Art"
            />
          </AunctionsContainer>
        </HomeWrapper>
      )}
    </HomeContainer>
  );
};

export default home;
