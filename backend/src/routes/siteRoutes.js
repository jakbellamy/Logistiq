import { getSites, addNewSite, getSiteWithID, updateSite, deleteSite } from "../controllers/siteController";

const siteRoutes = (app) => {
    app.route('/sites')
    .get(getSites)
    .post(addNewSite)

    app.route('/sites/:siteId')
    .get(getSiteWithID)
    .patch(updateSite)
    .delete(deleteSite)
}

export default siteRoutes
