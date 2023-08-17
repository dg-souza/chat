import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    padding: 30px;
    justify-content: ${props => props.isSender ? 'flex-end' : 'flex-start' };

    .message-content {
        display: flex;
        flex-direction: column;

        h3 {
            margin: 0;
            color: #6666cc;
        }

        .message-body {
            display: flex;
            justify-content: center;
            padding: 10px;
            background-color: #6666cc;
            max-width: 250px;
            color: #fff;
        }
    }
`