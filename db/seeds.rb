# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Review.destroy_all
Spot.destroy_all
Restaurant.destroy_all
Hotel.destroy_all
City.destroy_all
User.destroy_all


# demo user 
demo_user = User.create!({
    username: "Demo88",
    email: "demo88@gmail.com",
    password: "123456"
})

# user1 
adam = User.create!({
    username: "Adam",
    email: "adam@gmail.com",
    password: "123456"
})

# user2
alec = User.create!({
    username: "Alec",
    email: "alec@gmail.com",
    password: "123456"
})

# user3
alex = User.create!({
    username: "Alex",
    email: "alex@gmail.com",
    password: "123456"
})

# user4
anthonie = User.create!({
    username: "Anthonie",
    email: "anthonie@gmail.com",
    password: "123456"
})

# user5
charlie = User.create!({
    username: "Charlie",
    email: "charlie@gmail.com",
    password: "123456"
})

# user6
lucy = User.create!({
    username: "Lucy",
    email: "Lucy@gmail.com",
    password: "123456"
})

# user7
cindy = User.create!({
    username: "Cindy",
    email: "cindy@gmail.com",
    password: "123456"
})

# user8
danny = User.create!({
    username: "Danny",
    email: "danny@gmail.com",
    password: "123456"
})

# user9
h = User.create!({
    username: "H",
    email: "h@gmail.com",
    password: "123456"
})

# user10
jacob = User.create!({
    username: "Jacob",
    email: "jacob@gmail.com",
    password: "123456"
})

# user11
peter = User.create!({
    username: "Peter",
    email: "peter@gmail.com",
    password: "123456"
})

# user12
quang = User.create!({
    username: "Quang",
    email: "quang@gmail.com",
    password: "123456"
})

# user13
wendy = User.create!({
    username: "Wendy",
    email: "wendy@gmail.com",
    password: "123456"
})

# user14
evie = User.create!({
    username: "Evie",
    email: "evie@gmail.com",
    password: "123456"
})

# user15
brian = User.create!({
    username: "Brian",
    email: "brian@gmail.com",
    password: "123456"
})

# city 1
san_francisco = City.create!({
    name: 'San Francisco',
    title: 'A galaxy of vibrant neighborhoods connected by cable cars',
    description: "San Francisco has a personality as big and bold as the Golden Gate Bridge, but that personality changes neighborhood to neighborhood. Consider the tea rooms and mah jong parlors of Chinatown, the lingering hippie chic of Haight-Ashbury, and the boisterous family fun of Ghirardelli Square. The city is also home to one of the country's most dynamic food scenes, from beloved Mission District burrito joints to Michelin-starred dining rooms. When your legs get tired from exploring, hitch a ride on a cable car and take in those hilltop views.",
    do_description: "Places to see, ways to wander, and signature experiences that define San Francisco.",
    stay_description: "A mix of the charming, iconic, and modern.",
    eat_description: "Quintessential San Francisco restaurants, bars, and beyond.",
    latitude: "37.773972",
    longtitude: "-122.431297"
})

# city 2
san_diego = City.create!({
    name: 'San Diego',
    title: 'The ultimate in laid-back California style',
    description: "Of all the major Cali cities, San Diego best embodies laid-back California. Its surf culture, beckoning beaches, and postcard-perfect weather are enchanting. But don't be fooled: San Diego is a major metropolis in its own right. Its serious food scene prides itself on a blend of Michelin nods and cheap eats—no trip is complete without a fresh fish taco in La Jolla. And it’s pure paradise for families, outdoor enthusiasts, and party people who love to bar-hop the thumping Gaslamp Quarter.",
    do_description: "Places to see, ways to wander, and signature experiences that define San Diego.",
    stay_description: "A mix of the charming, iconic, and modern.",
    eat_description: "Quintessential San Diego bistros, bars, and beyond.",
    latitude: "32.7809045669252",
    longtitude: "-117.1638533848686"
})

# city 3
guangzhou = City.create!({
    name: 'Guangzhou',
    title: "About Guangzhou",
    description: "China's third-largest city is the capital of Guangdong Province and a thriving commercial center. Its location on the Pearl River and proximity to Hong Kong has made Guangzhou a strategic port for centuries. Glimpse old temples and gleaming steel towers on an architectural tour. Visit one of four Chimelong theme parks for thrills and chills. Once called Canton, Guangzhou is considered the home of traditional (read Cantonese) “Chinese food.” Foodies will find more restaurants per capita here than anywhere else in China.",
    do_description: "Places to see, ways to wander, and signature experiences.",
    stay_description: "A mix of the charming, modern, and tried and true.",
    eat_description: "Can't-miss spots to dine, drink, and feast.",
    latitude: "23.106404887516206",
    longtitude: "113.33903940706196"
})

# city 4
seattle = City.create!({
    name: 'Seattle',
    title: "About Seattle",
    description: "In Seattle you simply can't skip the Central Public Library - a modern architectural marvel of glass grids, unusual shapes, and a “book spiral” that climbs four stories. Stroll over to Pike Place Market to visit the original Starbucks and play catch with a fishmonger. In the heart of the city lies Chihuly Garden and Glass, which will dazzle you with its colorful and delicate works. Glide to the top of the Space Needle for panoramic views of the surrounding mountain ranges and Puget Sound.",
    do_description: "Places to see, ways to wander, and signature experiences.",
    stay_description: "A mix of the charming, modern, and tried and true.",
    eat_description: "Can't-miss spots to dine, drink, and feast.",
    latitude: "47.658749438294386",
    longtitude: "-122.32421807670838"
})


