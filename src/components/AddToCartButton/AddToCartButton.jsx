import useItemsStore from '../../variables/useItemsStore.jsx'

export function AddToCartButton () {
    const { addOne } = useItemsStore();
    return (
        <button onClick={addOne} className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>Add to cart</button>
    )
}
