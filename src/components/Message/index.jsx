import {
    Content
} from './style'

const Message = props => {
    const {
        messages,
        currentUser
    } = props

    console.log(currentUser)
    console.log(messages)

    return (
        <Content isSender={messages.userInfo.id === currentUser._id ? true : false}>
            <div className='message-content'>
                <h3>{messages.userInfo.name}</h3>

                <div className='message-body'>
                    <span>{ messages.message }</span>
                </div>
            </div>
        </Content>
    )
}

export default Message