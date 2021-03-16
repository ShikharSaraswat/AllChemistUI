import React ,{useContext}from 'react';
import context from '../../context';
import PharmacyPage from './PharmacyPage';
const PharmacyHome = () => {
    const userContext = useContext(context);
    const user = userContext.user;
    return(
        <div>
            <PharmacyPage user={user}/>
        </div>
    );
}

export default PharmacyHome;