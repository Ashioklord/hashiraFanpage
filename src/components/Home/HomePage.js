import MainHeader from "./MainHeader";
import React from "react";
import Navigation from "./Navigation";

function HomePage(){
    return(
        <React.Fragment>
            <MainHeader headerTitle="Hashira Fanpage" bannerLoc="/images/banner.jpeg" />
            <Navigation/>
        </React.Fragment>
        
    )
}

export default HomePage;