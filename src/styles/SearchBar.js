import styled from 'styled-components';

const SearchBarStyle = styled.div`
    div {
        padding: 10px;
        font-family: 'Roboto', sans-serif;
        color: gray;
        display: flex;
        align-items: flex-start;
        img {
            width: 32px;
            margin-right: 20px;
        }
        input {
            position: relative;
            display: inline-block;
            border: 1px solid #EEEEEE;
            border-radius: 20px;
            background-color: #EEEEEE;
            padding: 10px;
            display: flex;
            flex-direction: column;
            height: 15px;
            width: 1000px;
            &:focus {
                outline: none;
            }
        }
        .search-icon {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
        }
        ul {
            display: flex;
            list-style: none;
            margin: 0;
            font-size: 14px;
            li {
                padding-right: 20px;
                cursor: pointer;
                &:hover {
                    color: #000;
                }
            }
            .colored-li {
                color: purple;
            }
        }
        button {
            background-color: #fff;
            padding: 10px;
            border: 1px solid #eee;
            border-radius: 5px;
            color: gray;
            cursor: pointer;
            &:hover {
                border: 1px solid #000;
            }
        }
    }
`

export default SearchBarStyle;