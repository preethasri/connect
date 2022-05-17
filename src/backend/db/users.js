import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // user1
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    userHandler:"adarsh1997",
    fullName:"Adarsh Balika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Aspiring FrontEnd Developer",
    website:"https://adarshbalika.netlify.app/",
    profileUrl:"https://res.cloudinary.com/preetha/image/upload/v1652684041/connect/girlpic6_sey5om.jpg",
    followers:[],
    following:[],
  },
  // user2
  {
    _id: uuid(),
    firstName: "Preetha",
    lastName: "Srinivasan",
    username: "preetha",
    password: "chitra",
    fullName:"PreethaSrinivasan",
    userHandler:"preetha2000",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"learning FrontEnd @neogcamp",
    website:"https://homepreetha.netlify.app/",
    profileUrl:"https://res.cloudinary.com/preetha/image/upload/v1652684031/connect/girlpic3_sl9tmn.jpg",
    

  },
  // user3
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    password: "tanay123",
    fullName:"TanayPratap",
    userHandler:"tanay@2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Fixing Education",
    website:"https://twitter.com/invactHQ",
    profileUrl:"https://res.cloudinary.com/preetha/image/upload/v1652684039/connect/girlpic5_dpyova.jpg",
    
  },
  // user4
  {
    _id: uuid(),
    firstName: "Akansha",
    lastName: "Choudhary",
    username: "akansha",
    userHandler:"akansha@5",
    password: "akansha123",
    fullName:"AkanshaChoudhary",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"ShapingCareers at neog",
    
    profileUrl:"https://res.cloudinary.com/preetha/image/upload/v1652684007/connect/girlpic1_vi66cy.jpg",
    
  },
  // user5
  {
    _id: uuid(),
    firstName: "Tanvi",
    lastName: "Priya",
    username: "tanvi",
    password: "tanvi123",
    userHandler:"tanvi@98",
    fullName:"TanviPriya",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"shaping careers @neogCamp",
    website:"https://neog.camp/",
    profileUrl:"https://res.cloudinary.com/preetha/image/upload/v1652684006/connect/girlpic2_nxes45.jpg",
   
  },
  // user6
  {
    _id: uuid(),
    firstName: "Srinithi",
    lastName: "Sridharan",
    username: "srinithi",
    userHandler:"srinithi@20",
    password: "srinithi123",
    fullName:"SrinithiSridharan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"system Engineer@cognizant",
    
    profileUrl:"https://res.cloudinary.com/preetha/image/upload/v1652684041/connect/girlpic6_sey5om.jpg",
  
  },
  

];