# city 5
new_york_city = City.create!({
    name: 'New York City',
    title: "Come for the big dreams and dazzling lights, stay for the local haunts and the world's best pizza",
    description: "The tallest buildings, biggest museums, and best pizza—NYC is a city of superlatives, and it lives up to every one of them. From the dazzling spectacle of Broadway to MoMA's world-class galleries, the boutiques of SoHo, and the array of restaurants offering cuisines from every corner of the world, there’s a different New York to discover every time you visit. Beyond those iconic landmarks, though, New York’s secret side awaits. You’re likely to stumble upon indie vintage shops and locals-only brunch spots even on the shortest of strolls. And when the crowds and noise are too much to take, just look up—that skyline will remind you why you came in the first place.",
    do_description: "Places to see, ways to wander, and signature experiences that define New York City.",
    stay_description: "A mix of the charming, iconic, and modern.",
    eat_description: "Quintessential New York City restaurants, bars, and beyond.",
    latitude: "40.70131408646531",
    longtitude: "-73.93439048418783"
})


# attraction 1
ferry_building = Spot.create!({
    city_id: san_francisco.id,
    name: 'Ferry Building Marketplace',
    spot_type: "Points of Interest & Landmarks",
    description: "A city landmark transformed into a gourmet food emporium and farmers market.",
    duration: "1-2 hours",
    longtitude: "-122.39278435986158",
    latitude: "37.79501921083725"
})

# attraction 2
chinatown = Spot.create!({
    city_id: san_francisco.id,
    name: 'Chinatown',
    spot_type: "Neighborhoods",
    description: "This electric neighborhood of 100,000 people is not to be missed, and it's not hard to find: listen for the clack of mahjong tiles and nose out the salty spicy squid.",
    duration: "1-2 hours",
    longtitude: "-122.4077477136368",
    latitude: "37.79564131465383"
})

# attraction 3
alcatraz_island = Spot.create!({
    city_id: san_francisco.id,
    name: 'Alcatraz Island',
    spot_type: "Historic Sites",
    description: "Park rangers conduct tours by recounting the prison's thrilling history along with intriguing anecdotes about Al Capone and other legendary figures that made a 'home' here.",
    duration: "2-3 hours",
    longtitude: "-122.42290185750613",
    latitude: "37.8269859540991"
})

# attraction 4
uss_museum = Spot.create!({
    city_id: san_diego.id,
    name: 'USS Midway Museum',
    spot_type: "Speciality Museum",
    description: "Located in downtown San Diego, the USS Midway (Museum) was America's longest-serving aircraft carrier of the 20th century. Today, the interactive museum is an unforgettable adventure for the entire family as guests walk in the footsteps of the 225,000 young men who served on Midway. Visitors explore a floating city at sea, the amazing flight deck and its 29 restored aircraft, flight simulators, and are inspired in the Battle of Midway Theater, included with admission. Admission also includes a self-guided audio tour narrated by Midway sailors in English, Mandarin, Spanish, Japanese, French and German. Visiting Midway is a once-in-a-lifetime experience in San Diego, known around the world as 'Navy Town, USA.'",
    duration: "More than 3 hours",
    longtitude: "-117.17511693458052",
    latitude: "32.7139406379275"
})

# attraction 5
gliderport = Spot.create!({
    city_id: san_diego.id,
    name: 'Torrey Pines Gliderport',
    spot_type: "Educational sites",
    description: "With nearly 100 years of flying history, the Torrey Pines Gliderport is the most historic aviation site in North America, and Southern California’s premiere location for paragliding, hang gliding, remote control models and sailplanes. The Gliderport provides a world class flying site, flight lessons, certifications, tandem flights, equipment sales, and repair services.",
    duration: "2-3 hours",
    longtitude: "-117.25100788272174",
    latitude: "32.889623732904376"
})

# attraction 6
balboa_park = Spot.create!({
    city_id: san_diego.id,
    name: 'Balboa Park',
    spot_type: "Parks",
    description: "One of the most popular urban parks in the United States, this bucolic paradise is packed with an array of attractions, including the world-famous San Diego Zoo.",
    duration: "More than 3 hours",
    longtitude: "-117.14235663025597",
    latitude: "32.73495166747875"
})

# attraction 7
pier = Spot.create!({
    city_id: san_francisco.id,
    name: 'Pier 39',
    spot_type: "Piers & Boardwalks",
    description: "From amazing views and a sea of sea lions to chowder bread bowls and California wines, your visit to San Francisco starts at PIER 39. Kick off your visit by exploring two levels of dining, entertainment, shopping and attractions, all surrounded by unbeatable views of the city and the bay. Take it from the world famous sea lions: a visit to San Francisco starts at The PIER.",
    duration: "2-3 hours",
    longtitude: "-122.409901554835",
    latitude: "37.8089718275332"
})

# attraction 8
gaslamp_quarter = Spot.create!({
    city_id: san_diego.id,
    name: 'Gaslamp Quarter',
    spot_type: "Speciality & Gift Shops",
    description: "A 16-block national historic district that offers visitors a variety of restaurants and shops, as well as an eyeful of Victorian architecture.",
    duration: "More than 3 hours",
    longtitude: "-117.16235236217094",
    latitude: "32.7133080176587"
})

# attraction 9
canton_tower = Spot.create!({
    city_id: guangzhou.id,
    name: 'Canton Tower',
    spot_type: "Points of Interest & Landmarks",
    description: "The Canton Tower stands at the intersection of Guangzhou's new urban central and the Pearl River scenery zone. Right across the river, is the Asian Games Park and Zhu Jiang New Town, together with the Guangzhou Opera House, Library, No.2 Children's Palace and Guangdong Provincial Museum it forms the new metropolitan sky line. The Canton Tower is the tallest TV tower in the world with a total height of 600m. The Tower was built using the latest engineering technologies, but inherits 2000 years of Canton Culture. It displays Guangzhou’s vision and determination to the world. The Tower offers an observation deck with a spectacular view, several top-notch restaurants and catering services, 5-star exhibition, convention and entertainment facilities. All these enable you not just to enjoy the magnificent scenery of Guangzhou, but also to experience the excitement of adventure at great heights.",
    duration: "2-3 hours",
    longtitude: "113.32457889093891",
    latitude: "23.106415003487413"
})

