type User = {
	id: string,
	name: string,
	avatar: string
	recipes: string[],
};
type Recipe = {
	id: string,
	name: string,
	rating: Number,
	"cooking_time": string,
	calories: Number,
	image: string,
	ingredients: string[],
	steps: string[],
	user: string
};


const users: User[] = [
	{
		id: "9x7s",
		name: "Julia Sweisy",
		avatar: "https://api.multiavatar.com/Jussy.png",
		recipes: ["27ab"]
	},
	{
		id: "37ab",
		name: "Patrick Sweisy",
		avatar: "https://api.multiavatar.com/Paswy.png",
		recipes: ["c28d"]
	},
	{
      id: "9ldf",
      name: "Julia Sweisy",
      avatar: "https://api.multiavatar.com/Jussy.png",
			recipes: ["d97a"]
    }
];


const recipes: Recipe[] = [
  {
		id: "27ab",
    name: "Spaghetti Bolognese",
    rating: 4.8,
    cooking_time: "45 minutes",
    calories: 550,
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0",
    ingredients: [
      "400g ground beef",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 can (400g) crushed tomatoes",
      "2 tablespoons tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "300g spaghetti",
      "Grated Parmesan cheese for serving"
    ],
    steps: [
      "In a large skillet, brown the ground beef over medium heat.",
      "Add diced onion and minced garlic, sauté until softened.",
      "Stir in crushed tomatoes, tomato paste, oregano, basil, salt, and pepper.",
      "Simmer for 30 minutes, stirring occasionally.",
      "While the sauce simmers, cook the spaghetti according to package instructions.",
      "Serve the Bolognese sauce over the cooked spaghetti, topped with grated Parmesan cheese."
    ],
    user: "9x7s"
  },
  {
		id: "c28d",
    name: "Chicken Caesar Salad",
    rating: 4.5,
    cooking_time: "30 minutes",
    calories: 400,
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24",
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "Romaine lettuce, chopped",
      "Croutons",
      "1/2 cup grated Parmesan cheese",
      "1/2 cup Caesar dressing",
      "Salt and pepper to taste"
    ],
    steps: [
      "Season chicken breasts with salt and pepper.",
      "Grill or pan-fry chicken until fully cooked.",
      "Slice the cooked chicken into thin strips.",
      "In a large bowl, combine chopped Romaine lettuce, croutons, and grated Parmesan.",
      "Add the sliced chicken to the salad.",
      "Drizzle Caesar dressing over the salad and toss until well coated."
    ],
    user: "37ab"
  },
  {
		id: "d97a",
    name: "Vegetarian Stir-Fry",
    rating: 4.2,
    cooking_time: "20 minutes",
    calories: 300,
    image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0",
    ingredients: [
      "1 cup broccoli florets",
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "1 cup snap peas",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 tablespoon olive oil",
      "2 cloves garlic, minced",
      "1 teaspoon ginger, grated",
      "Cooked rice for serving"
    ],
    steps: [
      "Heat olive oil and sesame oil in a wok or large skillet over medium-high heat.",
      "Add minced garlic and grated ginger, sauté for 1-2 minutes.",
      "Add broccoli, bell pepper, carrot, and snap peas to the wok, stir-fry for 5-7 minutes until vegetables are tender-crisp.",
      "Pour soy sauce over the vegetables and toss to combine.",
      "Serve the stir-fried vegetables over cooked rice."
    ],
		user: "9ldf"
  },
]

function newID() {
	(Math.floor(Math.random()*61439)+4096).toString(16);
}

export const db = {
	User: {
		findAll: async () => users, 
		findById: async (id: string) => users.find(u => u.id == id),
	},
	Recipe: {
		findAll: async () => recipes, 
		findById: async (id: string) => recipes.find(r => r.id == id),
	}
}