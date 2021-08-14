import Link from 'next/link';

const Next = ({ currentPageNo, pagesCount }) => {
  if (!currentPageNo || !pagesCount) return null;

  // If you are on the last page, dont show next link.
  if (pagesCount < currentPageNo + 1) return null;

  const paginationLink = `/page/${currentPageNo + 1}/`;

  return (
    <Link href={paginationLink}>
      <a className="border border-gray-300 px-3 py-2 ml-4 transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white  text-base rounded">
        Next
      </a>
    </Link>
  );
};

export default Next;