# attraction 10
shamian_island = Spot.create!({
    city_id: guangzhou.id,
    name: 'Shamian Island',
    spot_type: "Islands & Historic Sites",
    description: "This lovely, tree-lined neighborhood bordering the Pearl River was once home to foreign merchants, and today is a laid-back area ideal for strolling or stopping for a meal or cup of tea.",
    duration: "2-3 hours",
    longtitude: "113.24485639002339",
    latitude: "23.10667914122954"
})

# attraction 11
lychee_bay = Spot.create!({
    city_id: guangzhou.id,
    name: 'Lychee Bay Scenic Area',
    spot_type: "Parks",
    description: "Lychee Bay, a set of creeks and lakes that flow southwest to Pearl River, is a tourist attraction in Guangzhou (Canton), Guangdong. Liwan District, where Lychee Bay is located, was named after it. There are many historical relics and historical architectures in Lychee Bay, such as Wenta and Xiguan House. Various cultural activities are held on Lychee Bay, such as the Cantonese opera competition.",
    duration: "2-3 hours",
    longtitude: "113.23736999729631",
    latitude: "23.11479024985969"
})

# attraction 12
chimelong = Spot.create!({
    city_id: guangzhou.id,
    name: 'Chimelong Safari Park',
    spot_type: "Zoos",
    description: "Guangzhou Chimelong Safari Park wild animal world belongs to the first batch of the national, Guangzhou's only national 5A scenic spot tourism resort, located in Panyu, Guangzhou. The park with large populations of wild animal breeding and self driving ornamental features, known as the most China international standard of national wild animal zoo, is the world's population, up to the wild animal theme park. 6 highlights waiting for you to explore: long long wild animal world 4 highlights, the paradise of rare animals, self driving tours of animals, animals, animals to grab the eye, animal science base, leading the industry trend.",
    duration: "More than 3 hours",
    longtitude: "113.31575140027017",
    latitude: "22.999790745990556"
})

# attraction 13
chihuly_garden = Spot.create!({
    city_id: seattle.id,
    name: 'Chihuly Garden and Glass',
    spot_type: "Art Galleries",
    description: "Located in the heart of Seattle, Chihuly Garden and Glass provides a look at the inspiration and influences that inform the career of artist Dale Chihuly. Through the exhibition's eight interior galleries, lush outdoor garden and centerpiece Glasshouse visitors will experience a comprehensive look at Chihuly's most significant series of work. With both day and night experiences, and full-service dining in the adjoining Collections Café, this long-term exhibition offers a unique experience rain or shine.",
    duration: "2 hours",
    longtitude: "-122.35044760213177",
    latitude: "47.62054541591427"
})

# attraction 14
pike_place = Spot.create!({
    city_id: seattle.id,
    name: 'Pike Place Market',
    spot_type: "Farmers Markets",
    description: "One of the few authentic farmer's markets in the United States, this hub of delicious scents, delectable eats and delightful personalities attracts nine million visitors a year.",
    duration: "More than 3 hours",
    longtitude: "-122.341549227991",
    latitude: "47.609734383020665"
})

# attraction 15
sky_view = Spot.create!({
    city_id: seattle.id,
    name: 'Sky View Observatory',
    spot_type: "Observation Decks & Towers",
    description: "Private View Packages Now Available! Experience Sky View Observatory exclusively for 1-Hour for yourself and up to 4 people - 5 People total! * Temporarily Closed for General Admission.* Sky View Observatory in downtown Seattle is the ideal first stop on your visit to the Emerald City. Here you can map out your entire Pacific Northwest experience! Sky View is located on the 73rd floor of Columbia Center. At 902 feet, it offers the tallest public viewing area in the Pacific Northwest. The 360-degree panoramic view includes Mt. Rainier, Bellevue, the Cascade Mountains, Mt. Baker, Elliott Bay, the Olympic Mountains, the Space Needle and the city of Seattle.",
    duration: "2-3 hours",
    longtitude: "-122.3304192870853",
    latitude: "47.60456811107923"
})

# attraction 16
metropolitan_museum = Spot.create!({
    city_id: new_york_city.id,
    name: 'The Metropolitan Museum of Art',
    spot_type: "Art Museums",
    description: "At New York City's most visited museum and attraction, you will experience over 5,000 years of art from around the world. The Met is for anyone as a source of inspiration, insight and understanding. You can learn, escape, play, dream, discover, connect.",
    duration: "2-3 hours",
    longtitude: "-73.96321181582695",
    latitude: "40.779428455136774"
})

# attraction 17
central_park = Spot.create!({
    city_id: new_york_city.id,
    name: 'Central Park',
    spot_type: "Scenic Walking Areas",
    description: "For more than 150 years, visitors have flocked to Central Park's 843 green acres in the heart of Manhattan. Since 1980, the Park has been managed by the Central Park Conservancy, in partnership with the public. Central Park is open 6 am to 1 am daily. Visit the official website of Central Park to learn more about Park happenings and activities and to learn how you to help Central Park!",
    duration: "More than 3 hours",
    longtitude: "-73.96631070068699",
    latitude: "40.78100052347072"
})

# attraction 18
brooklyn_bridge = Spot.create!({
    city_id: new_york_city.id,
    name: 'Brooklyn Bridge',
    spot_type: "Bridges",
    description: "Opened in 1883, the Brooklyn Bridge provides passage between Brooklyn and Manhattan for motorists, trains, bicycles and pedestrians. One of the primary symbols of New York City, it is a marvel of design and provides spectacular views of the city's skyline.",
    duration: "< 1 hour",
    longtitude: "-73.99691769637778",
    latitude: "40.70601192488628"
})


# restaurant 1
eight_am = Restaurant.create!({
    city_id: san_francisco.id,
    name: 'Eight Am',
    description: "Local cuisine, American, Cafe, Vegetarian Friendly, Vegan Options",
    price_range: "$$ - $$$",
    cuisines: "American, Cafe",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Breakfast, Lunch, Brunch",
    phonenum: "+1 415-292-4888",
    res_address: "1323 Columbus Ave, San Francisco, CA 94133-1330",
    longtitude: "-122.41930249024996",
    latitude: "37.80614400551723"
})

