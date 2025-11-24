const userProfile = {
            id: 101,

            name: {
            first: "Brian",
            last: "Letting"
            },
            
            contact: {
            email: "jeff@example.com",
            phones: ["+254700000001", "+254700000002"]
            },
            
            address: {
                current: {
                    city: "Nairobi",
                    street: "Westlands Ave",
                    postalCode: "00100"
                },
                 previous: [
                {
                    city: "Eldoret",
                    street: "Main Street",
                    postalCode: "30100"
                },
                {
                    city: "Kisumu",
                    street: "Lake View Road",
                    postalCode: "40100"
                }
                ]
            },

            preferences: {
                    theme: "dark",
                    language: "en",
                notifications: {
                email: true,
                sms: false,
                push: ["promotions", "updates"]
                }
            },

            projects: [
                {
                    id: 1,
                    name: "POS System",
                    technologies: ["React", "FastAPI", "PostgreSQL"],
                tasks: [
                    { title: "Set up DB", done: true },
                    { title: "Design UI", done: false }
                ]
                },
                {
                    id: 2,
                    name: "Portfolio Website",
                    technologies: ["HTML", "CSS", "JavaScript"],
                tasks: [
                    { title: "Create About Page", done: true },
                    { title: "Deploy to Netlify", done: false }
                ]
                }
                ]
        };     
 

// a) "Deploy to Netlify"
console.log("a.)", userProfile.projects[1].tasks[1].title);

// b) "updates"
console.log("b.)", userProfile.preferences.notifications.push[1]);

// c) "Lake View Road"
console.log("c.)", userProfile.address.previous[1].street);

// d) "PostgreSQL"
console.log("d.)", userProfile.projects[0].technologies[2]);





