import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import producto from './producto-reducer'
import compra from './compra-reducer'
import venta from './venta-reducer'
import detalleVenta from './detalleVenta-reducer'
import detalleCompra from './detalleCompra-reducer'
import almacen from './almacen-reducer'
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  producto: producto,
  compra: compra,
  venta: venta,
  detalleVenta: detalleVenta,
  detalleCompra: detalleCompra,
  almacen: almacen,
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;