import { map } from 'lodash';
import Card from '../card';

const CardList = ({ totalArticles, articles }) => {
  if (!totalArticles) return null;

  return (
    <div className="py-8 px-4">
      <p className="">{`Showing ${1} - ${3} of ${totalArticles} results`}</p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-8">
        {map(articles, (article, i) => (
          <Card article={article} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
