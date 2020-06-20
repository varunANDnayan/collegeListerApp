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
    title: "Home",
    child:[{
        path:'/',
        title:'test',
        child:[{
            path:'/',
            title:'level2',
            child: [{
                path:'/',
                title:'level3'
            }]
        }]
    },{
        path:'/',
        title:'test'
    }]
},{
    path: '/about',
    title: "About"
}];

const childIteration = (child) =>{
    let childAsset =''
    childAsset = child.map((children,$index)=>{
        let subMenu = '';
        if(children.child && children.child.length > 0){
            subMenu = childIteration(children.child);
        }
        let classApplied = 'menu-child-conatiner'
        if($index != child.length-1){
            classApplied = classApplied+" menu-seprator";
        }
        return(<li className={classApplied} onClick={() =>{changeMenu(children.path)}}>
            {children.title} 
            {subMenu}
        </li>)
    })
    return childAsset;
}

//2 Level Menu Display
let menuDisplay = MenuConatiner.map((menu)=>{
    let child = '';
    if(menu.child && menu.child.length > 0){
        child = childIteration(menu.child);
    }
    return (
        <div className="menu-container" onClick={() =>{changeMenu(menu.path)}}>
           { menu.title}
           {child}
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