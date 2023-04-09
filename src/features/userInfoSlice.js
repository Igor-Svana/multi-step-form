import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    number: "",
    plan: {
        name: "Arcade",
        price: 9
    },
    pricingMonthly: true,
    add_ons: {
        onlineState: { state: false, price: 1 },
        storageState: { state: false, price: 2 },
        profileState: { state: false, price: 2 },
    },
    total: 0
}

export const userInfoSlice = createSlice({
    name: 'user-info',
    initialState,
    reducers: {
        saveUserInfo: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.number = action.payload.number;
        },
        savePlanInfo: (state, action) => {
            state.plan = action.payload.plan;
            state.pricingMonthly = action.payload.pricingMonthly;
            state.add_ons.onlineState.price = action.payload.addonsPrice.onlineServicePrice
            state.add_ons.storageState.price = action.payload.addonsPrice.storagePrice
            state.add_ons.profileState.price = action.payload.addonsPrice.profilePrice
        },
        saveAddOnsInfo: (state, action) => {
            state.add_ons.onlineState.state = action.payload.onlineState.state
            state.add_ons.storageState.state = action.payload.storageState.state
            state.add_ons.profileState.state = action.payload.profileState.state

            let sum = state.plan.price;
            Object.values(state.add_ons).forEach((value) => {
                if (value.state === true) {
                    return sum += value.price;
                }
            });
            state.total = sum;
        }
    }
})

export const { saveUserInfo, savePlanInfo, saveAddOnsInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;