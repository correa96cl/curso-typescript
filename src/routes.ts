import { Request, Response } from 'express';

import CreateCoursesService from './CreateCoursesService';

export function createCourse(request: Request, response: Response) {
    CreateCoursesService.execute({
        name: "NODE JS",
        educator: "aa",
        duration: 10
    });

    CreateCoursesService.execute({
        name: "Reeact JS",
        educator: "aa"
    });

    return response.send();
}