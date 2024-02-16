import { TgetCommentsResponse } from '@/services/types/TcommentsService';
import React from 'react';

type CommentsSectionProps = {
  comments: TgetCommentsResponse;
};

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <div className="mt-[15px]">
      <h4 className="font-bold">{comments.user}</h4>
      <p className="mt-[5px] text-[14px]">{comments.comment}</p>
    </div>
  );
};

export default CommentsSection;
