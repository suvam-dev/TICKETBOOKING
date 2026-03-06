// Pixar Movies Database for Cinema Booking App

const moviesDatabase = [
  {
    id: 1,
    name: "Toy Story",
    shortDescription: "A cowboy doll is profoundly threatened when a new spaceman figure supplants him as top toy.",
    detailedDescription: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room. Woody, a pull-string cowboy doll, has long enjoyed a place of honor as Andy's favorite toy. But when Buzz Lightyear, a high-tech space ranger, arrives as a birthday present, Woody's position as top toy is threatened. The two must learn to work together when circumstances separate them from their owner.",
    rating: 8.3,
    imageUrl: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    duration: "81 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-booked", "A4-booked", "A5-available", "A6-available", "A7-booked", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-booked", "B3-booked", "B4-available", "B5-available", "B6-available", "B7-available", "B8-booked", "B9-available", "B10-available"],
        ["C1-booked", "C2-booked", "C3-available", "C4-available", "C5-booked", "C6-booked", "C7-available", "C8-available", "C9-booked", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-booked", "D5-booked", "D6-booked", "D7-booked", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-booked", "E4-booked", "E5-booked", "E6-booked", "E7-booked", "E8-booked", "E9-available", "E10-available"],
        ["F1-booked", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-booked", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 2,
    name: "Finding Nemo",
    shortDescription: "A clown fish searches the ocean for his missing son with the help of a regal blue tang.",
    detailedDescription: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home. Marlin, an anxious and over-protective clownfish, lives in the Great Barrier Reef with his kid Nemo. When Nemo is captured by a boat and taken to a dentist's office in Sydney, Marlin sets off on a journey across the ocean to find him, meeting the forgetful but optimistic Dory along the way.",
    rating: 8.2,
    imageUrl: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    showTimes: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"],
    duration: "100 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-booked", "A2-booked", "A3-booked", "A4-available", "A5-available", "A6-available", "A7-booked", "A8-booked", "A9-booked", "A10-available"],
        ["B1-booked", "B2-available", "B3-available", "B4-available", "B5-booked", "B6-booked", "B7-available", "B8-available", "B9-booked", "B10-available"],
        ["C1-available", "C2-available", "C3-booked", "C4-booked", "C5-booked", "C6-booked", "C7-booked", "C8-available", "C9-available", "C10-booked"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-booked", "E2-booked", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-booked", "E9-booked", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-booked", "F5-booked", "F6-booked", "F7-available", "F8-available", "F9-available", "F10-booked"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-booked", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-booked", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 3,
    name: "The Incredibles",
    shortDescription: "A family of undercover superheroes must balance suburban life with saving the world.",
    detailedDescription: "While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world. Bob Parr (Mr. Incredible) and his wife Helen (Elastigirl) are the world's greatest famous superheroes, saving lives and fighting evil on a daily basis. After the government forces them into retirement, they adopt civilian identities and retreat to the suburbs to live normal lives with their three kids. Itching to get back into action, Bob gets his chance when a mysterious communication summons him to a remote island for a top secret assignment.",
    rating: 8.0,
    imageUrl: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    showTimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
    duration: "115 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-booked", "A6-booked", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-booked", "B4-booked", "B5-booked", "B6-booked", "B7-booked", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-booked", "C3-booked", "C4-available", "C5-available", "C6-available", "C7-booked", "C8-booked", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-booked", "F6-booked", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 4,
    name: "Inside Out",
    shortDescription: "The emotions inside a young girl's mind struggle to help her adapt to a new life.",
    detailedDescription: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school. Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions – Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life.",
    rating: 8.1,
    imageUrl: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    showTimes: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
    duration: "95 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-booked", "A2-booked", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-booked", "A9-booked", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-booked", "B5-booked", "B6-booked", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-booked", "C4-booked", "C5-available", "C6-booked", "C7-booked", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-booked", "D6-booked", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 5,
    name: "Coco",
    shortDescription: "A boy who dreams of becoming a musician finds himself in the Land of the Dead.",
    detailedDescription: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer. Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    rating: 8.4,
    imageUrl: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    showTimes: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
    duration: "105 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 6,
    name: "Up",
    shortDescription: "An elderly man ties balloons to his house and flies to South America with an unexpected companion.",
    detailedDescription: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway. By tying thousands of balloons to his house, Carl sets out to fulfill his lifelong dream to see the wilds of South America and complete a promise made to his late wife, Ellie. Right after lifting off, however, he learns he isn't alone on his journey, since Russell, a wilderness explorer 70 years his junior, has inadvertently become a stowaway on the trip.",
    rating: 8.3,
    imageUrl: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    duration: "96 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-booked", "A2-booked", "A3-booked", "A4-booked", "A5-available", "A6-available", "A7-booked", "A8-booked", "A9-booked", "A10-booked"],
        ["B1-available", "B2-available", "B3-booked", "B4-booked", "B5-booked", "B6-booked", "B7-booked", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-booked", "C3-booked", "C4-booked", "C5-booked", "C6-booked", "C7-booked", "C8-booked", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-booked", "D5-booked", "D6-booked", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-booked", "E6-booked", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 7,
    name: "WALL-E",
    shortDescription: "A robot tasked with cleaning a waste-covered Earth falls in love and follows her across the galaxy.",
    detailedDescription: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind. After hundreds of lonely years of doing what he was built for, WALL-E discovers a new purpose in life when he meets a sleek search robot named EVE. EVE comes to realize that WALL-E has inadvertently stumbled upon the key to the planet's future, and races back to space to report to the humans. Meanwhile, WALL-E chases EVE across the galaxy and sets into motion one of the most exciting and imaginative adventures ever brought to the big screen.",
    rating: 8.4,
    imageUrl: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    showTimes: ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
    duration: "98 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-booked", "C2-booked", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-booked", "C9-booked", "C10-available"],
        ["D1-available", "D2-available", "D3-booked", "D4-booked", "D5-booked", "D6-booked", "D7-booked", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 8,
    name: "Ratatouille",
    shortDescription: "A rat dreams of becoming a chef and teams up with a young kitchen worker in Paris.",
    detailedDescription: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant. Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
    rating: 8.1,
    imageUrl: "https://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg",
    showTimes: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    duration: "111 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-booked", "A5-booked", "A6-booked", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-booked", "F4-booked", "F5-booked", "F6-booked", "F7-booked", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 9,
    name: "Monsters, Inc.",
    shortDescription: "Monsters generate power from children's screams until they discover laughter is more powerful.",
    detailedDescription: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think. Monsters James P. Sullivan (Sulley) and his partner Mike Wazowski work at Monsters, Inc., the largest scare factory in Monstropolis. The city's power is generated from the screams of human children, but touching them is believed to be deadly. When a little girl enters the factory, Sulley and Mike must return her home before it's too late.",
    rating: 8.1,
    imageUrl: "https://image.tmdb.org/t/p/w500/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    duration: "92 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-booked", "A2-booked", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-booked", "A9-booked", "A10-available"],
        ["B1-available", "B2-available", "B3-booked", "B4-booked", "B5-booked", "B6-booked", "B7-booked", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-booked", "E5-booked", "E6-booked", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 10,
    name: "Toy Story 2",
    shortDescription: "Woody is stolen by a toy collector and Buzz leads a daring rescue mission.",
    detailedDescription: "When Woody is stolen by a toy collector, Buzz and his friends vow to rescue him, but Woody finds the idea of immortality in a museum tempting. While Andy is away at summer camp, Woody is toynapped by a greedy collector who needs him to complete his valuable collection of toys based on an old TV show called 'Woody's Roundup.' Buzz Lightyear and the other toys set out on a thrilling adventure to rescue their friend, but Woody must decide where his heart truly lies.",
    rating: 7.9,
    imageUrl: "https://image.tmdb.org/t/p/w500/yFWQkz2ynjwsazT6xQiIXEUsyuh.jpg",
    showTimes: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
    duration: "92 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-booked", "A6-booked", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-booked", "C2-booked", "C3-booked", "C4-available", "C5-available", "C6-available", "C7-booked", "C8-booked", "C9-booked", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 11,
    name: "Toy Story 3",
    shortDescription: "The toys are mistakenly delivered to a daycare center and must escape to return home.",
    detailedDescription: "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home. As Andy prepares to leave for college, his loyal toys find they have been donated to the Sunnyside Daycare center. While the prospect of new playtime seems like a dream come true, the toys soon learn that this daycare is more like a prison. Now, Woody and the gang must work together to escape and return home before Andy leaves.",
    rating: 8.3,
    imageUrl: "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    showTimes: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
    duration: "103 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-booked", "A2-booked", "A3-booked", "A4-booked", "A5-booked", "A6-booked", "A7-booked", "A8-booked", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-booked", "B4-booked", "B5-booked", "B6-booked", "B7-booked", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-booked", "C5-booked", "C6-booked", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 12,
    name: "Toy Story 4",
    shortDescription: "Woody and the gang embark on a road trip adventure with new and old friends.",
    detailedDescription: "When a new toy called 'Forky' joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy. Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called 'Forky' to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
    rating: 7.7,
    imageUrl: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    showTimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
    duration: "100 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-booked", "B3-booked", "B4-available", "B5-available", "B6-available", "B7-booked", "B8-booked", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-booked", "D5-booked", "D6-booked", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 13,
    name: "Finding Dory",
    shortDescription: "Dory sets out on a quest to find her long-lost parents with help from Nemo and Marlin.",
    detailedDescription: "Friendly but forgetful blue tang Dory begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way. The friendly-but-forgetful blue tang fish, Dory, begins a search for her long-lost parents and along the way learns a few things about the true meaning of family. With help from Nemo and Marlin, Dory embarks on an epic adventure to find them. Her journey brings her to the Marine Life Institute, a rehabilitation center and aquarium.",
    rating: 7.3,
    imageUrl: "https://image.tmdb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg",
    showTimes: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    duration: "97 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-booked", "A4-booked", "A5-booked", "A6-booked", "A7-booked", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-booked", "D2-booked", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-booked", "D9-booked", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 14,
    name: "Brave",
    shortDescription: "A Scottish princess defies tradition and must undo a beastly curse using her bravery.",
    detailedDescription: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse. Set in the Scottish Highlands, Brave follows the heroic journey of Merida, a skilled archer and headstrong daughter of King Fergus and Queen Elinor. Determined to carve her own path in life, Merida defies an age-old custom sacred to the unruly and uproarious lords of the land.",
    rating: 7.1,
    imageUrl: "https://image.tmdb.org/t/p/w500/1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    duration: "93 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-booked", "D6-booked", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 15,
    name: "Incredibles 2",
    shortDescription: "Helen is called on to lead a campaign while Bob navigates the day-to-day heroics of home life.",
    detailedDescription: "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world. While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of DevTech offer new hope with a bold project to rehabilitate the public image of Supers.",
    rating: 7.6,
    imageUrl: "https://image.tmdb.org/t/p/w500/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    showTimes: ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
    duration: "118 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-booked", "A2-booked", "A3-booked", "A4-available", "A5-available", "A6-available", "A7-booked", "A8-booked", "A9-booked", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-booked", "B5-booked", "B6-booked", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 16,
    name: "Monsters University",
    shortDescription: "Mike and Sulley's college years reveal how they became best friends despite their rivalry.",
    detailedDescription: "A look at the relationship between Mike Wazowski and James P. Sullivan during their days at Monsters University, when they weren't necessarily the best of friends. Mike Wazowski and James P. Sullivan are an inseparable pair, but that wasn't always the case. From the moment these two mismatched monsters met they couldn't stand each other. This movie unlocks the door to how Mike and Sulley overcame their differences and became the best of friends.",
    rating: 7.2,
    imageUrl: "https://image.tmdb.org/t/p/w500/L6qqU6Q3k4MmPojncNbT43FSTL.jpg",
    showTimes: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
    duration: "104 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-booked", "C4-booked", "C5-booked", "C6-booked", "C7-booked", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 17,
    name: "Cars",
    shortDescription: "A hotshot race car gets stranded in a small town and learns valuable life lessons.",
    detailedDescription: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family. On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life. While traveling to California for the dispute of the final race of the Piston Cup against The King and Chick Hicks, the famous Lightning McQueen accidentally damages the road of the small town Radiator Springs and is sentenced to repair it.",
    rating: 7.2,
    imageUrl: "https://image.tmdb.org/t/p/w500/2Touk3m5gzsqr1VsvxypdyHY5ci.jpg",
    showTimes: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
    duration: "117 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-booked", "A3-booked", "A4-booked", "A5-booked", "A6-booked", "A7-booked", "A8-booked", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 18,
    name: "Soul",
    shortDescription: "A musician who loses his passion for music finds himself in a fantastical realm exploring life's purpose.",
    detailedDescription: "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife. Joe Gardner is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz -- and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul. A jazz pianist with dreams of performing at the best jazz clubs in New York City gets the chance after impressing a famous quartet.",
    rating: 8.0,
    imageUrl: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    showTimes: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"],
    duration: "100 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-booked", "A2-booked", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-booked", "A9-booked", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-booked", "C6-booked", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-booked", "E5-booked", "E6-booked", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 19,
    name: "Turning Red",
    shortDescription: "A 13-year-old girl turns into a giant red panda whenever she gets too excited.",
    detailedDescription: "A thirteen-year-old girl named Mei Lee is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets too excited, she 'poofs' into a giant red panda. Young actress Rosalie Chiang lends her voice to Mei Lee, a 13-year-old who suddenly 'poofs' into a giant red panda when she gets too excited (which is practically always). Her protective, if not slightly overbearing mother, Ming, is never far from her daughter.",
    rating: 7.0,
    imageUrl: "https://image.tmdb.org/t/p/w500/q125RHUDgR4gjwh1QkfYuJLYkL.jpg",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    duration: "100 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-available", "B5-available", "B6-available", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  },
  {
    id: 20,
    name: "Luca",
    shortDescription: "A young sea monster experiences an unforgettable summer in a seaside town on the Italian Riviera.",
    detailedDescription: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human. Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the water's surface.",
    rating: 7.4,
    imageUrl: "https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    showTimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
    duration: "95 min",
    seats: {
      totalSeats: 100,
      rows: 10,
      seatsPerRow: 10,
      layout: [
        ["A1-available", "A2-available", "A3-available", "A4-available", "A5-available", "A6-available", "A7-available", "A8-available", "A9-available", "A10-available"],
        ["B1-available", "B2-available", "B3-available", "B4-booked", "B5-booked", "B6-booked", "B7-available", "B8-available", "B9-available", "B10-available"],
        ["C1-available", "C2-available", "C3-available", "C4-available", "C5-available", "C6-available", "C7-available", "C8-available", "C9-available", "C10-available"],
        ["D1-available", "D2-available", "D3-available", "D4-available", "D5-available", "D6-available", "D7-available", "D8-available", "D9-available", "D10-available"],
        ["E1-available", "E2-available", "E3-available", "E4-available", "E5-available", "E6-available", "E7-available", "E8-available", "E9-available", "E10-available"],
        ["F1-available", "F2-available", "F3-available", "F4-available", "F5-available", "F6-available", "F7-available", "F8-available", "F9-available", "F10-available"],
        ["G1-available", "G2-available", "G3-available", "G4-available", "G5-available", "G6-available", "G7-available", "G8-available", "G9-available", "G10-available"],
        ["H1-available", "H2-available", "H3-available", "H4-available", "H5-available", "H6-available", "H7-available", "H8-available", "H9-available", "H10-available"],
        ["I1-available", "I2-available", "I3-available", "I4-available", "I5-available", "I6-available", "I7-available", "I8-available", "I9-available", "I10-available"],
        ["J1-available", "J2-available", "J3-available", "J4-available", "J5-available", "J6-available", "J7-available", "J8-available", "J9-available", "J10-available"]
      ]
    }
  }
];

export default moviesDatabase;