import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fantasy",
    imgUrl:"https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.jpg?updatedAt=1684597532959",
    description:
      "Fantasy books involves magic, creatures, quests, and battles between good and evil.",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    imgUrl: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Drama.jpg?updatedAt=1684597531793",
    description:
      "Drama often portray complex and conflicting human emotions, relationships, and situations.",
  },
  {
    _id: uuid(),
    categoryName: "Biography",
    imgUrl: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Biography.jpg?updatedAt=1684597528467",
    description:
      "Biography books aim to present an accurate and comprehensive portrayal of the subject.",
  },
  {
    _id: uuid(),
    categoryName: "Non-fiction",
    imgUrl: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Non-Fiction.jpg?updatedAt=1684597533100",
    description:
      "Non-fiction describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    imgUrl: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Horror.jpg?updatedAt=1684597532830",
    description:
      "Horror is meant to cause discomfort and fear for readers.",
  },
];
