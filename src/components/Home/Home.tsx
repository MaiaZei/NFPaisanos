import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAunctions,
  getEthPrice,
  getPopulars,
} from '../../features/aunctions';
import { aunctionsSelector } from '../../features/aunctions/selectors';
import Aunctions from '../Aunctions/Aunctions';
import Filters from '../Filters/Filters';
import Popular from '../Popular/Popular';
import Search from '../Search/Search';
import { HomeContainer, HomeWrapper, Loading } from './styles';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopulars());
    dispatch(getAunctions());
    dispatch(getEthPrice());
  }, [dispatch]);
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
        <meta name="description" content="NFPaisanos Challenge" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Maia" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <HomeContainer lang="en">
        {popular && ethPrice && aunctions ? (
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
          <Loading> Loading...</Loading>
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
