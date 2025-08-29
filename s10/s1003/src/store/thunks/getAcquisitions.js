import { datasetsActions } from "../slices/datasetsSlice"

export default function getAcquisitions() {

    return async (dispatch, getState) => {

        const response = await fetch("https://geocarta.org/api/curso/banxico/metrics/acquisitions")

        if (response.ok) {
            const acquisitions = await response.json()

            dispatch(datasetsActions.updateAcquisitions(acquisitions))
        }

    }

}