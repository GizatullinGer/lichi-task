import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useAddCommentMutation } from '@/services/CommentsService';

import Textarea from '../@UIkit/Textarea/Textarea';
import Button from '../@UIkit/Button/Button';
import { TgetArticleResponse } from '@/services/types/TarticleService';

type TaddCommentArea = {
  comment: string;
};

type AddCommentsProps = { article: TgetArticleResponse };

const AddComments: React.FC<AddCommentsProps> = ({ article }) => {
  const [addComment, { isError, isLoading, isSuccess }] = useAddCommentMutation();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TaddCommentArea>({
    defaultValues: {
      comment: undefined,
    },
  });

  const onSubmit: SubmitHandler<TaddCommentArea> = (data: TaddCommentArea) => {
    const formData = { ...data, uuid_article: article.uuid, user: 'admin' };

    addComment(formData);
    reset();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="comment"
        control={control}
        rules={{ required: 'Поле не должно быть пустым' }}
        render={({ field }) => (
          <div>
            <Textarea
              placeholder="Оставить комментарий"
              field={field}
              classLabel="text-[18px] w-full"
              handleKeyDown={handleKeyDown}
              rows={5}
            />
            {errors.comment && <span className="text-red-500">{errors.comment.message}</span>}
          </div>
        )}
      />

      <div className="mt-[15px] text-[12px] flex items-center gap-8">
        <Button
          text="Добавить"
          size="s"
        />

        {isLoading && <p>Обработка запроса...</p>}
        {isError && <p className="text-[#ff0000]">Произошла ошибка</p>}
        {isSuccess && <p className="text-[green]">Отправлено</p>}
      </div>
    </form>
  );
};

export default AddComments;
