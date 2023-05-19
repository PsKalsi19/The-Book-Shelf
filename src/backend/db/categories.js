import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fantasy",
    description:
      "Fantasy books typically involve elements such as magical powers, mythical creatures like dragons or elves, quests, prophecies, and battles between good and evil.",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    description:
      "Drama often portray complex and conflicting human emotions, relationships, and situations.",
  },
  {
    _id: uuid(),
    categoryName: "Biography",
    description:
      "Biography books aim to present an accurate and comprehensive portrayal of the subject, often based on extensive research and interviews with the person or those who knew them.",
  },
  {
    _id: uuid(),
    categoryName: "Non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
