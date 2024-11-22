import React, { useState } from "react";
import { create } from "zustand";
import allStore from "../models/stores";
import { deleteCart, getCart, updateCart } from "../apis/cart";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: async (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
    const cart = await getCart();
    if (!cart || cart.length === 0) {
      await updateCart(get().store, get().menus);
    } else {
      await deleteCart(); // 각 항목 삭제
      await updateCart(get().store, get().menus); // 새 데이터 추가
    }
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
  resetAll: async () => {
    // allStores의 모든 메뉴의 cnt를 0으로 초기화.
    allStore.forEach((store) => {
      store.menus.forEach((menu) => {
        menu.cnt = 0;
      });
    });
    set(initialState);
    await deleteCart();
  },
  updateMenuCount: async (menuId) => {
    set((state) => ({
      menus: state.menus.map((menu) =>
        menu.id === menuId ? { ...menu, cnt: menu.cnt + 1 } : menu
      ),
    }));
    await deleteCart(); // 각 항목 삭제
    await updateCart(get().store, get().menus); // 새 데이터 추가
  },
}));

export default useCartStore;
