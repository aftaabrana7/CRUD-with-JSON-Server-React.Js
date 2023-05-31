import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/slice/userReducer';


const Home = () => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteUser({id: id}));
    }
    console.log(users);

  return (
    <div className='container'>
        <h2>CRUD App with JSON Server</h2>
        <Link to='/create' className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <th>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </th>
            <tbody>
                {users.userList.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home