# restaurant 2
kokkari_estiatorio = Restaurant.create!({
    city_id: san_francisco.id,
    name: 'Kokkari Estiatorio',
    description: "At Kokkari Estiatorio, we are driven by the concept of philoxenia, the art of making a stranger a friend. This philosophy drives our efforts to create a cuisine fit for the gods with the hospitality of a proper Greek home — a restaurant that you would never want to leave.",
    price_range: "$25 - $80",
    cuisines: "Mediterranean, Greek",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Lunch, Dinner",
    phonenum: "+1 415-981-0983",
    res_address: "200 Jackson St, San Francisco, CA 94111-1806",
    longtitude: "-122.40002412278365",
    latitude: "37.797066190887264"
})

# restaurant 3
coastal_kitchen = Restaurant.create!({
    city_id: san_diego.id,
    name: 'Oceana Coastal Kitchen',
    description: "Oceana Coastal Kitchen features chef-driven, California cuisine along with modern, ocean-inspired design. The restaurant offers a memorable bayfront dining experience at an iconic Pacific Beach hideaway. The airy waterfront restaurant includes several distinct dining areas such as a quartz-topped cold bar embedded with mother of pearl and sea glass. The focal point in Oceana Coastal Kitchen's main dining room is an impressive 800-gallon aquarium, while a sliding window fully opens to showcase unobstructed views of Mission Bay. Oceana Coastal Kitchen offers an al fresco experience for guests, complete with sleek booths and tables with sweeping panoramic waterfront views. Led by Executive Chef Steven Riemer, favorite menu items include the Oceana House Roll, the Harris Ranch Ribeye, and the Striped Seabass.",
    price_range: "$12 - $50",
    cuisines: "American, Seafood, Sushi, Grill",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Lunch, Brunch, Breakfast, Dinner",
    phonenum: "+1 858-539-8635",
    res_address: "3999 Mission Blvd Waterfront at the Catamaran Resort Hotel and Spa, San Diego, CA 92109-6959",
    longtitude: "-117.25246117130227",
    latitude: "32.790202988070185"
})

# restaurant 4
parma_cucina_italiana = Restaurant.create!({
    city_id: san_diego.id,
    name: 'Parma Cucina Italiana',
    description: "Parma Cucina Italiana was voted repeatedly 'best Italian restaurant in San Diego'. Nice cozy little location in the heart of Hillcrest San Diego; only few minutes away from Little Italy, San Diego. Parma offers down to earth ambiance and fantastic Italian food and is sure to be a staple in San Diego for years to come. Parma is as authentic as it gets!",
    price_range: "$11 - $25",
    cuisines: "Italian, Northern-Italian",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Dinner",
    phonenum: "+1 619-543-0049",
    res_address: "3850 5th Ave, San Diego, CA 92103-3141",
    longtitude: "-117.16055514246736",
    latitude: "32.74769389781319"
})

# restaurant 5
good_mong_kok = Restaurant.create!({
    city_id: san_francisco.id,
    name: 'Good Mong Kok Bakery',
    description: "Dim sum and bakery goods",
    price_range: "$",
    cuisines: "Chinese, Fast Food, Asian",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Breakfast, Lunch",
    phonenum: "+1 415-397-2688",
    res_address: "1039 Stockton St, San Francisco, CA 94108-1109",
    longtitude: "-122.4083560024099",
    latitude: "37.79546345772438"
})

# restaurant 6
greens = Restaurant.create!({
    city_id: san_francisco.id,
    name: 'Greens',
    description: "While enjoying one of San Francisco's most dramatic views of the Golden Gate Bridge and Marin Headlands, diners savor Chef Annie Somerville’s imaginative vegetarian cuisine that features local seasonal organic produce and the finest ingredients. Greens emphasizes wonderful dishes created with a balance of colors, flavor and a contrast of textures inspired by the cuisines of the Mediterranean, Asia, Mexico and the American Southwest.",
    price_range: "$$ - $$$",
    cuisines: "American",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Lunch, Dinner, Brunch, Late Night",
    phonenum: "+1 415-771-6222",
    res_address: "2 Marina Blvd Building A, San Francisco, CA 94123-1284",
    longtitude: "-122.4321059017464",
    latitude: "37.8067470667388"
})

# restaurant 7
ar = Restaurant.create!({
    city_id: san_diego.id,
    name: 'A.R. Valentien at The Lodge at Torrey Pines',
    description: "The Lodge's signature restaurant, A.R. Valentien, highlights regional San Diego cuisine served in an elegant, timbered indoor-outdoor dining room overlooking the 18th hole of Torrey Pines Golf Course. Executive Chef Jeff Jackson sources only the best local provisions, and the menu changes frequently based on seasonal fare available. The restaurant takes its name from a talented early 20th-century California artist whose works are exhibited throughout the restaurant.",
    price_range: "$45 - $85",
    cuisines: "American",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Dinner",
    phonenum: "+1 858-777-6635",
    res_address: "11480 N Torrey Pines Rd, La Jolla, San Diego, CA 92037-1045",
    longtitude: "-117.24459996203976",
    latitude: "32.90465492783339"
})

# restaurant 8
nine_ten = Restaurant.create!({
    city_id: san_diego.id,
    name: 'NINE-TEN Restaurant & Bar',
    description: "Led by award-winning Chef Jason Knibb, and Pastry Chef Jose Alonzo III, NINE-TEN offers the perfect combination of sophistication and casual elegance. Our Evolving California Cuisine - emphasizing a farm-to-table philosophy - features the best of the harvest from local artisan farmers where produce is selected daily for our seasonal menus. The restaurant interior is casually elegant with sidewalk tables on Prospect Street where people-watching becomes a pastime. Al fresco dining is offered on an outdoor terrace with peek ocean views. Inside, the warm ambiance is enhanced with rich accents throughout the narrow, high-ceiling dining room. The service is enthusiastic and spirited, while gracious and unassuming. The staff is exceptionally well trained and educated on the food and preparation methods, as well as wine selections and pairings.",
    price_range: "$40 - $160",
    cuisines: "American",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Dinner, Drinks",
    phonenum: "+1 858-964-5400",
    res_address: "910 Prospect St., La Jolla, San Diego, CA 92037",
    longtitude: "-117.27537310252609",
    latitude: "32.84722886201589"
})

