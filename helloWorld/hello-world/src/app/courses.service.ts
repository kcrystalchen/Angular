// Angular does not have component for service, so service is a plain 
// TypeScript. 
export class CoursesService {
    getCourse(){
        return ["course1", "course2", "course3"];
    }
}