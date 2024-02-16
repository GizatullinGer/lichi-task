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
  const [addComment] = useAddCommentMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TaddCommentArea>({
    defaultValues: {
      comment: undefined,
    },
  });

  const onSubmit: SubmitHandler<TaddCommentArea> = (data: TaddCommentArea) => {
    const formData = { ...data, uuid_article: article.uuid, user: 'admin' };

    addComment(formData);
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
              rows={5}
            />
            {errors.comment && <span className="text-red-500">{errors.comment.message}</span>}
          </div>
        )}
      />

      <Button
        className="mt-[15px]"
        text="Добавить"
        size="s"
      />
    </form>
  );
};

export default AddComments;
