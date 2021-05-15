import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiservice from '@/service/apis';
import { useDispatch } from '@/store/configureStore';
import { api } from '@/service';
import Form, { useForm } from '@/container/Form';
import FormItem from '@/container/Form/formItem';
import Button from '@/components/common/button';
import Spin from '@/components/Spin';
import { Link, Input } from '@/components/common';
import { Title as LoginTitle, Card } from '@/presentational';
import useLogin from '@/hooks/useLogin'
import createPersistedState from 'use-persisted-state';

import { APP } from '@/constants/storage'

export const userL = createPersistedState(APP.user)

const wait = (timeout) => new Promise((resolve, reject) => setTimeout(() => {
  resolve()
}, timeout))
const apiToken = (token) => new Promise((res, rej) => {
  api.interceptors.request.use((config) => {
    config.headers.auth = token;
    return config;
  });
  setTimeout(() => {
    res();
  }, 1000);
});
export default () => {
  const [loader, setLoader] = useState(false);
  const [login, setLogin] = useLogin()
  const [user, setUser] = userL()

  const FormItems = () => {
    const v = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const userPayload = React.useRef({ email: '', password: '' });

    function refetch() {
      return apiservice.Login(userPayload.current);
    }


    async function saveUser(data) {
      const setoken = await apiToken(data?.token);
      dispatch({
        type: 'LOGIN',
        logged: true,
        data,
      });
      setUser(JSON.stringify(data))
      setLogin(data?.token ?? null)
      await wait(500)
      return history.push('');
    }

    return (
      <>
        <LoginTitle m="mb-3" xl3 bolder title="Login to your account" />
        <FormItem
          name="email"
          rule={{
            require: true,
            message: 'Email is required',
          }}
        >
          <Input float label="Email" name="email" />
        </FormItem>
        <FormItem name="password">
          <Input float label="Password" />
        </FormItem>
        <FormItem name="username">
          <Button
            onClick={(e) => {
              setLoader(true);
              // dispatch({ type: 'LOADER', loader: true })
              userPayload.current.email = 'preetham.veigas@niveussolutions.com';
              userPayload.current.password = 'Aa123456@';
              refetch().then(({ data }) => {
                if (data?.force_login) {
                  userPayload.current.force_login = 1;
                  return refetch().then(({ data }) => {
                    if (data?.user_id) {
                      return saveUser(data);
                    }
                  });
                }
                return data?.user_id ? saveUser(data) : null;
              });
            }}
          >
            <span className="text-center text-xl font-medium">
              Login
            </span>
          </Button>
        </FormItem>
        <Link
          to="/resetpassword"
          className="mt-3 cursor-pointer font-normal block text-center hover:text-blue-600"
        >
          Forgot Password
        </Link>
      </>
    );
  };

  return (
    <Card>
      <Form>
        {loader && <Spin />}
        <FormItems />
      </Form>
    </Card>
  );
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTEzZTc0OTAtYTIzNy0xMWVhLTlhY2ItZjkxMzFlNDZjM2VkIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTYxNDI1MTg3NSwiZXhwIjoxNjE0ODU2Njc1fQ.T0ixAQsVCA60A11VChC7TFg2AJKUdnAm_4kCUG1703E
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTEzZTc0OTAtYTIzNy0xMWVhLTlhY2ItZjkxMzFlNDZjM2VkIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTYxNDI1MTg3NSwiZXhwIjoxNjE0ODU2Njc1fQ.T0ixAQsVCA60A11VChC7TFg2AJKUdnAm_4kCUG1703E
