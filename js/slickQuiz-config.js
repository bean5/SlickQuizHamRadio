// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Practice for the Technician Amateur Radio Exam!!",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Questions for this website were taken from the freely available Technician exam pool at <a href=\"http://www.ncvec.org/page.php?id=349\">www.ncvec.org/</a></p>",
        "level1":  "Test Ready",
        "level2":  "Test Contender",
        "level3":  "Test Amateur",
        "level4":  "Ham Radio Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        //SUBELEMENT T1 – FCC Rules, descriptions and definitions for the amateur radio service, operator and station license responsibilities - [6 Exam Questions - 6 Groups]

        //T1A - Amateur Radio services; purpose of the amateur service, amateur-satellite service, operator/primary station license grant, where FCC rules are codified, basis and purpose of FCC rules, meanings of basic terms used in FCC rules

        {
            "q" : "For whom is the Amateur Radio Service intended?",
            "a": [
                {"option": "Persons who have messages to broadcast to the public",  "correct": false},
                {"option": "Persons who need communications for the activities of their immediate family members, relatives and friends",   "correct": false},
                {"option": "Persons who need two-way communications for personal reasons",  "correct": false},
                {"option": "Persons who are interested in radio technique solely with a personal aim and without pecuniary interest",   "correct": true}
            ],
            "correct": "The answer was: \"Persons who are interested in radio technique solely with a personal aim and without pecuniary interest\". (See also [97.3(a)(4)])",
            "incorrect": "Incorrect. The answer was: \"Persons who are interested in radio technique solely with a personal aim and without pecuniary interest\". (See also [97.3(a)(4)])"
        },


        {
            "q" : "What agency regulates and enforces the rules for the Amateur Radio Service in the United States?",
            "a": [
                {"option": "FEMA",  "correct": false},
                {"option": "The ITU",   "correct": false},
                {"option": "The FCC",   "correct": true},
                {"option": "Homeland Security", "correct": false}
            ],
            "correct": "The answer was: \"The FCC\". (See also [97.1])",
            "incorrect": "Incorrect. The answer was: \"The FCC\". (See also [97.1])"
        },


        {
            "q" : "Which part of the FCC rules contains the rules and regulations governing the Amateur Radio Service?",
            "a": [
                {"option": "Part 73",   "correct": false},
                {"option": "Part 95",   "correct": false},
                {"option": "Part 90",   "correct": false},
                {"option": "Part 97",   "correct": true}
            ],
            "correct": "The answer was: \"Part 97\".",
            "incorrect": "Incorrect. The answer was: \"Part 97\"."
        },


        {
            "q" : "Which of the following meets the FCC definition of harmful interference?",
            "a": [
                {"option": "Radio transmissions that annoy users of a repeater",    "correct": false},
                {"option": "Unwanted radio transmissions that cause costly harm to radio station apparatus",    "correct": false},
                {"option": "That which seriously degrades, obstructs, or repeatedly interrupts a radio communication service operating in accordance with the Radio Regulations",   "correct": true},
                {"option": "Static from lightning storms",  "correct": false}
            ],
            "correct": "The answer was: \"That which seriously degrades, obstructs, or repeatedly interrupts a radio communication service operating in accordance with the Radio Regulations\". (See also [97.3(a)(23)])",
            "incorrect": "Incorrect. The answer was: \"That which seriously degrades, obstructs, or repeatedly interrupts a radio communication service operating in accordance with the Radio Regulations\". (See also [97.3(a)(23)])"
        },


        {
            "q" : "What is the FCC Part 97 definition of a space station?",
            "a": [
                {"option": "Any multi-stage satellite", "correct": false},
                {"option": "An Earth satellite that carries one of more amateur operators ",    "correct": false},
                {"option": "An amateur station located less than 25 km above the Earth's surface",  "correct": false},
                {"option": "An amateur station located more than 50 km above the Earth's surface",  "correct": true}
            ],
            "correct": "The answer was: \"An amateur station located more than 50 km above the Earth's surface\". (See also [97.3(a)(40)])",
            "incorrect": "Incorrect. The answer was: \"An amateur station located more than 50 km above the Earth's surface\". (See also [97.3(a)(40)])"
        },



        {
            "q" : "What is the FCC Part 97 definition of telecommand?",
            "a": [
                {"option": "An instruction bulletin issued by the FCC", "correct": false},
                {"option": "A one-way radio transmission of measurements at a distance from the measuring instrument",  "correct": false},
                {"option": "A one-way transmission to initiate, modify or terminate functions of a device at a distance",   "correct": true},
                {"option": "An instruction from a VEC", "correct": false}
            ],
            "correct": "The answer was: \"A one-way transmission to initiate, modify or terminate functions of a device at a distance\". (See also [97.3(a)(43)])",
            "incorrect": "Incorrect. The answer was: \"A one-way transmission to initiate, modify or terminate functions of a device at a distance\". (See also [97.3(a)(43)])"
        },


        {
            "q" : "What is the FCC Part 97 definition of telemetry?",
            "a": [
                {"option": "An information bulletin issued by the FCC", "correct": false},
                {"option": "A one-way transmission to initiate, modify or terminate functions of a device at a distance",   "correct": false},
                {"option": "A one-way transmission of measurements at a distance from the measuring instrument",    "correct": true},
                {"option": "An information bulletin from a VEC",    "correct": false}
            ],
            "correct": "The answer was: \"A one-way transmission of measurements at a distance from the measuring instrument\". (See also [97.3(a)(45)])",
            "incorrect": "Incorrect. The answer was: \"A one-way transmission of measurements at a distance from the measuring instrument\". (See also [97.3(a)(45)])"
        },


        {
            "q" : "Which of the following entities recommends transmit/receive channels and other parameters for auxiliary and repeater stations?",
            "a": [
                {"option": "Frequency Spectrum Manager",    "correct": false},
                {"option": "Frequency Coordinator", "correct": true},
                {"option": "FCC Regional Field Office ",    "correct": false},
                {"option": "International Telecommunications Union",    "correct": false}
            ],
            "correct": "The answer was: \"Frequency Coordinator\". (See also [97.3(a)(22)])",
            "incorrect": "Incorrect. The answer was: \"Frequency Coordinator\". (See also [97.3(a)(22)])"
        },


        {
            "q" : "Who selects a Frequency Coordinator?",
            "a": [
                {"option": "The FCC Office of Spectrum Management and Coordination Policy ",    "correct": false},
                {"option": "The local chapter of the Office of National Council of Independent Frequency Coordinators", "correct": false},
                {"option": "Amateur operators in a local or regional area whose stations are eligible to be auxiliary or repeater stations",    "correct": true},
                {"option": "FCC Regional Field Office", "correct": false}
            ],
            "correct": "The answer was: \"Amateur operators in a local or regional area whose stations are eligible to be auxiliary or repeater stations\". (See also [97.3(a)(22)])",
            "incorrect": "Incorrect. The answer was: \"Amateur operators in a local or regional area whose stations are eligible to be auxiliary or repeater stations\". (See also [97.3(a)(22)])"
        },


        {
            "q" : "What is the FCC Part 97 definition of an amateur station?",
            "a": [
                {"option": "A station in an Amateur Radio Service consisting of the apparatus necessary for carrying on radio communications",  "correct": true},
                {"option": "A building where Amateur Radio receivers, transmitters, and RF power amplifiers are installed", "correct": false},
                {"option": "Any radio station operated by a non-professional",  "correct": false},
                {"option": "Any radio station for hobby use",   "correct": false}
            ],
            "correct": "The answer was: \"A station in an Amateur Radio Service consisting of the apparatus necessary for carrying on radio communications\". (See also [97.3(a)(5)])",
            "incorrect": "Incorrect. The answer was: \"A station in an Amateur Radio Service consisting of the apparatus necessary for carrying on radio communications\". (See also [97.3(a)(5)])"
        },


        {
            "q" : "Which of the following stations transmits signals over the air from a remote receive site to a repeater for retransmission?",
            "a": [
                {"option": "Beacon station",    "correct": false},
                {"option": "Relay station", "correct": false},
                {"option": "Auxiliary station", "correct": true},
                {"option": "Message forwarding station",    "correct": false}
            ],
            "correct": "The answer was: \"Auxiliary station\". (See also [97.3(a)(7)])",
            "incorrect": "Incorrect. The answer was: \"Auxiliary station\". (See also [97.3(a)(7)])"
        },


        //T1B - Authorized frequencies; frequency allocations, ITU regions, emission type, restricted sub-bands, spectrum sharing, transmissions near band edges

        {
            "q" : "What is the ITU?",
            "a": [
                {"option": "An agency of the United States Department of Telecommunications Management",    "correct": false},
                {"option": "A United Nations agency for information and communication technology issues",   "correct": true},
                {"option": "An independent frequency coordination agency",  "correct": false},
                {"option": "A department of the FCC",   "correct": false}
            ],
            "correct": "The answer was: \"A United Nations agency for information and communication technology issues\". (See also [97.3(a)(28)])",
            "incorrect": "Incorrect. The answer was: \"A United Nations agency for information and communication technology issues\". (See also [97.3(a)(28)])"
        },


        {
            "q" : "North American amateur stations are located in which ITU region?",
            "a": [
                {"option": "Region 1",  "correct": false},
                {"option": "Region 2",  "correct": true},
                {"option": "Region 3",  "correct": false},
                {"option": "Region 4",  "correct": false}
            ],
            "correct": "The answer was: \"Region 2\".",
            "incorrect": "Incorrect. The answer was: \"Region 2\"."
        },


        {
            "q" : "Which frequency is within the 6 meter band?",
            "a": [
                {"option": "49.00 MHz", "correct": false},
                {"option": "52.525 MHz",    "correct": true},
                {"option": "28.50 MHz", "correct": false},
                {"option": "222.15 MHz",    "correct": false}
            ],
            "correct": "The answer was: \"52.525 MHz\". (See also [97.301(a)])",
            "incorrect": "Incorrect. The answer was: \"52.525 MHz\". (See also [97.301(a)])"
        },


        {
            "q" : "Which amateur band are you using when your station is transmitting on 146.52 MHz?",
            "a": [
                {"option": "2 meter band",  "correct": true},
                {"option": "20 meter band", "correct": false},
                {"option": "14 meter band", "correct": false},
                {"option": "6 meter band",  "correct": false}
            ],
            "correct": "The answer was: \"2 meter band\". (See also [97.301(a)])",
            "incorrect": "Incorrect. The answer was: \"2 meter band\". (See also [97.301(a)])"
        },


        {
            "q" : "Which 70 cm frequency is authorized to a Technician Class license holder operating in ITU Region 2?",
            "a": [
                {"option": "53.350 MHz",    "correct": false},
                {"option": "146.520 MHz",   "correct": false},
                {"option": "443.350 MHz",   "correct": true},
                {"option": "222.520 MHz",   "correct": false}
            ],
            "correct": "The answer was: \"443.350 MHz\". (See also [97.301(a)])",
            "incorrect": "Incorrect. The answer was: \"443.350 MHz\". (See also [97.301(a)])"
        },


        {
            "q" : "Which 23 cm frequency is authorized to a Technician Class operator license?",
            "a": [
                {"option": "2315 MHz",  "correct": false},
                {"option": "1296 MHz",  "correct": true},
                {"option": "3390 MHz",  "correct": false},
                {"option": "146.52 MHz",    "correct": false}
            ],
            "correct": "The answer was: \"1296 MHz\". (See also [97.301(a)])",
            "incorrect": "Incorrect. The answer was: \"1296 MHz\". (See also [97.301(a)])"
        },



        {
            "q" : "What amateur band are you using if you are transmitting on 223.50 MHz?",
            "a": [
                {"option": "15 meter band", "correct": false},
                {"option": "10 meter band", "correct": false},
                {"option": "2 meter band",  "correct": false},
                {"option": "1.25 meter band",   "correct": true}
            ],
            "correct": "The answer was: \"1.25 meter band\". (See also [97.301(a)])",
            "incorrect": "Incorrect. The answer was: \"1.25 meter band\". (See also [97.301(a)])"
        },


        {
            "q" : "What do the FCC rules mean when an amateur frequency band is said to be available on a secondary basis?",
            "a": [
                {"option": "Secondary users of a frequency have equal rights to operate",   "correct": false},
                {"option": "Amateurs are only allowed to use the frequency at night",   "correct": false},
                {"option": "Amateurs may not cause harmful interference to primary users",  "correct": true},
                {"option": "Secondary users are not allowed on amateur bands",  "correct": false}
            ],
            "correct": "The answer was: \"Amateurs may not cause harmful interference to primary users\". (See also [97.303])",
            "incorrect": "Incorrect. The answer was: \"Amateurs may not cause harmful interference to primary users\". (See also [97.303])"
        },


        {
            "q" : "Why should you not set your transmit frequency to be exactly at the edge of an amateur band or sub-band?",
            "a": [
                {"option": "To allow for calibration error in the transmitter frequency display",   "correct": false},
                {"option": "So that modulation sidebands do not extend beyond the band edge",   "correct": false},
                {"option": "To allow for transmitter frequency drift",  "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\". (See also [97.101(a)])",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\". (See also [97.101(a)])"
        },


        {
            "q" : "Which of the bands available to Technician Class operators have mode-restricted sub-bands?",
            "a": [
                {"option": "The 6 meter, 2 meter, and 70 cm bands", "correct": false},
                {"option": "The 2 meter and 13 cm bands",   "correct": false},
                {"option": "The 6 meter, 2 meter, and 1.25 meter bands",    "correct": true},
                {"option": "The 2 meter and 70 cm bands",   "correct": false}
            ],
            "correct": "The answer was: \"The 6 meter, 2 meter, and 1.25 meter bands\". (See also [97.305(c)])",
            "incorrect": "Incorrect. The answer was: \"The 6 meter, 2 meter, and 1.25 meter bands\". (See also [97.305(c)])"
        },


        {
            "q" : "What emission modes are permitted in the mode-restricted sub-bands at 50.0 to 50.1 MHz and 144.0 to 144.1 MHz?",
            "a": [
                {"option": "CW only",   "correct": true},
                {"option": "CW and RTTY",   "correct": false},
                {"option": "SSB only",  "correct": false},
                {"option": "CW and SSB",    "correct": false}
            ],
            "correct": "The answer was: \"CW only\". (See also [97.305 (a)(c)])",
            "incorrect": "Incorrect. The answer was: \"CW only\". (See also [97.305 (a)(c)])"
        },


        //T1C - Operator classes and station call signs; operator classes, sequential, special event, and vanity call sign systems, international communications, reciprocal operation, station license and licensee, places where the amateur service is regulated by the FCC, name and address on ULS, license term, renewal, grace period

        {
            "q" : "Which type of call sign has a single letter in both the prefix and suffix?",
            "a": [
                {"option": "Vanity",    "correct": false},
                {"option": "Sequential",    "correct": false},
                {"option": "Special event", "correct": true},
                {"option": "In-memoriam",   "correct": false}
            ],
            "correct": "The answer was: \"Special event\". (See also [97.3(a)(11)(iii)])",
            "incorrect": "Incorrect. The answer was: \"Special event\". (See also [97.3(a)(11)(iii)])"
        },


        {
            "q" : "Which of the following is a valid US amateur radio station call sign?",
            "a": [
                {"option": "KMA3505",   "correct": false},
                {"option": "W3ABC", "correct": true},
                {"option": "KDKA",  "correct": false},
                {"option": "11Q1176",   "correct": false}
            ],
            "correct": "The answer was: \"W3ABC\".",
            "incorrect": "Incorrect. The answer was: \"W3ABC\"."
        },


        {
            "q" : "What types of international communications are permitted by an FCC-licensed amateur station?",
            "a": [
                {"option": "Communications incidental to the purposes of the amateur service and remarks of a personal character",  "correct": true},
                {"option": "Communications incidental to conducting business or remarks of a personal nature",  "correct": false},
                {"option": "Only communications incidental to contest exchanges, all other communications are prohibited",  "correct": false},
                {"option": "Any communications that would be permitted on an international broadcast station",  "correct": false}
            ],
            "correct": "The answer was: \"Communications incidental to the purposes of the amateur service and remarks of a personal character\". (See also [97.117])",
            "incorrect": "Incorrect. The answer was: \"Communications incidental to the purposes of the amateur service and remarks of a personal character\". (See also [97.117])"
        },


        {
            "q" : "When are you allowed to operate your amateur station in a foreign country?",
            "a": [
                {"option": "When the foreign country authorizes it",    "correct": true},
                {"option": "When there is a mutual agreement allowing third party communications",  "correct": false},
                {"option": "When authorization permits amateur communications in a foreign language",   "correct": false},
                {"option": "When you are communicating with non-licensed individuals in another country",   "correct": false}
            ],
            "correct": "The answer was: \"When the foreign country authorizes it\".",
            "incorrect": "Incorrect. The answer was: \"When the foreign country authorizes it\"."
        },


        {
            "q" : "What must you do if you are operating on the 23 cm band and learn that you are interfering with a radiolocation station outside the United States?",
            "a": [
                {"option": "Stop operating or take steps to eliminate the harmful interference",    "correct": true},
                {"option": "Nothing, because this band is allocated exclusively to the amateur service",    "correct": false},
                {"option": "Establish contact with the radiolocation station and ask them to change frequency", "correct": false},
                {"option": "Change to CW mode, because this would not likely cause interference",   "correct": false}
            ],
            "correct": "The answer was: \"Stop operating or take steps to eliminate the harmful interference\". (See also [97.303(h)])",
            "incorrect": "Incorrect. The answer was: \"Stop operating or take steps to eliminate the harmful interference\". (See also [97.303(h)])"
        },


        {
            "q" : "From which of the following may an FCC-licensed amateur station transmit, in addition to places where the FCC regulates communications?",
            "a": [
                {"option": "From within any country that belongs to the International Telecommunications Union",    "correct": false},
                {"option": "From within any country that is a member of the United Nations ",   "correct": false},
                {"option": "From anywhere within in ITU Regions 2 and 3",   "correct": false},
                {"option": "From any vessel or craft located in international waters and documented or registered in the United States",    "correct": true}
            ],
            "correct": "The answer was: \"From any vessel or craft located in international waters and documented or registered in the United States\". (See also [97.5(a)(2)])",
            "incorrect": "Incorrect. The answer was: \"From any vessel or craft located in international waters and documented or registered in the United States\". (See also [97.5(a)(2)])"
        },


        {
            "q" : "What may result when correspondence from the FCC is returned as undeliverable because the grantee failed to provide the correct mailing address?",
            "a": [
                {"option": "Fine or imprisonment",  "correct": false},
                {"option": "Revocation of the station license or suspension of the operator license",   "correct": true},
                {"option": "Require the licensee to be re-examined",    "correct": false},
                {"option": "A reduction of one rank in operator class", "correct": false}
            ],
            "correct": "The answer was: \"Revocation of the station license or suspension of the operator license\". (See also [97.23])",
            "incorrect": "Incorrect. The answer was: \"Revocation of the station license or suspension of the operator license\". (See also [97.23])"
        },


        {
            "q" : "What is the normal term for an FCC-issued primary station/operator license grant?",
            "a": [
                {"option": "Five years",    "correct": false},
                {"option": "Life",  "correct": false},
                {"option": "Ten years", "correct": true},
                {"option": "Twenty years",  "correct": false}
            ],
            "correct": "The answer was: \"Ten years\". (See also [97.25])",
            "incorrect": "Incorrect. The answer was: \"Ten years\". (See also [97.25])"
        },


        {
            "q" : "What is the grace period following the expiration of an amateur license within which the license may be renewed?",
            "a": [
                {"option": "Two years", "correct": true},
                {"option": "Three years",   "correct": false},
                {"option": "Five years",    "correct": false},
                {"option": "Ten years ",    "correct": false}
            ],
            "correct": "The answer was: \"Two years\". (See also [97.21(a)(b)])",
            "incorrect": "Incorrect. The answer was: \"Two years\". (See also [97.21(a)(b)])"
        },


        {
            "q" : "How soon may you operate a transmitter on an amateur service frequency after you pass the examination required for your first amateur radio license?",
            "a": [
                {"option": "Immediately",   "correct": false},
                {"option": "30 days after the test date",   "correct": false},
                {"option": "As soon as your name and call sign appear in the FCC’s ULS database",   "correct": true},
                {"option": "You must wait until you receive your license in the mail from the FCC", "correct": false}
            ],
            "correct": "The answer was: \"As soon as your name and call sign appear in the FCC’s ULS database\". (See also [97.5a])",
            "incorrect": "Incorrect. The answer was: \"As soon as your name and call sign appear in the FCC’s ULS database\". (See also [97.5a])"
        },


        {
            "q" : "If your license has expired and is still within the allowable grace period, may you continue to operate a transmitter on amateur service frequencies?",
            "a": [
                {"option": "No, transmitting is not allowed until the ULS database shows that the license has been renewed",    "correct": true},
                {"option": "Yes, but only if you identify using the suffix \"GP\"", "correct": false},
                {"option": "Yes, but only during authorized nets",  "correct": false},
                {"option": "Yes, for up to two years",  "correct": false}
            ],
            "correct": "The answer was: \"No, transmitting is not allowed until the ULS database shows that the license has been renewed\". (See also [97.21(b)])",
            "incorrect": "Incorrect. The answer was: \"No, transmitting is not allowed until the ULS database shows that the license has been renewed\". (See also [97.21(b)])"
        },


        //T1D - Authorized and prohibited transmissions

        {
            "q" : "With which countries are FCC-licensed amateur stations prohibited from exchanging communications?",
            "a": [
                {"option": "Any country whose administration has notified the ITU that it objects to such communications",  "correct": true},
                {"option": "Any country whose administration has notified the United Nations that it objects to such communications",   "correct": false},
                {"option": "Any country engaged in hostilities with another country",   "correct": false},
                {"option": "Any country in violation of the War Powers Act of 1934",    "correct": false}
            ],
            "correct": "The answer was: \"Any country whose administration has notified the ITU that it objects to such communications\". (See also [97.111(a)(1)])",
            "incorrect": "Incorrect. The answer was: \"Any country whose administration has notified the ITU that it objects to such communications\". (See also [97.111(a)(1)])"
        },



        {
            "q" : "On which of the following occasions may an FCC-licensed amateur station exchange messages with a U.S. military station?",
            "a": [
                {"option": "During an Armed Forces Day Communications Test",    "correct": true},
                {"option": "During a Memorial Day Celebration", "correct": false},
                {"option": "During an Independence Day celebration",    "correct": false},
                {"option": "During a propagation test", "correct": false}
            ],
            "correct": "The answer was: \"During an Armed Forces Day Communications Test\". (See also [97.111(a)(5)])",
            "incorrect": "Incorrect. The answer was: \"During an Armed Forces Day Communications Test\". (See also [97.111(a)(5)])"
        },


        {
            "q" : "When is the transmission of codes or ciphers allowed to hide the meaning of a message transmitted by an amateur station?",
            "a": [
                {"option": "Only during contests",  "correct": false},
                {"option": "Only when operating mobile",    "correct": false},
                {"option": "Only when transmitting control commands to space stations or radio control craft",  "correct": true},
                {"option": "Only when frequencies above 1280 MHz are used", "correct": false}
            ],
            "correct": "The answer was: \"Only when transmitting control commands to space stations or radio control craft\". (See also [97.113(a)(4), 97.211(b), 97.217])",
            "incorrect": "Incorrect. The answer was: \"Only when transmitting control commands to space stations or radio control craft\". (See also [97.113(a)(4), 97.211(b), 97.217])"
        },


        {
            "q" : "What is the only time an amateur station is authorized to transmit music?",
            "a": [
                {"option": "When incidental to an authorized retransmission of manned spacecraft communications",   "correct": true},
                {"option": "When the music produces no spurious emissions", "correct": false},
                {"option": "When the purpose is to interfere with an illegal transmission", "correct": false},
                {"option": "When the music is transmitted above 1280 MHz",  "correct": false}
            ],
            "correct": "The answer was: \"When incidental to an authorized retransmission of manned spacecraft communications\". (See also [97.113(a)(4), 97.113(e)])",
            "incorrect": "Incorrect. The answer was: \"When incidental to an authorized retransmission of manned spacecraft communications\". (See also [97.113(a)(4), 97.113(e)])"
        },


        {
            "q" : "When may amateur radio operators use their stations to notify other amateurs of the availability of equipment for sale or trade?",
            "a": [
                {"option": "When the equipment is normally used in an amateur station and such activity is not conducted on a regular basis",   "correct": true},
                {"option": "When the asking price is $100.00 or less",  "correct": false},
                {"option": "When the asking price is less than its appraised value",    "correct": false},
                {"option": "When the equipment is not the personal property of either the station licensee or the control operator or their close relatives",   "correct": false}
            ],
            "correct": "The answer was: \"When the equipment is normally used in an amateur station and such activity is not conducted on a regular basis\". (See also [97.113(a)(3)])",
            "incorrect": "Incorrect. The answer was: \"When the equipment is normally used in an amateur station and such activity is not conducted on a regular basis\". (See also [97.113(a)(3)])"
        },


        {
            "q" : "Which of the following types of transmissions are prohibited?",
            "a": [
                {"option": "Transmissions that contain obscene or indecent words or language",  "correct": true},
                {"option": "Transmissions to establish one-way communications", "correct": false},
                {"option": "Transmissions to establish model aircraft control", "correct": false},
                {"option": "Transmissions for third party communications",  "correct": false}
            ],
            "correct": "The answer was: \"Transmissions that contain obscene or indecent words or language\". (See also [97.113(a)(4)])",
            "incorrect": "Incorrect. The answer was: \"Transmissions that contain obscene or indecent words or language\". (See also [97.113(a)(4)])"
        },


        {
            "q" : "When is an amateur station authorized to automatically retransmit the radio signals of other amateur stations?",
            "a": [
                {"option": "When the signals are from an auxiliary, beacon, or Earth station",  "correct": false},
                {"option": "When the signals are from an auxiliary, repeater, or space station",    "correct": true},
                {"option": "When the signals are from a beacon, repeater, or space station",    "correct": false},
                {"option": "When the signals are from an Earth, repeater, or space station ",   "correct": false}
            ],
            "correct": "The answer was: \"When the signals are from an auxiliary, repeater, or space station\". (See also [97.113(f)])",
            "incorrect": "Incorrect. The answer was: \"When the signals are from an auxiliary, repeater, or space station\". (See also [97.113(f)])"
        },


        {
            "q" : "When may the control operator of an amateur station receive compensation for operating the station? ",
            "a": [
                {"option": "When engaging in communications on behalf of their employer",   "correct": false},
                {"option": "When the communication is incidental to classroom instruction at an educational institution",   "correct": true},
                {"option": "When re-broadcasting weather alerts during a RACES net",    "correct": false},
                {"option": "When notifying other amateur operators of the availability for sale or trade of apparatus", "correct": false}
            ],
            "correct": "The answer was: \"When the communication is incidental to classroom instruction at an educational institution\". (See also [97.113])",
            "incorrect": "Incorrect. The answer was: \"When the communication is incidental to classroom instruction at an educational institution\". (See also [97.113])"
        },


        {
            "q" : "Under which of the following circumstances are amateur stations authorized to transmit signals related to broadcasting, program production, or news gathering, assuming no other means is available?",
            "a": [
                {"option": "Only where such communications directly relate to the immediate safety of human life or protection of property",    "correct": true},
                {"option": "Only when broadcasting communications to or from the space shuttle.",   "correct": false},
                {"option": "Only where noncommercial programming is gathered and supplied exclusively to the National Public Radio network ",   "correct": false},
                {"option": "Only when using amateur repeaters linked to the Internet",  "correct": false}
            ],
            "correct": "The answer was: \"Only where such communications directly relate to the immediate safety of human life or protection of property\". (See also [97.113(b)])",
            "incorrect": "Incorrect. The answer was: \"Only where such communications directly relate to the immediate safety of human life or protection of property\". (See also [97.113(b)])"
        },


        {
            "q" : "What is the meaning of the term broadcasting in the FCC rules for the amateur services?",
            "a": [
                {"option": "Two-way transmissions by amateur stations", "correct": false},
                {"option": "Transmission of music", "correct": false},
                {"option": "Transmission of messages directed only to amateur operators ",  "correct": false},
                {"option": "Transmissions intended for reception by the general public ",   "correct": true}
            ],
            "correct": "The answer was: \"Transmissions intended for reception by the general public \". (See also [97.3(a)(10)])",
            "incorrect": "Incorrect. The answer was: \"Transmissions intended for reception by the general public \". (See also [97.3(a)(10)])"
        },


        {
            "q" : "Which of the following types of communications are permitted in the Amateur Radio Service?",
            "a": [
                {"option": "Brief transmissions to make station adjustments",   "correct": true},
                {"option": "Retransmission of entertainment programming from a commercial radio or TV station", "correct": false},
                {"option": "Retransmission of entertainment material from a public radio or TV station",    "correct": false},
                {"option": "Communications on a regular basis that could reasonably be furnished alternatively through other radio services",   "correct": false}
            ],
            "correct": "The answer was: \"Brief transmissions to make station adjustments\". (See also [97.113(a)(5)])",
            "incorrect": "Incorrect. The answer was: \"Brief transmissions to make station adjustments\". (See also [97.113(a)(5)])"
        },


        //T1E - Control operator and control types; control operator required, eligibility, designation of control operator, privileges and duties, control point, local, automatic and remote control, location of control operator 

        {
            "q" : "When must an amateur station have a control operator?",
            "a": [
                {"option": "Only when the station is transmitting", "correct": true},
                {"option": "Only when the station is being locally controlled", "correct": false},
                {"option": "Only when the station is being remotely controlled",    "correct": false},
                {"option": "Only when the station is being automatically controlled",   "correct": false}
            ],
            "correct": "The answer was: \"Only when the station is transmitting\". (See also [97.7(a)])",
            "incorrect": "Incorrect. The answer was: \"Only when the station is transmitting\". (See also [97.7(a)])"
        },



        {
            "q" : "Who is eligible to be the control operator of an amateur station?",
            "a": [
                {"option": "Only a person holding an amateur service license from any country that belongs to the United Nations",  "correct": false},
                {"option": "Only a citizen of the United States",   "correct": false},
                {"option": "Only a person over the age of 18",  "correct": false},
                {"option": "Only a person for whom an amateur operator/primary station license grant appears in the FCC database or who is authorized for alien reciprocal operation",  "correct": true}
            ],
            "correct": "The answer was: \"Only a person for whom an amateur operator/primary station license grant appears in the FCC database or who is authorized for alien reciprocal operation\". (See also [97.7(a)])",
            "incorrect": "Incorrect. The answer was: \"Only a person for whom an amateur operator/primary station license grant appears in the FCC database or who is authorized for alien reciprocal operation\". (See also [97.7(a)])"
        },


        {
            "q" : "Who must designate the station control operator?",
            "a": [
                {"option": "The station licensee",  "correct": true},
                {"option": "The FCC",   "correct": false},
                {"option": "The frequency coordinator", "correct": false},
                {"option": "The ITU",   "correct": false}
            ],
            "correct": "The answer was: \"The station licensee\". (See also [97.103(b)])",
            "incorrect": "Incorrect. The answer was: \"The station licensee\". (See also [97.103(b)])"
        },


        {
            "q" : "What determines the transmitting privileges of an amateur station?",
            "a": [
                {"option": "The frequency authorized by the frequency coordinator", "correct": false},
                {"option": "The class of operator license held by the station licensee",    "correct": false},
                {"option": "The highest class of operator license held by anyone on the premises",  "correct": false},
                {"option": "The class of operator license held by the control operator",    "correct": true}
            ],
            "correct": "The answer was: \"The class of operator license held by the control operator\". (See also [97.103(b)])",
            "incorrect": "Incorrect. The answer was: \"The class of operator license held by the control operator\". (See also [97.103(b)])"
        },


        {
            "q" : "What is an amateur station control point?",
            "a": [
                {"option": "The location of the station’s transmitting antenna",    "correct": false},
                {"option": "The location of the station transmitting apparatus ",   "correct": false},
                {"option": "The location at which the control operator function is performed",  "correct": true},
                {"option": "The mailing address of the station licensee",   "correct": false}
            ],
            "correct": "The answer was: \"The location at which the control operator function is performed\". (See also [97.3(a)(14)])",
            "incorrect": "Incorrect. The answer was: \"The location at which the control operator function is performed\". (See also [97.3(a)(14)])"
        },


        {
            "q" : "Under which of the following types of control is it permissible for the control operator to be at a location other than the control point?",
            "a": [
                {"option": "Local control", "correct": false},
                {"option": "Automatic control", "correct": true},
                {"option": "Remote control",    "correct": false},
                {"option": "Indirect control",  "correct": false}
            ],
            "correct": "The answer was: \"Automatic control\". (See also [97.109(d)])",
            "incorrect": "Incorrect. The answer was: \"Automatic control\". (See also [97.109(d)])"
        },


        {
            "q" : "When the control operator is not the station licensee, who is responsible for the proper operation of the station?",
            "a": [
                {"option": "All licensed amateurs who are present at the operation",    "correct": false},
                {"option": "Only the station licensee", "correct": false},
                {"option": "Only the control operator", "correct": false},
                {"option": "The control operator and the station licensee are equally responsible", "correct": true}
            ],
            "correct": "The answer was: \"The control operator and the station licensee are equally responsible\". (See also [97.103(a)])",
            "incorrect": "Incorrect. The answer was: \"The control operator and the station licensee are equally responsible\". (See also [97.103(a)])"
        },



        {
            "q" : "What type of control is being used for a repeater when the control operator is not present at a control point?",
            "a": [
                {"option": "Local control", "correct": false},
                {"option": "Remote control",    "correct": false},
                {"option": "Automatic control", "correct": true},
                {"option": "Unattended",    "correct": false}
            ],
            "correct": "The answer was: \"Automatic control\". (See also [97.3(a)])",
            "incorrect": "Incorrect. The answer was: \"Automatic control\". (See also [97.3(a)])"
        },


        {
            "q" : "What type of control is being used when transmitting using a handheld radio?",
            "a": [
                {"option": "Radio control", "correct": false},
                {"option": "Unattended control",    "correct": false},
                {"option": "Automatic control", "correct": false},
                {"option": "Local control", "correct": true}
            ],
            "correct": "The answer was: \"Local control\". (See also [97.109(a)])",
            "incorrect": "Incorrect. The answer was: \"Local control\". (See also [97.109(a)])"
        },


        {
            "q" : "What type of control is used when the control operator is not at the station location but can indirectly manipulate the operating adjustments of a station?",
            "a": [
                {"option": "Local", "correct": false},
                {"option": "Remote",    "correct": true},
                {"option": "Automatic", "correct": false},
                {"option": "Unattended",    "correct": false}
            ],
            "correct": "The answer was: \"Remote\". (See also [97.3])",
            "incorrect": "Incorrect. The answer was: \"Remote\". (See also [97.3])"
        },


        {
            "q" : "Who does the FCC presume to be the control operator of an amateur station, unless documentation to the contrary is in the station records?",
            "a": [
                {"option": "The station custodian", "correct": false},
                {"option": "The third party participant",   "correct": false},
                {"option": "The person operating the station equipment",    "correct": false},
                {"option": "The station licensee",  "correct": true}
            ],
            "correct": "The answer was: \"The station licensee\". (See also [97.103(a)])",
            "incorrect": "Incorrect. The answer was: \"The station licensee\". (See also [97.103(a)])"
        },


        //T1F - Station identification and operation standards; special operations for repeaters and auxiliary stations, third party communications, club stations, station security, FCC inspection

        {
            "q" : "What type of identification is being used when identifying a station on the air as “Race Headquarters”?",
            "a": [
                {"option": "Tactical call", "correct": true},
                {"option": "Self-assigned designator",  "correct": false},
                {"option": "SSID",  "correct": false},
                {"option": "Broadcast station", "correct": false}
            ],
            "correct": "The answer was: \"Tactical call\".",
            "incorrect": "Incorrect. The answer was: \"Tactical call\"."
        },


        {
            "q" : "When using tactical identifiers, how often must your station transmit the station’s FCC-assigned call sign? ",
            "a": [
                {"option": "Never, the tactical call is sufficient",    "correct": false},
                {"option": "Once during every hour",    "correct": false},
                {"option": "Every ten minutes", "correct": true},
                {"option": "At the end of every communication", "correct": false}
            ],
            "correct": "The answer was: \"Every ten minutes\". (See also [97.119 (a)])",
            "incorrect": "Incorrect. The answer was: \"Every ten minutes\". (See also [97.119 (a)])"
        },


        {
            "q" : "When is an amateur station required to transmit its assigned call sign?",
            "a": [
                {"option": "At the beginning of each contact, and every 10 minutes thereafter", "correct": false},
                {"option": "At least once during each transmission ",   "correct": false},
                {"option": "At least every 15 minutes during and at the end of a contact",  "correct": false},
                {"option": "At least every 10 minutes during and at the end of a contact",  "correct": true}
            ],
            "correct": "The answer was: \"At least every 10 minutes during and at the end of a contact\". (See also [97.119(a)])",
            "incorrect": "Incorrect. The answer was: \"At least every 10 minutes during and at the end of a contact\". (See also [97.119(a)])"
        },

        {
            "q" : "Which of the following is an acceptable language for use for station identification when operating in a phone sub-band?",
            "a": [
                {"option": "Any language recognized by the United Nations", "correct": false},
                {"option": "Any language recognized by the ITU",    "correct": false},
                {"option": "The English language",  "correct": true},
                {"option": "English, French, or Spanish",   "correct": false}
            ],
            "correct": "The answer was: \"The English language\". (See also [97.119(b)])",
            "incorrect": "Incorrect. The answer was: \"The English language\". (See also [97.119(b)])"
        },

        {
            "q" : "What method of call sign identification is required for a station transmitting phone signals?",
            "a": [
                {"option": "Send the call sign followed by the indicator RPT",  "correct": false},
                {"option": "Send the call sign using CW or phone emission", "correct": true},
                {"option": "Send the call sign followed by the indicator R",    "correct": false},
                {"option": "Send the call sign using only phone emission",  "correct": false}
            ],
            "correct": "The answer was: \"Send the call sign using CW or phone emission\". (See also [97.119(b)])",
            "incorrect": "Incorrect. The answer was: \"Send the call sign using CW or phone emission\". (See also [97.119(b)])"
        },


        {
            "q" : "Which of the following formats of a self-assigned indicator is acceptable when identifying using a phone transmission?",
            "a": [
                {"option": "KL7CC stroke W3",   "correct": false},
                {"option": "KL7CC slant W3",    "correct": false},
                {"option": "KL7CC slash W3",    "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\". (See also [97.119(c)])",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\". (See also [97.119(c)])"
        },


        {
            "q" : "Which of the following restrictions apply when appending a self-assigned call sign indicator?",
            "a": [
                {"option": "It must be more than three letters and less than five letters", "correct": false},
                {"option": "It must be less than five letters", "correct": false},
                {"option": "It must start with the letters AA through AL, K, N, or W and be not less than two characters or more than five characters in length",   "correct": false},
                {"option": "It must not conflict with any other indicator specified by the FCC rules or with any call sign prefix assigned to another country", "correct": true}
            ],
            "correct": "The answer was: \"It must not conflict with any other indicator specified by the FCC rules or with any call sign prefix assigned to another country\". (See also [97.119(c)])",
            "incorrect": "Incorrect. The answer was: \"It must not conflict with any other indicator specified by the FCC rules or with any call sign prefix assigned to another country\". (See also [97.119(c)])"
        },


        {
            "q" : "When may a Technician Class licensee be the control operator of a station operating in an exclusive Extra Class operator segment of the amateur bands?",
            "a": [
                {"option": "Never", "correct": true},
                {"option": "On Armed Forces Day",   "correct": false},
                {"option": "As part of a multi-operator contest team",  "correct": false},
                {"option": "When using a club station whose trustee is an Extra Class operator licensee",   "correct": false}
            ],
            "correct": "The answer was: \"Never\". (See also [97.119(e)])",
            "incorrect": "Incorrect. The answer was: \"Never\". (See also [97.119(e)])"
        },


        {
            "q" : "What type of amateur station simultaneously retransmits the signal of another amateur station on a different channel or channels?",
            "a": [
                {"option": "Beacon station",    "correct": false},
                {"option": "Earth station", "correct": false},
                {"option": "Repeater station",  "correct": true},
                {"option": "Message forwarding station",    "correct": false}
            ],
            "correct": "The answer was: \"Repeater station\". (See also [97.3(a)(39)])",
            "incorrect": "Incorrect. The answer was: \"Repeater station\". (See also [97.3(a)(39)])"
        },


        {
            "q" : "Who is accountable should a repeater inadvertently retransmit communications that violate the FCC rules?",
            "a": [
                {"option": "The control operator of the originating station",   "correct": true},
                {"option": "The control operator of the repeater",  "correct": false},
                {"option": "The owner of the repeater", "correct": false},
                {"option": "Both the originating station and the repeater owner",   "correct": false}
            ],
            "correct": "The answer was: \"The control operator of the originating station\". (See also [97.205(g)])",
            "incorrect": "Incorrect. The answer was: \"The control operator of the originating station\". (See also [97.205(g)])"
        },


        {
            "q" : "To which foreign stations do the FCC rules authorize the transmission of non-emergency third party communications?",
            "a": [
                {"option": "Any station whose government permits such communications",  "correct": true},
                {"option": "Those in ITU Region 2 only",    "correct": false},
                {"option": "Those in ITU Regions 2 and 3 only", "correct": false},
                {"option": "Those in ITU Region 3 only",    "correct": false}
            ],
            "correct": "The answer was: \"Any station whose government permits such communications\". (See also [97.115(a)])",
            "incorrect": "Incorrect. The answer was: \"Any station whose government permits such communications\". (See also [97.115(a)])"
        },


        {
            "q" : "How many persons are required to be members of a club for a club station license to be issued by the FCC?",
            "a": [
                {"option": "At least 5",    "correct": false},
                {"option": "At least 4",    "correct": true},
                {"option": "A trustee and 2 officers",  "correct": false},
                {"option": "At least 2",    "correct": false}
            ],
            "correct": "The answer was: \"At least 4\". (See also [97.5(b)(2)])",
            "incorrect": "Incorrect. The answer was: \"At least 4\". (See also [97.5(b)(2)])"
        },


        {
            "q" : "When must the station licensee make the station and its records available for FCC inspection?",
            "a": [
                {"option": "Any time upon request by an official observer", "correct": false},
                {"option": "Any time upon request by an FCC representative",    "correct": true},
                {"option": "30 days prior to renewal of the station license",   "correct": false},
                {"option": "10 days before the first transmission", "correct": false}
            ],
            "correct": "The answer was: \"Any time upon request by an FCC representative\". (See also [97.103(c)])",
            "incorrect": "Incorrect. The answer was: \"Any time upon request by an FCC representative\". (See also [97.103(c)])"
        },



        //SUBELEMENT T2 - Operating Procedures [3 Exam Questions - 3 Groups]

        //T2A - Station operation; choosing an operating frequency, calling another station, test transmissions, use of minimum power, frequency use, band plans

        {
            "q" : "What is the most common repeater frequency offset in the 2 meter band?",
            "a": [
                {"option": "plus 500 kHz",  "correct": false},
                {"option": "plus or minus 600 kHz", "correct": true},
                {"option": "minus 500 kHz", "correct": false},
                {"option": "Only plus 600 kHz", "correct": false}
            ],
            "correct": "The answer was: \"plus or minus 600 kHz\".",
            "incorrect": "Incorrect. The answer was: \"plus or minus 600 kHz\"."
        },


        {
            "q" : "What is the national calling frequency for FM simplex operations in the 70 cm band?",
            "a": [
                {"option": "146.520 MHz",   "correct": false},
                {"option": "145.000 MHz",   "correct": false},
                {"option": "432.100 MHz",   "correct": false},
                {"option": "446.000 MHz",   "correct": true}
            ],
            "correct": "The answer was: \"446.000 MHz\".",
            "incorrect": "Incorrect. The answer was: \"446.000 MHz\"."
        },


        {
            "q" : "What is a common repeater frequency offset in the 70 cm band?",
            "a": [
                {"option": "Plus or minus 5 MHz",   "correct": true},
                {"option": "Plus or minus 600 kHz", "correct": false},
                {"option": "Minus 600 kHz", "correct": false},
                {"option": "Plus 600 kHz",  "correct": false}
            ],
            "correct": "The answer was: \"Plus or minus 5 MHz\".",
            "incorrect": "Incorrect. The answer was: \"Plus or minus 5 MHz\"."
        },


        {
            "q" : "What is an appropriate way to call another station on a repeater if you know the other station's call sign?",
            "a": [
                {"option": "Say \"break, break\" then say the station's call sign", "correct": false},
                {"option": "Say the station's call sign then identify with your call sign", "correct": true},
                {"option": "Say \"CQ\" three times then the other station's call sign", "correct": false},
                {"option": "Wait for the station to call \"CQ\" then answer it",    "correct": false}
            ],
            "correct": "The answer was: \"Say the station's call sign then identify with your call sign\".",
            "incorrect": "Incorrect. The answer was: \"Say the station's call sign then identify with your call sign\"."
        },


        {
            "q" : "What should you transmit when responding to a call of CQ?",
            "a": [
                {"option": "CQ followed by the other station’s call sign",  "correct": false},
                {"option": "Your call sign followed by the other station’s call sign",  "correct": false},
                {"option": "The other station’s call sign followed by your call sign",  "correct": true},
                {"option": "A signal report followed by your call sign",    "correct": false}
            ],
            "correct": "The answer was: \"The other station’s call sign followed by your call sign\".",
            "incorrect": "Incorrect. The answer was: \"The other station’s call sign followed by your call sign\"."
        },


        {
            "q" : "What must an amateur operator do when making on-air transmissions to test equipment or antennas?",
            "a": [
                {"option": "Properly identify the transmitting station",    "correct": true},
                {"option": "Make test transmissions only after 10:00 p.m. local time",  "correct": false},
                {"option": "Notify the FCC of the test transmission",   "correct": false},
                {"option": "State the purpose of the test during the test procedure",   "correct": false}
            ],
            "correct": "The answer was: \"Properly identify the transmitting station\".",
            "incorrect": "Incorrect. The answer was: \"Properly identify the transmitting station\"."
        },


        {
            "q" : "Which of the following is true when making a test transmission?",
            "a": [
                {"option": "Station identification is not required if the transmission is less than 15 seconds",    "correct": false},
                {"option": "Station identification is not required if the transmission is less than 1 watt",    "correct": false},
                {"option": "Station identification is required only if your station can be heard",  "correct": false},
                {"option": "Station identification is required at least every ten minutes during the test and at the end",  "correct": true}
            ],
            "correct": "The answer was: \"Station identification is required at least every ten minutes during the test and at the end\".",
            "incorrect": "Incorrect. The answer was: \"Station identification is required at least every ten minutes during the test and at the end\"."
        },


        {
            "q" : "What is the meaning of the procedural signal \"CQ\"?",
            "a": [
                {"option": "Call on the quarter hour",  "correct": false},
                {"option": "A new antenna is being tested (no station should answer)",  "correct": false},
                {"option": "Only the called station should transmit",   "correct": false},
                {"option": "Calling any station",   "correct": true}
            ],
            "correct": "The answer was: \"Calling any station\".",
            "incorrect": "Incorrect. The answer was: \"Calling any station\"."
        },


        {
            "q" : "What brief statement is often used in place of \"CQ\" to indicate that you are listening on a repeater?",
            "a": [
                {"option": "Say \"Hello test\" followed by your call sign", "correct": false},
                {"option": "Say your call sign  ",  "correct": true},
                {"option": "Say the repeater call sign followed by your call sign", "correct": false},
                {"option": "Say the letters \"QSY\" followed by your call sign",    "correct": false}
            ],
            "correct": "The answer was: \"Say your call sign  \".",
            "incorrect": "Incorrect. The answer was: \"Say your call sign  \"."
        },


        {
            "q" : "What is a band plan, beyond the privileges established by the FCC?",
            "a": [
                {"option": "A voluntary guideline for using different modes or activities within an amateur band",  "correct": true},
                {"option": "A mandated list of operating schedules",    "correct": false},
                {"option": "A list of scheduled net frequencies",   "correct": false},
                {"option": "A plan devised by a club to use a frequency band during a contest ",    "correct": false}
            ],
            "correct": "The answer was: \"A voluntary guideline for using different modes or activities within an amateur band\".",
            "incorrect": "Incorrect. The answer was: \"A voluntary guideline for using different modes or activities within an amateur band\"."
        },


        {
            "q" : "What are the FCC rules regarding power levels used in the amateur bands?",
            "a": [
                {"option": "Always use the maximum power allowed to ensure that you complete the contact",  "correct": false},
                {"option": "An amateur may use no more than 200 watts PEP to make an amateur contact",  "correct": false},
                {"option": "An amateur may use up to 1500 watts PEP on any amateur frequency",  "correct": false},
                {"option": "An amateur must use the minimum transmitter power necessary to carry out the desired communication",    "correct": true}
            ],
            "correct": "The answer was: \"An amateur must use the minimum transmitter power necessary to carry out the desired communication\". (See also [97.313(a)])",
            "incorrect": "Incorrect. The answer was: \"An amateur must use the minimum transmitter power necessary to carry out the desired communication\". (See also [97.313(a)])"
        },


        //T2B – VHF/UHF operating practices; SSB phone, FM repeater, simplex, frequency offsets, splits and shifts, CTCSS, DTMF, tone squelch, carrier squelch, phonetics

        {
            "q" : "What is the term used to describe an amateur station that is transmitting and receiving on the same frequency?",
            "a": [
                {"option": "Full duplex communication", "correct": false},
                {"option": "Diplex communication",  "correct": false},
                {"option": "Simplex communication", "correct": true},
                {"option": "Half duplex communication", "correct": false}
            ],
            "correct": "The answer was: \"Simplex communication\".",
            "incorrect": "Incorrect. The answer was: \"Simplex communication\"."
        },


        {
            "q" : "What is the term used to describe the use of a sub-audible tone transmitted with normal voice audio to open the squelch of a receiver?",
            "a": [
                {"option": "Carrier squelch",   "correct": false},
                {"option": "Tone burst",    "correct": false},
                {"option": "DTMF",  "correct": false},
                {"option": "CTCSS", "correct": true}
            ],
            "correct": "The answer was: \"CTCSS\".",
            "incorrect": "Incorrect. The answer was: \"CTCSS\"."
        },


        {
            "q" : "Which of the following describes the muting of receiver audio controlled solely by the presence or absence of an RF signal?",
            "a": [
                {"option": "Tone squelch",  "correct": false},
                {"option": "Carrier squelch",   "correct": true},
                {"option": "CTCSS", "correct": false},
                {"option": "Modulated carrier", "correct": false}
            ],
            "correct": "The answer was: \"Carrier squelch\".",
            "incorrect": "Incorrect. The answer was: \"Carrier squelch\"."
        },


        {
            "q" : "Which of the following common problems might cause you to be able to hear but not access a repeater even when transmitting with the proper offset?",
            "a": [
                {"option": "The repeater receiver requires audio tone burst for access",    "correct": false},
                {"option": "The repeater receiver requires a CTCSS tone for access",    "correct": false},
                {"option": "The repeater receiver may require a DCS tone sequence for access",  "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {
            "q" : "What determines the amount of deviation of an FM signal?",
            "a": [
                {"option": "Both the frequency and amplitude of the modulating signal", "correct": false},
                {"option": "The frequency of the modulating signal",    "correct": false},
                {"option": "The amplitude of the modulating signal",    "correct": true},
                {"option": "The relative phase of the modulating signal and the carrier",   "correct": false}
            ],
            "correct": "The answer was: \"The amplitude of the modulating signal\".",
            "incorrect": "Incorrect. The answer was: \"The amplitude of the modulating signal\"."
        },


        {
            "q" : "What happens when the deviation of an FM transmitter is increased?",
            "a": [
                {"option": "Its signal occupies more bandwidth",    "correct": true},
                {"option": "Its output power increases",    "correct": false},
                {"option": "Its output power and bandwidth increases",  "correct": false},
                {"option": "Asymmetric modulation occurs",  "correct": false}
            ],
            "correct": "The answer was: \"Its signal occupies more bandwidth\".",
            "incorrect": "Incorrect. The answer was: \"Its signal occupies more bandwidth\"."
        },


        {
            "q" : "What should you do if you receive a report that your station’s transmissions are causing splatter or interference on nearby frequencies?",
            "a": [
                {"option": "Increase transmit power",   "correct": false},
                {"option": "Change mode of transmission",   "correct": false},
                {"option": "Report the interference to the equipment manufacturer", "correct": false},
                {"option": "Check your transmitter for off-frequency operation or spurious emissions",  "correct": true}
            ],
            "correct": "The answer was: \"Check your transmitter for off-frequency operation or spurious emissions\".",
            "incorrect": "Incorrect. The answer was: \"Check your transmitter for off-frequency operation or spurious emissions\"."
        },



        {
            "q" : "What is the proper course of action if your station’s transmission unintentionally interferes with another station?",
            "a": [
                {"option": "Rotate your antenna slightly",  "correct": false},
                {"option": "Properly identify your transmission and move to a different frequency", "correct": true},
                {"option": "Increase power",    "correct": false},
                {"option": "Change antenna polarization",   "correct": false}
            ],
            "correct": "The answer was: \"Properly identify your transmission and move to a different frequency\".",
            "incorrect": "Incorrect. The answer was: \"Properly identify your transmission and move to a different frequency\"."
        },


        {
            "q" : "Which of the following methods is encouraged by the FCC when identifying your station when using phone?",
            "a": [
                {"option": "Use of a phonetic alphabet",    "correct": true},
                {"option": "Send your call sign in CW as well as voice",    "correct": false},
                {"option": "Repeat your call sign three times", "correct": false},
                {"option": "Increase your signal to full power when identifying",   "correct": false}
            ],
            "correct": "The answer was: \"Use of a phonetic alphabet\". (See also [97.119(b)(2)])",
            "incorrect": "Incorrect. The answer was: \"Use of a phonetic alphabet\". (See also [97.119(b)(2)])"
        },


        {
            "q" : "What is the\"q\" signal used to indicate that you are receiving interference from other stations?",
            "a": [
                {"option": "QRM",   "correct": true},
                {"option": "QRN",   "correct": false},
                {"option": "QTH",   "correct": false},
                {"option": "QSB",   "correct": false}
            ],
            "correct": "The answer was: \"QRM\".",
            "incorrect": "Incorrect. The answer was: \"QRM\"."
        },


        {
            "q" : "What is the\"q\" signal used to indicate that you are changing frequency?",
            "a": [
                {"option": "QRU",   "correct": false},
                {"option": "QSY",   "correct": true},
                {"option": "QSL",   "correct": false},
                {"option": "QRZ",   "correct": false}
            ],
            "correct": "The answer was: \"QSY\".",
            "incorrect": "Incorrect. The answer was: \"QSY\"."
        },


        //T2C – Public service; emergency and non-emergency operations, message traffic handling

        {
            "q" : "What set of rules applies to proper operation of your station when using amateur radio at the request of public service officials?",
            "a": [
                {"option": "RACES Rules",   "correct": false},
                {"option": "ARES Rules",    "correct": false},
                {"option": "FCC Rules", "correct": true},
                {"option": "FEMA Rules",    "correct": false}
            ],
            "correct": "The answer was: \"FCC Rules\". (See also [97.103(a)])",
            "incorrect": "Incorrect. The answer was: \"FCC Rules\". (See also [97.103(a)])"
        },


        {
            "q" : "What do RACES and ARES have in common?",
            "a": [
                {"option": "They represent the two largest ham clubs in the United States", "correct": false},
                {"option": "Both organizations broadcast road and weather traffic information", "correct": false},
                {"option": "Neither may handle emergency traffic supporting public service agencies",   "correct": false},
                {"option": "Both organizations may provide communications during emergencies",  "correct": true}
            ],
            "correct": "The answer was: \"Both organizations may provide communications during emergencies\".",
            "incorrect": "Incorrect. The answer was: \"Both organizations may provide communications during emergencies\"."
        },


        {
            "q" : "What is the Radio Amateur Civil Emergency Service?",
            "a": [
                {"option": "An emergency radio service organized by amateur operators", "correct": false},
                {"option": "A radio service using amateur stations for emergency management or civil defense communications",   "correct": true},
                {"option": "A radio service organized to provide communications at civic events",   "correct": false},
                {"option": "A radio service organized by amateur operators to assist non-military persons", "correct": false}
            ],
            "correct": "The answer was: \"A radio service using amateur stations for emergency management or civil defense communications\". (See also [97.3(a)(37), 97.407 ])",
            "incorrect": "Incorrect. The answer was: \"A radio service using amateur stations for emergency management or civil defense communications\". (See also [97.3(a)(37), 97.407 ])"
        },


        {
            "q" : "Which of the following is common practice during net operations to get the immediate attention of the net control station when reporting an emergency?",
            "a": [
                {"option": "Repeat the words SOS three times followed by the call sign of the reporting station",   "correct": false},
                {"option": "Press the push-to-talk button three times", "correct": false},
                {"option": "Begin your transmission with “Priority” or “Emergency” followed by your call sign", "correct": true},
                {"option": "Play a pre-recorded emergency alert tone followed by your call sign",   "correct": false}
            ],
            "correct": "The answer was: \"Begin your transmission with “Priority” or “Emergency” followed by your call sign\".",
            "incorrect": "Incorrect. The answer was: \"Begin your transmission with “Priority” or “Emergency” followed by your call sign\"."
        },


        {
            "q" : "What should you do to minimize disruptions to an emergency traffic net once you have checked in?",
            "a": [
                {"option": "Whenever the net frequency is quiet, announce your call sign and location", "correct": false},
                {"option": "Move 5 kHz away from the net's frequency and use high power to ask other hams to keep clear of the net frequency",  "correct": false},
                {"option": "Do not transmit on the net frequency until asked to do so by the net control station",  "correct": true},
                {"option": "Wait until the net frequency is quiet, then ask for any emergency traffic for your area ",  "correct": false}
            ],
            "correct": "The answer was: \"Do not transmit on the net frequency until asked to do so by the net control station\".",
            "incorrect": "Incorrect. The answer was: \"Do not transmit on the net frequency until asked to do so by the net control station\"."
        },



        {
            "q" : "What is usually considered to be the most important job of an amateur operator when handling emergency traffic messages?",
            "a": [
                {"option": "Passing messages exactly as written, spoken or as received",    "correct": true},
                {"option": "Estimating the number of people affected by the disaster",  "correct": false},
                {"option": "Communicating messages to the news media for broadcast outside the disaster area",  "correct": false},
                {"option": "Broadcasting emergency information to the general public",  "correct": false}
            ],
            "correct": "The answer was: \"Passing messages exactly as written, spoken or as received\".",
            "incorrect": "Incorrect. The answer was: \"Passing messages exactly as written, spoken or as received\"."
        },


        {
            "q" : "When may an amateur station use any means of radio communications at its disposal for essential communications in connection with immediate safety of human life and protection of property?",
            "a": [
                {"option": "Only when FEMA authorizes it by declaring an emergency",    "correct": false},
                {"option": "When normal communications systems are not available",  "correct": true},
                {"option": "Only when RACES authorizes it by declaring an emergency",   "correct": false},
                {"option": "Only when authorized by the local MARS program director",   "correct": false}
            ],
            "correct": "The answer was: \"When normal communications systems are not available\". (See also [97.403])",
            "incorrect": "Incorrect. The answer was: \"When normal communications systems are not available\". (See also [97.403])"
        },


        {
            "q" : "What is the preamble in a formal traffic message?",
            "a": [
                {"option": "The first paragraph of the message text",   "correct": false},
                {"option": "The message number",    "correct": false},
                {"option": "The priority handling indicator for the message",   "correct": false},
                {"option": "The information needed to track the message as it passes through the amateur radio traffic handling system",    "correct": true}
            ],
            "correct": "The answer was: \"The information needed to track the message as it passes through the amateur radio traffic handling system\".",
            "incorrect": "Incorrect. The answer was: \"The information needed to track the message as it passes through the amateur radio traffic handling system\"."
        },


        {
            "q" : "What is meant by the term \"check\" in reference to a formal traffic message?",
            "a": [
                {"option": "The check is a count of the number of words or word equivalents in the text portion of the message",    "correct": true},
                {"option": "The check is the value of a money order attached to the message",   "correct": false},
                {"option": "The check is a list of stations that have relayed the message", "correct": false},
                {"option": "The check is a box on the message form that tells you the message was received",    "correct": false}
            ],
            "correct": "The answer was: \"The check is a count of the number of words or word equivalents in the text portion of the message\".",
            "incorrect": "Incorrect. The answer was: \"The check is a count of the number of words or word equivalents in the text portion of the message\"."
        },


        //SUBELEMENT T3 – Radio wave characteristics, radio and electromagnetic properties, propagation modes – [3 Exam Questions - 3 Groups]

        //T3A - Radio wave characteristics; how a radio signal travels; distinctions of HF, VHF and UHF; fading, multipath; wavelength vs. penetration; antenna orientation

        {
            "q" : "What should you do if another operator reports that your station’s 2 meter signals were strong just a moment ago, but now they are weak or distorted?",
            "a": [
                {"option": "Change the batteries in your radio to a different type",    "correct": false},
                {"option": "Turn on the CTCSS tone",    "correct": false},
                {"option": "Ask the other operator to adjust his squelch control",  "correct": false},
                {"option": "Try moving a few feet, as random reflections may be causing multi-path distortion", "correct": true}
            ],
            "correct": "The answer was: \"Try moving a few feet, as random reflections may be causing multi-path distortion\".",
            "incorrect": "Incorrect. The answer was: \"Try moving a few feet, as random reflections may be causing multi-path distortion\"."
        },



        {
            "q" : "Why are UHF signals often more effective from inside buildings than VHF signals?",
            "a": [
                {"option": "VHF signals lose power faster over distance",   "correct": false},
                {"option": "The shorter wavelength allows them to more easily penetrate the structure of buildings",    "correct": true},
                {"option": "This is incorrect; VHF works better than UHF inside buildings", "correct": false},
                {"option": "UHF antennas are more efficient than VHF antennas", "correct": false}
            ],
            "correct": "The answer was: \"The shorter wavelength allows them to more easily penetrate the structure of buildings\".",
            "incorrect": "Incorrect. The answer was: \"The shorter wavelength allows them to more easily penetrate the structure of buildings\"."
        },


        {
            "q" : "What antenna polarization is normally used for long-distance weak-signal CW and SSB contacts using the VHF and UHF bands?",
            "a": [
                {"option": "Right-hand circular",   "correct": false},
                {"option": "Left-hand circular",    "correct": false},
                {"option": "Horizontal",    "correct": true},
                {"option": "Vertical",  "correct": false}
            ],
            "correct": "The answer was: \"Horizontal\".",
            "incorrect": "Incorrect. The answer was: \"Horizontal\"."
        },


        {
            "q" : "What can happen if the antennas at opposite ends of a VHF or UHF line of sight radio link are not using the same polarization?",
            "a": [
                {"option": "The modulation sidebands might become inverted",    "correct": false},
                {"option": "Signals could be significantly weaker", "correct": true},
                {"option": "Signals have an echo effect on voices", "correct": false},
                {"option": "Nothing significant will happen",   "correct": false}
            ],
            "correct": "The answer was: \"Signals could be significantly weaker\".",
            "incorrect": "Incorrect. The answer was: \"Signals could be significantly weaker\"."
        },


        {
            "q" : "When using a directional antenna, how might your station be able to access a distant repeater if buildings or obstructions are blocking the direct line of sight path?",
            "a": [
                {"option": "Change from vertical to horizontal polarization",   "correct": false},
                {"option": "Try to find a path that reflects signals to the repeater",  "correct": true},
                {"option": "Try the long path", "correct": false},
                {"option": "Increase the antenna SWR",  "correct": false}
            ],
            "correct": "The answer was: \"Try to find a path that reflects signals to the repeater\".",
            "incorrect": "Incorrect. The answer was: \"Try to find a path that reflects signals to the repeater\"."
        },


        {
            "q" : "What term is commonly used to describe the rapid fluttering sound sometimes heard from mobile stations that are moving while transmitting?",
            "a": [
                {"option": "Flip-flopping", "correct": false},
                {"option": "Picket fencing",    "correct": true},
                {"option": "Frequency shifting",    "correct": false},
                {"option": "Pulsing",   "correct": false}
            ],
            "correct": "The answer was: \"Picket fencing\".",
            "incorrect": "Incorrect. The answer was: \"Picket fencing\"."
        },


        {
            "q" : "What type of wave carries radio signals between transmitting and receiving stations?",
            "a": [
                {"option": "Electromagnetic",   "correct": true},
                {"option": "Electrostatic", "correct": false},
                {"option": "Surface acoustic",  "correct": false},
                {"option": "Magnetostrictive",  "correct": false}
            ],
            "correct": "The answer was: \"Electromagnetic\".",
            "incorrect": "Incorrect. The answer was: \"Electromagnetic\"."
        },



        {
            "q" : "What is the cause of irregular fading of signals from distant stations during times of generally good reception?",
            "a": [
                {"option": "Absorption of signals by the \"D\" layer of the ionosphere",    "correct": false},
                {"option": "Absorption of signals by the \"E\" layer of the ionosphere",    "correct": false},
                {"option": "Random combining of signals arriving via different path lengths",   "correct": true},
                {"option": "Intermodulation distortion in the local receiver",  "correct": false}
            ],
            "correct": "The answer was: \"Random combining of signals arriving via different path lengths\".",
            "incorrect": "Incorrect. The answer was: \"Random combining of signals arriving via different path lengths\"."
        },


        {
            "q" : "Which of the following is a common effect of \"skip\" reflections between the Earth and the ionosphere?",
            "a": [
                {"option": "The sidebands become reversed at each reflection",  "correct": false},
                {"option": "The polarization of the original signal is randomized", "correct": true},
                {"option": "The apparent frequency of the received signal is shifted by a random amount",   "correct": false},
                {"option": "Signals at frequencies above 30 MHz become stronger with each reflection",  "correct": false}
            ],
            "correct": "The answer was: \"The polarization of the original signal is randomized\".",
            "incorrect": "Incorrect. The answer was: \"The polarization of the original signal is randomized\"."
        },


        {
            "q" : "What may occur if VHF or UHF data signals propagate over multiple paths?",
            "a": [
                {"option": "Transmission rates can be increased by a factor equal to the number of separate paths observed",    "correct": false},
                {"option": "Transmission rates must be decreased by a factor equal to the number of separate paths observed",   "correct": false},
                {"option": "No significant changes will occur if the signals are transmitting using FM",    "correct": false},
                {"option": "Error rates are likely to increase",    "correct": true}
            ],
            "correct": "The answer was: \"Error rates are likely to increase\".",
            "incorrect": "Incorrect. The answer was: \"Error rates are likely to increase\"."
        },


        {
            "q" : "Which part of the atmosphere enables the propagation of radio signals around the world?",
            "a": [
                {"option": "The stratosphere",  "correct": false},
                {"option": "The troposphere",   "correct": false},
                {"option": "The ionosphere",    "correct": true},
                {"option": "The magnetosphere", "correct": false}
            ],
            "correct": "The answer was: \"The ionosphere\".",
            "incorrect": "Incorrect. The answer was: \"The ionosphere\"."
        },


        //T3B - Radio and electromagnetic wave properties; the electromagnetic spectrum, wavelength vs. frequency, velocity of electromagnetic waves

        {
            "q" : "What is the name for the distance a radio wave travels during one complete cycle?",
            "a": [
                {"option": "Wave speed",    "correct": false},
                {"option": "Waveform",  "correct": false},
                {"option": "Wavelength",    "correct": true},
                {"option": "Wave spread",   "correct": false}
            ],
            "correct": "The answer was: \"Wavelength\".",
            "incorrect": "Incorrect. The answer was: \"Wavelength\"."
        },


        {
            "q" : "What term describes the number of times per second that an alternating current reverses direction?",
            "a": [
                {"option": "Pulse rate",    "correct": false},
                {"option": "Speed", "correct": false},
                {"option": "Wavelength",    "correct": false},
                {"option": "Frequency", "correct": true}
            ],
            "correct": "The answer was: \"Frequency\".",
            "incorrect": "Incorrect. The answer was: \"Frequency\"."
        },


        {
            "q" : "What are the two components of a radio wave?",
            "a": [
                {"option": "AC and DC", "correct": false},
                {"option": "Voltage and current",   "correct": false},
                {"option": "Electric and magnetic fields",  "correct": true},
                {"option": "Ionizing and non-ionizing radiation",   "correct": false}
            ],
            "correct": "The answer was: \"Electric and magnetic fields\".",
            "incorrect": "Incorrect. The answer was: \"Electric and magnetic fields\"."
        },


        {
            "q" : "How fast does a radio wave travel through free space?",
            "a": [
                {"option": "At the speed of light", "correct": true},
                {"option": "At the speed of sound", "correct": false},
                {"option": "Its speed is inversely proportional to its wavelength", "correct": false},
                {"option": "Its speed increases as the frequency increases",    "correct": false}
            ],
            "correct": "The answer was: \"At the speed of light\".",
            "incorrect": "Incorrect. The answer was: \"At the speed of light\"."
        },


        {
            "q" : "How does the wavelength of a radio wave relate to its frequency?",
            "a": [
                {"option": "The wavelength gets longer as the frequency increases", "correct": false},
                {"option": "The wavelength gets shorter as the frequency increases",    "correct": true},
                {"option": "There is no relationship between wavelength and frequency", "correct": false},
                {"option": "The wavelength depends on the bandwidth of the signal", "correct": false}
            ],
            "correct": "The answer was: \"The wavelength gets shorter as the frequency increases\".",
            "incorrect": "Incorrect. The answer was: \"The wavelength gets shorter as the frequency increases\"."
        },


        {
            "q" : "What is the formula for converting frequency to wavelength in meters?",
            "a": [
                {"option": "Wavelength in meters equals frequency in hertz multiplied by 300",  "correct": false},
                {"option": "Wavelength in meters equals frequency in hertz divided by 300", "correct": false},
                {"option": "Wavelength in meters equals frequency in megahertz divided by 300", "correct": false},
                {"option": "Wavelength in meters equals 300 divided by frequency in megahertz", "correct": true}
            ],
            "correct": "The answer was: \"Wavelength in meters equals 300 divided by frequency in megahertz\".",
            "incorrect": "Incorrect. The answer was: \"Wavelength in meters equals 300 divided by frequency in megahertz\"."
        },


        {
            "q" : "What property of radio waves is often used to identify the different frequency bands?",
            "a": [
                {"option": "The approximate wavelength",    "correct": true},
                {"option": "The magnetic intensity of waves",   "correct": false},
                {"option": "The time it takes for waves to travel one mile",    "correct": false},
                {"option": "The voltage standing wave ratio of waves",  "correct": false}
            ],
            "correct": "The answer was: \"The approximate wavelength\".",
            "incorrect": "Incorrect. The answer was: \"The approximate wavelength\"."
        },


        {
            "q" : "What are the frequency limits of the VHF spectrum?",
            "a": [
                {"option": "30 to 300 kHz", "correct": false},
                {"option": "30 to 300 MHz", "correct": true},
                {"option": "300 to 3000 kHz",   "correct": false},
                {"option": "300 to 3000 MHz",   "correct": false}
            ],
            "correct": "The answer was: \"30 to 300 MHz\".",
            "incorrect": "Incorrect. The answer was: \"30 to 300 MHz\"."
        },



        {
            "q" : "What are the frequency limits of the UHF spectrum?",
            "a": [
                {"option": "30 to 300 kHz", "correct": false},
                {"option": "30 to 300 MHz", "correct": false},
                {"option": "300 to 3000 kHz",   "correct": false},
                {"option": "300 to 3000 MHz",   "correct": true}
            ],
            "correct": "The answer was: \"300 to 3000 MHz\".",
            "incorrect": "Incorrect. The answer was: \"300 to 3000 MHz\"."
        },


        {
            "q" : "What frequency range is referred to as HF?",
            "a": [
                {"option": "300 to 3000 MHz",   "correct": false},
                {"option": "30 to 300 MHz", "correct": false},
                {"option": "3 to 30 MHz",   "correct": true},
                {"option": "300 to 3000 kHz",   "correct": false}
            ],
            "correct": "The answer was: \"3 to 30 MHz\".",
            "incorrect": "Incorrect. The answer was: \"3 to 30 MHz\"."
        },


        {
            "q" : "What is the approximate velocity of a radio wave as it travels through free space?",
            "a": [
                {"option": "3000 kilometers per second",    "correct": false},
                {"option": "300,000,000 meters per second", "correct": true},
                {"option": "300,000 miles per hour",    "correct": false},
                {"option": "186,000 miles per hour",    "correct": false}
            ],
            "correct": "The answer was: \"300,000,000 meters per second\".",
            "incorrect": "Incorrect. The answer was: \"300,000,000 meters per second\"."
        },


        //T3C - Propagation modes; line of sight, sporadic E, meteor, aurora scatter, tropospheric ducting, F layer skip, radio horizon

        {
            "q" : "Why are \"direct\" (not via a repeater) UHF signals rarely heard from stations outside your local coverage area?",
            "a": [
                {"option": "They are too weak to go very far",  "correct": false},
                {"option": "FCC regulations prohibit them from going more than 50 miles",   "correct": false},
                {"option": "UHF signals are usually not reflected by the ionosphere",   "correct": true},
                {"option": "They collide with trees and shrubbery and fade out",    "correct": false}
            ],
            "correct": "The answer was: \"UHF signals are usually not reflected by the ionosphere\".",
            "incorrect": "Incorrect. The answer was: \"UHF signals are usually not reflected by the ionosphere\"."
        },


        {
            "q" : "Which of the following might be happening when VHF signals are being received from long distances?",
            "a": [
                {"option": "Signals are being reflected from outer space",  "correct": false},
                {"option": "Signals are arriving by sub-surface ducting",   "correct": false},
                {"option": "Signals are being reflected by lightning storms in your area",  "correct": false},
                {"option": "Signals are being refracted from a sporadic E layer",   "correct": true}
            ],
            "correct": "The answer was: \"Signals are being refracted from a sporadic E layer\".",
            "incorrect": "Incorrect. The answer was: \"Signals are being refracted from a sporadic E layer\"."
        },


        {
            "q" : "What is a characteristic of VHF signals received via auroral reflection?",
            "a": [
                {"option": "Signals from distances of 10,000 or more miles are common", "correct": false},
                {"option": "The signals exhibit rapid fluctuations of strength and often sound distorted",  "correct": true},
                {"option": "These types of signals occur only during winter nighttime hours",   "correct": false},
                {"option": "These types of signals are generally strongest when your antenna is aimed to the south (for stations in the Northern Hemisphere)",  "correct": false}
            ],
            "correct": "The answer was: \"The signals exhibit rapid fluctuations of strength and often sound distorted\".",
            "incorrect": "Incorrect. The answer was: \"The signals exhibit rapid fluctuations of strength and often sound distorted\"."
        },



        {
            "q" : "Which of the following propagation types is most commonly associated with occasional strong over-the-horizon signals on the 10, 6, and 2 meter bands?",
            "a": [
                {"option": "Backscatter",   "correct": false},
                {"option": "Sporadic E",    "correct": true},
                {"option": "D layer absorption",    "correct": false},
                {"option": "Gray-line propagation", "correct": false}
            ],
            "correct": "The answer was: \"Sporadic E\".",
            "incorrect": "Incorrect. The answer was: \"Sporadic E\"."
        },


        {
            "q" : "What is meant by the term \"knife-edge\" propagation?",
            "a": [
                {"option": "Signals are reflected back toward the originating station at acute angles", "correct": false},
                {"option": "Signals are sliced into several discrete beams and arrive via different paths", "correct": false},
                {"option": "Signals are partially refracted around solid objects exhibiting sharp edges",   "correct": true},
                {"option": "Signals propagated close to the band edge exhibiting a sharp cutoff",   "correct": false}
            ],
            "correct": "The answer was: \"Signals are partially refracted around solid objects exhibiting sharp edges\".",
            "incorrect": "Incorrect. The answer was: \"Signals are partially refracted around solid objects exhibiting sharp edges\"."
        },


        {
            "q" : "What mode is responsible for allowing over-the-horizon VHF and UHF communications to ranges of approximately 300 miles on a regular basis?",
            "a": [
                {"option": "Tropospheric scatter",  "correct": true},
                {"option": "D layer refraction",    "correct": false},
                {"option": "F2 layer refraction",   "correct": false},
                {"option": "Faraday rotation",  "correct": false}
            ],
            "correct": "The answer was: \"Tropospheric scatter\".",
            "incorrect": "Incorrect. The answer was: \"Tropospheric scatter\"."
        },


        {
            "q" : "What band is best suited to communicating via meteor scatter?",
            "a": [
                {"option": "10 meters", "correct": false},
                {"option": "6 meters",  "correct": true},
                {"option": "2 meters",  "correct": false},
                {"option": "70 cm", "correct": false}
            ],
            "correct": "The answer was: \"6 meters\".",
            "incorrect": "Incorrect. The answer was: \"6 meters\"."
        },


        {
            "q" : "What causes \"tropospheric ducting\"?",
            "a": [
                {"option": "Discharges of lightning during electrical storms",  "correct": false},
                {"option": "Sunspots and solar flares", "correct": false},
                {"option": "Updrafts from hurricanes and tornadoes",    "correct": false},
                {"option": "Temperature inversions in the atmosphere",  "correct": true}
            ],
            "correct": "The answer was: \"Temperature inversions in the atmosphere\".",
            "incorrect": "Incorrect. The answer was: \"Temperature inversions in the atmosphere\"."
        },


        {
            "q" : "What is generally the best time for long-distance 10 meter band propagation?",
            "a": [
                {"option": "During daylight hours", "correct": true},
                {"option": "During nighttime hours",    "correct": false},
                {"option": "When there are coronal mass ejections", "correct": false},
                {"option": "Whenever the solar flux is low",    "correct": false}
            ],
            "correct": "The answer was: \"During daylight hours\".",
            "incorrect": "Incorrect. The answer was: \"During daylight hours\"."
        },



        {
            "q" : "What is the radio horizon?",
            "a": [
                {"option": "The distance at which radio signals between two points are effectively blocked by the curvature of the Earth",  "correct": true},
                {"option": "The distance from the ground to a horizontally mounted antenna",    "correct": false},
                {"option": "The farthest point you can see when standing at the base of your antenna tower",    "correct": false},
                {"option": "The shortest distance between two points on the Earth's surface",   "correct": false}
            ],
            "correct": "The answer was: \"The distance at which radio signals between two points are effectively blocked by the curvature of the Earth\".",
            "incorrect": "Incorrect. The answer was: \"The distance at which radio signals between two points are effectively blocked by the curvature of the Earth\"."
        },


        {
            "q" : "Why do VHF and UHF radio signals usually travel somewhat farther than the visual line of sight distance between two stations?",
            "a": [
                {"option": "Radio signals move somewhat faster than the speed of light",    "correct": false},
                {"option": "Radio waves are not blocked by dust particles", "correct": false},
                {"option": "The Earth seems less curved to radio waves than to light",  "correct": true},
                {"option": "Radio waves are blocked by dust particles", "correct": false}
            ],
            "correct": "The answer was: \"The Earth seems less curved to radio waves than to light\".",
            "incorrect": "Incorrect. The answer was: \"The Earth seems less curved to radio waves than to light\"."
        },


        //SUBELEMENT T4 - Amateur radio practices and station set up – [2 Exam Questions - 2 Groups]

        //T4A – Station setup; microphone, speaker, headphones, filters, power source, connecting a computer, RF grounding

        {
            "q" : "Which of the following is true concerning the microphone connectors on amateur transceivers?",
            "a": [
                {"option": "All transceivers use the same microphone connector type",   "correct": false},
                {"option": "Some connectors include push-to-talk and voltages for powering the microphone", "correct": true},
                {"option": "All transceivers using the same connector type are wired identically",  "correct": false},
                {"option": "Un-keyed connectors allow any microphone to be connected",  "correct": false}
            ],
            "correct": "The answer was: \"Some connectors include push-to-talk and voltages for powering the microphone\".",
            "incorrect": "Incorrect. The answer was: \"Some connectors include push-to-talk and voltages for powering the microphone\"."
        },


        {
            "q" : "What could be used in place of a regular speaker to help you copy signals in a noisy area?",
            "a": [
                {"option": "A video display",   "correct": false},
                {"option": "A low pass filter", "correct": false},
                {"option": "A set of headphones",   "correct": true},
                {"option": "A boom microphone", "correct": false}
            ],
            "correct": "The answer was: \"A set of headphones\".",
            "incorrect": "Incorrect. The answer was: \"A set of headphones\"."
        },


        {
            "q" : "Which is a good reason to use a regulated power supply for communications equipment?",
            "a": [
                {"option": "It prevents voltage fluctuations from reaching sensitive circuits", "correct": true},
                {"option": "A regulated power supply has FCC approval", "correct": false},
                {"option": "A fuse or circuit breaker regulates the power", "correct": false},
                {"option": "Power consumption is independent of load",  "correct": false}
            ],
            "correct": "The answer was: \"It prevents voltage fluctuations from reaching sensitive circuits\".",
            "incorrect": "Incorrect. The answer was: \"It prevents voltage fluctuations from reaching sensitive circuits\"."
        },



        {
            "q" : "Where must a filter be installed to reduce harmonic emissions?",
            "a": [
                {"option": "Between the transmitter and the antenna",   "correct": true},
                {"option": "Between the receiver and the transmitter",  "correct": false},
                {"option": "At the station power supply",   "correct": false},
                {"option": "At the microphone", "correct": false}
            ],
            "correct": "The answer was: \"Between the transmitter and the antenna\".",
            "incorrect": "Incorrect. The answer was: \"Between the transmitter and the antenna\"."
        },


        {
            "q" : "What type of filter should be connected to a TV receiver as the first step in trying to prevent RF overload from a nearby 2 meter transmitter?",
            "a": [
                {"option": "Low-pass filter",   "correct": false},
                {"option": "High-pass filter",  "correct": false},
                {"option": "Band-pass filter",  "correct": false},
                {"option": "Band-reject filter",    "correct": true}
            ],
            "correct": "The answer was: \"Band-reject filter\".",
            "incorrect": "Incorrect. The answer was: \"Band-reject filter\"."
        },


        {
            "q" : "Which of the following would be connected between a transceiver and computer in a packet radio station?",
            "a": [
                {"option": "Transmatch",    "correct": false},
                {"option": "Mixer", "correct": false},
                {"option": "Terminal node controller",  "correct": true},
                {"option": "Antenna",   "correct": false}
            ],
            "correct": "The answer was: \"Terminal node controller\".",
            "incorrect": "Incorrect. The answer was: \"Terminal node controller\"."
        },


        {
            "q" : "How is the computer’s sound card used when conducting digital communications using a computer?",
            "a": [
                {"option": "The sound card communicates between the computer CPU and the video display",    "correct": false},
                {"option": "The sound card records the audio frequency for video display",  "correct": false},
                {"option": "The sound card provides audio to the microphone input and converts received audio to digital form", "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"The sound card provides audio to the microphone input and converts received audio to digital form\".",
            "incorrect": "Incorrect. The answer was: \"The sound card provides audio to the microphone input and converts received audio to digital form\"."
        },


        {
            "q" : "Which type of conductor is best to use for RF grounding?",
            "a": [
                {"option": "Round stranded wire ",  "correct": false},
                {"option": "Round copper-clad steel wire",  "correct": false},
                {"option": "Twisted-pair cable",    "correct": false},
                {"option": "Flat strap",    "correct": true}
            ],
            "correct": "The answer was: \"Flat strap\".",
            "incorrect": "Incorrect. The answer was: \"Flat strap\"."
        },


        {
            "q" : "Which would you use to reduce RF current flowing on the shield of an audio cable?",
            "a": [
                {"option": "Band-pass filter",  "correct": false},
                {"option": "Low-pass filter",   "correct": false},
                {"option": "Preamplifier",  "correct": false},
                {"option": "Ferrite choke", "correct": true}
            ],
            "correct": "The answer was: \"Ferrite choke\".",
            "incorrect": "Incorrect. The answer was: \"Ferrite choke\"."
        },



        {
            "q" : "What is the source of a high-pitched whine that varies with engine speed in a mobile transceiver’s receive audio?",
            "a": [
                {"option": "The ignition system",   "correct": false},
                {"option": "The alternator",    "correct": true},
                {"option": "The electric fuel pump",    "correct": false},
                {"option": "Anti-lock braking system controllers",  "correct": false}
            ],
            "correct": "The answer was: \"The alternator\".",
            "incorrect": "Incorrect. The answer was: \"The alternator\"."
        },


        {
            "q" : "Where should a mobile transceiver’s power negative connection be made?",
            "a": [
                {"option": "At the battery or engine block ground strap",   "correct": true},
                {"option": "At the antenna mount",  "correct": false},
                {"option": "To any metal part of the vehicle",  "correct": false},
                {"option": "Through the transceiver’s mounting bracket",    "correct": false}
            ],
            "correct": "The answer was: \"At the battery or engine block ground strap\".",
            "incorrect": "Incorrect. The answer was: \"At the battery or engine block ground strap\"."
        },


        //T4B - Operating controls; tuning, use of filters, squelch, AGC, repeater offset, memory channels

        {
            "q" : "What may happen if a transmitter is operated with the microphone gain set too high?",
            "a": [
                {"option": "The output power might be too high",    "correct": false},
                {"option": "The output signal might become distorted",  "correct": true},
                {"option": "The frequency might vary",  "correct": false},
                {"option": "The SWR might increase",    "correct": false}
            ],
            "correct": "The answer was: \"The output signal might become distorted\".",
            "incorrect": "Incorrect. The answer was: \"The output signal might become distorted\"."
        },


        {
            "q" : "Which of the following can be used to enter the operating frequency on a modern transceiver?",
            "a": [
                {"option": "The keypad or VFO knob",    "correct": true},
                {"option": "The CTCSS or DTMF encoder", "correct": false},
                {"option": "The Automatic Frequency Control",   "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"The keypad or VFO knob\".",
            "incorrect": "Incorrect. The answer was: \"The keypad or VFO knob\"."
        },


        {
            "q" : "What is the purpose of the squelch control on a transceiver?",
            "a": [
                {"option": "To set the highest level of volume desired",    "correct": false},
                {"option": "To set the transmitter power level",    "correct": false},
                {"option": "To adjust the automatic gain control",  "correct": false},
                {"option": "To mute receiver output noise when no signal is being received",    "correct": true}
            ],
            "correct": "The answer was: \"To mute receiver output noise when no signal is being received\".",
            "incorrect": "Incorrect. The answer was: \"To mute receiver output noise when no signal is being received\"."
        },


        {
            "q" : "What is a way to enable quick access to a favorite frequency on your transceiver?",
            "a": [
                {"option": "Enable the CTCSS tones",    "correct": false},
                {"option": "Store the frequency in a memory channel",   "correct": true},
                {"option": "Disable the CTCSS tones",   "correct": false},
                {"option": "Use the scan mode to select the desired frequency", "correct": false}
            ],
            "correct": "The answer was: \"Store the frequency in a memory channel\".",
            "incorrect": "Incorrect. The answer was: \"Store the frequency in a memory channel\"."
        },



        {
            "q" : "Which of the following would reduce ignition interference to a receiver?",
            "a": [
                {"option": "Change frequency slightly", "correct": false},
                {"option": "Decrease the squelch setting",  "correct": false},
                {"option": "Turn on the noise blanker", "correct": true},
                {"option": "Use the RIT control",   "correct": false}
            ],
            "correct": "The answer was: \"Turn on the noise blanker\".",
            "incorrect": "Incorrect. The answer was: \"Turn on the noise blanker\"."
        },


        {
            "q" : "Which of the following controls could be used if the voice pitch of a single-sideband signal seems too high or low?",
            "a": [
                {"option": "The AGC or limiter",    "correct": false},
                {"option": "The bandwidth selection",   "correct": false},
                {"option": "The tone squelch",  "correct": false},
                {"option": "The receiver RIT or clarifier", "correct": true}
            ],
            "correct": "The answer was: \"The receiver RIT or clarifier\".",
            "incorrect": "Incorrect. The answer was: \"The receiver RIT or clarifier\"."
        },


        {
            "q" : "What does the term \"RIT\" mean?",
            "a": [
                {"option": "Receiver Input Tone",   "correct": false},
                {"option": "Receiver Incremental Tuning",   "correct": true},
                {"option": "Rectifier Inverter Test",   "correct": false},
                {"option": "Remote Input Transmitter",  "correct": false}
            ],
            "correct": "The answer was: \"Receiver Incremental Tuning\".",
            "incorrect": "Incorrect. The answer was: \"Receiver Incremental Tuning\"."
        },


        {
            "q" : "What is the advantage of having multiple receive bandwidth choices on a multimode transceiver?",
            "a": [
                {"option": "Permits monitoring several modes at once",  "correct": false},
                {"option": "Permits noise or interference reduction by selecting a bandwidth matching the mode",    "correct": true},
                {"option": "Increases the number of frequencies that can be stored in memory",  "correct": false},
                {"option": "Increases the amount of offset between receive and transmit frequencies",   "correct": false}
            ],
            "correct": "The answer was: \"Permits noise or interference reduction by selecting a bandwidth matching the mode\".",
            "incorrect": "Incorrect. The answer was: \"Permits noise or interference reduction by selecting a bandwidth matching the mode\"."
        },


        {
            "q" : "Which of the following is an appropriate receive filter to select in order to minimize noise and interference for SSB reception?",
            "a": [
                {"option": "500 Hz",    "correct": false},
                {"option": "1000 Hz",   "correct": false},
                {"option": "2400 Hz",   "correct": true},
                {"option": "5000 Hz",   "correct": false}
            ],
            "correct": "The answer was: \"2400 Hz\".",
            "incorrect": "Incorrect. The answer was: \"2400 Hz\"."
        },


        {
            "q" : "Which of the following is an appropriate receive filter to select in order to minimize noise and interference for CW reception?",
            "a": [
                {"option": "500 Hz",    "correct": true},
                {"option": "1000 Hz",   "correct": false},
                {"option": "2400 Hz",   "correct": false},
                {"option": "5000 Hz",   "correct": false}
            ],
            "correct": "The answer was: \"500 Hz\".",
            "incorrect": "Incorrect. The answer was: \"500 Hz\"."
        },



        {
            "q" : "Which of the following describes the common meaning of the term “repeater offset”?",
            "a": [
                {"option": "The distance between the repeater’s transmit and receive antennas", "correct": false},
                {"option": "The time delay before the repeater timer resets",   "correct": false},
                {"option": "The difference between the repeater’s transmit and receive frequencies",    "correct": true},
                {"option": "The maximum frequency deviation permitted on the repeater’s input signal",  "correct": false}
            ],
            "correct": "The answer was: \"The difference between the repeater’s transmit and receive frequencies\".",
            "incorrect": "Incorrect. The answer was: \"The difference between the repeater’s transmit and receive frequencies\"."
        },


        //SUBELEMENT T5 – Electrical principles, math for electronics, electronic principles, Ohm’s Law – [4 Exam Questions - 4 Groups]

        //T5A - Electrical principles; current and voltage, conductors and insulators, alternating and direct current

        {
            "q" : "Electrical current is measured in which of the following units?",
            "a": [
                {"option": "Volts", "correct": false},
                {"option": "Watts", "correct": false},
                {"option": "Ohms",  "correct": false},
                {"option": "Amperes",   "correct": true}
            ],
            "correct": "The answer was: \"Amperes\".",
            "incorrect": "Incorrect. The answer was: \"Amperes\"."
        },


        {
            "q" : "Electrical power is measured in which of the following units?",
            "a": [
                {"option": "Volts", "correct": false},
                {"option": "Watts", "correct": true},
                {"option": "Ohms",  "correct": false},
                {"option": "Amperes",   "correct": false}
            ],
            "correct": "The answer was: \"Watts\". (See also )",
            "incorrect": "Incorrect. The answer was: \"Watts\". (See also )"
        },

        {
            "q" : "What is the name for the flow of electrons in an electric circuit?",
            "a": [
                {"option": "Voltage",   "correct": false},
                {"option": "Resistance",    "correct": false},
                {"option": "Capacitance",   "correct": false},
                {"option": "Current ",  "correct": true}
            ],
            "correct": "The answer was: \"Current \".",
            "incorrect": "Incorrect. The answer was: \"Current \"."
        },


        {
            "q" : "What is the name for a current that flows only in one direction?",
            "a": [
                {"option": "Alternating current",   "correct": false},
                {"option": "Direct current",    "correct": true},
                {"option": "Normal current",    "correct": false},
                {"option": "Smooth current",    "correct": false}
            ],
            "correct": "The answer was: \"Direct current\". (See also )",
            "incorrect": "Incorrect. The answer was: \"Direct current\". (See also )"
        },


        {
            "q" : "What is the electrical term for the electromotive force (EMF) that causes electron flow?",
            "a": [
                {"option": "Voltage",   "correct": true},
                {"option": "Ampere-hours",  "correct": false},
                {"option": "Capacitance",   "correct": false},
                {"option": "Inductance",    "correct": false}
            ],
            "correct": "The answer was: \"Voltage\".",
            "incorrect": "Incorrect. The answer was: \"Voltage\"."
        },



        {
            "q" : "How much voltage does a mobile transceiver usually require?",
            "a": [
                {"option": "About 12 volts",    "correct": true},
                {"option": "About 30 volts",    "correct": false},
                {"option": "About 120 volts",   "correct": false},
                {"option": "About 240 volts",   "correct": false}
            ],
            "correct": "The answer was: \"About 12 volts\".",
            "incorrect": "Incorrect. The answer was: \"About 12 volts\"."
        },


        {
            "q" : "Which of the following is a good electrical conductor?",
            "a": [
                {"option": "Glass", "correct": false},
                {"option": "Wood",  "correct": false},
                {"option": "Copper",    "correct": true},
                {"option": "Rubber",    "correct": false}
            ],
            "correct": "The answer was: \"Copper\".",
            "incorrect": "Incorrect. The answer was: \"Copper\"."
        },


        {
            "q" : "Which of the following is a good electrical insulator?",
            "a": [
                {"option": "Copper",    "correct": false},
                {"option": "Glass", "correct": true},
                {"option": "Aluminum",  "correct": false},
                {"option": "Mercury",   "correct": false}
            ],
            "correct": "The answer was: \"Glass\".",
            "incorrect": "Incorrect. The answer was: \"Glass\"."
        },


        {
            "q" : "What is the name for a current that reverses direction on a regular basis?",
            "a": [
                {"option": "Alternating current",   "correct": true},
                {"option": "Direct current",    "correct": false},
                {"option": "Circular current",  "correct": false},
                {"option": "Vertical current",  "correct": false}
            ],
            "correct": "The answer was: \"Alternating current\".",
            "incorrect": "Incorrect. The answer was: \"Alternating current\"."
        },

        {
            "q" : "Which term describes the rate at which electrical energy is used?",
            "a": [
                {"option": "Resistance",    "correct": false},
                {"option": "Current",   "correct": false},
                {"option": "Power", "correct": true},
                {"option": "Voltage",   "correct": false}
            ],
            "correct": "The answer was: \"Power\".",
            "incorrect": "Incorrect. The answer was: \"Power\"."
        },


        {
            "q" : "What is the basic unit of electromotive force?",
            "a": [
                {"option": "The volt",  "correct": true},
                {"option": "The watt",  "correct": false},
                {"option": "The ampere",    "correct": false},
                {"option": "The ohm",   "correct": false}
            ],
            "correct": "The answer was: \"The volt\".",
            "incorrect": "Incorrect. The answer was: \"The volt\"."
        },



        //T5B - Math for electronics; decibels, electrical units and the metric system

        {
            "q" : "How many milliamperes is 1.5 amperes?",
            "a": [
                {"option": "15 milliamperes",   "correct": false},
                {"option": "150 milliamperes",  "correct": false},
                {"option": "1,500 milliamperes",    "correct": true},
                {"option": "15,000 milliamperes",   "correct": false}
            ],
            "correct": "The answer was: \"1,500 milliamperes\".",
            "incorrect": "Incorrect. The answer was: \"1,500 milliamperes\"."
        },


        {
            "q" : "What is another way to specify a radio signal frequency of 1,500,000 hertz?",
            "a": [
                {"option": "1500 kHz",  "correct": true},
                {"option": "1500 MHz",  "correct": false},
                {"option": "15 GHz",    "correct": false},
                {"option": "150 kHz",   "correct": false}
            ],
            "correct": "The answer was: \"1500 kHz\".",
            "incorrect": "Incorrect. The answer was: \"1500 kHz\"."
        },


        {
            "q" : "How many volts are equal to one kilovolt?",
            "a": [
                {"option": "One one-thousandth of a volt",  "correct": false},
                {"option": "One hundred volts", "correct": false},
                {"option": "One thousand volts",    "correct": true},
                {"option": "One million volts", "correct": false}
            ],
            "correct": "The answer was: \"One thousand volts\".",
            "incorrect": "Incorrect. The answer was: \"One thousand volts\"."
        },


        {
            "q" : "How many volts are equal to one microvolt?",
            "a": [
                {"option": "One one-millionth of a volt",   "correct": true},
                {"option": "One million volts", "correct": false},
                {"option": "One thousand kilovolts",    "correct": false},
                {"option": "One one-thousandth of a volt",  "correct": false}
            ],
            "correct": "The answer was: \"One one-millionth of a volt\".",
            "incorrect": "Incorrect. The answer was: \"One one-millionth of a volt\"."
        },


        {
            "q" : "Which of the following is equivalent to 500 milliwatts?",
            "a": [
                {"option": "0.02 watts",    "correct": false},
                {"option": "0.5 watts", "correct": true},
                {"option": "5 watts",   "correct": false},
                {"option": "50 watts",  "correct": false}
            ],
            "correct": "The answer was: \"0.5 watts\".",
            "incorrect": "Incorrect. The answer was: \"0.5 watts\"."
        },


        {
            "q" : "If an ammeter calibrated in amperes is used to measure a 3000-milliampere current, what reading would it show?",
            "a": [
                {"option": "0.003 amperes", "correct": false},
                {"option": "0.3 amperes",   "correct": false},
                {"option": "3 amperes", "correct": true},
                {"option": "3,000,000 amperes", "correct": false}
            ],
            "correct": "The answer was: \"3 amperes\".",
            "incorrect": "Incorrect. The answer was: \"3 amperes\"."
        },



        {
            "q" : "If a frequency readout calibrated in megahertz shows a reading of 3.525 MHz, what would it show if it were calibrated in kilohertz? ",
            "a": [
                {"option": "0.003525 kHz",  "correct": false},
                {"option": "35.25 kHz", "correct": false},
                {"option": "3525 kHz",  "correct": true},
                {"option": "3,525,000 kHz", "correct": false}
            ],
            "correct": "The answer was: \"3525 kHz\".",
            "incorrect": "Incorrect. The answer was: \"3525 kHz\"."
        }, 


        {//*
            "q" : "How many microfarads are 1,000,000 picofarads?",
            "a": [
                {"option": "0.001 microfarads", "correct": false},
                {"option": "1 microfarad",  "correct": true},
                {"option": "1000 microfarads",  "correct": false},
                {"option": "1,000,000,000 microfarads", "correct": false}
            ],
            "correct": "The answer was: \"1 microfarad\".",
            "incorrect": "Incorrect. The answer was: \"1 microfarad\"."
        }, 


        {
            "q" : "What is the approximate amount of change, measured in decibels (dB), of a power increase from 5 watts to 10 watts?",
            "a": [
                {"option": "2 dB",  "correct": false},
                {"option": "3 dB",  "correct": true},
                {"option": "5 dB",  "correct": false},
                {"option": "10 dB", "correct": false}
            ],
            "correct": "The answer was: \"3 dB\".",
            "incorrect": "Incorrect. The answer was: \"3 dB\"."
        },


        {
            "q" : "What is the approximate amount of change, measured in decibels (dB), of a power decrease from 12 watts to 3 watts?",
            "a": [
                {"option": "1 dB",  "correct": false},
                {"option": "3 dB",  "correct": false},
                {"option": "6 dB",  "correct": true},
                {"option": "9 dB",  "correct": false}
            ],
            "correct": "The answer was: \"6 dB\".",
            "incorrect": "Incorrect. The answer was: \"6 dB\"."
        },


        {
            "q" : "What is the approximate amount of change, measured in decibels (dB), of a power increase from 20 watts to 200 watts?",
            "a": [
                {"option": "10 dB", "correct": true},
                {"option": "12 dB", "correct": false},
                {"option": "18 dB", "correct": false},
                {"option": "28 dB", "correct": false}
            ],
            "correct": "The answer was: \"10 dB\".",
            "incorrect": "Incorrect. The answer was: \"10 dB\"."
        },



        //T5C - Electronic principles; capacitance, inductance, current flow in circuits, alternating current, definition of RF, power calculations

        {
            "q" : "What is the ability to store energy in an electric field called?",
            "a": [
                {"option": "Inductance",    "correct": false},
                {"option": "Resistance",    "correct": false},
                {"option": "Tolerance ",    "correct": false},
                {"option": "Capacitance",   "correct": true}
            ],
            "correct": "The answer was: \"Capacitance\".",
            "incorrect": "Incorrect. The answer was: \"Capacitance\"."
        },


        {
            "q" : "What is the basic unit of capacitance?",
            "a": [
                {"option": "The farad", "correct": true},
                {"option": "The ohm",   "correct": false},
                {"option": "The volt",  "correct": false},
                {"option": "The henry", "correct": false}
            ],
            "correct": "The answer was: \"The farad\".",
            "incorrect": "Incorrect. The answer was: \"The farad\"."
        },


        {
            "q" : "What is the ability to store energy in a magnetic field called?",
            "a": [
                {"option": "Admittance",    "correct": false},
                {"option": "Capacitance",   "correct": false},
                {"option": "Resistance",    "correct": false},
                {"option": "Inductance",    "correct": true}
            ],
            "correct": "The answer was: \"Inductance\".",
            "incorrect": "Incorrect. The answer was: \"Inductance\"."
        },


        {
            "q" : "What is the basic unit of inductance?",
            "a": [
                {"option": "The coulomb",   "correct": false},
                {"option": "The farad", "correct": false},
                {"option": "The henry", "correct": true},
                {"option": "The ohm",   "correct": false}
            ],
            "correct": "The answer was: \"The henry\".",
            "incorrect": "Incorrect. The answer was: \"The henry\"."
        },


        {
            "q" : "What is the unit of frequency?",
            "a": [
                {"option": "Hertz", "correct": true},
                {"option": "Henry", "correct": false},
                {"option": "Farad", "correct": false},
                {"option": "Tesla", "correct": false}
            ],
            "correct": "The answer was: \"Hertz\".",
            "incorrect": "Incorrect. The answer was: \"Hertz\"."
        },


        {
            "q" : "What is the abbreviation that refers to radio frequency signals of all types?",
            "a": [
                {"option": "AF",    "correct": false},
                {"option": "HF",    "correct": false},
                {"option": "RF",    "correct": true},
                {"option": "VHF",   "correct": false}
            ],
            "correct": "The answer was: \"RF\".",
            "incorrect": "Incorrect. The answer was: \"RF\"."
        },



        {
            "q" : "What is a usual name for electromagnetic waves that travel through space?",
            "a": [
                {"option": "Gravity waves", "correct": false},
                {"option": "Sound waves",   "correct": false},
                {"option": "Radio waves",   "correct": true},
                {"option": "Pressure waves",    "correct": false}
            ],
            "correct": "The answer was: \"Radio waves\".",
            "incorrect": "Incorrect. The answer was: \"Radio waves\"."
        },


        {
            "q" : "What is the formula used to calculate electrical power in a DC circuit?",
            "a": [
                {"option": "Power (P) equals voltage (E) multiplied by current (I)",    "correct": true},
                {"option": "Power (P) equals voltage (E) divided by current (I)",   "correct": false},
                {"option": "Power (P) equals voltage (E) minus current (I)",    "correct": false},
                {"option": "Power (P) equals voltage (E) plus current (I)", "correct": false}
            ],
            "correct": "The answer was: \"Power (P) equals voltage (E) multiplied by current (I)\".",
            "incorrect": "Incorrect. The answer was: \"Power (P) equals voltage (E) multiplied by current (I)\"."
        },


        {
            "q" : "How much power is being used in a circuit when the applied voltage is 13.8 volts DC and the current is 10 amperes?",
            "a": [
                {"option": "138 watts", "correct": true},
                {"option": "0.7 watts", "correct": false},
                {"option": "23.8 watts",    "correct": false},
                {"option": "3.8 watts", "correct": false}
            ],
            "correct": "The answer was: \"138 watts\".",
            "incorrect": "Incorrect. The answer was: \"138 watts\"."
        },


        {
            "q" : "How much power is being used in a circuit when the applied voltage is 12 volts DC and the current is 2.5 amperes?",
            "a": [
                {"option": "4.8 watts", "correct": false},
                {"option": "30 watts",  "correct": true},
                {"option": "14.5 watts",    "correct": false},
                {"option": "0.208 watts",   "correct": false}
            ],
            "correct": "The answer was: \"30 watts\".",
            "incorrect": "Incorrect. The answer was: \"30 watts\"."
        },


        {
            "q" : "How many amperes are flowing in a circuit when the applied voltage is 12 volts DC and the load is 120 watts?",
            "a": [
                {"option": "0.1 amperes",   "correct": false},
                {"option": "10 amperes",    "correct": true},
                {"option": "12 amperes",    "correct": false},
                {"option": "132 amperes",   "correct": false}
            ],
            "correct": "The answer was: \"10 amperes\".",
            "incorrect": "Incorrect. The answer was: \"10 amperes\"."
        },


        //T5D – Ohm’s Law

        {
            "q" : "What formula is used to calculate current in a circuit?",
            "a": [
                {"option": "Current (I) equals voltage (E) multiplied by resistance (R)",   "correct": false},
                {"option": "Current (I) equals voltage (E) divided by resistance (R)",  "correct": true},
                {"option": "Current (I) equals voltage (E) added to resistance (R)",    "correct": false},
                {"option": "Current (I) equals voltage (E) minus resistance (R)",   "correct": false}
            ],
            "correct": "The answer was: \"Current (I) equals voltage (E) divided by resistance (R)\".",
            "incorrect": "Incorrect. The answer was: \"Current (I) equals voltage (E) divided by resistance (R)\"."
        },



        {
            "q" : "What formula is used to calculate voltage in a circuit?",
            "a": [
                {"option": "Voltage (E) equals current (I) multiplied by resistance (R)",   "correct": true},
                {"option": "Voltage (E) equals current (I) divided by resistance (R)",  "correct": false},
                {"option": "Voltage (E) equals current (I) added to resistance (R)",    "correct": false},
                {"option": "Voltage (E) equals current (I) minus resistance (R)",   "correct": false}
            ],
            "correct": "The answer was: \"Voltage (E) equals current (I) multiplied by resistance (R)\".",
            "incorrect": "Incorrect. The answer was: \"Voltage (E) equals current (I) multiplied by resistance (R)\"."
        },


        {
            "q" : "What formula is used to calculate resistance in a circuit?",
            "a": [
                {"option": "Resistance (R) equals voltage (E) multiplied by current (I)",   "correct": false},
                {"option": "Resistance (R) equals voltage (E) divided by current (I)",  "correct": true},
                {"option": "Resistance (R) equals voltage (E) added to current (I)",    "correct": false},
                {"option": "Resistance (R) equals voltage (E) minus current (I)",   "correct": false}
            ],
            "correct": "The answer was: \"Resistance (R) equals voltage (E) divided by current (I)\".",
            "incorrect": "Incorrect. The answer was: \"Resistance (R) equals voltage (E) divided by current (I)\"."
        },


        {
            "q" : "What is the resistance of a circuit in which a current of 3 amperes flows through a resistor connected to 90 volts?",
            "a": [
                {"option": "3 ohms",    "correct": false},
                {"option": "30 ohms",   "correct": true},
                {"option": "93 ohms",   "correct": false},
                {"option": "270 ohms",  "correct": false}
            ],
            "correct": "The answer was: \"30 ohms\".",
            "incorrect": "Incorrect. The answer was: \"30 ohms\"."
        },


        {
            "q" : "What is the resistance in a circuit for which the applied voltage is 12 volts and the current flow is 1.5 amperes?",
            "a": [
                {"option": "18 ohms",   "correct": false},
                {"option": "0.125 ohms",    "correct": false},
                {"option": "8 ohms",    "correct": true},
                {"option": "13.5 ohms", "correct": false}
            ],
            "correct": "The answer was: \"8 ohms\".",
            "incorrect": "Incorrect. The answer was: \"8 ohms\"."
        },


        {
            "q" : "What is the resistance of a circuit that draws 4 amperes from a 12-volt source?",
            "a": [
                {"option": "3 ohms",    "correct": true},
                {"option": "16 ohms",   "correct": false},
                {"option": "48 ohms",   "correct": false},
                {"option": "8 Ohms",    "correct": false}
            ],
            "correct": "The answer was: \"3 ohms\".",
            "incorrect": "Incorrect. The answer was: \"3 ohms\"."
        },


        {
            "q" : "What is the current flow in a circuit with an applied voltage of 120 volts and a resistance of 80 ohms?",
            "a": [
                {"option": "9600 amperes",  "correct": false},
                {"option": "200 amperes",   "correct": false},
                {"option": "0.667 amperes", "correct": false},
                {"option": "1.5 amperes",   "correct": true}
            ],
            "correct": "The answer was: \"1.5 amperes\".",
            "incorrect": "Incorrect. The answer was: \"1.5 amperes\"."
        },



        {
            "q" : "What is the current flowing through a 100-ohm resistor connected across 200 volts?",
            "a": [
                {"option": "20,000 amperes",    "correct": false},
                {"option": "0.5 amperes",   "correct": false},
                {"option": "2 amperes", "correct": true},
                {"option": "100 amperes",   "correct": false}
            ],
            "correct": "The answer was: \"2 amperes\".",
            "incorrect": "Incorrect. The answer was: \"2 amperes\"."
        },


        {
            "q" : "What is the current flowing through a 24-ohm resistor connected across 240 volts?",
            "a": [
                {"option": "24,000 amperes",    "correct": false},
                {"option": "0.1 amperes",   "correct": false},
                {"option": "10 amperes",    "correct": true},
                {"option": "216 amperes",   "correct": false}
            ],
            "correct": "The answer was: \"10 amperes\".",
            "incorrect": "Incorrect. The answer was: \"10 amperes\"."
        },


        {
            "q" : "What is the voltage across a 2-ohm resistor if a current of 0.5 amperes flows through it?",
            "a": [
                {"option": "1 volt",    "correct": true},
                {"option": "0.25 volts",    "correct": false},
                {"option": "2.5 volts", "correct": false},
                {"option": "1.5 volts", "correct": false}
            ],
            "correct": "The answer was: \"1 volt\".",
            "incorrect": "Incorrect. The answer was: \"1 volt\"."
        },


        {
            "q" : "What is the voltage across a 10-ohm resistor if a current of 1 ampere flows through it?",
            "a": [
                {"option": "1 volt",    "correct": false},
                {"option": "10 volts",  "correct": true},
                {"option": "11 volts",  "correct": false},
                {"option": "9 volts",   "correct": false}
            ],
            "correct": "The answer was: \"10 volts\".",
            "incorrect": "Incorrect. The answer was: \"10 volts\"."
        },


        {
            "q" : "What is the voltage across a 10-ohm resistor if a current of 2 amperes flows through it?",
            "a": [
                {"option": "8 volts",   "correct": false},
                {"option": "0.2 volts", "correct": false},
                {"option": "12 volts",  "correct": false},
                {"option": "20 volts",  "correct": true}
            ],
            "correct": "The answer was: \"20 volts\".",
            "incorrect": "Incorrect. The answer was: \"20 volts\"."
        },


        //SUBELEMENT T6 – Electrical components, semiconductors, circuit diagrams, component functions – [4 Exam Questions - 4 Groups]

        //T6A - Electrical components; fixed and variable resistors, capacitors, and inductors; fuses, switches, batteries

        {
            "q" : "What electrical component is used to oppose the flow of current in a DC circuit?",
            "a": [
                {"option": "Inductor",  "correct": false},
                {"option": "Resistor",  "correct": true},
                {"option": "Voltmeter", "correct": false},
                {"option": "Transformer",   "correct": false}
            ],
            "correct": "The answer was: \"Resistor\".",
            "incorrect": "Incorrect. The answer was: \"Resistor\"."
        },


        {
            "q" : "What type of component is often used as an adjustable volume control?",
            "a": [
                {"option": "Fixed resistor",    "correct": false},
                {"option": "Power resistor",    "correct": false},
                {"option": "Potentiometer", "correct": true},
                {"option": "Transformer",   "correct": false}
            ],
            "correct": "The answer was: \"Potentiometer\".",
            "incorrect": "Incorrect. The answer was: \"Potentiometer\"."
        },


        {
            "q" : "What electrical parameter is controlled by a potentiometer?",
            "a": [
                {"option": "Inductance",    "correct": false},
                {"option": "Resistance",    "correct": true},
                {"option": "Capacitance",   "correct": false},
                {"option": "Field strength",    "correct": false}
            ],
            "correct": "The answer was: \"Resistance\".",
            "incorrect": "Incorrect. The answer was: \"Resistance\"."
        },


        {
            "q" : "What electrical component stores energy in an electric field?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Capacitor", "correct": true},
                {"option": "Inductor",  "correct": false},
                {"option": "Diode", "correct": false}
            ],
            "correct": "The answer was: \"Capacitor\".",
            "incorrect": "Incorrect. The answer was: \"Capacitor\"."
        },


        {
            "q" : "What type of electrical component consists of two or more conductive surfaces separated by an insulator?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Potentiometer", "correct": false},
                {"option": "Oscillator",    "correct": false},
                {"option": "Capacitor", "correct": true}
            ],
            "correct": "The answer was: \"Capacitor\".",
            "incorrect": "Incorrect. The answer was: \"Capacitor\"."
        },


        {
            "q" : "What type of electrical component stores energy in a magnetic field?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Capacitor", "correct": false},
                {"option": "Inductor",  "correct": true},
                {"option": "Diode", "correct": false}
            ],
            "correct": "The answer was: \"Inductor\".",
            "incorrect": "Incorrect. The answer was: \"Inductor\"."
        },


        {
            "q" : "What electrical component is usually composed of a coil of wire?",
            "a": [
                {"option": "Switch",    "correct": false},
                {"option": "Capacitor", "correct": false},
                {"option": "Diode", "correct": false},
                {"option": "Inductor",  "correct": true}
            ],
            "correct": "The answer was: \"Inductor\".",
            "incorrect": "Incorrect. The answer was: \"Inductor\"."
        },



        {
            "q" : "What electrical component is used to connect or disconnect electrical circuits?",
            "a": [
                {"option": "Zener Diode",   "correct": false},
                {"option": "Switch",    "correct": true},
                {"option": "Inductor",  "correct": false},
                {"option": "Variable resistor", "correct": false}
            ],
            "correct": "The answer was: \"Switch\".",
            "incorrect": "Incorrect. The answer was: \"Switch\"."
        },


        {
            "q" : "What electrical component is used to protect other circuit components from current overloads?",
            "a": [
                {"option": "Fuse",  "correct": true},
                {"option": "Capacitor", "correct": false},
                {"option": "Shield",    "correct": false},
                {"option": "Inductor",  "correct": false}
            ],
            "correct": "The answer was: \"Fuse\".",
            "incorrect": "Incorrect. The answer was: \"Fuse\"."
        },


        {
            "q" : "What is the nominal voltage of a fully charged nickel-cadmium cell?",
            "a": [
                {"option": "1.0 volts", "correct": false},
                {"option": "1.2 volts", "correct": true},
                {"option": "1.5 volts", "correct": false},
                {"option": "2.2 volts", "correct": false}
            ],
            "correct": "The answer was: \"1.2 volts\".",
            "incorrect": "Incorrect. The answer was: \"1.2 volts\"."
        },


        {
            "q" : "Which battery type is not rechargeable?",
            "a": [
                {"option": "Nickel-cadmium",    "correct": false},
                {"option": "Carbon-zinc",   "correct": true},
                {"option": "Lead-acid ",    "correct": false},
                {"option": "Lithium-ion",   "correct": false}
            ],
            "correct": "The answer was: \"Carbon-zinc\".",
            "incorrect": "Incorrect. The answer was: \"Carbon-zinc\"."
        },


        //T6B – Semiconductors; basic principles of diodes and transistors

        {
            "q" : "What class of electronic components is capable of using a voltage or current signal to control current flow?",
            "a": [
                {"option": "Capacitors",    "correct": false},
                {"option": "Inductors", "correct": false},
                {"option": "Resistors", "correct": false},
                {"option": "Transistors",   "correct": true}
            ],
            "correct": "The answer was: \"Transistors\".",
            "incorrect": "Incorrect. The answer was: \"Transistors\"."
        },


        {
            "q" : "What electronic component allows current to flow in only one direction?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Fuse",  "correct": false},
                {"option": "Diode", "correct": true},
                {"option": "Driven Element",    "correct": false}
            ],
            "correct": "The answer was: \"Diode\".",
            "incorrect": "Incorrect. The answer was: \"Diode\"."
        },



        {
            "q" : "Which of these components can be used as an electronic switch or amplifier?",
            "a": [
                {"option": "Oscillator",    "correct": false},
                {"option": "Potentiometer", "correct": false},
                {"option": "Transistor",    "correct": true},
                {"option": "Voltmeter", "correct": false}
            ],
            "correct": "The answer was: \"Transistor\".",
            "incorrect": "Incorrect. The answer was: \"Transistor\"."
        },


        {
            "q" : "Which of these components is made of three layers of semiconductor material?",
            "a": [
                {"option": "Alternator",    "correct": false},
                {"option": "Bipolar junction transistor",   "correct": true},
                {"option": "Triode",    "correct": false},
                {"option": "Pentagrid converter",   "correct": false}
            ],
            "correct": "The answer was: \"Bipolar junction transistor\".",
            "incorrect": "Incorrect. The answer was: \"Bipolar junction transistor\"."
        },


        {
            "q" : "Which of the following electronic components can amplify signals?",
            "a": [
                {"option": "Transistor",    "correct": true},
                {"option": "Variable resistor", "correct": false},
                {"option": "Electrolytic capacitor",    "correct": false},
                {"option": "Multi-cell battery",    "correct": false}
            ],
            "correct": "The answer was: \"Transistor\".",
            "incorrect": "Incorrect. The answer was: \"Transistor\"."
        },


        {
            "q" : "How is a semiconductor diode’s cathode lead usually identified?",
            "a": [
                {"option": "With the word \"cathode\"", "correct": false},
                {"option": "With a stripe", "correct": true},
                {"option": "With the letter \"C\"", "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"With a stripe\".",
            "incorrect": "Incorrect. The answer was: \"With a stripe\"."
        },


        {
            "q" : "What does the abbreviation \"LED\" stand for?",
            "a": [
                {"option": "Low Emission Diode",    "correct": false},
                {"option": "Light Emitting Diode",  "correct": true},
                {"option": "Liquid Emission Detector",  "correct": false},
                {"option": "Long Echo Delay",   "correct": false}
            ],
            "correct": "The answer was: \"Light Emitting Diode\".",
            "incorrect": "Incorrect. The answer was: \"Light Emitting Diode\"."
        },


        {
            "q" : "What does the abbreviation \"FET\" stand for?",
            "a": [
                {"option": "Field Effect Transistor",   "correct": true},
                {"option": "Fast Electron Transistor",  "correct": false},
                {"option": "Free Electron Transition",  "correct": false},
                {"option": "Field Emission Thickness",  "correct": false}
            ],
            "correct": "The answer was: \"Field Effect Transistor\".",
            "incorrect": "Incorrect. The answer was: \"Field Effect Transistor\"."
        },


        {
            "q" : "What are the names of the two electrodes of a diode?",
            "a": [
                {"option": "Plus and minus",    "correct": false},
                {"option": "Source and drain",  "correct": false},
                {"option": "Anode and cathode", "correct": true},
                {"option": "Gate and base", "correct": false}
            ],
            "correct": "The answer was: \"Anode and cathode\".",
            "incorrect": "Incorrect. The answer was: \"Anode and cathode\"."
        },


        {
            "q" : "Which semiconductor component has an emitter electrode?",
            "a": [
                {"option": "Bipolar transistor",    "correct": true},
                {"option": "Field effect transistor",   "correct": false},
                {"option": "Silicon diode", "correct": false},
                {"option": "Bridge rectifier",  "correct": false}
            ],
            "correct": "The answer was: \"Bipolar transistor\".",
            "incorrect": "Incorrect. The answer was: \"Bipolar transistor\"."
        },


        {
            "q" : "Which semiconductor component has a gate electrode?",
            "a": [
                {"option": "Bipolar transistor",    "correct": false},
                {"option": "Field effect transistor",   "correct": true},
                {"option": "Silicon diode", "correct": false},
                {"option": "Bridge rectifier",  "correct": false}
            ],
            "correct": "The answer was: \"Field effect transistor\".",
            "incorrect": "Incorrect. The answer was: \"Field effect transistor\"."
        },


        {
            "q" : "What is the term that describes a transistor's ability to amplify a signal?",
            "a": [
                {"option": "Gain",  "correct": true},
                {"option": "Forward resistance",    "correct": false},
                {"option": "Forward voltage drop",  "correct": false},
                {"option": "On resistance", "correct": false}
            ],
            "correct": "The answer was: \"Gain\".",
            "incorrect": "Incorrect. The answer was: \"Gain\"."
        },


        //T6C - Circuit diagrams; schematic symbols

        {
            "q" : "What is the name for standardized representations of components in an electrical wiring diagram?",
            "a": [
                {"option": "Electrical depictions", "correct": false},
                {"option": "Grey sketch",   "correct": false},
                {"option": "Schematic symbols", "correct": true},
                {"option": "Component callouts",    "correct": false}
            ],
            "correct": "The answer was: \"Schematic symbols\".",
            "incorrect": "Incorrect. The answer was: \"Schematic symbols\"."
        },


        {
            "q" : "What is component 1 in figure T1?",
            "a": [
                {"option": "Resistor",  "correct": true},
                {"option": "Transistor",    "correct": false},
                {"option": "Battery",   "correct": false},
                {"option": "Connector", "correct": false}
            ],
            "correct": "The answer was: \"Resistor\".",
            "incorrect": "Incorrect. The answer was: \"Resistor\"."
        },


        {
            "q" : "What is component 2 in figure T1?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Transistor",    "correct": true},
                {"option": "Indicator lamp",    "correct": false},
                {"option": "Connector", "correct": false}
            ],
            "correct": "The answer was: \"Transistor\".",
            "incorrect": "Incorrect. The answer was: \"Transistor\"."
        },



        {
            "q" : "What is component 3 in figure T1?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Transistor",    "correct": false},
                {"option": "Lamp",  "correct": true},
                {"option": "Ground symbol", "correct": false}
            ],
            "correct": "The answer was: \"Lamp\".",
            "incorrect": "Incorrect. The answer was: \"Lamp\"."
        },


        {
            "q" : "What is component 4 in figure T1?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Transistor",    "correct": false},
                {"option": "Battery",   "correct": true},
                {"option": "Ground symbol", "correct": false}
            ],
            "correct": "The answer was: \"Battery\".",
            "incorrect": "Incorrect. The answer was: \"Battery\"."
        },


        {
            "q" : "What is component 6 in figure T2?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Capacitor", "correct": true},
                {"option": "Regulator IC",  "correct": false},
                {"option": "Transistor",    "correct": false}
            ],
            "correct": "The answer was: \"Capacitor\".",
            "incorrect": "Incorrect. The answer was: \"Capacitor\"."
        },


        {
            "q" : "What is component 8 in figure T2?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Inductor",  "correct": false},
                {"option": "Regulator IC",  "correct": false},
                {"option": "Light emitting diode",  "correct": true}
            ],
            "correct": "The answer was: \"Light emitting diode\".",
            "incorrect": "Incorrect. The answer was: \"Light emitting diode\"."
        },


        {
            "q" : "What is component 9 in figure T2?",
            "a": [
                {"option": "Variable capacitor",    "correct": false},
                {"option": "Variable inductor", "correct": false},
                {"option": "Variable resistor", "correct": true},
                {"option": "Variable transformer",  "correct": false}
            ],
            "correct": "The answer was: \"Variable resistor\".",
            "incorrect": "Incorrect. The answer was: \"Variable resistor\"."
        },


        {
            "q" : "What is component 4 in figure T2?",
            "a": [
                {"option": "Variable inductor", "correct": false},
                {"option": "Double-pole switch",    "correct": false},
                {"option": "Potentiometer", "correct": false},
                {"option": "Transformer",   "correct": true}
            ],
            "correct": "The answer was: \"Transformer\".",
            "incorrect": "Incorrect. The answer was: \"Transformer\"."
        },



        {
            "q" : "What is component 3 in figure T3?",
            "a": [
                {"option": "Connector", "correct": false},
                {"option": "Meter", "correct": false},
                {"option": "Variable capacitor",    "correct": false},
                {"option": "Variable inductor", "correct": true}
            ],
            "correct": "The answer was: \"Variable inductor\".",
            "incorrect": "Incorrect. The answer was: \"Variable inductor\"."
        },


        {
            "q" : "What is component 4 in figure T3?",
            "a": [
                {"option": "Antenna",   "correct": true},
                {"option": "Transmitter",   "correct": false},
                {"option": "Dummy load",    "correct": false},
                {"option": "Ground",    "correct": false}
            ],
            "correct": "The answer was: \"Antenna\".",
            "incorrect": "Incorrect. The answer was: \"Antenna\"."
        },


        {
            "q" : "What do the symbols on an electrical circuit schematic diagram represent?",
            "a": [
                {"option": "Electrical components", "correct": true},
                {"option": "Logic states",  "correct": false},
                {"option": "Digital codes", "correct": false},
                {"option": "Traffic nodes", "correct": false}
            ],
            "correct": "The answer was: \"Electrical components\".",
            "incorrect": "Incorrect. The answer was: \"Electrical components\"."
        },


        {
            "q" : "Which of the following is accurately represented in electrical circuit schematic diagrams?",
            "a": [
                {"option": "Wire lengths",  "correct": false},
                {"option": "Physical appearance of components", "correct": false},
                {"option": "The way components are interconnected", "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"The way components are interconnected\". (See also )",
            "incorrect": "Incorrect. The answer was: \"The way components are interconnected\". (See also )"
        },

        //T6D - Component functions

        {
            "q" : "Which of the following devices or circuits changes an alternating current into a varying direct current signal?",
            "a": [
                {"option": "Transformer",   "correct": false},
                {"option": "Rectifier", "correct": true},
                {"option": "Amplifier", "correct": false},
                {"option": "Reflector", "correct": false}
            ],
            "correct": "The answer was: \"Rectifier\".",
            "incorrect": "Incorrect. The answer was: \"Rectifier\"."
        },


        {
            "q" : "What best describes a relay?",
            "a": [
                {"option": "A switch controlled by an electromagnet",   "correct": true},
                {"option": "A current controlled amplifier",    "correct": false},
                {"option": "An optical sensor", "correct": false},
                {"option": "A pass transistor", "correct": false}
            ],
            "correct": "The answer was: \"A switch controlled by an electromagnet\".",
            "incorrect": "Incorrect. The answer was: \"A switch controlled by an electromagnet\"."
        },



        {
            "q" : "What type of switch is represented by item 3 in figure T2?",
            "a": [
                {"option": "Single-pole single-throw",  "correct": true},
                {"option": "Single-pole double-throw",  "correct": false},
                {"option": "Double-pole single-throw",  "correct": false},
                {"option": "Double-pole double-throw",  "correct": false}
            ],
            "correct": "The answer was: \"Single-pole single-throw\".",
            "incorrect": "Incorrect. The answer was: \"Single-pole single-throw\"."
        },


        {
            "q" : "Which of the following can be used to display signal strength on a numeric scale?",
            "a": [
                {"option": "Potentiometer", "correct": false},
                {"option": "Transistor",    "correct": false},
                {"option": "Meter", "correct": true},
                {"option": "Relay", "correct": false}
            ],
            "correct": "The answer was: \"Meter\".",
            "incorrect": "Incorrect. The answer was: \"Meter\"."
        },


        {
            "q" : "What type of circuit controls the amount of voltage from a power supply?",
            "a": [
                {"option": "Regulator", "correct": true},
                {"option": "Oscillator",    "correct": false},
                {"option": "Filter",    "correct": false},
                {"option": "Phase inverter",    "correct": false}
            ],
            "correct": "The answer was: \"Regulator\".",
            "incorrect": "Incorrect. The answer was: \"Regulator\"."
        },


        {
            "q" : "What component is commonly used to change 120V AC house current to a lower AC voltage for other uses?",
            "a": [
                {"option": "Variable capacitor",    "correct": false},
                {"option": "Transformer",   "correct": true},
                {"option": "Transistor",    "correct": false},
                {"option": "Diode", "correct": false}
            ],
            "correct": "The answer was: \"Transformer\".",
            "incorrect": "Incorrect. The answer was: \"Transformer\"."
        },


        {
            "q" : "Which of the following is commonly used as a visual indicator?",
            "a": [
                {"option": "LED",   "correct": true},
                {"option": "FET",   "correct": false},
                {"option": "Zener diode",   "correct": false},
                {"option": "Bipolar transistor",    "correct": false}
            ],
            "correct": "The answer was: \"LED\".",
            "incorrect": "Incorrect. The answer was: \"LED\"."
        },


        {
            "q" : "Which of the following is used together with an inductor to make a tuned circuit?",
            "a": [
                {"option": "Resistor",  "correct": false},
                {"option": "Zener diode",   "correct": false},
                {"option": "Potentiometer", "correct": false},
                {"option": "Capacitor", "correct": true}
            ],
            "correct": "The answer was: \"Capacitor\".",
            "incorrect": "Incorrect. The answer was: \"Capacitor\"."
        },



        {
            "q" : "What is the name of a device that combines several semiconductors and other components into one package?",
            "a": [
                {"option": "Transducer",    "correct": false},
                {"option": "Multi-pole relay",  "correct": false},
                {"option": "Integrated circuit",    "correct": true},
                {"option": "Transformer",   "correct": false}
            ],
            "correct": "The answer was: \"Integrated circuit\".",
            "incorrect": "Incorrect. The answer was: \"Integrated circuit\"."
        },


        {
            "q" : "What is the function of component 2 in Figure T1?",
            "a": [
                {"option": "Give off light when current flows through it",  "correct": false},
                {"option": "Supply electrical energy",  "correct": false},
                {"option": "Control the flow of current",   "correct": true},
                {"option": "Convert electrical energy into radio waves",    "correct": false}
            ],
            "correct": "The answer was: \"Control the flow of current\".",
            "incorrect": "Incorrect. The answer was: \"Control the flow of current\"."
        },


        {
            "q" : "Which of the following is a common use of coaxial cable?",
            "a": [
                {"option": "Carry dc power from a vehicle battery to a mobile radio",   "correct": false},
                {"option": "Carry RF signals between a radio and antenna",  "correct": true},
                {"option": "Secure masts, tubing, and other cylindrical objects on towers", "correct": false},
                {"option": "Connect data signals from a TNC to a computer", "correct": false}
            ],
            "correct": "The answer was: \"Carry RF signals between a radio and antenna\".",
            "incorrect": "Incorrect. The answer was: \"Carry RF signals between a radio and antenna\"."
        },


        //SUBELEMENT T7 – Station equipment; common transmitter and receiver problems, antenna measurements and troubleshooting, basic repair and testing – [4 Exam Questions - 4 Groups]

        //T7A - Station radios; receivers, transmitters, transceivers

        {
            "q" : "What is the function of a product detector?",
            "a": [
                {"option": "Detect phase modulated signals",    "correct": false},
                {"option": "Demodulate FM signals", "correct": false},
                {"option": "Detect CW and SSB signals", "correct": true},
                {"option": "Combine speech and RF signals", "correct": false}
            ],
            "correct": "The answer was: \"Detect CW and SSB signals\".",
            "incorrect": "Incorrect. The answer was: \"Detect CW and SSB signals\"."
        },


        {//*
            "q" : "What type of receiver is shown in Figure T6?",
            "a": [
                {"option": "Direct conversion", "correct": false},
                {"option": "Super-regenerative",    "correct": false},
                {"option": "Single-conversion superheterodyne", "correct": true},
                {"option": "Dual-conversion superheterodyne",   "correct": false}
            ],
            "correct": "The answer was: \"Single-conversion superheterodyne\".",
            "incorrect": "Incorrect. The answer was: \"Single-conversion superheterodyne\"."
        },


        {//*
            "q" : "What is the function of a mixer in a superheterodyne receiver?",
            "a": [
                {"option": "To reject signals outside of the desired passband", "correct": false},
                {"option": "To combine signals from several stations together", "correct": false},
                {"option": "To shift the incoming signal to an intermediate frequency", "correct": true},
                {"option": "To connect the receiver with an auxiliary device, such as a TNC",   "correct": false}
            ],
            "correct": "The answer was: \"To shift the incoming signal to an intermediate frequency\".",
            "incorrect": "Incorrect. The answer was: \"To shift the incoming signal to an intermediate frequency\"."
        },


        {
            "q" : "What circuit is pictured in Figure T7, if block 1 is a frequency discriminator?",
            "a": [
                {"option": "A double-conversion receiver",  "correct": false},
                {"option": "A regenerative receiver",   "correct": false},
                {"option": "A superheterodyne receiver",    "correct": false},
                {"option": "An FM receiver",    "correct": true}
            ],
            "correct": "The answer was: \"An FM receiver\".",
            "incorrect": "Incorrect. The answer was: \"An FM receiver\"."
        },


        {
            "q" : "What is the function of block 1 if figure T4 is a simple CW transmitter?",
            "a": [
                {"option": "Reactance modulator",   "correct": false},
                {"option": "Product detector",  "correct": false},
                {"option": "Low-pass filter",   "correct": false},
                {"option": "Oscillator",    "correct": true}
            ],
            "correct": "The answer was: \"Oscillator\".",
            "incorrect": "Incorrect. The answer was: \"Oscillator\"."
        },


        {//*
            "q" : "What device takes the output of a low-powered 28 MHz SSB exciter and produces a 222 MHz output signal?",
            "a": [
                {"option": "High-pass filter",  "correct": false},
                {"option": "Low-pass filter",   "correct": false},
                {"option": "Transverter",   "correct": true},
                {"option": "Phase converter",   "correct": false}
            ],
            "correct": "The answer was: \"Transverter\".",
            "incorrect": "Incorrect. The answer was: \"Transverter\"."
        },


        {//*
            "q" : "If figure T5 represents a transceiver in which block 1 is the transmitter portion and block 3 is the receiver portion, what is the function of block 2?",
            "a": [
                {"option": "A balanced modulator",  "correct": false},
                {"option": "A transmit-receive switch", "correct": true},
                {"option": "A power amplifier", "correct": false},
                {"option": "A high-pass filter",    "correct": false}
            ],
            "correct": "The answer was: \"A transmit-receive switch\".",
            "incorrect": "Incorrect. The answer was: \"A transmit-receive switch\"."
        },


        {
            "q" : "Which of the following circuits combines a speech signal and an RF carrier?",
            "a": [
                {"option": "Beat frequency oscillator", "correct": false},
                {"option": "Discriminator", "correct": false},
                {"option": "Modulator", "correct": true},
                {"option": "Noise blanker", "correct": false}
            ],
            "correct": "The answer was: \"Modulator\".",
            "incorrect": "Incorrect. The answer was: \"Modulator\"."
        },


        {
            "q" : "Which of the following devices is most useful for VHF weak-signal communication?",
            "a": [
                {"option": "A quarter-wave vertical antenna",   "correct": false},
                {"option": "A multi-mode VHF transceiver",  "correct": true},
                {"option": "An omni-directional antenna",   "correct": false},
                {"option": "A mobile VHF FM transceiver",   "correct": false}
            ],
            "correct": "The answer was: \"A multi-mode VHF transceiver\".",
            "incorrect": "Incorrect. The answer was: \"A multi-mode VHF transceiver\"."
        },



        {
            "q" : "What device increases the low-power output from a handheld transceiver?",
            "a": [
                {"option": "A voltage divider", "correct": false},
                {"option": "An RF power amplifier", "correct": true},
                {"option": "An impedance network",  "correct": false},
                {"option": "A voltage regulator",   "correct": false}
            ],
            "correct": "The answer was: \"An RF power amplifier\".",
            "incorrect": "Incorrect. The answer was: \"An RF power amplifier\"."
        },


        {//*
            "q" : "Which of the following circuits demodulates FM signals?",
            "a": [
                {"option": "Limiter",   "correct": false},
                {"option": "Discriminator", "correct": true},
                {"option": "Product detector",  "correct": false},
                {"option": "Phase inverter",    "correct": false}
            ],
            "correct": "The answer was: \"Discriminator\".",
            "incorrect": "Incorrect. The answer was: \"Discriminator\"."
        },


        {
            "q" : "Which term describes the ability of a receiver to discriminate between multiple signals?",
            "a": [
                {"option": "Tuning rate",   "correct": false},
                {"option": "Sensitivity",   "correct": false},
                {"option": "Selectivity",   "correct": true},
                {"option": "Noise floor",   "correct": false}
            ],
            "correct": "The answer was: \"Selectivity\".",
            "incorrect": "Incorrect. The answer was: \"Selectivity\"."
        },


        {//*
            "q" : "Where is an RF preamplifier installed?",
            "a": [
                {"option": "Between the antenna and receiver",  "correct": true},
                {"option": "At the output of the transmitter's power amplifier",    "correct": false},
                {"option": "Between a transmitter and antenna tuner",   "correct": false},
                {"option": "At the receiver's audio output",    "correct": false}
            ],
            "correct": "The answer was: \"Between the antenna and receiver\".",
            "incorrect": "Incorrect. The answer was: \"Between the antenna and receiver\"."
        },


        //T7B – Common transmitter and receiver problems; symptoms of overload and overdrive, distortion, interference, over and under modulation, RF feedback, off frequency signals; fading and noise; problems with digital communications interfaces

        {
            "q" : "What can you do if you are told your FM handheld or mobile transceiver is over deviating?",
            "a": [
                {"option": "Talk louder into the microphone",   "correct": false},
                {"option": "Let the transceiver cool off",  "correct": false},
                {"option": "Change to a higher power level",    "correct": false},
                {"option": "Talk farther away from the microphone", "correct": true}
            ],
            "correct": "The answer was: \"Talk farther away from the microphone\".",
            "incorrect": "Incorrect. The answer was: \"Talk farther away from the microphone\"."
        },


        {//*
            "q" : "What is meant by fundamental overload in reference to a receiver?",
            "a": [
                {"option": "Too much voltage from the power supply",    "correct": false},
                {"option": "Too much current from the power supply",    "correct": false},
                {"option": "Interference caused by very strong signals",    "correct": true},
                {"option": "Interference caused by turning the volume up too high", "correct": false}
            ],
            "correct": "The answer was: \"Interference caused by very strong signals\".",
            "incorrect": "Incorrect. The answer was: \"Interference caused by very strong signals\"."
        },



        {//*
            "q" : "Which of the following may be a cause of radio frequency interference?",
            "a": [
                {"option": "Fundamental overload",  "correct": false},
                {"option": "Harmonics", "correct": false},
                {"option": "Spurious emissions",    "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {
            "q" : "What is the most likely cause of interference to a non-cordless telephone from a nearby transmitter?",
            "a": [
                {"option": "Harmonics from the transmitter",    "correct": false},
                {"option": "The telephone is inadvertently acting as a radio receiver", "correct": true},
                {"option": "Poor station grounding",    "correct": false},
                {"option": "Improper transmitter adjustment",   "correct": false}
            ],
            "correct": "The answer was: \"The telephone is inadvertently acting as a radio receiver\".",
            "incorrect": "Incorrect. The answer was: \"The telephone is inadvertently acting as a radio receiver\"."
        },


        {
            "q" : "What is a logical first step when attempting to cure a radio frequency interference problem in a nearby telephone?",
            "a": [
                {"option": "Install a low-pass filter at the transmitter",  "correct": false},
                {"option": "Install a high-pass filter at the transmitter", "correct": false},
                {"option": "Install an RF filter at the telephone", "correct": true},
                {"option": "Improve station grounding", "correct": false}
            ],
            "correct": "The answer was: \"Install an RF filter at the telephone\".",
            "incorrect": "Incorrect. The answer was: \"Install an RF filter at the telephone\"."
        },


        {//*
            "q" : "What should you do first if someone tells you that your station’s transmissions are interfering with their radio or TV reception?",
            "a": [
                {"option": "Make sure that your station is functioning properly and that it does not cause interference to your own television",    "correct": true},
                {"option": "Immediately turn off your transmitter and contact the nearest FCC office for assistance",   "correct": false},
                {"option": "Tell them that your license gives you the right to transmit and nothing can be done to reduce the interference",    "correct": false},
                {"option": "Continue operating normally because your equipment cannot possibly cause any interference", "correct": false}
            ],
            "correct": "The answer was: \"Make sure that your station is functioning properly and that it does not cause interference to your own television\".",
            "incorrect": "Incorrect. The answer was: \"Make sure that your station is functioning properly and that it does not cause interference to your own television\"."
        },


        {//*
            "q" : "Which of the following may be useful in correcting a radio frequency interference problem?",
            "a": [
                {"option": "Snap-on ferrite chokes",    "correct": false},
                {"option": "Low-pass and high-pass filters",    "correct": false},
                {"option": "Band-reject and band-pass filters", "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },



        {
            "q" : "What should you do if a \"Part 15\" device in your neighbor’s home is causing harmful interference to your amateur station?",
            "a": [
                {"option": "Work with your neighbor to identify the offending device",  "correct": false},
                {"option": "Politely inform your neighbor about the rules that require him to stop using the device if it causes interference", "correct": false},
                {"option": "Check your station and make sure it meets the standards of good amateur practice",  "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {//*
            "q" : "What could be happening if another operator reports a variable high-pitched whine on the audio from your mobile transmitter?",
            "a": [
                {"option": "Your microphone is picking up noise from an open window",   "correct": false},
                {"option": "You have the volume on your receiver set too high", "correct": false},
                {"option": "You need to adjust your squelch control",   "correct": false},
                {"option": "Noise on the vehicle’s electrical system is being transmitted along with your speech audio",    "correct": true}
            ],
            "correct": "The answer was: \"Noise on the vehicle’s electrical system is being transmitted along with your speech audio\".",
            "incorrect": "Incorrect. The answer was: \"Noise on the vehicle’s electrical system is being transmitted along with your speech audio\"."
        },


        {
            "q" : "What might be the problem if you receive a report that your audio signal through the repeater is distorted or unintelligible?",
            "a": [
                {"option": "Your transmitter may be slightly off frequency",    "correct": false},
                {"option": "Your batteries may be running low", "correct": false},
                {"option": "You could be in a bad location",    "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {//*
            "q" : "What is a symptom of RF feedback in a transmitter or transceiver?",
            "a": [
                {"option": "Excessive SWR at the antenna connection",   "correct": false},
                {"option": "The transmitter will not stay on the desired frequency",    "correct": false},
                {"option": "Reports of garbled, distorted, or unintelligible transmissions",    "correct": true},
                {"option": "Frequent blowing of power supply fuses",    "correct": false}
            ],
            "correct": "The answer was: \"Reports of garbled, distorted, or unintelligible transmissions\".",
            "incorrect": "Incorrect. The answer was: \"Reports of garbled, distorted, or unintelligible transmissions\"."
        },


        {//*
            "q" : "What does the acronym \"BER\" mean when applied to digital communications systems?",
            "a": [
                {"option": "Baud Enhancement Recovery", "correct": false},
                {"option": "Baud Error Removal",    "correct": false},
                {"option": "Bit Error Rate",    "correct": true},
                {"option": "Bit Exponent Resource", "correct": false}
            ],
            "correct": "The answer was: \"Bit Error Rate\".",
            "incorrect": "Incorrect. The answer was: \"Bit Error Rate\"."
        },


        //T7C – Antenna measurements and troubleshooting; measuring SWR, dummy loads, feedline failure modes

        {//*
            "q" : "What is the primary purpose of a dummy load?",
            "a": [
                {"option": "To prevent the radiation of signals when making tests", "correct": true},
                {"option": "To prevent over-modulation of your transmitter",    "correct": false},
                {"option": "To improve the radiation from your antenna",    "correct": false},
                {"option": "To improve the signal to noise ratio of your receiver", "correct": false}
            ],
            "correct": "The answer was: \"To prevent the radiation of signals when making tests\".",
            "incorrect": "Incorrect. The answer was: \"To prevent the radiation of signals when making tests\"."
        },


        {//*
            "q" : "Which of the following instruments can be used to determine if an antenna is resonant at the desired operating frequency?",
            "a": [
                {"option": "A VTVM",    "correct": false},
                {"option": "An antenna analyzer",   "correct": true},
                {"option": "A\"q\" meter",  "correct": false},
                {"option": "A frequency counter",   "correct": false}
            ],
            "correct": "The answer was: \"An antenna analyzer\".",
            "incorrect": "Incorrect. The answer was: \"An antenna analyzer\"."
        },


        {//*
            "q" : "What, in general terms, is standing wave ratio (SWR)?",
            "a": [
                {"option": "A measure of how well a load is matched to a transmission line",    "correct": true},
                {"option": "The ratio of high to low impedance in a feedline",  "correct": false},
                {"option": "The transmitter efficiency ratio",  "correct": false},
                {"option": "An indication of the quality of your station’s ground connection",  "correct": false}
            ],
            "correct": "The answer was: \"A measure of how well a load is matched to a transmission line\".",
            "incorrect": "Incorrect. The answer was: \"A measure of how well a load is matched to a transmission line\"."
        },


        {
            "q" : "What reading on an SWR meter indicates a perfect impedance match between the antenna and the feedline?",
            "a": [
                {"option": "2 to 1",    "correct": false},
                {"option": "1 to 3",    "correct": false},
                {"option": "1 to 1",    "correct": true},
                {"option": "10 to 1",   "correct": false}
            ],
            "correct": "The answer was: \"1 to 1\".",
            "incorrect": "Incorrect. The answer was: \"1 to 1\"."
        },


        {//*
            "q" : "What is the approximate SWR value above which the protection circuits in most solid-state transmitters begin to reduce transmitter power?",
            "a": [
                {"option": "2 to 1",    "correct": true},
                {"option": "1 to 2",    "correct": false},
                {"option": "6 to 1",    "correct": false},
                {"option": "10 to 1 ",  "correct": false}
            ],
            "correct": "The answer was: \"2 to 1\".",
            "incorrect": "Incorrect. The answer was: \"2 to 1\"."
        },


        {//*
            "q" : "What does an SWR reading of 4:1 mean?",
            "a": [
                {"option": "An antenna loss of 4 dB",   "correct": false},
                {"option": "A good impedance match",    "correct": false},
                {"option": "An antenna gain of 4",  "correct": false},
                {"option": "An impedance mismatch", "correct": true}
            ],
            "correct": "The answer was: \"An impedance mismatch\".",
            "incorrect": "Incorrect. The answer was: \"An impedance mismatch\"."
        },


        {
            "q" : "What happens to power lost in a feedline?",
            "a": [
                {"option": "It increases the SWR",  "correct": false},
                {"option": "It comes back into your transmitter and could cause damage",    "correct": false},
                {"option": "It is converted into heat", "correct": true},
                {"option": "It can cause distortion of your signal",    "correct": false}
            ],
            "correct": "The answer was: \"It is converted into heat\".",
            "incorrect": "Incorrect. The answer was: \"It is converted into heat\"."
        },



        {//*
            "q" : "What instrument other than an SWR meter could you use to determine if a feedline and antenna are properly matched?",
            "a": [
                {"option": "Voltmeter", "correct": false},
                {"option": "Ohmmeter",  "correct": false},
                {"option": "Iambic pentameter", "correct": false},
                {"option": "Directional wattmeter", "correct": true}
            ],
            "correct": "The answer was: \"Directional wattmeter\".",
            "incorrect": "Incorrect. The answer was: \"Directional wattmeter\"."
        },


        {
            "q" : "Which of the following is the most common cause for failure of coaxial cables?",
            "a": [
                {"option": "Moisture contamination",    "correct": true},
                {"option": "Gamma rays",    "correct": false},
                {"option": "The velocity factor exceeds 1.0",   "correct": false},
                {"option": "Overloading",   "correct": false}
            ],
            "correct": "The answer was: \"Moisture contamination\".",
            "incorrect": "Incorrect. The answer was: \"Moisture contamination\"."
        },


        {
            "q" : "Why should the outer jacket of coaxial cable be resistant to ultraviolet light?",
            "a": [
                {"option": "Ultraviolet resistant jackets prevent harmonic radiation",  "correct": false},
                {"option": "Ultraviolet light can increase losses in the cable’s jacket",   "correct": false},
                {"option": "Ultraviolet and RF signals can mix together, causing interference", "correct": false},
                {"option": "Ultraviolet light can damage the jacket and allow water to enter the cable",    "correct": true}
            ],
            "correct": "The answer was: \"Ultraviolet light can damage the jacket and allow water to enter the cable\".",
            "incorrect": "Incorrect. The answer was: \"Ultraviolet light can damage the jacket and allow water to enter the cable\"."
        },


        {//*
            "q" : "What is a disadvantage of \"air core\" coaxial cable when compared to foam or solid dielectric types?",
            "a": [
                {"option": "It has more loss per foot", "correct": false},
                {"option": "It cannot be used for VHF or UHF antennas", "correct": false},
                {"option": "It requires special techniques to prevent water absorption",    "correct": true},
                {"option": "It cannot be used at below freezing temperatures",  "correct": false}
            ],
            "correct": "The answer was: \"It requires special techniques to prevent water absorption\".",
            "incorrect": "Incorrect. The answer was: \"It requires special techniques to prevent water absorption\"."
        },


        //T7D – Basic repair and testing; soldering, use of a voltmeter, ammeter, and ohmmeter

        {//*
            "q" : "Which instrument would you use to measure electric potential or electromotive force?",
            "a": [
                {"option": "An ammeter",    "correct": false},
                {"option": "A voltmeter",   "correct": true},
                {"option": "A wavemeter",   "correct": false},
                {"option": "An ohmmeter",   "correct": false}
            ],
            "correct": "The answer was: \"A voltmeter\".",
            "incorrect": "Incorrect. The answer was: \"A voltmeter\"."
        },


        {
            "q" : "What is the correct way to connect a voltmeter to a circuit?",
            "a": [
                {"option": "In series with the circuit",    "correct": false},
                {"option": "In parallel with the circuit",  "correct": true},
                {"option": "In quadrature with the circuit",    "correct": false},
                {"option": "In phase with the circuit", "correct": false}
            ],
            "correct": "The answer was: \"In parallel with the circuit\".",
            "incorrect": "Incorrect. The answer was: \"In parallel with the circuit\"."
        },



        {//*
            "q" : "How is an ammeter usually connected to a circuit?",
            "a": [
                {"option": "In series with the circuit",    "correct": true},
                {"option": "In parallel with the circuit",  "correct": false},
                {"option": "In quadrature with the circuit",    "correct": false},
                {"option": "In phase with the circuit", "correct": false}
            ],
            "correct": "The answer was: \"In series with the circuit\".",
            "incorrect": "Incorrect. The answer was: \"In series with the circuit\"."
        },


        {
            "q" : "Which instrument is used to measure electric current?",
            "a": [
                {"option": "An ohmmeter",   "correct": false},
                {"option": "A wavemeter",   "correct": false},
                {"option": "A voltmeter",   "correct": false},
                {"option": "An ammeter",    "correct": true}
            ],
            "correct": "The answer was: \"An ammeter\".",
            "incorrect": "Incorrect. The answer was: \"An ammeter\"."
        },


        {
            "q" : "What instrument is used to measure resistance?",
            "a": [
                {"option": "An oscilloscope",   "correct": false},
                {"option": "A spectrum analyzer",   "correct": false},
                {"option": "A noise bridge",    "correct": false},
                {"option": "An ohmmeter",   "correct": true}
            ],
            "correct": "The answer was: \"An ohmmeter\".",
            "incorrect": "Incorrect. The answer was: \"An ohmmeter\"."
        },


        {//*
            "q" : "Which of the following might damage a multimeter?",
            "a": [
                {"option": "Measuring a voltage too small for the chosen scale",    "correct": false},
                {"option": "Leaving the meter in the milliamps position overnight", "correct": false},
                {"option": "Attempting to measure voltage when using the resistance setting",   "correct": true},
                {"option": "Not allowing it to warm up properly",   "correct": false}
            ],
            "correct": "The answer was: \"Attempting to measure voltage when using the resistance setting\".",
            "incorrect": "Incorrect. The answer was: \"Attempting to measure voltage when using the resistance setting\"."
        },


        {
            "q" : "Which of the following measurements are commonly made using a multimeter?",
            "a": [
                {"option": "SWR and RF power",  "correct": false},
                {"option": "Signal strength and noise", "correct": false},
                {"option": "Impedance and reactance",   "correct": false},
                {"option": "Voltage and resistance",    "correct": true}
            ],
            "correct": "The answer was: \"Voltage and resistance\".",
            "incorrect": "Incorrect. The answer was: \"Voltage and resistance\"."
        },


        {
            "q" : "Which of the following types of solder is best for radio and electronic use?",
            "a": [
                {"option": "Acid-core solder",  "correct": false},
                {"option": "Silver solder", "correct": false},
                {"option": "Rosin-core solder", "correct": true},
                {"option": "Aluminum solder",   "correct": false}
            ],
            "correct": "The answer was: \"Rosin-core solder\".",
            "incorrect": "Incorrect. The answer was: \"Rosin-core solder\"."
        },


        {
            "q" : "What is the characteristic appearance of a \"cold\" solder joint?",
            "a": [
                {"option": "Dark black spots",  "correct": false},
                {"option": "A bright or shiny surface", "correct": false},
                {"option": "A grainy or dull surface",  "correct": true},
                {"option": "A greenish tint",   "correct": false}
            ],
            "correct": "The answer was: \"A grainy or dull surface\".",
            "incorrect": "Incorrect. The answer was: \"A grainy or dull surface\"."
        },


        {
            "q" : "What is probably happening when an ohmmeter, connected across a circuit, initially indicates a low resistance and then shows increasing resistance with time?",
            "a": [
                {"option": "The ohmmeter is defective", "correct": false},
                {"option": "The circuit contains a large capacitor",    "correct": true},
                {"option": "The circuit contains a large inductor", "correct": false},
                {"option": "The circuit is a relaxation oscillator",    "correct": false}
            ],
            "correct": "The answer was: \"The circuit contains a large capacitor\".",
            "incorrect": "Incorrect. The answer was: \"The circuit contains a large capacitor\"."
        },


        {
            "q" : "Which of the following precautions should be taken when measuring circuit resistance with an ohmmeter?",
            "a": [
                {"option": "Ensure that the applied voltages are correct",  "correct": false},
                {"option": "Ensure that the circuit is not powered",    "correct": true},
                {"option": "Ensure that the circuit is grounded",   "correct": false},
                {"option": "Ensure that the circuit is operating at the correct frequency", "correct": false}
            ],
            "correct": "The answer was: \"Ensure that the circuit is not powered\".",
            "incorrect": "Incorrect. The answer was: \"Ensure that the circuit is not powered\"."
        },


        //SUBELEMENT T8 – Modulation modes; amateur satellite operation, operating activities, non-voice communications – [4 Exam Questions - 4 Groups]

        //T8A – Modulation modes; bandwidth of various signals

        {
            "q" : "Which of the following is a form of amplitude modulation?",
            "a": [
                {"option": "Spread-spectrum",   "correct": false},
                {"option": "Packet radio",  "correct": false},
                {"option": "Single sideband",   "correct": true},
                {"option": "Phase shift keying",    "correct": false}
            ],
            "correct": "The answer was: \"Single sideband\".",
            "incorrect": "Incorrect. The answer was: \"Single sideband\"."
        }, 


        {
            "q" : "What type of modulation is most commonly used for VHF packet radio transmissions?",
            "a": [
                {"option": "FM",    "correct": true},
                {"option": "SSB",   "correct": false},
                {"option": "AM",    "correct": false},
                {"option": "Spread Spectrum",   "correct": false}
            ],
            "correct": "The answer was: \"FM\".",
            "incorrect": "Incorrect. The answer was: \"FM\"."
        },


        {
            "q" : "Which type of voice modulation is most often used for long-distance or weak signal contacts on the VHF and UHF bands?",
            "a": [
                {"option": "FM",    "correct": false},
                {"option": "AM",    "correct": false},
                {"option": "SSB",   "correct": true},
                {"option": "PM",    "correct": false}
            ],
            "correct": "The answer was: \"SSB\".",
            "incorrect": "Incorrect. The answer was: \"SSB\"."
        },



        {//*
            "q" : "Which type of modulation is most commonly used for VHF and UHF voice repeaters?",
            "a": [
                {"option": "AM",    "correct": false},
                {"option": "SSB",   "correct": false},
                {"option": "PSK",   "correct": false},
                {"option": "FM",    "correct": true}
            ],
            "correct": "The answer was: \"FM\".",
            "incorrect": "Incorrect. The answer was: \"FM\"."
        },


        {//*
            "q" : "Which of the following types of emission has the narrowest bandwidth?",
            "a": [
                {"option": "FM voice",  "correct": false},
                {"option": "SSB voice", "correct": false},
                {"option": "CW",    "correct": true},
                {"option": "Slow-scan TV",  "correct": false}
            ],
            "correct": "The answer was: \"CW\".",
            "incorrect": "Incorrect. The answer was: \"CW\"."
        },


        {//*
            "q" : "Which sideband is normally used for 10 meter HF, VHF and UHF single-sideband communications?",
            "a": [
                {"option": "Upper sideband",    "correct": true},
                {"option": "Lower sideband",    "correct": false},
                {"option": "Suppressed sideband",   "correct": false},
                {"option": "Inverted sideband", "correct": false}
            ],
            "correct": "The answer was: \"Upper sideband\".",
            "incorrect": "Incorrect. The answer was: \"Upper sideband\"."
        },


        {//*
            "q" : "What is the primary advantage of single sideband over FM for voice transmissions?",
            "a": [
                {"option": "SSB signals are easier to tune",    "correct": false},
                {"option": "SSB signals are less susceptible to interference",  "correct": false},
                {"option": "SSB signals have narrower bandwidth",   "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"SSB signals have narrower bandwidth\".",
            "incorrect": "Incorrect. The answer was: \"SSB signals have narrower bandwidth\"."
        }, 


        {//*
            "q" : "What is the approximate bandwidth of a single sideband voice signal?",
            "a": [
                {"option": "1 kHz", "correct": false},
                {"option": "3 kHz", "correct": true},
                {"option": "6 kHz", "correct": false},
                {"option": "15 kHz",    "correct": false}
            ],
            "correct": "The answer was: \"3 kHz\".",
            "incorrect": "Incorrect. The answer was: \"3 kHz\"."
        },


        {
            "q" : "What is the approximate bandwidth of a VHF repeater FM phone signal?",
            "a": [
                {"option": "Less than 500 Hz ", "correct": false},
                {"option": "About 150 kHz", "correct": false},
                {"option": "Between 5 and 15 kHz",  "correct": true},
                {"option": "Between 50 and 125 kHz",    "correct": false}
            ],
            "correct": "The answer was: \"Between 5 and 15 kHz\".",
            "incorrect": "Incorrect. The answer was: \"Between 5 and 15 kHz\"."
        },



        {//*
            "q" : "What is the typical bandwidth of analog fast-scan TV transmissions on the 70 cm band?",
            "a": [
                {"option": "More than 10 MHz",  "correct": false},
                {"option": "About 6 MHz",   "correct": true},
                {"option": "About 3 MHz",   "correct": false},
                {"option": "About 1 MHz",   "correct": false}
            ],
            "correct": "The answer was: \"About 6 MHz\".",
            "incorrect": "Incorrect. The answer was: \"About 6 MHz\"."
        },


        {//*
            "q" : "What is the approximate maximum bandwidth required to transmit a CW signal?",
            "a": [
                {"option": "2.4 kHz",   "correct": false},
                {"option": "150 Hz",    "correct": true},
                {"option": "1000 Hz",   "correct": false},
                {"option": "15 kHz",    "correct": false}
            ],
            "correct": "The answer was: \"150 Hz\".",
            "incorrect": "Incorrect. The answer was: \"150 Hz\"."
        },


        //T8B - Amateur satellite operation; Doppler shift, basic orbits, operating protocols

        {
            "q" : "Who may be the control operator of a station communicating through an amateur satellite or space station?",
            "a": [
                {"option": "Only an Amateur Extra Class operator",  "correct": false},
                {"option": "A General Class licensee or higher licensee who has a satellite operator certification",    "correct": false},
                {"option": "Only an Amateur Extra Class operator who is also an AMSAT member",  "correct": false},
                {"option": "Any amateur whose license privileges allow them to transmit on the satellite uplink frequency", "correct": true}
            ],
            "correct": "The answer was: \"Any amateur whose license privileges allow them to transmit on the satellite uplink frequency\".",
            "incorrect": "Incorrect. The answer was: \"Any amateur whose license privileges allow them to transmit on the satellite uplink frequency\"."
        },


        {
            "q" : "How much transmitter power should be used on the uplink frequency of an amateur satellite or space station?",
            "a": [
                {"option": "The maximum power of your transmitter", "correct": false},
                {"option": "The minimum amount of power needed to complete the contact",    "correct": true},
                {"option": "No more than half the rating of your linear amplifier", "correct": false},
                {"option": "Never more than 1 watt",    "correct": false}
            ],
            "correct": "The answer was: \"The minimum amount of power needed to complete the contact\". (See also [97.313(a)])",
            "incorrect": "Incorrect. The answer was: \"The minimum amount of power needed to complete the contact\". (See also [97.313(a)])"
        },


        {//*
            "q" : "Which of the following can be done using an amateur radio satellite?",
            "a": [
                {"option": "Talk to amateur radio operators in other countries",    "correct": true},
                {"option": "Get global positioning information",    "correct": false},
                {"option": "Make telephone calls",  "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Talk to amateur radio operators in other countries\".",
            "incorrect": "Incorrect. The answer was: \"Talk to amateur radio operators in other countries\"."
        },


        {
            "q" : "Which amateur stations may make contact with an amateur station on the International Space Station using 2 meter and 70 cm band amateur radio frequencies?",
            "a": [
                {"option": "Only members of amateur radio clubs at NASA facilities",    "correct": false},
                {"option": "Any amateur holding a Technician or higher class license",  "correct": true},
                {"option": "Only the astronaut's family members who are hams",  "correct": false},
                {"option": "You cannot talk to the ISS on amateur radio frequencies",   "correct": false}
            ],
            "correct": "The answer was: \"Any amateur holding a Technician or higher class license\".",
            "incorrect": "Incorrect. The answer was: \"Any amateur holding a Technician or higher class license\"."
        },


        {
            "q" : "What is a satellite beacon?",
            "a": [
                {"option": "The primary transmit antenna on the satellite", "correct": false},
                {"option": "An indicator light that that shows where to point your antenna",    "correct": false},
                {"option": "A reflective surface on the satellite", "correct": false},
                {"option": "A transmission from a space station that contains information about a satellite",   "correct": true}
            ],
            "correct": "The answer was: \"A transmission from a space station that contains information about a satellite\".",
            "incorrect": "Incorrect. The answer was: \"A transmission from a space station that contains information about a satellite\"."
        },


        {
            "q" : "What can be used to determine the time period during which an amateur satellite or space station can be accessed?",
            "a": [
                {"option": "A GPS receiver",    "correct": false},
                {"option": "A field strength meter",    "correct": false},
                {"option": "A telescope",   "correct": false},
                {"option": "A satellite tracking program",  "correct": true}
            ],
            "correct": "The answer was: \"A satellite tracking program\".",
            "incorrect": "Incorrect. The answer was: \"A satellite tracking program\"."
        },


        {
            "q" : "With regard to satellite communications, what is Doppler shift?",
            "a": [
                {"option": "A change in the satellite orbit",   "correct": false},
                {"option": "A mode where the satellite receives signals on one band and transmits on another",  "correct": false},
                {"option": "An observed change in signal frequency caused by relative motion between the satellite and the earth station",  "correct": true},
                {"option": "A special digital communications mode for some satellites", "correct": false}
            ],
            "correct": "The answer was: \"An observed change in signal frequency caused by relative motion between the satellite and the earth station\".",
            "incorrect": "Incorrect. The answer was: \"An observed change in signal frequency caused by relative motion between the satellite and the earth station\"."
        },


        {
            "q" : "What is meant by the statement that a satellite is operating in \"mode U/V\"?",
            "a": [
                {"option": "The satellite uplink is in the 15 meter band and the downlink is in the 10 meter band", "correct": false},
                {"option": "The satellite uplink is in the 70 cm band and the downlink is in the 2 meter band", "correct": true},
                {"option": "The satellite operates using ultraviolet frequencies",  "correct": false},
                {"option": "The satellite frequencies are usually variable",    "correct": false}
            ],
            "correct": "The answer was: \"The satellite uplink is in the 70 cm band and the downlink is in the 2 meter band\".",
            "incorrect": "Incorrect. The answer was: \"The satellite uplink is in the 70 cm band and the downlink is in the 2 meter band\"."
        },


        {//*
            "q" : "What causes \"spin fading\" when referring to satellite signals?",
            "a": [
                {"option": "Circular polarized noise interference radiated from the sun ",  "correct": false},
                {"option": "Rotation of the satellite and its antennas",    "correct": true},
                {"option": "Doppler shift of the received signal",  "correct": false},
                {"option": "Interfering signals within the satellite uplink band ", "correct": false}
            ],
            "correct": "The answer was: \"Rotation of the satellite and its antennas\".",
            "incorrect": "Incorrect. The answer was: \"Rotation of the satellite and its antennas\"."
        },


        {
            "q" : "What do the initials LEO tell you about an amateur satellite?",
            "a": [
                {"option": "The satellite battery is in Low Energy Operation mode", "correct": false},
                {"option": "The satellite is performing a Lunar Ejection Orbit maneuver",   "correct": false},
                {"option": "The satellite is in a Low Earth Orbit", "correct": true},
                {"option": "The satellite uses Light Emitting Optics",  "correct": false}
            ],
            "correct": "The answer was: \"The satellite is in a Low Earth Orbit\".",
            "incorrect": "Incorrect. The answer was: \"The satellite is in a Low Earth Orbit\"."
        },



        {//*
            "q" : "What is a commonly used method of sending signals to and from a digital satellite?",
            "a": [
                {"option": "USB AFSK",  "correct": false},
                {"option": "PSK31", "correct": false},
                {"option": "FM Packet", "correct": true},
                {"option": "WSJT",  "correct": false}
            ],
            "correct": "The answer was: \"FM Packet\".",
            "incorrect": "Incorrect. The answer was: \"FM Packet\"."
        },


        //T8C – Operating activities; radio direction finding, radio control, contests, special event stations, basic linking over Internet

        {
            "q" : "Which of the following methods is used to locate sources of noise interference or jamming?",
            "a": [
                {"option": "Echolocation",  "correct": false},
                {"option": "Doppler radar ",    "correct": false},
                {"option": "Radio direction finding",   "correct": true},
                {"option": "Phase locking", "correct": false}
            ],
            "correct": "The answer was: \"Radio direction finding\".",
            "incorrect": "Incorrect. The answer was: \"Radio direction finding\"."
        },


        {
            "q" : "Which of these items would be useful for a hidden transmitter hunt?",
            "a": [
                {"option": "Calibrated SWR meter",  "correct": false},
                {"option": "A directional antenna", "correct": true},
                {"option": "A calibrated noise bridge", "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"A directional antenna\".",
            "incorrect": "Incorrect. The answer was: \"A directional antenna\"."
        },


        {
            "q" : "What popular operating activity involves contacting as many stations as possible during a specified period of time?",
            "a": [
                {"option": "Contesting",    "correct": true},
                {"option": "Net operations",    "correct": false},
                {"option": "Public service events", "correct": false},
                {"option": "Simulated emergency exercises", "correct": false}
            ],
            "correct": "The answer was: \"Contesting\".",
            "incorrect": "Incorrect. The answer was: \"Contesting\"."
        },


        {
            "q" : "Which of the following is good procedure when contacting another station in a radio contest?",
            "a": [
                {"option": "Be sure to sign only the last two letters of your call if there is a pileup calling the station",   "correct": false},
                {"option": "Work the station twice to be sure that you are in his log", "correct": false},
                {"option": "Send only the minimum information needed for proper identification and the contest exchange",   "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Send only the minimum information needed for proper identification and the contest exchange\".",
            "incorrect": "Incorrect. The answer was: \"Send only the minimum information needed for proper identification and the contest exchange\"."
        },


        {//*
            "q" : "What is a grid locator?",
            "a": [
                {"option": "A letter-number designator assigned to a geographic location",  "correct": true},
                {"option": "A letter-number designator assigned to an azimuth and elevation",   "correct": false},
                {"option": "An instrument for neutralizing a final amplifier",  "correct": false},
                {"option": "An instrument for radio direction finding", "correct": false}
            ],
            "correct": "The answer was: \"A letter-number designator assigned to a geographic location\".",
            "incorrect": "Incorrect. The answer was: \"A letter-number designator assigned to a geographic location\"."
        },


        {//*
            "q" : "For what purpose is a temporary \"1 by 1\" format (letter-number-letter) call sign assigned?",
            "a": [
                {"option": "To designate an experimental station",  "correct": false},
                {"option": "To honor a deceased relative who was a radio amateur",  "correct": false},
                {"option": "For operations in conjunction with an activity of special significance to the amateur community",   "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"For operations in conjunction with an activity of special significance to the amateur community\".",
            "incorrect": "Incorrect. The answer was: \"For operations in conjunction with an activity of special significance to the amateur community\"."
        },


        {//*
            "q" : "What is the maximum power allowed when transmitting telecommand signals to radio controlled models?",
            "a": [
                {"option": "500 milliwatts",    "correct": false},
                {"option": "1 watt",    "correct": true},
                {"option": "25 watts",  "correct": false},
                {"option": "1500 watts",    "correct": false}
            ],
            "correct": "The answer was: \"1 watt\". (See also [97.215(c)])",
            "incorrect": "Incorrect. The answer was: \"1 watt\". (See also [97.215(c)])"
        },


        {//*
            "q" : "What is required in place of on-air station identification when sending signals to a radio control model using amateur frequencies?",
            "a": [
                {"option": "Voice identification must be transmitted every 10 minutes", "correct": false},
                {"option": "Morse code ID must be sent once per hour",  "correct": false},
                {"option": "A label indicating the licensee’s name, call sign and address must be affixed to the transmitter",  "correct": true},
                {"option": "A flag must be affixed to the transmitter antenna with the station call sign in 1 inch high letters or larger", "correct": false}
            ],
            "correct": "The answer was: \"A label indicating the licensee’s name, call sign and address must be affixed to the transmitter\". (See also [97.215(a)])",
            "incorrect": "Incorrect. The answer was: \"A label indicating the licensee’s name, call sign and address must be affixed to the transmitter\". (See also [97.215(a)])"
        },


        {
            "q" : "How might you obtain a list of active nodes that use VoIP?",
            "a": [
                {"option": "From the FCC Rulebook", "correct": false},
                {"option": "From your local emergency coordinator", "correct": false},
                {"option": "From a repeater directory", "correct": true},
                {"option": "From the local repeater frequency coordinator", "correct": false}
            ],
            "correct": "The answer was: \"From a repeater directory\".",
            "incorrect": "Incorrect. The answer was: \"From a repeater directory\"."
        },


        {//*
            "q" : "How do you select a specific IRLP node when using a portable transceiver?",
            "a": [
                {"option": "Choose a specific CTCSS tone",  "correct": false},
                {"option": "Choose the correct DSC tone",   "correct": false},
                {"option": "Access the repeater autopatch", "correct": false},
                {"option": "Use the keypad to transmit the IRLP node ID",   "correct": true}
            ],
            "correct": "The answer was: \"Use the keypad to transmit the IRLP node ID\".",
            "incorrect": "Incorrect. The answer was: \"Use the keypad to transmit the IRLP node ID\"."
        },


        {
            "q" : "What name is given to an amateur radio station that is used to connect other amateur stations to the Internet?",
            "a": [
                {"option": "A gateway", "correct": true},
                {"option": "A repeater",    "correct": false},
                {"option": "A digipeater",  "correct": false},
                {"option": "A beacon",  "correct": false}
            ],
            "correct": "The answer was: \"A gateway\".",
            "incorrect": "Incorrect. The answer was: \"A gateway\"."
        },


        //T8D – Non-voice communications; image data, digital modes, CW, packet, PSK31

        {
            "q" : "Which of the following is an example of a digital communications method?",
            "a": [
                {"option": "Packet",    "correct": false},
                {"option": "PSK31", "correct": false},
                {"option": "MFSK",  "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {//*
            "q" : "What does the term APRS mean?",
            "a": [
                {"option": "Automatic Position Reporting System",   "correct": true},
                {"option": "Associated Public Radio Station",   "correct": false},
                {"option": "Auto Planning Radio Set-up",    "correct": false},
                {"option": "Advanced Polar Radio System",   "correct": false}
            ],
            "correct": "The answer was: \"Automatic Position Reporting System\".",
            "incorrect": "Incorrect. The answer was: \"Automatic Position Reporting System\"."
        },


        {
            "q" : "Which of the following is normally used when sending automatic location reports via amateur radio?",
            "a": [
                {"option": "A connection to the vehicle speedometer",   "correct": false},
                {"option": "A WWV receiver",    "correct": false},
                {"option": "A connection to a broadcast FM sub-carrier receiver",   "correct": false},
                {"option": "A Global Positioning System receiver",  "correct": true}
            ],
            "correct": "The answer was: \"A Global Positioning System receiver\".",
            "incorrect": "Incorrect. The answer was: \"A Global Positioning System receiver\"."
        },


        {//*
            "q" : "What type of transmission is indicated by the term NTSC?",
            "a": [
                {"option": "A Normal Transmission mode in Static Circuit",  "correct": false},
                {"option": "A special mode for earth satellite uplink", "correct": false},
                {"option": "An analog fast scan color TV signal",   "correct": true},
                {"option": "A frame compression scheme for TV signals", "correct": false}
            ],
            "correct": "The answer was: \"An analog fast scan color TV signal\".",
            "incorrect": "Incorrect. The answer was: \"An analog fast scan color TV signal\"."
        },


        {//*
            "q" : "Which of the following emission modes may be used by a Technician Class operator between 219 and 220 MHz?",
            "a": [
                {"option": "Spread spectrum",   "correct": false},
                {"option": "Data",  "correct": true},
                {"option": "SSB voice", "correct": false},
                {"option": "Fast-scan television",  "correct": false}
            ],
            "correct": "The answer was: \"Data\".",
            "incorrect": "Incorrect. The answer was: \"Data\"."
        },


        {//*
            "q" : "What does the abbreviation PSK mean?",
            "a": [
                {"option": "Pulse Shift Keying",    "correct": false},
                {"option": "Phase Shift Keying",    "correct": true},
                {"option": "Packet Short Keying",   "correct": false},
                {"option": "Phased Slide Keying",   "correct": false}
            ],
            "correct": "The answer was: \"Phase Shift Keying\".",
            "incorrect": "Incorrect. The answer was: \"Phase Shift Keying\"."
        },



        {//*
            "q" : "What is PSK31?",
            "a": [
                {"option": "A high-rate data transmission mode",    "correct": false},
                {"option": "A method of reducing noise interference to FM signals", "correct": false},
                {"option": "A method of compressing digital television signal", "correct": false},
                {"option": "A low-rate data transmission mode ",    "correct": true}
            ],
            "correct": "The answer was: \"A low-rate data transmission mode \".",
            "incorrect": "Incorrect. The answer was: \"A low-rate data transmission mode \"."
        },


        {
            "q" : "Which of the following may be included in packet transmissions?",
            "a": [
                {"option": "A check sum which permits error detection", "correct": false},
                {"option": "A header which contains the call sign of the station to which the information is being sent",   "correct": false},
                {"option": "Automatic repeat request in case of error", "correct": false},
                {"option": "All of these choices are correct ", "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct \".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct \"."
        },


        {
            "q" : "What code is used when sending CW in the amateur bands?",
            "a": [
                {"option": "Baudot",    "correct": false},
                {"option": "Hamming",   "correct": false},
                {"option": "International Morse",   "correct": true},
                {"option": "Gray",  "correct": false}
            ],
            "correct": "The answer was: \"International Morse\".",
            "incorrect": "Incorrect. The answer was: \"International Morse\"."
        },


        {
            "q" : "Which of the following can be used to transmit CW in the amateur bands?",
            "a": [
                {"option": "Straight Key",  "correct": false},
                {"option": "Electronic Keyer",  "correct": false},
                {"option": "Computer Keyboard", "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {
            "q" : "What is a \"parity\" bit?",
            "a": [
                {"option": "A control code required for automatic position reporting",  "correct": false},
                {"option": "A timing bit used to ensure equal sharing of a frequency",  "correct": false},
                {"option": "An extra code element used to detect errors in received data",  "correct": true},
                {"option": "A \"triple width\" bit used to signal the end of a character",  "correct": false}
            ],
            "correct": "The answer was: \"An extra code element used to detect errors in received data\".",
            "incorrect": "Incorrect. The answer was: \"An extra code element used to detect errors in received data\"."
        }, 


        //SUBELEMENT T9 – Antennas, feedlines - [2 Exam Questions - 2 Groups]

        //T9A – Antennas; vertical and horizontal, concept of gain, common portable and mobile antennas, relationships between antenna length and frequency

        {//*
            "q" : "What is a beam antenna?",
            "a": [
                {"option": "An antenna built from aluminum I-beams",    "correct": false},
                {"option": "An omnidirectional antenna invented by Clarence Beam",  "correct": false},
                {"option": "An antenna that concentrates signals in one direction", "correct": true},
                {"option": "An antenna that reverses the phase of received signals",    "correct": false}
            ],
            "correct": "The answer was: \"An antenna that concentrates signals in one direction\".",
            "incorrect": "Incorrect. The answer was: \"An antenna that concentrates signals in one direction\"."
        },



        {//*
            "q" : "Which of the following is true regarding vertical antennas?",
            "a": [
                {"option": "The magnetic field is perpendicular to the Earth",  "correct": false},
                {"option": "The electric field is perpendicular to the Earth",  "correct": true},
                {"option": "The phase is inverted", "correct": false},
                {"option": "The phase is reversed", "correct": false}
            ],
            "correct": "The answer was: \"The electric field is perpendicular to the Earth\".",
            "incorrect": "Incorrect. The answer was: \"The electric field is perpendicular to the Earth\"."
        },


        {
            "q" : "Which of the following describes a simple dipole mounted so the conductor is parallel to the Earth's surface?",
            "a": [
                {"option": "A ground wave antenna", "correct": false},
                {"option": "A horizontally polarized antenna",  "correct": true},
                {"option": "A rhombic antenna", "correct": false},
                {"option": "A vertically polarized antenna ",   "correct": false}
            ],
            "correct": "The answer was: \"A horizontally polarized antenna\".",
            "incorrect": "Incorrect. The answer was: \"A horizontally polarized antenna\"."
        },


        {//*
            "q" : "What is a disadvantage of the \"rubber duck\" antenna supplied with most handheld radio transceivers?",
            "a": [
                {"option": "It does not transmit or receive as effectively as a full-sized antenna",    "correct": true},
                {"option": "It transmits a circularly polarized signal",    "correct": false},
                {"option": "If the rubber end cap is lost it will unravel very quickly",    "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"It does not transmit or receive as effectively as a full-sized antenna\".",
            "incorrect": "Incorrect. The answer was: \"It does not transmit or receive as effectively as a full-sized antenna\"."
        },


        {
            "q" : "How would you change a dipole antenna to make it resonant on a higher frequency?",
            "a": [
                {"option": "Lengthen it",   "correct": false},
                {"option": "Insert coils in series with radiating wires",   "correct": false},
                {"option": "Shorten it",    "correct": true},
                {"option": "Add capacity hats to the ends of the radiating wires",  "correct": false}
            ],
            "correct": "The answer was: \"Shorten it\".",
            "incorrect": "Incorrect. The answer was: \"Shorten it\"."
        },


        {
            "q" : "What type of antennas are the quad, Yagi, and dish?",
            "a": [
                {"option": "Non-resonant antennas", "correct": false},
                {"option": "Loop antennas", "correct": false},
                {"option": "Directional antennas",  "correct": true},
                {"option": "Isotropic antennas",    "correct": false}
            ],
            "correct": "The answer was: \"Directional antennas\".",
            "incorrect": "Incorrect. The answer was: \"Directional antennas\"."
        },


        {//*
            "q" : "What is a good reason not to use a \"rubber duck\" antenna inside your car?",
            "a": [
                {"option": "Signals can be significantly weaker than when it is outside of the vehicle",    "correct": true},
                {"option": "It might cause your radio to overheat", "correct": false},
                {"option": "The SWR might decrease, decreasing the signal strength",    "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Signals can be significantly weaker than when it is outside of the vehicle\".",
            "incorrect": "Incorrect. The answer was: \"Signals can be significantly weaker than when it is outside of the vehicle\"."
        },



        {//*
            "q" : "What is the approximate length, in inches, of a quarter-wavelength vertical antenna for 146 MHz?",
            "a": [
                {"option": "112",   "correct": false},
                {"option": "50",    "correct": false},
                {"option": "19",    "correct": true},
                {"option": "12",    "correct": false}
            ],
            "correct": "The answer was: \"19\".",
            "incorrect": "Incorrect. The answer was: \"19\"."
        },


        {
            "q" : "What is the approximate length, in inches, of a 6 meter 1/2-wavelength wire dipole antenna?",
            "a": [
                {"option": "6", "correct": false},
                {"option": "50",    "correct": false},
                {"option": "112",   "correct": true},
                {"option": "236",   "correct": false}
            ],
            "correct": "The answer was: \"112\".",
            "incorrect": "Incorrect. The answer was: \"112\"."
        },


        {
            "q" : "In which direction is the radiation strongest from a half-wave dipole antenna in free space?",
            "a": [
                {"option": "Equally in all directions", "correct": false},
                {"option": "Off the ends of the antenna",   "correct": false},
                {"option": "Broadside to the antenna",  "correct": true},
                {"option": "In the direction of the feedline",  "correct": false}
            ],
            "correct": "The answer was: \"Broadside to the antenna\".",
            "incorrect": "Incorrect. The answer was: \"Broadside to the antenna\"."
        },


        {//*
            "q" : "What is meant by the gain of an antenna?",
            "a": [
                {"option": "The additional power that is added to the transmitter power",   "correct": false},
                {"option": "The additional power that is lost in the antenna when transmitting on a higher frequency",  "correct": false},
                {"option": "The increase in signal strength in a specified direction when compared to a reference antenna", "correct": true},
                {"option": "The increase in impedance on receive or transmit compared to a reference antenna",  "correct": false}
            ],
            "correct": "The answer was: \"The increase in signal strength in a specified direction when compared to a reference antenna\".",
            "incorrect": "Incorrect. The answer was: \"The increase in signal strength in a specified direction when compared to a reference antenna\"."
        },


        //T9B - Feedlines; types, losses vs. frequency, SWR concepts, matching weather protection, connectors

        {//*
            "q" : "Why is it important to have a low SWR in an antenna system that uses coaxial cable feedline?",
            "a": [
                {"option": "To reduce television interference ",    "correct": false},
                {"option": "To allow the efficient transfer of power and reduce losses",    "correct": true},
                {"option": "To prolong antenna life",   "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"To allow the efficient transfer of power and reduce losses\".",
            "incorrect": "Incorrect. The answer was: \"To allow the efficient transfer of power and reduce losses\"."
        },



        {
            "q" : "What is the impedance of the most commonly used coaxial cable in typical amateur radio installations?",
            "a": [
                {"option": "8 ohms",    "correct": false},
                {"option": "50 ohms",   "correct": true},
                {"option": "600 ohms",  "correct": false},
                {"option": "12 ohms",   "correct": false}
            ],
            "correct": "The answer was: \"50 ohms\".",
            "incorrect": "Incorrect. The answer was: \"50 ohms\"."
        },


        {
            "q" : "Why is coaxial cable used more often than any other feedline for amateur radio antenna systems?",
            "a": [
                {"option": "It is easy to use and requires few special installation considerations",    "correct": true},
                {"option": "It has less loss than any other type of feedline",  "correct": false},
                {"option": "It can handle more power than any other type of feedline",  "correct": false},
                {"option": "It is less expensive than any other types of feedline", "correct": false}
            ],
            "correct": "The answer was: \"It is easy to use and requires few special installation considerations\".",
            "incorrect": "Incorrect. The answer was: \"It is easy to use and requires few special installation considerations\"."
        },


        {//*
            "q" : "What does an antenna tuner do?",
            "a": [
                {"option": "It matches the antenna system impedance to the transceiver's output impedance", "correct": true},
                {"option": "It helps a receiver automatically tune in weak stations",   "correct": false},
                {"option": "It allows an antenna to be used on both transmit and receive",  "correct": false},
                {"option": "It automatically selects the proper antenna for the frequency band being used", "correct": false}
            ],
            "correct": "The answer was: \"It matches the antenna system impedance to the transceiver's output impedance\".",
            "incorrect": "Incorrect. The answer was: \"It matches the antenna system impedance to the transceiver's output impedance\"."
        },


        {//*
            "q" : "What generally happens as the frequency of a signal passing through coaxial cable is increased?",
            "a": [
                {"option": "The apparent SWR increases",    "correct": false},
                {"option": "The reflected power increases", "correct": false},
                {"option": "The characteristic impedance increases",    "correct": false},
                {"option": "The loss increases",    "correct": true}
            ],
            "correct": "The answer was: \"The loss increases\".",
            "incorrect": "Incorrect. The answer was: \"The loss increases\"."
        },


        {//*
            "q" : "Which of the following connectors is most suitable for frequencies above 400 MHz?",
            "a": [
                {"option": "A UHF (PL-259/SO-239) connector",   "correct": false},
                {"option": "A Type N connector",    "correct": true},
                {"option": "An RS-213 connector",   "correct": false},
                {"option": "A DB-23 connector", "correct": false}
            ],
            "correct": "The answer was: \"A Type N connector\".",
            "incorrect": "Incorrect. The answer was: \"A Type N connector\"."
        },


        {//*
            "q" : "Which of the following is true of PL-259 type coax connectors?",
            "a": [
                {"option": "They are good for UHF frequencies", "correct": false},
                {"option": "They are water tight",  "correct": false},
                {"option": "The are commonly used at HF frequencies",   "correct": true},
                {"option": "They are a bayonet type connector", "correct": false}
            ],
            "correct": "The answer was: \"The are commonly used at HF frequencies\".",
            "incorrect": "Incorrect. The answer was: \"The are commonly used at HF frequencies\"."
        },



        {//*
            "q" : "Why should coax connectors exposed to the weather be sealed against water intrusion?",
            "a": [
                {"option": "To prevent an increase in feedline loss",   "correct": true},
                {"option": "To prevent interference to telephones", "correct": false},
                {"option": "To keep the jacket from becoming loose",    "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"To prevent an increase in feedline loss\".",
            "incorrect": "Incorrect. The answer was: \"To prevent an increase in feedline loss\"."
        },


        {//*
            "q" : "What might cause erratic changes in SWR readings?",
            "a": [
                {"option": "The transmitter is being modulated",    "correct": false},
                {"option": "A loose connection in an antenna or a feedline",    "correct": true},
                {"option": "The transmitter is being over-modulated",   "correct": false},
                {"option": "Interference from other stations is distorting your signal",    "correct": false}
            ],
            "correct": "The answer was: \"A loose connection in an antenna or a feedline\".",
            "incorrect": "Incorrect. The answer was: \"A loose connection in an antenna or a feedline\"."
        },


        {
            "q" : "What electrical difference exists between the smaller RG-58 and larger RG-8 coaxial cables?",
            "a": [
                {"option": "There is no significant difference between the two types",  "correct": false},
                {"option": "RG-58 cable has less loss at a given frequency",    "correct": false},
                {"option": "RG-8 cable has less loss at a given frequency", "correct": true},
                {"option": "RG-58 cable can handle higher power levels",    "correct": false}
            ],
            "correct": "The answer was: \"RG-8 cable has less loss at a given frequency\".",
            "incorrect": "Incorrect. The answer was: \"RG-8 cable has less loss at a given frequency\"."
        },


        {//*
            "q" : "Which of the following types of feedline has the lowest loss at VHF and UHF?",
            "a": [
                {"option": "50-ohm flexible coax",  "correct": false},
                {"option": "Multi-conductor unbalanced cable",  "correct": false},
                {"option": "Air-insulated hard line",   "correct": true},
                {"option": "75-ohm flexible coax",  "correct": false}
            ],
            "correct": "The answer was: \"Air-insulated hard line\".",
            "incorrect": "Incorrect. The answer was: \"Air-insulated hard line\"."
        },


        //SUBELEMENT T0 – AC power circuits, antenna installation, RF hazards – [3 Exam Questions - 3 Groups]

        //T0A – AC power circuits; hazardous voltages, fuses and circuit breakers, grounding, lightning protection, battery safety, electrical code compliance

        {//*
            "q" : "Which is a commonly accepted value for the lowest voltage that can cause a dangerous electric shock?",
            "a": [
                {"option": "12 volts",  "correct": false},
                {"option": "30 volts",  "correct": true},
                {"option": "120 volts", "correct": false},
                {"option": "300 volts", "correct": false}
            ],
            "correct": "The answer was: \"30 volts\".",
            "incorrect": "Incorrect. The answer was: \"30 volts\"."
        },


        {
            "q" : "How does current flowing through the body cause a health hazard?",
            "a": [
                {"option": "By heating tissue", "correct": false},
                {"option": "It disrupts the electrical functions of cells", "correct": false},
                {"option": "It causes involuntary muscle contractions", "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {
            "q" : "What is connected to the green wire in a three-wire electrical AC plug?",
            "a": [
                {"option": "Neutral",   "correct": false},
                {"option": "Hot",   "correct": false},
                {"option": "Safety ground", "correct": true},
                {"option": "The white wire",    "correct": false}
            ],
            "correct": "The answer was: \"Safety ground\".",
            "incorrect": "Incorrect. The answer was: \"Safety ground\"."
        },


        {
            "q" : "What is the purpose of a fuse in an electrical circuit?",
            "a": [
                {"option": "To prevent power supply ripple from damaging a circuit",    "correct": false},
                {"option": "To interrupt power in case of overload",    "correct": true},
                {"option": "To limit current to prevent shocks",    "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"To interrupt power in case of overload\".",
            "incorrect": "Incorrect. The answer was: \"To interrupt power in case of overload\"."
        },


        {
            "q" : "Why is it unwise to install a 20-ampere fuse in the place of a 5-ampere fuse?",
            "a": [
                {"option": "The larger fuse would be likely to blow because it is rated for higher current",    "correct": false},
                {"option": "The power supply ripple would greatly increase",    "correct": false},
                {"option": "Excessive current could cause a fire",  "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Excessive current could cause a fire\".",
            "incorrect": "Incorrect. The answer was: \"Excessive current could cause a fire\"."
        },


        {
            "q" : "What is a good way to guard against electrical shock at your station?",
            "a": [
                {"option": "Use three-wire cords and plugs for all AC powered equipment",   "correct": false},
                {"option": "Connect all AC powered station equipment to a common safety ground",    "correct": false},
                {"option": "Use a circuit protected by a ground-fault interrupter", "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {
            "q" : "Which of these precautions should be taken when installing devices for lightning protection in a coaxial cable feedline?",
            "a": [
                {"option": "Include a parallel bypass switch for each protector so that it can be switched out of the circuit when running high power", "correct": false},
                {"option": "Include a series switch in the ground line of each protector to prevent RF overload from inadvertently damaging the protector", "correct": false},
                {"option": "Keep the ground wires from each protector separate and connected to station ground",    "correct": false},
                {"option": "Ground all of the protectors to a common plate which is in turn connected to an external ground",   "correct": true}
            ],
            "correct": "The answer was: \"Ground all of the protectors to a common plate which is in turn connected to an external ground\".",
            "incorrect": "Incorrect. The answer was: \"Ground all of the protectors to a common plate which is in turn connected to an external ground\"."
        },


        {
            "q" : "What is one way to recharge a 12-volt lead-acid station battery if the commercial power is out?",
            "a": [
                {"option": "Cool the battery in ice for several hours", "correct": false},
                {"option": "Add acid to the battery",   "correct": false},
                {"option": "Connect the battery to a car's battery and run the engine", "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Connect the battery to a car's battery and run the engine\".",
            "incorrect": "Incorrect. The answer was: \"Connect the battery to a car's battery and run the engine\"."
        },



        {
            "q" : "What kind of hazard is presented by a conventional 12-volt storage battery?",
            "a": [
                {"option": "It emits ozone which can be harmful to the atmosphere", "correct": false},
                {"option": "Shock hazard due to high voltage",  "correct": false},
                {"option": "Explosive gas can collect if not properly vented",  "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Explosive gas can collect if not properly vented\".",
            "incorrect": "Incorrect. The answer was: \"Explosive gas can collect if not properly vented\"."
        },


        {
            "q" : "What can happen if a lead-acid storage battery is charged or discharged too quickly?",
            "a": [
                {"option": "The battery could overheat and give off flammable gas or explode",  "correct": true},
                {"option": "The voltage can become reversed",   "correct": false},
                {"option": "The “memory effect” will reduce the capacity of the battery",   "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"The battery could overheat and give off flammable gas or explode\".",
            "incorrect": "Incorrect. The answer was: \"The battery could overheat and give off flammable gas or explode\"."
        }, 


        {
            "q" : "Which of the following is good practice when installing ground wires on a tower for lightning protection?",
            "a": [
                {"option": "Put a loop in the ground connection to prevent water damage to the ground system",  "correct": false},
                {"option": "Make sure that all bends in the ground wires are clean, right angle bends", "correct": false},
                {"option": "Ensure that connections are short and direct",  "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Ensure that connections are short and direct\".",
            "incorrect": "Incorrect. The answer was: \"Ensure that connections are short and direct\"."
        },


        {
            "q" : "What kind of hazard might exist in a power supply when it is turned off and disconnected?",
            "a": [
                {"option": "Static electricity could damage the grounding system",  "correct": false},
                {"option": "Circulating currents inside the transformer might cause damage",    "correct": false},
                {"option": "The fuse might blow if you remove the cover",   "correct": false},
                {"option": "You might receive an electric shock from stored charge in large capacitors",    "correct": true}
            ],
            "correct": "The answer was: \"You might receive an electric shock from stored charge in large capacitors\".",
            "incorrect": "Incorrect. The answer was: \"You might receive an electric shock from stored charge in large capacitors\"."
        },


        {
            "q" : "What safety equipment should always be included in home-built equipment that is powered from 120V AC power circuits?",
            "a": [
                {"option": "A fuse or circuit breaker in series with the AC \"hot\" conductor", "correct": true},
                {"option": "An AC voltmeter across the incoming power source",  "correct": false},
                {"option": "An inductor in series with the AC power source",    "correct": false},
                {"option": "A capacitor across the AC power source",    "correct": false}
            ],
            "correct": "The answer was: \"A fuse or circuit breaker in series with the AC \"hot\" conductor\".",
            "incorrect": "Incorrect. The answer was: \"A fuse or circuit breaker in series with the AC \"hot\" conductor\"."
        },


        //T0B – Antenna installation; tower safety, overhead power lines

        {
            "q" : "When should members of a tower work team wear a hard hat and safety glasses?",
            "a": [
                {"option": "At all times except when climbing the tower",   "correct": false},
                {"option": "At all times except when belted firmly to the tower",   "correct": false},
                {"option": "At all times when any work is being done on the tower", "correct": true},
                {"option": "Only when the tower exceeds 30 feet in height", "correct": false}
            ],
            "correct": "The answer was: \"At all times when any work is being done on the tower\".",
            "incorrect": "Incorrect. The answer was: \"At all times when any work is being done on the tower\"."
        },



        {
            "q" : "What is a good precaution to observe before climbing an antenna tower?",
            "a": [
                {"option": "Make sure that you wear a grounded wrist strap",    "correct": false},
                {"option": "Remove all tower grounding connections",    "correct": false},
                {"option": "Put on a climbing harness and safety glasses",  "correct": true},
                {"option": "All of the these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Put on a climbing harness and safety glasses\".",
            "incorrect": "Incorrect. The answer was: \"Put on a climbing harness and safety glasses\"."
        },


        {
            "q" : "Under what circumstances is it safe to climb a tower without a helper or observer?",
            "a": [
                {"option": "When no electrical work is being performed",    "correct": false},
                {"option": "When no mechanical work is being performed",    "correct": false},
                {"option": "When the work being done is not more than 20 feet above the ground",    "correct": false},
                {"option": "Never", "correct": true}
            ],
            "correct": "The answer was: \"Never\".",
            "incorrect": "Incorrect. The answer was: \"Never\"."
        },


        {
            "q" : "Which of the following is an important safety precaution to observe when putting up an antenna tower?",
            "a": [
                {"option": "Wear a ground strap connected to your wrist at all times",  "correct": false},
                {"option": "Insulate the base of the tower to avoid lightning strikes", "correct": false},
                {"option": "Look for and stay clear of any overhead electrical wires",  "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Look for and stay clear of any overhead electrical wires\".",
            "incorrect": "Incorrect. The answer was: \"Look for and stay clear of any overhead electrical wires\"."
        },


        {
            "q" : "What is the purpose of a gin pole?",
            "a": [
                {"option": "To temporarily replace guy wires",  "correct": false},
                {"option": "To be used in place of a safety harness",   "correct": false},
                {"option": "To lift tower sections or antennas",    "correct": true},
                {"option": "To provide a temporary ground", "correct": false}
            ],
            "correct": "The answer was: \"To lift tower sections or antennas\".",
            "incorrect": "Incorrect. The answer was: \"To lift tower sections or antennas\"."
        },


        {
            "q" : "What is the minimum safe distance from a power line to allow when installing an antenna?",
            "a": [
                {"option": "Half the width of your property",   "correct": false},
                {"option": "The height of the power line above ground", "correct": false},
                {"option": "1/2 wavelength at the operating frequency", "correct": false},
                {"option": "So that if the antenna falls unexpectedly, no part of it can come closer than 10 feet to the power wires",  "correct": true}
            ],
            "correct": "The answer was: \"So that if the antenna falls unexpectedly, no part of it can come closer than 10 feet to the power wires\".",
            "incorrect": "Incorrect. The answer was: \"So that if the antenna falls unexpectedly, no part of it can come closer than 10 feet to the power wires\"."
        },


        {
            "q" : "Which of the following is an important safety rule to remember when using a crank-up tower?",
            "a": [
                {"option": "This type of tower must never be painted",  "correct": false},
                {"option": "This type of tower must never be grounded", "correct": false},
                {"option": "This type of tower must never be climbed unless it is in the fully retracted position", "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"This type of tower must never be climbed unless it is in the fully retracted position\".",
            "incorrect": "Incorrect. The answer was: \"This type of tower must never be climbed unless it is in the fully retracted position\"."
        },



        {
            "q" : "What is considered to be a proper grounding method for a tower?",
            "a": [
                {"option": "A single four-foot ground rod, driven into the ground no more than 12 inches from the base",    "correct": false},
                {"option": "A ferrite-core RF choke connected between the tower and ground",    "correct": false},
                {"option": "Separate eight-foot long ground rods for each tower leg, bonded to the tower and each other",   "correct": true},
                {"option": "A connection between the tower base and a cold water pipe", "correct": false}
            ],
            "correct": "The answer was: \"Separate eight-foot long ground rods for each tower leg, bonded to the tower and each other\".",
            "incorrect": "Incorrect. The answer was: \"Separate eight-foot long ground rods for each tower leg, bonded to the tower and each other\"."
        },


        {
            "q" : "Why should you avoid attaching an antenna to a utility pole?",
            "a": [
                {"option": "The antenna will not work properly because of induced voltages",    "correct": false},
                {"option": "The utility company will charge you an extra monthly fee",  "correct": false},
                {"option": "The antenna could contact high-voltage power wires",    "correct": true},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"The antenna could contact high-voltage power wires\".",
            "incorrect": "Incorrect. The answer was: \"The antenna could contact high-voltage power wires\"."
        },


        {
            "q" : "Which of the following is true concerning grounding conductors used for lightning protection?",
            "a": [
                {"option": "Only non-insulated wire must be used",  "correct": false},
                {"option": "Wires must be carefully routed with precise right-angle bends", "correct": false},
                {"option": "Sharp bends must be avoided",   "correct": true},
                {"option": "Common grounds must be avoided",    "correct": false}
            ],
            "correct": "The answer was: \"Sharp bends must be avoided\".",
            "incorrect": "Incorrect. The answer was: \"Sharp bends must be avoided\"."
        },


        {
            "q" : "Which of the following establishes grounding requirements for an amateur radio tower or antenna?",
            "a": [
                {"option": "FCC Part 97 Rules", "correct": false},
                {"option": "Local electrical codes",    "correct": true},
                {"option": "FAA tower lighting regulations",    "correct": false},
                {"option": "Underwriters Laboratories' recommended practices",  "correct": false}
            ],
            "correct": "The answer was: \"Local electrical codes\".",
            "incorrect": "Incorrect. The answer was: \"Local electrical codes\"."
        },


        //T0C - RF hazards; radiation exposure, proximity to antennas, recognized safe power levels, exposure to others

        {
            "q" : "What type of radiation are VHF and UHF radio signals?",
            "a": [
                {"option": "Gamma radiation",   "correct": false},
                {"option": "Ionizing radiation",    "correct": false},
                {"option": "Alpha radiation",   "correct": false},
                {"option": "Non-ionizing radiation",    "correct": true}
            ],
            "correct": "The answer was: \"Non-ionizing radiation\".",
            "incorrect": "Incorrect. The answer was: \"Non-ionizing radiation\"."
        },


        {
            "q" : "Which of the following frequencies has the lowest Maximum Permissible Exposure limit?",
            "a": [
                {"option": "3.5 MHz",   "correct": false},
                {"option": "50 MHz",    "correct": true},
                {"option": "440 MHz",   "correct": false},
                {"option": "1296 MHz",  "correct": false}
            ],
            "correct": "The answer was: \"50 MHz\".",
            "incorrect": "Incorrect. The answer was: \"50 MHz\"."
        },


        {
            "q" : "What is the maximum power level that an amateur radio station may use at VHF frequencies before an RF exposure evaluation is required?",
            "a": [
                {"option": "1500 watts PEP transmitter output", "correct": false},
                {"option": "1 watt forward power",  "correct": false},
                {"option": "50 watts PEP at the antenna",   "correct": true},
                {"option": "50 watts PEP reflected power",  "correct": false}
            ],
            "correct": "The answer was: \"50 watts PEP at the antenna\".",
            "incorrect": "Incorrect. The answer was: \"50 watts PEP at the antenna\"."
        },


        {
            "q" : "What factors affect the RF exposure of people near an amateur station antenna?",
            "a": [
                {"option": "Frequency and power level of the RF field", "correct": false},
                {"option": "Distance from the antenna to a person", "correct": false},
                {"option": "Radiation pattern of the antenna",  "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {
            "q" : "Why do exposure limits vary with frequency?",
            "a": [
                {"option": "Lower frequency RF fields have more energy than higher frequency fields",   "correct": false},
                {"option": "Lower frequency RF fields do not penetrate the human body", "correct": false},
                {"option": "Higher frequency RF fields are transient in nature",    "correct": false},
                {"option": "The human body absorbs more RF energy at some frequencies than at others",  "correct": true}
            ],
            "correct": "The answer was: \"The human body absorbs more RF energy at some frequencies than at others\".",
            "incorrect": "Incorrect. The answer was: \"The human body absorbs more RF energy at some frequencies than at others\"."
        },


        {
            "q" : "Which of the following is an acceptable method to determine that your station complies with FCC RF exposure regulations?",
            "a": [
                {"option": "By calculation based on FCC OET Bulletin 65",   "correct": false},
                {"option": "By calculation based on computer modeling", "correct": false},
                {"option": "By measurement of field strength using calibrated equipment",   "correct": false},
                {"option": "All of these choices are correct",  "correct": true}
            ],
            "correct": "The answer was: \"All of these choices are correct\".",
            "incorrect": "Incorrect. The answer was: \"All of these choices are correct\"."
        },


        {
            "q" : "What could happen if a person accidentally touched your antenna while you were transmitting?",
            "a": [
                {"option": "Touching the antenna could cause television interference",  "correct": false},
                {"option": "They might receive a painful RF burn",  "correct": true},
                {"option": "They might develop radiation poisoning",    "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"They might receive a painful RF burn\".",
            "incorrect": "Incorrect. The answer was: \"They might receive a painful RF burn\"."
        },


        {
            "q" : "Which of the following actions might amateur operators take to prevent exposure to RF radiation in excess of FCC-supplied limits?",
            "a": [
                {"option": "Relocate antennas", "correct": true},
                {"option": "Relocate the transmitter",  "correct": false},
                {"option": "Increase the duty cycle",   "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"Relocate antennas\".",
            "incorrect": "Incorrect. The answer was: \"Relocate antennas\"."
        },



        {
            "q" : "How can you make sure your station stays in compliance with RF safety regulations?",
            "a": [
                {"option": "By informing the FCC of any changes made in your station",  "correct": false},
                {"option": "By re-evaluating the station whenever an item of equipment is changed", "correct": true},
                {"option": "By making sure your antennas have low SWR", "correct": false},
                {"option": "All of these choices are correct",  "correct": false}
            ],
            "correct": "The answer was: \"By re-evaluating the station whenever an item of equipment is changed\".",
            "incorrect": "Incorrect. The answer was: \"By re-evaluating the station whenever an item of equipment is changed\"."
        },


        {
            "q" : "Why is duty cycle one of the factors used to determine safe RF radiation exposure levels?",
            "a": [
                {"option": "It affects the average exposure of people to radiation",    "correct": true},
                {"option": "It affects the peak exposure of people to radiation",   "correct": false},
                {"option": "It takes into account the antenna feedline loss",   "correct": false},
                {"option": "It takes into account the thermal effects of the final amplifier",  "correct": false}
            ],
            "correct": "The answer was: \"It affects the average exposure of people to radiation\".",
            "incorrect": "Incorrect. The answer was: \"It affects the average exposure of people to radiation\"."
        },


        {
            "q" : "What is meant by \"duty cycle\" when referring to RF exposure?",
            "a": [
                {"option": "The difference between lowest usable output and maximum rated output power of a transmitter",   "correct": false},
                {"option": "The difference between PEP and average power of an SSB signal", "correct": false},
                {"option": "The ratio of on-air time to total operating time of a transmitted signal",  "correct": true},
                {"option": "The amount of time the operator spends transmitting",   "correct": false}
            ],
            "correct": "The answer was: \"The ratio of on-air time to total operating time of a transmitted signal\".",
            "incorrect": "Incorrect. The answer was: \"The ratio of on-air time to total operating time of a transmitted signal\"."
        },
    ]
};
