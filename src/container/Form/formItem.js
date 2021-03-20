import React, { useRef, useEffect, createRef } from 'react';
import clsx from 'clsx';
import { setFormValue, useForm } from './index';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default ({ name, children, rule }) => {
  const dispatch = setFormValue();
  const ref = createRef();
  const form = useForm();
  const verify = (name, { rule }) => {
    switch (name) {
      case 'email':
        const email = form[name];
        if (email && !validateEmail(email)) {

        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (ref && ref.current) {
      ref?.current.classList.add('my-5');
      ref.current.onblur = (e) => {
        if (rule?.require) {
          verify(name, rule);
        }
      };

      ref.current.onchange = (e) => dispatch({ type: name, value: e.target.value });
    }
  }, [ref]);

  return React.Children.map(children, (child) => React.cloneElement(child, { ref }));
};
