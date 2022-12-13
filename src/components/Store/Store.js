import React, {useState} from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import './Store.css';
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";



export default function Store ({products}) {
    let [selected, setSelected] = useState('view_list');
    let [active, setActive] = useState(<CardsView cards={products} />);
    const filter = () => {
        if (selected === 'view_list') {
            selected = 'view_module';
            active = <ListView items={products} />
        } else if (selected === 'view_module') {
            selected = 'view_list';
            active = <CardsView cards={products} />
        } 
        setSelected(selected);
        setActive(active);
    }
   


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <IconSwitch 
            icon={selected}
            onSwitch={filter} />
            <div className='date' style={{marginTop: "100px"}}>
               {/* {active} */}
               {/* <CardsView /> */}
               {active}
            </div>
        </div>
    )
}
