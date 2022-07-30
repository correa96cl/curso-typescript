
interface Course {
    name: string; 
    duration?: number; 
    educator: string;
}
class CreateCoursesService {
    execute({ duration=8, educator, name }: Course) {

        console.log(duration, educator, name);
    }
}

export default new CreateCoursesService();