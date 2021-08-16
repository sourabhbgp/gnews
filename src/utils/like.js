import { map, values, keys, filter } from 'lodash';

export const onLike = ({ status, uid }) => {
  const data = localStorage.getItem('gnews');
  let updatedData = [];
  if (!data) {
    updatedData = [{ [uid]: { status: true, count: 1 } }];
    localStorage.setItem('gnews', JSON.stringify(updatedData));
    return updatedData;
  }

  const parsedData = JSON.parse(data);
  let found = false;
  map(parsedData, (each, i) => {
    if (keys(each)?.[0] === uid) {
      found = true;
      let count = values(each)?.[0].count;

      let obj = {
        [uid]: {
          ...values(each)?.[0],
          status,
          count: status ? ++count : --count,
        },
      };

      localStorage.setItem('gnews', JSON.stringify(updatedData));

      updatedData = filter(parsedData, (e) => {
        return keys(e)?.[0] !== uid;
      }).concat(obj);
    }
  });

  if (found) return updatedData;

  if (!found) {
    updatedData = [...parsedData].concat({
      [uid]: { status, count: 1 },
    });

    localStorage.setItem('gnews', JSON.stringify(updatedData));
    return updatedData;
  }
};
