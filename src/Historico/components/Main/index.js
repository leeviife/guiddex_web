import React from 'react';
import ProfilePage from '../ProfilePage/index'
import {
    Container,
    Header,
    ProfileInfo,
    BackIcon,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon
} from './styles';

const Main =()=>{
    return (
        <div>
            <Container>
                <Header>
                   
                   <ProfileInfo>
                       <strong>
                           Guilherme
                       </strong>
                   </ProfileInfo> 
                </Header>
                
               <ProfilePage/> 

            
               <BottomMenu>
                   <HomeIcon/>
                   <SearchIcon/>
                   <BellIcon/>
                   <EmailIcon/>
               </BottomMenu>
                
            </Container>

        </div>
    )
}
export default Main