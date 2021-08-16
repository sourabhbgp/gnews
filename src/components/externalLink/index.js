import PropTypes from 'prop-types';

const ExternalLink = ({ url, children }) => {
  return (
    <a
      className="cursor-pointer"
      target="_blank"
      aria-label="article"
      href={url}
      rel="noreferrer nofollow">
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  url: PropTypes.string.isRequired,
};

export default ExternalLink;
