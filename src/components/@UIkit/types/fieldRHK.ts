export type FieldValue = string | number | boolean | FileList | File | Date;

export type TFieldRHK = {
  onChange: (value: FieldValue | undefined) => void;
  onBlur: () => void;
  value: FieldValue | undefined;
  name: string;
};
