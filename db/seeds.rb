# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "city"

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
