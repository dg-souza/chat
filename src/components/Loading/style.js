import styled from 'styled-components'

export const Content = styled.div`
    position: fixed;
    justify-content: center;
    align-items: center;
    display: ${props => props.isLoading ? 'flex' : 'none' };
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;

    h3 {
        color: #fff;
    }
`