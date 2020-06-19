import React from "react";
import "../../css/listofcolleges.css";
import "../../css/common.css";

import ListOfCollegesTabs from "./ListOfCollegesTabs";

function ListOfCollegesParent(props) {
  // console.log("colleges", props.collegeList.colleges);
  let collegeCheck = props.collegeList.colleges;

  let collegeList = {
    Engineering: [],
    Diploma: [],
    Arts: [],
    Commerce: [],
    MBBS: [],
  };
  let streams = ["Engineering", "Diploma", "Arts", "Commerce", "MBBS"];
  let colleges = "";

  if (collegeCheck) {
    console.log("colleges", collegeCheck);
    colleges = streams.map((stream) => {
      let currentStream = stream;
      let streamColleges = [];
      collegeCheck.map((college) => {
        if (college.stream.indexOf(currentStream) != -1) {
          streamColleges.push(college);
        }
      });
      collegeList[currentStream] = streamColleges;
    });

    // Nayan Old Code
    // colleges = collegeCheck.map((college) => {
    //   if (college.stream.indexOf("Engineering")) {
    //   if (college.stream.indexOf("Engineering") !== -1) {
    //     collegeList.Engineering.push(college);
    //     console.log("Engineering", collegeList.Engineering);
    //   }
    //   if (college.stream.indexOf("Diploma") !== -1) {
    //     collegeList.Diploma.push(college);
    //     console.log("Diploma", collegeList.Diploma);
    //   }
    //   if (college.stream.indexOf("Arts") !== -1) {
    //     collegeList.Arts.push(college);
    //     console.log("Arts", collegeList.Arts);
    //   }
    //   if (college.stream.indexOf("Commerce") !== -1) {
    //     collegeList.Commerce.push(college);
    //     console.log("Commerce", collegeList.Commerce);
    //   }
    //   if (college.stream.indexOf("MBBS") !== -1) {
    //     collegeList.MBBS.push(college);
    //     console.log("MBBS", collegeList.MBBS);
    //   }
    // });
  }

  return (
    <div className="paddingB50">
      <h3 className="center">List of Colleges</h3>
      <ListOfCollegesTabs headers={streams} data={collegeList} />
    </div>
  );
}

export default ListOfCollegesParent;
