import Link from 'next/link';

const Previous = ({ currentPageNo }) => {
  if (!currentPageNo) return null;

  // If you are on the first page, dont show previous link.
  if (0 === currentPageNo - 1) return null;

  const paginationLink = `/page/${currentPageNo - 1}/`;

  return (
    <Link href={paginationLink}>
      <a className="border border-gray-300 px-3 py-2 mr-4 transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white text-base rounded">
        Previous
      </a>
    </Link>
  );
};

export default Previous;
