
import {
  configureStore,
 
} from '@reduxjs/toolkit';
import countryStore from "./reducers/countryStore";

export default configureStore({
 reducer: {countryStore},
});

