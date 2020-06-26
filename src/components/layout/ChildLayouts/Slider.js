import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../css/common.css";
import menuImage from '../../../images/menulogo.png'

const Slider = (props) => {
  const [sliderStatus, openCloseSlider] = React.useState(false);
  let [index, updateIndex] = React.useState(0);
  const [SliderClasses, setSliderClass] = React.useState({
    sliderClass: sliderStatus
      ? "slider-style slider-open"
      : "slider-style slider-close",
    sliderOpacity: sliderStatus
      ? "slider slider-opacity"
      : "slider slider-close",
    sliderContentClass: sliderStatus
      ? "slider-content open"
      : "slider-content close",
  });

  const [MenuConatiner, updateMenu] = React.useState([
    {
      title: "Home",
      child: [
        {
          path: "/",
          title: "test",
          child: [
            {
              path: "/",
              title: "level2",
              child: [
                {
                  path: "/",
                  title: "level3",
                },
              ],
            },
          ],
        },
        {
          path: "/",
          title: "test",
        },
      ],
    },
    {
      path: "/colleges",
      title: "Colleges",
    },
    {
      path: "/about",
      title: "About",
    },
  ]);

  useEffect(() => {
    updateMenuChildDisplay();
  }, []);

  const updateMenuChildDisplay = (title) => {
    let dummyMenu = [...MenuConatiner];
    dummyMenu.map((menu, $index) => {
      if (menu.title == title || menu.child) {
        dummyMenu[$index].childVisible =
          dummyMenu[$index].childVisible != undefined
            ? !dummyMenu[$index].childVisible
            : false;
      }
    });
    updateMenu(dummyMenu);
  };

  const childIteration = (child, parentIndex) => {
    let childAsset = "";
    childAsset = child.map((children, $index) => {
      let subMenu = "";
      if (children.child && children.child.length > 0) {
        subMenu = childIteration(children.child, parentIndex);
      }
      let classApplied = "menu-child-conatiner";
      if ($index != child.length - 1) {
        classApplied = classApplied + " menu-seprator";
      }
      return (
        <li
          className={classApplied}
          onClick={() => {
            changeMenu(children.path, null, parentIndex);
          }}
        >
          {children.title}
          {subMenu}
        </li>
      );
    });
    return childAsset;
  };

  //2 Level Menu Display
  let menuDisplay = MenuConatiner.map((menu, $index) => {
    let child = "";
    let childVisiblity = "";
    if (menu.child && menu.child.length > 0) {
      //index passed
      child = childIteration(menu.child, $index, menu.isVisible);
      if (menu.childVisible != undefined) {
        if (menu.childVisible) {
          childVisiblity = "open-child";
        } else {
          childVisiblity = "close-child";
        }
      }
    }
    return (
      <div
        className={
          index === $index ? "menu-container menu-selected" : "menu-container"
        }
        onClick={() => {
          changeMenu(menu.path, menu.title, $index);
        }}
      >
        {menu.title}
        <div className={childVisiblity}>{child}</div>
      </div>
    );
  });

  const changeStatus = () => {
    openCloseSlider(!sliderStatus);
  };

  const changeMenu = (path, title, $index) => {
    if (path) {
      if (props.history) {
        setTimeout(() => {
          props.history.push(path);
        }, 0);
      }
      updateIndex((index = $index));
      changeStatus();
    } else {
      updateMenuChildDisplay(title);
    }
  };

  useEffect(() => {
    let dummySLiderClass = { ...SliderClasses };
    dummySLiderClass.sliderClass = sliderStatus
      ? "slider-style slider-open"
      : "slider-style slider-close";
    dummySLiderClass.sliderOpacity = sliderStatus
      ? "slider slider-opacity"
      : "slider slider-close";
    dummySLiderClass.sliderContentClass = sliderStatus
      ? "slider-content open"
      : "slider-content close";
    setSliderClass(dummySLiderClass);

    if (sliderStatus) document.body.style.position = "fixed";
    return () => (document.body.style.position = "unset");
  }, [sliderStatus]);

  return (
    <div>
      <div>
        <div className="burger-menu" onClick={changeStatus}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
      </div>
      <div className={SliderClasses.sliderOpacity} onClick={changeStatus}></div>
      <div className={SliderClasses.sliderClass}>
        <div className='menu-slider-logo'>
          <img src={menuImage}/>
        </div>
        <div className="cross-icon-container" onClick={changeStatus}>
          <span className="cross-icon">X</span>
        </div>
        <div className={SliderClasses.sliderContentClass}>
          <div>{menuDisplay}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Slider);
