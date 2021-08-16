import { useRouter } from 'next/router';
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { Search } from '../icons';

const SearchComp = ({ defaultTerm }) => {
  const router = useRouter();
  const [term, setTerm] = useState(defaultTerm);

  return (
    <div className="md:px-4 py-8 ">
      <form
        className="flex justify-center items-center w-full"
        onSubmit={(e) => {
          e.preventDefault();

          if (!isEmpty(term)) router.push(`/search/?q=${term}`);
          else router.push('/');
        }}>
        <input
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white text-base w-5/12  focus:outline-none flex-1 max-w-md"
          placeholder="Enter the Search Term"
          name="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="px-6 md:px-8 rounded-r-lg bg-blue-500 text-white font-bold py-4 uppercase border-blue-500 border-t border-b border-r  text-base  focus:outline-none ">
          <Search width={24} height={24} fill={'#ffffff'} />
        </button>
      </form>
    </div>
  );
};

export default SearchComp;
