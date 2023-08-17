import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const LoginContent = styled.div`
    display: flex;
    flex-direction: row;

    .content-left {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 500px;
        height: 500px;
        background-color: #6666cc;
        color: #fff;
    }

    .content-right {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 300px;
        height: 500px;
        align-items: center;
        justify-content: center;

        &-input {
            display: flex;
            flex-direction: column;
            gap: 20px;

            input {
                border: none;
                border-bottom: 1px solid black;
                padding: 10px;
                font-size: 16px;
                outline: none;

                &:focus, &:hover {
                    border-bottom: 2px solid black;
                }
            }

            button {
                border: none;
                border-radius: 4px;
                padding: 10px;
                background-color: #6666cc;
                color: #fff;
                transition: 0.3s;

                &:hover {
                    scale: 1.1;
                    cursor: pointer;
                }
            }
        }
    }
`

export const ChatContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .chat-content {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 70%;

        overflow-y: scroll;
    }

    .input-content {
        display: flex;
        width: 80%;
        justify-content: center;
    }
`