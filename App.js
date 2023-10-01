import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ShopNavigator from "./src/navigation/ShopNavigator";
import productsReducer from "./src/store/reducers/products";
import cartReducer from "./src/store/reducers/cart";
import ordersReducer from "./src/store/reducers/orders";


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}


