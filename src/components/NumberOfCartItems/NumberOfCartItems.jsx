import { React } from 'react';
import { shallow } from 'zustand/shallow';
import useItemsStore from '../../variables/useItemsStore.jsx'

export function NumberOfCartItems () {
    const { count, addOne, clearCount } = useItemsStore(
        (state) => ({
            count: state.count,
            addOne: state.addOne,
            clearCount: state.clearCount,
        }),
        shallow,
    );

    return (
        <div className='pr-3 py-2'>({count})</div>
    )
}