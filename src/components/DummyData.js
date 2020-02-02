const shelters = [
    {
        "name":               "Not\u00fcbernachtung I",
        "current_language":   "de-de",
        "description":        "<ul>\r\n<li>Einlass von 21:00 bis 21:30 Uhr und 23-4 Uhr</li>\r\n<li>125 Schlafpl&auml;tze</li>\r\n<li>soziale Beratung von Mo bis Fr ab 07:00 Uhr</li>\r\n<li>medizinische Betreuung von Mo bis Fr, 21:00 bis 24:00 Uhr</li>\r\n</ul>",
        "short_description":  "Not\u00fcbernachtung I der Berliner Stadtmission",
        "opening_hours":      {"from": "21:00:00", "to": "21:30:00"},
        "address":            {
            "street": "Lehrter Stra\u00dfe 68",
            "plz":    "10557",
            "city":   "Berlin",
            "geo":    {
                "lat":  52.521091,
                "long": 13.367982
            }
        },
        "phone":              {"home": "(030) 690 33", "mobile": ""},
        "sanitary_amenities": {"wc": true, "shower": true},
        "rules":              {
            "animals":                            true,
            "shelter_seeking_person_intoxicated": false,
            "female_only":                        false,
            "families_welcome":                   false,
            "male_only":                          false,
            "kids_welcome":                       false
        },
        "spoken_languages":   [{
            "translated": "Deutsch",
            "code":       "de-de",
            "native":     "Deutsch"
        }, {"translated": "Englisch", "code": "en-us", "native": "English"}],
        "institution":        {"slug": "berliner-stadtmission", "name": "Berliner Stadtmission", "thumbnail": ""},
        "beds":               [
            {
                "target_group":  "female_only",
                "num_beds":      20,
                "num_free_beds": 10
            },
            {
                "target_group":  "families",
                "num_beds":      10,
                "num_free_beds": 2
            },
            {
                "target_group":  "intoxicated",
                "num_beds":      2,
                "num_free_beds": 0
            }
        ]
    },
    {
        "name":               "Not\u00fcbernachtung II",
        "current_language":   "de-de",
        "description":        "<p>Die Not&uuml;bernachtung in der Kopenhagener Stra&szlig;e gew&auml;hrt 52 G&auml;sten einen Schlafplatz.</p>\r\n<p>&nbsp;</p>\r\n<p>E-Mail: <a class=\"email\" title=\"E-Mail schreiben\" href=\"mailto:neugebauer@berliner-stadtmission.de\">neugebauer(at)berliner-stadtmission.de</a></p>",
        "short_description":  "Not\u00fcbernachtung II der Berliner Stadtmission",
        "opening_hours":      {"from": "21:00:00", "to": "00:00:00"},
        "address":            {
            "street": "Kopenhagener Str. 29",
            "plz":    "13407",
            "city":   "Berlin",
            "geo":    {
                "lat":  52.543091,
                "long": 13.364982
            }
        },
        "phone":              {"home": "030/690 33-4", "mobile": ""},
        "sanitary_amenities": {"wc": true, "shower": true},
        "rules":              {
            "animals":                            true,
            "shelter_seeking_person_intoxicated": false,
            "female_only":                        false,
            "families_welcome":                   false,
            "male_only":                          false,
            "kids_welcome":                       false
        },
        "spoken_languages":   [{
            "translated": "Deutsch",
            "code":       "de-de",
            "native":     "Deutsch"
        }, {"translated": "Englisch", "code": "en-us", "native": "English"}],
        "institution":        {"slug": "berliner-stadtmission", "name": "Berliner Stadtmission", "thumbnail": ""},
        "beds":               [
            {
                "target_group":  "female_only",
                "num_beds":      20,
                "num_free_beds": 5
            },
            {
                "target_group":  "families",
                "num_beds":      10,
                "num_free_beds": 10
            },
            {
                "target_group":  "intoxicated",
                "num_beds":      2,
                "num_free_beds": 1
            }
        ]
    },
    {
        "name":               "Not\u00fcbernachtung III",
        "current_language":   "de-de",
        "description":        "<ul>\r\n<li>Am Containerbahnhof 1 (hinter dem Ring-Center Frankfurter Allee)<br />10367 Berlin</li>\r\n<li>Einlass ab 20 Uhr</li>\r\n<li>120 Schlafpl&auml;tze</li>\r\n<li>f&uuml;r Frauen (24 Pl&auml;tze) und M&auml;nner (96 Pl&auml;tze)</li>\r\n<li>Haustiere erlaubt</li>\r\n<li>ge&ouml;ffnet bis 27.04.2019</li>\r\n<li>4-5 mal w&ouml;chentlich soziale Beratung</li>\r\n<li>3 mal w&ouml;chentlich medizinische Betreuung</li>\r\n</ul>",
        "short_description":  "Not\u00fcbernachtung III der Berliner Stadtmission",
        "opening_hours":      {"from": "20:00:00", "to": "00:00:00"},
        "address":            {
            "street": "Am Containerbahnhof hinter dem Ring-Center (Frankfurter Allee)",
            "plz":    "10365",
            "city":   "Berlin",
            "geo":    {
                "lat":  52.541091,
                "long": 13.347982
            }
        },
        "phone":              {"home": "", "mobile": ""},
        "sanitary_amenities": {"wc": true, "shower": true},
        "rules":              {
            "animals":                            false,
            "shelter_seeking_person_intoxicated": false,
            "female_only":                        false,
            "families_welcome":                   false,
            "male_only":                          false,
            "kids_welcome":                       true
        },
        "spoken_languages":   [{
            "translated": "Deutsch",
            "code":       "de-de",
            "native":     "Deutsch"
        }, {"translated": "Englisch", "code": "en-us", "native": "English"}],
        "institution":        {"slug": "berliner-stadtmission", "name": "Berliner Stadtmission", "thumbnail": ""},
        "beds":               [
            {
                "target_group":  "male_only",
                "num_beds":      20,
                "num_free_beds": 10
            },
            {
                "target_group":  "families",
                "num_beds":      10,
                "num_free_beds": 2
            },
            {
                "target_group":  "intoxicated",
                "num_beds":      2,
                "num_free_beds": 0
            }
        ]
    }];

export default shelters;
