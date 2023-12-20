import MOCK_DATA from "../mock/data";

const pedirDatos = (bool) => {
    return new Promise((resolve) => {if (bool === true) {
                resolve(MOCK_DATA)
            }
    })
}
export default pedirDatos