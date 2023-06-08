import styled from 'styled-components';

const MainWrapper = styled.div`
    div {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: gray;
        display: flex;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding: 10px;
        cursor: pointer;
        &:hover {
            color: #000;
        }
    }
`

export default MainWrapper;