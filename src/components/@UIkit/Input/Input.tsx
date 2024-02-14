import React from 'react';
import { TFieldRHK } from '../types/fieldRHK';

type InputProps = {
  label?: string;
  classLabel?: string;
  classInput?: string;
  field: TFieldRHK;
  placeholder?: string;
  type: 'text' | 'number' | 'password' | 'email';
};

const Input: React.FC<InputProps> = ({ label, classLabel, classInput, field, placeholder, type }) => {
  return (
    <label className={`flex flex-col`}>
      <span className={`inline-block mb-[10px] ${classLabel}`}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={e => field.onChange(e.target.value)}
        onBlur={() => field.onBlur()}
        value={field.value}
        name={field.name}
        className={`border border-[#000000] text-[16px] px-[15px] py-[8px] focus-visible:outline-0 ${classInput}`}
      />
    </label>
  );
};

export default Input;
