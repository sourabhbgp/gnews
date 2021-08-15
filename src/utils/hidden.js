export const onHide = ({ uid }) => {
  const data = localStorage.getItem('gnews');
  let updatedData = [];
  if (!data) {
    console.log('First Entry');
    updatedData = [{ [uid]: { hidden: true } }];
    localStorage.setItem('gnews', JSON.stringify(updatedData));
    return;
  }
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  let found = false;
  map(parsedData, (each) => {
    if (keys(each)?.[0] === uid) {
      found = true;
      console.log('Found');
    }
  });
  if (!found) {
    console.log('Not found ');
  }
};
