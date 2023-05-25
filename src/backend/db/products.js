/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1bc40356-9c89-4cbf-a2d6-2ce12cf85db0",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Non-Fiction",
    price: 350,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Thinking%2C_Fast_and_Slow.jpg",
    pages: 499,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "CognitiveScienceEnthusiast",
        rating: 3,
        comment:
          "Kahneman's exploration of the two systems of thinking is mind-blowing. A must-read for anyone interested in decision-making and human behavior.",
        date: "2022-10-28",
      },
      {
        username: "PsychologyStudent",
        rating: 4.7,
        comment:
          "An insightful book that challenges the way we think and perceive the world. Kahneman's Nobel Prize-winning research is brilliantly explained.",
        date: "2022-10-20",
      },
    ],
    id: "1",
  },
  {
    _id: "3e03f85d-5255-424c-8a38-8c5e7920d747",
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "Non-Fiction",
    price: 500,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/91/TheBodyKeepstheScore.jpg",
    pages: 480,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "MindfulReader",
        rating: 5,
        comment:
          "A groundbreaking exploration of trauma and its impact on the body and mind.",
        date: "2022-11-25",
      },
      {
        username: "PsychologyEnthusiast",
        rating: 4.8,
        comment:
          "Van der Kolk's insights into trauma and healing are invaluable for both professionals and individuals.",
        date: "2022-11-15",
      },
    ],
    id: "2",
  },
  {
    _id: "8f1a53cd-7b1d-4ecc-a3be-e853cb86a40e",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "Non-Fiction",
    price: 350,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Ggas_human_soc.jpg",
    pages: 480,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "HistoryEnthusiast",
        rating: 4.7,
        comment:
          "Diamond presents a captivating analysis of the factors that shaped human history. A compelling and thought-provoking book.",
        date: "2022-11-25",
      },
      {
        username: "AnthropologyStudent",
        rating: 4.5,
        comment:
          "Guns, Germs, and Steel offers a fascinating perspective on the interconnectedness of geography, biology, and history.",
        date: "2022-11-15",
      },
    ],
    id: "3",
  },
  {
    _id: "2343cdba-4dbd-468b-bd72-6c47ce2f5e81",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    price: 700,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Steve_Jobs_by_Walter_Isaacson.jpg",
    pages: 688,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "TechEnthusiast",
        rating: 4.8,
        comment:
          "Walter Isaacson provides a comprehensive and insightful look into the life of Steve Jobs. A must-read for Apple enthusiasts.",
        date: "2022-10-15",
      },
      {
        username: "BusinessProfessional",
        rating: 4.6,
        comment:
          "Steve Jobs is an engrossing biography that delves into the complexities and genius of one of the most influential figures in technology.",
        date: "2022-10-05",
      },
    ],
    id: "4",
  },
  {
    _id: "631da4ef-0f1f-4618-8610-cce7c8628e0e",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    price: 600,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg",
    pages: 736,
    rating: 3.9,
    isBestSeller: false,
    reviews: [
      {
        username: "FantasyLover",
        rating: 5,
        comment:
          "A beautifully written and immersive epic that will captivate you from beginning to end.",
        date: "2022-12-15",
      },
      {
        username: "Bookworm456",
        rating: 3.8,
        comment:
          "An enchanting and masterfully crafted tale with a compelling protagonist.",
        date: "2022-11-30",
      },
    ],
    id: "5",
  },
  {
    _id: "90af5233-17d0-413a-8b51-218e3d169ca6",
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    category: "Non-Fiction",
    price: 350,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/73/Thetippingpoint.jpg",
    pages: 298,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "SocialTrendsObserver",
        rating: 4.5,
        comment:
          "Gladwell uncovers fascinating patterns and insights about social phenomena that lead to significant changes. A thought-provoking read.",
        date: "2022-11-05",
      },
      {
        username: "MarketingProfessional",
        rating: 4.7,
        comment:
          "The Tipping Point offers valuable insights into how ideas and trends spread. Gladwell's storytelling makes it an engaging and informative book.",
        date: "2022-10-25",
      },
    ],
    id: "6",
  },
  {
    _id: "f03754be-a5e7-4370-8836-dbc92c48b731",
    title: "Macbeth",
    author: "William Shakespeare",
    category: "Drama",
    price: 999,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png",
    pages: 108,
    rating: 4.7,
    isBestSeller: false,
    reviews: [
      {
        username: "ShakespeareAdmirer",
        rating: 5,
        comment:
          "A dark and thrilling play that explores the corrupting nature of ambition.",
        date: "2022-11-08",
      },
      {
        username: "DramaLover",
        rating: 3.5,
        comment:
          "Macbeth's descent into madness and the supernatural elements make it a captivating read.",
        date: "2022-10-25",
      },
    ],
    id: "7",
  },
  {
    _id: "086348c2-50ca-4d0f-ba6d-06cc4e77bd3b",
    title: "The Exorcist",
    author: "William Peter Blatty",
    category: "Horror",
    price: 500,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Exorcist_1971.jpg",
    pages: 448,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "HorrorEnthusiast",
        rating: 4.5,
        comment:
          "A bone-chilling and psychologically intense horror novel that will make your skin crawl.",
        date: "2022-12-14",
      },
      {
        username: "FearFan",
        rating: 4.7,
        comment:
          "Blatty's depiction of demonic possession is both horrifying and thought-provoking.",
        date: "2022-12-04",
      },
    ],
    id: "8",
  },
  {
    _id: "8e7afc67-d877-4bc7-83cb-c42c6b68dd87",
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    category: "Horror",
    price: 500,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/Silence3.png",
    pages: 320,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "HorrorFanatic",
        rating: 5,
        comment:
          "A chilling and suspenseful thriller that introduced the iconic character of Hannibal Lecter.",
        date: "2022-12-12",
      },
      {
        username: "MysteryReader",
        rating: 4.7,
        comment:
          "Harris weaves a gripping narrative that keeps you hooked until the very end.",
        date: "2022-12-06",
      },
    ],
    id: "9",
  },
  {
    _id: "9681af56-13fc-4626-8dcd-9551ab6de0d7",
    title: "A Raisin in the Sun",
    author: "Lorraine Hansberry",
    category: "Drama",
    price: 400,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c5/RaisinInTheSun.JPG",
    pages: 96,
    rating: 4.5,
    isBestSeller: true,
    reviews: [
      {
        username: "TheaterLover",
        rating: 3,
        comment:
          "A powerful and moving play that addresses important social issues.",
        date: "2022-09-12",
      },
      {
        username: "Bookworm123",
        rating: 4,
        comment:
          "Compelling characters and a thought-provoking exploration of dreams and aspirations.",
        date: "2022-08-25",
      },
    ],
    id: "10",
  },
  {
    _id: "00851658-ab75-4742-aded-1036600450fa",
    title: "Outliers",
    author: "Malcolm Gladwell",
    category: "Non-Fiction",
    price: 350,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Outliers_%28book_cover%29.png",
    pages: 288,
    rating: 4.5,
    isBestSeller: false,
    reviews: [
      {
        username: "SuccessSeeker",
        rating: 4.3,
        comment:
          "Gladwell explores the factors that contribute to exceptional success. A thought-provoking book that challenges traditional notions of achievement.",
        date: "2022-11-15",
      },
      {
        username: "MotivatedLearner",
        rating: 4.7,
        comment:
          "Outliers provides a fresh perspective on success and the importance of factors beyond individual effort. Highly recommended for personal growth.",
        date: "2022-10-30",
      },
    ],
    id: "11",
  },
  {
    _id: "ed0f4e6e-a3a2-4aac-8430-c6567d84f0b9",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    category: "Fantasy",
    price: 900,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg",
    pages: 864,
    rating: 3.8,
    isBestSeller: true,
    reviews: [
      {
        username: "FantasyReader",
        rating: 5,
        comment:
          "An epic tale of politics, intrigue, and power set in a richly imagined world.",
        date: "2022-12-18",
      },
      {
        username: "TheaterEnthusiast",
        rating: 3.5,
        comment: "A complex and gripping story with unforgettable characters.",
        date: "2022-12-02",
      },
    ],
    id: "12",
  },
  {
    _id: "9b0a8f98-c670-49d7-8c39-8e37ffcdc941",
    title: "Martin Luther King, Jr.: A Biography",
    author: "David Garrow",
    category: "Biography",
    price: 800,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/80/The_Girl_with_the_Dragon_Tattoo_Poster.jpg",
    pages: 864,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "CivilRightsActivist",
        rating: 4.9,
        comment:
          "David Garrow's meticulous research and deep understanding of Martin Luther King, Jr.'s life make this biography a must-read. It sheds light on the struggles and triumphs of a true visionary.",
        date: "2022-12-10",
      },
      {
        username: "HistoryEnthusiast",
        rating: 4.6,
        comment:
          "Martin Luther King, Jr.: A Biography offers a comprehensive and inspiring account of Dr. King's impact on the civil rights movement. Garrow's writing is engaging and insightful.",
        date: "2022-12-05",
      },
    ],
    id: "13",
  },
  {
    _id: "6101ed2c-2a9e-4024-920b-82fc434c0307",
    title: "Death of a Salesman",
    author: "Arthur Miller",
    category: "Drama",
    price: 450,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/20/DeathOfASalesman.jpg",
    pages: 108,
    rating: 2.8,
    isBestSeller: false,
    reviews: [
      {
        username: "TheaterEnthusiast",
        rating: 3,
        comment:
          "A haunting portrayal of the American Dream and its consequences.",
        date: "2022-07-18",
      },
      {
        username: "LiteratureFanatic",
        rating: 2.5,
        comment:
          "Arthur Miller's masterpiece that delves into the complexities of family and identity.",
        date: "2022-06-30",
      },
    ],
    id: "14",
  },
  {
    _id: "022d4c2b-912b-4980-8cf0-62bd5208f3a2",
    title: "The Crucible",
    author: "Arthur Miller",
    category: "Drama",
    price: 600,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/75/Cruciblecover.jpg",
    pages: 128,
    rating: 2.6,
    isBestSeller: false,
    reviews: [
      {
        username: "TheaterFan",
        rating: 5,
        comment:
          "A powerful play that highlights the dangers of mass hysteria.",
        date: "2022-11-05",
      },
      {
        username: "LiteratureLover",
        rating: 2.5,
        comment:
          "Arthur Miller's masterful storytelling and examination of human nature.",
        date: "2022-10-20",
      },
    ],
    id: "15",
  },
  {
    _id: "1994eafa-e010-4a10-b42b-7655dba2b67d",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "Non-Fiction",
    price: 500,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Power_of_Habit.jpg",
    pages: 288,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "ProductivityGeek",
        rating: 4.5,
        comment:
          "Duhigg provides fascinating insights into the science of habits and practical strategies for creating positive change.",
        date: "2022-11-20",
      },
      {
        username: "SelfImprovementJunkie",
        rating: 4.8,
        comment:
          "An eye-opening book that shows how habits shape our lives and how we can harness them to achieve success.",
        date: "2022-11-10",
      },
    ],
    id: "16",
  },
  {
    _id: "ccd07062-063b-4140-bed9-5b3ec96d1878",
    title: "The Shining",
    author: "Stephen King",
    category: "Horror",
    price: 500,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg",
    pages: 444,
    rating: 3.7,
    isBestSeller: true,
    reviews: [
      {
        username: "HorrorFanatic",
        rating: 5,
        comment:
          "A chilling and psychologically intense horror novel that will keep you on edge.",
        date: "2022-12-22",
      },
      {
        username: "Bookworm123",
        rating: 3.5,
        comment:
          "King's mastery of suspense makes this a gripping and unforgettable read.",
        date: "2022-12-10",
      },
    ],
    id: "17",
  },
  {
    _id: "35271ee0-1d91-49b5-8fc9-69911f79b23f",
    title: "The Wright Brothers",
    author: "David McCullough",
    category: "Biography",
    price: 850,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/17/TheWrightBrothers.jpg",
    pages: 528,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "AviationEnthusiast",
        rating: 4.8,
        comment:
          "David McCullough's meticulous research and storytelling bring the incredible journey of the Wright Brothers to life. A remarkable biography.",
        date: "2022-09-20",
      },
      {
        username: "HistoryBuff",
        rating: 4.4,
        comment:
          "The Wright Brothers is an inspiring account of two pioneers who changed the course of aviation history. McCullough's writing is engaging and informative.",
        date: "2022-09-10",
      },
    ],
    id: "18",
  },
  {
    _id: "739eaf8d-9313-478b-9558-041eb283a377",
    title: "Dracula",
    author: "Bram Stoker",
    category: "Horror",
    price: 500,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Dracula_1st_ed_cover_reproduction.jpg",
    pages: 342,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "GothicReader",
        rating: 4.5,
        comment:
          "The classic vampire tale that set the benchmark for horror literature.",
        date: "2022-12-16",
      },
      {
        username: "Bookworm456",
        rating: 4.8,
        comment:
          "Stoker's atmospheric storytelling and captivating characters make this a timeless horror masterpiece.",
        date: "2022-12-02",
      },
    ],
    id: "19",
  },
  {
    _id: "4a152b84-ae65-4dd9-82bc-f28e7f35ef66",
    title: "Hamlet",
    author: "William Shakespeare",
    category: "Drama",
    price: 760,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Hamlet_et_Horatio_au_cimeti%C3%A8re_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1942.jpg",
    pages: 127,
    rating: 4.9,
    isBestSeller: false,
    reviews: [
      {
        username: "ShakespeareFanatic",
        rating: 5,
        comment:
          "An absolute masterpiece! Hamlet's existential dilemmas and captivating language make it unforgettable.",
        date: "2022-11-15",
      },
      {
        username: "TheaterEnthusiast",
        rating: 4.8,
        comment:
          "Shakespeare's timeless tragedy that delves into themes of revenge, madness, and mortality.",
        date: "2022-10-28",
      },
    ],
    id: "20",
  },
  {
    _id: "f08b514d-4559-49fb-a248-37388d8f24da",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    category: "Fantasy",
    price: 460,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
    pages: 256,
    rating: 3.7,
    isBestSeller: false,
    reviews: [
      {
        username: "SciFiFan",
        rating: 5,
        comment:
          "An hilarious and mind-bending journey through space that will leave you in stitches.",
        date: "2022-12-10",
      },
      {
        username: "Bookworm123",
        rating: 3.5,
        comment: "A whimsical and witty adventure that defies expectations.",
        date: "2022-11-26",
      },
    ],
    id: "21",
  },
  {
    _id: "952362f6-2d96-4e6b-b3c2-f60965d4b8c4",
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    category: "Fantasy",
    price: 600,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg",
    pages: 256,
    rating: 3.8,
    isBestSeller: true,
    reviews: [
      {
        username: "NarniaFan",
        rating: 5,
        comment: "A magical and enchanting tale that captures the imagination.",
        date: "2022-12-28",
      },
      {
        username: "Bookworm246",
        rating: 3.7,
        comment: "Lewis' storytelling prowess shines in this timeless classic.",
        date: "2022-12-12",
      },
    ],
    id: "22",
  },
  {
    _id: "823bc1a3-ee7f-4281-a245-274bd582038d",
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    category: "Biography",
    price: 700,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fe/Cover_of_Walter_Isaacson%27s_biography_of_Einstein.jpg",
    pages: 504,
    rating: 4.5,
    isBestSeller: false,
    reviews: [
      {
        username: "ScienceEnthusiast",
        rating: 4.7,
        comment:
          "Isaacson masterfully portrays the life and achievements of Albert Einstein. A captivating biography that brings science and humanity together.",
        date: "2022-11-01",
      },
      {
        username: "PhysicsStudent",
        rating: 4.3,
        comment:
          "Einstein: His Life and Universe offers a fascinating glimpse into the mind of one of the greatest scientific minds in history.",
        date: "2022-10-25",
      },
    ],
    id: "23",
  },
  {
    _id: "9ed904a2-7f1f-4c1c-82fb-2970f2e7da97",
    title: "Freakonomics",
    authors: "Steven D. Levitt and Stephen J. Dubner",
    category: "Non-Fiction",
    price: 350,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/63/Freakonomics.jpg",
    pages: 288,
    rating: 4.5,
    isBestSeller: false,
    reviews: [
      {
        username: "EconomicEnthusiast",
        rating: 4.8,
        comment:
          "Freakonomics explores the hidden side of economics and uncovers surprising connections. An eye-opening and thought-provoking read.",
        date: "2022-11-20",
      },
      {
        username: "SocialObserver",
        rating: 4.3,
        comment:
          "Levitt and Dubner's unconventional approach to analyzing data and drawing conclusions makes Freakonomics a captivating book.",
        date: "2022-11-10",
      },
    ],
    id: "24",
  },
  {
    _id: "fec2bea2-91b3-44f5-8ab8-00cbb9533b37",
    title: "It",
    author: "Stephen King",
    category: "Horror",
    price: 500,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/78/It_%28Stephen_King_novel_-_cover_art%29.jpg",
    pages: 1138,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "HorrorAddict",
        rating: 5,
        comment: "King's opus of terror that will haunt your nightmares.",
        date: "2022-12-20",
      },
      {
        username: "ThrillSeeker",
        rating: 4.8,
        comment:
          "A terrifying and gripping story that showcases King's storytelling prowess.",
        date: "2022-12-08",
      },
    ],
    id: "25",
  },
  {
    _id: "41b0a153-e161-4f68-a84c-da10bacd3ad4",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    price: 900,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
    pages: 416,
    rating: 3.9,
    isBestSeller: true,
    reviews: [
      {
        username: "FantasyLover",
        rating: 5,
        comment:
          "An epic and immersive journey into a richly detailed fantasy world.",
        date: "2022-12-20",
      },
      {
        username: "TolkienFan",
        rating: 3.8,
        comment:
          "Tolkien's masterpiece that combines breathtaking adventure with profound themes.",
        date: "2022-12-05",
      },
    ],
    id: "26",
  },
  {
    _id: "dbbcd9b0-acb9-4d6a-a5ea-431e78763a7d",
    title: "Malcolm X: A Life of Reinvention",
    author: "Manning Marable",
    category: "Biography",
    price: 700,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Malcolm_X_Life_of_Reinvention.jpg",
    pages: 704,
    rating: 4.5,
    isBestSeller: false,
    reviews: [
      {
        username: "SocialJusticeAdvocate",
        rating: 4.7,
        comment:
          "Manning Marable's biography provides a comprehensive and thought-provoking exploration of Malcolm X's life and his impact on the civil rights movement.",
        date: "2022-11-05",
      },
      {
        username: "HistoryStudent",
        rating: 4.3,
        comment:
          "Malcolm X: A Life of Reinvention offers new insights into the complex persona and evolving ideology of Malcolm X. A significant contribution to understanding his legacy.",
        date: "2022-10-30",
      },
    ],
    id: "27",
  },
  {
    _id: "07b45280-9ccd-4df6-bbe1-19bbb4fb6a24",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 600,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
    pages: 384,
    rating: 3.7,
    isBestSeller: true,
    reviews: [
      {
        username: "Potterhead",
        rating: 5,
        comment:
          "A thrilling and enchanting continuation of Harry Potter's magical journey.",
        date: "2022-12-25",
      },
      {
        username: "Bookworm789",
        rating: 3.5,
        comment:
          "Rowling's vivid storytelling and captivating characters make this a must-read.",
        date: "2022-12-08",
      },
    ],
    id: "28",
  },
  {
    _id: "09cd07d0-f7de-49f5-a38c-5cb034fe3914",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    price: 600,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG",
    pages: 312,
    rating: 3.9,
    isBestSeller: true,
    reviews: [
      {
        username: "TolkienFan",
        rating: 5,
        comment:
          "An enchanting and adventurous prelude to the epic Lord of the Rings.",
        date: "2022-12-30",
      },
      {
        username: "FantasyLover",
        rating: 3.8,
        comment:
          "Tolkien's world-building and whimsical storytelling make this a beloved fantasy classic.",
        date: "2022-12-15",
      },
    ],
    id: "29",
  },
  {
    _id: "20cbdacb-c631-4f6e-aa83-3d31af26aa89",
    title: "Pet Sematary",
    author: "Stephen King",
    category: "Horror",
    price: 500,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/52/StephenKingPetSematary.jpg",
    pages: 352,
    rating: 3.6,
    isBestSeller: true,
    reviews: [
      {
        username: "HorrorReader",
        rating: 3.5,
        comment:
          "A haunting and unsettling tale that delves into the depths of grief and the supernatural.",
        date: "2022-12-18",
      },
      {
        username: "KingFan",
        rating: 4.7,
        comment:
          "King's atmospheric storytelling and eerie imagery make this a must-read for horror enthusiasts.",
        date: "2022-12-05",
      },
    ],
    id: "30",
  },
  {
    _id: "4ddfaa36-044b-44a8-8f28-83eefef24ed1",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    category: "Drama",
    price: 460,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Romeo_and_juliet_brown.jpg",
    pages: 159,
    rating: 3.8,
    isBestSeller: false,
    reviews: [
      {
        username: "ShakespeareFanatic",
        rating: 5,
        comment:
          "A timeless tale of tragic love that captures the essence of Shakespeare's genius.",
        date: "2022-12-02",
      },
      {
        username: "TheaterEnthusiast",
        rating: 3.5,
        comment:
          "A poignant story with beautiful language and unforgettable characters.",
        date: "2022-11-18",
      },
    ],
    id: "31",
  },
];
