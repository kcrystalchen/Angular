// Angular does not have component for service, so service is a plain 
// TypeScript. 


// When we create service file separately, we can reuse the logic and the service in different places
export class firstService {
    getKrystal(){
        return ["Krystal ", "another Krystal", "one more Krystal"];
    }
}

//then adding this service to app.modules.ts
// so it injects the data to the component 
