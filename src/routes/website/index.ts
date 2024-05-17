import { Router } from "express";

import * as viewController from "../../controller/website";

const websiteRouter = Router();

websiteRouter.get("/", viewController.getHomePageContent);

websiteRouter.get("/about", viewController.getAboutUsPage);
websiteRouter.get("/mission", viewController.getMissionPage);
websiteRouter.get("/objective", viewController.getObjectivePage);

websiteRouter.get("/teams", viewController.getVolunteerPage);
websiteRouter.get("/projects", viewController.getProjectPage);
websiteRouter.get("/gallery", viewController.getGalleryPage);
websiteRouter.get("/blog", viewController.getBlogPage);
websiteRouter.get("/events", viewController.getEventPage);
websiteRouter.get("/contact", viewController.getContactPage);
websiteRouter.get("/teamDetails=1", viewController.getTeamDetailPage);

export default websiteRouter;