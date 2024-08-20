import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { goitApi } from "../../config/goitApi";

// axios.defaults.baseURL = "https://66ba1d87fa763ff550fada81.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await goitApi.get("contacts");
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        await goitApi.delete(`contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk( "contacts/addContact", async (body, thunkAPI) => {
    try {
        const { data } = await goitApi.post("contacts", body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});