# restaurant 9
dian_dou_de = Restaurant.create!({
    city_id: guangzhou.id,
    name: 'Dian Dou De (Ju FuLou)',
    description: "Great place to eat local Guangzhou food.",
    price_range: "$15 - $20",
    cuisines: "Chinese, Asian",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Breakfast, Lunch, Dinner, Brunch",
    phonenum: "+86 20 8333 2898",
    res_address: "No.470 Huifu East Road, Yuexiu District, Guangzhou China",
    longtitude: "113.26652926846128",
    latitude: "23.120890117830804"
})

# restaurant 10
guangzhou_restaurant = Restaurant.create!({
    city_id: guangzhou.id,
    name: 'Guangzhou Restaurant',
    description: "Guangzhou Restaurant, a famous restaurant in Liwan District, Guangzhou City, Guangdong Province, is located at the intersection of Wenchang South Road and Shangxiajiu Pedestrian Street.",
    price_range: "$15 - $20",
    cuisines: "Chinese, Asian",
    special_diets: "Vegetarian Friendly",
    meals: "Breakfast, Lunch, Dinner, Brunch",
    phonenum: "+86 20 8138 0388",
    res_address: "No.2 Wenchang South Road, Guangzhou China",
    longtitude: "113.24587726846119",
    latitude: "23.1137932497135"
})

# restaurant 11
mota_restaurant = Restaurant.create!({
    city_id: guangzhou.id,
    name: 'Mota Restaurant',
    description: "Choose several dishes from our top 10, and you will not be disappointed!",
    price_range: "$20 - $30",
    cuisines: "Japanese",
    special_diets: "Vegetarian Friendly",
    meals: "Lunch, Dinner",
    phonenum: "+86 20 8334 2486",
    res_address: "No.451 Huifu E Road, Guangzhou China",
    longtitude: "113.26606170753396",
    latitude: "23.12087420248179"
})

# restaurant 12
shun_ji = Restaurant.create!({
    city_id: guangzhou.id,
    name: 'Shun Ji BingShi',
    description: "Cheap and cheerful but very good food.",
    price_range: "$5 - $10",
    cuisines: "Chinese desserts",
    special_diets: "Vegetarian Friendly",
    meals: "Breakfast, Lunch, Dinner",
    phonenum: "+86 20 8181 4287",
    res_address: "BaoHua Road 85, Guangzhou China",
    longtitude: "113.24172072613132",
    latitude: "23.11536411742733"
})

# restaurant 13
vons = Restaurant.create!({
    city_id: seattle.id,
    name: 'Vons 1000 Spirits',
    description: "Great food, fast and efficient staff and nice atmosphere.",
    price_range: "$15 - $25",
    cuisines: "American",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Lunch, Dinner, Brunch, Late Night, Drinks",
    phonenum: "+1 206-621-8667",
    res_address: "1225 1st Ave, Seattle, WA 98101-2998",
    longtitude: "-122.33846320213212",
    latitude: "47.606580979187804"
})

# restaurant 14
salty = Restaurant.create!({
    city_id: seattle.id,
    name: 'Salty on Alki Beach',
    description: "Located on Alki Beach with the most spectacular view of the Seattle skyline, Salty's is one of the Top 100 Most Scenic Restaurants and Top 100 Best Brunches in America by OpenTable. Salty's is renowned for our fresh seasonal seafood, Pacific Northwest Coastal cuisine, playful atmosphere, and uncommonly genuine service. Our Northwest wine menu has won the Wine Spectator's Award of Excellence since 2003. We are open for year round outdoor dining in our cozy and elegant glass-like tents and on our decks. Beautifully decorated to lift your spirits, we welcome you to celebrate or just let the stress of the day slip away while enjoying the astonishing waterfront and fresh air of the Elliot Bay. We are truly a great escape and delicious fun! Established in 1980, we are a James Beard Smart Catch Restaurant, proudly independent, family owned and operated, and woman owned.",
    price_range: "$31 - $80",
    cuisines: "American, Seafood",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Lunch, Dinner, Late Night",
    phonenum: "+1 206-937-1600",
    res_address: "1936 Harbor Ave SW, Seattle, WA 98126-2031",
    longtitude: "-122.37636944446277",
    latitude: "47.586579342851785"
})

# restaurant 15
napkin_burger = Restaurant.create!({
    city_id: new_york_city.id,
    name: '5 Napkin Burger',
    description: "5 Napkin Burger is a Premium, Full-Service Burger Restaurant with a Full Craft Beer & Cocktail Bar.",
    price_range: "$$ - $$$",
    cuisines: "American, Contemporary",
    special_diets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
    meals: "Lunch, Dinner, Late Night, Drink",
    phonenum: "+1 212-757-2277",
    res_address: "630 9th Ave, New York City, NY 10036",
    longtitude: "-73.99123380233245",
    latitude: "40.75998697933053"
})

# restaurant 16
dinosaur = Restaurant.create!({
    city_id: new_york_city.id,
    name: 'Dinosaur Bar-B-Que',
    description: "Located in West Harlem under the Riverside Drive Viaduct, Dinosaur Bar-B-Que is a rustic BBQ restaurant, blues venue, and cocktail bar serving the best smoked meats & award winning sauces in the area.",
    price_range: "$20 - $25",
    cuisines: "American, Bar, Barbecue",
    special_diets: "Gluten Free Options",
    meals: "Lunch, Dinner, Late Night",
    phonenum: "+1 212-694-1777",
    res_address: "700 W 125th St, New York City, NY 10027-2314",
    longtitude: "-73.96090667349581",
    latitude: "40.81803187932442"
})



