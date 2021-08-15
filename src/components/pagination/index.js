import Link from 'next/link';
import PropTypes from 'prop-types';
import { createPaginationLinks } from '../../utils/pagination';
import cx from 'classnames';
import Previous from './previous';
import Next from './next';

const Pagination = ({ pagesCount, currentPageNo }) => {
  if (!pagesCount) return null;

  const paginationLinks = createPaginationLinks(currentPageNo, pagesCount);

  return (
    <div className="flex justify-center my-8">
      <Previous currentPageNo={currentPageNo} />

      {paginationLinks.map((pageNo, index) => {
        const paginationLink = `/page/${pageNo}/`;

        return 'number' === typeof pageNo ? (
          <Link key={`id-${index}`} href={paginationLink}>
            <a
              className={cx(
                'border border-gray-300 px-4 py-2 transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white text-base rounded',
                {
                  'is-active bg-blue-500 text-white': pageNo === currentPageNo,
                },
                {}
              )}>
              {pageNo}
            </a>
          </Link>
        ) : (
          // If its "..."
          <span key={`id-${index}`} className="px-3 py-2">
            {pageNo}
          </span>
        );
      })}
      <Next currentPageNo={currentPageNo} pagesCount={pagesCount} />
    </div>
  );
};

Pagination.propTypes = {
  pagesCount: PropTypes.number,
};

Pagination.defaultProps = {
  pagesCount: 0,
};

export default Pagination;
