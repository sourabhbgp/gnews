import { map } from 'lodash';
import { LocaleData } from '../../constants/localeData';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Tab = ({ locale }) => {
  return (
    <nav className="flex flex-row">
      {map(LocaleData, (data, i) => (
        <Link href={'/'} locale={data.locale} key={i}>
          <a
            className={`${
              locale === data.locale ? 'border-blue-500 font-medium' : ''
            } text-gray-600 py-6 px-6 block hover:text-blue-500 focus:outline-none border-b-2 flex-1 text-center  cursor-pointer`}>
            {data.lang}
          </a>
        </Link>
      ))}
    </nav>
  );
};

Tab.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Tab;
