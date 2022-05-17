import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"You only live once, but if you do it right, once is enough.” — Mae West",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "preetha",
        text: "great!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "swetha",
        text: "100%!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:"“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "preetha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tanay",
        text: "motivational!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "akansha",
        text: "keep going",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  

  {
    _id: uuid(),
    content:"“Never let the fear of striking out keep you from playing the game.”– Babe Ruth",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"Money and success don’t change people; they merely amplify what is already there.” — Will Smith",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],

    },
    username: "swetha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"“Not how long, but how well you have lived is the main thing.” — Seneca",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "srinithi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"n order to write about life first you must live it.”– Ernest Hemingway",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanay",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"Curiosity about life in all of its aspects, I think, is still the secret of great creative people.” – Leo Burnett",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanvi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"Life is not a problem to be solved, but a reality to be experienced.”– Soren Kierkegaard",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akansha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"The unexamined life is not worth living.” — Socrates",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "preetha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"Don’t settle for what life gives you; make life better and build something.” — Ashton Kutcher",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "preetha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"“I like criticism. It makes you strong.” — LeBron James",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "preetha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"“Live for each second without hesitation.” — Elton John",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[],
  },
  {
    _id: uuid(),
    content:"Life is like riding a bicycle. To keep your balance, you must keep moving.” — Albert Einstein",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "swetha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "srinithi",
        text: "yeah!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "akansha",
        text: "nice quote",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  
];
