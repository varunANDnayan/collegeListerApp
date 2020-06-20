import React from "react";
import ReactHtmlParser from "react-html-parser";
import ListCollegeStyle from "../../css/listofcolleges.module.css";

function ListOfCollegesLayout(props) {
  console.log("child", props);

  let openUrl = (urlName) => {
    console.log("URL", urlName);
    window.open(urlName, "_blank");
  };

  let collegeStream = props.colleges.map((college) => {
    let starClass = [];
    let rate = college.rating;

    let rating = Math.round(rate * 2) / 2;
    console.log("rating", rating);

    let i;

    for (i = rating; i >= 1; i--)
      starClass +=
        '<i class="fa fa-star"aria-hidden="true" style="color: gold;"></i>&nbsp;';

    if (i == 0.5)
      starClass +=
        '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;';

    for (i = 5 - rating; i >= 1; i--)
      starClass +=
        '<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;';

    return (
      <div className={ListCollegeStyle["clg-list"]}>
        <div className={ListCollegeStyle["clg-list-image"]}>
          <img src={college.logo} alt={college.name} />
        </div>
        <div className={ListCollegeStyle["clg-list-content"]}>
          <div className={ListCollegeStyle["clg-list-name"]}>
            {college.name}
          </div>
          <div className={ListCollegeStyle["clg-list-info"]}>
            {college.info}
          </div>
          <div className={ListCollegeStyle["clg-list-loc"]}>
            {college.location}
          </div>
        </div>
        <div className={ListCollegeStyle["clg-list-details"]}>
          <div className={ListCollegeStyle["clg-list-rate"]}>
            <p>Rating:</p>
            <span>{ReactHtmlParser(starClass)}</span>
            <p>({college.rating})</p>
          </div>

          <div className={ListCollegeStyle["clg-list-btn"]}>
            {console.log(college.link)}
            <button
              class={ListCollegeStyle["clg-btn"]}
              onClick={() => openUrl(college.link)}
            >
              Visit
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <>{collegeStream}</>;
}

export default ListOfCollegesLayout;
