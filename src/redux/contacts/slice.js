import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "../redux/../contacts/operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => { 
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending), state => {
                state.loading = true;
                state.error = false;
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), state => {
                state.loading = false;
                state.error = true;
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled), state => {
                state.loading = false;
            });
    },
});

export const contactsReducer = contactsSlice.reducer;