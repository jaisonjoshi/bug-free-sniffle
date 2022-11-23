import React from "react";

const OfferCard=({item})=>{
    return(
        <div key={item._id}>
        <div><h1>{item.title}</h1></div> 
<div className="package-card-img">
    <img src={require('../../Assets/SpecialOffer.png')} alt="Avatar"/>
</div>
<div className="package-card-body">

    <p>{item.description}</p>
   

</div>
<div className="package-card-footer">

<h3 className='duration'>{item.cheapestPrice}
</h3> 
<br></br>
</div></div>
    )
}

export default OfferCard



