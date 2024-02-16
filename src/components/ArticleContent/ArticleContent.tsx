import React from 'react';
import Image from 'next/image';

import { TgetArticleResponse } from '@/services/types/TarticleService';
import AddComments from '../AddComments/AddComments';
import { useGetCommentsQuery } from '@/services/CommentsService';
import CommentsSection from '../CommentsSection/CommentsSection';

type ArticleContentProps = { article: TgetArticleResponse };

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const { data: dataComments, isLoading, isError, isSuccess } = useGetCommentsQuery({});

  return (
    <React.Fragment>
      <div>
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="mt-[15px]">{article.description}</p>
        {article.img && (
          <Image
            src={Object.keys(article.img).length !== 0 ? (article.img as string) : '/kalendari-priroda-sneg-derevya-2018-1295927.jpg'}
            className="mt-[15px]"
            width={500}
            height={500}
            alt="img_post"
          />
        )}
      </div>
      <div>
        <AddComments article={article} />
      </div>
      <h3 className="mt-[15px] text-[18px] font-bold">Комментарии:</h3>
      {isSuccess &&
        dataComments
          .filter(comment => article.uuid === comment.uuid_article)
          .map(item => (
            <React.Fragment key={item.id}>
              <CommentsSection comments={item} />
            </React.Fragment>
          ))}
    </React.Fragment>
  );
};

export default ArticleContent;
