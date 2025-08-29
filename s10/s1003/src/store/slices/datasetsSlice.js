import { createSlice } from "@reduxjs/toolkit"

export const datasetsSlice = createSlice({

    name: "datasets",

    initialState: {
        acquisitions: [],
        reportAcquisitions: []
    },

    reducers: {

        updateAcquisitions(state, { payload: acquisitions }) {

            state.acquisitions = acquisitions
            state.reportAcquisitions = Object.entries(acquisitions.reduce((reporte, { fecha, monto }) => {

                let total = reporte[fecha] || 0
                total += monto
                reporte[fecha] = total

                return reporte

            }, {})).map(([key, value]) => ({
                fecha: key,
                total: value
            }))

        }

    }

})

export const datasetsActions = datasetsSlice.actions