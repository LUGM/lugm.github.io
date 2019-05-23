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
        "name":"Pavan Kalyan",
        "mobile":"8008882650",
        "whatsapp":"8008882650",
        "email":"damalapati.pavan@gmail.com",
        "github":"https://github.com/pavan-kalyan",
        "domain":"Web dev,ML/AI,Linux Server,Android App Dev",
        "languages":"Go, Python, C, Java, Javascript",
        "image": "https://github.com/pavan-kalyan.png"
    },
    {
        "name":"Rahul Sathanapalli",
        "mobile":"9513391337",
        "whatsapp":"9513391337",
        "email":"skvrahul@gmail.com",
        "github":"https://github.com/skvrahul",
        "domain":"Artificial Intelligence, Game Theory",
        "image": "https://github.com/skvrahul.png",
        "languages":"C, C++, Java, Python,Objective-C"
    },
    {
        "name":"Somansh Reddy",
        "mobile":"9959525552",
        "whatsapp":"9959525552",
        "email":"somanshreddy@gmail.com",
        "github":"https://github.com/somanshreddy",
        "domain":"Machine Learning,Artificial Intelligence",
        "languages":"C/C++, Java, Python",
        "image": "https://github.com/somanshreddy.png"
    },
    {
        "name":"Reuben Nellissery",
        "mobile":"8278921004",
        "whatsapp":"8278921004",
        "email":"reubennellissery@gmail.com",
        "github":"https://github.com/bennyhawk",
        "domain":"Android, Web dev",
        "languages":"Java, Python, C++",
        "image": "https://github.com/bennyhawk.png"
    },
    {
        "name":"Karan Mannan",
        "mobile":"",
        "whatsapp":"",
        "email":"drkaranmannan@gmail.com",
        "github":"https://github.com/knmn2000",
        "domain":"Computer Vision, Machine Learning",
        "languages":"Python",
        "image": "https://github.com/knmn2000.png"
    },
    {
        "name":"Utkarsh Raj",
        "mobile":"8586897126",
        "whatsapp":"8586897126",
        "image": "https://github.com/utk3012.png",
        "email":"utkarsh3012@gmail.com",
        "github":"https://github.com/utk3012",
        "domain":"Web development",
        "languages":"Vue.js, Angular, Java, C++, JavaScript"
    },
    {
        "name":"Vishwa Kalyanaraman",
        "mobile":"7019045616",
        "whatsapp":"7019045616",
        "email":"vishwa.kalyanaraman@gmail.com",
        "github":"https://github.com/vishwakalyanaraman",
        "domain":"Machine Learning, Deep Learning, Web dev",
        "image": "https://github.com/vishwakalyanaraman.png",
        "languages":"JavaScript, Python, C, Python"
    },
    {
        "name":"Yashika Badaya",
        "mobile":"8296538870",
        "whatsapp":"8296538870",
        "email":"yashikabadaya@gmail.com",
        "github":"https://github.com/yashikabadaya",
        "domain":"ML, Data Science, Image Processing, Scripting",
        "image": "https://github.com/yashikabadaya.png",
        "languages":"Python, OpenCv"
    },
    {
        "name":"Rohit Sarkar",
        "mobile":"9765268459",
        "whatsapp":"9765268459",
        "email":"rohitsarkar5398@gmail.com",
        "github":"https://github.com/rsarky",
        "domain":"Full Stack Web Dev ",
        "image": "https://github.com/rsarky.png",
        "languages":"JavaScript, React, Angular, Node and Firebase."
    },
        {
        "name":"Sai Vignesh",
        "mobile":"8296539672",
        "whatsapp":"8296539672",
        "email":"dragoonvignesh1998@gmail.com",
        "github":"https://github.com/dragoonvignesh1998",
        "domain":"Web dev, command line programs",
        "image": "https://github.com/dragoonvignesh1998.png",
        "languages":"C, Java, Python, JavaScript"
    },
        {
        "name":"Tushar Dadlani",
        "mobile":"+16503355986",
        "whatsapp":"+16503355986",
        "email":"tush726@gmail.com",
        "github":"https://github.com/tushar-dadlani",
        "domain":"Computer Vision, Containers",
        "image": "https://github.com/tushar-dadlani.png",
        "languages":"C/C++, Java, Python, JavaScript, Web dev"
    }



    ];


    var projectIdeas = [
    {
        "name":"Rahul Sathanapalli",
        "title1":"An Automted agent which can play the game '2048'",
        "idea1":"The task at hand is to develop an automated agent that will be able to play the popular casual gamewhich goes by the name '2048’. The task will include developing the engine or environment for the game(and perhaps a GUI if you wish) which can then be linked to your agent. In the case that some sort of sampling of agents play is being done, the participant can even implement a parallel or threaded environment/engine that will allow you to run multiple instances of the game in batches and sample from these to score your agent.",
        "title2":"",
        "idea2":"",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Karan Mannan",
        "title1":"A bot to drive cars in games",
        "idea1":"Making a Bot to drive cars in games using OpenCV, by detecting lanes and paths, and sending Direct inputs accordingly .",
        "title2":"A bot to drive cars in games using neural networks.",
        "idea2":"Same as above but uses neural networks.",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Somansh Reddy",
        "title1":"Toxic Comment Classification",
        "idea1":"you’re challenged to build a multi-headed model that’s capable of detecting different types of of toxicity like threats, obscenity, insults, and identity-based hate better than Perspective’s current models. You’ll be using a dataset of comments from Wikipedia’s talk page edits. Prereq:language like Python or C/C++. Bonus: Python,Keras,Tensorflow.",
        "title2":"",
        "idea2":"",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Reuben Nellissery",
        "title1":"BetterType (Android app)",
        "idea1":"the objective of the android app is to enhance the quality of writing by suggesting better words. when the user types text into the app, the app underlines the areas that can be enhanced, on clicking the area, an option to modify the selection is presented. user can choose to modify or ignore the suggestion.planned suggestion: spell check, replace recurring words with synonyms.",
        "title2":"",
        "idea2":"",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Vishwa Kalyanaraman",
        "title1":"SmartFridge Applications",
        "idea1":"An application that suggests a list of food recipes that can be made with a given number of ingredients as input. The ingredients are classified using machine learning techniques and are then used to find recipes. prereq:android app dev, strong machine learning fundamentals.",
        "title2":"Bill Splitting Web App",
        "idea2":"A web application that allows a group of friends to easily split bills at restaurants. prereq: React or any other web dev suite.",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Utkarsh Raj",
        "title1":"Archive Feature for the MUSOC site.",
        "idea1":"Add View Archive feature on the LUGM MUSoC website (similar to https://summerofcode.withgoogle.com/archive/). This feature will help participants view past projects arranged year wise. Each project will have its description, technologies used and information about the mentor and the participant. prereq: HTML,CSS,JavaScript",
        "title2":"",
        "idea2":"",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Yashika Badaya",
        "title1":"Object Recognition",
        "idea1":"Object recognition using opencv,python and machine learning",
        "title2":"Easy file Management",
        "idea2":"file management of operating systems using python scripting and cli commands.",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Sai Vignesh",
        "title1":"Meme generator on the Command Line",
        "idea1":"Create simple memes on the command line with blazing speed, with features like viewing the template/final meme, adding text to the top and bottom and more. Prereq:any language with decent cli support like Go, pyton or C/C++.",
        "title2":"",
        "idea2":"",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Tushar Dadlani",
        "title1":"Inference metrics of multi-stage computer vision models in production",
        "idea1":"The task would be to measure properties of multi-stage computer vision models in production.(E.g: measuring FPS of the computer vision processing pipeline) Prereq: Python 3, tensorflow/pytorch, basics of computer vision",
        "title2":"",
        "idea2":"",
        "title3":"",
        "idea3":""
    },
    {
        "name":"Pavan Kalyan",
        "title1":"An open source implementation of Amazon's WhisperSync (and similar tech)",
        "idea1":"The task would be to code a server app on linux which synchronises e-book metadata (last page read, bookmarks, notes), the clients in this case can be an android app( ebook reader) or a web app which requests the server for metadata and uploads any change in metadata. the server can synchronize metadata with a library of books (database) from a e-book management tool like calibre.(Any suitable language is fine)",
        "title2":"",
        "idea2":"",
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
        "name":"Rohit Sarkar",
        "title1":"Event booking portal feature implementation",
        "idea1":"The task is to implement new features for the event booking portal of MIT using React, Nodejs and firebase.",
        "title2":"",
        "idea2":"",
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

        "name": "Rachit Jain",
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

        "name": "Swati Kanwal",
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
    },
    {

        "name": "Akash Kalra",
        "project": "Money Genie",
        "mentor": "Mayank Bansal",
        "link": "https://docs.google.com/document/d/1p7BSP2WK96E702OltZUNJ3jhw00OKcrinOIPIaMgjVo/edit?usp=sharing"
    },
    {

        "name": "Ayush Malviya",
        "project": "Physics Simulator",
        "mentor": "Siddharth Kothiyal",
        "link": "https://drive.google.com/file/d/0B58WlDabcUEZWkg1OUE3YzhnNW8/view?usp=sharing"
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

        $(".selectedHolder").append('<div class="row menteeCard"> <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 menteeDetails"><h2 class="menteeName">' + v.name + ' </h2><div class="mentorDetails"><h4 style="color: #FFFFFF;">MENTOR</h4><h3 class="mentorName">' + v.mentor + '</h3></div></div><div class="col-md-7 col-lg-7 col-sm-12 col-xs-12 menteeOther"><h3 class="text-muted">' + v.project + '</h3><center><a target="_blank" class="btn btn-primary" href="' + v.link + '">View Proposal</a></center></div></div>');
    });

})(jQuery); // End of use strict
