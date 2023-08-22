import { createSlice } from "@reduxjs/toolkit"

const userSlicer = createSlice({
    name: 'user',
    initialState: {
        name: '',
        id: '',
        email: '',
        idRoom: ''
    },
    reducers: {
        login(state, action) {
            const userInfo = action.payload

            state.name = userInfo.name
            state.id = userInfo?.id
            state.email = userInfo.email
        },
        setIdRoom(state, action) {
            state.idRoom = action.payload
        },
        logout(state) {
            state.name = ''
            state.id = ''
            state.idRoom = ''
        }
    }
})

export const userActions = userSlicer.actions

export default userSlicer