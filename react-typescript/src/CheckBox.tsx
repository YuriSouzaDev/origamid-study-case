import React from 'react';

type CheckBoxProps = {
  label: string;
  id: string;
};

const CheckBox = ({ label, id }: CheckBoxProps) => {
  const [value, setValue] = React.useState(false);

  //   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //     setValue(event.currentTarget.checked);
  //   };

  return (
    <label
      style={{
        padding: '1rem',
        border: '1px solid',
        borderColor: value ? '#8D2' : '#F70',
      }}
      htmlFor={id}
    >
      {/* <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
        name={id}
        id={id}
      /> */}
      <input
        type="checkbox"
        checked={value}
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
        name={id}
        id={id}
      />
      {label}
    </label>
  );
};

export default CheckBox;
