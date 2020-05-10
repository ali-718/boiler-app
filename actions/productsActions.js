export const AddToWishlist = (data) => (dispatch) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: data,
  });
};
