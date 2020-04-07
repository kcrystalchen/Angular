// Angular does not have component for service, so service is a plain 
// TypeScript. 

// When we create service file separately, we can reuse the logic and service in different places
export class CoursesService {
    getCourse(){
        return ["course1", "course2", "course3"];
    }
}
//then adding this service to app.modules.ts
