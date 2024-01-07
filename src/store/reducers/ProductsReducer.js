const initState = {
  products: [
    {
      id: 1,
      name: "food card",
      description: "This card is used for spending on Food merchants",
      final_price: 21,
      original_price: 30,
      img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",
      quantity: 1
    },
    {
        id: 2,
        name: "travel card",
        description: "This card is used for spending on Travel and hotel bookings",
        final_price: 20,
        img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",
        quantity: 1
    },
    {
        id: 3,
        name: "epic card",
        description: "Use this card and get benefits on every transaction",
        final_price: 40,
        img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",
        quantity: 1
    },
    {
        id: 4,
        name: "happay premium card",
        description: "Use this card and get benefits on every transaction",
        final_price: 40,
        img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",
        quantity: 1
    }
  ],
  product: {},
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        // product: state.products.find(
        //   (product) => product.id === parseInt(action.id)
        // ),
      };
    default:
      return state;
  }
};
export default ProductsReducer;
