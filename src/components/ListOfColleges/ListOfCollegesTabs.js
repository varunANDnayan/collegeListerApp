import React from "react";

import ListOfCollegesLayout from "./ListOfCollegesLayout";

function ListOfCollegesTabs(props) {
  console.log("Tabs child", props.data);

  let [selectedTab, updateSelectedTab] = React.useState(0);

  const changeTab = (changeTabIndex) => {
    updateSelectedTab(changeTabIndex);
    props.callback && props.callback();
  };

  let classes = "";
  classes = "clg-container";
  let colleges = [];
  let tabsData = <div>Loading...</div>;
  if (props.data) {
    tabsData = props.headers.map((tab, index) => {
      let tabClass = "tabs-header";
      if (props.data[tab].length > 0 && selectedTab === index) {
        colleges = props.data[tab];
        tabClass = tabClass + " selected";
      }
      // console.log("clg", typeof colleges);

      return (
        <>
          <div
            className={tabClass}
            onClick={() => {
              changeTab(index);
            }}
          >
            {tab}
          </div>
        </>
      );
    });
  }

  return (
    <>
      <div className="tabs-container">{tabsData}</div>
      <div className={classes}>
        <ListOfCollegesLayout colleges={colleges} />
      </div>
    </>
  );
}

/*<>
      <Tabs centered>
        <TabList>
          <Tab className="clg-list-tab">Engineering</Tab>
          <Tab className="clg-list-tab">Diploma</Tab>
          <Tab className="clg-list-tab">Arts</Tab>
          <Tab className="clg-list-tab">Commerce</Tab>
          <Tab className="clg-list-tab">MBBS</Tab>
        </TabList>

        <TabPanel>
          <ListOfCollegesLayout colleges={props.colleges.Engineering} />;
        </TabPanel>
        <TabPanel>
          <ListOfCollegesLayout colleges={props.colleges.Diploma} />;
        </TabPanel>
        <TabPanel>
          <ListOfCollegesLayout colleges={props.colleges.Arts} />;
        </TabPanel>
        <TabPanel>
          <ListOfCollegesLayout colleges={props.colleges.Commerce} />;
        </TabPanel>
        <TabPanel>
          <ListOfCollegesLayout colleges={props.colleges.MBBS} />;
        </TabPanel>
      </Tabs>
    </>*/

export default ListOfCollegesTabs;
