import React from 'react';
import { TFieldRHK } from '../types/fieldRHK';

type TextareaProps = {
  label?: string;
  classLabel?: string;
  classInput?: string;
  placeholder?: string;
  field: TFieldRHK;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({ label, classLabel, classInput, placeholder, field, rows, handleKeyDown }) => {
  return (
    <label className={`flex flex-col`}>
      <span className={`inline-block mb-[10px] ${classLabel}`}>{label}</span>
      <textarea
        placeholder={placeholder}
        onChange={e => field.onChange(e.target.value)}
        onBlur={() => field.onBlur()}
        value={field.value as string}
        name={field.name}
        className={`border border-[#000000] text-[16px] px-[15px] py-[8px] focus-visible:outline-0  ${classInput}`}
        onKeyDown={handleKeyDown}
        rows={rows || 3}
      />
    </label>
  );
};

export default Textarea;
