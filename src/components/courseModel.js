const courseModel =[ {
    id: 1, // Unique identifier for the course
    name: 'Introduction to React Native',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: 'logo192.png', // Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      },
     
      {
        week: 3,
        topic: 'make a team for handle individul work ',
        content: 'Creating a simple  navbar first to acces functionality.'
      },
      {
        week: 4,
        topic: 'make a team for handle individul work ',
        content: 'Creating a simple  access page .'
      },
    ],
    students: [
      {
        id: 101,
        name: ' Johnson',
        email: 'alicsdne@example.com',
      },
      {
        id: 102,
        name: ' alen Smith',
        email: 'bobsmth@example.com',
      },
    
      {
        id: 103,
        name: 'Alice ',
        email: 'alice@example.com',
      },
      {
        id: 104,
        name: 'Smith',
        email: 'bobsm@example.com',
      },
    ],  
  },

  {
    id: 2, // Unique identifier for the course
    name: 'Introduction to ReactJs code ',
    instructor: 'Joy nem', // Name of the course instructor
    description: 'Learn the basics of Reactjs development and build your first mobile app.',
    enrollmentStatus: 'inprogress', // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: 'your.image.here', // Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      },
     
      {
        week: 3,
        topic: 'make a team for handle individul work ',
        content: 'Creating a simple  navbar first to acces functionality.'
      },
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
    
      {
        id: 103,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 104,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
    ],  
  },
  
];
  
  export default courseModel;
  