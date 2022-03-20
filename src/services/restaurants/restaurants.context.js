import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  <RestaurantContextProvider>{children}</RestaurantContextProvider>;
};
