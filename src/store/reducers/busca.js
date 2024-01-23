import { createSlice } from "@reduxjs/toolkit"

const estadoInicial = ''

const buscaSlice = createSlice({
  name: "carrinho",
  initialState: estadoInicial,
  reducers: {
    mudarBusca: (state, { payload }) => payload,
    resetarBusca: () => estadoInicial
  }
})

export const { mudarBusca, resetarBusca } = buscaSlice.actions

export default buscaSlice.reducer
