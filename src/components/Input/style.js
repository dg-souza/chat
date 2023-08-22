import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;

    input {
        width: 100%;
        border-radius: 4px;
        padding: 8px;
        font-size: 20px;
        outline: none;
        border: none;
    }

    button {
        border: none;
        background-color: #6666cc;
        color: #fff;
        border-radius: 4px;
        transition: 0.3s;

        &:hover {
            cursor: pointer;
            scale: 0.9;
        }
    }
`