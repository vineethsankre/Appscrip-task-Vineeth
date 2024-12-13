import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import './index.css';

const FiltersGroup = (props) => {
  const { isIdeal, changeIdeal } = props;

  return (
    <div className="filters-container display-large">
      <div className="checkbox-container">
        <input type="checkbox" className="checkbox" id="customizable-checkbox" />
        <label className="checkbox-label" htmlFor="customizable-checkbox">CUSTOMIZABLE</label>
      </div>
      <hr className="filter-separator" />

      {renderSection("IDEAL FOR", isIdeal, changeIdeal)}
      {isIdeal && renderIdealOptions()}

      {renderSection("OCCASION")}
      {renderSection("WORK")}
      {renderSection("FABRIC")}
      {renderSection("SEGMENT")}
      {renderSection("SUITABLE FOR")}
      {renderSection("RAW MATERIALS")}
      {renderSection("PATTERN")}
    </div>
  );
};

const renderSection = (title, isIdeal, onClickChange) => (
  <>
    <div className="section-header">
      <h1 className="section-title">{title}</h1>
      {isIdeal !== undefined && (
        <span onClick={onClickChange}>
          {isIdeal ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      )}
    </div>
    <p className="section-content">All</p>
    <hr className="filter-separator" />
  </>
);

const renderIdealOptions = () => (
  <div className="ideal-options-container">
    <p className="ideal-option">Unselect all</p>
    {["Men", "Women", "Baby & Kids"].map((label, index) => (
      <div key={index} className="checkbox-container">
        <input type="checkbox" className="checkbox" id={`ideal-checkbox-${index + 1}`} />
        <label className="checkbox-label" htmlFor={`ideal-checkbox-${index + 1}`}>{label}</label>
      </div>
    ))}
  </div>
);

export default FiltersGroup;
