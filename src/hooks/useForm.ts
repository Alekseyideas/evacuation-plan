import React from 'react';

interface IKeyObject {
  value: string;
  error?: boolean;
  errorText?: string;
}

interface Props {
  [key: string]: IKeyObject;
}

export const useForm = (initialValue: Props) => {
  const [form, setForm] = React.useState(initialValue);

  const addLink = (name: string, title: string, link: string) => {
    setForm((prevValues) => ({
      ...prevValues,
      [name]: {
        value:
          prevValues[name].value +
          `&nbsp;<a href="${link}" target="_blank">${title}</a>`,
        error: false,
        errorText: '',
      },
    }));
  };

  const onChangeHandler = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: {
        value,
        error: false,
        errorText: '',
      },
    }));
  };

  const updateForm = React.useCallback((name: string, data: IKeyObject) => {
    setForm((prevValues) => ({
      ...prevValues,
      [name]: data,
    }));
  }, []);

  return {
    form,
    addLink,
    onChangeHandler,
    updateForm,
  };
};
