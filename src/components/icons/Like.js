import * as React from 'react';

function SvgLike(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M160 224H53.333C23.936 224 0 247.936 0 277.333V448c0 29.397 23.936 53.333 53.333 53.333h64c29.397 0 53.333-23.936 53.333-53.333V234.667C170.667 228.779 165.888 224 160 224zM512 304c0-12.821-5.099-24.768-13.867-33.6 9.963-10.901 15.04-25.536 13.632-40.725-2.496-27.115-26.944-48.341-55.637-48.341H324.373c6.507-19.819 16.96-56.149 16.96-85.333 0-46.272-39.317-85.333-64-85.333-22.165 0-37.995 12.459-38.677 12.992-2.539 2.027-3.989 5.099-3.989 8.341v72.32L186.71 208.214c-1.472 3.221-1.28 6.955.555 9.984 3.136 5.184 4.736 10.731 4.736 16.448v213.333c0 5.141-.597 10.368-1.835 16.021-1.259 5.739 2.347 11.413 8.064 12.693 9.365 2.112 18.539 3.285 25.771 3.285H419.82c23.232 0 43.563-15.659 48.32-37.269 2.453-11.115 1.003-22.336-3.84-32.043 15.765-7.936 26.368-24.192 26.368-42.688 0-7.531-1.728-14.784-5.013-21.333C501.397 338.731 512 322.496 512 304z" />
    </svg>
  );
}

export default SvgLike;