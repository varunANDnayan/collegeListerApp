import React, { Component } from "react";
import axios from "axios";

import ListOfCollegesParent from "../components/ListOfColleges/ListOfCollegesParent";

class CollegeListData extends Component {
  state = {
    colleges: {},
  };

  componentDidMount() {
    axios.get("../json/collegeList.json").then((res) => {
      console.log("FETCHED");
      // console.log("Fetch", res.data);
      this.setState({
        colleges: res.data,
      });
    });

    console.log("state", this.state.colleges);
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
