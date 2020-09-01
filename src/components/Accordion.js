import React,{useState} from 'react';

const Accordion = ({items})=> {

    const [activeIndex,setActiveIndex]= useState(null); //state init

    const onTitleClick=(index)=>{
        //console.log('Title Clicked', index)
        setActiveIndex(index);  //state update
    };

    

    const renderItems= items.map((item,index) =>{
        const active = index === activeIndex ? 'active' : '' ;
        return (
            <React.Fragment key="item.title">
                <div 
                    className={`title${active}`}
                    onClick={()=>onTitleClick(index)}
                    >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>

        );
        });

    return(
        <div className="ui styled accordion">
            {renderItems}
            {/*<h1>{activeIndex}</h1>} //state ref*/}
        </div>
    );
};


export default Accordion;