# hotel 1
riu_plaza = Hotel.create!({
    city_id: san_francisco.id,
    name: 'Hotel Riu Plaza Fishermans Wharf',
    description: "The Hotel Riu Plaza Fisherman's Wharf is located close to Pier 39, one of the most iconic parts of San Francisco, and it offers the best services to enjoy an unforgettable stay. Airport (SFO) is approx. 24 km away. This hotel is ideal for both leisure and business travel. Enjoy our free wi-fi, outdoor pool area, gym and conference rooms. The 531 modern designed rooms are perfectly equipped to offer you maximum comfort featuring satellite TV, a mini-fridge, coffee machine, air conditioning, and many more amenities. For gastronomy lovers, we offer American buffet breakfasts with live cooking stations and á la carte lunches and dinners. In addition, you also have the option of the snack bar, open all day, where you can try delicious snacks and appetizers.",
    address: "2500 Mason Street, San Francisco, CA 94133-1450",
    phonenum: "US$159",
    longtitude: "-122.41292420240958",
    latitude: "37.80729607975771"
})

# hotel 2
argonaut = Hotel.create!({
    city_id: san_francisco.id,
    name: 'Argonaut Hotel',
    description: "Located in the heart of San Francisco's Fisherman's Wharf, Argonaut Hotel exudes the true essence of a boutique hotel. With a name like the Argonaut, it's impossible not to speak of this hotel in grand, almost legendary terms. Inspired by the Greek legend and Gold Rush-era adventurers, it's one of those rare places in San Francisco that truly merits a term like iconic. Located in the historic Haslett Warehouse, the Argonaut's home is a grand building built in 1907 of exposed brick, Douglas Fir beams and so much seaside character; you feel as though you can almost reach out and touch the colorful Barbary Coast past here.",
    address: "495 Jefferson St, San Francisco, CA 94109-1314",
    phonenum: "US$239",
    longtitude: "-122.42034650240954",
    latitude: "37.80760857975779"
})

# hotel 3
abri = Hotel.create!({
    city_id: san_francisco.id,
    name: 'Hotel Abri',
    description: "Stay Vibrant. Urban style at the center of it all in San Francisco's Union Square. Ideal for both the leisure and business traveler, the newly transformed Hotel Abri is a modern day urban oasis featuring a sleek décor complemented by contemporary art and upscale amenities. The hotel's energetic vibe is delightfully balanced with a comfortable ease, offering guests a unique sensorial experience and the highest levels of hospitality and service.",
    address: "127 Ellis Street, San Francisco, CA 94102-2109",
    phonenum: "US$167",
    longtitude: "-122.40847327357515",
    latitude: "37.78533645888827"
})

# hotel 4
fairmont = Hotel.create!({
    city_id: san_francisco.id,
    name: 'Fairmont San Francisco',
    description: "World-renowned, Fairmont San Francisco hotel presents an awe-inspiring picture of historic San Francisco. The grandeur of the hotel coupled with its reputation for impeccable service promises a truly memorable experience.",
    address: "950 Mason St, San Francisco, CA 94108-6000",
    phonenum: "US$325",
    longtitude: "-122.41007084473996",
    latitude: "37.79239675807691"
})

# hotel 5
bahia = Hotel.create!({
    city_id: san_diego.id,
    name: 'Bahia Resort Hotel',
    description: "The Bahia Resort Hotel is a welcoming waterfront property located on a 14-acre picturesque peninsula in San Diego's scenic Mission Bay. Featuring spectacular views of the Pacific Ocean and lush tropical gardens as well as friendly service and comfortable accommodations, Bahia Resort Hotel is the ideal destination for an authentic Southern California beach getaway.",
    address: "998 West Mission Bay Drive, San Diego, CA 92109",
    phonenum: "US$299",
    longtitude: "-117.24656450252766",
    latitude: "32.772658365279575"
})

# hotel 6
kings = Hotel.create!({
    city_id: san_diego.id,
    name: 'Kings Inn San Diego',
    description: "Kings Inn San Diego has been serving excellence in San Diego for over fifty years. Located in Hotel Circle of Interstate 8, we are three miles from SeaWorld and The San Diego Zoo and within fifteen minutes from nearly everything you will want to see and do while visiting America's Finest City.",
    address: "1333 Hotel Circle South, San Diego, CA 92108-3408",
    phonenum: "US$158",
    longtitude: "-117.17509380252804",
    latitude: "32.75857838098226"
})

# hotel 7
lafayette = Hotel.create!({
    city_id: san_diego.id,
    name: 'The Lafayette Hotel',
    description: "Built in 1946, the Lafayette has been the site of historical glamour, and offers a unique change from a typical hotel experience. Among its famous guests were Bob Hope, Lana Turner, Ava Gardner and Betty Grable. Inside, the Mississippi Ballroom took center stage where Hollywood's stars came to dance the night away. Conveniently located to all shopping, entertainment and business areas, the historic Lafayette Hotel, Swim Club & Bungalows is, indeed, the best lodging choice in San Diego.",
    address: "2223 El Cajon Boulevard, San Diego, CA 92104-1103",
    phonenum: "US$219",
    longtitude: "-117.14072200252808",
    latitude: "32.7548489809834"
})

# hotel 8
sofitel = Hotel.create!({
    city_id: guangzhou.id,
    name: 'Sofitel Guangzhou Sunrich',
    description: "Strategically located in Tianhe, the most dynamic financial and commercial district of Guangzhou, the hotel is less than a kilometre away from city landmark CITIC Square and a five minutes drive from Guangzhou East Railway Station, the transportation hub connecting Guangzhou, Dongguan, Shenzhen and Hong Kong.",
    address: "No.988 Guangzhou Avenue Middle, Tianhe District, Guangzhou 510620 China",
    phonenum: "US$99",
    longtitude: "113.31582732613158",
    latitude: "23.138375521736673"
})

