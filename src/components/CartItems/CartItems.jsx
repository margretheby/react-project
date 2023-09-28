import { create } from 'zustand';
import { shallow } from 'zustand/shallow';
import { productsUrl } from '../../api/api.jsx'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi.jsx';

export function ItemsInCart() {
    /*let { id } = useParams(); */
    const { products, loading, throwError } = useApi(productsUrl) 

    const useItemsInCart = create((set) => ({
        items: '',
        addItem: (id) => set((state) => ({items: state.items + products.id})),
        emptyCart: () => set({ items: '' }),
    }));

    function AddItemToCart() {
        const { items, addItem, emptyCart } = useItemsInCart((state) => ({
            items: state.items,
            addItem: state.addItem.id,
            emptyCart: state.emptyCart,
        }), shallow
        );

        return (
            <div>
                <h1>Your items:</h1>
                {items}
            </div>
        )
    }
    return AddItemToCart();
}