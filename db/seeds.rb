# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Publication.create(
  name: "Bloomberg",
  description: "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
  url: "http://www.bloomberg.com",
  category: "business",
  language: "en",
  country: "us"
)

Article.create(
  publication_id: 1,
  author: "",
  title: "Texas’s Harsh Sanctuary-City Ban Blocked by Federal Judge",
  description: "Texas can’t punish so-called sanctuary cities, after a federal judge temporarily blocked a measure that would have let Texas’s Republican leadership jail sheriffs and fine towns for failing to fully cooperate with U.S. immigration policies.",
  url: "https://www.bloomberg.com/news/articles/2017-08-31/texas-s-harsh-sanctuary-city-ban-blocked-by-federal-judge",
  urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ij8VbXHy6M1Q/v0/1200x675.jpg",
  publishedAt: "2017-08-31T00:42:26.438Z"
)

Article.create(
  publication_id: 1,
  author: "Anthony Capaccio",
  title: "North Korean ICBM Technology Still Falls Short, Top General Says",
  description: "While North Korea is maintaining its torrid pace of weapons tests, there are at least three key hurdles Kim Jong Un’s regime still needs to overcome before it can field a nuclear-tipped intercontinental ballistic missile capable of threatening the U.S. mainland.",
  url: "https://www.bloomberg.com/news/articles/2017-08-30/north-korean-icbm-technology-still-falls-short-top-general-says",
  urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iic8bmKsZ5po/v0/1200x603.jpg",
  publishedAt: "2017-08-30T23:00:00.003Z"
)
