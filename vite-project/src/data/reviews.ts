// src/data/reviews.ts
export type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string; // "YYYY-MM-DD"
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "2023-08-10",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    date: "2023-08-11",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    date: "2023-08-12",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 4.5,
    date: "2023-08-13",
    text: "Fast delivery and great packaging. The fabric feels premium and the sizes match the chart exactly. I will definitely order again.",
  },
  {
    id: 5,
    name: "Daniel R.",
    rating: 5,
    date: "2023-08-14",
    text: "Customer support helped me swap a size in one day. It is rare to see a store that cares this much about its customers.",
  },
  {
    id: 6,
    name: "Samantha D.",
    rating: 4.5,
    date: "2023-08-14",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 7,
    name: "Alex M.",
    rating: 4,
    date: "2023-08-15",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
];