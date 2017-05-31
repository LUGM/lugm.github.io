(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    var mentors = [
    {
        "name":"Yash Kumar Lal",
        "mobile":"8095718111",
        "whatsapp":"",
        "email":"yklal95@gmail.com",
        "github":"https://github.com/ykl7",
        "domain":"NLP, ML, iOS, Flask",
        "languages":"Python, Objective-C",
        "image": "https://ykl7.github.io/images/IMG_3531.jpg"
    },
    {
        "name":"Utkarsh Kashyap",
        "mobile":"7829414143",
        "whatsapp":"",
        "email":"utkarsh.k05@gmail.com",
        "github":"https://github.com/utkarsh5k",
        "domain":"ML",
        "image": "https://avatars0.githubusercontent.com/u/12728102",
        "languages":"C, C++, Java, Python"
    },
    {
        "name":"Sudarshan Sunder",
        "mobile":"7259377755",
        "whatsapp":"9445069658",
        "email":"sundersudarshan@gmail.com",
        "github":"https://github.com/sudarshansunder",
        "domain":"Android, Backend stuff, ML",
        "languages":"C/C++, Java, JavaScript, Python, PHP",
        "image": "https://avatars0.githubusercontent.com/u/4697324"
    },
    {
        "name":"Bhargav Karanam",
        "mobile":"8123637692",
        "whatsapp":"",
        "email":"bhargav.karanam@gmail.com",
        "github":"https://github.com/bhargavkaranam",
        "domain":"WebDev",
        "languages":"Node.JS, PHP, React JS",
        "image": "https://avatars1.githubusercontent.com/u/8963298"
    },
    {
        "name":"Avikant Saini",
        "mobile":"+91 809-513-8333",
        "whatsapp":"",
        "email":"avikantsainidbz@gmail.com",
        "github":"https://github.com/avikantz",
        "domain":"iOS, UI/UX, Graphics, Memes",
        "languages":"Swift, Objective C, Python",
        "image": "https://avatars1.githubusercontent.com/u/7699509"
    },
    {
        "name":"Aditya Walvekar",
        "mobile":"9342579059",
        "whatsapp":"",
        "image": "https://avatars0.githubusercontent.com/u/15139219",
        "email":"aditya.s.walvekar@gmail.com",
        "github":"https://github.com/adwalvekar",
        "domain":"Web development, Neural Networks",
        "languages":"Python, PHP, Java, C, JavaScript"
    },
    {
        "name":"Shivang Bharadwaj",
        "mobile":"9650344911",
        "whatsapp":"",
        "email":"shivang.bharadwaj3@gmail.com",
        "github":"https://github.com/reficul31",
        "domain":"WebDev",
        "image": "https://avatars1.githubusercontent.com/u/19486491",
        "languages":"JavaScript, Python"
    },
    {
        "name":"Mehul Gupta",
        "mobile":"9521092155",
        "whatsapp":"9901693769",
        "email":"mehul.guptagm@gmail.com",
        "github":"https://github.com/therealssj",
        "domain":"WebDev",
        "image": "https://avatars3.githubusercontent.com/u/8619106",
        "languages":"PHP, Python"
    },
    {
        "name":"Kartik Arora",
        "mobile":"9871211569",
        "whatsapp":"",
        "email":"aawaazdo@kartikarora.me",
        "github":"https://github.com/kartikarora",
        "domain":"Android, Full Stack Dev",
        "image": "https://avatars3.githubusercontent.com/u/6591617",
        "languages":"Java, XML, Python, Flask, Javascript, Material Design"
    },
    {
        "name":"Raamish Malik",
        "mobile":"7026827800 ",
        "whatsapp":"",
        "email":"https://raamish.malik@gmail.com",
        "github":"https://github.com/raamish",
        "domain":"Backend(Python) , ML",
        "image": "https://avatars2.githubusercontent.com/u/13959641",
        "languages":"C, C++, Python"
    },
    {
        "name":"Siddharth Kothiyal",
        "mobile":"9663597229",
        "whatsapp":"",
        "email":"sid.kothiyal27@gmail.com",
        "github":"https://github.com/sidkothiyal",
        "domain":"Android, Python Applications, ROS, Machine Learning ",
        "image": "https://avatars0.githubusercontent.com/u/15217079",
        "languages":"Python, C, C++, Java, XML"
    },
    {
        "name":"Ujjwal Arora",
        "mobile":"7019953464",
        "whatsapp":"7019953464",
        "email":"arora.ujjwal@gmail.com",
        "github":"https://www.github.com/azwreith",
        "domain":"WebDev, Android",
        "image": "https://avatars3.githubusercontent.com/u/10354323",
        "languages":"JavaScript, PHP, Python, Java"
    },
    {
        "name":"Arjun Narayan",
        "mobile":"9916324321",
        "whatsapp":"09916324321",
        "email":"arjun.narayan46@gmail.com",
        "github":"https://github.com/TacticalGoat",
        "domain":"Web, App",
        "image": "https://avatars1.githubusercontent.com/u/7513294",
        "languages":"Python C# C++"
    },
    {
        "name":"Chinmay Nivsarkar",
        "mobile":"8123653584",
        "whatsapp":"",
        "email":"chinmayn96@gmail.com",
        "github":"https://github.com/chinmay-n",
        "domain":"Linux",
        "image": "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/17759909_1673815029300771_2852045656962401548_n.jpg?efg=eyJpIjoiYiJ9&oh=cb826aa1a599300cb6e174257cf0dcea&oe=59B204C4",
        "languages":"Python,C"
    },
    {
        "name":"Sukriti Paul",
        "mobile":"9535281939",
        "whatsapp":"9449987703",
        "email":"sukritipaul05@gmail.com",
        "github":"https://github.com/JuOllie",
        "image": "https://avatars3.githubusercontent.com/u/19627929",
        "domain":"Image Processing, Computer Vision & PR Data Mining & Data Science Android",
        "languages":"C,C++,C#,Java, Ruby, Python and MATLAB"
    },
    {
        "name":"Ishan Handa",
        "mobile":"9731794141",
        "whatsapp":"",
        "email":"ishanhanda1@gmail.com",
        "github":"https://github.com/ishaaann",
        "domain":"BackEnd , ML and Data Science",
        "image": "https://avatars3.githubusercontent.com/u/14318248",
        "languages":"Python, C, C#, SQL, (Little Little) Javascript, R"
    },
    {
        "name":"Jitesh Kumar Jha",
        "mobile":"9591361570",
        "whatsapp":"",
        "email":"jiteshjha96@gmail.com",
        "github":"https://github.com/jiteshjha",
        "domain":"WebDev, ML, Simulations",
        "image": "https://avatars3.githubusercontent.com/u/10262106",
        "languages":"Javascript, Ruby, Python, C"
    },
    {
        "name":"Saketh Kaparthi",
        "mobile":"08123199279",
        "whatsapp":"",
        "email":"sakethkaparthi@gmail.com",
        "github":"https://github.com/sakethkaparthi",
        "domain":"Android, Google cardboard VR",
        "image": "https://avatars2.githubusercontent.com/u/7693606",
        "languages":"Java, python"
    },
    {
        "name":"Punit Bhatt",
        "mobile":"9964356899",
        "whatsapp":"",
        "email":"bhattpunit96@gmail.com",
        "github":"https://github.com/punitbhatt",
        "domain":"ML, neural network, Android",
        "image": "https://avatars1.githubusercontent.com/u/13984558",
        "languages":"Python, C++, Java"
    },
    {
        "name":"Mayank Bansal",
        "mobile":"9742931741",
        "whatsapp":"3125932465",
        "email":"manky.bansal@gmail.com",
        "github":"https://github.com/mankybansal",
        "image": "https://avatars2.githubusercontent.com/u/12834184",
        "domain":"WebDev, Android",
        "languages":"Java, PHP, C++, C, HTML, JS, CSS"
    },
    {
        "name":"Vrushank Upadhyay",
        "mobile":"9663595184",
        "whatsapp":"8758032639",
        "email":"uvrushank21@gmail.com",
        "github":"https://github.com/vrush03",
        "image": "https://avatars0.githubusercontent.com/u/12833721",
        "domain":"ML, Algorithms, Backend",
        "languages":"C, C++, Python, Java, Go"
    }
    ];

    var projectIdeas = [
    {
        "name":"Utkarsh Kashyap",
        "title1":"Simple ML library from scratch",
        "idea1":"A small C++ library that would contain few basic ML algorithms like Linear Regression, K-means Clustering and k-Nearest Neighbours (for the brave, Neural Nets). The library will be written from scratch, in C++, in an object oriented fashion, and shall contain all the required utility functions that are generally used in Data oriented problems, like loading and writing to CSV files, finding min/max/mean/mode etc, filling null values in a dataset. The algorithms itself will have 4 basic methods to train, test, predict and find the score of a test set. ",
        "title2":"Optimize distance between functions in a single text file",
        "idea2":"There are large text files containing 1000+ lines of code, where there are various functions that call each other. Many times, the functions are poorly placed in the file and it requires a lot of scrolling to track functions calling each other. The aim of this project is to make an optimization tool that finds the best ordering of functions in a file based on some metric that accurately represents the distance between functions, and rearranges them accordingly, thus enhancing readability of large codebases. ",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Kartik Arora",
        "title1":"Wear Dialer",
        "idea1":"Dial a number on the watch and place a call from your phone. No need to take out the phone from pocket!",
        "title2":"Potato Library",
        "idea2":"Easy to use Utility library for Android",
        "title3":"Android Permissions",
        "idea3":"WebApp, RestAPI and Android App to list information about the permissions in the Android SDK"
    },
    {
        "name":"Shivang Bharadwaj",
        "title1":"Dynamic Form Creation and Dating Saving",
        "idea1":"Making a desktop application that allows us to store data in dynamically created forms offline and then the data can be pushed to the server once the host is connected to the internet.",
        "title2":"Text Editor Plugin for Lightweight Markup Languages",
        "idea2":"Basically a text editor plugin that allows us to render the LML in the formatted form live as it is being typed. The plugin might support multiple file extensions such as markdown, reStructuredText, Textile etc.",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Bhargav Karanam",
        "title1":"Facebook Bot for DigitalOcean Server Management",
        "idea1":"Make a Facebook bot that uses the DigitalOcean API to manage droplets. This can be used to view status, load of the servers. Also can be used to add/edit DNS records, upgrade droplets, create load balancers etc. Can be used to listen to events once DO introduces the Webhook service. Droplets can be upgraded, load balancers can be created on demand once webhooks are introduced",
        "title2":"App to verify the authenticity of a FB post",
        "idea2":"Build an app to verify authenticity of Facebook posts. Mine through the history of posts by the individual/pages using Graph API and also the news articles regarding the topic discussed in the post. Mining through the feed of the page/individual will give an insight on the person's behaviour. App can be used to display (predict) the certainty of a post being fake.  #TRUMPELECTIONSCENES",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Mehul Gupta",
        "title1":"CLI for ReadTheDocs",
        "idea1":"Create a cli for downloading docs using readthedocs api.\nThe hardest part of this project is probably the fact that readthedocs doesn't have a proper documentation for api.\nLast time I checked some of the stuff did not work either as they were shifting to a new api so might need to leverage the site to find the required docs.\nLanguage of choice: python.",
        "title2":"Google Play Store API",
        "idea2":"Google changed their playstore API recently and added much more data which is not available on the old API.\nThe opengapps project is one such project which requires the latest API but its not very straight forward to figure it out.\nIf you use a proxy to see the playstore traffic then the playstore apk stops making requests.\nGetting past this is probably the hardest part.\nLanguage of choice: python.\n\nP.S We will be dealing with google protocol buffers aswell since that is what the playstore uses as the message format.",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Jitesh Kumar Jha",
        "title1":"language-translate",
        "idea1":"Implement a basic model of Neural Machine Translation(https://github.com/neubig/nmt-tips) with Tensorflow and NLTK as a web application(preferably, flask), which serves as language translator web-application. The service will probably take up some time to produce results, hence this project be extended with the employment of GPUs as the next stage of the project. Difficulty Level : Hard",
        "title2":"Flappy-play-yo-self",
        "idea2":"Train a neural network to play Flappy Bird using genetic algorithm(GA). This project can either be implemented as an application(pygame library looks interesting for having a control over the game), or as a modest javascript single page webapp(let's stick with react.js). Difficulty Level : Medium",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Ishan Handa",
        "title1":"Document Fingerprinting",
        "idea1":"The basic idea of building this product is to detect cases of \"Document Copying\" and \"Code Plagiarism\". These problems are encountered by almost everybody and there does not exist many solutions for it. We are looking to build an industry grade solution here which involves working on different algorithms for detecting aforementioned cases and providing a proper GUI for the same. We would be looking to implement this in Python/ (or a language of your choice) and we can also implement this as a web service depending on your expertise.",
        "title2":"Remote Screen Control",
        "idea2":"Remote Screen Control let's you control Linux systems remotely, in a easy and fast way over local area networks (basically a Team Viewer clone). While doing this you'll have to work on various different components like key logger, using sockets to transfer images, file transfers, live video and voice chat etc. The biggest challenge when it comes to this problem is to reduce the lag of videos over the internet.",
        "title3":"Chrome Extension For Blocking Unwanted Content",
        "idea3":"We are looking to build a chrome extension which lets user block any content / image / videos on internet which are not suitable to his preferences. The product basically targets people who are recovering from addictions and children who may unknowingly access content which they should not. We'll be looking to do this in Javascript so a little experience with Javascript would be appreciated."
    },
    {
        "name":"Ujjwal Arora",
        "title1":"Emoji, Video, and Audio Support for RocketChat Android App",
        "idea1":"Emojis, video messages, and audio messages are current supported by the RocketChat web app. They are not, however, by their official android application. Your goal will be to port these features over to their android application.\nRefer issues #113, #114, #175 on https://github.com/RocketChat/Rocket.Chat.Android",
        "title2":"Improve Table Structure Tab of PHPMyAdmin",
        "idea2":"Discussions of improving the table structure tab are currently about at https://github.com/phpmyadmin/phpmyadmin/projects/1\nYou will participate there, get the plans ready, and implement it!",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Raamish Malik",
        "title1":"Online Code Judge",
        "idea1":"The brief idea here is to simulate the working of the popular online code judges like SPOJ and CodeChef but with the added functionalities of p2p chat or file sharing (more feature suggestions are welcome). \nFrontend would be web obviously with the choice of backend left for the mentee's comfort.",
        "title2":"Music Recommendation as a Service",
        "idea2":"We have always ran into the problem of liking one song but never able to find songs similar to that. To tackle such problems, the idea is to provide a web service (or as an API) that connects with a users music history and tries to suggest songs similar to the taste of the user's music choice.\nAn additional feature would be standalone suggestion by just taking a song as input and providing similar genre songs (more work needed here).",
        "title3":"Chrome Extension For Blocking Unwanted Content",
        "idea3":"We are looking to build a chrome extension which lets user block any content / image / videos on internet which are not suitable to their preferences. The product basically targets people who are recovering from addictions and children who may unknowingly access content which they should not. We'll be looking to do this in Javascript so a little experience with Javascript would be appreciated."
    },
    {
        "name":"Yash Kumar Lal",
        "title1":"Simple Natural Language Processing techniques",
        "idea1":"Native implementation and evaluation of Part of Speech tagging, language modeling and representation. Baselining of each algorithm and testing to be included. Further algorithms and approaches can be covered if time permits (leeway for students). This is a good project for people looking to start (or solidify) NLP.",
        "title2":"Backend for Samaritan smart system",
        "idea2":"https://github.com/avikantz/Samaritan was designed to be a semi-intelligent system based on Samaritan from Person of Interest. Python implementation of context recognition from available query in the backend. Students can also come up with other ideas that the system would benefit from.",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Avikant Saini",
        "title1":"Meme Maker",
        "idea1":"The involved student(s) as a part of the MemeMaker organization (https://github.com/MemeMaker) would be required to do:\n- [iOS/Swift] Improve on the existing Meme Maker iOS app (Swift 3 port to begin with)\n- [iOS/Swift] Adding new features to the application.\n- [Python/Flask] Adding new features to the backend.\n- [Android/Java] Port MemeMaker to Android\n\nBenefits:\n- Dank Memer certification.\n- Shoutout on Qnax Zrzrf (:p).",
        "title2":"Samaritan-AI",
        "idea2":"The involved student(s) will be expected to work on the following as an attempt to create a working heavily downsized and non evil clone of Samaritan from CBS' Person of Interest.\n- [HTML/CSS/JS] Make a web interface for Samaritan. Something along the lines of (https://github.com/avikantz/Samaritan) (Right now we have a clone http://samaritan-ai.herokuapp.com)\n- [Android/Java] Create a front end all code interface using graphics libraries for Samaritan (Similar to what's done for iOS at (https://github.com/avikantz/Samaritan)\n\nBenefits:\n-Lifetime protection from Samaritan\n-Placement in Northern Lights program\n-Nautilus solutions",
        "title3":"Instant Cutouts",
        "idea3":"The involved students shall be expected to work on a machine learned image processing platform (Python/OpenCV/SciKitLearn) to get instant cutouts of subjects from images. This project is still in ideas phase, so the student shall have the chance to start afresh.\nMotivation: As a photoshopper/memer, most of the time is spent in getting cutouts of people (For n00bs: A cutout is a background removed image of a subject (e.g. http://i.imgur.com/fjYfbNT.png))\n(Some datasets and examples can be taken from r/cutouts)\n\nBasic workflow shall be:\n[Input image] -- system -> [cutout]\nAdvanced workflow:\n[Input image with multiple subjects] -- system -- [list of subjects] -- interface to select -> [Cutout(s)]"
    },
    {
        "name":"Aditya Walvekar",
        "title1":"Skribe",
        "idea1":"A voice to text transcriber. Useful in meetings, and other events. Preferred language:Python. Past experience of dealing with sound is helpful. This app can be extended to support multiple people, auto voice recognition, applying some ML to extract key words and return a TLDR.",
        "title2":"OnePay",
        "idea2":"Often, while switching from one payment gateway to another, a huge chunk of the app needs to be re-built to fit the API calls of the newer payment gateway. With OnePay, we can build an open source module to handle transaction of any Payment Gateway through a single interface. ",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Chinmay Nivsarkar",
        "title1":"MIT-Linux",
        "idea1":"Despite being a technical college, Linux receives little love at MIT given the fact that it is largely believed it is not as intuitive to use. Hence the plan is to build a debian based compiled-from-source distro, tailor made for MIT students. Customised in such a way that it contains open-source/linux based alternatives for all necessary applications used by the students, additionally providing desktop environments and apps that help for an easy transition into Linux, when coming from a Windows background.\n\nLanguages : C,Linux",
        "title2":"Location Based Reminder ",
        "idea2":"An app that allows you to tag tasks and locations together - mobile network, GPS or WiFi based. Purpose of the app is to simplify problems that involve group effort by setting up a system that can notify different people across devices. The base idea is to tag people in said tasks and remind them to complete if the tag matches their location - where the tag is either a location (Network/GPS) or BSSID(WiFi). Any further enhancements can be discussed and implemented.\n\nLanguages: Android",
        "title3":"Server Monitoring Chat Bot",
        "idea3":"A hosted server often is SSH-ed or needs a browser to view statistics about health and activity. To simplify this process, build a bot in Python (using the Telegram Bot API) that can use command line tools/ read from certain files on the server and display certain stats interactively, depending on the query. Some form security must be implemented that ensures the connection cannot be exploited, but this could simplify the monitoring process significantly.\n\nLanguages : Python,Linux"
    },
    {
        "name":"Punit Bhatt",
        "title1":"Text detection and localisation in images",
        "idea1":"A neural network needs to be designed to help detect text in images without the use of any existing neural network libraries. Also, the location of the detected text needs to be found out.",
        "title2":"Parallel computer vision library",
        "idea2":"Create a python library containing the CUDA implementation of basic computer vision algorithms like filters, edge detectors . It needs to be well documented and written in an object oriented manner. Everything must be written from scratch without using any other CV libraries. ",
        "title3":"Python library for basic Linux commands",
        "idea3":""
    },
    {
        "name":"Saketh Kaparthi",
        "title1":"Location based silent mode",
        "idea1":"An android app that tracks the current location of user, when in the vicinity of any user specified location(s) switches the mobile to silent mode.",
        "title2":"VR Platformer game(Google cardboard)",
        "idea2":"A simple VR  endless runner platformer game. Uses unity3d and C# / JavaScript. For a good idea of what the game will be, look at \nhttps://play.google.com/store/apps/details?id=co.outtabed.hopvr\nNote: Cardboard headset and android phone with version 5.0+ required",
        "title3":"Local messenger",
        "idea3":"An android app that makes a chat client, which connects devices across the same network and helps communicate locally(without internet)."
    },
    {
        "name":"Siddharth Kothiyal",
        "title1":"Remote Screen Control (Android)",
        "idea1":"Remote Screen Control let's you create an interface which allows you to share the screen and lets another user control the system remotely in real time, in an easy way (basically a Team Viewer clone). This project will be dealing with the Android implementation of Ishan Handa's Remote Screen Control and at many times you will find yourself working hand in hand with the person working on that project. The app should allow your phone to be universally controlled by another system or may be able to control another system (not necessarily another Android).  While doing this you'll have to work on various different components like key logger/screen touches, using sockets to transfer images, file transfers, live video and voice chat etc. The biggest challenge when it comes to this problem is to reduce the lag of videos over the internet. In addition to it the student will find themselves working a lot with the background services in android, which will be an amazing learning experience. ",
        "title2":"Physics Simulator",
        "idea2":"This project will mostly be made on Python (pref) or C++, and will extensively use OpenGL to visually represent the simulations. The project aims to (as the name suggests) simulate basic real world physics problems, like a bouncing ball,  floating object, collisions. Would be a fun experience for people interested in physics. In the initial days the student will be involved in making basic primitives available to the user. After that the student will get to work on making simulations possible. Brownie points for providing functionalities like pan, zoom, rotate etc, in the simulations. ",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Arjun Narayan",
        "title1":"Club Online Event Framework",
        "idea1":"Most clubs have an event which mostly fits a question and answer framework. We can create a nice framework and expedite the whole process. ",
        "title2":"2D Game Engine ",
        "idea2":"Will be an amazingly difficult but rewarding project. Pretty Self explanatory on the end goal :P. Can be as simple or as complex as you want it to be. ",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Sudarshan Sunder",
        "title1":"Smallr - Minimizing boilerplate code in Android",
        "idea1":"Smallr, an Android library that aims to minimize/remove the need to write so much boilerplate code (Code that needs to be written with little or no modifications just to make something work). One such example is the RecyclerView adapter and the FragmentPager adapter. This library is essentially a wrapper to such classes (one's mentioned above and more) that reduces the amount of code required to accomplish the same thing.",
        "title2":"Braille OCR using Python ",
        "idea2":"This application reads out Braille in English for the visually impaired. It uses Machine learning in order to recognize the braille characters. The characters are then mapped to their corresponding English alphabet. It then uses TTS to read out the sentence in English or any language that the user prefers (Using Google translate API). ",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Mayank Bansal",
        "title1":"Public Reactometer ",
        "idea1":"This project involves aggregating news from pre determined trusted sources and aggregating them in one place as well as listing possible fake news sources. The reactometer measures public opinion in terms of (angry, uneducated, happy, supporting, against, sad, etc.) based on articles from the web, Facebook, Twitter and other social media platforms. The system would require sentiment analysis to analyse text and then would have to map reactions onto a web platform. Requires HTML, JS, CSS, and any web backend platform (Node, PHP, Flask)",
        "title2":"Money Genie",
        "idea2":"This project involves building a chat bot (on Facebook messenger) that can parse and understand basic monetary transactions like \"Spent $32 on ????? today\", \"Borrowed $50 from ?????\", \"????? Owes me some money\" (sends reminder to that person), \"Transfer balance to ????\" (Pay money you owe), etc and will log everything for you so you can see how much you spent and keep track of money you lent, or borrowed. Involves understanding of language parsing, chatbots, Facebook messenger API.",
        "title3":"SentiBox UI/UX",
        "idea3":"SentiBox is a UI/UX project which involves developing a web framework for being able to create an online personal scrapbook with different paper materials, photos, post-it notes, etc. Users should be allowed to upload pictures, scale, rotate and place it in their online journal. There would be different handwritten fonts as well. This project would require knowledge of CSS, JS (A lot) , HTML."
    },
    {
        "name":"Sukriti Paul",
        "title1":"Analysis of Log files and box files of the Tesseract OCR for Indic scripts and an API for Indic-Script Character Recognition",
        "idea1":"Optical Character Recognition plays a vital role in fields like pattern recognition,text mining, computer vision and text to speech analysis-to name a few. While training Tesseract 3.03-3.05 (OCR) for Indic scripts, there are ambiguities regarding a few factors,as stated below:<br><br>1.Number of training files to be considered<br><br>2.Should the numeral training files be separate?<br><br>3.Although there is a limit of 64 font files for these versions, is it better to mix different fonts for  a script, within the same training file?<br><br>4.Will modifying the dictionary help in case of special characters?Problem Statement : The aim is to infer the most optimal and generalised strategy  to train the OCR by using log and box files and to build on it by making an API for recognition of such fonts(obtaining their UNICHAR values in .txt).This could be further used in a spelling corrector, transliteration or translation system or for learning new languages.<br><br>(Owing to the lack of comparative analysis of results obtained on  training the tesseract for Indic scripts, we will be considering pre-processed images or scene text of two such contrasting scripts.Any number of fonts under the two scripts can be used).<br><br>Pre-requisites:The student should have a basic knowledge of the Tesseract OCR,Python(Flask) and should be well versed with data retrieval, cleaning and visualisation using R.",
        "title2":"Bio-Medical Android App based on Image Analysis of X-ray Images",
        "idea2":"Although there exist extensive image processing techniques to analyse X-ray images using MATLAB,Octave,OpenCV or Scikit-Image ,this is aimed at analysing X-ray images almost instantaneously and simplistically, where the target user (doctor/patient) need not have extensive prior knowledge of image processing techniques.From a layman’s perspective, fractures,cracks ,cavities etc are easily viewable when the image is thresholded after de-noising it. The app certainly provides a platform for a lot of future work and can be extended to RGB or BGR images.<br><br>Problem statement:<br><br>a) To develop a robust algorithm comprising a segmented, thresholded and edge detected clear image, based on the parameters given by the user.The image samples need to be pre- processed (de-noised and enhanced)<br><br>b)To implement the algorithm on an Android platform display the results (final image).<br><br>Pre-requisites:The student should have a basic knowledge of Android Application Development, basic Image Processing concepts and their implementation via either OpenCV,MATLAB or Scikit-Image.",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Vrushank Upadhyay",
        "title1":"Visualization of popular algorithms in Python using NetworkX Graph library",
        "idea1":"The primary aim of the project will be to implement basic algorithms starting from Depth first search, Breadth first search to Advanced algorithms which are NP-Hard such as Travelling Salesman Problem, etc. The Mentees will be given the documentation of the algorithm and the task would be to use NetworkX library and visualize the output. The NetworkX library is fairly easy to use. It has a lot of built in potential which we can use to automate our work.  Basic python knowledge would be sufficient for this project. Here are some easy examples on using NetworkX library: https://networkx.github.io/examples.html",
        "title2":"Remote Screen Control",
        "idea2":"Remote Screen Control let's you control Linux systems remotely, in a easy and fast way over local area networks (basically a Team Viewer clone). While doing this you'll have to work on various different components like key logger, using sockets to transfer images, file transfers, live video and voice chat etc. The biggest challenge when it comes to this problem is to reduce the lag of videos over the internet. ",
        "title3":"",
        "idea3":""
    }
    ];

    var mentees = [
    {
        "name": "Abhishree Shetty",
        "project": "Visualization of popular algorithms in Python using NetworkX Graph library",
        "mentor": "Vrushank Upadhyay",
        "link": "https://goo.gl/yyr3ym"
    },
    {

        "name": "Rachit jain",
        "project": "Backend for Samaritan smart system",
        "mentor": "Yash Kumar lal",
        "link": "http://bit.ly/2rK6ANh"
    },
    {

        "name": "Sanidhya Sinha",
        "project": "Document fingerprinting",
        "mentor": "Ishan Handa",
        "link": "https://docs.google.com/document/d/1pbUT8pyciRweqLeB6asBCFXfbrJU1DXdv7fTJT1Aas4/edit?usp=drivesdk"
    },
    {

        "name": "Paras Sood",
        "project": "A Biomedical Android App based on Image Analysis of X-ray Images",
        "mentor": "Sukriti Paul",
        "link": "https://docs.google.com/document/d/1RMHVVh3F9gnmb0SPVRpS66MGhxSibxJg2bkZuO0BZvE/edit?usp=sharing"
    },
    {

        "name": "Divyanshu Singh",
        "project": "Facebook Bot for DigitalOcean Server Management",
        "mentor": "Bhargav Karanam",
        "link": "https://docs.google.com/document/d/1PmxsJL5gHUCu7in4pPpKA6kAz_hM1hANkdaA1Df5muM/edit?usp=sharing"
    },
    {

        "name": "Harshit Raghuvanshi",
        "project": "MIT Linux",
        "mentor": "Chinmay Nivsarkar",
        "link": "https://docs.google.com/document/d/1i7rDEbEaGW6Anq-1DdkMm_OfNcfx-Udb7cI4beLvMLQ/edit?usp=sharing"
    },
    {

        "name": "Yashika Badaya",
        "project": "Braille OCR using Python",
        "mentor": "Sudarshan Sundar",
        "link": "https://drive.google.com/file/d/0B6RSEI9ImyRMVlRPOFB2aXJqX1E/view?usp=sharing"
    },
    {

        "name": "Ayushi Raj Bhatt",
        "project": "Tesseract OCR",
        "mentor": "Sukriti Paul",
        "link": "https://docs.google.com/document/d/1CCIEFR-H_zCkk0slsYU1TEY9UCj5lvJQfIh5fCTvwkA/edit?usp=sharing"
    },
    {

        "name": "Nitanshu Vashistha",
        "project": "CLI for ReadTheDocs",
        "mentor": "Mehul Gupta",
        "link": "https://docs.google.com/document/d/1JTl962wgnykGePGpKrmfWpdedERM1SE2iAPHeh36zOM/edit?usp=sharing"
    },
    {

        "name": "swati kanwal",
        "project": "Chrome Extension For Blocking Unwanted Content",
        "mentor": "Raamish Malik and Ishan Handa",
        "link": "https://docs.google.com/document/d/1pZwUJqnu9MTX3fQxQ0jaXdWGicNFvPE3cOnlinJrGiU/edit"
    },
    {

        "name": "Manya Gupta",
        "project": "Location based silent app",
        "mentor": "Saketh Kaparthi",
        "link": "https://drive.google.com/file/d/0Bzp-tN5uQGbbTmh1empWX2hzbU0/view?usp=sharing"
    },
    {

        "name": "Vishnu Asutosh Dasu",
        "project": "Simple Natural Processing Techniques",
        "mentor": "Yash Kumar Lal",
        "link": "https://docs.google.com/document/d/1e-pGr24MZl8IsilbZySsm8UfBAANAxhUmQFtFEH541g/edit#"
    },
    {

        "name": "Sameer Soin",
        "project": "Remote Screen Control(Android)",
        "mentor": "Siddharth Kothiyal",
        "link": "https://drive.google.com/open?id=0B2bHKb5jBwYvSHFNUG0wQzlMVEU"
    }
    ];


    $(document).on("click",".btn-projects",function(){
        $("body").css('overflow-y','hidden');
        var name = $(this).data("name");
        var pDetails = JSON.search(projectIdeas,'//*[name="' + name + '"]');
        var mDetails = JSON.search(mentors,'//*[name="' + name + '"]');
        $(".sidenav-details").empty();
        if(pDetails[0].title3 == "")
            $(".sidenav-details").append('<h2 class="section-heading text-center">' + name + '</h2> <div class="row">&nbsp;</div><h4>Domain:</h4><span>' + mDetails[0].domain + ' </span><h4>Languages:</h4><span>' + mDetails[0].languages + ' </span><div class="row">&nbsp;</div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title1 + '</h3> <p class="card-text">' + pDetails[0].idea1 + '</p></div></div></div></div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title2 + '</h3> <p class="card-text">' + pDetails[0].idea2 + '</p></div></div></div></div>');
        else
            $(".sidenav-details").append('<h2 class="section-heading text-cente">' + name + '</h2> <div class="row">&nbsp;</div><h4>Domain:</h4><span>' + mDetails[0].domain + ' </span><h4>Languages:</h4><span>' + mDetails[0].languages + ' </span><div class="row">&nbsp;</div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title1 + '</h3> <p class="card-text">' + pDetails[0].idea1 + '</p></div></div></div></div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title2 + '</h3> <p class="card-text">' + pDetails[0].idea2 + '</p></div></div></div></div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title3 + '</h3> <p class="card-text">' + pDetails[0].idea3 + '</p></div></div></div></div>');
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $("#mySidenav").css('width',"100%");
        }
        else 
            $("#mySidenav").css('width',"100%");
    });




    $(document).on("click",".closebtn",function(){
        $("body").css('overflow-y','auto');
        document.getElementById("mySidenav").style.width = "0";
    });

    $.each(mentors,function(k,v){

        $(".mentorsHolder").append('<div class="col-md-4 col-lg-4 col-sm-11 col-xs-11"> <div class="card"> <div class="card-img-top"><div style="background:url(' + v.image + ');background-size:cover;background-repeat:no-repeat;background-position:center center;width:100%;height:100%;"></div></div> <div class="card-block"> <h4 class="card-title text-muted">' + v.name + '</h4> <p class="text-muted card-text text-left">Domain: '+ v.domain+ '<br>Languages: '+ v.languages +'</p><button data-name="' + v.name + '" class="btn btn-default btn-xl sr-button btn-projects">View Projects</button></p><p class="card-text"><small class="text-muted"><a target="_blank" href="' + v.github + '"><i class="fa fa-github fa-2x"></i></a><a target="_blank" href="tel:' + v.mobile + '"><i class="fa fa-phone fa-2x"></i></a><a target="_blank" href="mailto:' + v.email + '"><i class="fa fa-envelope fa-2x"></i></a></small></p></div></div></div>');
    });


    $.each(mentees,function(k,v){

        $("#mentees").append('<div class="row menteeCard"> <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 menteeDetails"><h2 class="menteeName">' + v.name + ' </h2><div class="mentorDetails"><h4>MENTOR</h4><h3 class="mentorName">' + v.mentor + '</h3></div></div><div class="col-md-7 col-lg-7 col-sm-12 col-xs-12 menteeOther"><h3>' + v.project + '</h3><center><a target="_blank" class="btn btn-primary" href="' + v.link + '">View Proposal</a></center></div></div>');
    });

})(jQuery); // End of use strict