import React from "react";
import TopCollegeStyle from "../../css/topcolleges.module.css";

function TopCollegesHeader(props) {
  // console.log("CollegeHeader", props);

  let collegeList = "";

  if (props.colleges) {
    // console.log("Working");
    collegeList = props.colleges.map((college) => {
      return (
        <div>
          <div className={TopCollegeStyle["clg-layout"]}>{college.name}</div>
        </div>
      );
    });
  }

  return (
    <div
      className={`${TopCollegeStyle["clg-top"]} ${TopCollegeStyle["center"]}`}
    >
      <h5 className={TopCollegeStyle["clg-header"]}>{props.header}</h5>
      <hr />
      {collegeList}
    </div>
  );
}

export default TopCollegesHeader;
