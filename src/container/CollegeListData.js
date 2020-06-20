import React, { Component } from "react";
import dataList from './data/collegesList.json';
import ListOfCollegesParent from "../components/ListOfColleges/ListOfCollegesParent";

class CollegeListData extends Component {
  state = {
    colleges: {},
  };

  componentDidMount() {
    this.setState({
      colleges: {'colleges':dataList}
    })
  }
  
  render() {
    return (
      <div>
        <ListOfCollegesParent collegeList={this.state.colleges} />
      </div>
    );
  }
}

export default CollegeListData;
