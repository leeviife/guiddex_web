import React from 'react';
import {Container,
    Retweeted,
    
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImagemContent,
    Icons,
    Status,
    CommentIcon

} from './styled';
const Tweet =()=>{
    return(
        <div>
            <Container>
              
                
                <Body>
                    <Avatar/>
                    <Content>
                        <Header>
                            <strong>aaa</strong>
                            <span>aaa</span>
                            <Dot/>
                            <time>aaa</time>
                        </Header>
                        <Description>a</Description>
                            <ImagemContent/>
                            <Icons>
                                <Status>
                                    <CommentIcon/>
                                    18
                                </Status>
                            </Icons>
                        
                    </Content>
                   
                </Body>
            </Container>
        </div>
    )
} 
export default Tweet