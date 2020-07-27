import styled,{css} from 'styled-components';
import {
    
    Home,
    Search,
    Notifications,
    Email,
  } from '../../styles/Icons';
export const Container=styled.div `
    display:flex;
    flex-direction:column;
  
    width:min(601px,100%);

    @media(min-width:500px){    
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
        
    }
  
`; 
export const Header =styled.div `
    z-index:2;
    position:sticky;
    background:var(--primary);
    
    display:flex;
    align-items:center;

    text-align:left;
    padding:8px 0 9px 13px;
    border-bottom:1px solid var(--outline);
`;
export const ProfileInfo=styled.div `
    
    display:flex;
    flex-direction:column;

    >strong{
        font-size:21px;
        
    }
`;
export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: var(--primary);
    width: 100%;
    border-top: 1px solid var(--outline);
    display: flex;
    justify-content: space-between;
    padding: 8px min(46px, max(10vw, 10px));
    @media (min-width: 500px) {
      display: none;
    }
`;
const iconCSS =css`
    width:33px;
    height:33px;
    cursor:pointer;
    fill: var(--twitter);
    &:hover,
    &.active {
    fill: var(--twitter);
  }
`
export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;