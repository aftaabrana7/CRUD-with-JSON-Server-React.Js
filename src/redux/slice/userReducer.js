import {createSlice} from '@reduxjs/toolkit'
import { userList } from '../../components/Data'

const userSlice = createSlice({
    name: 'users',
    initialState: {userList},
    reducers: {
        addUser: (state, action) => {
            console.log(state);
            state.userList.push(action.payload)
            //state.push(action.payload);

        },
        updateUser: (state, action) => {
            const{id, name, email} = action.payload;
            const val = state.userList.find(user => user.id === id);
            if(val) {
                val.name = name;
                val.email = email;
            }
        },
        deleteUser: (state, action) => {
            const{id} = action.payload;
            const val = state.userList.find(user => user.id === id);
            if(val) {
                state.userList = state.userList.filter(f => f.id !== id);
                return state
            }
        }
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;