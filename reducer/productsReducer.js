const initialState = {
  WishList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (!state.WishList.includes(action.payload)) {
        return {
          ...state,
          WishList: [...state.WishList, action.payload],
        };
      }
      return state;

    case "DELTE_FROM_WISHLIST":
      const FilteredData = state.WishList.filter((item) => {
        return item.Name !== action.payload.Name;
      });

      console.log(FilteredData);

      return {
        ...state,
        WishList: FilteredData,
      };
    default:
      return state;
  }
}
