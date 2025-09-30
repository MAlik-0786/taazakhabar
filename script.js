window.onload = function() {
async function fetchdata(query) {
    const API_KEY = "0ba851d9606b46d89754bfaa2dfe3178";
    const URL = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}`
    try {
        document.querySelector(".home_card").innerHTML = `<div class="d-flex justify-content-center">
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only"></span>
  </div>
</div>`;
document.querySelector(".newscard").innerHTML = "";

        // fetching api
       // const response = await fetch(URL);
        let response = {
            "status": "ok",
            "totalResults": 51320,
            "articles": [
              {
                "source": {
                  "id": null,
                  "name": "Yahoo Entertainment"
                },
                "author": "Will Shanklin",
                "title": "Everything Apple announced during its unofficial Mac Week",
                "description": "Following the illustrious line of calendar-spanning corporate events like Lobsterfest and Shark Week, Apple tried something new this year with a celebration unofficially known as Mac Week. (Fortunately for Apple, it just so happens to coincide with its earnin…",
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_c32e977d-97fc-463b-bc24-4576a92cbe19",
                "urlToImage": null,
                "publishedAt": "2024-10-30T21:01:15Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-08T13:30:51Z",
                "content": "[Removed]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Brittany Vincent",
                "title": "Time Doesn’t Wait, This 26% Off Canon Portable Document Scanner Will Last Until Tonight Only for Prime Day",
                "description": "Preserve and save everything from receipts to bank statements and everything in between, thanks to this prime day deal.",
                "url": "https://gizmodo.com/time-doesnt-wait-this-26-off-canon-portable-document-scanner-will-last-until-tonight-only-for-prime-day-2000510186",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/canon-document-scanner.jpg",
                "publishedAt": "2024-10-09T21:47:46Z",
                "content": "Physical paper isn’t always forever. It’s more important than ever these days to keep your important documents safe and easily accessible. You could do this with a built-in app on your iPhone, a thir… [+2130 chars]"
              },
              {
                "source": {
                  "id": "the-verge",
                  "name": "The Verge"
                },
                "author": "Jess Weatherbed",
                "title": "Adobe Max 2024: All the major announcements around design and AI",
                "description": "Here’s everything announced at this year’s Adobe Max conference, from a new Firefly AI video model to fresh features and updates for Creative Cloud apps.",
                "url": "https://www.theverge.com/2024/10/14/24269859/adobe-max-2024-major-announcements-stream",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/IQ9lZfS-AEiVpW3_a_ao75HbUBc=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23624357/acastro_STK124_03.jpg",
                "publishedAt": "2024-10-14T14:21:29Z",
                "content": "Adobe usually makes plenty of big product launches and updates at its annual MAX event, and this years design conference is no exception. The creative software giant has announced its first generativ… [+2963 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "BBC News"
                },
                "author": null,
                "title": "'Unrwa means everything to us': Gazans fear aid collapse",
                "description": "People in war-torn Gaza are already struggling with a deep humanitarian crisis but now they fear it will get much more difficult.",
                "url": "https://www.bbc.com/news/articles/cr4lryx7304o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a748/live/a30231b0-961e-11ef-90df-3f1823a91773.jpg",
                "publishedAt": "2024-10-29T18:09:53Z",
                "content": "People in war-torn Gaza are already struggling with a deep humanitarian crisis - but now they fear it will get much more difficult because of Israels ban on the biggest UN agency which operates there… [+4160 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Seths.blog"
                },
                "author": "Seth Godin",
                "title": "Everything costs",
                "description": "But not all costs are the same. There are three kinds of costs that people get confused about, but understanding them, really understanding them–in your bones–unlocks opportunity. Opportunity cost: If you eat the cupcakes, you can’t also eat the brownies. Eve…",
                "url": "https://seths.blog/2024/10/everything-costs/",
                "urlToImage": "https://seths.blog/wp-content/uploads/2018/06/seth_godin_ogimages_v02_180613-1.jpg",
                "publishedAt": "2024-10-09T08:44:00Z",
                "content": "But not all costs are the same.\r\nThere are three kinds of costs that people get confused about, but understanding them, really understanding them–in your bones–unlocks opportunity.\r\nOpportunity cost:… [+1112 chars]"
              },
              {
                "source": {
                  "id": "the-verge",
                  "name": "The Verge"
                },
                "author": "The Verge Staff",
                "title": "The Verge’s guide to the 2024 presidential election",
                "description": "Vice President Kamala Harris is taking on former President Donald Trump. The election will determine the future of everything from electric cars to the entire legal system to to our democracy itself.",
                "url": "https://www.theverge.com/24279527/2024-presidential-election-guide-tech-policy",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/xG8M1zPOXmzE0IyEhJkVRhrpB_Y=/0x0:2040x1360/1200x628/filters:focal(1105x362:1106x363)/cdn.vox-cdn.com/uploads/chorus_asset/file/25693279/247224_Election_Package__Mr.Nelson_design_HUB.jpg",
                "publishedAt": "2024-10-29T13:43:57Z",
                "content": "A presidential campaign is an expression of ideology, often vocalized as a number of promises. Sometimes, those promises are made even when theyre outside the scope of what a president can enact. Wit… [+1159 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
                "title": "Bluetooth 6: Everything you need to know",
                "description": "Changes to the core Bluetooth specifications will bring improvements with real benefits.",
                "url": "https://www.androidcentral.com/phones/bluetooth-6",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/oobk8p4GSM7xfNDMfLoPRZ-1200-80.jpg",
                "publishedAt": "2024-10-31T20:17:22Z",
                "content": "The Bluetooth SIG has finalized the Bluetooth 6.0 specifications, and soon, we'll start seeing devices that support it. Most of the time, this means a bunch of words and different numbers on a spec s… [+6662 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "MacRumors"
                },
                "author": "Juli Clover",
                "title": "Everything New in iOS 18.2 Beta 1",
                "description": "Apple released the first iOS 18.2 beta for developers today, and while it's only available on devices that support Apple Intelligence, there are a slew of features that will be available for everyone when the software eventually sees a release.\n\n\n\n\n\nThis guid…",
                "url": "https://www.macrumors.com/guide/ios-18-2-beta-features/",
                "urlToImage": "https://images.macrumors.com/t/9QYrKGN7DCjAIIQvkbgkjuswS_0=/2500x/article-new/2024/09/Apple-Intelligence-General-Feature-2.jpg",
                "publishedAt": "2024-10-23T20:51:36Z",
                "content": "Apple released the first iOS 18.2 beta for developers today, and while it's only available on devices that support Apple Intelligence, there are a slew of features that will be available for everyone… [+4422 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
                "title": "Not everything has to be so scandalous. Or does it?",
                "description": "Making mountains out of molehills leaves you with tiny little mountains that are still only molehills in the end.",
                "url": "https://www.androidcentral.com/phones/google-pixel-9-android-15-stingray-protection-support",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/dbHJ5cMcCGriMRdKQmMRsA-1200-80.jpg",
                "publishedAt": "2024-10-17T20:13:04Z",
                "content": "If there is one thing Android users do better than anyone else, it's making a fuss over things that aren't really mysterious or misleading. Thanks to internet brand rivalry and one-sided loyalty to a… [+4188 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "MacRumors"
                },
                "author": "Juli Clover",
                "title": "Genmoji in iOS 18.2: Everything You Need to Know",
                "description": "If you've ever wanted an obscure emoji that the Unicode Consortium just hasn't gotten around to adding to the emoji lineup, Genmoji in iOS 18.2 offers a solution. In the iOS 18.2 beta right now, Genmoji lets you create custom emoji characters that can be used…",
                "url": "https://www.macrumors.com/guide/genmoji/",
                "urlToImage": "https://images.macrumors.com/t/3hgGW7NikCkjOITsSbTn7FuSZTM=/2500x/article-new/2024/11/Genmoji-Feature-2.jpg",
                "publishedAt": "2024-11-01T22:28:23Z",
                "content": "If you've ever wanted an obscure emoji that the Unicode Consortium just hasn't gotten around to adding to the emoji lineup, Genmoji in iOS 18.2 offers a solution. In the iOS 18.2 beta right now, Genm… [+8725 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Sean Booker",
                "title": "Everything to Know Ahead of Life is Strange: Double Exposure",
                "description": "Let's break down how much of the previous story is relevant in order to best enjoy this new entry.",
                "url": "https://www.cnet.com/tech/gaming/everything-to-know-ahead-of-life-is-strange-double-exposure/",
                "urlToImage": "https://www.cnet.com/a/img/resize/c0155a77ad7955fc77d1bf6a6d379ad339479f60/hub/2024/10/26/f3221c2d-f3ff-4c02-bd4d-d4b30aafcadf/04-max-at-the-crime-scene-copy.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-28T16:00:06Z",
                "content": "The original Life is Strange, a narrative-heavy game developed by studio Don't Nod, launched in 2015 to great acclaim and was followed by numerous sequels. With the exception of one prequel to the in… [+4942 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Hackaday"
                },
                "author": "Bryan Cockfield",
                "title": "Using the 555 for Everything",
                "description": "The 555 timer is one of the most versatile integrated circuits available. It can generate PWM signals, tones, and single-shot pulses. You can even put one in a bi-stable mode similar to a flip flop…",
                "url": "https://hackaday.com/2024/10/14/using-the-555-for-everything/",
                "urlToImage": "https://hackaday.com/wp-content/uploads/2024/10/555-main.png",
                "publishedAt": "2024-10-14T11:00:25Z",
                "content": "The 555 timer is one of the most versatile integrated circuits available. It can generate PWM signals, tones, and single-shot pulses. You can even put one in a bi-stable mode similar to a flip flop. … [+1821 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "MacRumors"
                },
                "author": "Juli Clover",
                "title": "iOS 18.2: Everything You Should Know About Image Playground",
                "description": "iOS 18.2 includes the first image generation technologies that are coming to Apple Intelligence, including Image Playground. Image Playground is Apple's dedicated image creation app that can build cartoon-like pictures based on text descriptions.\n\n\n\n\n\nThis gu…",
                "url": "https://www.macrumors.com/guide/image-playground/",
                "urlToImage": "https://images.macrumors.com/t/Di4pStwkNT2e97bemSF614S01Y8=/2000x/article-new/2024/10/image-playground-ios-18-2.jpg",
                "publishedAt": "2024-10-25T22:35:51Z",
                "content": "iOS 18.2 includes the first image generation technologies that are coming to Apple Intelligence, including Image Playground. Image Playground is Apple's dedicated image creation app that can build ca… [+10307 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "MacRumors"
                },
                "author": "Juli Clover",
                "title": "Everything You Need to Know About Apple Intelligence",
                "description": "Apple Intelligence is what Apple is calling its artificial intelligence feature set, previewed at WWDC in June 2024. The first Apple Intelligence features launched with iOS 18.1, iPadOS 18.1, and macOS Sequoia 15.1, but this is only an initial taste of what A…",
                "url": "https://www.macrumors.com/guide/apple-intelligence/",
                "urlToImage": "https://images.macrumors.com/t/QXQ3qDkhrxMrGY5_SLp7tyYc6bg=/1600x/article-new/2024/09/apple-intelligence-black.jpeg",
                "publishedAt": "2024-10-28T20:19:04Z",
                "content": "Apple Intelligence is what Apple is calling its artificial intelligence feature set, previewed at WWDC in June 2024. The first Apple Intelligence features launched with iOS 18.1, iPadOS 18.1, and mac… [+17695 chars]"
              },
              {
                "source": {
                  "id": "time",
                  "name": "Time"
                },
                "author": "Chris Stokel-Walker",
                "title": "Everything in Ultra-High-Def",
                "description": "Old classics shown in standard- or high-definition can look not so great on today’s ultra-high definition televisions. So Samsung is putting AI to the task in its Neo QLED 8K TV, also called the QN900D. A built-in processor helps power an upscaling algorithm …",
                "url": "https://time.com/7094592/samsung-neo-qled-8k-tv/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/10/Samsung-Neo-QLED-8K-TV-best-inventions.jpg?quality=85&w=1200&h=628&crop=1",
                "publishedAt": "2024-10-30T12:01:04Z",
                "content": "Old classics shown in standard- or high-definition can look not so great on todays ultra-high definition televisions. So Samsung is putting AI to the task in its Neo QLED 8K TV, also called the QN900… [+296 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "patrick.farmer@futurenet.com (Patrick Farmer)",
                "title": "The best Black Friday Google Pixel 9 deals 2024 — epic discounts, free wireless, and more",
                "description": "If you're hoping to buy any Google Pixel 9 this holiday season, this guide has everything you need to know.",
                "url": "https://www.androidcentral.com/phones/the-best-black-friday-google-pixel-9-deals-year-epic-discounts-free-wireless-and-more",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/4r9KVeMMCpgJrPVEotLeBW-1200-80.jpg",
                "publishedAt": "2024-10-21T20:28:12Z",
                "content": "Google's latest flagship has been out for several months now, and with the Black Friday sales approaching, many folks are on the hunt for the best Pixel 9 deals. Whether you want the base model Pixel… [+1788 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Jesse Orrall",
                "title": "Elon Musk Shares Vision for Optimus Robots at 'We, Robot' Event video",
                "description": "Elon Musk put Tesla's Optimus robots to work at the 'We, Robot' event. Here's everything you need to know.",
                "url": "https://www.cnet.com/videos/elon-musk-shares-vision-for-optimus-robots-at-we-robot-event/",
                "urlToImage": "https://www.cnet.com/a/img/resize/175bdcd5619844cfcc68828c6b64422e9177b4e7/hub/2024/10/11/0a7262d0-2241-43c1-9304-6d4046381f09/241010-site-we-robot-event-tesla-optimus-robot-reaction-2.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-11T07:38:00Z",
                "content": ""
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Matt Elliott",
                "title": "Commanders vs. Giants Livestream: How to Watch NFL Week 9 Online Today",
                "description": "Want to watch Washington play New York? Here's everything you need to stream Sunday's 1 p.m. ET game on Fox.",
                "url": "https://www.cnet.com/tech/services-and-software/commanders-vs-giants-livestream-how-to-watch-nfl-week-9-online-today/",
                "urlToImage": "https://www.cnet.com/a/img/resize/5ecdf8f54c4fef953290c2ee31a134ae5effc393/hub/2024/11/01/580cf58d-6dbc-4666-b350-99dd4165fbea/gettyimages-2179971951.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-11-03T15:00:09Z",
                "content": "When to watch the Commanders vs. Giants game? \r\n<ul><li> Sunday, Nov. 3 at 1 p.m. ET (10 a.m. PT).  </li></ul>Where to watch? \r\n<ul><li> The Commanders and Giants game will air on Fox.  </li></ul>Few… [+5297 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Matt Elliott",
                "title": "Bills vs. Seahawks Livestream: How to Watch NFL Week 8 Online Today",
                "description": "Want to watch Buffalo play Seattle? Here's everything you need to stream Sunday's 1:05 p.m. PT game on Fox.",
                "url": "https://www.cnet.com/tech/services-and-software/bills-vs-seahawks-livestream-how-to-watch-nfl-week-8-online-today/",
                "urlToImage": "https://www.cnet.com/a/img/resize/ed0b272e42cf46d900c81525695b840a34e6a1c7/hub/2024/10/25/773b1f86-06aa-43a0-af75-958036d75b67/gettyimages-2180346123.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-27T17:05:03Z",
                "content": "When to watch the Bills vs. Seahawks? \r\n<ul><li> Sunday, Oct. 27 at 1:05 p.m. PT (4:05 p.m. ET).  </li></ul>Where to watch? \r\n<ul><li> The Bills-Seahawks game will air on Fox.  </li></ul>The division… [+5249 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Matt Elliott",
                "title": "Cowboys vs. Falcons Livestream: How to Watch NFL Week 9 Online Today",
                "description": "Want to watch Dallas play Atlanta? Here's everything you need to stream Sunday's 1 p.m. ET game on Fox.",
                "url": "https://www.cnet.com/tech/services-and-software/cowboys-vs-falcons-livestream-how-to-watch-nfl-week-9-online-today/",
                "urlToImage": "https://www.cnet.com/a/img/resize/f8e5162051b6bbc4a1a24133a7efb3aadb18be2f/hub/2024/11/01/25313ad4-fb70-4abb-b63f-70b2650433e9/gettyimages-2181630836.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-11-03T15:00:12Z",
                "content": "When to watch the Cowboys vs. Falcons? \r\n<ul><li> Sunday, Nov. 3 at 1 p.m. ET (10 a.m. PT).  </li></ul>Where to watch? \r\n<ul><li> The Cowboys-Falcons game will air on Fox.  </li></ul>The Cowboys are … [+5190 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "nickodiaz@sbcglobal.net (Nickolas Diaz)",
                "title": "Google is reportedly creating an AI agent for Chrome that does everything for you",
                "description": "A report claimed Google is working on \"Project Jarvis\" for in-browser task automation.",
                "url": "https://www.androidcentral.com/apps-software/google-project-jarvis-ai-agent-report",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/ttdr4NpR2qNPNX8YSYn7ye-1200-80.jpg",
                "publishedAt": "2024-10-28T19:26:51Z",
                "content": "What you need to know\r\n<ul><li>Google is reportedly working on \"Project Jarvis,\" an AI agent designed to automate simple tasks while browsing the web in Chrome.</li><li>Alleged sources claim Jarvis w… [+3109 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
                "title": "OnePlus 14: Everything we know (so far) and want to see",
                "description": "OnePlus just launched the OnePlus 13, and while the OnePlus 14 is still a year away, we can guess some of its key features.",
                "url": "https://www.androidcentral.com/phones/oneplus-14",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/GnPze5fyzHuLY7FMUtPGNY-1200-80.jpg",
                "publishedAt": "2024-11-04T06:21:55Z",
                "content": "OnePlus just launched the OnePlus 13 in China, and the phone is set to go on sale in global markets over the coming weeks. While the focus is clearly on the OnePlus 13, I like looking ahead to what's… [+3490 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
                "title": "OPPO SuperVOOC: Here's everything you need to know about the best fast charging tech on Android",
                "description": "OPPO's SuperVOOC is a 100W fast charging tech that's different to other charging standards, and it is incredible. The best part is that it is available on all OnePlus phones as well, so let's take a look at how the tech works.",
                "url": "https://www.androidcentral.com/phones/oppo-supervooc",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/vUaDdW2oEvZuYhsYBY8jqn-1200-80.jpg",
                "publishedAt": "2024-10-17T08:03:39Z",
                "content": "All Android phones have fast charging built in, but not all standards are created equal. While several brands rely on USB's standard Power Delivery, Chinese manufacturers use their own tech instead, … [+9748 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "Nicholas Sutrich",
                "title": "Drop everything! My favorite budget phone just got a HUGE price drop ahead of Black Friday",
                "description": "Looking for a new phone this year? Save some cash and get one of the fastest phones available for an unbelievably low price.",
                "url": "https://www.androidcentral.com/phones/oneplus-12r-november-2024-deal",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/ySbiJ6adHJMF22MK9vwZZQ-1200-80.jpg",
                "publishedAt": "2024-11-04T18:46:24Z",
                "content": "Earlier this year, OnePlus dropped an unexpectedly incredible budget-minded phone and now the OnePlus 12R is at one of best prices we've ever seen. Best Buy is selling it for a cool $70 off, making t… [+1975 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Simon Lucas",
                "title": "Technics SC-CX700 Review: Faithful Musical Reproduction",
                "description": "These gorgeous powered speakers bring some much-needed competition to KEF’s LS50 line.",
                "url": "https://www.wired.com/review/technics-sc-cx700/",
                "urlToImage": "https://media.wired.com/photos/671fef072c4f080bbb754e8e/191:100/w_1280,c_limit/Technics-SC-CX700-Wireless-Speakers-Reviewer-Collage-102024-SOURCE-Parker-Hall.jpg",
                "publishedAt": "2024-10-29T14:03:00Z",
                "content": "The primary speaker features a few physical controls across its top surface, but greater control is available via an unglamorous remote control handset. Theres also the Technics Audio Center control … [+1739 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Megan Farokhmanesh",
                "title": "The Follow-Up to One of 2024’s Best Games May Never Happen",
                "description": "In April, “House of the Dragon” star Abubakar Salim released “Tales of Kenzera: Zau.” He already has an idea for an Afro-cyberpunk follow-up, he just has to overcome funding obstacles and YouTube trolls to make it.",
                "url": "https://www.wired.com/story/the-follow-up-to-one-of-2024s-best-games-may-never-happen/",
                "urlToImage": "https://media.wired.com/photos/6721122cb34e9441edd1870b/191:100/w_1280,c_limit/Sequel-May-Never-Happen-Culture-Uso_EnvironmentConcept2.jpg",
                "publishedAt": "2024-11-05T12:00:00Z",
                "content": "In game development, iteration is everything. Developers learn how to make games by actually making them. Surgent is no different. With their first game they built a team and found their voice. Now, … [+2409 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Laura Leavitt",
                "title": "Everything to Know About Anxiety: Signs to Watch for and How to Cope",
                "description": "Feeling anxious or overwhelmed sometimes is completely normal. But how do you know when it passes into the territory of being an anxiety disorder?",
                "url": "https://www.cnet.com/health/mental/everything-to-know-about-anxiety-signs-to-watch-for-and-how-to-cope/",
                "urlToImage": "https://www.cnet.com/a/img/resize/343c98cbae5a0097a12885f9420224d4e791ae4b/hub/2022/09/23/c569255e-33a7-4cf3-98bc-f59db078c2c3/gettyimages-1356562872.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-08T15:00:03Z",
                "content": "It's Mental Illness Awareness Week, making it a great time to talk about one of the most common mental illnesses in the US: Anxiety. An estimated 40 million adults report having anxiety every year. \r… [+10728 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Barbara Pazur",
                "title": "What Is Midjourney? Everything to Know About the AI Image Generator",
                "description": "Have you been wanting to experiment with the popular text-to-image generator? Here's what you need to know about the AI tool.",
                "url": "https://www.cnet.com/tech/services-and-software/what-is-midjourney-everything-to-know-about-the-ai-image-generator/",
                "urlToImage": "https://www.cnet.com/a/img/resize/b117573dffb1b4cd4dab98397d7a336043e0f185/hub/2024/06/12/0a354984-2ab0-49ed-9d34-69e4e12ad3a3/girl-at-piano.png?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-30T12:00:00Z",
                "content": "Midjourney is a text-to-image bot on Discord, the popular social platform for gamers. A lot of graphic designers and artists love it, but it's also useful for anyone curious about AI-generated art — … [+8000 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Adam Oram",
                "title": "Amazon Black Friday Sale: Early Deals and Everything You Need to Know",
                "description": "We've broken down what you can expect from this year's sale, and collected some of the best early deals already available.",
                "url": "https://www.cnet.com/deals/amazon-black-friday-deals/",
                "urlToImage": "https://www.cnet.com/a/img/resize/ad3ef896d2b455c7def22b3ebade7f5aedb62885/hub/2024/10/23/8cb0b746-8105-4f89-a44a-510e2cbef344/black-friday-2024-amazon.png?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-30T09:45:00Z",
                "content": "Zooey Liao/CNET\r\nThough it's still a few weeks away, the Black Friday buzz is already well underway. Some major retailers like Walmart are already releasing details of what we can expect from this ye… [+4388 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "sharmarajat@zoho.com (Rajat Sharma)",
                "title": "Samsung's Galaxy A35 5G gets 25% slashed off its already awesome price for Prime Big Deal Days",
                "description": "Available at a 25% discount during Amazon's Prime Big Deal Days sale, the Samsung Galaxy A35 5G has everything you need in a modern-day smartphone.",
                "url": "https://www.androidcentral.com/phones/samsungs-galaxy-a35-5g-gets-25-percent-slashed-off-its-already-awesome-price-for-prime-big-deal-days",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/5KbF9kMuV9iQyEe6qNrRxQ-1200-80.jpg",
                "publishedAt": "2024-10-08T15:00:35Z",
                "content": "Among the more recent additions in the company's mid-range line-up, the Samsung Galaxy A35 5G offers a diverse range of features, many of which are usually found in much more expensive smartphones. U… [+2374 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "yorknectar@gmail.com (Judy Sanhz)",
                "title": "Is the Oura Ring 4 waterproof?",
                "description": "Is the Oura Ring 4 waterproof? The answer is quick and easy to understand, but here is everything you need to know to keep your wearable safe.",
                "url": "https://www.androidcentral.com/wearables/is-the-oura-ring-4-waterproof",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/5fUZtXkXsQyBx4L2G3858h-1200-80.jpg",
                "publishedAt": "2024-10-15T05:54:38Z",
                "content": "Is the Oura Ring 4 waterproof?\r\nYes! The Oura Ring 4 is waterproof up to 100 meters or 330 feet, but there are more important details to remember. \r\nHow much water can the Oura Ring 4 resist?\r\nThe Ou… [+2626 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Thomas Kika",
                "title": "Early Voting Underway in New York, New Jersey, and Florida: Every State's Key Dates",
                "description": "Early voting began in a handful of major states this weekend, so here's everything you need to know about it in each state.",
                "url": "https://www.cnet.com/news/politics/early-voting-underway-in-new-york-new-jersey-and-florida-every-states-key-dates/",
                "urlToImage": "https://www.cnet.com/a/img/resize/cdddd11d67da2196ce031e086466e286a8fb3123/hub/2020/11/03/3080afc7-e104-4a35-a042-49666f11e0e6/i-voted-ballots-elections-election-2020-1928.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-28T20:05:00Z",
                "content": "Early voting periods have officially begun in all but five states, with major states like Florida and New York joining the fray this weekend. This close to Election Day -- Nov. 5, 2024 -- some places… [+10120 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Matt Elliott",
                "title": "Saints vs. Chargers Livestream: How to Watch NFL Week 8 Online Today",
                "description": "Want to watch New Orleans play Los Angeles? Here's everything you need to stream Sunday's 1:05 p.m. PT game on Fox.",
                "url": "https://www.cnet.com/tech/services-and-software/saints-vs-chargers-livestream-how-to-watch-nfl-week-8-online-today/",
                "urlToImage": "https://www.cnet.com/a/img/resize/2fe5f34fc4ff58605ddeb511a37b9a576f98818d/hub/2024/10/25/36aaf856-8333-4da0-9d9f-9f6cd23f4452/gettyimages-2180578751.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-27T17:05:06Z",
                "content": "When to watch the Saints vs. Chargers? \r\n<ul><li> Sunday, Oct. 27 at 1:05 p.m. PT (4:05 p.m. ET).  </li></ul>Where to watch? \r\n<ul><li> The Saints vs. Chargers game will air on Fox.</li></ul>The 2-5 … [+5197 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Sean Jackson",
                "title": "Banish Night-Time Anxiety With the Cognitive Shuffling Sleep Hack",
                "description": "Cognitive shuffling is the latest sleep hack that has gone viral on TikTok. Here's everything you need to know about how to do it.",
                "url": "https://www.cnet.com/health/sleep/banish-night-time-anxiety-with-the-cognitive-shuffling-sleep-hack/",
                "urlToImage": "https://www.cnet.com/a/img/resize/344a742778b3ff9424f4e88bb76db4d238c323f7/hub/2024/08/20/d0b44740-4f7c-4f94-967d-c1efcee7b9b1/gettyimages-1420996730.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-23T16:00:06Z",
                "content": "Between 50 and 70 million Americans struggle to sleep well. While that might not seem like a big deal, not getting enough restorative sleep over time can make you more susceptible to a plethora of he… [+3715 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Matt Elliott",
                "title": "Lions vs. Packers Livestream: How to Watch NFL Week 9 Online Today",
                "description": "Want to watch Detroit play Green Bay? Here's everything you need to stream Sunday's 4:25 p.m. ET game on Fox.",
                "url": "https://www.cnet.com/tech/services-and-software/lions-vs-packers-livestream-how-to-watch-nfl-week-9-online-today/",
                "urlToImage": "https://www.cnet.com/a/img/resize/3493caed8497cdaf6c89798871c73aeb27e468d0/hub/2024/11/01/b8d56119-273a-41b6-bf4c-2950c6c7672b/gettyimages-2181753274.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-11-03T18:25:10Z",
                "content": "When to watch the Lions vs. Packers? \r\n<ul><li> Sunday, Nov. 3 at 4:25 p.m. ET (1:25 p.m. PT).  </li></ul>Where to watch? \r\n<ul><li> The Lions-Packers game will air on Fox.  </li></ul>The Lions take … [+5303 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "Matt Elliott",
                "title": "Rams vs. Seahawks Livestream: How to Watch NFL Week 9 Online Today",
                "description": "Want to watch Los Angeles play Seattle? Here's everything you need to stream Sunday's 4:25 p.m. ET game on Fox.",
                "url": "https://www.cnet.com/tech/services-and-software/rams-vs-seahawks-livestream-how-to-watch-nfl-week-9-online-today/",
                "urlToImage": "https://www.cnet.com/a/img/resize/e63f57b3ad8d1c5eb4222d831aa24fd041ec5b85/hub/2024/11/01/4b3c0bcb-072b-46a1-876e-7559dbf962d1/gettyimages-2181388411.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-11-03T18:25:04Z",
                "content": "When to watch the Rams vs. Seahawks? \r\n<ul><li> Sunday, Nov. 3 at 4:25 p.m. ET (1:25 p.m. PT).  </li></ul>Where to watch? \r\n<ul><li> The Rams-Seahawks game will air on Fox.  </li></ul>The NFC West ra… [+5113 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "NPR"
                },
                "author": "Brittney Melton",
                "title": "Everything you need to know on Election Day. And, how to reduce political stress",
                "description": "It's Election Day and both presidential candidates have concluded their campaigns. Here's everything you need to know including how NPR calls the races. And, advice on reducing political stress.",
                "url": "https://www.npr.org/2024/11/05/g-s1-32386/up-first-newsletter-election-day-kamala-harris-donald-trump",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3600x2025+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F6e%2F5d%2F5ff126d5423e9f6e628909215ad5%2Fdiptych-27.jpg",
                "publishedAt": "2024-11-05T12:50:06Z",
                "content": "Good morning. You're reading the Up First newsletter. Subscribe here to get it delivered to your inbox, and listen to the Up First podcast for all the news you need to start your day.\r\nToday's top st… [+4868 chars]"
              },
              {
                "source": {
                  "id": "the-verge",
                  "name": "The Verge"
                },
                "author": "David Pierce",
                "title": "Alexa at 10: Amazon’s assistant is a winner and a failure",
                "description": "Amazon’s Echo launched in 2014, and since then has helped create a voice-first revolution. But as AI takes over, the questions remain about what these devices are for.",
                "url": "https://www.theverge.com/2024/11/5/24288352/amazon-alexa-anniversary-ai-llm-assistant-vergecast",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/eMMaGLFVmtcyAkrXVJSDd5_WekA=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25715695/VST_1105_SIte.jpg",
                "publishedAt": "2024-11-05T13:47:21Z",
                "content": "Image: Alex Parkin / The Verge\r\n\n \n\n Alexa didn’t get a big splashy launch event, or come with a bunch of grand proclamations about being the future of anything. Instead, like a phone charger with a … [+2304 chars]"
              },
              {
                "source": {
                  "id": "espn",
                  "name": "ESPN"
                },
                "author": "Stephen Holder",
                "title": "Colts 'evaluating everything'; Richardson still QB1",
                "description": "Colts coach Shane Steichen said he's \"evaluating everything\" amid Anthony Richardson's struggles, but said the QB's decision to rest for a play won't be a factor.",
                "url": "https://www.espn.com/nfl/story/_/id/42057121/colts-evaluating-everything-amid-anthony-richardson-struggles",
                "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1027%2Fr1406786_1296x729_16%2D9.jpg",
                "publishedAt": "2024-10-28T19:46:36Z",
                "content": "Indianapolis Colts coach Shane Steichen said he's \"evaluating\" the quarterback situation amid Anthony Richardson's recent struggles, but the coach indicated that Richardson's surprising decision to a… [+4032 chars]"
              },
              {
                "source": {
                  "id": "business-insider",
                  "name": "Business Insider"
                },
                "author": "Lauren Crosby Medlicott",
                "title": "I had to downsize before a move. I found a box of my kids' baby clothes and relived so many memories.",
                "description": "Karen Siwak's children are now adults and they didn't want to hold on to their baby clothes. She went through everything remembering the early days.",
                "url": "https://www.businessinsider.com/downsizing-going-through-baby-clothes-donating-motherhood-2024-10",
                "urlToImage": "https://i.insider.com/6708322aa7031864928107d3?width=1200&format=jpeg",
                "publishedAt": "2024-10-16T10:42:01Z",
                "content": "Karen Siwak kept many of the clothes her kids wore when they were little.Courtesy of Karen Siwak\r\n<ul><li>Karen Siwak is a 61-year-old woman in Toronto.</li><li>She was the mother and primary caretak… [+3259 chars]"
              },
              {
                "source": {
                  "id": "business-insider",
                  "name": "Business Insider"
                },
                "author": "Meghan Cook",
                "title": "Every single Paul Rudd movie, ranked by critics",
                "description": "Paul Rudd has been in over 60 movies that critics have both hated and loved — and he's played everything from one of the Beatles to a superhero.",
                "url": "https://www.businessinsider.com/paul-rudd-movies-ranked-worst-to-best-critic-scores",
                "urlToImage": "https://i.insider.com/5d7a77fa6f24eb291c481298?width=1200&format=jpeg",
                "publishedAt": "2024-10-15T17:03:25Z",
                "content": "Paul Rudd has been in a whole lot of films.Universal/Magnolia Pictures/DreamWorks\r\n<ul>\n<li>Paul Rudd has been in a wide range of films, from romantic comedies to superhero flicks. </li>\n<li>Business… [+28560 chars]"
              },
              {
                "source": {
                  "id": "business-insider",
                  "name": "Business Insider"
                },
                "author": "Nora Naughton",
                "title": "Tesla Cybertruck: What to know about the truck's price, specs, range, and customer reactions",
                "description": "The Cybertruck is the latest addition to Tesla's electric lineup. Here's everything we know about its price, specs, range, and more.",
                "url": "https://www.businessinsider.com/cybertruck",
                "urlToImage": "https://i.insider.com/669ebaed2d66759f66fd13ce?width=1200&format=jpeg",
                "publishedAt": "2024-10-08T19:31:20Z",
                "content": "The Cybertruck is Tesla's new electric pickup truck available for order. Graham Rapier/Business Insider\r\n<ul><li>The Cybertruck is the newest addition to Tesla's electric lineup.</li><li>You can orde… [+6017 chars]"
              },
              {
                "source": {
                  "id": "business-insider",
                  "name": "Business Insider"
                },
                "author": "Kenneth Niemeyer",
                "title": "Reddit is becoming the new Google",
                "description": "Reddit CEO Steve Huffman says more people are coming to the site for search as they learn it has is 'everything you're looking for'",
                "url": "https://www.businessinsider.com/reddit-google-search-ceo-steve-huffman-2024-10",
                "urlToImage": "https://i.insider.com/671be7f99b3250dbbcea4b75?width=1200&format=jpeg",
                "publishedAt": "2024-10-27T09:53:02Z",
                "content": "Reddit CEO Stave Huffman said more people are coming to the social media site to find answers to their questions.Spencer Platt/Getty Images\r\n<ul><li>Reddit's thousands of forums are a wealth of infor… [+3193 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Brittany Vincent",
                "title": "Forget Amazon Prime Day, Govee Prime Days are Here for Spooky Halloween Prep with Up to 50% off",
                "description": "You don't need to hand over an arm and a leg to score some scary good deals up to 50% off this season from Govee.",
                "url": "https://gizmodo.com/forget-amazon-prime-day-govee-prime-days-are-here-for-spooky-halloween-prep-with-up-to-50-off-2000511145",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/govee-halloween-light-sale.jpg",
                "publishedAt": "2024-10-11T18:00:55Z",
                "content": "Spooky, scary skeletons are about to start showing up at your door. Halloween is right around the corner, and that means it’s time to start decorating. But you don’t want to just throw up a Halloween… [+2054 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "Hugh Grant Is Ultra Creepy in Revealing Final Trailer for Heretic",
                "description": "Grant stars along with Yellowjackets' Sophie Thatcher in the latest film from the creators of A Quiet Place.",
                "url": "https://gizmodo.com/heretic-spoilers-final-trailer-hugh-grant-a24-mormon-2000509167",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/heretic-poster-hugh-grant.jpg",
                "publishedAt": "2024-10-08T16:21:16Z",
                "content": "Trailers are fascinating because they’re at war with themselves. It’s a short clip aimed to get people to see a movie and the easiest way to do that is to show all the best things in the movie. Unfor… [+2499 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Gordon Jackson",
                "title": "Proving Zeus Correct, Netflix Cancels Kaos After One Season",
                "description": "That Jeff Goldblum-starring series about the Greek Pantheon has already passed into myth.",
                "url": "https://gizmodo.com/proving-zeus-correct-netflix-cancels-kaos-after-one-season-2000509358",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/KAOS.jpg",
                "publishedAt": "2024-10-08T19:52:47Z",
                "content": "Variety confirms Netflix has canceledKaos, its new series about the Greek Pantheon’s fledgling influence in the 21st century starring Jeff Goldblum as an increasingly paranoid Zeus, after just one se… [+2898 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "Watch Ke Huy Quan as a Unassuming Killer in His First Post-Oscar Film",
                "description": "Love Hurts co-stars Ariana DeBose in a new film from the producers of Violent Night and Nobody.",
                "url": "https://gizmodo.com/watch-ke-huy-quan-as-a-unassuming-killer-in-his-first-post-oscar-film-2000515036",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Love-Hurts-Ke-Huy-Quan.jpg",
                "publishedAt": "2024-10-22T17:45:58Z",
                "content": "People working in sales need a killer instinct, but not like this. In Love Hurts, Ke Huy Quan’s first feature film since winning an Oscar for Everything Everywhere All At Once, he plays a harmless, d… [+2332 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Nena Farrell",
                "title": "13 Best Housewarming Gifts for Any New Home",
                "description": "Make a house into a home with these gifts, whether they're moving into their first house or a great new apartment.",
                "url": "https://www.wired.com/gallery/best-housewarming-gifts-for-any-new-home/",
                "urlToImage": "https://media.wired.com/photos/67215d99cfe24206947cad0a/191:100/w_2580,c_limit/Gift-Guide-Housewarming-102024-Abstract-Background-(B)-SOURCE-Amazon.jpg",
                "publishedAt": "2024-10-30T14:08:00Z",
                "content": "Shopping for someone else's house is intimidating. What do they not have yet that you can buy them? What's the most useful thing they'll definitely use instead of just adding to their shelf clutter?\r… [+794 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Android Central"
                },
                "author": "michael.hicks@futurenet.com (Michael L Hicks)",
                "title": "The new Snapdragon 8 Elite offers a dramatic power boost by ditching the efficiency cores",
                "description": "At Qualcomm Summit 2024, they revealed the powerful new Snapdragon 8 Elite (not the Snapdragon 8 Gen 4, as expected), with all of the key specs that'll go into your 2025 flagship phone. Here's everything we know.",
                "url": "https://www.androidcentral.com/phones/qualcomm-announces-snapdragon-8-elite-chip",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/rRUXiFcY6iXrsZAHShZKPR-1200-80.jpg",
                "publishedAt": "2024-10-21T19:00:00Z",
                "content": "What you need to know\r\n<ul><li>Qualcomm announced the Snapdragon 8 Elite, a 3nm TSMC-made SoC, at its annual summit on Monday.</li><li>It has two 4.32GHz prime cores and six 3.53GHz performance cores… [+5894 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Simon Hill",
                "title": "5 Prime Day Portable Charger and Power Station Deals (2024)",
                "description": "Whether for emergencies or to recharge while camping, now's a good time to buy a power bank or power station.",
                "url": "https://www.wired.com/story/best-prime-day-portable-power-station-and-charger-deals-october-2024/",
                "urlToImage": "https://media.wired.com/photos/670693640d643194a688a77a/191:100/w_1280,c_limit/Best-Prime-Day-Portable-Charger-Power-Station-Deals-102024-Custom-APD-Background-SOURCE-Amazon.jpg",
                "publishedAt": "2024-10-09T14:58:10Z",
                "content": "Portable power is handy for trips, camping, and everyday life, and with more and more weather events impacting the grid, an emergency power backup can be a lifesaver. Amazons second Prime Day sale ev… [+4153 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNET"
                },
                "author": "by CNET Paid Content Studio",
                "title": "Jump on These Early Holiday Deals Now to Save Big",
                "description": "It may seem early to be thinking about the holidays just yet, but major deals are already rolling out on everything from top tech items like laptops and earbuds to gadgets for your home like robot vacuums and kitchen appliances.",
                "url": "https://www.cnet.com/paid-content/news/jump-on-these-early-holiday-deals-now-to-save-big/",
                "urlToImage": "https://www.cnet.com/a/img/resize/c169199e0a6d398f333d0cb694c8c8f031c43981/hub/2024/09/26/11683d47-7e49-4102-8824-4cfc8100b44b/100-days-gift-list-promo-4980.jpg?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2024-10-11T20:01:00Z",
                "content": "It may only be October, but holiday deals are already rolling out online. Walmart's October Deals Event and Amazon's Prime Day are just some of the major events offering major savings on tech, home a… [+541 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Kotaku"
                },
                "author": "Willa Rowe",
                "title": "Everything You Need To Know About Lady Death, Agatha All Along’s Biggest Reveal Yet",
                "description": "Across over a decade, from its inception in 2008 until 2019, Marvel released 23 films in what is now known as the Infinity Saga. The overarching story saw Earth’s mightiest heroes battle Thanos, a mad titan obsessed with bringing balance to the universe. But …",
                "url": "https://kotaku.com/agatha-all-along-death-aubrey-plaza-marvel-disney-1851681598",
                "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/494f4faf8f6f8ff979c1b3b036220f12.jpg",
                "publishedAt": "2024-10-25T16:35:00Z",
                "content": "Across over a decade, from its inception in 2008 until 2019, Marvel released 23 films in what is now known as the Infinity Saga. The overarching story saw Earths mightiest heroes battle Thanos, a mad… [+3531 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Kotaku"
                },
                "author": "Billy Givens",
                "title": "Everything You Need To Know About Life Is Strange: Double Exposure",
                "description": "Life is Strange: Double Exposure, the latest game in the long-running franchise, tells a brand-new story with a beloved returning character. Everything fans have come to love about the series returns in full, bringing together an emotional story and compellin…",
                "url": "https://kotaku.com/life-is-strange-double-exposure-how-long-to-beat-1851683622",
                "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/34e767201681f885bd111eb39eacd42f.jpg",
                "publishedAt": "2024-10-29T13:30:00Z",
                "content": "Life is Strange: Double Exposure, the latest game in the long-running franchise, tells a brand-new story with a beloved returning character. Everything fans have come to love about the series returns… [+6057 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Substack.com"
                },
                "author": "David Coleman",
                "title": "Scale Ruins Everything",
                "description": "Your Startup Could Destroy Society",
                "url": "https://coldwaters.substack.com/p/scale-ruins-everything",
                "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08a8a929-6327-4335-bc40-2aabe432bf79_2400x1008.jpeg",
                "publishedAt": "2024-10-14T17:34:38Z",
                "content": "During the Product Bubble, venture capital investments grew from $45 billion to $620 billion. How did speculation in companies that might exist nearly catch up to $1.1 trillion of private equity spec… [+5917 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "Silo Season 2 Debuts in November, and Here’s Your First Look",
                "description": "Rebecca Ferguson and Common star in the Apple TV+ sci-fi show based on the Hugh Howey book trilogy.",
                "url": "https://gizmodo.com/silo-season-2-trailer-release-date-apple-sdcc-2024-2000478709",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Silo_Season2.jpg",
                "publishedAt": "2024-10-14T14:00:36Z",
                "content": "Silo season one ended with a cliffhanger to end all cliffhangers. It desperately made you want to see what was next for Juliette (Rebecca Ferguson) as she discovered everything she thought she knew w… [+1493 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-10-23T17:30:45Z",
                "content": "[Removed]"
              },
              {
                "source": {
                  "id": null,
                  "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-10-09T16:40:13Z",
                "content": "[Removed]"
              },
              {
                "source": {
                  "id": null,
                  "name": "NPR"
                },
                "author": "Juliana Kim",
                "title": "Body of missing 23-year-old Army sergeant is found in a dumpster on Missouri base",
                "description": "Maj. Gen. Christopher Beck said peers described Sarah Roque \"as tough and proud of everything she did and proud to serve our country, which she did with honor and distinction.\"",
                "url": "https://www.npr.org/2024/10/25/nx-s1-5165195/missing-fort-leonard-wood-soldier-sarah-roque-found-dead",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2400x1350+0+0/resize/1400/quality/100/format/png/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Faf%2F21%2F91214d36497f836eee7810ad76a7%2F26.png",
                "publishedAt": "2024-10-25T14:55:51Z",
                "content": "The U.S. Army is investigating the death of 23-year-old Sgt. Sarah Roque, whose body was found in a dumpster at Fort Leonard Wood in Missouri earlier this week.\r\nRoque was first reported missing on M… [+1937 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Swiss-miss.com"
                },
                "author": "swissmiss",
                "title": "Everything is on Fire",
                "description": "“Everything is on fire, but everyone I love is doing beautiful things and trying to make life worth living, and I know I don’t have to believe in everything, but I believe in that.” – Nikita Gill Now we continue living a life of integrity, kindness and commun…",
                "url": "https://www.swiss-miss.com/2024/11/everything-is-on-fire.html",
                "urlToImage": "https://s0.wp.com/i/blank.jpg",
                "publishedAt": "2024-11-06T19:47:38Z",
                "content": "“Everything is on fire,but everyone I love is doing beautiful thingsand trying to make life worth living,and I know I don’t have to believe in everything,but I believe in that.”– Nikita Gill\r\nNow we … [+122 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "BBC News"
                },
                "author": "Simon Stone in Lisbon",
                "title": "Guardiola comes out fighting as Man City hit 'dark place'",
                "description": "Pep Guardiola insists he will come out fighting after Bernardo Silva says Manchester City are in a \"dark place' following three successive defeats.",
                "url": "https://www.bbc.com/sport/football/articles/ce3y7y77pg2o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/2bbc/live/a1903f30-9bd1-11ef-82c3-45a801b7330b.jpg",
                "publishedAt": "2024-11-06T00:16:27Z",
                "content": "City have another tough away trip to Brighton on Saturday.\r\nIt is not entirely clear who Guardiola will have available but he will be desperate to avoid a fourth straight reverse.\r\nFor Silva, it is a… [+1120 chars]"
              },
              {
                "source": {
                  "id": "business-insider",
                  "name": "Business Insider"
                },
                "author": "Erin Liam",
                "title": "Ali Wong leans on her mom and ex-husband to succeed as a working mom",
                "description": "Ali Wong gets help from her mom to bring the kids on tour. \"It's mostly because of her and the father of my children that I've been able to do everything I do,\" she told InStyle.",
                "url": "https://www.businessinsider.com/ali-wong-mom-ex-husband-help-balance-kids-childcare-grandparents-2024-10",
                "urlToImage": "https://i.insider.com/6706079fa7031864928071fb?width=1024&format=jpeg",
                "publishedAt": "2024-10-09T06:54:51Z",
                "content": "Ali Wong (pictured) has two kids, aged 6 and 8.Jeff Kravitz/FilmMagic via Getty Images\r\n<ul><li>Ali Wong said she brings her mom along with her kids on tours.</li><li>She said she sometimes struggles… [+3295 chars]"
              },
              {
                "source": {
                  "id": "the-verge",
                  "name": "The Verge"
                },
                "author": "Tom Warren",
                "title": "Microsoft just delayed Recall again",
                "description": "Microsoft is once again delaying its plans to roll out its Recall feature for Copilot Plus PCs. Windows Insiders will now get access to the feature in December.",
                "url": "https://www.theverge.com/2024/10/31/24284572/microsoft-recall-delay-december-windows-insider-testing",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/NtCPDkW32g6MCvouBL5TwoOwuMo=/0x0:1842x1036/1200x628/filters:focal(921x518:922x519)/cdn.vox-cdn.com/uploads/chorus_asset/file/25456809/Gen_AI_feature3_VP5_1842x1036.jpg",
                "publishedAt": "2024-10-31T18:19:41Z",
                "content": "Microsoft just delayed Recall again\r\nMicrosoft just delayed Recall again\r\n / Microsoft says it needs more time to make sure the AI feature is a secure and trusted experience.\r\nByTom Warren, a senior … [+2540 chars]"
              },
              {
                "source": {
                  "id": "business-insider",
                  "name": "Business Insider"
                },
                "author": "Laura Italiano",
                "title": "A lawsuit accuses Bain Capital's PowerSchool of trafficking in student data. The edtech giant says everything it does is legal.",
                "description": "PowerSchool manages data for more than 60 million students and their educators.",
                "url": "https://www.businessinsider.com/edtech-powerschool-sells-student-data-lawsuit-2024-10",
                "urlToImage": "https://i.insider.com/67241304a0a0cc14f2256c3c?width=1200&format=jpeg",
                "publishedAt": "2024-11-04T10:28:01Z",
                "content": "PowerSchool manages data for 60 million students and their educators.File/Reuters\r\n<ul><li>PowerSchool sells student data without parents' informed consent, a federal lawsuit alleges.</li><li>The edt… [+8678 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "George Lucas Originally Envisioned a Jedi Twist to End The Phantom Menace",
                "description": "In a new interview, it's revealed the Star Wars creator originally considered flipping Qui-Gon Jinn and Obi-Wan Kenobi.",
                "url": "https://gizmodo.com/star-wars-phantom-menace-original-ending-twist-jedi-obi-wan-2000519264",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Star-Wars-Phantom-Menace-meeting.jpg",
                "publishedAt": "2024-10-31T22:45:17Z",
                "content": "A new interview celebrating the 25th anniversary of Star Wars Episode I: The Phantom Menace flips everything we know about the film, and franchise, on its head. Though it ultimately didn’t come to fr… [+2543 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Kyle Barr",
                "title": "How Much RGB Lighting Is Too Much for My Gaming Desk?",
                "description": "I transformed my desk into an altar for RGB lighting with a host of Razer Aether products. It proves that—with gamer lights—less is more.",
                "url": "https://gizmodo.com/how-much-rgb-lighting-is-too-much-for-my-gaming-desk-2000511336",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Razer-Aether-Lighting-8.jpg",
                "publishedAt": "2024-10-22T14:15:18Z",
                "content": "I want to believe there is a god of RGB, some unknown deity yet to be named. Like all gods, this one needs an altara place to pray and seek deliverance. I tried my best to create one using Razers col… [+3259 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Seths.blog"
                },
                "author": "Seth Godin",
                "title": "Five lessons from week one of This is Strategy",
                "description": "Once you decide to write a book about strategy, it raises the bar for having a strategy for the launch. People generally focus far too much on the launch of a project. Rocketships need a perfect launch, because just about everything after the launch is simply…",
                "url": "https://seths.blog/2024/10/five-lessons-from-week-one-of-this-is-strategy/",
                "urlToImage": "https://seths.blog/wp-content/uploads/2018/06/seth_godin_ogimages_v02_1806135-1.jpg",
                "publishedAt": "2024-10-30T16:43:00Z",
                "content": "Once you decide to write a book about strategy, it raises the bar for having a strategy for the launch.\r\nPeople generally focus far too much on the launch of a project. Rocketships need a perfect lau… [+5915 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Css-tricks.com"
                },
                "author": "Richard Hubbard",
                "title": "Fluid Everything Else",
                "description": "We can apply the concept of fluid typography to almost anything. This way we can have a layout that fluidly changes with the size of its parent container. Few users will ever see the transition, but they will all appreciate the results. Honestly, they will.\n\n…",
                "url": "https://css-tricks.com/fluid-everything-else/",
                "urlToImage": "https://css-tricks.com/wp-json/social-image-generator/v1/image/382107",
                "publishedAt": "2024-11-05T20:49:40Z",
                "content": "DigitalOcean provides cloud products for every stage of your journey. Get started with $200 in free credit!We all know how to do responsive design, right? We use media queries. Well no, we use contai… [+12927 chars]"
              },
              {
                "source": {
                  "id": "abc-news",
                  "name": "ABC News"
                },
                "author": "Isabella Murray, Erin Brady, Christopher Godburn, Robyn Weil, Randi Simon",
                "title": "Walz weighs in on Biden's term when pressed on GMA",
                "description": "Tim Walz said that he wasn’t sure anyone does “everything right” but that President Joe Biden has “done everything in the best interests of the American public.\"",
                "url": "https://abcnews.go.com/Politics/walz-weighs-bidens-term-pressed-gma/story?id=114710666",
                "urlToImage": "https://i.abcnewsfe.com/a/9868c0e1-c9ce-4f91-8318-99cf4954d680/walz-interview-abc-jt-241010_1728603704047_hpMain_16x9.jpg?w=1600",
                "publishedAt": "2024-10-11T11:50:08Z",
                "content": "Minnesota Gov. Tim Walz said that he wasnt sure anyone does everything right but that President Joe Biden has done everything in the best interests of the American public when pressed on whether hed … [+4716 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Brittany Vincent",
                "title": "Best Price Ever on the DEWALT Cordless Drill and Driver Kit Now Just $99 for Lasting Value",
                "description": "This is the perfect tool for long-lasting use, and it’s 45% off now.",
                "url": "https://gizmodo.com/best-price-ever-on-the-dewalt-cordless-drill-and-driver-kit-now-just-99-for-lasting-value-2000513597",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/dewalt-cordless-drill-kit.jpg",
                "publishedAt": "2024-10-18T17:05:30Z",
                "content": "Have any household tasks you need to get done? Or maybe you know someone handy who can work magic with a set of tools. Whatever the case, a cordless drill is a great addition to any household. The De… [+2130 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Brittany Vincent",
                "title": "Amazon’s Best Seller AeroGarden Harvest 2.0 Is 42% Off for the First Time Ever",
                "description": "you can get this tiny garden for less than $60, and you don't need to leave the house to have a tiny garden at your disposal.",
                "url": "https://gizmodo.com/amazons-best-seller-aerogarden-harvest-2-0-is-42-off-for-the-first-time-ever-2000513048",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/aerogarden-harvest.jpg",
                "publishedAt": "2024-10-17T17:35:01Z",
                "content": "Ever wanted to grow your own fresh herbs and small plants right in the comfort of your home? It’s a lot easier than you might think, and you don’t need to tear up your yard to do it. The AeroGarden H… [+2118 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Brittany Vincent",
                "title": "Bissell Little Green Pro Carpet Cleaner Is Down to Its Lowest Price in History Ahead of Black Friday",
                "description": "Tackle even the toughest messes with this affordable carpet cleaner, on sale at Amazon for a low price now.",
                "url": "https://gizmodo.com/bissell-little-green-pro-carpet-cleaner-is-down-to-its-lowest-price-in-history-ahead-of-black-friday-2000521116",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/11/bissell-little-green-pro.jpg",
                "publishedAt": "2024-11-06T16:10:35Z",
                "content": "If you’re a pet owner or have kids, you know that accidents and spills are inevitable. You need something that can handle all the messes so all you have to worry about is taking care of the people an… [+2107 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Citizen Times"
                },
                "author": "Iris Seaton, Asheville Citizen Times",
                "title": "Helene in WNC could have been 'exponentially worse,' causing 'annihilation.' Here's why",
                "description": "Latest boil advisory updates, plus how Asheville avoided \"complete annihilation\" of everything between Black Mountain and Biltmore Village.",
                "url": "https://www.citizen-times.com/story/news/local/2024/10/25/asheville-water-north-fork-dam-tropical-storm-helene/75844222007/",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/VfoTRmHrcCrs.oUPgsdSzw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzM-/https://media.zenfs.com/en/asheville-citizen-times/2d2504fd348b4f64339921439b602bb3",
                "publishedAt": "2024-10-25T21:25:41Z",
                "content": "Clay Chandler, a spokesperson for Asheville's Water Resources Department, offered chilling perspective on how much more lethal the already catastrophic Tropical Storm Helene could have been during an… [+4867 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Gordon Jackson",
                "title": "Disney Hopes to Replace Bob Iger as CEO in 2026",
                "description": "According to The New York Times, Iger's second reign as Disney CEO is coming to an end.",
                "url": "https://gizmodo.com/disney-hopes-to-replace-bob-iger-as-ceo-in-2026-2000514344",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Iger.jpg",
                "publishedAt": "2024-10-21T14:37:23Z",
                "content": "Disney plans to find a successor to current CEO Bob Iger “in early 2026,” according to a statement released to The New York Times.\r\nThe news comes as part of “board shake-up” for Disney, as veteran W… [+1894 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Brittany Vincent",
                "title": "Amazon Knows You’re Too Smart To Miss Out on a Smart Plug with Alexa at the Smart Price of $13 Before Prime Day Ends",
                "description": "Control appliances, lights and more with your phone or tablet, all for a great Prime Day 48% off.",
                "url": "https://gizmodo.com/amazon-knows-youre-too-smart-to-miss-out-on-a-smart-plug-with-alexa-at-the-smart-price-of-13-2000509971",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/amazon-smart-plug.jpg",
                "publishedAt": "2024-10-09T17:28:49Z",
                "content": "If you’ve been curious about setting up a smart home but don’t want to invest in all new appliances, a smart plug like the Amazon Smart Plug is a great way to get started. It lets you control your ex… [+2003 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Gizmodo Deals",
                "title": "Just Before Black Friday, Amazon is Slashing Prices on The New MacBook Air With The XL 15-Inch Display",
                "description": "Amazon Slashes Prices on the Latest Apple Ultrabook.",
                "url": "https://gizmodo.com/just-before-black-friday-amazon-is-slashing-prices-on-the-new-macbook-air-with-the-xl-15-inch-display-2000520066",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/08/macbook-air-m3.jpg",
                "publishedAt": "2024-11-03T22:25:07Z",
                "content": "Launched in March, the latest 256GB MacBook Air M3 15-inch is making waves this early Black Friday with a great deal on Amazon. Currently priced at $1,091 down from its original price of $1,299 for t… [+2539 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "BBC News"
                },
                "author": null,
                "title": "Watch: Fast-moving California wildfire burns out of control",
                "description": "Thousands of people have been evacuated from their homes in Ventura County, near Los Angeles.",
                "url": "https://www.bbc.com/news/videos/cp9z0l15yr7o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e9ff/live/a1896d10-9cb0-11ef-9260-19e6a950e830.jpg",
                "publishedAt": "2024-11-07T03:13:08Z",
                "content": "A wildfire fanned by winds of up to 80mph (130km/h) is burning out of control in California's Ventura County.\r\nThe fire was first reported near Moorpark, 40 miles northwest of Los Angeles, early on W… [+459 chars]"
              },
              {
                "source": {
                  "id": "the-verge",
                  "name": "The Verge"
                },
                "author": "Sheena Vasani",
                "title": "Kids with Android phones will be able to use Google Wallet tap-to-pay soon",
                "description": "Google will soon let children use Google Wallet and its tap-to-pay feature on Android phones, which debuted earlier this year with the Fitbit Ace LTE.",
                "url": "https://www.theverge.com/2024/10/30/24283825/android-phones-google-wallet-tap-to-pay-fitbit-ace-lte",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/a1UuqmTXeWu_sDyVAVipeGpIQ0s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
                "publishedAt": "2024-10-30T19:54:12Z",
                "content": "Kids with Android phones will be able to use Google Wallet tap-to-pay soon\r\nKids with Android phones will be able to use Google Wallet tap-to-pay soon\r\n / Like Apple Pay, Google Wallet will let kids … [+1595 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Digital Trends"
                },
                "author": "Jesse Lennox",
                "title": "Project Rene: everything we know so far",
                "description": "Project Rene is the next big game coming to The Sims universe, but it isn't The Sims 5 and won't be replacing 4. Here's everything we know about this game.",
                "url": "https://www.digitaltrends.com/gaming/project-rene-everything-we-know/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/10/sims-4-port-of-marriage.jpg?resize=1200%2C630&p=1",
                "publishedAt": "2024-10-10T17:55:33Z",
                "content": "Originally, we were thoroughly convinced that Project Rene was just a code name for what would evolve into The Sims 5. However, EA has shot down that idea by explicitly telling us that there will not… [+3379 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Digital Trends"
                },
                "author": "Tushar Mehta",
                "title": "Android 15: everything you need to know",
                "description": "Google’s next major update for smartphones is here. and will trickle down to countless other devices over the next several months. Android 15 has eschewed visual updates and instead tidies up the interface and improves existing features. It also gets a number…",
                "url": "https://www.digitaltrends.com/mobile/android-15/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/10/Android-15-hero.jpg?resize=1200%2C630&p=1",
                "publishedAt": "2024-10-26T11:30:41Z",
                "content": "Google’s next major update for smartphones is here. Android 15 rolled out to Pixel devices on October 15 and will trickle down to countless other devices over the next several months. Android 15 has … [+14086 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Why do people still back Trump, after everything? 5 things to understand about MAGA supporters’ thinking",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_78d5bdd8-a788-4760-b0f7-4fc4c6882abd",
                "urlToImage": null,
                "publishedAt": "2024-11-03T15:06:53Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Hackaday"
                },
                "author": "Lewin Day",
                "title": "Will .IO Domain Names Survive A Geopolitical Rearrangement?",
                "description": "The Domain Name System (DNS) is a major functional component of the modern Internet. We rely on it for just about everything! It’s responsible for translating human-friendly domain names into …read more",
                "url": "https://hackaday.com/2024/10/23/will-io-domain-names-survive-a-geopolitical-rearrangement/",
                "urlToImage": "https://hackaday.com/wp-content/uploads/2024/10/IOend.jpg",
                "publishedAt": "2024-10-23T14:00:34Z",
                "content": "The Domain Name System (DNS) is a major functional component of the modern Internet. We rely on it for just about everything! It’s responsible for translating human-friendly domain names into numeric… [+8123 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Asheville, Western NC flooding latest update: Everything to know in week 2 of recovery after Helene",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_be91bd4d-0b01-4faf-8698-eabe09b3564b",
                "urlToImage": null,
                "publishedAt": "2024-10-10T15:41:28Z",
                "content": "If you click 'Accept all', we and our partners, including 240 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
              },
              {
                "source": {
                  "id": "buzzfeed",
                  "name": "Buzzfeed"
                },
                "author": "Pooja Shah",
                "title": "A New Email Scam Is Shockingly Realistic, Here's Everything You Need To Know About Protecting Yourself",
                "description": "A new phishing email scam is incredibly alarming, but you don't have to fall for it. Here's how to spot it.",
                "url": "https://www.buzzfeed.com/poojashah1/new-email-scam-house-address",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/CgBANAPequppG4Ph6x.aeQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTc-/https://media.zenfs.com/en/buzzfeed_articles_778/71b5367757c040d2cf97e137049ab620",
                "publishedAt": "2024-11-02T11:16:02Z",
                "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nA… [+6572 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "T3 US/CA"
                },
                "author": "Carrie Marshall",
                "title": "Apple’s slowing down its schedule for everything other than iPhones, says insider",
                "description": "The iPhone will remain an annual upgrade, but a new report says Apple plans to slow down its release schedule from 2025.",
                "url": "https://www.t3.com/tech/iphones/apples-slowing-down-its-schedule-for-everything-other-than-iphones-says-insider",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/LTHW9Tq_BTRsY_2hLMdobw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/t3_620/6bdcce5c80b2c3ac5c8eb7abfdb3cce7",
                "publishedAt": "2024-10-09T15:00:00Z",
                "content": "When you buy through links on our articles, Future and its syndication partners may earn a commission.\r\nQuick Summary\r\nAfter some high-profile quality control issues, Apple is reportedly slowing down… [+2182 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Vittoria Elliott",
                "title": "Elon Musk's America PAC Has Created an Election Denial Cesspool on X",
                "description": "The group has nearly 50,000 members, many enthusiastically sharing debunked claims about voting fraud. “It's just an election denier jamboree,” says one expert.",
                "url": "https://www.wired.com/story/elon-musk-america-pac-election-denial-community-x/",
                "urlToImage": "https://media.wired.com/photos/6723d28fe9642f2551fc93df/191:100/w_1280,c_limit/musk-michigan-pol-1757147063.jpg",
                "publishedAt": "2024-10-31T19:37:10Z",
                "content": "For months, billionaire and X owner Elon Musk has used his platform to share election conspiracy theories that could undermine faith in the outcome of the 2024 election. Last week, the political acti… [+2472 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Tess Owen",
                "title": "Online Talk About ‘Civil War’ Could Inspire Real-World Violence, DHS Warns Cops",
                "description": "The agency also cautioned that it’s unable to get a grasp on the full scale of the threat, due to extremists increasingly using encrypted chat tools.",
                "url": "https://www.wired.com/story/extremists-civil-war-dhs/",
                "urlToImage": "https://media.wired.com/photos/6716ac2d6257dd36982517dc/191:100/w_1280,c_limit/102124-civil-war-chatter-2x1.jpg",
                "publishedAt": "2024-10-23T10:30:00Z",
                "content": "DHS also cautioned that it is unable to get a grasp on the full scale of the threat. We lack a complete threat picture due the ability of some DVEs to evade law enforcement using advanced encryption,… [+2416 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Molly Higgins",
                "title": "Target Promo Code: $50 Off | October 2024",
                "description": "Get $50 off with this Target promo code and shop these top deals to save on electronics, baby items, groceries, and more.",
                "url": "https://www.wired.com/story/target-promo-code/",
                "urlToImage": "https://media.wired.com/photos/66ea077283cd4f2fbb17d478/191:100/w_1280,c_limit/WIRED-Coupons-2.jpg",
                "publishedAt": "2024-10-25T06:00:00Z",
                "content": "Target has set itself apart from big box retailers like Walmart by having trendy clothes, homegoods branded by reality TV stars and, of course, in-store Starbucks. With malls and traditional departme… [+2105 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Hackaday"
                },
                "author": "Al Williams",
                "title": "Power Supply PCB Redesign",
                "description": "We’ve often heard you should do everything twice. The first time is to learn what you need to do, and the second time is to do it right. We bet [Ian Carey] would agree after taking his old li…",
                "url": "https://hackaday.com/2024/10/19/power-supply-pcb-redesign/",
                "urlToImage": "https://hackaday.com/wp-content/uploads/2024/10/pcb.png",
                "publishedAt": "2024-10-19T11:00:10Z",
                "content": "We’ve often heard you should do everything twice. The first time is to learn what you need to do, and the second time is to do it right. We bet [Ian Carey] would agree after taking his old linear pow… [+1019 chars]"
              },
              {
                "source": {
                  "id": "espn",
                  "name": "ESPN"
                },
                "author": "ESPN",
                "title": "PFL Battle of the Giants: Live results and analysis for Ngannou vs. Ferreira",
                "description": "Here's everything you need to know about the three-title-bout PFL Super Fights event in Riyadh.",
                "url": "https://www.espn.com/mma/story/_/id/41042898/pfl-super-fights-watch-stream-francis-ngannou-renan-ferreira-cris-cyborg-larissa-pacheco-live-updates-analysis",
                "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1016%2Fr1401393_1296x729_16%2D9.jpg",
                "publishedAt": "2024-10-19T20:32:09Z",
                "content": "Oct 19, 2024, 03:15 PM ET\r\nPFL Super Fights: Battle of the Giants is underway at The Mayadeen in Riyadh, Saudi Arabia. The event will be headlined by a heavyweight clash between Francis Ngannou and 2… [+1629 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "Adam Clark Estes",
                "title": "The Origins of the Climate Haven Myth",
                "description": "In a world of increasingly powerful hurricanes and other rising climate threats, those with vested interests in promoting certain locations have sold the public a dream.",
                "url": "https://www.wired.com/story/the-origins-of-the-climate-haven-myth/",
                "urlToImage": "",
                "publishedAt": "2024-10-12T11:00:00Z",
                "content": "Its hard to know how responsible one professor with a knack for marketing was for the mainstreaming of the climate haven concept. But its easy to see why local governments would latch onto it.\r\nThe C… [+2088 chars]"
              },
              {
                "source": {
                  "id": "wired",
                  "name": "Wired"
                },
                "author": "David Gilbert",
                "title": "'We're a Fortress Now': The Militarization of US Elections Is Here",
                "description": "From bulletproof glass, drones, and snipers to boulders blocking election offices, the US democratic system is bracing for violent attacks in 2024.",
                "url": "https://www.wired.com/story/2024-us-election-polling-location-militarized-security/",
                "urlToImage": "https://media.wired.com/photos/67222ec294dce53b1903ff51/191:100/w_1280,c_limit/GettyImages-2180571876.jpg",
                "publishedAt": "2024-10-30T15:31:35Z",
                "content": "Drones, snipers, razor wire, sniffer dogs, body armor, bulletproof glass, and 24-hour armed security.\r\nThis is not a list of protections in place for a visit by the president of the United States nor… [+2469 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "The Battle for Gotham City Is On in Mid-Season Penguin Trailer",
                "description": "Colin Farrell and Cristin Milioti star in the DC Batman spinoff series, streaming on Max.",
                "url": "https://gizmodo.com/new-penguin-trailer-mid-season-colin-farrell-dc-batman-2000513071",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Penguin-NYCC.jpg",
                "publishedAt": "2024-10-17T16:31:16Z",
                "content": "Days after dropping one of the best television episodes of the year, the stars and creative team behind The Penguin took the stage at New York Comic Con and brought along some goodies. Mainly, a bran… [+2371 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "James Whitbrook",
                "title": "Star Trek: Lower Decks‘ New Trailer Has a Crisis on Infinite Ensigns Kim",
                "description": "Not even an infinite number of alternate realities can help most versions of Harry Kim get a promotion, it seems.",
                "url": "https://gizmodo.com/star-trek-lower-decks-season-5-trailer-voyager-harry-kim-2000510477",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/star-trek-lower-decks-season-5-harry-kim-cameo.jpg",
                "publishedAt": "2024-10-10T17:00:26Z",
                "content": "The heroes of Lower Decks are ensigns no more after last season’s surprise early promotion saw Boimler, Mariner, Tendi, Rutherford, and their new Vulcan friend T’Lyn all have to grapple with their fu… [+2971 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "Even on His Own Show, The Penguin Is Royally Screwed",
                "description": "Colin Farrell and Cristin Milioti star in the DC Batman spinoff series, streaming on Max.",
                "url": "https://gizmodo.com/even-on-his-own-show-the-penguin-is-royally-screwed-2000514625",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/the-penguin-colin-farrell-ep-5.jpg",
                "publishedAt": "2024-10-21T20:45:56Z",
                "content": "HBO’s Batman spinoff series The Penguin just got a fresh start, and it’s not looking good at all for the title character. After last week’s episode illuminated the audience to the plight of Sofia Fal… [+2807 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "Rejoice, We’re Already Getting Another Entry in the ‘Ke Huy Quan Kicks Ass’ Genre",
                "description": "Love Hurts is coming next year, but now the Oscar-winning Indiana Jones star has a Christmas action movie too.",
                "url": "https://gizmodo.com/ke-huy-quan-action-movie-fairytale-in-new-york-2000518221",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Ke-Huy-Kwan-Love-Hurts.jpg",
                "publishedAt": "2024-10-29T22:30:23Z",
                "content": "It’s happening about 40 years later than it should’ve but Ke Huy Quan is becoming a full-on action star. After winning an Oscar for his action-packed comeback role in Everything Everywhere All At Onc… [+2319 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Isaiah Colbert",
                "title": "Venom: The Last Dance Knows Fans Wanted More Venom and Eddie",
                "description": "Forget conventional romance—the new Venom movie is for the Symbrock truthers.",
                "url": "https://gizmodo.com/venom-the-last-dance-knows-fans-wanted-more-venom-and-eddie-2000515973",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/tom-hardy-venom3.jpg",
                "publishedAt": "2024-10-24T16:04:27Z",
                "content": "Ever since Venom first hit the scene, fans recoiled in flirtatious horror as they witnessed the symbiote monster nosh bad guys with his freakishly long tongue and hulking tar-like body. That perturbe… [+2998 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Isaiah Colbert",
                "title": "Warner Bros. Boss David Zaslav Admits Joker 2 Was ‘Disappointing’",
                "description": "It's not just fans who feel let down by Joker: Folie à Deux.",
                "url": "https://gizmodo.com/warner-bros-boss-david-zaslav-admits-joker-2-was-disappointing-2000521581",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Joker_-Folie-a-Deux-Joaquin-Phoenix-1.jpg",
                "publishedAt": "2024-11-07T18:00:18Z",
                "content": "Warner Bros. Discovery under the guiding hand of CEO David Zaslav has made a series of puzzling decisions that seem antithetical to meeting fan demands. Key among its highlight reel of letdowns inclu… [+3322 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Justin Carter",
                "title": "Hasbro’s Selling Power Rangers’ History, And No One’s Happy About It",
                "description": "An upcoming auction has brought controversy and a more money-focused conclusion to the franchise's legacy than its fans and stars would like.",
                "url": "https://gizmodo.com/power-rangers-hasbro-auction-2000511546",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/powerrangers-cosmic-suits.jpg",
                "publishedAt": "2024-10-13T17:50:40Z",
                "content": "Last year, Power Rangers: Cosmic Fury brought a definitive end to the 30-year TV (and films, comics, etc) saga that began all the way back with Mighty Morphin in 1993. While the future of the franchi… [+2875 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Gizmodo.com"
                },
                "author": "Germain Lussier",
                "title": "We Heard a Juicy Rumor About That Secret Predator Movie",
                "description": "Director Dan Trachtenberg has two Predator movies coming out next year and we think we know what the second one is.",
                "url": "https://gizmodo.com/secret-predator-movie-dan-trachtenberg-badlands-prey-2000516609",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Predator-1987.jpg",
                "publishedAt": "2024-10-25T17:05:32Z",
                "content": "In 2025, we’re going to see the Predator in more ways than we can possibly imagine. The biggest, of course, is in Predator: Badlands, the live-action film starring Elle Fanning and directed by Prey h… [+2609 chars]"
              }
            ]
          }
      
        const data =  response;
        const articlesWithImages = data.articles.filter(article => article.urlToImage);
        const card = `
        <div class="card text-bg-dark mx-2 h-50%">
            <img src="${articlesWithImages[10].urlToImage || 'placeholder.jpg'}" class="card-img" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title">${articlesWithImages[10].title.slice(0, 20)}...</h5>
                <p class="card-text text-white">${articlesWithImages[10].description.slice(0, 70)}...</p>
                  <a href="${articlesWithImages[10].url}" target="_blank" class="text-white">explore more</a>
                <p class="card-text"><small>${articlesWithImages[10].publishedAt}</small></p>
            </div>
        </div>
        <div class="card chart mx-2 p-2" style="width: 18rem; height: 150%;">
            <img src="${articlesWithImages[1]?.urlToImage || 'placeholder.jpg'}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${articlesWithImages[1]?.title.slice(0, 50)}...</h5>
                <h6 class="card-text">${articlesWithImages[1]?.description}...</h6>
                <a href="${articlesWithImages[1]?.url}" target="_blank" class="btn btn-primary">explore more</a>
            </div>
        </div>
        
    `;

        document.querySelector(".home_card").innerHTML = card;
//axtrackting all data from request and showing
        let str = "";
        for (let item of articlesWithImages) {
            str += `
            <div class="col-md-3 col-sm-6 col-12 my-1 mx-2  ">
            <div class="card p-1" style="width: 18rem; height: 100%;">
                <img src="${item.urlToImage || 'placeholder.jpg'}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title.slice(0, 24)}...</h5>
                    <h6 class="card-text">${item.description.slice(0, 100)}...</h6>
                    <a href="${item.url}" target="_blank" class="btn btn-primary">explore more</a>
                </div>
                </div>
                
            </div>`;
        }

        document.querySelector(".newscard").innerHTML = str;

    } catch (error) {
        document.querySelector("body").innerHTML = `<body class="d-flex align-items-center justify-content-center" style="height: 100vh; background-color: #f8f9fa;">

    <div class="text-center">
        <h1 class="display-1 text-danger">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist. It might will be updating.</p>
        <a href="index.html" class="btn btn-primary">Go Back Home</a>
    </div>

</body>`;
    }
}
fetchdata("india");

// function  for search news
searchbtn.addEventListener("click", () => {

    const q = searchinput.value
    fetchdata(q);
    searchinput.value = ""
})

//function for all nav search
Health.addEventListener("click", () => {
    q = Health.innerHTML
    fetchdata(q);
})

Travel.addEventListener("click", () => {
    q = Travel.innerHTML
    fetchdata(q);
})
Design.addEventListener("click", () => {
    q = Design.innerHTML;
    fetchdata(q)
})

Business.addEventListener("click", () => {
    q = Business.innerHTML;
    fetchdata(q)
})
Politics.addEventListener("click", () => {
    q = Politics.innerHTML;
    fetchdata(q);
})
sport.addEventListener("click", () => {
    q = sport.innerHTML
    fetchdata(q)
})
cricket.addEventListener("click", () => {
    q = cricket.innerHTML
    fetchdata(q)
})
Technology.addEventListener("click", () => {
    q = Technology.innerHTML
    fetchdata(q)
})
Science.addEventListener("click", () => {
    q = Science.innerHTML
    fetchdata(q);
})
};

