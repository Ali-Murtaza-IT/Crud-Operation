import { createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";

// Post Action
export const createUser = createAsyncThunk("craeteUser" ,async (data, rejectWithVale ) =>{
    const response = await fetch ("https://65d46ce83f1ab8c634351523.mockapi.io/crud",{
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(data)

    } );
    try {
        const result = await response.json();
        return result;
    }
    catch(error)
    {
        return rejectWithVale(error);
    }
});

// Get Action

export const showUser = createAsyncThunk(
    "showUser",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        "https://65d46ce83f1ab8c634351523.mockapi.io/crud"
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  //delete action
export const deleteData = createAsyncThunk(
    "deleteData",
    async (id, { rejectWithValue }) => {
      const response = await fetch(
        `https://65d46ce83f1ab8c634351523.mockapi.io/crud/${id}`,
        { method: "DELETE" }
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  // Edit Action
export const editUser = createAsyncThunk("editUser" ,async (data, rejectWithVale ) =>{
    const response = await fetch (`https://65d46ce83f1ab8c634351523.mockapi.io/crud/${data.id}`,{
        method : "PUT",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(data)

    } );
    try {
        const result = await response.json();
        return result;
    }
    catch(error)
    {
        return rejectWithVale(error);
    }
});

const pending = createAction(createUser.pending);
const fullfilled = createAction(createUser.fulfilled);
const rejected = createAction(createUser.rejected);
const pending2 = createAction(showUser.pending);
const fullfilled2 = createAction(showUser.fulfilled);
const rejected2 = createAction(showUser.rejected);
const pending3 = createAction(deleteData.pending);
const fullfilled3 = createAction(deleteData.fulfilled);
const rejected3 = createAction(deleteData.rejected);
const pending4 = createAction(editUser.pending);
const fullfilled4 = createAction(editUser.fulfilled);
const rejected4 = createAction(editUser.rejected);


export const userDetail = createSlice ({
    name : "userDetail",
    initialState : {
        users :[],
        loading : false,
        error : null,
        searchData: [],
    },

    reducers: {
      searchUser: (state, action) => {
        console.log(action.payload);
        state.searchData = action.payload;
      },
    },

    extraReducers : (builder) => {
        builder

            .addCase(pending, (state) => {
                state.loading = true;
            })
            .addCase(fullfilled, (state, action) => {
                state.users.push(action.payload);
                state.loading = false;
                
            })
            .addCase(rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })
            .addCase(pending2, (state) => {
                state.loading = true;
            })
            .addCase(fullfilled2, (state, action) => {
                state.users = action.payload;
                state.loading = false;
                
            })
            .addCase(rejected2, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })
            .addCase(pending3, (state) => {
                state.loading = true;
            })
            .addCase(fullfilled3, (state, action) => {
                state.loading = false;
                const {id} =action.payload
                

                if(id){
                    state.users = state.users.filter((userdata) => userdata.id !== id);
                }
                
            })
            .addCase(rejected3, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })
              .addCase(pending4, (state) => {
                state.loading = true;
            })
            .addCase(fullfilled4, (state, action) => {
                state.loading = false;
                state.users = state.users.map((ele)=> 
                ele.id === action.payload ? action.payload : ele
                );
                
            })
            .addCase(rejected4, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })

    },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;