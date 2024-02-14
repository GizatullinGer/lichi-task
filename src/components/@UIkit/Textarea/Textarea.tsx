import React from 'react';
import { TFieldRHK } from '../types/fieldRHK';

type TextareaProps = {
  label?: string;
  classLabel?: string;
  classInput?: string;
  placeholder?: string;
  field: TFieldRHK;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({ label, classLabel, classInput, placeholder, field, rows }) => {
  return (
    <label className={`flex flex-col`}>
      <span className={`inline-block mb-[10px] ${classLabel}`}>{label}</span>
      <textarea
        placeholder={placeholder}
        onChange={e => field.onChange(e.target.value)}
        onBlur={() => field.onBlur()}
        value={field.value}
        name={field.name}
        className={`border border-[#000000] text-[16px] px-[15px] py-[8px] focus-visible:outline-0  ${classInput}`}
        rows={rows || 3}
      />
    </label>
  );
};

export default Textarea;
