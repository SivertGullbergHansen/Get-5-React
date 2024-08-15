import { TournamentCategory } from "@/tournament/types/tournament";
import { Prisma } from "@prisma/client";

type Tournament = Prisma.TournamentGetPayload<{
  include: { teams: true };
}>;

export const fakeTournaments: Tournament[] = [
  {
    id: 1,
    name: "Old But Gold",
    description:
      "Celebrate the legacy of Counter-Strike with Old But Gold, a tournament that brings together veteran players and classic strategies.",
    banner: "/refuse_banner.png",
    logo: "",
    startDate: new Date(2024, 8, 14, 17, 0),
    endDate: new Date(2024, 8, 18, 17, 0),
    isActive: true,
    teams: [],
    type: "DoubleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 16,
    maxRating: 0,
  },
  {
    id: 2,
    name: "Clutch Kings: Clash!",
    description:
      "Witness the ultimate test of nerves and skill in Clutch Kings Clash, where only the coolest and most calculated players will reign supreme.",
    banner: "/banner_example.png",
    logo: "",
    startDate: new Date(2024, 8, 14, 17, 0),
    endDate: new Date(2024, 8, 18, 17, 0),
    isActive: true,
    teams: [],
    type: "SingleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 16,
    maxRating: 0,
  },
  {
    id: 3,
    name: "Operation Overdrive",
    description:
      "Dive into the fast-paced action of Operation Overdrive, where elite teams battle it out in a high-octane Counter-Strike showdown.",
    banner: "/banner_t.png",
    logo: "",
    startDate: new Date(2024, 8, 14, 17, 0),
    endDate: new Date(2024, 8, 18, 17, 0),
    isActive: true,
    teams: [],
    type: "Swiss",
    isOpen: true,
    isPublic: true,
    maxTeams: 16,
    maxRating: 0,
  },
  {
    id: 4,
    name: "Future Legends Tournament",
    description:
      "A showcase for emerging talent in the Counter-Strike scene, Future Legends Tournament highlights the best up-and-coming teams.",
    banner: "/banner_water.jpg",
    logo: "",
    startDate: new Date(2025, 1, 15, 18, 0),
    endDate: new Date(2025, 1, 20, 18, 0),
    isActive: true,
    teams: [],
    type: "RoundRobin",
    isOpen: true,
    isPublic: true,
    maxTeams: 12,
    maxRating: 0,
  },
  {
    id: 5,
    name: "Winter Warfare",
    description:
      "Warm up your winter with the Winter Warfare tournament, featuring fierce competition and seasonal challenges.",
    banner: "/banner_snow.jpg",
    logo: "",
    startDate: new Date(2023, 11, 18, 16, 0),
    endDate: new Date(2023, 11, 22, 16, 0),
    isActive: false,
    teams: [],
    type: "DoubleElimination",
    isOpen: false,
    isPublic: true,
    maxTeams: 8,
    maxRating: 0,
  },
  {
    id: 6,
    name: "Summer Showdown",
    description:
      "Cool off with the Summer Showdown, a tournament packed with intense matches and summer-themed fun.",
    banner: "/banner_pool.jpg",
    logo: "",
    startDate: new Date(2024, 6, 20, 15, 0),
    endDate: new Date(2024, 6, 25, 15, 0),
    isActive: true,
    teams: [],
    type: "Swiss",
    isOpen: true,
    isPublic: true,
    maxTeams: 10,
    maxRating: 0,
  },
  {
    id: 7,
    name: "Grandmasters Gauntlet",
    description:
      "The Grandmasters Gauntlet is where the best of the best face off in a test of skill and strategy.",
    banner: "/banner_pool.jpg",
    logo: "",
    startDate: new Date(2024, 4, 25, 19, 0),
    endDate: new Date(2024, 4, 30, 19, 0),
    isActive: true,
    teams: [],
    type: "SingleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 16,
    maxRating: 0,
  },
  {
    id: 8,
    name: "Legends Return",
    description:
      "Legends Return brings back the greats for a nostalgic clash of titans.",
    banner: "/banner_momento.jpg",
    logo: "",
    startDate: new Date(2023, 10, 7, 20, 0),
    endDate: new Date(2023, 10, 12, 20, 0),
    isActive: false,
    teams: [],
    type: "DoubleElimination",
    isOpen: false,
    isPublic: true,
    maxTeams: 8,
    maxRating: 0,
  },
  {
    id: 9,
    name: "Spring Surge",
    description:
      "Kick off the spring season with intense matches in the Spring Surge tournament.",
    banner: "/banner_foroglio.jpg",
    logo: "",
    startDate: new Date(2024, 3, 5, 18, 0),
    endDate: new Date(2024, 3, 10, 18, 0),
    isActive: true,
    teams: [],
    type: "RoundRobin",
    isOpen: true,
    isPublic: true,
    maxTeams: 14,
    maxRating: 0,
  },
  {
    id: 10,
    name: "Autumn Clash",
    description:
      "Celebrate the fall with the Autumn Clash, where strategy meets seasonal excitement.",
    banner: "/banner_breach.jpg",
    logo: "",
    startDate: new Date(2024, 9, 10, 17, 0),
    endDate: new Date(2024, 9, 15, 17, 0),
    isActive: true,
    teams: [],
    type: "Swiss",
    isOpen: true,
    isPublic: true,
    maxTeams: 12,
    maxRating: 0,
  },
  {
    id: 11,
    name: "All-Star Showdown",
    description:
      "Watch top players face off in the All-Star Showdown, a celebration of the best in the game.",
    banner: "/banner_beer.jpg",
    logo: "",
    startDate: new Date(2024, 2, 24, 21, 0),
    endDate: new Date(2024, 2, 28, 21, 0),
    isActive: true,
    teams: [],
    type: "SingleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 8,
    maxRating: 0,
  },
  {
    id: 12,
    name: "Rising Stars Tournament",
    description:
      "Rising Stars Tournament focuses on up-and-coming players who are making waves in the competitive scene.",
    banner: "/banner_beer.jpg",
    logo: "",
    startDate: new Date(2024, 7, 12, 19, 0),
    endDate: new Date(2024, 7, 17, 19, 0),
    isActive: true,
    teams: [],
    type: "RoundRobin",
    isOpen: true,
    isPublic: true,
    maxTeams: 10,
    maxRating: 0,
  },
  {
    id: 13,
    name: "Elite Battle Royale",
    description:
      "The Elite Battle Royale features the top teams battling in a thrilling competition to determine the ultimate champion.",
    banner: "/banner_example.png",
    logo: "",
    startDate: new Date(2025, 0, 5, 18, 0),
    endDate: new Date(2025, 0, 10, 18, 0),
    isActive: true,
    teams: [],
    type: "DoubleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 16,
    maxRating: 0,
  },
  {
    id: 14,
    name: "Pro Circuit Finals",
    description:
      "The Pro Circuit Finals brings together the best teams from the season to compete for the championship.",
    banner: "/refuse_banner.png",
    logo: "",
    startDate: new Date(2024, 11, 1, 20, 0),
    endDate: new Date(2024, 11, 5, 20, 0),
    isActive: true,
    teams: [],
    type: "SingleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 8,
    maxRating: 0,
  },
  {
    id: 15,
    name: "Champions League Showdown",
    description:
      "The Champions League Showdown features the top-ranked teams in an intense competition for glory.",
    banner: "/banner_momento.jpg",
    logo: "",
    startDate: new Date(2024, 5, 15, 16, 0),
    endDate: new Date(2024, 5, 20, 16, 0),
    isActive: true,
    teams: [],
    type: "Swiss",
    isOpen: true,
    isPublic: true,
    maxTeams: 12,
    maxRating: 0,
  },
  {
    id: 16,
    name: "Summer Siege",
    description:
      "Prepare for an intense summer with the Summer Siege tournament, featuring high-stakes matches and competitive play.",
    banner: "/banner_snow.jpg",
    logo: "",
    startDate: new Date(2024, 6, 25, 17, 0),
    endDate: new Date(2024, 6, 30, 17, 0),
    isActive: true,
    teams: [],
    type: "RoundRobin",
    isOpen: true,
    isPublic: true,
    maxTeams: 14,
    maxRating: 0,
  },
  {
    id: 17,
    name: "End of Year Extravaganza",
    description:
      "Celebrate the end of the year with the End of Year Extravaganza, featuring a festive and competitive tournament.",
    banner: "/banner_pool.jpg",
    logo: "",
    startDate: new Date(2024, 11, 23, 21, 0),
    endDate: new Date(2024, 11, 28, 21, 0),
    isActive: true,
    teams: [],
    type: "DoubleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 8,
    maxRating: 0,
  },
  {
    id: 18,
    name: "Mid-Year Madness",
    description:
      "Mid-Year Madness is all about high-energy matches and unexpected twists in the competitive scene.",
    banner: "/banner_water.jpg",
    logo: "",
    startDate: new Date(2024, 6, 10, 20, 0),
    endDate: new Date(2024, 6, 15, 20, 0),
    isActive: true,
    teams: [],
    type: "SingleElimination",
    isOpen: true,
    isPublic: true,
    maxTeams: 16,
    maxRating: 0,
  },
] as const;

export const fakeCategories: TournamentCategory[] = [
  {
    label: "Hot Right Now",
    slug: "hot",
    tournamentIds: [7, 8, 9, 10, 11, 12], // Tournaments with lower min and max ratings
  },
  {
    label: "Great for Beginners",
    slug: "great_for_beginners",
    tournamentIds: [1, 2, 3, 4, 5, 6], // Tournaments with lower min and max ratings
  },
  {
    label: "Recurring Tournaments",
    slug: "streamers",
    tournamentIds: [3, 6, 12], // Tournaments with lower min and max ratings
  },
  {
    label: "Pro Scene",
    slug: "pro",
    tournamentIds: [13, 14, 15, 16], // Tournaments with lower min and max ratings
  },
  {
    label: "Invite Only",
    slug: "future_pro",
    tournamentIds: [17, 18], // Tournaments with lower min and max ratings
  },
] as const;