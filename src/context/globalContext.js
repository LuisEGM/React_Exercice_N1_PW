import { createContext, useReducer } from 'react'
import { productsInfo } from '../utils/productsInfo'
import { appReducer } from './appReducer'

const initialState = {
    products: productsInfo,
    productName: "Nombre de inicial",
    price: 0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU",
    productEdit: {}
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const changeProductName = (productName) => {
        dispatch({ type: "CHANGE_NAME", payload: { productName }})
    }

    const changeImage = (image) => {
        dispatch({ type: "CHANGE_IMAGE", payload: { image }})
    }

    const changePrice = (price) => {
        dispatch({ type: "CHANGE_PRICE", payload: { price }})
    }

    const addProduct = (product) => {
        dispatch({ type: "ADD_PRODUCT", payload: { product }})
    }

    const deleteProduct = (productId) => {
        dispatch({ type: "DELETE_PRODUCT", payload: { productId }})
    }

    const setProductEdit = (product) => {
        changeProductName(product.name)
        changeImage(product.image)
        changePrice(product.price)
        dispatch({ type: "SET_PRODUCT_EDIT", payload: { product }})
    }
    
    const updateProduct = () => {
        dispatch({ type: "UPDATE_PRODUCT" })
    }

    return <GlobalContext.Provider value={{...state, addProduct, changePrice, changeProductName, changeImage, deleteProduct, setProductEdit, updateProduct}}>
        {children}
    </GlobalContext.Provider>
}
