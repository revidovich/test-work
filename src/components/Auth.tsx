import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentUser,
  clearCurrentUser
} from "../store/slices/currentUser";
import { usersSelector } from "../store/models/UserSelectors";

export default function Auth() {
  const dispatch = useDispatch();
  const users = useSelector((state) => usersSelector(state));
  const currentUser = useSelector((state: any) => state.currentUser);
  const [nameValue, setNameValue] = useState<string>('');
  const [isStartScreen, setIsStartScreen] = useState<boolean>(true);

  const handleChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {
    setNameValue(e.target.value);
  }, []);
  
  const onSubmitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (nameValue === '') { // это для выхода в будущем
      dispatch(clearCurrentUser(null));
    } else {
      dispatch(setCurrentUser(nameValue));
      setIsStartScreen(false);
    }
  };

  return (
    <>
    {isStartScreen ? (<div style={{ position: 'absolute', top: 0, left: 0, zIndex: '2', height: '100vh', width: '100vw', background: '#3d4046', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <form onSubmit={onSubmitHandler}>
        <div>Укажите Ваше имя</div>
        <input
          autoFocus
          value={nameValue}
          onChange={handleChange}
        />
        <button>Войти</button>
      </form>
    </div>) : (<div style={{ width: '100px', background: '#3d4046', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>User: {currentUser}</ div>)}
    </>
  );
}
