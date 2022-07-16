# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Spot.destroy_all
City.destroy_all
Restaurant.destroy_all

# demo user 
demo_user = User.create!({
    username: "Demo88",
    email: "demo88@gmail.com",
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


san_francisco.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/san-francisco.jpeg'), filename: 'san-francisco.jpeg')
san_diego.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/san-diego.jpeg'), filename: 'san-diego.jpeg')
new_york_city.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/new-york.jpeg'), filename: 'new-york.jpeg')
seattle.photo.attach(io: open('https://active-storage-tripaide.s3.us-west-1.amazonaws.com/seattle.jpeg'), filename: 'seattle.jpeg')
