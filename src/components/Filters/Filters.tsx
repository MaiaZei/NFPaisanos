import Image from 'next/image';
import Fill from '../../styles/assets/Fill.svg';
import {
  OptionsContainer,
  Option,
  Dropdown,
  DropdownDiv,
  DropdownArrow,
  ArrowDiv,
  FilterButton,
  FilterButtonsContainer,
  CircleColor,
  OptionContainer,
  FiltersContainer,
  DropdownContainer,
} from './styles';
import Shape from './assets/Shape.svg';

type FiltersProps = {
  priceRange: number;
  setPriceRange: (priceRange: number) => void;
  minPrice: number;
  maxPrice: number;
  showDropDown: boolean;
  toggleDropDown: (showDropDown: boolean) => void;
  dismissHandler: (e: React.FocusEvent<HTMLButtonElement>) => void;
  orderBy: string;
  onSelectOrderBy: (orderBy: string) => void;
  children?: React.ReactNode;
  filterByType: string;
  setFilterByType: (filterByType: string) => void;
  colors: string[];
  setColorsSelected: (colors: string[]) => void;
  colorsSelected: string[];
  showDropDownColors: boolean;
  setShowDropDownColors: (showDropDownColors: boolean) => void;
  showDropDownLikes: boolean;
  setShowDropDownLikes: (showDropDownLikes: boolean) => void;
};

const Filters = (props: FiltersProps) => {
  const {
    priceRange,
    setPriceRange,
    minPrice,
    maxPrice,
    showDropDown,
    toggleDropDown,
    dismissHandler,
    orderBy,
    onSelectOrderBy,
    filterByType,
    setFilterByType,
    colors,
    setColorsSelected,
    colorsSelected,
    showDropDownColors,
    setShowDropDownColors,
    showDropDownLikes,
    setShowDropDownLikes,
  } = props;

  const changeTypeFilter = (filter: string): void => {
    setFilterByType(filter);
  };
  const coloresUnicos = [];
  colors.forEach((color) => {
    if (!coloresUnicos.includes(color)) {
      coloresUnicos.push(color);
    }
  });

  return (
    <FiltersContainer>
      <DropdownContainer>
        <DropdownDiv
          rotation={showDropDown}
          onClick={(): void => {
            toggleDropDown(!showDropDown);
            setShowDropDownColors(false);
            setShowDropDownLikes(false);
          }}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <Dropdown>{orderBy}</Dropdown>
          <ArrowDiv>
            <DropdownArrow
              src={Shape}
              rotate={
                showDropDown ? 'rotate(0deg)' : 'rotate(-90deg)'
              }
              alt="arrow"
            />
          </ArrowDiv>
        </DropdownDiv>
        <OptionsContainer show={showDropDown}>
          <Option
            onClick={(): void => {
              onSelectOrderBy('Newest');
            }}
            show={showDropDown}
          >
            <OptionContainer>Newest</OptionContainer>
          </Option>
          <Option
            onClick={(): void => {
              onSelectOrderBy('Oldest');
            }}
            show={showDropDown}
          >
            <OptionContainer>Oldest</OptionContainer>
          </Option>
        </OptionsContainer>

        <div
          style={{
            position: 'relative',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="0.001"
            name="price range"
            id="price-range"
            value={priceRange}
            onChange={(e) => {
              setPriceRange(Number(e.target.value));
            }}
            className="triangle-range-slider"
          />
          <div className="triangle-range-background-slider">
            <Image
              src={Fill}
              alt="Fill"
              width={(priceRange * 256) / maxPrice}
              height={16}
            ></Image>
          </div>
          <div className="triangle-range-left-slider"></div>
        </div>
        <label htmlFor="price range">Price Range</label>
        <DropdownDiv
          rotation={showDropDownLikes}
          onClick={(): void => {
            setShowDropDownLikes(!showDropDownLikes);
            setShowDropDownColors(false);
            toggleDropDown(false);
          }}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <Dropdown>Most Liked</Dropdown>
          <ArrowDiv>
            <DropdownArrow
              src={Shape}
              rotate={
                showDropDownLikes ? 'rotate(0deg)' : 'rotate(-90deg)'
              }
              alt="arrow"
            />
          </ArrowDiv>
        </DropdownDiv>
        <OptionsContainer show={showDropDownLikes}>
          <Option
            onClick={(): void => {
              setShowDropDownLikes(!showDropDownLikes);
            }}
            show={showDropDownLikes}
          >
            <OptionContainer>Most Liked</OptionContainer>
          </Option>
          <Option
            onClick={(): void => {
              setShowDropDownLikes(!showDropDownLikes);
            }}
            show={showDropDownLikes}
          >
            <OptionContainer>Least Liked</OptionContainer>
          </Option>
        </OptionsContainer>
        <DropdownDiv
          rotation={showDropDownColors}
          onClick={(): void => {
            setShowDropDownColors(!showDropDownColors);
            setShowDropDownLikes(false);
            toggleDropDown(false);
          }}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <Dropdown>Colores</Dropdown>
          <ArrowDiv>
            <DropdownArrow
              src={Shape}
              rotate={
                showDropDownColors ? 'rotate(0deg)' : 'rotate(-90deg)'
              }
              alt="arrow"
            />
          </ArrowDiv>
        </DropdownDiv>
        <OptionsContainer show={showDropDownColors}>
          <Option>
            <OptionContainer>All Colors</OptionContainer>
          </Option>
          {coloresUnicos.map((color) => {
            return (
              <Option
                onClick={(): void => {
                  if (colorsSelected.includes(color)) {
                    colorsSelected.splice(
                      colorsSelected.indexOf(color),
                      1
                    );
                  } else {
                    colorsSelected.push(color);
                  }

                  setColorsSelected(colorsSelected);
                  setShowDropDownColors(false);
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
      </DropdownContainer>
      <div>
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
        {props?.children}
      </div>
    </FiltersContainer>
  );
};

export default Filters;
