import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../css/common.css";
import menuImage from '../../../images/menulogo.png';
import { FaHome,FaChevronRight,FaRegBuilding,FaInfoCircle } from "react-icons/fa";

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
      iconName: 'FaHome',
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
          title: "test5",
        },
      ],
    },
    {
      path: "/colleges",
      title: "Colleges",
      iconName: 'FaRegBuilding'
    },
    {
      path: "/about",
      title: "About",
      iconName: 'FaInfoCircle'
    },
  ]);

  useEffect(() => {
    updateMenuChildDisplay();
  }, []);

  const updateMenuChildDisplay = (title) => {
    let dummyMenu = [...MenuConatiner];
    dummyMenu.map((menu, $index) => {
      if (menu.title == title || menu.child) {  
        if(menu.title != title){
          dummyMenu[$index].childVisible = false;
        }else{
          dummyMenu[$index].childVisible =
          dummyMenu[$index].childVisible != undefined
            ? !dummyMenu[$index].childVisible
            : false;
        }
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
      <div>
        <li
          className={classApplied}
          onClick={() => {
            changeMenu(children.path, children.title, parentIndex);
          }}
        >
          {children.isSelected && <span class="menu-selected"></span>}
          {children.title}
        </li>
        {subMenu && <span>
          {subMenu}
        </span>
        }
      </div>
      );
    });
    return childAsset;
  };

  const getMenuIcon = (iconName) =>{
    switch(iconName){
      case 'FaHome':
        return <FaHome />;
      case 'FaRegBuilding':
        return <FaRegBuilding />
      case 'FaInfoCircle':
        return <FaInfoCircle />
      default : 
        return null ;
    }
  }



  //2 Level Menu Display
  let menuDisplay = MenuConatiner.map((menu, $index) => {
    let child = "";
    let iconName = getMenuIcon(menu.iconName);
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
      <div>
        <div
          className="menu-container"
          onClick={() => {
            changeMenu(menu.path, menu.title, $index);
          }}
        >
          {menu.isSelected && !child && <span class="menu-selected"></span>}
          {iconName && iconName}
          <span className="menu-spacing">{menu.title}</span>
          {child && <span className={menu.childVisible?'menu-right-icon-open':'menu-right-icon'}>
            <FaChevronRight />
          </span>}
        </div>
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
      let dummyMenu = updateVisiblity(title,MenuConatiner);
      updateMenu(dummyMenu);
      changeStatus();
    } 
    updateMenuChildDisplay(title);
  };

  const updateVisiblity = (title,menuObject)=>{
    let updatedValues = {}
    updatedValues = menuObject.map((menu) =>{
      let childs =''
      if(menu.child){
        childs = updateVisiblity(title,menu.child);
      }
      if(menu.title == title){
        menu.isSelected = true;
      }else{
        menu.isSelected = false;
      }
      let returnObj = {};
      if(childs){
        returnObj = {
          path: menu.path,
          title: menu.title,
          iconName: menu.iconName,
          isSelected : menu.isSelected,
          childVisible: menu.childVisible,
          child: [...childs]
        }
      }else{
        returnObj = {
          path: menu.path,
          title: menu.title,
          isSelected: menu.isSelected,
          iconName: menu.iconName,
          childVisible: menu.childVisible
        }  
      }
      return returnObj;
    });
    return updatedValues;
  }

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
    if (sliderStatus) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
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
        <div className="quote-holder">"It's not what you achieve, it's what you overcome"</div>
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
