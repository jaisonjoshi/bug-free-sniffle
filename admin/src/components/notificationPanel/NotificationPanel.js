/* import './notificationPanel.scss'






const NotificationPanel = () => {
    const notis = [
        {
            name: "jaison",
            type : "newUser"
        },
        {
           name: "jaison",
           type : "bid"
       },
       {
           name: "jaison",
           type : "bid"
       },
       {
           name: "jaison",
           type : "newUser"
       },
       {
           name: "jaison",
           type : "bid"
       },
       {
           name: "jaison",
           type : "newUser"
       },
       {
           name: "jaison",
           type : "bid"
       }
   ]


    let rend;
    switch(type) {
        case "newbid":
            rend = {
                elem : (
                    <div> hello this is a new bid</div>
                )
            }
            
        case "newuser" :
            rend = {
                elem : (
                    <div>new user notif</div>
                )
            }
            
            default:
                break;
    }


    return (
        <div className="notification-panel">
            <h2>Notifications</h2>
            <div className="notificaton-container">
                {rend}
            </div>
        </div>
    )
}



export default NotificationPanel */