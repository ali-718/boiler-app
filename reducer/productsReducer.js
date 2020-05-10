const initialState = {
  WishList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        WishList: [...state.WishList, action.payload],
      };
    default:
      return state;
  }
}
