import { useCallback, useState } from "react";

export const useSimpleForm = () => {
  const [values, setValues] = useState({});

  const setFieldValue = useCallback(
    (name, value) => {
      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const getFieldValue = (name) => {
    return values[name];
  };

  return {values, setFieldValue, getFieldValue}
};
