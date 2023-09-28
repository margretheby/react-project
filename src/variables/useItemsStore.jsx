import { create } from 'zustand';

const useItemsStore = create((set) => ({
    count: 0,
    addOne: () => set((state) => ({ count: state.count + 1 })),
    clearCart: () => set({ count: 0 })
}));

export default useItemsStore;