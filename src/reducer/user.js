import { createSlice } from "@reduxjs/toolkit"

const userSlicer = createSlice({
    name: 'user',
    initialState: {
        name: '',
        id: ''
    },
    reducers: {
        login(state, action) {
            const userInfo = action.payload

            state.name = userInfo.name
            state.id = userInfo.id
        },
        logout(state) {
            state.name = ''
            state.id = ''
        }
    }
})

export const userActions = userSlicer.actions

export default userSlicer