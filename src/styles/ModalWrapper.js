import styled from 'styled-components';


const ModalWrapper = styled.div`
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        max-height: 100vh;
        overflow-y: auto;
    }
    .modal-content {
        display: block;
        max-width: 1200px;
        width: 100%;
        height: auto;
        background-color: #fff;
    }
    .modal-header, .modal-footer {
        display: flex;
        padding: 10px;
        img {
            width: 50px;
            height: 50px;
            border-radius: 100%;
        }
        p {
            margin-top: 20px;
            margin-left: 10px;
        }
        .buttons {
            justify-content: flex-end;
            margin-left: auto;
        }
        button {
            color: gray;
            margin: 10px;
            background-color: #fff;
            border: 1px solid lightgray;
            border-radius: 10px;
            padding: 15px;
            cursor: pointer;
            &:hover {
                border: 1px solid black;
                color: black;
            }
        }
    }
    .modal-title {
        margin: 0;
    }
    .modal-body {
        padding: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        img {
            width: 100%;
        }
    }
`

export default ModalWrapper;