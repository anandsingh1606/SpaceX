import React, { Component } from "react";
import { connect } from "react-redux";
import { getLaunches } from "./Launches.action";
import LaunchFilters from "./components/LaunchFilters/LaunchFilters";
import LaunchModel from "./Launches.model";

class LauncesContainer extends Component {
  constructor() {
    super();
    this.state = {
      filterModel : LaunchModel
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.props.getLaunches("");
  }

  handleFilterChange(itemValue, value) {
    console.log("itemValue, value",itemValue, value);
  }

  render() {
    const { list } = this.props;
    const {filterModel} = this.state;
    if (!list) {
      return null;
    }
    return (
      <div>
        <LaunchFilters model={filterModel} onFilterChange={this.handleFilterChange}/>
        <ul>
          {list.map((launce) => (
            <li>{launce.mission_name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const stateToProps = (state) => ({
  list: state.launces.list,
});
const dispatchToProps = (dispatch) => ({
  getLaunches: (filters) => dispatch(getLaunches(filters)),
});

export default connect(stateToProps, dispatchToProps)(LauncesContainer);
