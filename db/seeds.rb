# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Spot.destroy_all
City.destroy_all

# city 1
san_francisco = City.create!({
    name: 'San Francisco',
    title: 'A galaxy of vibrant neighborhoods connected by cable cars',
    description: "San Francisco has a personality as big and bold as the Golden Gate Bridge, but that personality changes neighborhood to neighborhood. Consider the tea rooms and mah jong parlors of Chinatown, the lingering hippie chic of Haight-Ashbury, and the boisterous family fun of Ghirardelli Square. The city is also home to one of the country's most dynamic food scenes, from beloved Mission District burrito joints to Michelin-starred dining rooms. When your legs get tired from exploring, hitch a ride on a cable car and take in those hilltop views.",
    do_description: "Places to see, ways to wander, and signature experiences that define San Francisco.",
    stay_description: "A mix of the charming, iconic, and modern.",
    eat_description: "Quintessential San Francisco restaurants, bars, and beyond."
})

# city 2
san_diego = City.create!({
    name: 'San Diego',
    title: 'The ultimate in laid-back California style',
    description: "Of all the major Cali cities, San Diego best embodies laid-back California. Its surf culture, beckoning beaches, and postcard-perfect weather are enchanting. But don't be fooled: San Diego is a major metropolis in its own right. Its serious food scene prides itself on a blend of Michelin nods and cheap eats—no trip is complete without a fresh fish taco in La Jolla. And it’s pure paradise for families, outdoor enthusiasts, and party people who love to bar-hop the thumping Gaslamp Quarter.",
    do_description: "Places to see, ways to wander, and signature experiences that define San Diego.",
    stay_description: "A mix of the charming, iconic, and modern.",
    eat_description: "Quintessential San Diego bistros, bars, and beyond."
})

# city 3
new_york_city = City.create!({
    name: 'New York City',
    title: "Come for the big dreams and dazzling lights, stay for the local haunts and the world's best pizza",
    description: "The tallest buildings, biggest museums, and best pizza—NYC is a city of superlatives, and it lives up to every one of them. From the dazzling spectacle of Broadway to MoMA's world-class galleries, the boutiques of SoHo, and the array of restaurants offering cuisines from every corner of the world, there’s a different New York to discover every time you visit. Beyond those iconic landmarks, though, New York’s secret side awaits. You’re likely to stumble upon indie vintage shops and locals-only brunch spots even on the shortest of strolls. And when the crowds and noise are too much to take, just look up—that skyline will remind you why you came in the first place.",
    do_description: "Places to see, ways to wander, and signature experiences that define New York City.",
    stay_description: "A mix of the charming, iconic, and modern.",
    eat_description: "Quintessential New York City restaurants, bars, and beyond."
})

# city 4
seattle = City.create!({
    name: 'Seattle',
    title: "About Seattle",
    description: "In Seattle you simply can't skip the Central Public Library - a modern architectural marvel of glass grids, unusual shapes, and a “book spiral” that climbs four stories. Stroll over to Pike Place Market to visit the original Starbucks and play catch with a fishmonger. In the heart of the city lies Chihuly Garden and Glass, which will dazzle you with its colorful and delicate works. Glide to the top of the Space Needle for panoramic views of the surrounding mountain ranges and Puget Sound.",
    do_description: "Places to see, ways to wander, and signature experiences.",
    stay_description: "A mix of the charming, modern, and tried and true.",
    eat_description: "Can't-miss spots to dine, drink, and feast."
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
    description: "Located in downtown San Diego, the USS Midway (Museum) was America’s longest-serving aircraft carrier of the 20th century. Today, the interactive museum is an unforgettable adventure for the entire family as guests walk in the footsteps of the 225,000 young men who served on Midway. Visitors explore a floating city at sea, the amazing flight deck and its 29 restored aircraft, flight simulators, and are inspired in the Battle of Midway Theater, included with admission. Admission also includes a self-guided audio tour narrated by Midway sailors in English, Mandarin, Spanish, Japanese, French and German. Visiting Midway is a once-in-a-lifetime experience in San Diego, known around the world as 'Navy Town, USA.'",
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