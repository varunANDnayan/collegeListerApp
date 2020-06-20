import React from "react";

import TopCollegeStyle from "../../css/topcolleges.module.css";

import TopCollegesHeader from "./TopCollegesHeader";

function TopCollegesParent(props) {
  console.log("collegeList", props.collegeList);

  let collegesPresent =
    props.collegeList && props.collegeList.colleges ? true : false;

  //Display in case of colleges are avilable
  // if (collegesPresent) {
  //   console.log("collegeList", props.collegeList.colleges.Arts);
  //   console.log("collegeList", props.collegeList.colleges.Engineering);
  //   console.log("collegeList", props.collegeList.colleges.Commerce);
  // }

  //Get all the college details
  const colleges = props.collegeList;
  const courseKeys = [
    "Engineering",
    "MBBS",
    "Arts",
    "Commerce",
    "Diploma",
    "Science",
  ];
  let collegeList = <div>Loading...</div>;
  if (collegesPresent) {
    let colleges = props.collegeList.colleges;
    collegeList = courseKeys.map((course) => {
      if (colleges[course])
        return (
          <TopCollegesHeader header={course} colleges={colleges[course]} />
        );
    });
  }
  return (
    <div>
      <h3 className="center">Top Colleges</h3>
      <div className={TopCollegeStyle["clg-wrapper"]}>{collegeList}</div>
    </div>
  );
}

export default TopCollegesParent;
