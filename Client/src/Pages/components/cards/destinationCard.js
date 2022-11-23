import React from "react";

const DestinationCard=({item})=>{
    return(
        <div className="destination-card" key={item._id}>
        <div><h1>{item.title}</h1></div> 
<div className="destination-card-img">
    <img src={require('../../Assets/SpecialOffer.png')} alt="Avatar"/>
</div>
<div className="destination-card-body">

    <p>{item.description}</p>
   

</div>
<div className="destination-card-footer">

<h3 className='duration'>{item.cheapestPrice}
</h3> 
<br></br>
</div></div>
    )
}

export default DestinationCard



