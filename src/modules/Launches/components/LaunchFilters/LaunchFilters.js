import React, { PureComponent } from "react";
import "./LaunchFilters.style.css";
import FilterItem from "../../../../components/FilterItem/FilterItem";

export default class LaunchFilters extends PureComponent {
  render() {
    const { model } = this.props;
    return (
      <div>
        <div>
          <FilterItem model={model.year}/>
        </div>
        <div>
          <FilterItem model={model.launch} />
        </div>
        <div>
          <FilterItem model={model.landing} />
        </div>
      </div>
    );
  }
}
