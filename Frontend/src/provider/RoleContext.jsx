import React, { createContext, useState } from 'react';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);
   const [parentEmail, setParentEmail] = useState(''); 
  const [childConnectionString, setChildConnectionString] = useState('');

  return (
    <RoleContext.Provider   value={{
      role,
      setRole,
      parentEmail,
      setParentEmail,
      childConnectionString,
      setChildConnectionString,
    }}>
      {children}
    </RoleContext.Provider>
  );
};
