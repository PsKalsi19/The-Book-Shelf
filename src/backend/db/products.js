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
    discount: 50,
    imgUrl:
      "https://m.media-amazon.com/images/I/71m+kC4vOxL.jpg",
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
    description:
      "In 'Thinking, Fast and Slow,' Daniel Kahneman, a renowned psychologist and Nobel laureate, explores the fascinating realm of human decision-making and presents his influential research on the two systems of thinking that drive our choices and judgments. Through vivid examples and thought-provoking anecdotes, Kahneman challenges conventional wisdom, shedding light on the workings of the mind and providing valuable insights into the complexities of human behavior. This captivating masterpiece invites readers to reconsider their understanding of decision-making and gain a deeper understanding of the intricacies of the human mind.",
    id: "1",
  },
  {
    _id: "3e03f85d-5255-424c-8a38-8c5e7920d747",
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "Non-Fiction",
    price: 500,
    discount: 70,
    imgUrl:
      "https://m.media-amazon.com/images/I/71-OnTj8N8L.jpg",
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
    description:
      "In 'The Body Keeps the Score,' Bessel van der Kolk, a renowned psychiatrist and trauma expert, delves into the profound effects of trauma on the body and mind. Drawing on decades of clinical experience and scientific research, van der Kolk explores the complex interplay between trauma, memory, and the physical sensations that become lodged within us. Through real-life stories and compelling case studies, he sheds light on the long-term impact of trauma and offers insights into innovative therapeutic approaches that can aid in healing. 'The Body Keeps the Score' is an essential read for anyone seeking to understand the intricate connection between trauma and its lasting effects, providing valuable knowledge and hope for those on the path to recovery.",
    id: "2",
  },
  {
    _id: "8f1a53cd-7b1d-4ecc-a3be-e853cb86a40e",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "Non-Fiction",
    price: 350,
    discount: 150,
    imgUrl: "https://m.media-amazon.com/images/I/81RdveuYXWL.jpg",
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
    description:
      'In "Guns, Germs, and Steel," Jared Diamond presents a thought-provoking exploration of the factors that have shaped the course of human history. Diamond investigates why certain civilizations and societies have advanced technologically, politically, and economically, while others have lagged behind. Through an interdisciplinary approach encompassing geography, biology, anthropology, and history, Diamond examines the influence of geographic advantages, domestication of plants and animals, the development of writing systems, and the spread of diseases on the fates of different societies. The book offers a compelling and comprehensive analysis of the complex interplay between geography, culture, and technology in shaping the trajectory of human civilization.',
    id: "3",
  },
  {
    _id: "2343cdba-4dbd-468b-bd72-6c47ce2f5e81",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    price: 700,
    discount: 20,
    imgUrl:
      "https://m.media-amazon.com/images/I/51ovTzIeV1L.jpg",
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
    description:
      "In 'Steve Jobs,' Walter Isaacson presents an intimate and revealing biography of the iconic co-founder of Apple Inc. This meticulously researched book takes readers on a journey through Jobs' life, from his unconventional upbringing to his groundbreaking contributions in the technology industry. Isaacson explores Jobs' relentless pursuit of perfection, his visionary leadership, and his enduring impact on personal computing, music, animation, and mobile communication. Through interviews with Jobs, his family, and colleagues, Isaacson provides a candid portrayal of a complex and charismatic figure who revolutionized multiple industries. 'Steve Jobs' is an engrossing account that offers deep insights into the life and legacy of a true visionary.",
  },
  {
    _id: "631da4ef-0f1f-4618-8610-cce7c8628e0e",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    price: 600,
    discount: 0,
    imgUrl:
      "https://m.media-amazon.com/images/I/51UBY8uTacS.jpg",
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
    description:
      "The Name of the Wind is a captivating fantasy novel written by Patrick Rothfuss. It follows the story of Kvothe, a renowned figure known as a legendary magician, musician, and adventurer. The book is set in a richly detailed world where magic, music, and mystery intertwine. Through a first-person narrative, Kvothe recounts his extraordinary life, from his humble beginnings as a talented young musician to his experiences at the prestigious University, where he hones his magical skills. With lyrical prose and a compelling plot, The Name of the Wind immerses readers in a spellbinding tale of adventure, love, and the pursuit of knowledge. It is a must-read for fantasy enthusiasts and anyone seeking a mesmerizing journey into a vividly imagined realm.",
    id: "5",
  },
  {
    _id: "90af5233-17d0-413a-8b51-218e3d169ca6",
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    category: "Non-Fiction",
    price: 350,
    discount: 0,
    imgUrl:
      "https://m.media-amazon.com/images/I/6173QRIGTtL.jpg",
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
    description:
      "In 'The Tipping Point,' Malcolm Gladwell explores the concept of social epidemics and the factors that contribute to their sudden and significant spread. Through engaging storytelling and extensive research, Gladwell delves into the tipping points that lead to contagious trends, viral marketing, and societal transformations. Drawing examples from diverse fields such as fashion, crime, and public health, he identifies the key elements that can turn an idea or behavior into a phenomenon. 'The Tipping Point' offers valuable insights into the dynamics of social change and the fascinating tipping points that shape our world.",
    id: "6",
  },
  {
    _id: "f03754be-a5e7-4370-8836-dbc92c48b731",
    title: "Macbeth",
    author: "William Shakespeare",
    category: "Drama",
    price: 999,
    discount: 300,
    imgUrl:
      "https://m.media-amazon.com/images/I/81HPJGIketL.jpg",
    pages: 108,
    rating: 5,
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
    description:
      "William Shakespeare's tragedy 'Macbeth' follows the ambitious and morally conflicted Scottish general Macbeth as he rises to power through treachery and deceit. Fueled by his wife's ambition and the prophecies of three witches, Macbeth embarks on a path of violence and manipulation, leading to his downfall. This timeless play explores themes of ambition, guilt, fate, and the corrupting nature of unchecked power. Shakespeare's masterful language, memorable characters, and dramatic plot twists make 'Macbeth' one of his most renowned and frequently performed plays, captivating audiences with its exploration of human nature and the consequences of unchecked ambition.",
    id: "7",
  },
  {
    _id: "086348c2-50ca-4d0f-ba6d-06cc4e77bd3b",
    title: "The Exorcist",
    author: "William Peter Blatty",
    category: "Horror",
    price: 500,
    discount: 20,
    imgUrl:
      "https://m.media-amazon.com/images/I/81q-n+f7cKL.jpg",
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
    description:
      "Written by William Peter Blatty, 'The Exorcist' is a chilling horror novel that tells the haunting story of the possession of a young girl named Regan MacNeil. When Regan's behavior becomes increasingly disturbing and her health deteriorates, her desperate mother seeks help from two priests who attempt to exorcise the demonic entity within her. Blatty's masterful storytelling and atmospheric writing create an atmosphere of dread and suspense, delving into themes of faith, good versus evil, and the nature of supernatural forces. 'The Exorcist' is a terrifying exploration of the battle between the sacred and the profane, leaving readers captivated and disturbed.",
    id: "8",
  },
  {
    _id: "8e7afc67-d877-4bc7-83cb-c42c6b68dd87",
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    category: "Horror",
    price: 500,
    discount: 50,
    imgUrl: "https://m.media-amazon.com/images/I/814fRILnbnL.jpg",
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
    description:
      "Thomas Harris's psychological thriller 'The Silence of the Lambs' introduces readers to Clarice Starling, an FBI trainee tasked with interviewing the incarcerated cannibalistic serial killer, Dr. Hannibal Lecter, in order to gain insight into the mind of another serial killer named Buffalo Bill. As Clarice delves deeper into the twisted world of criminal psychology, she becomes entangled in a dangerous game of cat and mouse with both Lecter and Buffalo Bill. Harris's chilling prose, intricate character development, and suspenseful plot create a gripping narrative that explores the depths of human depravity and the psychological intricacies of the criminal mind. 'The Silence of the Lambs' is a thrilling and unsettling read that has left an indelible mark on the thriller genre.",
    id: "9",
  },
  {
    _id: "9681af56-13fc-4626-8dcd-9551ab6de0d7",
    title: "A Raisin in the Sun",
    author: "Lorraine Hansberry",
    category: "Drama",
    price: 400,
    discount: 50,
    imgUrl: "https://m.media-amazon.com/images/I/71n3U+vh6FL.jpg",
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
    description:
      "Written by Lorraine Hansberry, 'A Raisin in the Sun' is a groundbreaking play that explores the dreams, aspirations, and challenges faced by an African American family living in Chicago's South Side in the 1950s. The play revolves around the Younger family, who have the opportunity to move to a better neighborhood after receiving a life insurance payout. However, their individual desires and ambitions clash as they confront issues of racial discrimination, generational conflicts, and the pursuit of their dreams. Hansberry's powerful storytelling and poignant characters shed light on the African American experience, highlighting themes of identity, family, and the pursuit of a better life. 'A Raisin in the Sun' is a timeless masterpiece that continues to resonate with audiences, provoking discussions on race, social inequality, and the resilience of the human spirit.",
    id: "10",
  },
  {
    _id: "00851658-ab75-4742-aded-1036600450fa",
    title: "Outliers",
    author: "Malcolm Gladwell",
    category: "Non-Fiction",
    price: 350,
    discount: 10,
    imgUrl:
      "https://m.media-amazon.com/images/I/71hq+FB1jJL.jpg",
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
    description:
      "In 'Outliers: The Story of Success,' Malcolm Gladwell explores the factors that contribute to extraordinary success. Through a combination of storytelling, research, and analysis, Gladwell challenges the notion that individual talent and hard work alone determine success. He examines the role of cultural background, opportunity, timing, and meaningful practice in shaping high achievement. From the experiences of successful individuals like Bill Gates, The Beatles, and professional athletes, Gladwell uncovers patterns and hidden advantages that contribute to their exceptional accomplishments. 'Outliers' offers thought-provoking insights into the complex interplay of factors that differentiate outliers from the rest and encourages readers to reconsider the traditional understanding of success. It is a compelling read for anyone interested in understanding the dynamics behind extraordinary achievement and the power of context in shaping our lives.",
    id: "11",
  },
  {
    _id: "ed0f4e6e-a3a2-4aac-8430-c6567d84f0b9",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    category: "Fantasy",
    price: 900,
    discount: 250,
    imgUrl: "https://m.media-amazon.com/images/I/71JsMvAcmmL.jpg",
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

    description:
      "George R.R. Martin's epic fantasy series 'A Song of Ice and Fire,' popularly known as 'Game of Thrones,' takes readers on a thrilling journey through the fictional continents of Westeros and Essos. Set in a complex world of political intrigue, power struggles, and fantastical elements, the story follows numerous noble families as they vie for control of the Iron Throne. With intricate plot twists, morally ambiguous characters, and a sprawling ensemble cast, Martin weaves a tale of alliances, betrayals, and the consequences of wielding power. 'Game of Thrones' captivates readers with its richly imagined world, unpredictable narratives, and exploration of themes such as honor, loyalty, and the corrupting nature of power. It has become a cultural phenomenon, both in literature and through its acclaimed television adaptation, enticing fans with its blend of fantasy, drama, and gritty realism.",
    id: "12",
  },
  {
    _id: "9b0a8f98-c670-49d7-8c39-8e37ffcdc941",
    title: "Martin Luther King, Jr.: A Biography",
    author: "David Garrow",
    category: "Biography",
    price: 800,
    discount: 130,
    imgUrl:
      "https://m.media-amazon.com/images/I/61Ik6mL7ZtL.jpg",
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
    description:
      "'Martin Luther King, Jr.: A Biography' offers a comprehensive account of the life and legacy of one of the most influential civil rights leaders in history. Written by renowned author and historian, Martin Luther King, Jr., the book delves into King's early years, his leadership in the civil rights movement, and his tireless advocacy for racial equality and justice. It explores the significant milestones in King's life, including his pivotal role in the Montgomery Bus Boycott, the March on Washington, and his iconic 'I Have a Dream' speech. Through meticulous research and insightful analysis, the biography provides a deep understanding of King's philosophy of nonviolent resistance and his unwavering commitment to achieving social change. It serves as an invaluable resource for anyone seeking to comprehend the life and enduring impact of Martin Luther King, Jr.",
    id: "13",
  },
  {
    _id: "6101ed2c-2a9e-4024-920b-82fc434c0307",
    title: "Death of a Salesman",
    author: "Arthur Miller",
    category: "Drama",
    price: 450,
    discount: 66,
    imgUrl:
      "https://m.media-amazon.com/images/I/51i+ZHlnt4L.jpg",
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
    description:
      "Death of a Salesman is a classic play written by Arthur Miller. It tells the story of Willy Loman, a weary and disillusioned salesman who grapples with the decline of his career and the shattered dreams of success for himself and his family. Set in post-World War II America, the play explores themes of the American Dream, identity, and the harsh realities of the capitalist society. Through a combination of present-day scenes and memories, the audience is taken on a journey through Willy's internal struggles and the strained relationships with his sons. Death of a Salesman is a poignant examination of the human condition, revealing the consequences of pursuing an elusive and ultimately unattainable version of the American Dream. It is a powerful and thought-provoking exploration of the human desire for validation and the tragic consequences of chasing unrealistic ideals.",
    id: "14",
  },
  {
    _id: "022d4c2b-912b-4980-8cf0-62bd5208f3a2",
    title: "The Crucible",
    author: "Arthur Miller",
    category: "Drama",
    price: 600,
    discount: 200,
    imgUrl: "https://m.media-amazon.com/images/I/81-tbD97VRL.jpg",
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
    description:
      "Written by Arthur Miller, 'The Crucible' is a gripping play set in the town of Salem during the infamous Salem witch trials of the 17th century. The story unfolds as a group of young girls accuses several townspeople of practicing witchcraft, triggering a wave of hysteria and paranoia. As the trials progress, the play explores themes of mass hysteria, manipulation, and the destructive power of fear. Through intense dialogue and complex characters, Miller draws parallels between the witch trials and the anti-communist McCarthyism of the 1950s, highlighting the dangers of false accusations and the erosion of individual freedoms. 'The Crucible' serves as a timeless cautionary tale, reminding audiences of the importance of truth, integrity, and the consequences of unchecked authority.",
    id: "15",
  },
  {
    _id: "1994eafa-e010-4a10-b42b-7655dba2b67d",
    title: "Power of Habit",
    author: "Charles Duhigg",
    category: "Non-Fiction",
    price: 500,
    discount: 30,
    imgUrl:
      "https://m.media-amazon.com/images/I/71ONWR6eXDL.jpg",
    pages: 288,
    rating: 2.7,
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
    description:
      "In 'The Power of Habit,' Charles Duhigg delves into the science and psychology behind habits, revealing how they shape our lives and influence our behaviors. Drawing on extensive research and captivating stories, Duhigg explores the formation of habits, the triggers that initiate them, and the rewards that reinforce them. He explains how understanding the mechanics of habit formation can empower individuals and organizations to make positive changes and break destructive patterns. From personal habits to organizational routines, Duhigg presents strategies for harnessing the power of habit to create lasting change. 'The Power of Habit' is an insightful and practical book that offers a fresh perspective on how habits impact our lives and provides valuable tools for transforming behaviors and achieving personal and professional success.",
    id: "16",
  },
  {
    _id: "ccd07062-063b-4140-bed9-5b3ec96d1878",
    title: "The Shining",
    author: "Stephen King",
    category: "Horror",
    price: 500,
    discount: 0,
    imgUrl: "https://m.media-amazon.com/images/I/71tekF9GOkL.jpg",
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
    description:
      "Written by Stephen King, 'The Shining' is a chilling and suspenseful horror novel that follows the Torrance family's stay at the isolated Overlook Hotel during the winter season. Jack Torrance, a struggling writer, takes on the role of the hotel's caretaker, bringing along his wife, Wendy, and their young son, Danny. As the winter months progress, the hotel's dark and malevolent presence begins to affect Jack's sanity, unleashing a terrifying series of events. With its atmospheric setting, psychological tension, and supernatural elements, 'The Shining' delves into themes of isolation, addiction, and the unraveling of the human mind. Stephen King's masterful storytelling and vivid descriptions make 'The Shining' an iconic work of horror fiction that continues to captivate readers with its blend of psychological terror and supernatural dread.",
    id: "17",
  },
  {
    _id: "35271ee0-1d91-49b5-8fc9-69911f79b23f",
    title: "The Wright Brothers",
    author: "David McCullough",
    category: "Biography",
    price: 850,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/81+O-3L5rYL.jpg",
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
    description:
      "In 'The Wright Brothers,' author David McCullough explores the incredible journey of Orville and Wilbur Wright, two brothers from Ohio who pioneered the field of aviation. The book delves into their upbringing, their early fascination with flight, and their tireless pursuit of their dream to build a flying machine. McCullough takes readers through the challenges and triumphs the Wright brothers faced as they experimented, designed, and eventually achieved powered flight. With meticulous research and engaging storytelling, 'The Wright Brothers' offers a captivating account of their perseverance, ingenuity, and the impact their invention had on the world. It highlights the brothers' relentless dedication to their craft and their place in history as the inventors of the first successful airplane, forever changing the course of aviation.",
    id: "18",
  },
  {
    _id: "739eaf8d-9313-478b-9558-041eb283a377",
    title: "Dracula",
    author: "Bram Stoker",
    category: "Horror",
    price: 500,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/61vljH0K3gL.jpg",
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
    description:
      "Bram Stoker's 'Dracula' is a timeless gothic horror novel that introduced the world to one of the most iconic and enduring characters in literature: Count Dracula. Set in Transylvania and Victorian England, the story follows the sinister vampire Count Dracula as he seeks to spread his curse and unleash his reign of terror. Through a series of diary entries, letters, and newspaper clippings, Stoker weaves a chilling tale of suspense, romance, and the battle between good and evil. 'Dracula' established many of the vampire tropes that continue to shape vampire literature and popular culture today. With its atmospheric setting, richly drawn characters, and themes of sexuality, power, and morality, 'Dracula' has become a classic of horror fiction, captivating readers with its blend of supernatural horror and psychological suspense.",
    id: "19",
  },
  {
    _id: "4a152b84-ae65-4dd9-82bc-f28e7f35ef66",
    title: "Hamlet",
    author: "William Shakespeare",
    category: "Drama",
    price: 760,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/51cJqvkcdlL.jpg",
    pages: 127,
    rating: 5,
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
    description:
      "William Shakespeare's 'Hamlet' is a renowned tragedy that explores themes of revenge, madness, and the complexity of human nature. The play follows Prince Hamlet of Denmark, who is visited by the ghost of his father and learns of his uncle Claudius's treachery, leading to a quest for vengeance. As Hamlet grapples with his own doubts and internal conflicts, the play delves into profound philosophical questions about life, death, and the nature of existence. 'Hamlet' is celebrated for its compelling characters, dramatic soliloquies, and masterful use of language. It continues to be performed and studied worldwide, captivating audiences with its exploration of moral dilemmas, the consequences of action and inaction, and the tragic consequences of obsession and revenge.",
    id: "20",
  },
  {
    _id: "f08b514d-4559-49fb-a248-37388d8f24da",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    category: "Fantasy",
    price: 460,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/61p2GtNZ0tL.jpg",
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
    description:
      "Douglas Adams' 'The Hitchhiker's Guide to the Galaxy' is a hilarious and satirical science fiction series that follows the misadventures of the ordinary human Arthur Dent after the destruction of Earth to make way for a hyperspace bypass. Arthur finds himself on an intergalactic journey with his alien friend Ford Prefect, encountering a range of eccentric characters and mind-boggling situations. Filled with wit, absurdity, and clever social commentary, the series explores themes of the meaning of life, the nature of the universe, and the absurdity of human existence. With its unique blend of science fiction, humor, and philosophical musings, 'The Hitchhiker's Guide to the Galaxy' has garnered a devoted fanbase and remains a beloved classic in the genre.",
    id: "21",
  },
  {
    _id: "952362f6-2d96-4e6b-b3c2-f60965d4b8c4",
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    category: "Fantasy",
    price: 600,
    discount: 20,
    imgUrl:
      "https://m.media-amazon.com/images/I/61AiYw92f+L.jpg",
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
    description:
      "C.S. Lewis' 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe' is the first book in the beloved fantasy series that transports readers into a magical world. The story follows the Pevensie siblings - Peter, Susan, Edmund, and Lucy - who stumble upon a magical wardrobe that leads them to the enchanted land of Narnia. In Narnia, they discover a kingdom trapped in eternal winter under the rule of the White Witch. With the help of the mighty lion Aslan, the siblings embark on a perilous journey to fulfill an ancient prophecy and bring hope and freedom to Narnia. 'The Lion, the Witch and the Wardrobe' is a timeless tale of adventure, courage, and the triumph of good over evil. It captivates readers of all ages with its rich world-building, memorable characters, and its exploration of themes such as bravery, sacrifice, and the power of imagination.",
    id: "22",
  },
  {
    _id: "823bc1a3-ee7f-4281-a245-274bd582038d",
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    category: "Biography",
    price: 700,
    discount: 60,
    imgUrl:
      "https://m.media-amazon.com/images/I/81aYAGAlP7L.jpg",
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
    description:
      "In 'Einstein: His Life and Universe,' acclaimed author Walter Isaacson presents a comprehensive biography of the iconic physicist Albert Einstein. Drawing from a wealth of personal letters, scientific papers, and interviews, Isaacson provides a deep insight into Einstein's remarkable life and groundbreaking scientific contributions. From his early years as a curious and rebellious student to his revolutionary theories of relativity, Isaacson delves into Einstein's intellectual journey and his profound impact on our understanding of the universe. The biography also explores Einstein's personal life, his struggles, and his complex relationships. Through engaging storytelling and meticulous research, 'Einstein: His Life and Universe' offers readers a fascinating glimpse into the mind and personality of one of the greatest scientific geniuses of all time.",
    id: "23",
  },
  {
    _id: "9ed904a2-7f1f-4c1c-82fb-2970f2e7da97",
    title: "Freakonomics",
    authors: "Steven D. Levitt and Stephen J. Dubner",
    category: "Non-Fiction",
    price: 1350,
    discount: 160,
    imgUrl: "https://m.media-amazon.com/images/I/51L4dDH0fOL.jpg",
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
    description:
      "'Freakonomics' is a captivating and unconventional book written by economist Steven D. Levitt and journalist Stephen J. Dubner. Combining economic analysis with unexpected insights, the authors delve into a wide range of intriguing topics and examine the hidden side of human behavior. Through a series of thought-provoking case studies, Levitt and Dubner explore the economics of drug dealing, the impact of parenting on a child's future, the role of incentives in shaping behavior, and much more. They challenge conventional wisdom and present a fresh perspective on various social and economic phenomena. 'Freakonomics' is a fascinating exploration of the economic principles that shape our everyday lives and encourages readers to question assumptions and look at the world through a different lens.",
    id: "24",
  },
  {
    _id: "fec2bea2-91b3-44f5-8ab8-00cbb9533b37",
    title: "It",
    author: "Stephen King",
    category: "Horror",
    price: 1500,
    discount: 60,
    imgUrl:
      "https://m.media-amazon.com/images/I/71BIM1n25FL.jpg",
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
    description:
      "Stephen King's 'It' is a horror novel that follows a group of childhood friends haunted by an ancient evil entity that takes the form of their worst fears, most notably a menacing clown named Pennywise. The story is set in the town of Derry, Maine, and alternates between the characters' childhood experiences in the 1950s and their adulthood in the 1980s. As the friends reunite to confront the malevolent presence that terrorized them in their youth, they must confront their own personal fears and traumas. 'It' delves into themes of friendship, childhood innocence, and the power of facing one's deepest fears. With Stephen King's trademark storytelling and atmospheric writing, 'It' has become a horror classic, captivating readers with its blend of psychological terror and supernatural suspense.",
    id: "25",
  },
  {
    _id: "41b0a153-e161-4f68-a84c-da10bacd3ad4",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    price: 900,
    discount: 60,
    imgUrl:
      "https://m.media-amazon.com/images/I/81YyraOaX1L.jpg",
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
    description:
      "J.R.R. Tolkien's 'The Lord of the Rings: The Fellowship of the Ring' is the first installment of the epic fantasy trilogy that takes readers on a captivating journey through the enchanting world of Middle-earth. The story begins with Frodo Baggins, a humble hobbit, who inherits a powerful and dangerous ring that holds the fate of the world in its grasp. Joined by a fellowship of diverse characters, including Gandalf the wizard, Aragorn the ranger, and Legolas the elf, Frodo embarks on a perilous quest to destroy the ring and defeat the dark lord Sauron. 'The Fellowship of the Ring' immerses readers in a richly detailed and immersive world, filled with breathtaking landscapes, memorable creatures, and a complex web of friendships, alliances, and epic battles. It explores themes of heroism, sacrifice, the struggle between good and evil, and the resilience of the human spirit. With Tolkien's masterful storytelling and rich imagination, 'The Fellowship of the Ring' has become a timeless classic in the realm of fantasy literature.",
    id: "26",
  },
  {
    _id: "dbbcd9b0-acb9-4d6a-a5ea-431e78763a7d",
    title: "Malcolm X: A Life of Reinvention",
    author: "Manning Marable",
    category: "Biography",
    price: 700,
    discount: 54,
    imgUrl:
      "https://m.media-amazon.com/images/I/81cJV9U1VRL.jpg",
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
    description:
      "In 'Malcolm X: A Life of Reinvention,' Pulitzer Prize-winning author Manning Marable presents a comprehensive and thought-provoking biography of the influential civil rights leader Malcolm X. Marable delves deep into Malcolm X's life, from his troubled childhood and early criminal activities to his conversion to Islam and his transformation into a prominent figure in the Nation of Islam. The biography explores Malcolm X's evolution as a charismatic speaker, his role in the civil rights movement, and his later disillusionment with the Nation of Islam. Marable critically examines Malcolm X's complex persona, his intellectual growth, and his struggles with racial identity and political ideologies. Through extensive research and insightful analysis, 'Malcolm X: A Life of Reinvention' offers a nuanced portrait of a man who made a profound impact on American history and continues to inspire generations with his pursuit of justice and equality.",
    id: "27",
  },
  {
    _id: "07b45280-9ccd-4df6-bbe1-19bbb4fb6a24",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 600,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/81S0LnPGGUL.jpg",
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
    description:
      "J.K. Rowling's 'Harry Potter and the Chamber of Secrets' is the second book in the beloved fantasy series that follows the magical adventures of Harry Potter, a young wizard attending Hogwarts School of Witchcraft and Wizardry. In this installment, Harry returns to Hogwarts for his second year, only to find that the school is plagued by a mysterious series of attacks. As Harry delves into the secrets of the Chamber of Secrets, he uncovers dark forces and a terrifying creature that threatens the safety of the entire school. Alongside his friends Ron and Hermione, Harry must navigate challenges, solve puzzles, and confront his own fears to unravel the mystery and save Hogwarts. 'Harry Potter and the Chamber of Secrets' continues to enchant readers of all ages with its captivating storytelling, magical world-building, and themes of friendship, bravery, and the power of standing up against injustice.",
    id: "28",
  },
  {
    _id: "09cd07d0-f7de-49f5-a38c-5cb034fe3914",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    price: 600,
    discount: 100,
    imgUrl: "https://m.media-amazon.com/images/I/6196+-JPf0L.jpg",
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
    description:
      "'The Hobbit' by J.R.R. Tolkien is a timeless fantasy novel that serves as a prelude to 'The Lord of the Rings' trilogy. The story follows Bilbo Baggins, a reluctant hobbit who is swept into an extraordinary adventure when the wizard Gandalf and a group of dwarves arrive at his doorstep. Together, they embark on a quest to reclaim the dwarves' homeland from the fearsome dragon Smaug. Throughout their journey, Bilbo encounters magical creatures, treacherous obstacles, and his own inner courage. 'The Hobbit' is a delightful tale filled with memorable characters, vivid descriptions of Middle-earth, and a captivating narrative. It explores themes of heroism, friendship, and the discovery of one's true self. With Tolkien's enchanting storytelling and rich imagination, 'The Hobbit' has become a beloved classic in the fantasy genre, captivating readers of all ages with its whimsical charm and epic scope.",
    id: "29",
  },
  {
    _id: "20cbdacb-c631-4f6e-aa83-3d31af26aa89",
    title: "Pet Sematary",
    author: "Stephen King",
    category: "Horror",
    price: 1600,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/71XaPSTmUyL.jpg",
    pages: 352,
    rating: 5,
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
    description:
      "'Pet Sematary' is a chilling horror novel written by Stephen King. The story revolves around the Creed family who move to a small town in Maine and discover an ancient burial ground hidden deep in the woods behind their new home. As tragedy strikes the family, the burial ground's dark powers are unleashed, allowing the dead to come back to life. However, the resurrected loved ones are not the same, and their return leads to terrifying consequences. 'Pet Sematary' explores themes of grief, loss, and the depths of human desperation. Stephen King's masterful storytelling and atmospheric writing create a sense of dread and unease throughout the novel, making it a gripping and unsettling tale that has become a staple in the horror genre.",

    id: "30",
  },
  {
    _id: "4ddfaa36-044b-44a8-8f28-83eefef24ed1",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    category: "Drama",
    price: 460,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/711TxX8cdlL.jpg",
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
    description:
      "'Romeo and Juliet' is a tragic play written by William Shakespeare. Set in the city of Verona, the story follows the passionate love affair between Romeo, a member of the Montague family, and Juliet, a member of the rival Capulet family. Despite their families' long-standing feud, Romeo and Juliet marry in secret, but their happiness is short-lived as a series of unfortunate events and misunderstandings lead to their untimely deaths. Shakespeare's 'Romeo and Juliet' explores themes of love, fate, and the consequences of impulsive actions. The play is renowned for its poetic language, memorable characters, and timeless exploration of the complexities of human emotions. It remains one of Shakespeare's most celebrated works and a classic of world literature, captivating audiences with its tragic tale of young love and the destructive power of hatred.",
    id: "31",
  },
  {
    _id: "9cf05b45-40f4-486e-9a0f-15ef7595f19d",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 550,
    discount: 80,
    imgUrl:
      "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
    pages: 332,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterFan123",
        rating: 5,
        comment: "The beginning of a magical journey that captured my heart!",
        date: "2022-11-15",
      },
      {
        username: "BookLover456",
        rating: 4.5,
        comment:
          "Rowling's imaginative world-building and lovable characters make this a must-read for all ages.",
        date: "2022-11-01",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Philosopher's Stone' is the first book in the beloved fantasy series that introduces readers to the magical world of Harry Potter. The story follows young Harry as he discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry. Alongside his newfound friends Ron and Hermione, Harry uncovers secrets, battles dark forces, and learns about his own extraordinary destiny. 'Harry Potter and the Philosopher's Stone' enchants readers with its captivating storytelling, whimsical setting, and themes of friendship, courage, and the power of love. It is a timeless classic that has sparked the imaginations of millions of readers worldwide.",
    id: "33",
  },
  {
    _id: "4ad5d8fd-9ff6-4a66-92c7-cbb8583d11db",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 650,
    discount: 120,
    imgUrl:
      "https://m.media-amazon.com/images/I/91uix57X+jL.jpg",
    pages: 448,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterFanatic",
        rating: 5,
        comment:
          "An exhilarating and suspenseful addition to the Harry Potter series!",
        date: "2022-11-30",
      },
      {
        username: "MagicReader",
        rating: 4.7,
        comment:
          "Rowling's storytelling keeps getting better with each book. A must-read for all fantasy lovers.",
        date: "2022-11-25",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Prisoner of Azkaban' is the third book in the enchanting fantasy series that follows the magical adventures of Harry Potter. In this installment, Harry returns to Hogwarts for his third year, which becomes fraught with danger when an escaped prisoner named Sirius Black is believed to be after him. As Harry delves into the mystery surrounding Sirius Black and encounters new magical creatures and challenges, he discovers the complexities of loyalty, betrayal, and the true nature of good and evil. 'Harry Potter and the Prisoner of Azkaban' captivates readers with its thrilling plot twists, rich character development, and exploration of deeper themes. It is a spellbinding addition to the Harry Potter series that leaves readers eagerly anticipating the next magical installment.",
  },
  {
    _id: "95e8e572-5272-4329-95f9-6c0d8f0d18dd",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 700,
    discount: 150,
    imgUrl:
      "https://m.media-amazon.com/images/I/810jKiNChxL.jpg",
    pages: 734,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterHead1990",
        rating: 5,
        comment: "An epic and thrilling addition to the Harry Potter series!",
        date: "2022-10-20",
      },
      {
        username: "BookWorm77",
        rating: 4.5,
        comment:
          "Rowling's writing continues to captivate readers with its intricate plot and unforgettable characters.",
        date: "2022-10-15",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Goblet of Fire' is the fourth book in the beloved fantasy series that takes readers deeper into the magical world of Harry Potter. In this installment, Harry finds himself unexpectedly chosen as a champion in the Triwizard Tournament, a dangerous competition between three wizarding schools. As Harry faces deadly challenges, unravels dark secrets, and navigates complex relationships, he discovers that the line between friends and foes can blur and that the consequences of his actions can have far-reaching implications. 'Harry Potter and the Goblet of Fire' mesmerizes readers with its intricate plot, emotional depth, and exploration of themes such as identity, loss, and the choices that define us. It is a masterful addition to the Harry Potter series that keeps readers spellbound from beginning to end.",
    id: "34",
  },
  {
    _id: "e400c84a-1f15-44ce-8b36-4d08a8c741b4",
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 750,
    discount: 180,
    imgUrl:
      "https://m.media-amazon.com/images/I/81a4yXpXjnL.jpg",
    pages: 870,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterFanForever",
        rating: 5,
        comment:
          "A gripping and emotionally charged installment in the Harry Potter series!",
        date: "2022-09-30",
      },
      {
        username: "MagicalReader21",
        rating: 4.6,
        comment:
          "Rowling's writing continues to captivate, and the complexities of the wizarding world deepen with each book.",
        date: "2022-09-25",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Order of the Phoenix' is the fifth book in the captivating fantasy series that follows the magical journey of Harry Potter. In this installment, Harry returns to Hogwarts for his fifth year, only to find the wizarding world in turmoil. As he faces new challenges, including a new Defense Against the Dark Arts teacher and the oppressive control of the Ministry of Magic, Harry must navigate the complexities of politics, rebellion, and the growing threat of Lord Voldemort. 'Harry Potter and the Order of the Phoenix' delves into themes of resistance, resilience, and the power of unity in the face of darkness. It is a compelling and thought-provoking addition to the Harry Potter series that leaves readers eagerly awaiting the final battle between good and evil.",
    id: "35",
  },
  {
    _id: "721e051e-cbce-4340-974a-8d70699e3a32",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 800,
    discount: 200,
    imgUrl:
      "https://m.media-amazon.com/images/I/81p2+4nYtkL.jpg",
    pages: 607,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterFanatic123",
        rating: 5,
        comment:
          "An emotionally gripping and game-changing installment in the Harry Potter series!",
        date: "2022-08-20",
      },
      {
        username: "BookLover234",
        rating: 4.8,
        comment:
          "Rowling's writing reaches new heights in this thrilling and heartbreaking chapter of Harry's journey.",
        date: "2022-08-15",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Half-Blood Prince' is the sixth book in the beloved fantasy series that plunges readers into the depths of darkness and prepares them for the epic finale. In this installment, as Lord Voldemort's power continues to rise, Harry receives private lessons from Hogwarts headmaster Albus Dumbledore, delving into Voldemort's past and uncovering crucial information. As the wizarding world teeters on the brink of war, Harry and his friends face personal challenges, complex relationships, and devastating losses. 'Harry Potter and the Half-Blood Prince' explores themes of sacrifice, love, and the complexities of morality. It is a gripping and emotionally charged addition to the Harry Potter series that sets the stage for the final battle between light and darkness.",
  },
  {
    _id: "ca3e28d4-3eeb-4e1d-b988-ae108165fe8b",
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 850,
    discount: 220,
    imgUrl:
      "https://m.media-amazon.com/images/I/81Whkax7IGL.jpg",
    pages: 607,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterFanatic123",
        rating: 5,
        comment:
          "An epic and satisfying conclusion to the Harry Potter series!",
        date: "2022-07-25",
      },
      {
        username: "BookLover234",
        rating: 4.8,
        comment:
          "Rowling masterfully wraps up the series with heart-wrenching moments and a fulfilling resolution.",
        date: "2022-07-20",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Deathly Hallows' is the seventh and final book in the acclaimed fantasy series that brings Harry's journey to its thrilling conclusion. In this epic installment, Harry, Ron, and Hermione embark on a dangerous quest to find and destroy Voldemort's Horcruxes, objects containing pieces of his soul. As they face unimaginable challenges, make sacrifices, and confront the truth about themselves and their relationships, the battle between good and evil reaches its climax. 'Harry Potter and the Deathly Hallows' explores themes of love, sacrifice, and the power of unity in the face of adversity. It is a monumental finale that leaves readers spellbound and emotionally fulfilled.",
    id: "36",
  },
  {
    _id: "4ad5d8fd-9ff6-4a66-92c7-cbb8583d11db",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 650,
    discount: 120,
    imgUrl:
      "https://m.media-amazon.com/images/I/91uix57X+jL.jpg",
    pages: 448,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterFanatic",
        rating: 5,
        comment:
          "An exhilarating and suspenseful addition to the Harry Potter series!",
        date: "2022-11-30",
      },
      {
        username: "MagicReader",
        rating: 4.7,
        comment:
          "Rowling's storytelling keeps getting better with each book. A must-read for all fantasy lovers.",
        date: "2022-11-25",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Prisoner of Azkaban' is the third book in the enchanting fantasy series that follows the magical adventures of Harry Potter. In this installment, Harry returns to Hogwarts for his third year, which becomes fraught with danger when an escaped prisoner named Sirius Black is believed to be after him. As Harry delves into the mystery surrounding Sirius Black and encounters new magical creatures and challenges, he discovers the complexities of loyalty, betrayal, and the true nature of good and evil. 'Harry Potter and the Prisoner of Azkaban' captivates readers with its thrilling plot twists, rich character development, and exploration of deeper themes. It is a spellbinding addition to the Harry Potter series that leaves readers eagerly anticipating the next magical installment.",
    id: "37",
  },
  {
    _id: "721e051e-cbce-4340-974a-8d70699e3a32",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 800,
    discount: 200,
    imgUrl:
      "https://m.media-amazon.com/images/I/81p2+4nYtkL.jpg",
    pages: 607,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "PotterFanatic123",
        rating: 5,
        comment:
          "An emotionally gripping and game-changing installment in the Harry Potter series!",
        date: "2022-08-20",
      },
      {
        username: "BookLover234",
        rating: 4.8,
        comment:
          "Rowling's writing reaches new heights in this thrilling and heartbreaking chapter of Harry's journey.",
        date: "2022-08-15",
      },
    ],
    description:
      "J.K. Rowling's 'Harry Potter and the Half-Blood Prince' is the sixth book in the beloved fantasy series that plunges readers into the depths of darkness and prepares them for the epic finale. In this installment, as Lord Voldemort's power continues to rise, Harry receives private lessons from Hogwarts headmaster Albus Dumbledore, delving into Voldemort's past and uncovering crucial information. As the wizarding world teeters on the brink of war, Harry and his friends face personal challenges, complex relationships, and devastating losses. 'Harry Potter and the Half-Blood Prince' explores themes of sacrifice, love, and the complexities of morality. It is a gripping and emotionally charged addition to the Harry Potter series that sets the stage for the final battle between light and darkness.",
    id: "38",
  },
  {
    _id: "2a6c3e5b-8359-4f71-8e0d-4e118e38048a",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    price: 1200,
    discount: 200,
    imgUrl:
      "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
    pages: 324,
    rating: 4.5,
    isBestSeller: true,
    reviews: [
      {
        username: "Bookworm123",
        rating: 4.8,
        comment:
          "To Kill a Mockingbird is a timeless classic that explores important themes of justice and racism. Harper Lee's storytelling is captivating and thought-provoking.",
        date: "2022-11-20",
      },
      {
        username: "LiteratureFanatic",
        rating: 4.7,
        comment:
          "This novel beautifully captures the innocence of childhood while addressing the harsh realities of society. It's a must-read for anyone interested in great literature.",
        date: "2022-11-15",
      },
    ],
    description:
      "To Kill a Mockingbird is a Pulitzer Prize-winning novel by Harper Lee. Set in the 1930s in a small Southern town, the story follows Scout Finch as she navigates the complexities of racism and injustice. Through the eyes of Scout, the book explores themes of morality, compassion, and the loss of innocence. It is a powerful portrayal of the social issues prevalent at the time and continues to resonate with readers today.",
    id: "39",
  },
  {
    _id: "71e8f953-2e9a-4b56-b211-4b50f6ac5cc3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    price: 1050,
    discount: 150,
    imgUrl:
      "https://m.media-amazon.com/images/I/516qPs6NcqL.jpg",
    pages: 180,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "ClassicBookworm",
        rating: 4.5,
        comment:
          "The Great Gatsby is a captivating novel that brilliantly captures the decadence and disillusionment of the Jazz Age. Fitzgerald's prose is poetic and evocative.",
        date: "2022-10-30",
      },
      {
        username: "LiteraryEnthusiast",
        rating: 4.7,
        comment:
          "This book offers a powerful critique of the American Dream and explores themes of wealth, love, and the hollowness of the upper class. A must-read for any literature lover.",
        date: "2022-10-25",
      },
    ],
    description:
      "Set in the Roaring Twenties, The Great Gatsby by F. Scott Fitzgerald tells the story of Jay Gatsby and his pursuit of wealth, love, and the American Dream. Through vivid descriptions and compelling characters, the novel explores themes of ambition, corruption, and the emptiness of materialism. It is a timeless classic that continues to resonate with readers, offering a glimpse into the glamour and tragedy of the era.",
    id: "40",
  },
  {
    _id: "4d0f6d10-0e5b-4a9e-bb6c-839fcf9a8c85",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Drama",
    price: 950,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/61J8NJB9dTL.jpg",
    pages: 432,
    rating: 4.8,
    isBestSeller: false,
    reviews: [
      {
        username: "LiteraryLover",
        rating: 4.9,
        comment:
          "Pride and Prejudice is a timeless masterpiece. Jane Austen's witty writing and memorable characters make this novel a delight to read.",
        date: "2022-11-10",
      },
      {
        username: "AustenFan",
        rating: 4.7,
        comment:
          "This novel beautifully captures the social conventions of the time and explores themes of love, marriage, and societal expectations. A true literary gem!",
        date: "2022-11-05",
      },
    ],
    description:
      "Pride and Prejudice by Jane Austen is a classic novel that follows the story of Elizabeth Bennet as she navigates the complexities of love, marriage, and societal expectations in 19th-century England. With its memorable characters and sharp social commentary, the book offers a witty and insightful portrayal of the era. It continues to be cherished for its timeless themes and engaging storytelling.",
    id: "41",
  },
  {
    _id: "56a2937b-8d6a-4e54-947b-79db8eaa26f5",
    title: "A Streetcar Named Desire",
    author: "Tennessee Williams",
    category: "Drama",
    price: 1600,
    discount: 150,
    imgUrl:
      "https://m.media-amazon.com/images/I/91ctMEKnWEL.jpg",
    pages: 142,
    rating: 5,
    isBestSeller: false,
    reviews: [
      {
        username: "TheatreAficionado",
        rating: 4.9,
        comment:
          "A Streetcar Named Desire is a compelling and emotionally charged play that delves into themes of desire, madness, and the clash of cultures. Tennessee Williams' writing is exceptional.",
        date: "2022-07-01",
      },
      {
        username: "DramaFanatic",
        rating: 4.7,
        comment:
          "This play offers a profound exploration of human relationships and the consequences of personal illusions. It remains a classic in the realm of American drama.",
        date: "2022-06-25",
      },
    ],
    description:
      "A Streetcar Named Desire, written by Tennessee Williams, is a Pulitzer Prize-winning drama set in New Orleans. The play follows the tumultuous relationship between Blanche DuBois, a fading Southern belle, and Stanley Kowalski, her working-class brother-in-law. It explores themes of desire, power, mental instability, and the clash between old and new America. A Streetcar Named Desire is known for its memorable characters and intense emotional depth, making it a significant work in the realm of drama.",
    id: "42",
  },
  {
    _id: "f823d1e9-7e70-46c2-8f77-62955f625c1f",
    title: "Cat on a Hot Tin Roof",
    author: "Tennessee Williams",
    category: "Drama",
    price: 950,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/3173NyVIkzL.jpg",
    pages: 190,
    rating: 3.9,
    isBestSeller: false,
    reviews: [
      {
        username: "TheatreGoer123",
        rating: 3.8,
        comment:
          "Cat on a Hot Tin Roof explores themes of mendacity and the crumbling facade of a wealthy Southern family. While the writing is engaging, the play's pacing felt uneven at times.",
        date: "2022-09-01",
      },
      {
        username: "DramaViewer456",
        rating: 3.6,
        comment:
          "While the performances were strong, I found the characters' dynamics to be overly melodramatic. The play touches on interesting themes but failed to fully captivate my attention.",
        date: "2022-08-27",
      },
    ],
    description:
      "Cat on a Hot Tin Roof, written by Tennessee Williams, is a Pulitzer Prize-winning drama that delves into the complexities of the Pollitt family. Set in the Mississippi Delta, the play explores themes of greed, love, and the destructive power of lies. It examines the strained relationships within the family and the desperate search for truth and authenticity. Cat on a Hot Tin Roof is a powerful work that sheds light on the fragile nature of human connections.",
    id: "43",
  },
  {
    _id: "813b5c61-06f1-42a3-9d7e-9507ad1c0862",
    title: "Equus",
    author: "Peter Shaffer",
    category: "Drama",
    price: 850,
    discount: 120,
    imgUrl:
      "https://m.media-amazon.com/images/I/81i3FidfTHL.jpg",
    pages: 124,
    rating: 3.8,
    isBestSeller: false,
    reviews: [
      {
        username: "TheatreAficionado345",
        rating: 3.7,
        comment:
          "Equus explores dark and psychological themes, but the play's heavy symbolism and abstract storytelling left me feeling disconnected from the characters and their journeys.",
        date: "2022-09-20",
      },
      {
        username: "DramaFanatic345",
        rating: 3.5,
        comment:
          "While the performances were commendable, the play's plot and narrative structure felt disjointed. I struggled to fully grasp the underlying messages and the character's motivations.",
        date: "2022-09-15",
      },
    ],
    description:
      "Equus, written by Peter Shaffer, is a psychological drama that delves into the complex mind of a young man named Alan Strang, who has an obsessive fascination with horses. The play explores themes of passion, religion, and the boundaries of sanity. Through a series of intense and provocative scenes, Equus confronts the audience with questions about the nature of worship, repression, and the human psyche. It is a challenging and thought-provoking work that pushes the boundaries of conventional storytelling.",
    id: "44",
  },
  {
    _id: "436780b4-687f-47b3-9d8f-695d59b6e7e1",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    price: 1200,
    discount: 200,
    imgUrl:
      "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    pages: 443,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "HistoryBuff123",
        rating: 4.9,
        comment:
          "Sapiens provides a fascinating exploration of human history, covering various aspects from the cognitive revolution to modern-day advancements. Harari's writing style is engaging and thought-provoking, making it a must-read for anyone interested in understanding our shared past.",
        date: "2022-11-01",
      },
      {
        username: "ScienceEnthusiast456",
        rating: 4.7,
        comment:
          "As someone passionate about anthropology and evolution, Sapiens offered a comprehensive and insightful look into the development of our species. Harari's ability to condense complex ideas into an accessible narrative is commendable.",
        date: "2022-10-28",
      },
    ],
    description:
      "Sapiens: A Brief History of Humankind, written by Yuval Noah Harari, takes readers on a journey through the history of our species. From the emergence of Homo sapiens to the present day, Harari explores key developments, including the cognitive revolution, agricultural revolution, and scientific advancements. The book challenges conventional wisdom and offers new perspectives on our shared history. Sapiens is a captivating exploration of the human story, providing insights into our past and prompting reflection on our future.",
    id: "45",
  },
  {
    _id: "0c4e699d-1a0c-4ab4-9532-942bca87ef63",
    title: "Becoming",
    author: "Michelle Obama",
    category: "Non-Fiction",
    price: 1100,
    discount: 180,
    imgUrl:
      "https://m.media-amazon.com/images/I/819YLKVUOhL.jpg",
    pages: 426,
    rating: 4.9,
    isBestSeller: true,
    reviews: [
      {
        username: "MemoirReader234",
        rating: 5.0,
        comment:
          "Michelle Obama's memoir is a powerful and inspiring account of her journey from the South Side of Chicago to the White House. Her storytelling is both intimate and relatable, offering valuable insights into her life and the impact she has made. Becoming is a must-read for anyone seeking inspiration and a deeper understanding of resilience and personal growth.",
        date: "2022-11-10",
      },
      {
        username: "EmpoweringReader567",
        rating: 4.8,
        comment:
          "Becoming is an extraordinary memoir that not only sheds light on Michelle Obama's experiences but also resonates with readers on a personal level. Her authenticity and grace shine through her words, inspiring readers to embrace their own stories and strive for positive change.",
        date: "2022-11-05",
      },
    ],
    description:
      "Becoming, written by Michelle Obama, offers a glimpse into the life of the former First Lady of the United States. From her childhood in Chicago to her time in the White House, Obama shares personal anecdotes, reflections, and insights into her journey of self-discovery and public service. The memoir captures the challenges and triumphs she experienced along the way, highlighting the power of resilience, determination, and embracing one's own voice. Becoming is a compelling and empowering read that resonates with readers from all walks of life.",
    id: "46",
  },
  {
    _id: "63d9a9c5-aeae-40df-a516-6a7d8e3e5c34",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
    author: "Eckhart Tolle",
    category: "Non-Fiction",
    price: 250,
    discount: 150,
    imgUrl: "https://m.media-amazon.com/images/I/81rTrhtGDvL.jpg",
    pages: 236,
    rating: 2.6,
    isBestSeller: false,
    reviews: [
      {
        username: "MindfulnessSeeker890",
        rating: 4.8,
        comment:
          "The Power of Now is a transformative book that offers profound insights into living in the present moment. Tolle's teachings are enlightening and practical, providing a guide to cultivating mindfulness and finding inner peace.",
        date: "2022-10-20",
      },
      {
        username: "SpiritualExplorer123",
        rating: 4.4,
        comment:
          "Tolle's book is a reminder to embrace the present and let go of unnecessary worries and regrets. The Power of Now offers valuable techniques for quieting the mind and experiencing a deeper connection with oneself and the world.",
        date: "2022-10-15",
      },
    ],
    description:
      "The Power of Now: A Guide to Spiritual Enlightenment, written by Eckhart Tolle, invites readers to embrace the present moment and experience a state of spiritual awakening. Tolle explores the concept of mindfulness and offers practical techniques for transcending past and future concerns. Through his teachings, readers are encouraged to let go of negative thought patterns, release attachment to outcomes, and find peace in the here and now. The Power of Now is a transformative read that can help individuals cultivate a deeper sense of joy and fulfillment in their lives.",
    id: "47",
  },
  {
    _id: "d35ff0b4-0409-429e-b61b-49661561667e",
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    category: "Non-Fiction",
    price: 1050,
    discount: 160,
    imgUrl:
      "https://m.media-amazon.com/images/I/91Xsy7U27RL.jpg",
    pages: 384,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "ScienceReader234",
        rating: 4.9,
        comment:
          "The Immortal Life of Henrietta Lacks is a captivating exploration of science, ethics, and the impact of one woman's cells on medical research. Skloot's meticulous research and compassionate storytelling make this book a must-read for anyone interested in the intersection of medicine and human rights.",
        date: "2022-11-15",
      },
      {
        username: "BiomedicalEthics567",
        rating: 4.6,
        comment:
          "Rebecca Skloot's book sheds light on the often-overlooked story of Henrietta Lacks and her significant contribution to medical science. It raises important questions about consent, ownership, and the exploitation of marginalized communities in scientific research.",
        date: "2022-11-10",
      },
    ],
    description:
      "The Immortal Life of Henrietta Lacks, written by Rebecca Skloot, tells the remarkable story of Henrietta Lacks, a woman whose cells were unknowingly taken for medical research without her consent. The book explores the ethical implications of her case and delves into the scientific advancements made possible by her cells, known as HeLa cells. Skloot's narrative weaves together Lacks' personal story, the history of medical research, and the ongoing debate surrounding bioethics. The Immortal Life of Henrietta Lacks is a thought-provoking and poignant account that raises important questions about medical ethics and the human impact of scientific progress.",
    id: "48",
  },
  {
    _id: "e74f8b36-428d-4f78-bd25-27e2b0da800a",
    title: "Educated: A Memoir",
    author: "Tara Westover",
    category: "Non-Fiction",
    price: 1150,
    discount: 190,
    imgUrl:
      "https://m.media-amazon.com/images/I/71i+U0qfKQL.jpg",
    pages: 334,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "MemoirEnthusiast345",
        rating: 4.9,
        comment:
          "Educated is a powerful memoir that explores the transformative power of education and the resilience of the human spirit. Westover's story is both heartbreaking and inspiring, reminding us of the importance of knowledge and the pursuit of truth.",
        date: "2022-11-20",
      },
      {
        username: "AutobiographyReader678",
        rating: 4.7,
        comment:
          "Tara Westover's memoir is a testament to the power of determination and self-education. Her journey from a sheltered upbringing to academic success is both captivating and thought-provoking, leaving a lasting impression on readers.",
        date: "2022-11-18",
      },
    ],
    description:
      "Educated: A Memoir, written by Tara Westover, chronicles her journey from a remote mountainous region of Idaho to earning a Ph.D. from Cambridge University. Westover grew up in a strict and abusive household, isolated from formal education. Despite the numerous obstacles she faced, she taught herself to read and eventually pursued higher education, challenging the beliefs and traditions she grew up with. Educated is a captivating memoir that explores the transformative power of education and the resilience of the human spirit.",
    id: "49",
  },
  {
    _id: "0b3a855c-bb3f-41d3-9bce-56f4bb9ae75a",
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    category: "Horror",
    price: 1050,
    discount: 170,
    imgUrl:
      "https://m.media-amazon.com/images/I/61J5D3kxAwL.jpg",
    pages: 709,
    rating: 2.9,
    isBestSeller: false,
    reviews: [
      {
        username: "HorrorBookworm123",
        rating: 2.8,
        comment:
          "House of Leaves is an experimental horror novel that pushes the boundaries of storytelling. While the intricate narrative structure is intriguing, it can also be confusing and hard to follow. The unconventional formatting adds to the horror, but it may not appeal to everyone.",
        date: "2022-11-15",
      },
      {
        username: "HorrorEnthusiast456",
        rating: 2.7,
        comment:
          "House of Leaves is a unique and unsettling horror novel that plays with readers' perceptions. However, the convoluted plot and excessive footnotes make it a challenging read. It's an acquired taste for those who appreciate unconventional narratives.",
        date: "2022-11-11",
      },
    ],
    description:
      "House of Leaves, written by Mark Z. Danielewski, is an unconventional and unsettling horror novel that blurs the lines between reality and fiction. It tells the story of a young family's encounter with a mysterious and ever-expanding house that defies the laws of physics. House of Leaves is a mind-bending exploration of fear, madness, and the power of storytelling.",
    id: "50",
  },
  {
    _id: "b6d8d582-8431-4e69-b1b0-50e89fde16a2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    price: 1490,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/31Jo+vKgwEL.jpg",
    pages: 197,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "Dreamer123",
        rating: 4.8,
        comment:
          "Paulo Coelho's The Alchemist is a mesmerizing tale of self-discovery and following one's dreams. The allegorical narrative and profound wisdom make it a book that resonates with readers of all ages.",
        date: "2022-11-18",
      },
      {
        username: "Booklover456",
        rating: 4.4,
        comment:
          "The Alchemist is a beautifully written novel that reminds us of the importance of listening to our hearts and pursuing our passions. Paulo Coelho's storytelling captivates and inspires.",
        date: "2022-11-15",
      },
    ],
    description:
      "The Alchemist, written by Paulo Coelho, is a philosophical novel that follows the journey of Santiago, an Andalusian shepherd boy, as he searches for a hidden treasure in the Egyptian desert. Through Santiago's encounters with various characters, Coelho imparts valuable life lessons about destiny, perseverance, and the pursuit of one's personal legend. The Alchemist is a captivating and uplifting tale that encourages readers to chase their dreams.",
    id: "51",
  },
  {
    _id: "a879dfc5-938b-43b1-9a3b-89f2a36c5e11",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Fiction",
    price: 780,
    discount: 130,
    imgUrl: "https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg",
    pages: 371,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "Storyteller123",
        rating: 4.9,
        comment:
          "Khaled Hosseini's The Kite Runner is a powerful and emotionally charged novel that explores friendship, betrayal, and redemption. The vivid storytelling and vivid characters make it a compelling read.",
        date: "2022-11-07",
      },
      {
        username: "Bookworm678",
        rating: 4.7,
        comment:
          "The Kite Runner is a heartbreaking yet beautifully written novel that transports readers to Afghanistan. Hosseini's storytelling is poignant, and the story lingers in your mind long after you've finished reading.",
        date: "2022-11-05",
      },
    ],
    description:
      "The Kite Runner, written by Khaled Hosseini, is a captivating novel set in Afghanistan. The story follows Amir, a young boy from Kabul, and his complex relationship with his best friend Hassan. Against the backdrop of a changing Afghanistan, the novel explores themes of guilt, redemption, and the power of forgiveness. The Kite Runner is a gripping and thought-provoking work of fiction.",
    id: "52",
  },
  {
    _id: "c051c650-8eb2-4a97-9c6e-f5f64c82f0e7",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Non-Fiction",
    price: 550,
    discount: 100,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Rich_Dad_Poor_Dad.jpg",
    pages: 336,
    rating: 4.5,
    isBestSeller: true,
    reviews: [
      {
        username: "WealthBuilder",
        rating: 1.8,
        comment:
          "Rich Dad Poor Dad is an eye-opening book that challenges traditional beliefs about money and financial literacy. Robert Kiyosaki's personal stories and practical advice provide valuable insights for achieving financial independence.",
        date: "2022-11-30",
      },
      {
        username: "Investor101",
        rating: 4.2,
        comment:
          "I found Rich Dad Poor Dad to be an inspiring read that emphasizes the importance of financial education and making smart investment decisions. Kiyosaki's teachings have the potential to change your perspective on wealth and financial success.",
        date: "2022-11-28",
      },
    ],
    description:
      "Rich Dad Poor Dad is a personal finance book written by Robert T. Kiyosaki. It challenges the conventional wisdom about money and shares Kiyosaki's own experiences of growing up with two fathers: his real father (poor dad) and his best friend's father (rich dad). Through their contrasting beliefs and advice, Kiyosaki imparts valuable lessons on how to think differently about money, build wealth, and achieve financial independence. Rich Dad Poor Dad is a must-read for anyone seeking to improve their financial literacy and take control of their financial future.",
    id: "53",
  },
  {
    _id: "e3659d90-25ed-4b68-b3f2-6a764e9c09b6",
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "Biography",
    price: 1450,
    discount: 80,
    imgUrl:
      "https://m.media-amazon.com/images/I/61pekVSBRhL.jpg",
    pages: 283,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "HistoryBuff",
        rating: 4.9,
        comment:
          "The Diary of a Young Girl is a poignant and powerful account of Anne Frank's experiences during the Holocaust. It provides a heartbreaking glimpse into her life and thoughts while in hiding. A must-read for understanding the human impact of World War II.",
        date: "2022-12-03",
      },
      {
        username: "Bookworm123",
        rating: 4.6,
        comment:
          "Anne Frank's diary is a testament to the strength and resilience of the human spirit. Her words transcend time and continue to inspire generations. A powerful and unforgettable read.",
        date: "2022-11-29",
      },
    ],
    description:
      "The Diary of a Young Girl, also known as The Diary of Anne Frank, is a collection of writings by Anne Frank, a Jewish girl who went into hiding with her family during the Nazi occupation of the Netherlands. Her diary entries provide an intimate and personal account of her life in hiding, her dreams, fears, and hopes for the future. The Diary of a Young Girl serves as a powerful reminder of the atrocities of the Holocaust and the resilience of the human spirit.",
    id: "54",
  },
  {
    id: "55",
    _id: "bc80a49f-3c44-4b32-baf2-f75e7747df50",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    price: 450,
    discount: 70,
    imgUrl:
      "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
    pages: 224,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "Bookworm123",
        rating: 4.8,
        comment:
          "The Catcher in the Rye is a coming-of-age novel that captures the struggles of adolescence and the search for identity. J.D. Salinger's writing is raw and honest, making it a timeless classic.",
        date: "2022-12-10",
      },
      {
        username: "LiteratureEnthusiast",
        rating: 4.7,
        comment:
          "J.D. Salinger's The Catcher in the Rye is a poignant portrayal of teenage angst and disillusionment. The protagonist, Holden Caulfield, is a relatable character whose journey resonates with readers of all ages.",
        date: "2022-12-08",
      },
    ],
    description:
      "The Catcher in the Rye is a classic novel by J.D. Salinger. It follows the story of Holden Caulfield, a disillusioned teenager who navigates the complexities of adolescence, identity, and societal expectations. Through Holden's introspective narrative, Salinger explores themes of alienation, loss of innocence, and the search for authenticity.",
  },
  {
    id: "56",
    _id: "3b2c27fd-df1b-4c1c-9f43-82ce6b011d6d",
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    category: "Thriller",
    price: 580,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/41dScwmqYJS.jpg",
    pages: 336,
    rating: 4.5,
    isBestSeller: true,
    reviews: [
      {
        username: "ThrillerFan",
        rating: 4.6,
        comment:
          "The Girl on the Train is a gripping psychological thriller that keeps you guessing until the very end. Paula Hawkins skillfully weaves together a complex narrative of suspense and intrigue.",
        date: "2022-12-06",
      },
      {
        username: "MysteryEnthusiast",
        rating: 4.5,
        comment:
          "Paula Hawkins' The Girl on the Train is a page-turner that will leave you on the edge of your seat. The unreliable narrator and twists and turns make it an engrossing read for fans of suspense.",
        date: "2022-12-04",
      },
    ],
    description:
      "The Girl on the Train is a thrilling mystery novel by Paula Hawkins. It follows Rachel Watson, a woman who becomes entangled in a missing person investigation. As Rachel becomes obsessed with solving the mystery, she unravels a web of secrets and lies. With its unreliable narrator and atmospheric setting, The Girl on the Train keeps readers guessing until the final revelation.",
  },
  {
    id: "57",
    _id: "5180b49f-3c44-4b32-baf2-f75e7747df50",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Fiction",
    price: 550,
    discount: 90,
    imgUrl:
      "https://m.media-amazon.com/images/I/71DAQuN7jhL.jpg",
    pages: 454,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "MysteryReader",
        rating: 4.8,
        comment:
          "The Da Vinci Code is a thrilling and intellectually stimulating novel. Dan Brown's masterful storytelling and intricate plot make it a must-read for fans of mystery and conspiracy.",
        date: "2022-12-12",
      },
      {
        username: "Booklover23",
        rating: 4.7,
        comment:
          "Dan Brown's The Da Vinci Code is a gripping page-turner that combines art, history, and suspense. It keeps you hooked from start to finish with its clever puzzles and twists.",
        date: "2022-12-09",
      },
    ],
    description:
      "The Da Vinci Code is a best-selling novel by Dan Brown. It follows the protagonist, Robert Langdon, as he gets entangled in a complex web of secret societies, religious conspiracies, and hidden codes. Set against the backdrop of art and history, the book takes readers on an exhilarating journey filled with clues and revelations. With its blend of action, mystery, and historical intrigue, The Da Vinci Code captivates readers until the final revelation.",
  },
  {
    id: "58",
    _id: "da8f27fd-df1b-4c1c-9f43-82ce6b011d6d",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Fiction",
    price: 420,
    discount: 80,
    imgUrl:
      "https://m.media-amazon.com/images/I/71yD5q10AaL.jpg",
    pages: 374,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "DystopiaFanatic",
        rating: 4.8,
        comment:
          "The Hunger Games is a gripping dystopian novel that explores themes of survival, sacrifice, and rebellion. Suzanne Collins' writing immerses readers in a dark and brutal world that keeps them on the edge of their seats.",
        date: "2022-12-07",
      },
      {
        username: "Bookworm101",
        rating: 4.5,
        comment:
          "Suzanne Collins' The Hunger Games is a thrilling and thought-provoking novel. It raises important questions about power, inequality, and the human spirit. A must-read for fans of dystopian fiction.",
        date: "2022-12-05",
      },
    ],
    description:
      "The Hunger Games is the first book in a popular dystopian trilogy by Suzanne Collins. Set in a future society where children are forced to compete in a televised fight to the death, the story follows Katniss Everdeen as she navigates the brutal Hunger Games and becomes a symbol of resistance. With its action-packed plot and strong female protagonist, The Hunger Games captivates readers of all ages.",
  },
  {
    id: "59",
    _id: "da2aqa3ec-df1b-4c1c-9f43-82ce6b011d6d",
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    category: "Fiction",
    price: 380,
    discount: 70,
    imgUrl:
      "https://m.media-amazon.com/images/I/91HYSx+bP5L.jpg",
    pages: 311,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "DystopiaEnthusiast",
        rating: 4.9,
        comment:
          "Margaret Atwood's The Handmaid's Tale is a chilling and thought-provoking dystopian novel. It explores themes of power, oppression, and women's rights in a society governed by religious extremism. A must-read.",
        date: "2022-11-29",
      },
      {
        username: "Booklover23",
        rating: 4.7,
        comment:
          "The Handmaid's Tale is a haunting and powerful book that offers a stark warning about the fragility of freedom and the dangers of totalitarianism. Margaret Atwood's writing is gripping and evocative.",
        date: "2022-11-26",
      },
    ],
    description:
      "The Handmaid's Tale is a dystopian novel by Margaret Atwood. Set in a future society called Gilead, it tells the story of Offred, a handmaid who is subjected to a life of servitude and reproductive coercion. The novel explores themes of gender, power, and individual agency in a world ruled by a totalitarian regime. With its powerful narrative and vivid world-building, The Handmaid's Tale has become a seminal work of speculative fiction.",
  },
  {
    id: "61",
    _id: "da81a3fd-df1b-4c1c-9f43-82ce6b011d6d",
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Fiction",
    price: 290,
    discount: 50,
    imgUrl:
      "https://m.media-amazon.com/images/I/817tHNcyAgL.jpg",
    pages: 313,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "YoungAdultReader",
        rating: 4.8,
        comment:
          "The Fault in Our Stars is a heart-wrenching and beautifully written novel. John Green captures the raw emotions of teenage love and the complexities of living with a terminal illness.",
        date: "2022-11-24",
      },
      {
        username: "Bookworm101",
        rating: 4.5,
        comment:
          "John Green's The Fault in Our Stars is a poignant and unforgettable story that explores the fragility of life and the power of human connection. It will make you laugh, cry, and reflect on what truly matters.",
        date: "2022-11-21",
      },
    ],
    description:
      "The Fault in Our Stars is a young adult novel by John Green. It tells the story of Hazel Grace Lancaster, a sixteen-year-old cancer patient, and her journey of love and self-discovery. With its compelling characters and heartfelt storytelling, The Fault in Our Stars resonates with readers of all ages, reminding us of the preciousness of life and the resilience of the human spirit.",
  },
  {
    id: "62",
    _id: "fa81a3fd-df1b-4c1c-9f43-82ce6b011d6d",
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Thriller",
    price: 400,
    discount: 80,
    imgUrl:
      "https://m.media-amazon.com/images/I/41aEQgTFPoL.jpg",
    pages: 432,
    rating: 4.7,
    isBestSeller: true,
    reviews: [
      {
        username: "ThrillerFanatic",
        rating: 4.8,
        comment:
          "Gone Girl is a gripping and twisty thriller that keeps you guessing until the very end. Gillian Flynn's writing is sharp and addictive, making it a must-read for fans of the genre.",
        date: "2022-11-18",
      },
      {
        username: "Booklover23",
        rating: 4.6,
        comment:
          "Gillian Flynn's Gone Girl is a rollercoaster of suspense and psychological manipulation. The intricate plot and flawed characters make it an enthralling read from start to finish.",
        date: "2022-11-16",
      },
    ],
    description:
      "Gone Girl is a thrilling novel by Gillian Flynn. It follows the story of Nick Dunne, whose wife, Amy, goes missing under suspicious circumstances. As the investigation unfolds, secrets and lies are revealed, leaving readers on the edge of their seats. With its unpredictable twists and complex characters, Gone Girl is a masterclass in psychological suspense.",
  },
  {
    id: "63",
    _id: "bd81a3fd-df1b-4c1c-9f43-82ce6b011d6d",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Thriller",
    price: 350,
    discount: 70,
    imgUrl:
      "https://m.media-amazon.com/images/I/81NzFbZMpNL.jpg",
    pages: 590,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "MysteryLover",
        rating: 4.8,
        comment:
          "The Girl with the Dragon Tattoo is a dark and captivating thriller that keeps you guessing until the very end. Stieg Larsson's intricate plotting and compelling characters make it a must-read for fans of the genre.",
        date: "2022-11-14",
      },
      {
        username: "Bookworm101",
        rating: 4.5,
        comment:
          "Stieg Larsson's The Girl with the Dragon Tattoo is a gripping and atmospheric novel that delves into the dark underbelly of Swedish society. Lisbeth Salander is a truly unforgettable character.",
        date: "2022-11-12",
      },
    ],
    description:
      "The Girl with the Dragon Tattoo is the first book in the Millennium series by Stieg Larsson. It introduces readers to the enigmatic hacker Lisbeth Salander and journalist Mikael Blomkvist, who team up to solve a decades-old disappearance case. Filled with intrigue, suspense, and complex characters, this thriller is a page-turner that will leave you craving for more.",
  },
  {
    id: "64",
    _id: "dca313fd-df1b-4c1c-9f43-020d6b011d6d",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Thriller",
    price: 420,
    discount: 80,
    imgUrl:
      "https://m.media-amazon.com/images/I/51oVTRsjcqL.jpg",
    pages: 336,
    rating: 4.8,
    isBestSeller: true,
    reviews: [
      {
        username: "MysteryLover",
        rating: 4.9,
        comment:
          "The Silent Patient is a mind-bending psychological thriller that will leave you speechless. Alex Michaelides' writing is taut and suspenseful, making it a must-read for fans of the genre.",
        date: "2022-11-02",
      },
      {
        username: "Booklover23",
        rating: 4.8,
        comment:
          "Alex Michaelides' The Silent Patient is a gripping and atmospheric novel that keeps you guessing until the very end. The twists and turns will leave you breathless.",
        date: "2022-10-31",
      },
    ],
    description:
      "The Silent Patient is a psychological thriller by Alex Michaelides. It tells the story of Alicia Berenson, a famous artist who has been silent since she was convicted of murdering her husband. With its complex characters and shocking revelations, this gripping novel will keep you guessing until the final page.",
  },
  {
    id: "65",
    _id: "80d2a3fd-df1b-4c1c-9f43-82ce6b011d6d",
    title: "The Bourne Identity",
    author: "Robert Ludlum",
    category: "Thriller",
    price: 520,
    discount: 100,
    imgUrl:
      "https://m.media-amazon.com/images/I/51e5lIz7sFL.jpg",
    pages: 544,
    rating: 4.6,
    isBestSeller: false,
    reviews: [
      {
        username: "ThrillerEnthusiast",
        rating: 4.7,
        comment:
          "The Bourne Identity is a fast-paced and action-packed thriller that will keep you on the edge of your seat. Robert Ludlum's writing and the intriguing character of Jason Bourne make it a must-read for fans of the genre.",
        date: "2022-10-29",
      },
      {
        username: "Bookworm101",
        rating: 4.5,
        comment:
          "Robert Ludlum's The Bourne Identity is a gripping and adrenaline-fueled novel that takes you on a thrilling ride. The twists and turns will keep you hooked until the very end.",
        date: "2022-10-27",
      },
    ],
    description:
      "The Bourne Identity is a thrilling novel by Robert Ludlum. It introduces the character of Jason Bourne, a man with amnesia who must uncover his true identity while evading dangerous enemies. With its non-stop action and suspense, this book will leave you wanting more.",
  },
  {
    id: "66",
    _id: "2c3d4e5f-6g7h-8i9j-0k1l2m3n4o5p",
    title: "1984",
    author: "George Orwell",
    category: "Classic",
    price: 410,
    discount: 90,
    imgUrl:
      "https://m.media-amazon.com/images/I/91sKUE5wwOL.jpg",
    pages: 328,
    rating: 4.5,
    isBestSeller: true,
    reviews: [
      {
        username: "DystopiaFan",
        rating: 4.7,
        comment:
          "George Orwell's 1984 is a chilling dystopian novel that serves as a stark warning about the dangers of totalitarianism. The book's themes of surveillance, government control, and the power of language are still relevant today.",
        date: "2023-05-19",
      },
      {
        username: "BigBrotherWatcher",
        rating: 4.4,
        comment:
          "1984 is a thought-provoking masterpiece that explores the concept of an oppressive regime and its impact on individual freedom. George Orwell's writing is both compelling and disturbing.",
        date: "2023-05-17",
      },
    ],
    description:
      "1984 is a dystopian novel by George Orwell. Set in a totalitarian society, it follows the life of Winston Smith as he navigates a world dominated by government surveillance and propaganda. This book is a haunting portrayal of the dangers of authoritarianism and the importance of preserving individuality.",
  },
  {
    id: "67",
    _id: "3d4e5f6g-7h8i-9j0k1l2m3n4o",
    title: "Moby-Dick",
    author: "Herman Melville",
    category: "Classic",
    price: 480,
    discount: 70,
    imgUrl:
      "https://m.media-amazon.com/images/I/61+KbxkEhJL.jpg",
    pages: 720,
    rating: 4.3,
    isBestSeller: false,
    reviews: [
      {
        username: "WhaleLover",
        rating: 4.4,
        comment:
          "Moby-Dick is an epic tale of obsession and adventure on the high seas. Herman Melville's poetic prose and vivid descriptions make it a literary masterpiece that delves into themes of man's struggle against nature.",
        date: "2023-05-21",
      },
      {
        username: "BookishSailor",
        rating: 4.2,
        comment:
          "Herman Melville's Moby-Dick is an ambitious and challenging novel that explores the depths of human nature and the pursuit of a mythical white whale. It's a philosophical journey that captivates the reader.",
        date: "2023-05-19",
      },
    ],
    description:
      "Moby-Dick is an American classic by Herman Melville. It tells the story of Captain Ahab's relentless quest for revenge against the elusive white whale, Moby Dick. This novel is a complex exploration of humanity, obsession, and the destructive power of unchecked ambition.",
  },
  {
    id: "68",
    _id: "4e5f6g7h-8i9j-0k1l2m3n4o5p",
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    category: "Classic",
    price: 300,
    discount: 20,
    imgUrl:
      "https://m.media-amazon.com/images/I/41FFyJrLslL.jpg",
    pages: 624,
    rating: 4.6,
    isBestSeller: true,
    reviews: [
      {
        username: "VictorianReader",
        rating: 4.8,
        comment:
          "Charlotte Bronte's Jane Eyre is a timeless classic that explores themes of love, independence, and societal expectations. The characters are vividly drawn, and the story is both emotional and empowering.",
        date: "2023-05-23",
      },
      {
        username: "BookwormJane",
        rating: 4.5,
        comment:
          "Jane Eyre is a captivating novel that showcases Charlotte Bronte's brilliant storytelling. The protagonist's journey of self-discovery and her pursuit of love make it a must-read for classic literature fans.",
        date: "2023-05-21",
      },
    ],
    description:
      "Jane Eyre is a renowned classic by Charlotte Bronte. It follows the life of Jane Eyre, an orphaned governess, as she faces trials and tribulations in her quest for independence and love. This novel is a powerful exploration of feminism, morality, and the human spirit.",
  },
  {
    id: "69",
    _id: "80d2a3fd-df1b-4c1c-9f43-82ce6b011d71",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    category: "Classic",
    price: 320,
    discount: 40,
    imgUrl:
      "https://m.media-amazon.com/images/I/51tSAJoRYZL.jpg",
    pages: 254,
    rating: 4.4,
    isBestSeller: false,
    reviews: [
      {
        username: "WildeEnthusiast",
        rating: 4.7,
        comment:
          "Oscar Wilde's The Picture of Dorian Gray is a captivating novel that explores the consequences of vanity and the pursuit of eternal youth. The prose is witty, and the story is both dark and thought-provoking.",
        date: "2023-06-04",
      },
      {
        username: "BookishDorian",
        rating: 4.1,
        comment:
          "The Picture of Dorian Gray is a brilliant work that delves into the corrupting influence of beauty and hedonism. Oscar Wilde's writing is sharp, and the moral questions raised are still relevant today.",
        date: "2023-06-03",
      },
    ],
    description:
      "The Picture of Dorian Gray is a philosophical novel by Oscar Wilde. It tells the story of Dorian Gray, a young man who remains eternally youthful while a portrait of him ages and reflects the moral decay of his soul. This book explores themes of art, beauty, and the consequences of immorality.",
  },
  {
    id: "70",
    _id: "80d2a3fd-df1b-4c1c-9f43-82ce6b011d70",
    title: "Mansfield Park",
    author: "Jane Austen",
    category: "Classic",
    price: 350,
    discount: 50,
    imgUrl:
      "https://m.media-amazon.com/images/I/71nOda5kFNL.jpg",
    pages: 560,
    rating: 4.3,
    isBestSeller: false,
    reviews: [
      {
        username: "AustenFanatic",
        rating: 4.5,
        comment:
          "Mansfield Park is a compelling novel that showcases Jane Austen's wit and keen observation of social manners. The complex characters and social commentary make it a worthwhile read.",
        date: "2023-06-03",
      },
      {
        username: "BookwormFanny",
        rating: 4.1,
        comment:
          "Jane Austen's Mansfield Park is a thought-provoking novel that highlights the social constraints faced by women in the 19th century. The moral dilemmas and character development are engaging.",
        date: "2023-06-02",
      },
    ],
    description:
      "Mansfield Park is a classic novel by Jane Austen. It follows the story of Fanny Price, a young girl from a poor family who is sent to live with her wealthy relatives at Mansfield Park. This book explores themes of social class, morality, and the power of love.",
  },
  {
    id: "71",
    _id: "80d2a3fd-df1b-4c1c-9f43-82ce6b011d6f",
    title: "Wuthering Heights",
    author: "Emily Bronte",
    category: "Classic",
    price: 420,
    discount: 80,
    imgUrl:
      "https://m.media-amazon.com/images/I/51xXBhcPX9L.jpg",
    pages: 416,
    rating: 4.7,
    isBestSeller: false,
    reviews: [
      {
        username: "MoorsEnthusiast",
        rating: 4.8,
        comment:
          "Emily Bronte's Wuthering Heights is a haunting and passionate novel that delves into the depths of human emotions. The tumultuous love story and atmospheric setting make it a literary masterpiece.",
        date: "2023-06-02",
      },
      {
        username: "BookwormCatherine",
        rating: 4.6,
        comment:
          "Wuthering Heights is a timeless classic that explores themes of love, revenge, and the destructive power of obsession. Emily Bronte's vivid storytelling and complex characters make it a must-read.",
        date: "2023-06-01",
      },
    ],
    description:
      "Wuthering Heights is a gothic novel by Emily Bronte. It revolves around the tempestuous love between Heathcliff and Catherine Earnshaw, set against the backdrop of the Yorkshire moors. This book is a powerful exploration of passion, revenge, and the enduring nature of love.",
  },
  {
    id: "72",
    _id: "a1b2c3d4-e5f6-g7h8-i9j0k1l2m3n4",
    title: "Catching Fire",
    author: "Suzanne Collins",
    category: "Fiction",
    price: 1450,
    discount: 70,
    imgUrl: "https://m.media-amazon.com/images/I/51HurzyBBOL.jpg",
    pages: 391,
    rating: 5,
    isBestSeller: true,
    reviews: [
      {
        username: "DystopiaFanatic",
        rating: 4.8,
        comment: "Catching Fire is an intense sequel to The Hunger Games. Suzanne Collins continues to deliver a thrilling story that keeps readers hooked. The characters and the world-building are exceptional.",
        date: "2023-01-15",
      },
      {
        username: "Bookworm101",
        rating: 4.6,
        comment: "I couldn't put Catching Fire down! The twists and turns kept me guessing until the very end. Suzanne Collins' writing style is captivating, and the story delves deeper into the themes introduced in The Hunger Games.",
        date: "2023-01-10",
      },
    ],
    description: "Catching Fire is the second book in the Hunger Games trilogy by Suzanne Collins. It continues the story of Katniss Everdeen after her victory in the Hunger Games. As rebellion simmers in the districts, Katniss becomes a symbol of hope and a target of the oppressive Capitol. With its suspenseful plot and engaging characters, Catching Fire builds upon the success of its predecessor.",
  },
  {
    id: "73",
    _id: "b5a4c3d2-e1f6-g7h8-i9j0k1l2m3n4",
    title: "Mockingjay",
    author: "Suzanne Collins",
    category: "Fiction",
    price: 400,
    discount: 90,
    imgUrl: "https://m.media-amazon.com/images/I/81TJJR6+cIL.jpg",
    pages: 390,
    rating: 4.5,
    isBestSeller: true,
    reviews: [
      {
        username: "DystopiaFanatic",
        rating: 4.7,
        comment: "Mockingjay is a thrilling conclusion to the Hunger Games trilogy. Suzanne Collins masterfully concludes the story, with heart-wrenching moments and a realistic portrayal of the consequences of war.",
        date: "2023-05-01",
      },
      {
        username: "Bookworm101",
        rating: 4.4,
        comment: "I loved how Mockingjay tied up the loose ends and delivered an emotionally charged finale. Suzanne Collins doesn't shy away from the darkness and complexity of war, making it a powerful conclusion to the series.",
        date: "2023-04-28",
      },
    ],
    description: "Mockingjay is the third and final book in the Hunger Games trilogy by Suzanne Collins. As the rebellion against the Capitol reaches its climax, Katniss Everdeen finds herself at the center of a revolution. With the stakes higher than ever, she must make difficult choices that will shape the future of Panem. With its thrilling action and exploration of themes like power and sacrifice, Mockingjay brings the Hunger Games series to an unforgettable close.",
  },
];
