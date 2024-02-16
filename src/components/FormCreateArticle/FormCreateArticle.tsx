'use client';

import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import Button from '../@UIkit/Button/Button';
import Input from '../@UIkit/Input/Input';
import Textarea from '../@UIkit/Textarea/Textarea';
import InputFile from '../@UIkit/InputFile/InputFile';
import { useCreateArticleMutation } from '@/services/ArticleService';

type TcreateArticleForm = {
  title: string;
  description: string;
  img: FileList | undefined;
};

const FormCreateArticle: React.FC = () => {
  const [createArticle, { isSuccess, isError, isLoading }] = useCreateArticleMutation();

  const {
    handleSubmit,
    control,
    reset,
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
    const formData = { ...data, uuid: uuidv4(), date: `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}` };

    createArticle(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
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
      <div className="mt-[25px]">
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

      <div className="mt-[25px]">
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

      <div className="mt-[25px] text-[20px] flex items-center gap-8">
        <Button
          text="Создать"
          size="m"
        />

        {isLoading && <p>Обработка запроса...</p>}
        {isError && <p className="text-[#ff0000]">Ошибка создания поста</p>}
        {isSuccess && <p className="text-[green]">Пост успешно создан!</p>}
      </div>
    </form>
  );
};

export default FormCreateArticle;
