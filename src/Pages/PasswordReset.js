import React, { useState } from 'react';

import { api } from '@/service';
import Form, { useForm } from '@/container/Form';
import FormItem from '@/container/Form/formItem';
import Button from '@/components/common/button';
import Spin from '@/components/Spin';
import { Link, Input } from '@/components/common';
import { Title as LoginTitle, Card } from '@/presentational';
import { useDispatch } from '@/store/configureStore';
import { useHistory } from 'react-router-dom';
import apiservice from '@/service/apis';


export default () => {
  const [loader, setLoader] = useState(false);

  const FormItems = () => {
    const v = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const userPayload = React.useRef({ email: '', password: '' });

    function refetch() {
      return apiservice.Login(userPayload.current);
    }

    const apiToken = (token) => new Promise((res, rej) => {
      api.interceptors.request.use((config) => {
        config.headers.auth = token;
        return config;
      });
      setTimeout(() => {
        res();
      }, 1000);
    });

    async function saveUser(data) {
      const setoken = await apiToken(data?.token);
      dispatch({
        type: 'LOGIN',
        logged: true,
        data,
      });
      setLoader(false);
      return history.push('');
    }

    return (
      <>
        <LoginTitle m="mb-3" bolder xl3 title="Reset your password" />
        <FormItem
          name="email"
          rule={{
            require: true,
            message: 'Email is required',
          }}
        >
          <Input label="Email" float />
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
              Submit
            </span>
          </Button>
        </FormItem>
        <Link
          to="/login"
          className="mt-3 cursor-pointer font-normal block text-center hover:text-blue-600"
        >
          Login
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
