import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { user } from "../reducers/user";

export const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = (event) => {
        event.preventDefault();
    
        dispatch(user.actions.logout());
        dispatch(user.actions.setStatusMessage({ statusMessage:'' }));
        history.push("/")
    };
    
    return (
      <button className="logout-button" type="submit" onClick={handleLogout}>
        Logout
      </button>
    )
};