const data = [
  {
    id: 1,
    title: "Mayflower Gulch Trail near Copper Mountain",
    location: "Mayflower Gulch Trail, CO-91, Frisco, CO 80443",
    type: "Hike",
    leash: "Yes",
    overview:
      "Easy parking. Gentle elevation. Three miles round trip. And a ghost town? The Mayflower Gulch Trail gives you all this and a shockingly gorgeous basin to behold. On top of all this, the hike works well for families, especially if there exists any curiosity about the old west. The spacious gulch invites visitors to wander around and discover the fringes…a running stream, abandoned mines, and ridge line views. Caution: DO NOT inspect abandoned mines or even walk too closely; enjoy them from a distance! They can have unstable internal structures and entrances.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2022/03/IMG_9133.jpeg",
    length: "3 miles",
    difficulty: "Easy to Moderate",
  },
  {
    id: 2,
    title: "Beaver Brook Trail at Windy Saddle Park",
    location: "Parking lot, 1277 Lookout Mountain Rd, Golden, CO 80401",
    type: "Hike",
    leash: "Yes",
    overview:
      "One aspect that commends the Beaver Brook Trail hike to all ranges of ability and interest is its ease of editing. Need a short stroll to clear the mind? Take a stretch to the first vista and turn around. Ready to engage in a healthy, keep-your-wits challenge? Press ahead to the highest point on the trail, which this post describes. The undulating elevation, and the carousel of pine-lined trail, rock ledges, and bursts of expansive valley views entreat hikers to take one more step.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2022/03/IMG_9021.jpeg",
    length: "11 miles Round Trip",
    difficulty: "Moderate to Difficult",
  },
  {
    id: 3,
    title: "Eleven Mile State Park Interpretive Trail",
    location: "Coyote Ridge Nature Trail Lake George, CO 80827",
    type: "Hike",
    leash: "Yes",
    overview:
      "Eleven Mile State Park feels like the proverbial `hidden in plain sight` gem. Situated off the commonly traveled Highway 24 between Colorado Springs and Buena Vista, this loop hike blesses visitors with uncommon beauty. Trekking around the 3.5+ mile trail serves up a superb buffet of Colorado's classic outdoors: aspen and evergreen forests, meadows, rocky crags, vistas of mountain ranges, and a shoreline. Rarely do trails achieve a true `all-year` rating, but this loop qualifies. This hike near Denver could function as an along-the-way pit stop or a destination in itself, perfect for a swift pace or a lingering stroll with the family.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2021/09/FBF45F27-A2E6-4B3C-BD6A-A762B770A955.jpg",
    length: "3.5-5.5 miles Round Trip",
    difficulty: "Moderate to Difficult",
  },
  {
    id: 4,
    title: "Crater Lake Hike in the Indian Peaks Wilderness",
    location:
      "Monarch Lake Trailhead Continental Divide Trail, Granby, CO 80446",
    type: "Hike",
    leash: "Yes",
    overview:
      "California may boast Yosemite, but Colorado offers the Indian Peaks Wilderness valley. And within this wilderness, one happens upon an arresting sight — Mirror Lake and Crater Lake, dutifully monitored by the impressive Lone Eagle Peak. Long considered an iconic range, the Indian Peaks give hikers an endless stream of prime photography, wildflowers, and `Look at that!` moments. From the trailhead to Mirror Lake hikers encounter a half-dozen waterfalls, any one of which would capture all-star status on another trail!",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2021/07/1F264879-6567-4285-B7EF-92DCC649775E.jpg",
    length: "15 miles Round Trip",
    difficulty: "Difficult",
  },
  {
    id: 5,
    title: "Section 16 Hike near Manitou Springs",
    location: "Section 16 Trailhead Gold Camp Rd, Manitou Springs, CO 80829",
    type: "Hike",
    leash: "Yes",
    overview:
      "Nestled between Manitou Springs on the west and Colorado Springs on the east, the Manitou Section 16 Open Space overlaps with the Red Rock Canyon Open Space to the north, just off Highway 24. Both of these systems connect to two other regional parks, creating a massive complex of trails that delights hikers of all ages and abilities. This route follows three trails through two territories for one heckuva hike!",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2021/01/IMG_6139.jpg",
    length: "5.5-6.25 miles Round Trip",
    difficulty: "Moderate",
  },
  {
    id: 6,
    title: "Indian Creek Loop Hike",
    location: "Forest Rd 513.A, Sedalia, CO 80135",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Indian Creek Trail is tucked away outside of Sedalia, CO, just under an hour's drive from Denver, you find a trailhead leading to a vast internal system of trails that links up to the Colorado Trail, Roxborough State Park, and Nelson Ranch Open Space. The number of configurations you can devise awaits your creativity…and endurance! The Indian Creek Campground opens the door to trails meandering up and through the Pike National Forest with frequent vistas out into the valleys west and north.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2020/06/Indian-Creek-2-scaled.jpg",
    length: "7.5 miles Round Trip",
    difficulty: "Moderate",
  },
  {
    id: 7,
    title: "Manitou Lake Hike Near Colorado Springs",
    location: "Manitou Lake, CO-67, Colorado Springs, CO 80903",
    type: "Hike",
    leash: "Yes",
    overview:
      "Manitou Lake near Colorado Springs offers a pleasant and easy loop trail around its shores with views of Pikes Peak. It's also a great spot fishing and paddling on the 5-acres of water. ",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2020/03/patricia-henschen-manitou-lake-pikes-peak-hike.jpg",
    length: "Approx. 1 mile Round Trip",
    difficulty: "Easy",
  },
  {
    id: 8,
    title: "Chautauqua Loop Trail in Boulder",
    location: "Kinnikinnick Rd, Boulder, CO 80302",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Chautauqua Trail is an easy 3.6 mile loop hike along Boulder's Flatirons. The trails pass several historical sites: a quarry, cabin, shelter, and ski area as it weaves through the meadows and ponderosa forest of Chautauqua Park. About 40 minutes from Denver, the Chautauqua Loop hike makes for a great hike for visitors who are looking for stunning landscapes without the long drive or elevation gain.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2020/06/chautauqua-loop-trail-in-boulder-colorado-flatirons-from-trailhead.jpg",
    length: "3.6 Miles",
    difficulty: "Easy",
  },
  {
    id: 9,
    title: "Mt. Cutler Hike in Colorado Springs",
    location:
      "Mt Cutler and Muscoco Trailhead, N Cheyenne Canyon Rd, Colorado Springs, CO 80906",
    type: "Hike",
    leash: "Yes",
    overview:
      "Mt. Cutler in Colorado Springs is an easy, 1-mile hike to the summit of a foothill peak that overlooks Seven Falls, the canyon system of Cheyenne Canyon, and offers panoramic views that make this hike a great option for visiting friends and family. Because it's just 2 miles out-and-back with less than 500 feet of elevation gain, this hike offers a lot of reward with less effort.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2020/02/mt-culter-summit-hike-near-colorado-springs.jpg",
    length: "2 miles Round Trip",
    difficulty: "Easy",
  },
  {
    id: 10,
    title: "Mesa Trail to Bear Canyon Creek",
    location:
      "South Mesa Trailhead, 3633 Eldorado Springs Dr, Boulder, CO 80303",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Mesa Trail south of Boulder, Colorado, rambles across wild open country at the base of the iconic Flatirons. Hike a 4.1 mile loop or an 8.4 mile out-and-back option through pine woods, verdant creek draws, and flowering meadows.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2020/02/south-mesa-trail-boulder-colorado-looking-into-eldorado-canyon.jpg",
    length: "8.4 miles Round Trip",
    difficulty: "Easy to Moderate",
  },
  {
    id: 11,
    title: "Fallen Timbers Loop Hike at Fox Run Park",
    location:
      "Fox Run Regional Park Roller Coaster Trailhead, 2110 Stella Dr, Colorado Springs, CO 80921",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Fallen Timbers Loop is an easy, 2-mile hike near Colorado Springs with great views of Pikes Peak. It makes for a great family hike because of the shade of the ponderosa pines and the nearby playground at this hike in Fox Run Regional Park.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2019/12/fallen-timbers-hike-at-fox-run-lake-with-aspens-cc-wagner.jpg",
    length: "2 Miles",
    difficulty: "Easy",
  },
  {
    id: 12,
    title: "Ute Valley Park Loop in Colorado Springs",
    location:
      "Ute Valley Park Entrance, 1645 Vindicator Dr, Colorado Springs, CO 80919",
    type: "Hike",
    leash: "Yes",
    overview:
      "Ute Valley Park offers an easy 3-mile loop hike in the heart of northern Colorado Springs with views to snow-capped Pikes Peak. The trails make for a quick break from the city to trail run or walk the dog.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2019/12/ute-valley-park-colorado-springs-sunset-with-mountain-view-cc-lucas.jpg",
    length: "2.5 to 3 miles Round Trip",
    difficulty: "Easy",
  },
  {
    id: 13,
    title: "Santa Fe Regional Trail in Palmer Lake",
    location:
      "Palmer Lake Regional Recreation Area, 199 County Line Rd, Palmer Lake, CO 80133",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Santa Fe Regional Trail begins in Palmer Lake, Colorado, about 1 hour South of Denver. It's an easy trail with 17 miles from Palmer Lake to Colorado Springs along the old path of the Santa Fe Railroad.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2019/12/santa-fe-regional-trail-palmer-lake-at-palmer-lake-cc-rosenberger.jpg",
    length: "1 to 17 miles one-way",
    difficulty: "Easy",
  },
  {
    id: 14,
    title: "Eagles View Hike",
    location: "13649 S Foxton Rd, Littleton, CO 80127",
    type: "Hike",
    leash: "Yes",
    overview:
      "This is a loop trail to a scenic outlook. The trail ascends through meadows 		and ponderosa pine forest to views of Pikes Peak and the sawtooth spires and peaks of the 	Rampart Range.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2019/12/reynolds-park-hike-near-denver-eagles-view-loop-00-header.jpg",
    length: "4 miles",
    difficulty: "Moderate",
  },

  {
    id: 15,
    title: "Red Rock Canyon Hikes",
    location: "3550 W High St, Colorado Springs, CO 80904",
    type: "Hike",
    leash: "Yes & No",
    overview:
      "Red Rock Canyon Open Space features miles of easy hiking trails just a few miles west of Colorado Springs with views of Pikes Peak to the West and Garden of the Gods to the North.",
    image:
      "https://wewhoroam.com/wp-content/uploads/2019/05/colorado-roadtrip-2-691x461.jpg",
    length: "1 - 3.3 miles",
    difficulty: "Easy",
  },

  {
    id: 16,
    title: "Crags Hike",
    location: "615 Teller Co Rd 62, Divide, CO 80814",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Crags Trail takes hikers up a 2-mile gradual hike to the the dramatic granite pinnacles on the shoulders of Pikes Peak to take in views of snowcapped peaks.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdS4i5wj3OPO-uwTpz_rao-P5ZzacRJrXnGd-krLa1v5TPk88siwAl7dVga99Y1vo_4Y&usqp=CAU",
    length: "4.5 miles",
    difficulty: "Moderate",
  },
  {
    id: 17,
    title: "Horsethief Falls Hike",
    location: "14377-14311 CO-67, Divide, CO 80814",
    type: "Hike",
    leash: "Yes",
    overview:
      "Horsethief Falls is a small slab waterfall located 45 minutes from Colorado Springs on the West side of Pikes Peak.",
    image:
      "http://www.hikingintherockies.com/hiking/hike%20reports/horsetheif%20falls/falls2.jpg",
    length: "2.8 miles",
    difficulty: "Easy",
  },

  {
    id: 18,
    title: "Lost Lake Hike",
    location: " Nederland, CO ",
    type: "Hike",
    leash: "Yes",
    overview:
      "Just over one hour northwest of Denver, the trail up to Lost Lake takes you along the course of Middle Boulder Creek, a slide waterfall, a set of tumbling cascades, and a variety of wildflowers that decorate the borders of the trail, the creek sides, and the small meadows that open up along the trail.",
    image:
      "https://i0.wp.com/thegenxtravels.com/wp-content/uploads/2020/09/41w2Sr2RmycGCGAWZgRg.jpg?resize=640%2C480&ssl=1",
    length: "4 miles",
    difficulty: "Moderate",
  },

  {
    id: 19,
    title: "Shanahan Ridge Hike",
    location: "Lehigh St & Lafayette Dr, Boulder, CO 80305 ",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Shanahan Ridge loop is best hiked clockwise in order to gain the best views of the Flatirons and surrounding countryside. Going left on the first junction will take you onto a connector trail that will next intersect with the South Fork Shanahan Trail. This trail begins with a gradual ascent which becomes more demanding. If you are acclimatized to the altitude and hike a fair amount, you'll find this segment easy; but beginner hikers and those of us who are not in the best of shape will find this a moderately demanding trail.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2018/05/shanahan-ridge-trail-John-Giez-1024x768.jpg",
    length: "4 miles",
    difficulty: "Easy",
  },
  {
    id: 20,
    title: "Ridgeline Open Space",
    location: "Lehigh St & Lafayette Dr, Boulder, CO 80305 ",
    type: "Hike",
    leash: "Yes",
    overview:
      "Ridgeline Open Space is great place for families to hike because it's right in the backyard of Castle Rock. The residents of Castle Rock also use the 13.4 miles of trail for trail running and mountain biking. It's quite a labyrinth of trails, but because it's located right in the heart of a residential area, it's hard to get lost (if you stay on the trail).",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2017/11/ridgeline-open-space-castle-rock-04.jpg",
    length: "1 - 13.4 miles",
    difficulty: "Easy",
  },

  {
    id: 21,
    title: "Bear Canyon Loop",
    location: "1850 Table Mesa Dr, Boulder, CO 80305",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Bear Canyon Loop Hike near Boulder, Colorado is a beautiful trail that spans wide open spaces and meadows near National Center for Atmospheric Research. The Bear Canyon Loop is a relatively easy 3.3-mile loop that features some of the best views of the Flatirons in Boulder.",
    image:
      "https://cdn2.apstatic.com/photos/hike/7002637_medium_1554226613.jpg",
    length: "3.5 miles",
    difficulty: "Easy",
  },

  {
    id: 22,
    title: "Beaver Trail",
    location: "92 Crawford Gulch Rd, Golden, CO 80403",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Visitor Center at Golden Gate is worth exploring. Kids will be fascinated by the trout in the man-made creek and small pond surrounding the building. The Beaver Trail can be picked up just South of the Visitor Center by taking one of the paths around the perimeter of the building. ",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2016/09/01-beaver-loop-golden-gate-canyon-trail-start.jpg",
    length: "2.3 miles",
    difficulty: "Moderate",
  },

  {
    id: 23,
    title: "Windy Peak Hike",
    location: "10296-10302 Drew Hill Rd, Golden, CO 80403",
    type: "Hike",
    leash: "Yes",
    overview:
      "This is a Lollipop-loop trail with a spur trail at the end that leads up to the summit. There are several trail junctions, which can make this the route a bit confusing. I've provided photos below of the trail junctions, but it's important to remember that weather can change the landscape and signage. The description here hikes the loop portion of the trail in a clockwise direction",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2018/01/01-windy-peak-bridge-creek-trailhead.jpg",
    length: "6.4 miles",
    difficulty: "Moderate",
  },

  {
    id: 24,
    title: "Meyers Homestead Hike",
    location: "7321 Flagstaff Rd, Boulder, CO 80302",
    type: "Hike",
    leash: "Yes",
    overview:
      "The hike starts from the Meyers Homestead Trailhead by taking the trail on the right marked with a sign that reads `Meyers Homestead Trail – 2.6 Miles One-Way.` The initial trail segment descends into a broad meadow. Around just 1/4 mile into the trail, you'll spot the remnants of a sawmill, part of the original Meyer Homestead.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2017/04/01-meyers-homestead-trail-walker-ranch-winter.jpg",
    length: "5.2 miles",
    difficulty: "Easy to Moderate",
  },

  {
    id: 25,
    title: "Raccoon Trail",
    location: "Gap Rd, Black Hawk, CO 80422",
    type: "Hike",
    leash: "Yes",
    overview:
      "The trail begins with incredible views of the snowcapped Indian Peaks stretched out against the western sky. Soon, views of Thorodin Mountain and Starr peak dominate the landscape as the trail winds to the east and crosses a seasonal brook. Raccoon Trail then gently drops into aspen groves and green meadows full of wildflowers.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2016/06/raccoon-loop-golden-gate-canyon-state-park-trail-and-snowcapps.jpg",
    length: "2.5 miles",
    difficulty: "Easy",
  },

  {
    id: 26,
    title: "Eldorado Cascades",
    location: "226 Bison Dr, Boulder, CO 80302",
    type: "Hike",
    leash: "Yes",
    overview:
      "The hike begins with expansive views of Walker Ranch and out towards Eldorado Canyon State Park (pictured above). The trail winds down to a intermittent stream that was gushing with the early Spring snowmelt. A bridge buried in snow leads across the creek, then the trail skirts the hillside for most of the hike, gradually working its way down to a junction with the Walker Ranch Loop Trail. At the junction, the trail to Boulder Creek and Eldorado Cascades is to the right and takes hikers further downhill to a bridge that crosses South Boulder Creek.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2016/04/eldorado-falls-walker-ranch-beginning-of-hike.jpg",
    length: "2.5 miles",
    difficulty: "Moderate",
  },

  {
    id: 27,
    title: "Davis Ponds Hike",
    location: "12102 S Elk Creek Rd, Pine, CO 80470",
    type: "Hike",
    leash: "Yes",
    overview:
      "It's a great park for outdoor activities, including hiking, mountain biking, and rock climbing. Staunton has some longer and more demanding trails, but this hike, the Davis Ponds Loop Trail, is a lighter option with some beautiful views to the mountains and the prominent Lions Head outcropping.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2016/03/02-staunton-state-park-davis-ponds-hike_trailhead.jpg",
    length: "2.15 miles",
    difficulty: "Easy",
  },
  {
    id: 28,
    title: "Maxwell Falls",
    location:
      "Maxwell Falls Trailhead, 8101-, 8399 Black Mountain Dr, Conifer, CO 80433",
    type: "Hike",
    leash: "Yes",
    overview:
      "The Maxwell Falls hike is our most popular hike near Denver. Why? Because it's a perfect Colorado family hike with a variety of terrain, and the it takes you to one of the closest waterfalls to Denver.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2010/08/maxwellfalls_header.jpg",
    length: "1.6 to 4 Miles",
    difficulty: "Moderate",
  },
  {
    id: 29,
    title: "Canyon Loop Trail",
    location: "Betasso Preserve Trailhead, Betasso Rd, Boulder, CO 80302",
    type: "Hike",
    leash: "Yes",
    overview:
      "This hike at Betasso Preserve near Boulder, Colorado makes for a perfect evening escape to watch the sunset over the town below. You'll cross through meadows dotted with wildflowers then under stands of Ponderosa pine that eventually open up to views to east.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2010/09/Betasso-Preserver-Boulder-Colorado-Hike-Header.jpg",
    length: "3.3 Miles",
    difficulty: "Moderate",
  },
  {
    id: 30,
    title: "Glendale Farm Trail",
    location: "Hidden Mesa Parking Lot#2, Castle Rock, CO 80108",
    type: "Hike",
    leash: "Yes",
    overview:
      "Glendale Farm is a short hiking trail near Littleton, Colorado, that offers a seventeen-acre off-leash dog park. This makes for a great after-work trail run or a leisurely hike when the sun is setting over the mountains and the day is cooling down.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2010/08/00-glendale-farm-trail-douglas-county-open-space-header.jpg",
    length: "1.6 Miles",
    difficulty: "Easy",
  },
  {
    id: 31,
    title: "Bear Creek Trail at Lair o' the Bear Park",
    location: "25218 Bear Creek Rd, Morrison, CO 80465",
    type: "Hike",
    leash: "Yes",
    overview:
      "Lair o' the Bear is, in our family's opinion, the best family hike near Denver. First, the drive into the canyon on Bear Creek road is beautiful. Once at the park you'll find great hiking trail options, the cool water of bear creek, great parking, and some good picnic spots.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2010/07/DSC_0274.jpg",
    length: "1.6 Miles",
    difficulty: "Easy",
  },
  {
    id: 32,
    title: "O Fallon Park Trails",
    location: "25301-25477 Lines Ln, Evergreen, CO 80439",
    type: "Hike",
    leash: "Yes",
    overview:
      "These hiking trails near Evergreen, Colorado weave through the Bear Creek area in O'Fallon Park. It's a great place to launch into the Bear Creek Canyon area.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2010/06/00-ofallon-park-trails-header.jpg",
    length: "1.3 to 7 miles",
    difficulty: "Easy to Moderate",
  },
  {
    id: 33,
    title: "Eldorado Canyon State Park Hikes",
    location: "3238-3368 Eldorado Springs Dr, Boulder, CO 80303",
    type: "Hike",
    leash: "Yes",
    overview:
      "Eldorado Canyon State Park is a hiking and climbing Mecca tucked into the Front Range near Boulder and Denver, Colorado. Eldorado Canyon is an oasis just about 45 minutes from Denver. Kids will love hiking over rocks along the streamside trail, peering into caves, and gazing up at the climbers on the towering canyon walls.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2010/06/eldoradocanyon_header.jpg",
    length: ".5 to 3.5 miles (one way)",
    difficulty: "Easy to Moderate",
  },
  {
    id: 34,
    title: "Alderfer and Three Sisters Park",
    location: "Parking lot, Evergreen, CO 80439",
    type: "Hike",
    leash: "Yes",
    overview:
      "Alderfer and Three Sisters Park has everything from short, pleasant strolls for the family to more strenuous climbs and a long loop hike.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2010/06/01-alderfer-three-sisters-park-header.jpg",
    length: "0.2 to 10+ Miles",
    difficulty: "Easy (but consider altitude)",
  },
  {
    id: 35,
    title: "South Valley Park Trails",
    location: "Swallow Trail, Littleton, CO 80127",
    type: "Hike",
    leash: "Yes",
    overview:
      "The trails of South Valley Park are perfect for an after work hike or run in South Denver. The expansive valley near the neighborhood of Ken Caryl is enclosed on its eastern side by the exposed red rock formations of the hogback and the green foothills to the west.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2009/12/00-south-valley-park-trails-header.jpg",
    length: "0.5 to 3 miles",
    difficulty: "Easy",
  },
  {
    id: 36,
    title: "Flatirons Vista Loop Trail",
    location: "Boulder Valley Re 2, Colorado",
    type: "Hike",
    leash: "Yes",
    overview:
      "If you are yearning for wide open spaces, the Flatirons Vista trail near Boulder, Colorado makes for a perfect hike. The trail has two loop options and links up to other hiking trails along the Flatirons.",
    image:
      "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2010/09/Flatirons-Vista-Boulder-Colorado-Hike-Header.jpg",
    length: "1.9 or 3.3 Miles",
    difficulty: "Easy to Moderate",
  },
  {
    id: 37,
    title: "Elk Meadow Park – South Loop",
    location: "32391 Stagecoach Blvd, Evergreen, CO 80439",
    type: "Hike",
    leash: "Yes",
    overview:
      "Elk Meadow Park is a great place to hike with your family, if you have little ones, or if you just want to talk with a friend as you hike and take in great views of Colorado. It is important to know that the adjacent off-leash dog park has been closed.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2011/03/00-elk-meadow-park-south-loop-header.jpg",
    length: "2.6 Miles",
    difficulty: "Easy",
  },
  {
    id: 38,
    title: "Mount Falcon – Castle & Tower Hike",
    location: "Mt Falcon West Parking Lot, Indian Hills, CO",
    type: "Hike",
    leash: "Yes, in most areas",
    overview:
      "A hike to castle ruins in Colorado? Yep. Throw in a lookout tower, a great view of Denver, of Red Rocks, and of the mountains, and you've got some of the highlights of the Mount Falcon Trail. The trailhead is nestled in a community in the foothills just about 40 minutes from Denver.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2011/05/mount_falcon_header.jpg",
    length: "2.3 Miles",
    difficulty: "Easy",
  },
  {
    id: 39,
    title: "High Line Canal Hike – County Line to Fly'n B Park",
    location:
      "High Line Canal Trailhead, 1514 W County Line Rd, Littleton, CO 80129",
    type: "Hike",
    leash: "Yes",
    overview:
      "The High line Canal starts in the foothills and meanders over 60 miles through Denver, creating a treelined hiking and biking thoroughfare in the middle of the city. This stretch in Littleton, Colorado takes you past Fly'n B Park. Take the path south and you'll find yourself in Writer's Park.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2011/06/00-highline-canal-hike-county-line-to-flyn-b-park-header.jpg",
    length: "3.7 Miles Round Trip",
    difficulty: "Easy",
  },
  {
    id: 40,
    title: "Meyer Ranch Open Space Hikes",
    location: "10490 S Turkey Creek Rd, Morrison, CO 80465",
    type: "Hike",
    leash: "Yes",
    overview:
      "Meyer Ranch Open Space offers 3 great hiking options only 30 minutes from Denver. They range from easy to moderate in difficulty and 2.4 to 4.8 miles in length. Meyer Ranch has expansive meadows and patches of wildflowers, grazing deer & elk, and trails that take you to overlooks.",
    image:
      "https://dayhikesneardenver.com/wp-content/uploads/2011/07/00-meyer-ranch-open-space-hikes-header.jpg",
    length: "2.4 to 4.8 Miles Round Trip",
    difficulty: "Easy to Moderate",
  },
  {
    id: 41,
    title: "Barnum Dog Park",
    location: "North Julian St. between West 4th Ave and West 5th Ave, Denver",
    type: "Park",
    leash: "No",
    overview:
      "Just opened in December 2017, Barnum Dog Park is located on the west side of Barnum Park near the playground and tennis courts. Approximately three-quarters of an acre, the area is fenced with two separate areas for dogs with different energy levels.",
    image:
      "https://www.hellolanding.com/blog/wp-content/uploads/2020/12/image2-3.jpg",
    length: "3/4 acre",
    difficulty: "easy",
  },
  {
    id: 42,
    title: "Berkeley Dog Park",
    location: "Sheridan Blvd and West 46th Avenue, Denver",
    type: "Park",
    leash: "No",
    overview:
      "Berkeley Dog Park offers a simple, fenced, gravel off-leash area adjacent to Berkeley Lake and Berkeley Lake Park. Overlooking Lakeside Amusement Park, the dog park amenities include separate areas for large and small dogs, water bowls and a few shaded areas.",
    image:
      "https://www.uncovercolorado.com/wp-content/uploads/2014/11/2014-10-Berkeley-Park-Denver22-1024x683.jpg",
    length: "2 acres",
    difficulty: "easy",
  },
  {
    id: 43,
    title: "Bicentennial Dog Park",
    location: "13600 E. Bayaud Avenue, Aurora",
    type: "Park",
    leash: "No",
    overview:
      "The off-leash dog area at Bicentennial Park in Aurora offers approximately 1 acre of fenced, open space for play and exercise. Mostly dirt, the park also has a bag station, trash collection can and an entry and exit gate",
    image:
      "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_1881137/Image/Site%20Wide%20Images/Banner%20Images/dogsartpark3.jpg",
    length: "1 acre",
    difficulty: "Easy",
  },
  {
    id: 44,
    title: "Chatfield State Park",
    location: "11500 N Roxborough Park Rd, Littleton, CO 80125",
    type: "Park",
    leash: "No",
    overview:
      "Chatfield offers one of Metro Denver's best open areas for off-leash walking, play and exploration. The Dog Off-Leash Area consists of 69 fenced acres, including two ponds and miles of walking trails—both paved and unpaved.",
    image:
      "https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/6/2019/05/21133823/White-dog-tiny-1024x625.jpg",
    length: "69 acres",
    difficulty: "Easy",
  },
  {
    id: 45,
    title: "Cherry Creek State Park",
    location: "4201 S Parker Rd, Aurora, CO 80014",
    type: "Park",
    leash: "No",
    overview:
      "operated by Colorado Parks and Wildlife, Cherry Creek covers a whopping 4,000 acres. The designated Dog Off-Leash Area allows dogs to play and explore 107 fenced acres of that land. And Cherry Creek flows through for easy access to water, too!",
    image:
      "https://i0.wp.com/citydogmagazine.com/wp-content/uploads/2022/04/Cherry-Creek.jpg?fit=754%2C566&ssl=1",
    length:
      "https://liferebooted.net/wordpress/wp-content/uploads/2016/10/20160828-IMG_0010-1240x826.jpg",
    difficulty: "Easy",
  },
  {
    id: 46,
    title: "Forsberg Park",
    location: "15900 W Alameda Pkwy, Lakewood, CO 80228",
    type: "Park",
    leash: "No",
    overview:
      "Forsberg Park is located in Lakewood on the south side of Green Mountain. The park itself offers paved walking trails and a large, fenced dog park. The dog park offers two separate sections for different tempered dogs and each one has a double gate entry, shade trees, water and picnic tables.",
    image: "https://doggiecaboodle.com/wp-content/uploads/2019/06/IMG_5276.jpg",
    length: "2.5 acres",
    difficulty: "Easy",
  },
  {
    id: 47,
    title: "Fuller Dog Park",
    location: "2801 N Williams St, Denver, CO 80205",
    type: "Park",
    leash: "No",
    overview:
      "Fuller Dog Park is a fenced, mostly dirt park just a few blocks northwest of City Park. The off-leash area is located on the west side of Fuller Park and is a great spot for city dogs to get exercise and play. ",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/FXdUfrX0ddk3TfSzLUcpPA/o.jpg",
    length: "2 acres",
    difficulty: "Easy",
  },
  {
    id: 48,
    title: "Glendale Farm Open Space and Trail",
    location: "12300 S Havana St, Castle Rock, CO 80108",
    type: "Park",
    leash: "No",
    overview:
      "Directly adjacent to 1.6 miles of the on-leash Glendale Trail, Glendale Farm Open Space has a 13-acre, fenced, off-leash park.",
    image:
      "https://www.castlepinesconnection.com/wp-content/uploads/2022/03/17-ViewTopOfGlendale-1.jpg",
    length: "13 acres",
    difficulty: "Easy",
  },
  {
    id: 49,
    title: "Grandview Dog Park",
    location: "17500 E Quincy Ave, Aurora, CO 80015",
    type: "Park",
    leash: "No",
    overview:
      "Grandview Dog Park offers more than 5 acres to run and play next to Quincy Reservoir. The fenced area has separate areas for large and small dogs, drinking fountains in the warm months, bag stations, trash collection cans, and entry and exit gates.",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/uIdTyIRXpV_0YU2e2MArgA/348s.jpg",
    length: "5 acres",
    difficulty: "Easy",
  },
  {
    id: 50,
    title: "Green Valley Ranch East Dog Park",
    location: "4455 Jebel St, Denver, CO 80249",
    type: "Park",
    leash: "No",
    overview:
      "Located in a quiet neighborhood in Northeast Denver, this neighborhood park offers tennis and volleyball courts, basketball courts, an outdoor pool, a playground, picnic spots and a fenced dog park. The fenced, off-leash area has a dirt floor, two separate areas, and a covered sitting area for humans.",
    image:
      "https://assets.wagwalkingweb.com/static/webpack-assets/img/wagcontent/lifestyle_articles/static/lifestyle_articles/img/parks/park10-7bcac07a00571b59bd357df30d0efadd.jpg",
    length: "2 acres",
    difficulty: "Easy",
  },
  {
    id: 51,
    title: "Kennedy Dog Park",
    location: "9700 E Hampden Ave, Denver, CO 80231",
    type: "Park",
    leash: "No",
    overview:
      "John F Kennedy Park has a fenced, off-leash play area directly across the road from Cherry Creek State Park. This makes it a great free option in the neighborhood if you don't want to pay to enter the state park.",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/pC8vR_b7KeRy5CIP8OvNfA/l.jpg",
    length: "3 acres",
    difficulty: "Easy",
  },
  {
    id: 52,
    title: "Lowry Dog Park ",
    location: "Yosemite Way & E 4th Pl, Denver, CO 80230",
    type: "Park",
    leash: "No",
    overview:
      "Lowry Dog Park is a spacious, fenced, off-leash area nestled amongst tons of green, open space in Denver. Within the fences of the dog park, you'll find two separate areas for different tempered dogs, gravel surfaces, wide open space to play, and plenty of benches for humans to sit on",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/NZ639VryDBk75lTZ78MmUQ/348s.jpg",
    length: "5 acres",
    difficulty: "Easy",
  },
  {
    id: 53,
    title: "Railyard Dog Park",
    location: "2095 19th St, Denver, CO, 80112",
    type: "Park",
    leash: "No",
    overview:
      "Located in LoDo just southeast of Commons Park, Railyard Dog Park offers an excellent area for off-leash play in the heart of the city. The primary surface is soft, sandy dirt and there are also paved, shaded areas with picnic tables.",
    image:
      "https://img.geocaching.com/waymarking/display/719bd382-0e25-41fe-a23e-144b19dafe03.JPG",
    length: ".5 acres",
    difficulty: "Easy",
  },
  {
    id: 54,
    title: "Stapleton Dog Park",
    location: "2002 Spruce St, Denver, CO 80238",
    type: "Park",
    leash: "No",
    overview:
      "The off-leash area is fully fenced with a dirt surface, shade trees, benches and fountains. There is just one open area for all dogs and be sure to bring your own bags and extra water!",
    image:
      "https://media2.westword.com/den/imager/u/slideshow/6706544/8100601.0.jpg",
    length: "3 acres",
    difficulty: "Easy",
  },
  {
    id: 55,
    title: "Tony Grampsas Dog Park",
    location: "4471 Salvia St, Golden, CO 80403",
    type: "Park",
    leash: "No",
    overview:
      "The 2.5-acre, wooded and fenced off-leash area boasts large trees that offer shade, shrubby areas for dogs to explore and paved trails. Be sure to bring your own water! ",
    image:
      "https://www.cityofgolden.net/wp-content/uploads/Dog-Park-Tony-Grampsas-300x195.jpg",
    length: "2.5 acres",
    difficulty: "Easy",
  },
  {
    id: 56,
    title: "Westminster Hills Dog Park",
    location: "10499 Simms St, Westminster, CO 80005",
    type: "Park",
    leash: "No",
    overview:
      "This Westminster park is a favorite for Denver Metro dog owners. It offers 420 acres between Colorado Hills Open Space and Standley Lake North Open Space Park with a dog drinking fountain, a dog swimming pond, benches and shade.",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/CpQj7gYGquJ-IMYPGqdiPA/348s.jpg",
    length: "420 acres",
    difficulty: "Easy",
  },
];

export default data