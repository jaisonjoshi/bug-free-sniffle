import './user.scss'
import packageimg from '../../Assets/package.png'
import Headerimg from '../../Assets/Group.jpg'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const User = () => {


    return(
        <div className="single-hotel">
            
            <div className="header">
                <img src={Headerimg} alt="" />
               
            </div>

            <div className="singlehotel-container">
               {/* {loading ? ("loading ") : ( */}
                    <div className="singlehotel">
                   
                    <div className="singlehotel-body">
                        <div className="singlehotel-body-left">
                            <img src={packageimg} />
                            {/* <div className="img-cards">
                                {data.images && data.images.map((pic, i)=>(
                                    
                                        
                                            <div className='img-card' key={i}><img src={pic} alt="" /></div>

                                        
                                    
                                ))}
                             

                            </div> */}
                        </div>
                        <div className="singlehotel-body-right">  
                            <div className="content">
                                <h1>{/* {data.title} */}Hotel Paramount</h1>
                                <div className="flex-container">
                                    <RoomOutlinedIcon /><h3>Kerala{/* {data.location} */}</h3>
                                </div>
                                <div className="flex-container">
                                <CurrencyRupeeOutlinedIcon /><h2>1000{/* {data.cheapestPrice} */} /-</h2>

                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div className="singlehotel-body-content">
                        <p>{/* {data.description} */}loremhevbwjdfjwevdhq w  b uv uvb vuv uv iv</p>
                    </div>
                </div>
              {/* ) } */}
            </div>



            <div className="backtohome">
            <Link to="/"><button>Back to home</button></Link>
            </div>
            <Footer/>
        </div>
    )
}

export default User