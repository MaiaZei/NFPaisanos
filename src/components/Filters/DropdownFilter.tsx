import {
  ArrowDiv,
  DropdownArrow,
  DropdownDiv,
  Option,
  OptionContainer,
  OptionsContainer,
  Dropdown,
} from './styles';
import Shape from './assets/Shape.svg';

const DropdownFilter = ({
  options,
  showDropDown,
  onChange,
  toggleDropDown,
  selected,
  dropdownId,
}) => {
  return (
    <div>
      <DropdownDiv
        rotation={showDropDown}
        onClick={(): void => {
          toggleDropDown({
            showDropDown:
              dropdownId === 'order-by' ? !showDropDown : false,
            showDropDownColors:
              dropdownId === 'colors' ? !showDropDown : false,
            showDropDownLikes:
              dropdownId === 'likes' ? !showDropDown : false,
          });
        }}
      >
        <Dropdown>{selected}</Dropdown>
        <ArrowDiv>
          <DropdownArrow
            src={Shape}
            width={10}
            height={10}
            rotate={showDropDown ? 'rotate(0deg)' : 'rotate(-90deg)'}
            alt="arrow"
          />
        </ArrowDiv>
      </DropdownDiv>
      <OptionsContainer show={showDropDown}>
        {options.map((option) => {
          return (
            <Option
              key={option}
              onClick={(): void => {
                onChange(option);
              }}
              show={showDropDown}
            >
              <OptionContainer>{option}</OptionContainer>
            </Option>
          );
        })}
      </OptionsContainer>
    </div>
  );
};

export default DropdownFilter;