# hotel 9
four_seasons = Hotel.create!({
    city_id: guangzhou.id,
    name: 'Four Seasons Hotel Guangzhou',
    description: "An icon of high style, Four Seasons Hotel Guangzhou occupies the top third of the 103-storey International Finance Center (IFC) Guangzhou. The Hotel soars above the Pearl River in China's third largest metropolitan area and economic powerhouse, and sits between the Pearl River and the business district of Tianhe in a vibrant new area known as Zhujiang New Town, a destination rich in chic shops and restaurants.",
    address: "No. 5 Zhujiang West Road, Pearl River New City, Tianhe District, Guangzhou 510623 China",
    phonenum: "US$236",
    longtitude: "113.32342270299937",
    latitude: "23.11779546352612"
})

# hotel 10
westin = Hotel.create!({
    city_id: guangzhou.id,
    name: 'The Westin Pazhou',
    description: "The Westin Pazhou, a landmark hotel situates in Area C of the Canton Fair Complex, embracing views of both the Pearl River and city skyline, and enjoying enviable position of being the only hotel with direct access to the Canton Fair Complex. It only takes you 1 minute to Poly World Trade Center Expo, and 5 minutes to the nearest metro station.",
    address: "No.681 Fengpu Middle Road, Haizhu District Area C, Canton Fair Complex, Guangzhou",
    phonenum: "US$111",
    longtitude: "113.36362272613087",
    latitude: "23.095922577775337"
})

# hotel 11
white_swan = Hotel.create!({
    city_id: guangzhou.id,
    name: 'White Swan Hotel',
    description: "Majestically overlooking the scenic Pearl River from its location on historic Shamian Island, the White Swan Hotel is an oasis of tranquility amid the hustle and bustle of the city. First opened in 1983, the White Swan Guangzhou is one of the most recognized five star luxury hotels in China and a longstanding member of the 'Leading Hotels of the World'. Over the years, the hotel has received many heads of states, including Queen Elizabeth II, and is renowned for extending exceptional service to every guest.",
    address: "No.1 Shamian South Street, Guangzhou 510133 China",
    phonenum: "US$117",
    longtitude: "113.24297299729614",
    latitude: "23.105733116724345"
})

# hotel 11
mediterranean = Hotel.create!({
    city_id: seattle.id,
    name: 'Mediterranean Inn',
    description: "We are ideally located for business or pleasure in the vibrant Queen Anne neighborhood of Seattle. The Space Needle, Key Arena and downtown Seattle are just moments away and for our coffee lovers we feature a Starbucks(R) Cafe off the lobby. The hotel is beautifully appointed with the look of the Mediterranean that embraces you with a comfortable and relaxed feeling. Each guest room features a kitchenette and the entire hotel is 100% non-smoking.",
    address: "425 Queen Anne Avenue North, Seattle, WA 98109-4517",
    phonenum: "US$209",
    longtitude: "-122.35700130213155",
    latitude: "47.623101347904786"
})

# hotel 12
paramount = Hotel.create!({
    city_id: seattle.id,
    name: 'The Paramount Hotel',
    description: "Fall in love with the simple luxury of the Paramount Hotel Seattle. You will immediately see why we are consistently ranked in the top 10 of hotels to visit in downtown Seattle after you experience our ideal downtown location, service-oriented team and charming guest rooms.",
    address: "724 Pine St, Seattle, WA 98101-1843",
    phonenum: "US$207",
    longtitude: "-122.33362377329688",
    latitude: "47.61314821386756"
})

# hotel 13
pod_time = Hotel.create!({
    city_id: new_york_city.id,
    name: 'Pod Times Square',
    description: "Pod Times Square is the newest member of the Pod Hotel family. Set in the crossroads of the world, we're also just blocks to tranquil Hudson River Park, the Intrepid, and Circle Line Cruises. Close to all of the action, but just far enough away — and above — the hustle and bustle so you can sleep tight and stay happy!",
    address: "400 W 42nd St, New York City, NY 10036-6809",
    phonenum: "US$123",
    longtitude: "-73.99313877349746",
    latitude: "40.75842857933068"
})

# hotel 14
edison = Hotel.create!({
    city_id: new_york_city.id,
    name: 'Hotel Edison',
    description: "Built in 1931, Hotel Edison is an architectural art deco masterpiece with a rich history dating back from the moment famed American inventor, Thomas Edison turned on the light at the grand opening of the hotel to playing host to countless notables, to movie and television appearances.",
    address: "228 West 47th Street, New York City, NY 10036-1401",
    phonenum: "US$127",
    longtitude: "-73.98622040233244",
    latitude: "40.75964255271943"
})

# review 1
review1 = Review.create!({
    user_id: cindy.id,
    title: 'weekend market at Ferry Building',
    body: "The Empanadas and Red Bay coffee was so good, we went back for a second morning. Great collection of stores in the building, and lots of vendors outside for Saturday market.",
    rating: 4,
    visit_date: DateTime.new(2022, 6, 20),
    reviewable_id: ferry_building.id,
    reviewable_type: ferry_building.class.to_s
})

# review 2
review2 = Review.create!({
    user_id: adam.id,
    title: 'Nice to visit and for a walk outside',
    body: "This is worth a stop if you are in the area. There are various sellers that are still more reflective of San Francisco (vs. National store chains). Then take a walk and look at the Bay Bridge outside or the water",
    rating: 5,
    visit_date: DateTime.new(2022, 6, 10),
    reviewable_id: ferry_building.id,
    reviewable_type: ferry_building.class.to_s
})

# review 3
review3 = Review.create!({
    user_id: brian.id,
    title: 'Try a Baked char siu bao',
    body: "Lively area full of mostly family owned restaurants and businesses. We visited The Golden Gate Fortune Cookie Factory it's small but lively and they give out free samples. If you can ride the cable car to this destination.",
    rating: 4,
    visit_date: DateTime.new(2022, 6, 23),
    reviewable_id: chinatown.id,
    reviewable_type: chinatown.class.to_s
})

