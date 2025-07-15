export type SearchResult = {
  id: number;
  name: string;
  description: string;
  url: string;
};

export type UserActivity = {
  id: number;
  userId: number;
  activity_type: string;
  createdAt: string;
  search_query: string;
  search_results: SearchResult[];
};

export const userActivity = [
  {
    id: 1,
    userId: 1,
    activity_type: "search",
    createdAt: "2021-01-01",
    search_query: "apple",
    search_results: [
      {
        id: 1,
        name: "Apple",
        description: "Apple is a fruit",
        url: "https://www.apple.com",
      },
    ],
  },
  {
    id: 2,
    userId: 1,
    activity_type: "login",
    createdAt: "2021-01-01T08:00:00",
  },
  {
    id: 3,
    userId: 2,
    activity_type: "search",
    createdAt: "2021-01-02",
    search_query: "microsoft",
    search_results: [
      {
        id: 2,
        name: "Microsoft",
        description: "Technology company",
        url: "https://www.microsoft.com",
      },
    ],
  },
  {
    id: 4,
    userId: 1,
    activity_type: "logout",
    createdAt: "2021-01-01T17:30:00",
  },
  {
    id: 5,
    userId: 3,
    activity_type: "search",
    createdAt: "2021-01-03",
    search_query: "google",
    search_results: [
      {
        id: 3,
        name: "Google",
        description: "Search engine company",
        url: "https://www.google.com",
      },
    ],
  },
  {
    id: 6,
    userId: 2,
    activity_type: "login",
    createdAt: "2021-01-02T09:15:00",
  },
  {
    id: 7,
    userId: 1,
    activity_type: "search",
    createdAt: "2021-01-04",
    search_query: "amazon",
    search_results: [
      {
        id: 4,
        name: "Amazon",
        description: "E-commerce company",
        url: "https://www.amazon.com",
      },
    ],
  },
  {
    id: 8,
    userId: 3,
    activity_type: "logout",
    createdAt: "2021-01-03T16:45:00",
  },
  {
    id: 9,
    userId: 2,
    activity_type: "search",
    createdAt: "2021-01-05",
    search_query: "facebook",
    search_results: [
      {
        id: 5,
        name: "Facebook",
        description: "Social media platform",
        url: "https://www.facebook.com",
      },
    ],
  },
  {
    id: 10,
    userId: 1,
    activity_type: "login",
    createdAt: "2021-01-06T08:30:00",
  },
  {
    id: 11,
    userId: 3,
    activity_type: "search",
    createdAt: "2021-01-07",
    search_query: "twitter",
    search_results: [
      {
        id: 6,
        name: "Twitter",
        description: "Social media platform",
        url: "https://www.twitter.com",
      },
    ],
  },
  {
    id: 12,
    userId: 2,
    activity_type: "logout",
    createdAt: "2021-01-05T18:00:00",
  },
  {
    id: 13,
    userId: 1,
    activity_type: "search",
    createdAt: "2021-01-08",
    search_query: "netflix",
    search_results: [
      {
        id: 7,
        name: "Netflix",
        description: "Streaming service",
        url: "https://www.netflix.com",
      },
    ],
  },
  {
    id: 14,
    userId: 3,
    activity_type: "login",
    createdAt: "2021-01-09T10:00:00",
  },
  {
    id: 15,
    userId: 2,
    activity_type: "search",
    createdAt: "2021-01-10",
    search_query: "spotify",
    search_results: [
      {
        id: 8,
        name: "Spotify",
        description: "Music streaming service",
        url: "https://www.spotify.com",
      },
    ],
  },
  {
    id: 16,
    userId: 1,
    activity_type: "logout",
    createdAt: "2021-01-08T17:15:00",
  },
  {
    id: 17,
    userId: 3,
    activity_type: "search",
    createdAt: "2021-01-11",
    search_query: "linkedin",
    search_results: [
      {
        id: 9,
        name: "LinkedIn",
        description: "Professional networking platform",
        url: "https://www.linkedin.com",
      },
    ],
  },
  {
    id: 18,
    userId: 2,
    activity_type: "login",
    createdAt: "2021-01-12T09:45:00",
  },
  {
    id: 19,
    userId: 1,
    activity_type: "search",
    createdAt: "2021-01-13",
    search_query: "instagram",
    search_results: [
      {
        id: 10,
        name: "Instagram",
        description: "Photo sharing platform",
        url: "https://www.instagram.com",
      },
    ],
  },
  {
    id: 20,
    userId: 3,
    activity_type: "logout",
    createdAt: "2021-01-11T16:30:00",
  },
  {
    id: 21,
    userId: 2,
    activity_type: "search",
    createdAt: "2021-01-14",
    search_query: "youtube",
    search_results: [
      {
        id: 11,
        name: "YouTube",
        description: "Video sharing platform",
        url: "https://www.youtube.com",
      },
    ],
  },
  {
    id: 22,
    userId: 1,
    activity_type: "login",
    createdAt: "2021-01-15T08:15:00",
  },
  {
    id: 23,
    userId: 3,
    activity_type: "search",
    createdAt: "2021-01-16",
    search_query: "reddit",
    search_results: [
      {
        id: 12,
        name: "Reddit",
        description: "Social news platform",
        url: "https://www.reddit.com",
      },
    ],
  },
  {
    id: 24,
    userId: 2,
    activity_type: "logout",
    createdAt: "2021-01-14T17:45:00",
  },
  {
    id: 25,
    userId: 1,
    activity_type: "search",
    createdAt: "2021-01-17",
    search_query: "pinterest",
    search_results: [
      {
        id: 13,
        name: "Pinterest",
        description: "Image sharing platform",
        url: "https://www.pinterest.com",
      },
    ],
  },
  {
    id: 26,
    userId: 3,
    activity_type: "login",
    createdAt: "2021-01-18T10:30:00",
  },
  {
    id: 27,
    userId: 2,
    activity_type: "search",
    createdAt: "2021-01-19",
    search_query: "tiktok",
    search_results: [
      {
        id: 14,
        name: "TikTok",
        description: "Short video platform",
        url: "https://www.tiktok.com",
      },
    ],
  },
  {
    id: 28,
    userId: 1,
    activity_type: "logout",
    createdAt: "2021-01-17T16:15:00",
  },
  {
    id: 29,
    userId: 3,
    activity_type: "search",
    createdAt: "2021-01-20",
    search_query: "snapchat",
    search_results: [
      {
        id: 15,
        name: "Snapchat",
        description: "Multimedia messaging app",
        url: "https://www.snapchat.com",
      },
    ],
  },
  {
    id: 30,
    userId: 2,
    activity_type: "login",
    createdAt: "2021-01-21T09:00:00",
  },
  {
    id: 31,
    userId: 1,
    activity_type: "search",
    createdAt: "2021-01-22",
    search_query: "whatsapp",
    search_results: [
      {
        id: 16,
        name: "WhatsApp",
        description: "Messaging app",
        url: "https://www.whatsapp.com",
      },
    ],
  },
  {
    id: 32,
    userId: 3,
    activity_type: "logout",
    createdAt: "2021-01-20T17:30:00",
  }
];