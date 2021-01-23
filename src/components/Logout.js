import React from 'react';
import { useDispatch } from 'react-redux';

import { user } from "../reducers/user";

export const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = (event) => {
        event.preventDefault();
    
        dispatch(user.actions.logout());
        dispatch(user.actions.setStatusMessage({ statusMessage: "Logged out!" }));
    };
    
    return (
        <button type="submit" onClick={handleLogout}>
        Logout
        </button>
    )
};