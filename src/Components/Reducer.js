
export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((e) => {
                return e.id !== action.payload;
            })
        }
    }
    if (action.type === "CLEAR_CART") {
        return { ...state, item: [] }
    }


    if (action.type === "INCREMENT_ITEM") {
        let UpdatedCount = state.item.map((e) => {
            if (e.id === action.payload) {
                return { ...e, quantity: e.quantity + 1 }
            }
            return e;
        })
        return { ...state, item: UpdatedCount }
    }

    if (action.type === "DECREMENT_ITEM") {
        let UpdatedCount = state.item.map((e) => {
            if (e.id === action.payload) {
                return { ...e, quantity: e.quantity - 1 }
            }
            return e;
        }).filter((e) => {
            return e.quantity !== 0;
        })
        return { ...state, item: UpdatedCount }
    }

    if (action.type === "TOTAL_ITEM") {
        let { totalItem, totalAmount } = state.item.reduce(
            (acc, eVal) => {
                let { price, quantity } = eVal;
                let updatedAmount = quantity * price;
                acc.totalAmount += updatedAmount;
                acc.totalItem += quantity;
                return acc;   // acc= total data stored
            },
            {
                totalItem: 0,
                totalAmount: 0
            });
        return { ...state, totalItem, totalAmount }

    }
    return state;
}


