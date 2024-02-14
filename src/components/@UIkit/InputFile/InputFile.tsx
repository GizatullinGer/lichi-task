import React, { useRef, useState } from 'react';
import { TFieldRHK } from '../types/fieldRHK';
import Button from '../Button/Button';

type InputFileProps = {
  label?: string;
  classLabel?: string;
  classInput?: string;
  field: TFieldRHK;
  placeholder?: string;
};

const InputFile: React.FC<InputFileProps> = ({ label, classLabel, classInput, field, placeholder }) => {
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Проверяем формат файла
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Пожалуйста, выберите файл в формате JPG или PNG.');
        clearInput(); // Очищаем input
        return;
      }

      // Создаем превью изображения
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Вызываем onChange передавая файл
      field.onChange(file);
    }
  };

  // Функция для очистки значения input
  const clearInput = () => {
    setPreview(undefined);
    field.onChange(undefined); // Сбрасываем значение в undefined
    // Очищаем значение input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <label className={`flex flex-col`}>
        <span className={`inline-block mb-[10px] ${classLabel}`}>{label}</span>
        <input
          ref={fileInputRef}
          type="file"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={() => field.onBlur()}
          name={field.name}
          accept="image/jpeg, image/png"
          className={`border border-[#000000] text-[16px] px-[15px] py-[8px] focus-visible:outline-0 ${classInput}`}
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: '100%', marginTop: '10px' }}
          />
        )}
      </label>
      {preview && (
        <div className="mt-[15px] w-full text-center">
          <Button
            size="s"
            onClick={clearInput}
            text="Очистить"
          />
        </div>
      )}
    </>
  );
};

export default InputFile;
