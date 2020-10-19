import React, { PureComponent } from "react";
import "./FilterItemStyle.css";
import FilterButton from "../FilterButton/FilterButton";
export default class FilterItem extends PureComponent {
  render() {
    const { label, itemKey, options, onFilterSelect, selectedValue } = this.props.model;
    console.log("coming here", this.props);
    return (
      <div>
        <div>
          <p>{label}</p>
        </div>
        <div>
          {options.map(({ label, value }) => (
            <FilterButton itemKey ={itemKey} selected={selectedValue === value} label={label} value={value} onClick={onFilterSelect} />
          ))}
        </div>
      </div>
    );
  }
}
