import React, { Component } from "react";
import dataList from './data/topCollegesList.json';
import "../css/topcolleges.css";

import TopCollegesParent from "../components/TopColleges/TopCollegesParent";
//import ListOfCollegesParent from "../components/ListOfColleges/ListOfCollegesParent";

class CollegeData extends Component {
  //State will contain an array of colleges
  state = {
    colleges: {},
  };
  componentDidMount() {
    this.setState({ colleges:{...dataList[0]} });
  }
  render() {
    return (
      <div>
        <TopCollegesParent collegeList={this.state.colleges} />
      </div>
    );
  }
}

export default CollegeData;
