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
    order: "asc",
    category: "",
    limit: -1,
  },
  reducers: {
    sortProducts: (state, action) => {
      const order = action.payload;
      state.order = order;
      state.products.sort((a, b) => {
        if (order === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      state.filteredProducts.sort((a, b) => {
        if (order === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
    categorizeProduct: (state, action) => {
      const category = action.payload;
      state.category = category;
      if (category === "all") {
        state.filteredProducts = [];
        state.category = "";
      } else {
        state.filteredProducts = state.products.filter(
          (item) => item.category === category
        );
      }

      if (state.limit !== -1) {
        state.filteredProducts = (
          state.filteredProducts.length > 0
            ? state.filteredProducts
            : state.products
        ).filter((item, index) => index < state.limit);
      }

      state.products.sort((a, b) => {
        if (state.order === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      state.filteredProducts.sort((a, b) => {
        if (state.order === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
    limitProduct: (state, action) => {
      const limit = action.payload;
      state.limit = limit;

      if (state.category)
        state.filteredProducts = 
            state.products.filter((item) => item.category === state.category);
      else state.filteredProducts = [];

      if (limit === "removeLimit") {
        state.limit = -1;
      } else
        state.filteredProducts = (
          state.filteredProducts.length > 0
            ? state.filteredProducts
            : state.products
        ).filter((item, index) => index < limit);

        state.products.sort((a, b) => {
          if (state.order === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
        state.filteredProducts.sort((a, b) => {
          if (state.order === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
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
export const { limitProduct } = productsReducer.actions;

// Redux store
export const store = configureStore({
  reducer: productsReducer,
});
