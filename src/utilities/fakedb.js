// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let summary_cart = {};
  if (!exists) {
    summary_cart[id] = 1;
  }
  else {
    summary_cart = JSON.parse(exists);
    if (summary_cart[id]) {
      const newCount = summary_cart[id] + 1;
      summary_cart[id] = newCount;
    }
    else {
      summary_cart[id] = 1;
    }
  }
  updateDb(summary_cart);
}

const getDb = () => localStorage.getItem('summary_cart');
const updateDb = cart => {
  localStorage.setItem('summary_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const summary_cart = JSON.parse(exists);
    delete summary_cart[id];
    updateDb(summary_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('summary_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
