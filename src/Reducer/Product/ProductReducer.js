export const productListReducer = (state = { products: [] },
    action) => {
    switch (action.type) {
        case "PRODUCT_LIST_REQUEST": return ({
            loading: true, products: []
        })
        case "PRODUCT_LIST_SUCCESS": return ({
            loading: false, products: action.payload
        })
        case "CREATE": return ({})
        case "READ": return ({})
        case "UPDATE": return ({})
        case "DELETE": return ({})
        case "ALL": return ({})
        default: return (state)
    }
}