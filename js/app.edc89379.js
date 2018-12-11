(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],d=0,c=[];d<s.length;d++)i=s[d],r[i]&&c.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);h&&h(t);while(c.length)c.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var h=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("64a9"),r=o.n(a);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),r=o("bc3a"),n=o.n(r),i={},s=n.a.create(i);s.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),s.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex-wrapper"},[e.message.length>0?o("div",{staticClass:"app-container"},[o("div",{staticClass:"message-container",on:{click:this.refreshMessage}},[o("p",{staticClass:"message-text"},[e._v(e._s(e.message))])]),o("div",{staticClass:"row-wrapper"},[o("div",{staticClass:"temp-column"},[e._v("\n        "+e._s(e.location.name)+"\n        "),e.isCelsius?o("div",{staticClass:"temp-area",on:{click:this.toggleScale}},[o("span",{staticClass:"temp"},[e._v(e._s(e.weather.temp.c))]),o("span",{staticClass:"scale"},[e._v("°C")])]):e._e(),e.isCelsius?e._e():o("div",{staticClass:"temp-area",on:{click:this.toggleScale}},[o("span",{staticClass:"temp"},[e._v(e._s(e.weather.temp.f))]),o("span",{staticClass:"scale"},[e._v("°F")])]),e._v("\n        "+e._s(e.weather.blurb)+"\n      ")]),o("div",{staticClass:"desc-column"},[o("p",[e._v("\n          Click on the temperature or\n          "),o("a",{attrs:{href:"#"},on:{click:this.toggleScale}},[e._v("here")]),e._v(" to display in\n          "),e.isCelsius?o("span",[e._v("Fahrenheit")]):e._e(),e.isCelsius?e._e():o("span",[e._v("Celsius")]),e._v(", and click on the message or\n          "),o("a",{attrs:{href:"#",id:"update-message"}},[e._v("here")]),e._v(" to update the reference point. Weather data is provided by\n          "),o("a",{attrs:{href:"http://openweathermap.org/",target:"_blank"}},[e._v("OpenWeatherMap")]),e._v(". Concept inspired by\n          "),o("a",{attrs:{href:"https://xkcd.com/526/",target:"_blank"}},[e._v("this xkcd comic")]),e._v(". Weather insights, snarky remarks, and other comments are based on\n          a survey taken from reddit's\n          "),o("a",{attrs:{href:"http://www.reddit.com/r/samplesize",target:"_blank"}},[e._v("r/SampleSize")]),e._v(" community. Web app written by\n          "),o("a",{attrs:{href:"http://michaelcharl.es/aubrey",target:"_blank"}},[e._v("MichaelCharl.es/Aubrey")]),e._v(".\n        ")])])])]):o("div",{staticClass:"loading"},[o("div",{staticClass:"loading-circle"}),o("p",{staticClass:"loading-text"},[e._v("Loading...")]),o("p",{staticClass:"location-warning"},[e._v('For accurate weather reporting please click "Allow" to share your precise location.\n      '),o("a",{attrs:{href:"#"},on:{click:this.useIp}},[e._v("Click here")]),e._v(" to use IP based location tracking instead.\n    ")])])])},u=[],h=(o("7f7f"),o("ac4d"),o("8a81"),o("ac6a"),o("d4ec")),d=o("bee2"),c=function(){function e(){Object(h["a"])(this,e),this.referencePoints=[{maxTemp:60,minTemp:57,reference:["Hotter than the hottest temperature ever recorded. Like, seriously. This is literally one for the record books."]},{maxTemp:56,minTemp:51,reference:["Apparently you live on the surface of the sun.","Is that even a real temperature?","Too hot to survive for long.","Hot.","You need to move out of the desert.","Too hot to care exactly how hot it is.","You cook pork at this temperature.","Fiery inferno. Stay inside. You may spontaneously catch fire if you go outside.","Find a refrigerator to sit in and don't move.","Hot, but still in the food danger zone.","The temperature of hell.","Where are you? Death Valley? You're going to melt before you die.","Mirages.","Chicken goes back in the oven.","Stay inside with the air conditioner on full blast.","Death.","You cook merengues at this temperature.","It doesn't get this hot in Canada. You should move to Canada.","Not hot enough to boil water but it'll burn you all the same.","It's the end of the world.","Time to visit Canada.","Slightly warmer than you need to dehydrate food in an oven, but not warm enough to cook anything.","Dangerous to go outside. Immediate heatstroke.","Must worry about constant hydration and cooling needs. Limit my outdoor exposure.","Global warming is real and will be the end of us."]},{maxTemp:50,minTemp:46,reference:["Desert in the summer.","Walking on sand may result in loss of feet.","Water... I need water...","If it gets this hot where you live, you should move.","Danger of death from exposure.","It's probably best for your health to stay inside.","A very hot day in Las Vegas.","Could possibly be survived by rolling in and out of a lake if humidity is low.","Possibly safe to go outside, bring water and don't touch metal things.","Super, super hot.","I didn't even know it could get this hot.","The ground is on fire.","Sweat induced death.","Inside with the air conditioner on full blast.","What do you mean the ice creams have melted in the freezer??","Outdoor activity is not advised in this temperature range.","A very hot day, even in places where it gets hot.","Too hot to go outside.","Boiling day in Arizona.","What is this, Dubai?","Stay indoors and keep cool.","Good day to spend in the mall with AC from sunrise to sunset.","Upper limit of habitability.","Warm enough to dehydrate food in an oven, or a person outside.","High risk of heatstroke.","Dangerous to go outside.","You are experiencing some of the hottest temperatures in the world.","Death.","Too hot, stay inside, ice blocks all dang day.","Has Satan risen?","Buy ice cream and smear it on your face.","Do you live in a desert?"]},{maxTemp:45,minTemp:41,reference:["Stay in the shade, drink 3 times as much water as you think you need.","Way too hot. Stay inside, point a fan at yourself, wait to die.","Normal Texas summer.","Feels like hell.","Hot California summer.","This temperature is why I don't live in Texas.","Too warm to play soccer.","If it's a dry heat, it's bearable.","Going to the beach would be lovely.","Stay inside, its too hot to go out.","Kind of like having a sauna outside the front door.","I would stop whatever I am doing and find water.","You can bake things on the hoods of cars. Just don't touch the metal.","This is record highs for most places.","Mandatory AC.","Walking out the door and back in.","Tough to stay hydrated.","This would be a good temperature for the water in a hot tub. Though you wouldn't want to get in one right now.","Miserable.","My maximum temperature range for outdoor activity.","Better not touch the inside of a car.","Hide indoors, there is nothing worthwhile out there.","If it's this outside you need to move.",'Today is a "stay inside"s day.',"Jump in a pool or stay indoors.","An ice cream brain freeze would be an improvement.","Risk of heatstroke.","Spend some quality time with your air conditioner.","So hot that walking from your house to your car is unbearable.","Go swimming if you can while staying out of the sun.","You may survive if you strip naked and surround yourself with AC.","Very, very hot summer's day.","Potentially dangerous, drink lots of water.","You might spontaneously combust.","Bushfire weather! Hope the underbrush hasn’t built up!"]},{maxTemp:40,minTemp:36,reference:["Good day to be inside.","Do not wear more than a t-shirt and shorts.","Not so bad for a Texas summer.","Maybe you should just go naked today.","A very hot summer day.","Nice with a breeze, too hot without.","Texas in September.","Remember sunscreen.","Excellent beach weather?","Even swimming doesn't cool you down.","Hot, sweaty and uncomfortable, but bearable.","Barely tolerable summer weather.","This is why air conditioning exists.","Everything becomes slow and miserable.","Hot. Need AC to sleep, probably run during day.","Stay inside and strip down as much as possible.","Swimming weather.","Don't go out at midday unless you really have to.","Miami on a terrible day.","The air is too heavy and sticks to your skin.","Your hand will burn if you touch a black car.","A stupidly hot day.","Sweating buckets.",'Likely a muggy, "sticky" summer day.',"Where'd I put the popsicles?","Barely tolerable, okay for swimming but still too hot really.","Indoor ice rinks are the best place in summer. It's air conditioned, cheap, and empty.","Remember to stay hydrated.","Dry heat, okay. Humid, stay inside.","Humidity and sadness.","Hot July.","AC is not optional.","Oppressive heat. Staying indoors is a good idea, unless you're one of those weird people who likes this weather.","Risk of heatstroke, stay hydrated and don't do strenuous exercise.","Only go outside if you want to hang out at the beach and drink a lot.","Hot, drink lots of water to avoid heatstroke.","Normal Florida summer.","Beach day, lots of sunblock.","Jump in the closest freezer immediately.","Extremely hot, but manageable in normal clothes.","Slip slop slap! Good weather to get lots of washing done."]},{maxTemp:35,minTemp:31,reference:["Perfect swimming weather.","Shorts and a T-shirt don't help.","A cool summer day in Texas.","Perfect for a day at the beach.","Dad finally turns on the AC.","Lemonade and cool summer evenings.","Summers in the mediterranean, generally the optimal temperature.","Maryland in July.","Going to theme parks and summer storms.","Hit the water! It's a hot today.","You think you'll like it, but after you go outside you'll find it is too much to bear.","Beach and or pool weather.","Shorts.","Pretty hot but not super miserable.","In Hawaii this is normal.","A pretty hot summer day that's still enjoyable with enough water.","Warm, but business as usual. Shorts and maybe AC at night.","Lying in the shade on the beach. Too hot to do a lot.","Sunburns.","Good weather for lounging in the shade but not much else.","Air conditioning required.","A really hot day, better stay inside.","You will think this is nice weather for about 20 minutes before you start hating it.","Average Australian summer day.","Good beach weather if there's wind.","Hot. Hot. Hot. Too hot.","Turning on the AC today.","Not pleasant unless there's a breeze.","Normal summer day in Florida.","A serious heat wave in Maine.","Mildly bearable but still hot.","Hot. Stay hydrated.","Summer high, torture every year.","The temperature at which self-hate is most pungent.","Uncomfortable heat.","Sweaty in minutes.","Drink lots of water.","Good weather for swimming, and can be fairly tolerable in the shade.","Keep very hydrated. The warmest you'd want to be outside not near water.","Barbecue.","Sunblock is a must.","Get some beers on ice?","Still not so unbearable that you can't do outdoor activities if you want to."]},{maxTemp:30,minTemp:26,reference:["Nice and warm, but not too warm.","Perfect beach day.","Nice! Excellent summer weather.","Ideal for swimming pools.","Comfortably warm.","Gasual weather, good for activity.","You should definitely go to the ocean.","Perfect weather for playing in the park, grilling, walks with friends, or lounging around outside.","Sunbathing weather.","Too hot for comfort but could do any activity if need be.","Short sleeves weather. A little bit sweaty.","Time to break out the grill?","It's nice outside?","This would probably come with lots of humidity.","A nice summer day that is comfortable to feel on your skin.","Comfortable shorts temperature.","BBQ and chill.","No sports during the day.","Hot, but at least I can do my chores a bit more normally.","Sunshine.","Spring break?","You can walk around outside in minimal clothing and feel comfortable.","If you're from Arizona you might think this is freezing.","Normal summer day.","Great weather for walking, swimming outdoors.","Very bearable.","Pleasant at the beach.","Barbecue, swimming outside. Hot but bearable.","To the beach?","Perfect summer day temperature.","Bugs.","July in Wisconsin.","Hot enough to make you sweat, but not so much to cause horrible discomfort.","Good swimming weather. The water will feel nice, but not so bad that you need to stay in it.","A pretty good summer day. Bring water but probably pretty nice.","British heatwave weather."]},{maxTemp:25,minTemp:21,reference:["A bit cool, but still perfect weather.","A bit too hot for heavy pants.","Sweltering in the winter, coolish in the summer.","Normal weather, a little chilly.","Would still go to the ocean.","T-shirt weather.","Just a nip of cold. Perfect weather, but with a light jacket.","Perfect shorts and t-shirt weather.","A nice temperature to sit and read outside.","Comfortably warm.","Ideal temperature range. Not too hot, not too cold. Just right.","Ideal warm weather.","Room temperature.","Perfect weather. You could even wear jeans.","Perfect outdoor working temperature.","Nice and comfy.","Good to sit outside and read.","Comfortable.","Nice weather.","Go for a nice walk and an ice cream.","Light sweatshirt weather.","A warm day, nice bike ride.","Room temperature, decent summer day.","Sports! Action! Fun! Camping! A comfortable temperature to do things at.","Room temperature and what indoor swimming pools claim to be.","Just right for a barbeque.","A cool day in summer, but still plenty warm.","Time to plant green beans and tomatoes.","Great for doing stuff outdoors, warm but comfortable.","Feels good with a light breeze.","Great for theme parks and concerts.","Warm enough to bike to work.","Eating outdoors is alright.","It's a nice temperature for exercising outdoors."]},{maxTemp:20,minTemp:16,reference:["Light jacket weather.","Sweatshirt and jeans weather?","The temperature of a cool house.","Perfect for a bike ride.","A summer evening. If it isn't evening, then a bit cold.","Long sleeve weather.","Perfect hiking weather, or any other intense exercise?","Great temperature for a bonfire.","Nice and mild. Good day for a hike.","It's a bit cool, but you don't need a coat.","Feels incredibly nice out. Great for grilling. almost jacket weather.","Perfect weather to work outside.","Nice temperature. I can go outside with no problems?","Decent temperature for a picnic.","Hoodie weather.","Nice bike ride weather, a nice day.","Good temperature range for lunch on the patio.","A coat is too much, a t-shirt is too little.","Great outdoors temperature.","Wear a hoodie or a light jacket.","Not cold, not warm.","Nice spring weather.","Spring or early fall, good day for a walk.","B-E-A-utiful.","Too cold to plant tomatoes, good weather for lettuce, carrots and spinich.","Too warm to wear a sweater, no jacket required.","Optimal temperature.","Don't need to go outside with a sweater.","A nice summer's day; shorts weather.","In the winter this is amazingly warm, in the summer this is chilly."]},{maxTemp:15,minTemp:11,reference:["Long sleeves and jacket.","Shorts in this weather is insanity.","Sweatshirt and jeans weather.","Sweat pants.","Time for a hoodie!","Cold summer day, warm winter day.","Cold day.","Nice for spring or fall.","A little cool, but good weather for intense exercise.","Jacket weather.","A nice temperature for a hiking and or biking trip.","In Hawaii, everyone would be screaming about the cold.","In Florida this is heavy coat weather.","Grab a jacket or don't, it's nice outside.","A little on the cool side.","Pants encouraged.","Walk everywhere, go jogging, dont worry about overheating.","A mild winter's day. Light top and jacket should do.","Too mild to be cold, too warm to wear a coat.","Time to plant peas and kale, you might try planting lettuce and carrots too.","You won't need your jacket, but keep a warm sweater handy.","If it's been very cold recently, this is shorts temperature. If its been hot recently, this is coat weather.","That weird temperature where a t-shirt is too cold but a jacket is too warm.","Time to break out your schlobby parka."]},{maxTemp:10,minTemp:6,reference:["Don your coat, it's getting chilly.","That's two sweatshirts now.","Canada.","Warm winter, cold spring.","It's time to start using the fireplace.","Beware of cold rain.","Starting to have to thaw the car.","Layering time. Jacket over sweatshirt.","Stewtime.","Nice running temperature.","You'll need some heating on in your house, and a coat to go outside.","Break out the winter coat. Hats are a good idea.","Fairly chilly outdoor temperature. Cold enough to wear pants instead of shorts.","I bet it's raining.","Winter is coming...","Almost warm enough for your vegetable garden, you might get away with planting peas now.","Light jacket and or warm sweater needed.","Winter. Grab a coat fo' sho'","If it's from summer into autumn, its freezing. If it's from winter into spring, its warm enough for a light jacket.","Fleece blankets and hot cocoa!","Any colder and outdoor activities would be uncomfortable. Not so bad now though.","Scarf, jumper, jacket and gloves!"]},{maxTemp:5,minTemp:1,reference:["Winter jacket required.","Augh when did it get cold, this is unfair.","A December's eve in Canada.","Fridge temperature.","Definitely need gloves. Maybe a hat.","Literally almost freezing.","Saskatchewan.","Cold day.","Good weather for winter activities: snowshoeing, skiing, etc.","Either snow or yucky slush mix.","Fridge temperature. Winter's coming. No longer in denial.","Snow?","Cold, good snow weather. Long sleeves and probably a jacket.","Wear many layers.","Time to break out the heating blanket.","Warm for winter, but cool for spring or fall.","Ugh, wet and cold. You should wear your winter jacket and sweater.","Pretty cold, but you'll still be fine with a jacket and maybe a sweater underneath.","Hat and scarf weather.","Moment when people start japping about a white Christmas.","Put your heating on, wear a coat.","Bloody cold.","Good for baking cookies, bad for open-toed shoes.","The worst weather if it's raining.","Perfect for dog sports (mushing).","You regret your trip to Boston, despite wearing a scarf and a beanie."]},{maxTemp:0,minTemp:-5,reference:["Cold enough for snow.","Wrap yourself up like an Egyptian mummy and waddle around like a penguin.","Might be snowing, but not really cold yet.","Scarf. Hat. Gloves.","With weather this cold we'd better get some snow.","Perfect packing snow.","Baby, it's cold outside.","Hot coffee time!","Skiing weather.","Time to wear your heavy coat.","Winter weather, nice with fresh air.","Snow!","There's likely frost on your windshield in the morning.","Packing Snow! Build snowmen or jumps.","Chaos on the roads.","Freezing. Literally.","If it's winter, this isn't so bad.","If it somehow rains, it is miserable.","Beware of ice.","Ice skating.","Be sure to get up early enough to defrost your car windshield.","Puffy jacket.","Ice starts to form.","Wear some light gloves and toque.","Freezing, worry about pipes bursting.","Below freezing point of water. Definitely need a coat for going outside.","The ice isn't solid enough to skate on yet, let alone play on.","This is probably the temperature in your freezer.","Let's see if the reservoirs have iced over!","Layers are the key.","Snow weather!","Snow texture ranges from fluffy to wet.","Wear your winter coat and scarf.","Toques are now acceptable to wear as well as gloves.","West Germany.",'Officially "cold."',"Warmish for winter, wet snow.","Great for snow-related activities; sledding, icefishing, outdoor hockey, snowball fights, snowmen, angels, etc."]},{maxTemp:-6,minTemp:-10,reference:["Wear several layers, it's really cold.","Dress in layers for warmth","Everything is made of ice. Even your snot is made of ice.","Sleet weather.","Stay insidoe.","Skiing weather.","Hat. Coat. Scarf.","Black ice on ground.","Wisconsin.","Gear up! Strong cold winds will hurt your face.","Schools might start to close.","Time to upgrade to a winter coat.","Stay close to a heat source.","Make yourself some hot chocolate.","Time to start wearing long johns.","A heavy toque.","Garbage bags make excellent impromptu sleds.","Danger of frostbite.","Better bundle up, it's cold out there.","Snow will be light and fluffy.","You might actually have to start shovelling daily","East Germany.","Perfect for cross country skiing, but otherwise it's starting to get annoyingly cold.","Mittens, cozy boots, heavy jacket. You might consider moving to San Diego.","Good for playing in the snow, but not for too long.","If the sun is out, it feels like it is mocking you."]},{maxTemp:-11,minTemp:-15,reference:["Winter is hitting really hard this year.","Don't stay out for too long, you might freeze.","Way, way too cold. One pair of pants is insufficient.","No.","Wear two coats.","It is miserable outside, but bearable for a quick chore like taking out the trash.","Considering putting on some warmer socks in the morning.","Multiple layers are a good idea. Coats, hats and gloves.","Ice fishing weather.","Have some soup and tea.","Layers and layers and layers and layers and...","Can't feel my face anymore.","Ice skating!","Windchill.","Just being outside is uncomfortable no matter how many layers you dress in.","Wear a warm hat and a scarf.","It is now cold. Put on some real gloves and maybe some wool socks.","The zipper hurts the bottom of your chin.","Check the transit times to see when they come, and don't stand around if you don't have to.","Time to wear your knitted sweaters.","Indoor recess.","Frostbite","A cold day in Russia.","Warm up the car.","Wear warm clothes and keep inside.","Ski gear activated!","Too cold, this is where it gets to your bones, and if you aren't bundled up, you are boned.","A bit cold for snow activities, but not impossible.","Cold enough to worry about backup heat sources.","Consider moving to Cuba."]},{maxTemp:-16,minTemp:-20,reference:["Eighteen coats and four pairs of socks.","Proof that the Farenheit system does go down to 0!","If school isn't canceled it is criminal.","Far too cold to go out.","Your heating bill is going to feel this.","Okay, where did I leave my warm underlayers?","A bit cold, cover ears if windy.","Keep putting on those layers.","Intense screaming if I ever go outside.","Where am I, Canada?","Elfstedentocht!","Take the train to work.","Don't go outside.","Snot freezes.","It is now cold enough to need more than one sleeping bag if you are tenting.","Warm Mars temperatures.","It might hurt to breath.","Temperature of a freezer.","Getting really cold.","Extremely cold. Too cold for leisurely activities outdoors.","Time for the big coat.","Wear mittens, a scarf, and a hat, and complain as you walk.","Only go outside if you absolutely have to.","Stay indoors and have soup.","This is where your facial hair will freeze.",'Someone\'s singing, "Let it go."',"Fleece long johns.","It's certainly not t-shirt weather anymore.","Frostbite in under 30 minutes!","Oppressive cold.","Winter boots now should be worn.","Freezers are usually around this temperature.","You are hiding inside your Manhattan apartment, complaining to your friends on Facebook about the temperature outside.","Yuck.","No good can come of this weather. Way too cold for playing in snow, often windy and disgusting.","Cold enough to worry about frost ingress, freezing pipes, etc.","Difficult to go outside for long periods of time."]},{maxTemp:-21,minTemp:-25,reference:["If you threw a bucket of boiling water, it would turn to snow before hitting the ground.","Seriously, stay inside by the fireplace","Too cold for longer than 30 minutes outside for most.","Antarctica.","School is only cancelled because someone got frostbite waiting for the bus.","Above Saskatchewan.","Danger or death.","Going to add a warm scarf to wrap up my face so my nose doesn't freeze off.","Cold, cover most of your face.","It's probably colder outside than it is in your freezer.","Car is going to start hard below this point.","Where are you, Siberia?","Stay indoors forever.","Too cold to walk to the train, call uber.","It's cold.","Snot starts to freeze.","Stay inside, hug the radiator.","It is cold enough that you porbably can't get away with just a rain-shell with layers under it. Break out the winter jacket.","Move to a warmer climate.","As cold as it gets in southern Ontario.","Stay out of the wind. Extreme cold.","Wear mittens, scarf, and hat and swear as you walk.","Even the dog isnt sure if it needs to pee that badly.","North Pole Temperature.","Be wary of pipes in your home freezing and make sure your heat system runs properly.","Several coats, gloves, a hat, a scarf.","Watch out for polar bears.","Bitterly cold.","Frostbite in under 15 minutes.","Frostbite weather, but still not too cold to go out, if you need to.","Long underwear is your friend.","Older cars should be idled before starting.","Must wear mittens and hats.","Eskimos.","Time to put on a parka.","Schools begin to cancel due purely to temperature.","Too cold to even warrant a short walk from your car to a grocery store, better hunker down and hope your heater doesn't crap out on you.","Seal leaky windows and doors."]},{maxTemp:-26,minTemp:-30,reference:["The next ice age is upon us.","Don't ever turn off the heat at home.","Colder than some parts of Antarctica.","I feel like an Arctic explorer when I have to go outside.","Maybe dont leave the house unless you really have to.","Polar vortex. Both you and your car will not want to start.","Eyes will hurt if its windy.","Going outside is probably a death sentence at this point.","So cold you can't do anything.","Interior walls are cold at this point.","Where are you, Antarctica?","Call in to work because all the pipes froze in the house and the basement is flooded.","Spit crackles.","Schools close due to extreme cold.","It's cold. Bundle up.","A cold day for anywhere.","Make excuse to stay home.","You'll wish it was too cold to go to work, but they'll make you go anyway.","Uncomfortably cold. Full winter gear necessary.","Greenland","The door to my house is frozen shut. Send help.","Heater is cranked up and it's a death wish to step outside – unless you're Canadian.","Mountaintop.","I hope I can find an animal carcass in case I need to hide inside.","Don't leave the house. Keep the fireplace on.","At this point you can't tell if it gets any colder.","Even Canadians start to feel a little cold.","Backup heat sources required in case of failure."]},{maxTemp:-31,minTemp:-35,reference:["Just stay home.","Don't go outside.","Pretty sure only Russia and Dick Cheney's heart get this cold.","Temperature at which Australians die.","Siberia.","Time for 4 layers of clothing and an extra scarf.","Where are the penguins?","Break and derailer cables on bike likely will not move.","Layer the layers on top of the layers.","I heard that Eskimos think this is warm.","I'm a little popsicle, cold and miserable.","Get plane ticket out of Antarctica.","Your eyeballs start to hurt because of frost.","Everything less than this is not natural for humans.",'My winter boots claim "-60C", but that\'s a bold-faced lie.',"I hear Cuba is nice this time of year--and legal for Americans now. Just saying.","Unsafe outside.","Socially acceptable to drive short distances. Brutal with wind.","Exposed skin is numb after 10 seconds","If I threw it up in the air, I think my hot chocolate would freeze before it hit the ground. I'm not wasting my hot chocolate.","You wonder what the ideal temperature is for freezing meat.","Frozen boogers.","Don't even think about moving away from the fireplace.","Cosider climbing into the freezer for warmth."]},{maxTemp:-36,minTemp:-40,reference:["You probably look like a ball with all those layers.","Fun fact of the day: 40° is the same in fahrenheit and celsius.","I will watch the cold outside while I sip my hot cocoa.","Immediate frostbite. Unless you are a polar bear.","Car probably will not start.","Most things will be cancelled, it is fine to stay home.","No, seriously, are there any penguins outside your window?",'Bad news: You\'ll probably freeze to death Good news: You might get unfrozen in a hundred years and be able to give interviews about "the olden days."',"Eskimos might think this is too cold.","Penguins don't make good neighbors.","Antarctic in winter but on a mild day.","Need specialized clothing.","No skin should be exposed outside."]},{maxTemp:-41,minTemp:-45,reference:["Canadians start to shiver.","Space?","Titan.","I'm cryogenically frozen.","Death by freezing.","It's now stupidly cold ","Stay inside if you can.","Don't have any exposed skin, as you'll get frostbite pretty much instantly.","Perfect weather to freeze to death.","Be wary of Polar Bears.","Elsa wouldnt make it. R.I.P. Arendelle.","Anything significant is way beyond functioning now."]},{maxTemp:-50,minTemp:-55,reference:["Russian teeth chatter.","My taun taun froze.","Pluto.","I want to throw up a container of boiling water and watch it freeze before it hits the ground.","Huddle together around a bonfire for warmth while wearing everything you own.","Reverse hell temperature.","Show no exposed skin outdoors. Mask, scarf, balaclava and goggles required.","Skyrim belongs to the Nords!","Vodka freezes. Stay inside and cry.","Very dead. Several inches of ice coating on all sides.","Pretty cold even for Antartica."]},{maxTemp:-56,minTemp:-60,reference:["Everyone is dead, the new ice age has come.","Hell freezes over.","I think I saw a wampa.","The Arctic circle is not my friend!","So cold that the cold feels hot.","Mars.","Hoth.","Everything is ice and cold and loneliness.","Cold.","Lips are frozen solid.","If EA had a soul, it would be this temperature.","Ha. Ha ha. Haha ha. Hahahahaha. HAHAHAHAHAHAA.","My ex wife's heart in Bermuda on a hot day.","Your electronics have stopped working because of the cold.","Light yourself on fire to stay warm.","Nice. We landed on Mars."]}]}return Object(d["a"])(e,[{key:"getMessage",value:function(e){var t=!0,o=!1,a=void 0;try{for(var r,n=this.referencePoints[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){var i=r.value;if(e<=i.maxTemp&&e>=i.minTemp)return i.reference[Math.floor(Math.random()*i.reference.length)]}}catch(s){o=!0,a=s}finally{try{t||null==n.return||n.return()}finally{if(o)throw a}}}}]),e}(),m=function(){function e(){Object(h["a"])(this,e),this.latitude=24,this.longitde=27,this.name=""}return Object(d["a"])(e,[{key:"update",value:function(e){this.longitude=e.lon,this.latitude=e.lat,this.name=e.name?e.name:""}}]),e}(),y=function(){function e(){Object(h["a"])(this,e),this.temp={k:0,c:0,f:0},this.blurb=""}return Object(d["a"])(e,[{key:"update",value:function(e){var t=e.main.temp,o=e.weather[0].id;this.temp={k:t,c:this.kelvinToCelsius(t),f:this.kelvinToFahrenheit(t)},this.blurb=this.parseWeatherId(o)}},{key:"kelvinToCelsius",value:function(e){return Math.round(10*(e-273.15))/10}},{key:"kelvinToFahrenheit",value:function(e){return Math.round(10*(1.8*e-459.67))/10}},{key:"parseWeatherId",value:function(e){switch(e){case 200:return"Thunderstorm with light rain.";case 201:return"Thunderstorm with rain.";case 202:return"Thunderstorm with heavy rain.";case 210:return"Light thunderstorm.";case 211:return"Thunderstorm.";case 212:return"Heavy thunderstorm.";case 221:return"Ragged thunderstorm.";case 230:return"Thunderstorm with light drizzle.";case 231:return"Thunderstorm with drizzle.";case 232:return"Thunderstorm with heavy drizzle.";case 300:return"Light intensity drizzle.";case 301:return"Drizzle.";case 302:return"Heavy intensity drizzle.";case 310:return"Light drizzle rain.";case 311:return"Drizzle rain.";case 312:return"High intensity drizzle rain.";case 313:return"Rain and drizzle.";case 314:return"Heavy shower rain and drizzle.";case 321:return"Shower drizzle.";case 500:return"Light rain.";case 501:return"Moderate rain.";case 502:return"High intensity rain.";case 503:return"Very heavy rain.";case 504:return"Extreme rain.";case 511:return"Freezing rain.";case 520:return"Low intensity shower.";case 521:return"Shower rain.";case 522:return"Heavy intensity shower rain.";case 531:return"Ragged shower rain.";case 600:return"Light snow.";case 601:return"Snow.";case 602:return"Heavy snow.";case 611:return"Sleet.";case 612:return"Shower sleet.";case 615:return"Light rain and snow.";case 616:return"Rain and snow.";case 620:return"Light shower snow.";case 621:return"Shower snow.";case 622:return"heavy shower snow.";case 701:return"Mist.";case 711:return"Smoke.";case 721:return"Haze.";case 731:return"Sand, dust whirls.";case 741:return"Fog.";case 751:return"Sand.";case 761:return"Dust.";case 762:return"Volcanic ash.";case 771:return"Squalls.";case 781:return"Tornado.";case 800:return"Clear.";case 801:return"Few clouds.";case 802:return"Scattered clouds.";case 803:return"Broken clouds.";case 804:return"Overcast.";case 900:return"Tornado.";case 901:return"Tropical storm.";case 902:return"Hurricane.";case 903:return"Cold.";case 904:return"Hot.";case 905:return"Windy.";case 906:return"Hail.";case 951:return"Calm.";case 952:return"Light breeze.";case 953:return"Gentle breeze.";case 954:return"Moderate breeze.";case 955:return"Fresh breeze.";case 956:return"Strong breeze.";case 957:return"High winds.";case 958:return"Gale.";case 959:return"Severe gale.";case 960:return"Storm.";case 961:return"Violent storm.";case 962:return"Hurricane.";default:return"Not available."}}}]),e}(),f=(o("28a5"),function(){function e(){Object(h["a"])(this,e)}return Object(d["a"])(e,[{key:"set",value:function(e,t,o){var a=new Date;a.setTime(a.getTime()+24*o*60*60*1e3);var r="expires="+a.toUTCString();document.cookie=e+"="+t+"; "+r}},{key:"get",value:function(e){for(var t=e+"=",o=document.cookie.split(";"),a=0;a<o.length;a++){var r=o[a];while(" "==r.charAt(0))r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}}]),e}()),g={name:"app",components:{},data:function(){return{message:"",tempString:"",isCelsius:!0,location:new m,weather:new y,repo:new c,cookieManager:new f}},mounted:function(){var e=this;this.cookieManager.get("scale")||this.cookieManager.set("scale","c",30),this.isCelsius="c"===this.cookieManager.get("scale"),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.location.update({lon:t.coords.longitude,lat:t.coords.latitude}),e.updateWeather()})},methods:{refreshMessage:function(e){this.message=this.repo.getMessage(Math.round(e?this.weather.temp.c:e))},toggleScale:function(){this.isCelsius=!this.isCelsius,this.isCelsius?this.cookieManager.set("scale","c",30):this.cookieManager.set("scale","f",30)},useIp:function(){var e=this;axios.get("http://ip-api.com/json").then(function(t){e.location.update(t.data),e.updateWeather()})},updateWeather:function(){var e=this,t=this.location.latitude,o=this.location.longitude;axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+o+"&APPID=7271d3292aac8f43062a11e66a3aa1b0").then(function(t){e.location.update({name:t.data.name}),e.weather.update(t.data),e.refreshMessage(e.weather.temp.c)})}}},w=g,p=(o("034f"),o("2877")),b=Object(p["a"])(w,l,u,!1,null,null,null);b.options.__file="App.vue";var k=b.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(k)}}).$mount("#app")},"64a9":function(e,t,o){}});
//# sourceMappingURL=app.edc89379.js.map