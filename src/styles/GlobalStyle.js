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
        flex-direction: column;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        width: 800px;
        height: 600px;
        background-color: #8565CB;
        color: #fff;

        img {
            width: 450px;
        }

        transition: 0.3s;
    }

    .content-right, .content-right-room {
        flex-direction: column;
        background-color: #fff;
        width: 450px;
        height: 600px;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        .btnGoogle {
            background-color: #C2513E;
            content: 'Teste';
        }

        img {
            width: 50px;
            cursor: pointer;

            transition: 0.3s;

            &:hover {
                scale: 1.1;
            }
        }

        .rooms-list {
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 100%;
                gap: 20px;
                max-height: 400px;
                padding: 10px 0;
                overflow-y: scroll;

                .room {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;
                    justify-content: space-around;

                    span {
                        display: flex;
                        width: 20%;

                        overflow-x: hidden;
                    }
                }
            }

        &-input {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            width: 100%;

            input {
                border: none;
                border-bottom: 1px solid ${props => props.isValid ? 'red' : 'black'};
                padding: 10px;
                font-size: 16px;
                outline: none;
                width: 70%;

                &:focus, &:hover {
                    border-bottom: 2px solid ${props => props.isValid ? 'red' : 'black'};
                }
            }

            button {
                border: none;
                border-radius: 4px;
                padding: 10px;
                background-color: #8565CB;
                color: #fff;
                transition: 0.3s;
                width: 70%;

                &:hover {
                    scale: 1.1;
                    cursor: pointer;
                }
            }

            img {
                display: none;
                width: 50px;

                &:hover {
                    scale: 1.1;
                    cursor: pointer;
                }
            }
        }

        span {
            margin-top: 10px;
        }

        b {
            color: #8565CB;
            cursor: pointer;
        }
    }

    .content-right {
        display: ${props => props.isRoom ? 'none' : 'flex'};
        
        animation: fade-out 800ms ease;
    }

    .content-right-room {
        display: ${props => props.isRoom ? 'flex' : 'none'};

        animation: fade-in 800ms ease;
    }

    @keyframes fade-out {
        100% { opacity: 1; }
        0% { opacity: 0; }
    }

    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    
    @media(max-width: 1300px) {
        .content-left {
            width: 500px;

            img {
                width: 300px;
            }
        }

        .content-right, .content-right-room {
            width: 350px;
        }
    }

    @media(max-width: 900px) {
        .content-left {
            display: none;
        }

        .content-right, .content-right-room {
            width: 400px;
            border-radius: 5px;
        }
    }

    @media(max-width: 450px) {
        .content-right, .content-right-room {
            width: 200px;
            height: 400px;

            h2 {
                font-size: 18px;
            }

            span {
                font-size: 12px;
            }

            .content-right-input {
                input {
                    width: 50%;
                    text-align: center;
                }

                .btnLogin {
                    display: none;
                }

                img {
                    display: flex;
                }
            }

            .room {
                span {
                    font-size: 12px;
                    width: 10%;
                }

                img {
                    width: 40px;
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
        background-color: #fff;

        overflow-y: scroll;
    }

    .input-content {
        display: flex;
        width: 80%;
        justify-content: center;
    }
`