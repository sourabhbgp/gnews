import { map, keys, values, filter } from 'lodash';

export const onHide = ({ uid }) => {
  const data = localStorage.getItem('gnews');
  let updatedData = [];
  if (!data) {
    updatedData = [{ [uid]: { hidden: true } }];

    localStorage.setItem('gnews', JSON.stringify(updatedData));
    return updatedData;
  }

  const parsedData = JSON.parse(data);

  let found = false;

  map(parsedData, (each, i) => {
    if (keys(each)?.[0] === uid) {
      found = true;
      let obj = { [uid]: { ...values(each)?.[0], hidden: true } };

      localStorage.setItem('gnews', JSON.stringify(updatedData));
      updatedData = filter(parsedData, (e) => {
        return keys(e)?.[0] !== uid;
      }).concat(obj);
    }
  });

  if (found) return updatedData;

  if (!found) {
    updatedData = [...parsedData].concat({ [uid]: { hidden: true } });
    localStorage.setItem('gnews', JSON.stringify(updatedData));
    return updatedData;
  }
};