# review 4
review4 = Review.create!({
    user_id: lucy.id,
    title: 'Always a cool place to visit',
    body: "San Francisco never disappoints … and Chinatown it's a must in your visit to the city , if you're tired of walking around the city a foot massage can be a great idea, lots of shoppings and cultural things g to do and see at the Chinatown area",
    rating: 5,
    visit_date: DateTime.new(2022, 6, 20),
    reviewable_id: chinatown.id,
    reviewable_type: chinatown.class.to_s
})

# review 5
review5 = Review.create!({
    user_id: evie.id,
    title: 'Canton Tower',
    body: "Canton Tower lights up at night. There's plenty to do around the area, especially the Guangzhou library (which is massive).",
    rating: 4,
    visit_date: DateTime.new(2022, 6, 20),
    reviewable_id: canton_tower.id,
    reviewable_type: canton_tower.class.to_s
})

# review 6
review6 = Review.create!({
    user_id: alec.id,
    title: "AMAZING DON'T MISS",
    body: "This place lives up to the amazing reviews. The food is great and the staff were so hard working, and wonderful. If you can wait for a table outside these are the best. A restaurant worth the hype.",
    rating: 5,
    visit_date: DateTime.new(2022, 4, 10),
    reviewable_id: eight_am.id,
    reviewable_type: eight_am.class.to_s
})

# review 7
review7 = Review.create!({
    user_id: wendy.id,
    title: "Delicious breakfast",
    body: "This isn't a huge place if we still managed to get a table quickly, but it did get busier. They have so much great food and the staff are great too. We had a lovely breakfast here.",
    rating: 4,
    visit_date: DateTime.new(2022, 6, 17),
    reviewable_id: eight_am.id,
    reviewable_type: eight_am.class.to_s
})

# review 8
review8 = Review.create!({
    user_id: charlie.id,
    title: "Even better than in Greece",
    body: "Had dinner there on a Sunday evening Pretty quiet - very nice barman (French ) with good wine recommendations Food was amazing - got certainly the best octopus of my life Please go to that place , you won't be disappointed",
    rating: 5,
    visit_date: DateTime.new(2022, 3, 9),
    reviewable_id: kokkari_estiatorio.id,
    reviewable_type: kokkari_estiatorio.class.to_s
})

# review 9
review9 = Review.create!({
    user_id: anthonie.id,
    title: "Great location, clean and a great breakfast",
    body: "We have stayed in Riu hotels before and this didn't disappoint. Great location, only a block away from the piers and 15 mins walk from the Alcatraz pier. Everything on hand, parking, shops, food and entertainment. Hotel was clean, breakfast is a busy buffet area, but great for a good start to the day",
    rating: 4,
    visit_date: DateTime.new(2022, 3, 12),
    reviewable_id: riu_plaza.id,
    reviewable_type: riu_plaza.class.to_s
})

# review 10
review10 = Review.create!({
    user_id: quang.id,
    title: "Not what you'd expect",
    body: "This is not a RIU worthy hotel. It's a cheap rip off to be honest. And last thing to say: riu bought the property from Sheraton. They didn't even bother to update some things, so if you’d look carefully: Sheraton logos are still everywhere.",
    rating: 2,
    visit_date: DateTime.new(2022, 4, 2),
    reviewable_id: riu_plaza.id,
    reviewable_type: riu_plaza.class.to_s
})

# review 11
review11 = Review.create!({
    user_id: peter.id,
    title: "Lovely and comfortable",
    body: "Excellent hotel! Highly recommend! The staff made us feel right at home. The hotel is charming , impeccably clean and really nicely located. We dined at the Blue Mermaid twice! Delicious meals! Ghirardelli's, trolley and Alcatraz all within walking distance!",
    rating: 5,
    visit_date: DateTime.new(2022, 6, 18),
    reviewable_id: argonaut.id,
    reviewable_type: argonaut.class.to_s
})

# review 12
review12 = Review.create!({
    user_id: jacob.id,
    title: "So good we went twice",
    body: "Tremendous variety, busy busy, great service. The custards are awesome. Custard buns!! Be adventurous! Most engaging waitstaff ever.",
    rating: 4,
    visit_date: DateTime.new(2022, 2, 1),
    reviewable_id: dian_dou_de.id,
    reviewable_type: dian_dou_de.class.to_s
})

# review 13
review13 = Review.create!({
    user_id: h.id,
    title: "Excellent dim sum restaurant",
    body: "I was there to see my friend in the beginning, but I am surprised that this hotel is not as old as I thought. Very nice view and great food provided. I love the atmosphere in the hotel, as well as the fountain in the lobby.",
    rating: 5,
    visit_date: DateTime.new(2022, 4, 29),
    reviewable_id: white_swan.id,
    reviewable_type: white_swan.class.to_s
})

# review 14
review14 = Review.create!({
    user_id: danny.id,
    title: "Beautiful hotel with top service and location.",
    body: "This is classic hotel on the historic Shamian island in Guangzhou's Yuexiu district. The 'island' is actually a tip of land at a 'Y' intersection of the famous Pearl river made an island in the past by digging a man made canal to separate it from the 'mainland'.",
    rating: 4,
    visit_date: DateTime.new(2022, 4, 29),
    reviewable_id: white_swan.id,
    reviewable_type: white_swan.class.to_s
})

# review 15
review15 = Review.create!({
    user_id: alex.id,
    title: "Spectacular sight.",
    body: "Unforgettable, unbelievable, and iconic. You won't soon forget the centerpiece of Guangzhou's spectacular skyline.",
    rating: 4,
    visit_date: DateTime.new(2022, 5, 3),
    reviewable_id: canton_tower.id,
    reviewable_type: canton_tower.class.to_s
})

san_francisco.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/san-francisco.jpg'), filename: 'san-francisco.jpg')
san_diego.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/san-diego.jpg'), filename: 'san-diego.jpg')
guangzhou.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/guangzhou.jpg'), filename: 'guangzhou.jpg')
seattle.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/seattle.jpg'), filename: 'seattle.jpg')
new_york_city.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/new-york.jpg'), filename: 'new-york.jpg')
