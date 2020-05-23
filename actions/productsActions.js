export const AddToWishlist = (data) => (dispatch) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: data,
  });
};

export const DeleteFromWishlist = (data) => (dispatch) => {
  dispatch({
    type: "DELTE_FROM_WISHLIST",
    payload: data,
  });
};
