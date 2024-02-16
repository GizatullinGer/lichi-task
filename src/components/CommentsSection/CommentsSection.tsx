import { TgetCommentsResponse } from '@/services/types/TcommentsService';
import React, { useEffect, useState } from 'react';
import Button from '../@UIkit/Button/Button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Textarea from '../@UIkit/Textarea/Textarea';
import { useEditCommentMutation } from '@/services/CommentsService';

type TeditCommentArea = {
  comment: string;
};

type CommentsSectionProps = {
  comments: TgetCommentsResponse;
};

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  const [commentIsEdit, setCommentIsEdit] = useState<boolean>(false);
  const [editComment, { isError, isLoading, isSuccess }] = useEditCommentMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TeditCommentArea>({
    defaultValues: {
      comment: comments.comment,
    },
  });

  const onSubmit: SubmitHandler<TeditCommentArea> = (data: TeditCommentArea) => {
    const formData = { ...data, id: comments.id };
    editComment(formData);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  useEffect(() => {
    if (isSuccess) setCommentIsEdit(false);
  }, [isSuccess]);

  return (
    <div className="mt-[15px] last:mb-[5px]">
      <h4 className="font-bold">{comments.user}</h4>
      {commentIsEdit ? (
        <>
          <form
            className="flex justify-between gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <Controller
                name="comment"
                control={control}
                rules={{ required: 'Поле не должно быть пустым' }}
                render={({ field }) => (
                  <div>
                    <Textarea
                      placeholder="Отредактировать комментарий"
                      field={field}
                      classLabel="text-[18px] w-full"
                      handleKeyDown={handleKeyDown}
                      rows={5}
                    />
                    {errors.comment && <span className="text-red-500">{errors.comment.message}</span>}
                  </div>
                )}
              />
            </div>
            <div className="mt-[10px]">
              <Button
                text="Отправить"
                size="s"
              />
            </div>
          </form>
          {isLoading && <p>Обработка запроса...</p>}
          {isError && <p className="text-[#ff0000]">Произошла ошибка</p>}
        </>
      ) : (
        <div className="flex justify-between gap-4">
          <p className="mt-[5px] text-[14px]">{comments.comment}</p>
          <Button
            onClick={() => setCommentIsEdit(true)}
            text="Редактировать"
            size="s"
          />
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
