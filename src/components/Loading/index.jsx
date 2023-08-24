import {
    Content
} from './style'

const Loading = props => {
    const {
        isLoading
    } = props
    
    return(
        <Content isLoading={isLoading}>
            <h3>Aguarde enquanto conectamos a aplicação.</h3>
        </Content>
    )
}

export default Loading