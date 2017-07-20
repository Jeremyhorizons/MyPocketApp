import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addClient: ['name', 'phone'],
  deleteClient: ['name']
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  clients: []
})

/* ------------- Reducers ------------- */

export const addClient = (state, { name, phone }) => {
    console.log("Added Client")
  return state.merge({ clients: state.clients.concat([{ name: name, phone: phone }])  })
}

export const deleteClient = (state, { name }) => {
    console.log("Deleted Client")
    const newClientList = state.clients.slice();
    let index;
    newClientList.forEach((client, i) => {
        if (client.name === name) {
            index = i;
        }
    });
  return state.merge({ clients: newClientList.slice(0,index).concat(newClientList.slice(index+1)) })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CLIENT]: addClient,
  [Types.DELETE_CLIENT]: deleteClient
})
