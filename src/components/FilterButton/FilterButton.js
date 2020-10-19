import React, { PureComponent } from "react";
import "./FilterButtonStyle";
export default class FilterButton extends PureComponent {
  handleOnClick = () => {
    const { itemKey, value, onClick, selected } = this.props;
    onClick(itemKey, selected ? "" : value);
  };

  render() {
    const { label } = this.props;

    return (
      <div onClick={this.handleOnClick}>
        <p>{label}</p>
      </div>
    );
  }
}
