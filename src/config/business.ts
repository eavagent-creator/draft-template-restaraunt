import { BusinessConfig } from "../types";

export const businessConfig: BusinessConfig = {
 name: "Mi Mexico Lindo Pizzeria And Restaurant",
 description: "Authentic Mexican flavors and delicious pizzas in the heart of Bridgeport, CT. Family-owned and operated.",
 address: "1175 E Main St",
 city: "Bridgeport",
 state: "CT",
 zip: "06608",
 phone: "(203) 336-0834",
 email: "hello@mimexicolindorestaurant.com",
 hours: [
 "Mon-Thu: 11:00 AM - 9:00 PM",
 "Fri-Sat: 11:00 AM - 10:00 PM",
 "Sun: 12:00 PM - 8:00 PM"
 ],
 socials: {
 instagram: "https://instagram.com/mimexicolindorestaurant",
 facebook: "https://facebook.com/mimexicolindorestaurant"
 },
 delivery: {
 available: true,
 fee: 3.50,
 minOrder: 15.00,
 estimatedTime: "30-45 mins"
 },
 pickup: {
 available: true,
 estimatedTime: "15-20 mins"
 },
 menu: [
 {
 id: "s_banas",
 name: "Sábanas",
 description: "Grilled steak with shrimp in red hot sauce and cheese ",
 price: 21,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "mole_poblano",
 name: "Mole Poblano",
 description: "Chicken legs topped with mole sauce. Served with rice, beans and salad. ",
 price: 19,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_75fa650af9c04fbb8f123131deb57f28~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80/image.jpg",
 isAvailable: true
 },
 {
 id: "bistec_encebollado",
 name: "Bistec Encebollado",
 description: "Grilled Steak with onions. ",
 price: 16,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_dec170630098459a8663406e1392851f~mv2.jpg",
 isAvailable: true
 },
 {
 id: "bistec_ranchero",
 name: "Bistec Ranchero",
 description: "Steak sauteed with onions and peppers in red hot sauce",
 price: 16,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_75fa650af9c04fbb8f123131deb57f28~mv2.jpg",
 isAvailable: true
 },
 {
 id: "bistec_en_salsa_de_chipotle",
 name: "Bistec En Salsa De Chipotle",
 description: "Steak in chipotle sauce",
 price: 17,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_21158da414514f019bdcb6f6a50e4d3a~mv2.jpeg",
 isAvailable: true
 },
 {
 id: "lengua_en_salsa",
 name: "Lengua En Salsa",
 description: "Beef Tongue sauteed in sauce (red or green). ",
 price: 18,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_abaf6f57f9684dffa3b3604dec9ef371~mv2.jpg",
 isAvailable: true
 },
 {
 id: "chuletas_en_salsa",
 name: "Chuletas En Salsa",
 description: "Pork chops in sauce (red or green). ",
 price: 18,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_9f8b1b1e98b6444f9aa51703408dfb60~mv2.jpg",
 isAvailable: true
 },
 {
 id: "camarones_empanizados",
 name: "Camarones Empanizados",
 description: "Breaded shrimp",
 price: 19,
 category: "Seafood & Soups",
 image: "https://static.wixstatic.com/media/f67dd8_399fea390d7f4798b67895fd050fc847~mv2.jpg",
 isAvailable: true
 },
 {
 id: "camarones_rancheros",
 name: "Camarones Rancheros",
 description: "Shrimp sauteed with onions and peppers in red hot sauce",
 price: 19,
 category: "Seafood & Soups",
 image: "https://static.wixstatic.com/media/f67dd8_a1114bcb00084cbfbcf2dcc45bb4afc4~mv2.jpg",
 isAvailable: true
 },
 {
 id: "camarones_al_ajillo",
 name: "Camarones Al Ajillo",
 description: "Shrimp sauteed in garlic butter",
 price: 19,
 category: "Seafood & Soups",
 image: "https://static.wixstatic.com/media/f67dd8_5269b579bc054057850b10cabccd1883~mv2.jpg",
 isAvailable: true
 },
 {
 id: "pollo_a_la_mexicana",
 name: "Pollo A La Mexicana",
 description: "Grilled chicken sauteed with onions, jalapeno, tomatoes and red sauce. ",
 price: 16,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_969b2e183c504049b95e4402bd728bc2~mv2.jpg",
 isAvailable: true
 },
 {
 id: "pollo_en_salsa_de_chipotle",
 name: "Pollo En Salsa De Chipotle",
 description: "Grilled chicken sauteed in chipotle sauce. ",
 price: 16,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_e5f96c551f7f48d3b4cafe5dbcb5093d~mv2.jpg",
 isAvailable: true
 },
 {
 id: "enchiladas",
 name: "Enchiladas",
 description: "In green and red sauce. With your choice of meat: Chicken, Sreal or Prok, Beef tongue add $2.00",
 price: 16,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "mojarra_frita",
 name: "Mojarra Frita",
 description: "Fried red porgy with rice, beans and salad.",
 price: 18,
 category: "Seafood & Soups",
 image: "https://static.wixstatic.com/media/f67dd8_d6075599facf452ca764426aac4e09d1~mv2.jpg",
 isAvailable: true
 },
 {
 id: "filete_de_pescado_frito",
 name: "Filete De Pescado Frito",
 description: "Fried fish filet",
 price: 16,
 category: "Seafood & Soups",
 image: "https://static.wixstatic.com/media/f67dd8_649a2d5b51264558806043d49cb26b50~mv2.jpeg",
 isAvailable: true
 },
 {
 id: "alambres_de_res",
 name: "Alambres De Res",
 description: " Grilled beef steak, with grilled cactus leaf, string cheese and Cambray onions.",
 price: 19,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_b749e26a9b394681a94586b0da72c9aa~mv2.png",
 isAvailable: true
 },
 {
 id: "alambres_de_lengua",
 name: "Alambres De Lengua",
 description: " Beef tongue, with grilled cactus leaf, string cheese and Cambray onions.",
 price: 20,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "alambres_de_camaron",
 name: "Alambres De Camaron",
 description: " Grilled shrimp, with grilled cactus leaf, string cheese and Cambray onions.",
 price: 22,
 category: "Seafood & Soups",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "alambres_de_costilla",
 name: "Alambres De Costilla",
 description: " Grilled ribs T-Bone Steak, with grilled cactus leaf, string cheese and Cambray onions.",
 price: 25,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_diner",
 name: "Burrito Diner",
 description: "Add your meats. Beef tongue $19.00 Shrimp $19.0",
 price: 16,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "flauta_diner",
 name: "Flauta Diner",
 description: "Add your meats. Beef tongue $19.00 Shrimp $19.0",
 price: 16,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "quesadilla_diner",
 name: "Quesadilla Diner",
 description: "Add your meats. Beef tongue $19.00 Shrimp $19.0",
 price: 16,
 category: "Antojitos Mexicanos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "chimichanga_diner",
 name: "Chimichanga Diner",
 description: "Add your meats. Beef tongue $19.00 Shrimp $19.00",
 price: 16,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "tacos_diner",
 name: "Tacos Diner",
 description: "With chicken, Mexican sausage, braised pork meat, spicy pork meat, beef steak, salty beef or mix. Additional meats. Beef tongue $19.00 Shrimp $19.00",
 price: 16,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "nachos",
 name: "Nachos",
 description: "Chips, refried beans, cheese, onion, tomato, cilantro, avocado and jalapenos. Choose your meat: Chicken, Mexican sausage, braised pork or spicy pork meat. Add $1 for Beef Steak or Salty Beef. Agregue $1 por Bistec o Cecina. ",
 price: 15,
 category: "Antojitos Mexicanos",
 image: "https://static.wixstatic.com/media/f67dd8_b7f2841d52bf4aa591dd7f41465c5f5e~mv2.jpg",
 isAvailable: true
 },
 {
 id: "tostadas_3",
 name: "Tostadas (3)",
 description: "Choose your meat: Chicken, Mexican sausage, braised pork or spicy pork meat. Add $1 for Beef Steak or Salty Beef. Agregue $1 por Bistec o Cecina. ",
 price: 15,
 category: "Antojitos Mexicanos",
 image: "https://static.wixstatic.com/media/f67dd8_c4488cb0dcc447efa2f4fb13526828af~mv2.png",
 isAvailable: true
 },
 {
 id: "huaraches",
 name: "Huaraches",
 description: "Choose your meat: Chicken, Mexican sausage, braised pork or spicy pork meat. Add $2 for Beef Steak or Salty Beef. Add $4 for Beef Tongue or shrimp. Add $9 for T-Bone Steak Agregue $1 por Bistec o Cecina. Agregue $4 por Lengua o Camarones. Agregue $9 por Costilla",
 price: 16,
 category: "Antojitos Mexicanos",
 image: "https://static.wixstatic.com/media/f67dd8_473c0dd46c6a4e60a3f0e4dca1cbe6c3~mv2.jpg",
 isAvailable: true
 },
 {
 id: "quesadillas",
 name: "Quesadillas",
 description: "Choose your meat: Beef steak, salt beef or mix. Served with Salad. Add $3 for Beef Tongue or Shrimp and salad. Agregue $3 por Lengua o Camarone con Ensalada. ",
 price: 13,
 category: "Antojitos Mexicanos",
 image: "https://static.wixstatic.com/media/f67dd8_f8f75f7735d1470092e8cd2f2710c27e~mv2.jpg",
 isAvailable: true
 },
 {
 id: "pozole_con_tostadas",
 name: "Pozole Con Tostadas",
 description: "Corn soup with pork",
 price: 17,
 category: "Antojitos Mexicanos",
 image: "https://static.wixstatic.com/media/f67dd8_33a201f61af84b05a89be480a1e13960~mv2.jpg",
 isAvailable: true
 },
 {
 id: "pancita",
 name: "Pancita",
 description: "Tripe soup",
 price: 17,
 category: "Platillos Tipicos",
 image: "https://static.wixstatic.com/media/f67dd8_e6eb470c0ca64ab9bdc6d28b2d8a4414~mv2.jpg",
 isAvailable: true
 },
 {
 id: "chilaquiles",
 name: "Chilaquiles",
 description: "Tortilla chips cooked with sauce. Choose your meat: Chicken, Mexican sausage or braised pork meat. Add $2 for Beef Tongue or Shrimp. Agregue $2 por Lengua o Camaron.",
 price: 16,
 category: "Antojitos Mexicanos",
 image: "https://static.wixstatic.com/media/f67dd8_f05d34d447b6438b910c0f4e00147944~mv2.jpg",
 isAvailable: true
 },
 {
 id: "coctel_de_camarones",
 name: "Coctel De Camarones",
 description: "Shrimp Cocktail",
 price: 18,
 category: "Seafood & Soups",
 image: "https://static.wixstatic.com/media/f67dd8_8b105270c46a4d278b7ee0016dfa96df~mv2.jpg",
 isAvailable: true
 },
 {
 id: "sopa_de_mariscos",
 name: "Sopa De Mariscos",
 description: "Mixed seafood",
 price: 19,
 category: "Seafood & Soups",
 image: "https://static.wixstatic.com/media/f67dd8_e697f479bd0b4937b31ad81afaefa5a7~mv2.jpg",
 isAvailable: true
 },
 {
 id: "mariscos_veracruzanos",
 name: "Mariscos Veracruzanos",
 description: "Seafood Veracruz style",
 price: 19,
 category: "Seafood & Soups",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "mariscos_en_chipotle",
 name: "Mariscos En Chipotle",
 description: "Seafood with chipotle sauce",
 price: 19,
 category: "Seafood & Soups",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "guacamole",
 name: "Guacamole",
 description: "With chips add $2.00",
 price: 10,
 category: "Antojitos Mexicanos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "orden_de_nopales",
 name: "Orden De Nopales",
 description: "Order of grilled Cactus leaves",
 price: 9,
 category: "Sides",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "orden_de_cebollines",
 name: "Orden De Cebollines",
 description: "Order of grilled Scallions",
 price: 7,
 category: "Sides",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "orden_de_arrroz_y_frijoles",
 name: "Orden De Arrroz Y Frijoles",
 description: "Order of rice and beans",
 price: 7,
 category: "Sides",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "order_of_3_tacos",
 name: "Order Of 3 Tacos",
 description: "Choose your meat: Chicken, Mexican sausage, braised pork, or spicy pork meat. ",
 price: 12,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "beef_tongue_order_of_3_tacos",
 name: "Beef Tongue\/order Of 3 Tacos",
 description: "Orden de 3 Tacos de Lengua",
 price: 16,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "charcoal_grilled_pork_order_of_3_tacos",
 name: "Charcoal Grilled Pork\/order Of 3 Tacos",
 description: "Orden de 3 Tacos al Carbón de puerco",
 price: 13,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "arabe_tacos_order_of_3_tacos",
 name: "Arabe Tacos\/order Of 3 Tacos",
 description: "Orden de 3 Tacos Arabes",
 price: 14,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "tacos_mix_order_of_3_tacos",
 name: "Tacos Mix\/order Of 3 Tacos",
 description: "Orden de 3 Tacos Mix",
 price: 12,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "beef_steaktacos_order_of_3_tacos",
 name: "Beef Steaktacos\/order Of 3 Tacos",
 description: "Orden de 3 Tacos de Bistec",
 price: 12,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "salty_beef_tacos_order_of_3_tacos",
 name: "Salty Beef Tacos\/order Of 3 Tacos",
 description: "Orden de 3 Tacos de Cecina",
 price: 13,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "marinated_pork_tacos_order_of_3_tacos",
 name: "Marinated Pork Tacos\/order Of 3 Tacos",
 description: "Orden de 3 Tacos al Pastor",
 price: 13,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "shrimp_tacos_order_of_3_tacos",
 name: "Shrimp Tacos\/order Of 3 Tacos",
 description: "Orden de 3 Tacos de Camarón ",
 price: 16,
 category: "Tacos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "bandeja_de_nachos",
 name: "Bandeja De Nachos",
 description: "Nachos Tray Regular Nachos $36/Large $70",
 price: 36,
 category: "Antojitos Mexicanos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "bandeja_de_nachos_tongue",
 name: "Bandeja De Nachos \/ Tongue",
 description: "Tongue Beef Nachos Tray Regular Nachos $40/Large $80",
 price: 40,
 category: "Antojitos Mexicanos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_cubana",
 name: "Torta Cubana",
 description: "Mexican Sandwich in a roll bread, Cuban Style",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_de_lengua",
 name: "Torta De Lengua",
 description: "Beef Tongue Mexican Sandwich in a roll bread",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_de_cecina",
 name: "Torta De Cecina",
 description: "Salty Beef Mexican Sandwich in a roll bread",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_mix",
 name: "Torta Mix",
 description: "Mix Meat Mexican Sandwich in a roll bread",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_milanesa_de_res",
 name: "Torta Milanesa De Res",
 description: "Breaded Beef Mexican Sandwich in a roll bread",
 price: 11,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_milanesa_de_pollo",
 name: "Torta Milanesa De Pollo",
 description: "Breaded Chicken Breast Mexican Sandwich in a roll bread",
 price: 11,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_de_carne_enchilada",
 name: "Torta De Carne Enchilada",
 description: "Spicy Pork Mexican Sandwich in a roll bread",
 price: 11,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_de_pollo",
 name: "Torta De Pollo",
 description: "Chicken Mexican Sandwich in a roll bread",
 price: 11,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_de_carnitas",
 name: "Torta De Carnitas",
 description: "Braised Pork Meat Mexican Sandwich in a roll bread",
 price: 11,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_de_chorizo",
 name: "Torta De Chorizo",
 description: "Mexican Sausage Mexican Sandwich in a roll bread",
 price: 11,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "torta_de_jam_n",
 name: "Torta De Jamón",
 description: "Ham Mexican Sandwich in a roll bread",
 price: 11,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cuban_cemita",
 name: "Cuban Cemita",
 description: "Poblano-Style Sandwich - Cuban",
 price: 13,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_lengua",
 name: "Cemita De Lengua",
 description: "Beef Tongue Poblano-Style Sandwich",
 price: 13,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_cecina",
 name: "Cemita De Cecina",
 description: "Salty Beef Poblano-Style Sandwich",
 price: 13,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_mix",
 name: "Cemita Mix",
 description: "Mix Meat Poblano-Style Sandwich",
 price: 13,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_milanesa_de_res",
 name: "Cemita De Milanesa De Res",
 description: "Breaded Beef Steak Poblano-Style Sandwich",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_milanesa_de_pollo",
 name: "Cemita De Milanesa De Pollo",
 description: "Breaded Chicken Breast Poblano-Style Sandwich",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_carne_enchilada",
 name: "Cemita De Carne Enchilada",
 description: "Spicy Pork Poblano-Style Sandwich",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_pollo",
 name: "Cemita De Pollo",
 description: "Chicken Poblano-Style Sandwich",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_carnitas",
 name: "Cemita De Carnitas",
 description: "Braised Pork Meat Poblano-Style Sandwich",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_chorizo",
 name: "Cemita De Chorizo",
 description: "Mexican Sausage Poblano-Style Sandwich",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cemita_de_jam_n",
 name: "Cemita De Jamón",
 description: "Ham Poblano-Style Sandwich",
 price: 12,
 category: "Tortas & Cemitas",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_pollo",
 name: "Burrito De Pollo",
 description: "Chicken Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream.",
 price: 13,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_carnitas",
 name: "Burrito De Carnitas",
 description: "Pork Braised meat Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 13,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_chorizo",
 name: "Burrito De Chorizo",
 description: "Mexican Sausage Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 13,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_carne_enchilada",
 name: "Burrito De Carne Enchilada",
 description: "Spicy Pork Meat Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 13,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_bistec",
 name: "Burrito De Bistec",
 description: "Beef Steak Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 13,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_cecina",
 name: "Burrito De Cecina",
 description: "Salty Beef Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 13,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_mix",
 name: "Burrito Mix",
 description: "Mix Meats Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 13,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_lengua",
 name: "Burrito De Lengua",
 description: "Tongue Beef Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 16,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "burrito_de_camar_n",
 name: "Burrito De Camarón",
 description: "Shrimp Burrito. Flour tortilla stuffed with rice, beans, vegetables and sour cream",
 price: 16,
 category: "Burritos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "hamburger",
 name: "Hamburger",
 description: "Hamburgesa sencilla. Served with lettuce, tomato and mayo",
 price: 7.5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cheeseburger",
 name: "Cheeseburger",
 description: "Served with lettuce, tomato, mayo and fries.",
 price: 8,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "bacon_cheeseburger",
 name: "Bacon Cheeseburger",
 description: "Served with lettuce, tomato and mayo",
 price: 9,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "gyro_sandwich",
 name: "Gyro Sandwich",
 description: "With lettuce, tomato, onions, peppers and cucumbers sauce on a pita bread",
 price: 10,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "gyro_diner",
 name: "Gyro Diner",
 description: "With french fries, lettuce, tomato, onions, peppers and cucumbers sauce on a pita bread",
 price: 13,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "steak_and_cheese_grinder",
 name: "Steak And Cheese Grinder",
 description: "Served with lettuce, tomato and mayonnaise",
 price: 11,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "turkey_grinder",
 name: "Turkey Grinder",
 description: "Served with lettuce, tomato, cheese and mayonnaise",
 price: 11,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "chicken_cutlet_grinder",
 name: "Chicken Cutlet Grinder",
 description: "Served with lettuce, tomato and mayonnaise",
 price: 11,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "chicken_parmigiana_grinder",
 name: "Chicken Parmigiana Grinder",
 description: "Served with sauce and cheese",
 price: 11,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "ham_grinder",
 name: "Ham Grinder",
 description: "Served with lettuce, tomato, cheese and mayonnaise",
 price: 11,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "ham_and_cheese_sandwich_club",
 name: "Ham And Cheese Sandwich Club",
 description: "Prepared with lettuce, tomato and mayo. Served with French Fries and Pickles. ",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "bacon_sandwich_club",
 name: "Bacon Sandwich Club",
 description: "Prepared with lettuce, tomato and mayo. Served with French Fries and Pickles. ",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "turkey_with_bacon_sandwich_club",
 name: "Turkey With Bacon Sandwich Club",
 description: "Prepared with lettuce, tomato and mayo. Served with French Fries and Pickles. ",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "chicken_with_cheese_sandwich_club",
 name: "Chicken With Cheese Sandwich Club",
 description: "Prepared with lettuce, tomato and mayo. Served with French Fries and Pickles. ",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "hamburger_with_bacon",
 name: "Hamburger With Bacon",
 description: "Prepared with lettuce, tomato and mayo. Served with French Fries and Pickles. ",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cheeseburger_with_bacon",
 name: "Cheeseburger With Bacon",
 description: "Prepared with lettuce, tomato and mayo. Served with French Fries and Pickles. ",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "mozzarella_pizza",
 name: "Mozzarella Pizza",
 description: "Choose your size.",
 price: 10,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "bacon_pizza",
 name: "Bacon Pizza",
 description: "Choose your size.",
 price: 13,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "pepperoni_pizza",
 name: "Pepperoni Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "sausage_pizza",
 name: "Sausage Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "ham_pizza",
 name: "Ham Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "broccoli_pizza",
 name: "Broccoli Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "mushroom_pizza",
 name: "Mushroom Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "peppers_pizza",
 name: "Peppers Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "onions_pizza",
 name: "Onions Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "fresh_garlic_pizza",
 name: "Fresh Garlic Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "pineapple_pizza",
 name: "Pineapple Pizza",
 description: "Choose your size.",
 price: 12,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "chicken_pizza",
 name: "Chicken Pizza",
 description: "Choose your size.",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "special_pizza_house_special",
 name: "Special Pizza - House Special",
 description: "Mushrooms, bacon, pepperoni, sausage, peppers and onions. Choose your size.",
 price: 15,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "special_pizza_vegetarian",
 name: "Special Pizza - Vegetarian",
 description: "Onions, peppers, broccoli, mushrooms, olives and eggplant. Choose your size.",
 price: 15,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "special_pizza_pizza_mexicana",
 name: "Special Pizza - Pizza Mexicana",
 description: "Spicy pork meat, onions, peppers, mushrooms and broccoli. Choose your size.",
 price: 18,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "special_pizza_chicken_broccoli",
 name: "Special Pizza - Chicken & Broccoli",
 description: " Choose your size.",
 price: 15,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "special_pizza_hawaiian_pizza",
 name: "Special Pizza - Hawaiian Pizza",
 description: " Choose your size.",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "special_pizza_shrimp_pizza",
 name: "Special Pizza - Shrimp Pizza",
 description: " Choose your size.",
 price: 17,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cheese_calzone",
 name: "Cheese Calzone",
 description: "Small $11; Large $14.00",
 price: 11,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "sausage_calzone",
 name: "Sausage Calzone",
 description: "Small $13 Large $15.00",
 price: 13,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "ham_calzone",
 name: "Ham Calzone",
 description: "Small $13 Large $15.00",
 price: 13,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "mushroom_calzone",
 name: "Mushroom Calzone",
 description: "Small $13 Large $15.00",
 price: 13,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "chicken_calzone",
 name: "Chicken Calzone",
 description: "Small $14 Large $17.00",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "special_mi_mexico_lindo_calzone",
 name: "Special Mi Mexico Lindo Calzone",
 description: "With meatballs, sausage, mushrooms, bacon, onions, pepperoni and peppers. Small $15 Large $18.00",
 price: 15,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "chicken_parmigiana",
 name: "Chicken Parmigiana",
 description: "Served with bread and salad",
 price: 15,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "tossed_salad",
 name: "Tossed Salad",
 description: "Lettuce, tomato, onions and peppers. Asdd $1 for Avocado",
 price: 9,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "grilled_chicken_salad",
 name: "Grilled Chicken Salad",
 description: "Grilled chicen, lettuce, tomato, onions, peppers and olives. Asdd $1 for Avocado",
 price: 14,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_de_horchata",
 name: "Agua De Horchata",
 description: "Rice water. Small $4.00 Large $7.00",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_de_tamarindo",
 name: "Agua De Tamarindo",
 description: "Tamarind water. Small $4.00 Large $7.00",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_de_papaya",
 name: "Agua De Papaya",
 description: "Papaya water. Small $4.00 Large $7.00",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_de_melon",
 name: "Agua De Melon",
 description: "Cantaloupe water. Small $4.00 Large $7.00",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_de_fresa",
 name: "Agua De Fresa",
 description: "Strawberry water. Small $4.00 Large $7.00",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_de_mamey",
 name: "Agua De Mamey",
 description: "Mamey water. Small $4.00 Large $7.00",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_de_guanabana",
 name: "Agua De Guanabana",
 description: "Soursop water. Small $4.00 Large $7.00",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "coca_cola",
 name: "Coca Cola",
 description: "12oz can",
 price: 2,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "batido_de_fresa",
 name: "Batido De Fresa",
 description: "Strawberry milkshake. Small $5.00 Large $8.00",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "batido_de_platano",
 name: "Batido De Platano",
 description: "Banana milkshake. Small $5.00 Large $8.00",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "batido_de_papaya",
 name: "Batido De Papaya",
 description: "Papaya milkshake. Small $5.00 Large $8.00",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "batido_de_melon",
 name: "Batido De Melon",
 description: "Cantaloupe milkshake. Small $5.00 Large $8.00",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "batido_de_mamey",
 name: "Batido De Mamey",
 description: "Mamey milkshake. Small $5.00 Large $8.00",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "batido_de_guanabana",
 name: "Batido De Guanabana",
 description: "Soursop milkshake. Small $5.00 Large $8.00",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "jarritos",
 name: "Jarritos",
 description: "Choose your flavor",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "2lt_jarritos",
 name: "2lt Jarritos",
 description: "Choose your flavor",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "mexican_coca_cola",
 name: "Mexican Coca Cola",
 description: "",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "sidral_mundet",
 name: "Sidral Mundet",
 description: "",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "sangria_se_orial",
 name: "Sangria Señorial",
 description: "",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "squirt",
 name: "Squirt",
 description: "",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "orange_fanta",
 name: "Orange Fanta",
 description: "",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "20_oz_sodas",
 name: "20 Oz Sodas",
 description: "Choose your flavor",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "2lt_sodas",
 name: "2lt Sodas",
 description: "Choose your flavor",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "boing_nectars",
 name: "Boing Nectars",
 description: "Choose your flavor",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "agua_dasani",
 name: "Agua Dasani",
 description: "20oz",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "minute_maid_orange_juice",
 name: "Minute Maid Orange Juice",
 description: "12oz",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "minute_maid_apple_juice",
 name: "Minute Maid Apple Juice",
 description: "12oz",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "gatorade",
 name: "Gatorade",
 description: "Choose your flavor",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "red_bull",
 name: "Red Bull",
 description: "8.4oz",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "monster_energy",
 name: "Monster Energy",
 description: "16oz",
 price: 4,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "minute_maid_lemonade",
 name: "Minute Maid Lemonade",
 description: "20oz",
 price: 3,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "buffalo_wings",
 name: "Buffalo Wings",
 description: "8 Pcs. Add $5 for French Fries",
 price: 10,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "fried_chicken_wings",
 name: "Fried Chicken Wings",
 description: "8 Pcs. Add $5 for French Fries",
 price: 10,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "fried_mozzarella_sticks",
 name: "Fried Mozzarella Sticks",
 description: "8 Pcs. Add $5 for French Fries",
 price: 9,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "garlic_bread",
 name: "Garlic Bread",
 description: "Add $0.50 for Cheese",
 price: 3.5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "french_fries",
 name: "French Fries",
 description: "",
 price: 6,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "onion_rings",
 name: "Onion Rings",
 description: "",
 price: 6,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "flan",
 name: "Flan",
 description: "Custard flan ",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "gelatina",
 name: "Gelatina",
 description: "Mexican Jelly",
 price: 3.5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "banana_con_crema",
 name: "Banana Con Crema",
 description: "Small $6.00 Large $10.00",
 price: 6,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "fresas_con_crema",
 name: "Fresas Con Crema",
 description: "Small $8.00 Large $15.00",
 price: 8,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "cheesecake",
 name: "Cheesecake",
 description: "",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 },
 {
 id: "pastel_de_tres_leches",
 name: "Pastel De Tres Leches",
 description: "Three Milk Cake",
 price: 5,
 category: "Platillos Tipicos",
 image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
 isAvailable: true
 }
 ],
 faqs: [
 {
 question: "Do you deliver to all of Bridgeport?",
 answer: "Yes! We deliver within a 5-mile radius of our downtown location, covering most of Bridgeport and parts of Fairfield."
 },
 {
 question: "Can I customize my order?",
 answer: "Absolutely. You can add notes to any item in your cart during checkout. We'll do our best to accommodate allergies and preferences."
 },
 {
 question: "What are your peak hours?",
 answer: "We are usually busiest on Friday and Saturday nights between 6:00 PM and 8:00 PM. We recommend ordering early for faster delivery!"
 }
 ]
};
