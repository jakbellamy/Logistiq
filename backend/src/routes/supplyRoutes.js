import { getSupply, addNewSupply, getSupplyWithId, updateSupply, deleteSupply } from "../controllers/supplyController";

const supplyRoutes = (app) => {
    app.route('/supply')
    .get(getSupply)
    .post(addNewSupply)

    app.route('/supply/:supplyId')
    .get(getSupplyWithId)
    .patch(updateSupply)
    .delete(deleteSupply)
}

export default supplyRoutes
