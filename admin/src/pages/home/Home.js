import BidTable from '../../components/bidTable/BidTable';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import Widgets from '../../components/widgets/Widgets';
import timg from '../../components/assets/timg.png'
import './home.scss';
import NotificationPanel from '../../components/notificationPanel/NotificationPanel';

const Home =() => {
    return(
        <div className="home">
            <Navbar />
            <Sidenav />

            <div className="home-body">
                <div className="left">
                    <div className="home-left-header">
                        <div className="home-left-img">
                            <img src={timg} />
                        </div>
                        <div className="home-left-widgets">
                            <div className="widgets">
                                <Widgets type="users"/>
                                <Widgets type="packages"/>
                                <Widgets type="hotels"/>

                                <Widgets type="offers"/>

                            </div>
                        </div>
                    </div>
                  

                    <div className="home-bid">
                        <h2>Recent Bid requests</h2>
                        <BidTable count="5" />
                    </div>
                </div>
                <div className="right">


                </div>
            </div>



            
            
        </div>
    )
}

export default Home