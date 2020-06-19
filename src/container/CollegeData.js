import React, { Component } from "react";
import axios from "axios";
import "../css/topcolleges.css";

import TopCollegesParent from "../components/TopColleges/TopCollegesParent";
//import ListOfCollegesParent from "../components/ListOfColleges/ListOfCollegesParent";

class CollegeData extends Component {
  //State will contain an array of colleges
  state = {
    colleges: {},
  };

  componentDidMount() {
    //Get the data from the dummy server
    axios.get("../json/colleges.json").then((res) => {
      // console.log("Fetched");
      // console.log(res.data);
      this.setState({ colleges: res.data });
    });
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
