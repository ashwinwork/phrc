import { Request, Response } from "express";
export async function getHomePageContent(req: Request, res: Response) {
    res.render('index')
}

export async function getAboutUsPage(req: Request, res: Response) {
    res.render('about')
}


export async function getMissionPage(req: Request, res: Response) {
    res.render('mission-vision')
}


export async function getObjectivePage(req: Request, res: Response) {
    res.render('objective')
}

export async function getVolunteerPage(req: Request, res: Response) {
    res.render('volunteer')
}

export async function getProjectPage(req: Request, res: Response) {
    res.render('causes')
}

export async function getGalleryPage(req: Request, res: Response) {
    res.render('gallery')
}

export async function getBlogPage(req: Request, res: Response) {
    res.render('blog-grid')
}

export async function getEventPage(req: Request, res: Response) {
    res.render('events')
}

export async function getContactPage(req: Request, res: Response) {
    res.render('contact')
}

export async function getTeamDetailPage(req: Request, res: Response) {
    res.render('volunteer-single')
}
