import {
  createAsyncThunk,
  createSlice,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
// Redux actions
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("../api/product");
    debugger;
    const products = await response.json();
    return products;
  }
);

// Redux reducer
export const productsReducer = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    isLoading: true,
    error: null,
    sort: "asc",
  },
  reducers: {
    sortProducts: (state, action) => {
      const order = action.payload;
      state.sort = order;
      state.products.sort((a, b) => {
        if (order === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
    categorizeProduct: (state, action) => {
      const category = action.payload;
      if (category === "all") state.filteredProducts = [];
      else {
        state.filteredProducts = state.products.filter(
          (item) => item.category === category
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export const { sortProducts } = productsReducer.actions;
export const { categorizeProduct } = productsReducer.actions;

// Redux store
export const store = configureStore({
  reducer: productsReducer,
});
