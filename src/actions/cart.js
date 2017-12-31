export const add = 'add';
export const addToCart = (item) =>{
    return {
        type:add,
        item
    };
}
