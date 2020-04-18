var x = {
  moo: {
    cow: 'bark'
  }
};

var y = {
  moo: {
    cow: 'bark'
  }
};

y = x;
y.moo.cow = 'yelp';

if (y.moo.cow) {
  console.log('im true da ba de ba da di');
} else {
  console.log('not true');
}
