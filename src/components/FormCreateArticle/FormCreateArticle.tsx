'use client';

import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Button from '../@UIkit/Button/Button';
import Input from '../@UIkit/Input/Input';
import Textarea from '../@UIkit/Textarea/Textarea';
import InputFile from '../@UIkit/InputFile/InputFile';

type TcreateArticleForm = {
  title: string;
  description: string;
  img: string | undefined;
};

const FormCreateArticle: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TcreateArticleForm>({
    defaultValues: {
      title: '',
      description: '',
      img: undefined,
    },
  });

  const onSubmit: SubmitHandler<TcreateArticleForm> = (data: TcreateArticleForm) => {
    const currentDate = new Date();
    const formData = { ...data, date: `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}` };

    console.log(formData, 'finalData');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[25px]">
        <Controller
          name="title"
          control={control}
          rules={{ required: 'Поле "Название" обязательно для заполнения' }}
          render={({ field }) => (
            <div>
              <Input
                label="Название:"
                placeholder="Введите текст"
                type="text"
                field={field}
                classLabel="text-[18px]"
              />
              {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            </div>
          )}
        />
      </div>
      <div className="mb-[25px]">
        <Controller
          name="description"
          control={control}
          rules={{ required: 'Поле "Описание" обязательно для заполнения' }}
          render={({ field }) => (
            <div>
              <Textarea
                label="Описание:"
                placeholder="Введите текст"
                field={field}
                classLabel="text-[18px] w-full"
                rows={12}
              />
              {errors.description && <span className="text-red-500">{errors.description.message}</span>}
            </div>
          )}
        />
      </div>

      <div className="mb-[25px]">
        <Controller
          name="img"
          control={control}
          render={({ field }) => (
            <InputFile
              label="Изображение:"
              placeholder="Введите текст"
              field={field}
              classLabel="text-[18px]"
            />
          )}
        />
      </div>

      <Button
        text="Создать"
        size="m"
      />
    </form>
  );
};

export default FormCreateArticle;
