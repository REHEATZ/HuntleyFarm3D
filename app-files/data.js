var APP_DATA = {
  "scenes": [
    {
      "id": "0-zambeef-entrance",
      "name": "Zambeef Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.28198307689082114,
        "pitch": -0.042389237018209514,
        "fov": 1.3746224004475431
      },
      "linkHotspots": [
        {
          "yaw": -0.22698995821310852,
          "pitch": 0.03113898466624221,
          "rotation": 0,
          "target": "1-pilot-plant"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8630751668524859,
          "pitch": -0.19476632318604103,
          "title": "Welcome!",
          "text": "Welcome to the Huntley Farm Zambeef Plant in Chisamba, Zambia! REHEATZ installed a pilot heat recovery system here in February 2024, the first of its kind in the country. Funding for this project was provided by Science Foundation Ireland and Irish Aid under Challenge&nbsp;<span style=\"font-family: inherit; font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;\">Grant Number 22/FIP/SDG/10682.</span>"
        },
        {
          "yaw": 0.14471180221006463,
          "pitch": 0.012771625774467665,
          "title": "Sanitation Checkpoint",
          "text": "All people and vehicles entering Huntley Farm go through an inspection and sanitation process--virtual tour attendees can just click the \"Pilot Plant\" link on this page.&nbsp;"
        }
      ]
    },
    {
      "id": "1-pilot-plant",
      "name": "Pilot Plant",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.905669348644725,
        "pitch": -0.1392789216312451,
        "fov": 1.3746224004475431
      },
      "linkHotspots": [
        {
          "yaw": 0.08447539230952827,
          "pitch": 0.06274332989330667,
          "rotation": 0,
          "target": "4-drain"
        },
        {
          "yaw": -2.028370482934214,
          "pitch": 0.05422239973918508,
          "rotation": 0,
          "target": "2-boiler-room"
        },
        {
          "yaw": -2.360289724546501,
          "pitch": 0.12475309419464509,
          "rotation": 6.283185307179586,
          "target": "3-hot-well"
        },
        {
          "yaw": -2.6022635178235305,
          "pitch": 0.444281562259075,
          "rotation": 3.141592653589793,
          "target": "4-drain"
        },
        {
          "yaw": -3.1282609161027786,
          "pitch": 0.08597564600094998,
          "rotation": 0,
          "target": "5-storage-tanks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.913288890641997,
          "pitch": -0.42751910701408136,
          "title": "Start Here!",
          "text": "Welcome to the REHEATZ pilot plant at Zambeef Huntley Farm! Follow the water from the boiler (far right) to the hot well (right) to the storage tanks (left) and finally the drainage channel (behind).&nbsp;<p class=\"IAHRackntext\"><span lang=\"EN-US\"><o:p></o:p></span></p>"
        }
      ]
    },
    {
      "id": "2-boiler-room",
      "name": "Boiler Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3923951673989343,
          "pitch": 0.006687081976320286,
          "rotation": 7.853981633974483,
          "target": "3-hot-well"
        },
        {
          "yaw": 2.778489560564843,
          "pitch": 0.005932529591374802,
          "rotation": 7.853981633974483,
          "target": "1-pilot-plant"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5975966676619677,
          "pitch": -0.20531447239525136,
          "title": "Feedwater Supply",
          "text": "<div>Feedwater that will be converted to steam is supplied through this line to the boiler. The site uses groundwater for their water source with significant dissolved solids and hardness. The water is pretreated and filtered before it is supplied to the boiler to reduce some of this hardness.&nbsp;<br></div><div><br></div>"
        },
        {
          "yaw": 0.24539114300668174,
          "pitch": 0.2135750289639038,
          "title": "Blowdown Valve",
          "text": "<div>Periodically throughout the day, very hot blowdown water is flushed through the boiler to remove mineral buildup during a regular cleaning process, called the ‘blowdown’, through this blowdown valve. This hot wastewater is used as a source to recover heat from by the REHEATZ pilot plant – now visit the Hot Well to learn more!<br></div><div><br></div>"
        },
        {
          "yaw": -0.022772374761904857,
          "pitch": -0.4378984874797194,
          "title": "Boiler",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">The 10-ton boiler at Huntley Farm uses 150 tonnes of coal a month for steam production. The REHEATZ project hopes to decrease coal use by preheating the water that goes into the boiler, decreasing the amount of energy needed to generate steam.</span>"
        }
      ]
    },
    {
      "id": "3-hot-well",
      "name": "Hot Well",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6535389488449699,
          "pitch": -0.31944530133825566,
          "rotation": 4.71238898038469,
          "target": "5-storage-tanks"
        },
        {
          "yaw": 0.7096788222272163,
          "pitch": 0.25455871639789507,
          "rotation": 9.42477796076938,
          "target": "1-pilot-plant"
        },
        {
          "yaw": 1.1104225122431934,
          "pitch": -0.1127964229692271,
          "rotation": 4.71238898038469,
          "target": "2-boiler-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.15425179662830146,
          "pitch": -0.025006476331366656,
          "title": "Hot Well",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">When blowdown wastewater leaves the boiler, it enters the hot well with a temperature between 80-90℃. Inside the hot well, it comes in contact with the REHEATZ heat exchangers that are installed within and the thermal energy from the blowdown wastewater is transferred to incoming cold water that is pumped through the heat exchangers.</span>"
        },
        {
          "yaw": 0.21645983557625925,
          "pitch": 0.33998324111403555,
          "title": "Heat Exchangers",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\"><p style=\"margin-bottom: 8px;\">This set of pipes connects to the inlet and outlet of the two heat exchangers within the hot well.</p><p style=\"margin-bottom: 8px;\">Go to the storage tank next to see where the incoming cold water comes from and goes to after heating, or to the drain to see what happens to the blowdown water.</p></span>"
        },
        {
          "yaw": 1.1052849801312163,
          "pitch": 0.3020030971276668,
          "title": "Temperature Sensors",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">The temperature of the water within the inlet and outlet pipes are monitored and recorded by sensors to ensure that the performance of the system can be assessed. We have found that the cold-water temperature can increase by a maximum of around 60 degrees, and this slowly drops down to an increase of around 30 degrees after one hour of the system’s operation.</span>"
        }
      ]
    },
    {
      "id": "4-drain",
      "name": "Drain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4174404095178073,
          "pitch": -0.10074278615297061,
          "rotation": 0,
          "target": "1-pilot-plant"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.10395413922962327,
          "pitch": 0.05689196318135359,
          "title": "Drain",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">When the blowdown water leaves the hot well, it flows through to this drain with water from other parts of Huntley Farm. The water in the drain is at a lower temperature than the water in the hot well, but there is significantly more water here. Hence, it could also represent a significant potential for wastewater heat recovery which will be further explored in the next few months!</span>"
        },
        {
          "yaw": -0.12550465284076218,
          "pitch": 0.5789569014869222,
          "title": "Heat Exchanger Piping",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">&nbsp;This set of pipes connects to the inlet and outlet of the two heat exchangers within the hot well. Temperature sensors are used to monitor the inlet and outlet water temperatures and assess the heat exchanger's performance.&nbsp;</span>"
        },
        {
          "yaw": -1.7507298024480136,
          "pitch": 0.15370510959972705,
          "title": "Thank You!",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\"><p style=\"margin-bottom: 8px;\">Thank you for visiting the REHEATZ heat recovery pilot plant at Zambeef Huntley Farm! Please let us know if you have any feedback or questions, we can be contacted by email: <a aria-label=\"Link reheatzsdg@gmail.com\" href=\"mailto:reheatzsdg@gmail.com\" rel=\"noreferrer noopener\" target=\"_blank\" class=\"fui-Link ___1rxvrpe f2hkw1w f3rmtva f1ewtqcl fyind8e f1k6fduh f1w7gpdv fk6fouc fjoy568 figsok6 f1hu3pq6 f11qmguv f19f4twv f1tyq0we f1g0x7ka fhxju0i f1qch9an f1cnd47f fqv5qza f1vmzxwi f1o700av f13mvf36 f1cmlufx f9n3di6 f1ids18y f1tx3yz7 f1deo86v f1eh06m1 f1iescvh fhgqx19 f1olyrje f1p93eir f1nev41a f1h8hb77 f1lqvz6u f10aw75t fsle3fq f17ae5zn\" title=\"mailto:reheatzsdg@gmail.com\">reheatzsdg@gmail.com</a> or through our website: <a aria-label=\"Link https://www.reheatz.ie/\" href=\"https://www.reheatz.ie/\" rel=\"noreferrer noopener\" target=\"_blank\" class=\"fui-Link ___1rxvrpe f2hkw1w f3rmtva f1ewtqcl fyind8e f1k6fduh f1w7gpdv fk6fouc fjoy568 figsok6 f1hu3pq6 f11qmguv f19f4twv f1tyq0we f1g0x7ka fhxju0i f1qch9an f1cnd47f fqv5qza f1vmzxwi f1o700av f13mvf36 f1cmlufx f9n3di6 f1ids18y f1tx3yz7 f1deo86v f1eh06m1 f1iescvh fhgqx19 f1olyrje f1p93eir f1nev41a f1h8hb77 f1lqvz6u f10aw75t fsle3fq f17ae5zn\" title=\"https://www.reheatz.ie/\">https://www.reheatz.ie/</a>.&nbsp;&nbsp;</p><p style=\"margin-bottom: 8px;\">&nbsp;</p></span>"
        }
      ]
    },
    {
      "id": "5-storage-tanks",
      "name": "Storage Tanks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.595833226594518,
        "pitch": 0.06931194949729225,
        "fov": 1.3746224004475431
      },
      "linkHotspots": [
        {
          "yaw": -1.7129415637259342,
          "pitch": 0.11298009140028498,
          "rotation": 0,
          "target": "3-hot-well"
        },
        {
          "yaw": -1.2960947358442265,
          "pitch": 0.2433613708186222,
          "rotation": 1.5707963267948966,
          "target": "1-pilot-plant"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4529600520000514,
          "pitch": -0.23623927311767545,
          "title": "Storage Tanks",
          "text": "<span class=\"ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">These three 1000 litre steel storage tanks store cold water for the pilot heat recovery system. Water is pumped from the first tank into the heat exchangers to get heated and then returned to the third tank to start cooling down. These tanks are in use to ensure an independent water system for the pilot heat recovery system so that there are no potential problems with the water supply to the boiler. When a full-scale system will be implemented, the tanks will no longer be used and the feedwater to the boiler will be directly preheated through the heat exchangers in the hot well before being supplied to the boiler.</span>"
        },
        {
          "yaw": -2.958260454848679,
          "pitch": 0.1817363627294366,
          "title": "Left Tank",
          "text": "This tank contains the coldest water of the three and feeds into the hot well."
        },
        {
          "yaw": -2.040859486140695,
          "pitch": 0.1291071071105847,
          "title": "Right Tank",
          "text": "This tank contains the heated water coming out of the hot well heat exchangers. In the fully integrated system, this water would go directly into the boiler."
        },
        {
          "yaw": 2.846083500459412,
          "pitch": 0.35935731532151216,
          "title": "Pumps",
          "text": "These pumps recirculate the water from the tanks to the hot well."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
