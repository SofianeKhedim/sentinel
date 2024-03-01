import { useDispatch, useSelector } from 'react-redux';
import { logout, setUser } from '@/app/slices/user';
import { RootState } from '@/app/store';

function useUser<T extends UserI | null = UserI | null>() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user) as T;
  const set = (user: UserI) => {
    dispatch(setUser(user));
  };
  const remove = () => {
    dispatch(logout());
  };
  return { setUser: set, user: userInfo, removeUser: remove };
}
export default useUser;

