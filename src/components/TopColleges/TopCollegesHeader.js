import React from "react";

function TopCollegesHeader(props) {
  // console.log("CollegeHeader", props);

  let collegeList = "";

  if (props.colleges) {
    // console.log("Working");
    collegeList = props.colleges.map((college) => {
      return (
        <div>
          <div className="clg-layout">{college.name}</div>
        </div>
      );
    });
  }

  return (
    <div className="clg-top">
      <h5 className="clg-header center">{props.header}</h5>
      <hr />
      {collegeList}
    </div>
  );
}

export default TopCollegesHeader;
