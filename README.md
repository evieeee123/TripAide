# <a href="https://tripaide.herokuapp.com/" target="_blank" rel="noopener noreferrer">TripAide</a>

TripAide is TripAdvisor clone. Users can search information about different cities, attractions, hotels, and restaurants as well as walk through other users' reviews. It also provides a platform for users to leave their reviews on the place they visited. Try the demo user to login to try out these features.

## Languages & Technologies Used
<li>Languages: Javascript, Ruby on Rails, React/Redux, CSS, HTML</li>
<li>Hosting: Heroku</li>
<li>AWS S3</li>
<li>Google Maps API</li>

## Functionality & MVP's
<ul>
    <li>User Authentication: Users can sign up, sign in, log out</li>
    <li>Search: Search different places in home page</li>
    <li>City page / Attraction page / hotel page / Restaurant page - READ: View specific places, places informatio, and associated reviews </li>
    <li>Attraction index page / hotel index page / Restaurant index page - READ: show map location and associated places</li>
    <li>Reviews - CRUD: Create and edit reviews via form. Read others reviews and delete your own review.</li>
</ul>

### Home page

<img src="https://github.com/evieeee123/TripAide/blob/main/app/assets/images/homepage.gif" width="700" heigh="300">


### Show page and Review CRUD

<img src="https://github.com/evieeee123/TripAide/blob/main/app/assets/images/showpage.gif" width="700" heigh="300">

<p>Backend implemented polymorphic associations to match reviews with different places and DRY code.</p>

```ruby
class Review < ApplicationRecord

    validates :title, :body, :visit_date, presence: true
    validates :rating, presence: true, inclusion: { in: (1..5), message: "must be selected in order to submit your review" }

    belongs_to :reviewable, :polymorphic => true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
```

```ruby
class Hotel < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :longtitude, :latitude, presence: true

    belongs_to :city,
        primary_key: :id,
        foreign_key: :city_id,
        class_name: :City

    has_many :reviews, :as => :reviewable
end
```

<p>Frontend set up placeType variable to match reviewable type to clean up code.</p>

```node
    const mSTP = (state, ownProps) => {
    let place;
    let placeType = ownProps.match.params.placeType;
    let placeId;
    if (placeType === "spots"){
        place = "spot";
        placeId = "spotId";
    } else if (placeType === "hotels") {
        place = "hotel";
        placeId = "hotelId";
    } else if (placeType === "restaurants") {
        place = "restaurant";
        placeId = "restaurantId";
    }
    
    return {
        currentUser: state.entities.users[state.session.id],
        // spot: state.entities.spots[ownProps.match.params.spotId],

        [place]: state.entities[placeType][ownProps.match.params[placeId]],

        // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        // hotel: state.entities.hotels[ownProps.match.params.hotelId],
        reviews: Object.values(state.entities.reviews),
        errors: state.errors.review,
        user_id: state.session.id,
        place: place,
        placeType: placeType,
        placeId: ownProps.match.params.placeId
    }
    }
```

### Index page

<img src="https://github.com/evieeee123/TripAide/blob/main/app/assets/images/indexpage.gif" width="700" heigh="300">

