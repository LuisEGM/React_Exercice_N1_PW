export function appReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case "ADD_PRODUCT":
            let product = {...action.payload.product, id: state.products.length+1 }
            console.log(product)
            return {
                ...state, products: [ ...state.products, product ]
            }
        
        case "DELETE_PRODUCT":
            return {
                ...state, products: state.products.filter(p => p.id !== action.payload.productId)
            }
        
        case "CHANGE_NAME":
            return {...state, productName: action.payload.productName}

        case "CHANGE_IMAGE":
            return {...state, image: action.payload.image}

        case "CHANGE_PRICE":
            return {...state, price: action.payload.price}
        
        case "SET_PRODUCT_EDIT":
            return {...state, productEdit: action.payload.product}

        case "UPDATE_PRODUCT":
            let indiceElemento = state.products.findIndex(p => p.id === state.productEdit.id)
            let products = [...state.products]
            products[indiceElemento] = { id: state.productEdit.id, name: state.productName, image: state.image, price: state.price}
            console.log(products)
            return { ...state, products: products }

        default:
            return state
    }

}

