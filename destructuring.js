//destructuring

const obj = {
  bao: 1,
  camille: '2',
  graham: '3',
  matt: '4',
  nestedObj: {
    moo: 'cow'
  }
};

const saynumbers = (params) => {
  const { camille, bao, matt: matt2, graham, nestedObj } = params;
  const { moo } = nestedObj
  console.log(bao);
  console.log(camille);
  console.log(graham);
  console.log(matt2);
  console.log(moo);
  
}

saynumbers(obj);
