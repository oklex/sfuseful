import { IService, IDepartments } from '../models/services'

export const mockData: IService[] = [
    {
        title: "SFU Beedie Writing Mentors",
        subtitle: "Academic Advising ",
        shortDescription: "Beedie undergraduate students have the opportunity to recieve free, one-on-one mentorship from a trained writing expert. Students can book a 60-minute session online once a week. Alternately, they are able to see mentors for 30-minute drop-in sessions, which are available on a first come, first serves basis but can be excerised multiple times in a week. Students will have to come prepared, with most of their assignment completed and specific questions or requests based on the assignment or on their writing skills. ",
        departments: [
            IDepartments.Beedie,
        ],
        source: "https://beedie.sfu.ca/resources/undergraduates/writing-mentors",
        contact: "Register at Beedie Community: https://beediecommunity.sfu.ca/home.html"
    },
    {
        title: "Mentors in Business ",
        subtitle: "Academic Advising ",
        shortDescription: "Beedie students, both graduates and undergraduates, connect with individuals from the business community in areas of their career interest in order to make better-informed career choices and expand their understanding of a target industry. The program provides a platform for working professionals to share insights, experiences and knowledge that will inspire and motivate students to embark on their career search. ",
        departments: [
            IDepartments.Beedie,
        ],
        source: "https://beedie.sfu.ca/resources/mentors-in-business",
        contact: "Login on Beedie Community Account to access registration form"
    },
    {
        title: "Connect with an advisor ",
        subtitle: "Career and Academic Advising ",
        shortDescription: "Gives students information on who to contact on different advising needs such as Academic Advising, Career Management Centre, Student Engagement Office, Office of International Programs, Co-operative Education ",
        departments: [
            IDepartments.Beedie,
        ],
        source: "https://beedie.sfu.ca/resources/undergraduates/connect-with-an-advisor",
        contact: ""
    },
    {
        title: "Develop your Career",
        subtitle: "Career Management Centre ",
        shortDescription: "The Career Management Centre will help students strategize and build their career. The programs, resources, and a networking opportunities will set students up for professional success. Types of advising include: Career exploration specific to your concentration, comprehensive resume/cover letter review, job search strategies, managing your online presence, networking tips, mock interviews and interview tips, salary negotiation, familiarization with additional resources, and resources and information on industry/abour market",
        departments: [
            IDepartments.Beedie,
        ],
        source: "https://beedie.sfu.ca/resources/undergraduates/develop-your-career",
        contact: "Book advising appointments through Beedie Community. Drop- in advising is from Monday - Thursday: 1PM to 4PM. Contact bbacareers@sfu.ca if there are any questions."
    },
    {
        title: "Lecture Recordings ",
        subtitle: "IT services ",
        shortDescription: "Lectures given in selected theatres and classroom can be recorded digitally, and are available online for students.",
        departments: [
            IDepartments.All,
        ],
        source: "https://www.sfu.ca/itservices/elearning.html",
        contact: ""
    }
]
export default mockData;