import { map, values, keys, filter } from 'lodash';

export const onLike = ({ status, uid }) => {
  const data = localStorage.getItem('gnews');
  let updatedData = [];

  /**
   * Local Storage is empty
   * First time entry is made in local storage
   */
  if (!data) {
    updatedData = [{ [uid]: { status: true, count: 1 } }];
    localStorage.setItem('gnews', JSON.stringify(updatedData));
    return updatedData;
  }

  /**
   * Local Storage has some data
   * In this case there is two case
   * Given UID may or may not be present
   */

  const parsedData = JSON.parse(data);
  let uid_found = false;
  let uid_value = {};

  // Searching for UID in the Local Storage

  map(parsedData, (each, i) => {
    if (keys(each)?.[0] === uid) {
      uid_found = true;
      let count = values(each)?.[0].count;

      uid_value = {
        [uid]: {
          ...values(each)?.[0],
          status,
          count: status ? ++count : --count,
        },
      };
    }
  });

  // Case 1 : UID Found

  if (uid_found) {
    updatedData = filter(parsedData, (e) => {
      return keys(e)?.[0] !== uid;
    }).concat(uid_value);
    localStorage.setItem('gnews', JSON.stringify(updatedData));

    return updatedData;
  }

  // Case 2 UID Not Found

  updatedData = [...parsedData].concat({
    [uid]: { status, count: 1 },
  });

  localStorage.setItem('gnews', JSON.stringify(updatedData));
  return updatedData;
};
