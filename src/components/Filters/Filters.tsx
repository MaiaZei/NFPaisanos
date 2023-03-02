import Image from 'next/image';
import Fill from '../../styles/assets/Fill.svg';
import {
  OptionsContainer,
  Option,
  Dropdown,
  DropdownDiv,
  DropdownArrow,
  ArrowDiv,
} from './styles';
import Shape from './assets/Shape.svg';

type FiltersProps = {
  priceRange: number;
  setPriceRange: (priceRange: number) => void;
  minPrice: number;
  maxPrice: number;
  showDropDown: boolean;
  toggleDropDown: () => void;
  dismissHandler: (e: React.FocusEvent<HTMLButtonElement>) => void;
  orderBy: string;
  onSelectOrderBy: (orderBy: string) => void;
  children?: React.ReactNode;
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
  } = props;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '256px' }}>
        <DropdownDiv
          rotation={showDropDown}
          onClick={(): void => toggleDropDown()}
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
            Newest
          </Option>
          <Option
            onClick={(): void => {
              onSelectOrderBy('Oldest');
            }}
            show={showDropDown}
          >
            Oldest
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
          rotation={showDropDown}
          onClick={(): void => toggleDropDown()}
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
        <OptionsContainer show={false}>
          <Option
            onClick={(): void => {
              onSelectOrderBy('Newest');
            }}
            show={showDropDown}
          >
            Most Liked
          </Option>
          <Option
            onClick={(): void => {
              onSelectOrderBy('Oldest');
            }}
            show={showDropDown}
          >
            Least Liked
          </Option>
        </OptionsContainer>
        <DropdownDiv
          rotation={showDropDown}
          onClick={(): void => toggleDropDown()}
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
        <OptionsContainer show={false}>
          <Option
            onClick={(): void => {
              onSelectOrderBy('Newest');
            }}
            show={showDropDown}
          >
            Colors
          </Option>
          <Option
            onClick={(): void => {
              onSelectOrderBy('Oldest');
            }}
            show={showDropDown}
          >
            Colors
          </Option>
        </OptionsContainer>
      </div>
      <div style={{ height: 'fit-content' }}>
        <p>filter by type</p>
        {props?.children}
      </div>
    </div>
  );
};

export default Filters;
