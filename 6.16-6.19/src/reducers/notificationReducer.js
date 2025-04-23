import { createSlice } from "@reduxjs/toolkit"

const notificiationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        createNotification(state, action){
                return action.payload
        }
    }
})

export const { createNotification } = notificiationSlice.actions
export default notificiationSlice.reducer