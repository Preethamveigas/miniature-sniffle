import { useDispatch, useStateValue } from '@/store/configureStore';
import apiservice from '@/service/apis';

export default () => {
  const dispatch = useDispatch();
  const { user } = useStateValue();

  return (
    <a
      href="#"
      className="md:mt-0 ml-8 flex whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      onClick={() => {
        apiservice.Logoutuser({ id: user?.data?.user_id });
        localStorage.clear()
        sessionStorage.clear()
        dispatch({
          type: 'LOGIN',
          logged: null,
          data: null,
        });
      }}
    >
      Logout
    </a>
  );
};
// md:w-full flex items-center justify-center px-4 py-2 mt-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700
