import Image from 'next/image';
import DropdownFilter from './DropdownFilter';
import {
  ArrowDiv,
  CircleColor,
  DropdownArrow,
  DropdownDiv,
  FilterButton,
  FilterButtonsContainer,
  FiltersContainer,
  Option,
  OptionContainer,
  OptionsContainer,
  Dropdown,
  TopFiltersContainer,
  BottomFiltersContainer,
  RangeOutput,
  RangeOutputArrow,
} from './styles';
import Fill from '../../styles/assets/Fill.svg';
import Shape from './assets/Shape.svg';
import { relative } from 'path';

type FiltersProps = {
  priceRange: number;
  setPriceRange: (priceRange: number) => void;
  minPrice: number;
  maxPrice: number;
  showDropDown: boolean;
  toggleDropDown: ({
    showDropDown,
    showDropDownColors,
    showDropDownLikes,
  }) => void;
  orderBy: string;
  onSelectOrderBy: (orderBy: string) => void;
  children?: React.ReactNode;
  filterByType: string;
  setFilterByType: (filterByType: string) => void;
  colors: string[];
  colorsSelected: string[];
  showDropDownColors: boolean;
  showDropDownLikes: boolean;
  likesSelected: string;
  setLikesSelected: (likesSelected: string) => void;
};

const Filters = (props: FiltersProps) => {
  const {
    priceRange,
    setPriceRange,
    minPrice,
    maxPrice,
    showDropDown,
    toggleDropDown,
    orderBy,
    onSelectOrderBy,
    filterByType,
    setFilterByType,
    colors,
    colorsSelected,
    showDropDownColors,
    showDropDownLikes,
    likesSelected,
    setLikesSelected,
  } = props;

  const changeTypeFilter = (filter: string): void => {
    setFilterByType(filter);
  };
  const uniqueColors = [colors[0]];
  colors.forEach((color) => {
    if (!uniqueColors.includes(color)) {
      uniqueColors.push(color);
    }
  });

  return (
    <FiltersContainer>
      <TopFiltersContainer>
        <DropdownFilter
          options={['Newest', 'Oldest']}
          toggleDropDown={toggleDropDown}
          onChange={onSelectOrderBy}
          selected={orderBy}
          showDropDown={showDropDown}
          dropdownId="order-by"
          id={'order-by'}
        />
        <FilterButtonsContainer>
          <FilterButton
            selected={filterByType == 'All items'}
            onClick={() => changeTypeFilter('All items')}
          >
            All items
          </FilterButton>
          <FilterButton
            selected={filterByType == 'Art'}
            onClick={() => changeTypeFilter('Art')}
          >
            Art
          </FilterButton>
          <FilterButton
            selected={filterByType == 'Photography'}
            onClick={() => changeTypeFilter('Photography')}
          >
            Photography
          </FilterButton>
        </FilterButtonsContainer>
      </TopFiltersContainer>
      <BottomFiltersContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          <label
            htmlFor="price-range"
            style={{
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '12px',
              lineHeight: '12px',
              display: 'flex',
              alignItems: 'center',
              textTransform: 'uppercase',
              color: '#B1B5C4',
            }}
          >
            Price Range
          </label>

          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '256px',
              borderBottom: '1px solid #2C2C2E',
              marginBottom: '10px',
            }}
          >
            <div>
              <RangeOutput
                htmlFor="price-range"
                style={{
                  left: `calc(${
                    ((priceRange - minPrice) * 100) /
                    (maxPrice - minPrice)
                  }% + (${
                    -20 -
                    (((priceRange - minPrice) * 100) /
                      (maxPrice - minPrice)) *
                      0.2
                  }px))`,
                }}
              >
                {priceRange.toFixed(2)} ETH
              </RangeOutput>
              <RangeOutputArrow
                style={{
                  left: `calc(${
                    ((priceRange - minPrice) * 100) /
                    (maxPrice - minPrice)
                  }% + (${
                    -10 -
                    (((priceRange - minPrice) * 100) /
                      (maxPrice - minPrice)) *
                      0.2
                  }px))`,
                }}
              />
            </div>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              step="0.01"
              name="price-range"
              id="price-range"
              value={priceRange}
              onChange={(e) => {
                setPriceRange(Number(e.target.value));
              }}
              className="triangle-range-slider"
              alt="Input range"
            />
            <div className="triangle-range-background-slider">
              <Image
                src={Fill}
                alt="Range slider"
                width={(priceRange * 256) / maxPrice}
                height={16}
              ></Image>
            </div>
            <div className="triangle-range-left-slider"></div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px 0',
              }}
            >
              <p>{minPrice} ETH</p>
              <p>{maxPrice} ETH</p>
            </div>
          </div>
          {
            //The likes dropdown does not filter
          }
          <label
            htmlFor="likes"
            style={{
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '12px',
              lineHeight: '12px',
              display: 'flex',
              alignItems: 'center',
              textTransform: 'uppercase',
              color: '#B1B5C4',
              margin: '20px 0 10px',
            }}
          >
            Likes
          </label>
          <DropdownFilter
            options={['Most Liked', 'Least Liked']}
            toggleDropDown={toggleDropDown}
            onChange={setLikesSelected}
            selected={likesSelected}
            showDropDown={showDropDownLikes}
            dropdownId="likes"
            id="likes"
          />
          <div>
            {
              //The colors dropdown does not filter
            }
            <label
              htmlFor="colors"
              style={{
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '12px',
                lineHeight: '12px',
                display: 'flex',
                alignItems: 'center',
                textTransform: 'uppercase',
                color: '#B1B5C4',
                margin: '20px 0 10px',
              }}
            >
              Open
            </label>
            <DropdownDiv
              rotation={showDropDownColors}
              onClick={(): void => {
                toggleDropDown({
                  showDropDown: false,
                  showDropDownColors: !showDropDownColors,
                  showDropDownLikes: false,
                });
              }}
              id="colors"
            >
              <Dropdown>Colores</Dropdown>
              <ArrowDiv>
                <DropdownArrow
                  src={Shape}
                  rotate={
                    showDropDownColors
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)'
                  }
                  width={10}
                  height={10}
                  alt="arrow"
                />
              </ArrowDiv>
            </DropdownDiv>
            <OptionsContainer show={showDropDownColors}>
              <Option>
                <OptionContainer>All Colors</OptionContainer>
              </Option>
              {uniqueColors.map((color, index) => {
                return (
                  <Option
                    key={index}
                    onClick={(): void => {
                      toggleDropDown({
                        showDropDown: false,
                        showDropDownColors: false,
                        showDropDownLikes: false,
                      });
                    }}
                    show={showDropDownColors}
                  >
                    <OptionContainer
                      selected={colorsSelected.includes(color)}
                    >
                      <CircleColor color={color} />
                      {color}
                    </OptionContainer>
                  </Option>
                );
              })}
            </OptionsContainer>
          </div>
        </div>
        <div>{props.children && props.children}</div>
      </BottomFiltersContainer>
    </FiltersContainer>
  );
};

export default Filters;
