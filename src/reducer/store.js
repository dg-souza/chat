import { configureStore } from "@reduxjs/toolkit"
import userSlicer from "./user"

export default configureStore({
    reducer: {
        user: userSlicer.reducer
    }
})