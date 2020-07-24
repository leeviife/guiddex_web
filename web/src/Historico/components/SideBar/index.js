import React from 'react';

import {Container,SearchWrapper,SearchInput,SearchIcon} from './styles';

const SideBar=()=>{
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no twitter"/>

                <SearchIcon/>
            </SearchWrapper>

        </Container>

        )
}
export default SideBar;