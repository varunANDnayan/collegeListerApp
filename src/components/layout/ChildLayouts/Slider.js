import React,{useEffect} from "react";
import { Link,withRouter } from "react-router-dom";
import "../../../css/common.css";

const Slider = (props)=> {
const [sliderStatus,openCloseSlider] = React.useState(false);   
const [SliderClasses,setSliderClass] = React.useState({
    sliderClass :  sliderStatus? 'slider-style slider-open':'slider-style slider-close',
    sliderOpacity : sliderStatus? 'slider slider-opacity':'slider slider-close',
    sliderContentClass : sliderStatus? 'slider-content open':'slider-content close'
})

let MenuConatiner = [{
    path: '/',
    title: "Home"
},{
    path: '/about',
    title: "About"
}];

let menuDisplay = MenuConatiner.map((menu)=>{
    return (
        <div className="menu-container" onClick={() =>{changeMenu(menu.path)}}>
           { menu.title}
        </div>
    )
})

const changeStatus = ()=>{
    openCloseSlider(!sliderStatus);
}

const changeMenu = (path) =>{
    if(props.history){
        setTimeout(()=>{
            props.history.push(path);
        },0);
    }
    changeStatus();
}

useEffect(()=>{
    let dummySLiderClass = {...SliderClasses};
    dummySLiderClass.sliderClass =  sliderStatus? 'slider-style slider-open':'slider-style slider-close';
    dummySLiderClass.sliderOpacity = sliderStatus? 'slider slider-opacity':'slider slider-close';
    dummySLiderClass.sliderContentClass = sliderStatus ? 'slider-content open':'slider-content close';
    setSliderClass(dummySLiderClass);
},[sliderStatus])


return (
    <div>
        <div>
            <div className="burger-menu" onClick = {changeStatus}>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </div>
        </div>
        <div className={SliderClasses.sliderOpacity} onClick={changeStatus}></div>
        <div className={SliderClasses.sliderClass}>
            <div className="cross-icon-container" onClick={changeStatus}>
                <span className="cross-icon">X</span>
            </div>
            <div className={SliderClasses.sliderContentClass}>
                <div>
                    {menuDisplay}       
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default withRouter(Slider);