const shelters = [
    {
        'name': 'Obdachlosen e.V.',
        'current_language': 'de-de',
        'description': 'Beschreibung inkl. Öffnungszeiten und Kontaktpersonen / E-Mail & Website',
        'short_description': 'Beschreibung in 1-2 Sätzen',
        'address': {
            'street': 'Müllerstraße 30',
            'plz': 13353,
            'city': 'Berlin',
            'geo': {
                'lat': 52.543091,
                'long': 13.364982
            }

        },
        'phone':{
            'mobile': '0160 997865',
            'home':'0160 997865'
        },
        'sanitary_amenities':{
            'wc': true,
            'shower': false
        },
        'rules':{
            'animals': false,
            'shelter_seeking_person_intoxicated': false,
            'female_only': false,
            'families_welcome': false,
            'male_only': false,
            'kids_welcome': true
        },
        'spoken_languages':[
            {
                'translated': 'German',
                'code': 'de-de',
                'native': 'Deutsch'
            },
            {
                'translated': 'English',
                'code': 'en-us',
                'native': 'English'
            }
        ],
        'institution': {
            'slug': 'berliner-stadtmission',
            'name': 'Berliner Stadtmission',
            'thumbnail': 'https://tailwindcss.com/img/card-top.jpg'
        },
        'beds': [
            {
                'target_group': 'female_only',
                'num_beds': 20,
                'num_free_beds': 10
            },
            {
                'target_group': 'families',
                'num_beds': 10,
                'num_free_beds': 2
            },
            {
                'target_group': 'intoxicated',
                'num_beds': 2,
                'num_free_beds': 0
            }
        ]
    },
    {
        'name': 'Test e.V.',
        'description': 'Beschreibung inkl. Öffnungszeiten und Kontaktpersonen / E-Mail & Website',
        'short_description': 'Beschreibung in 1-2 Sätzen',
        'address': {
            'street': 'Siegmunds Hof 20',
            'plz': 13353,
            'city': 'Berlin',
            'geo': {
                'lat': 52.543091,
                'long': 13.364982
            }

        },
        'phone':{
            'mobile': '0160 997865',
            'home':'0160 997865'
        },
        'sanitary_amenities':{
            'wc': true,
            'shower': false
        },
        'rules':{
            'animals': false,
            'shelter_seeking_person_intoxicated': false,
            'female_only': false,
            'families_welcome': false,
            'male_only': false,
            'kids_welcome': true
        },
        'spoken_languages':['English', 'German'],
        'institution': 'church',
        'beds': [
            {
                'target_group': 'female_only',
                'num_beds': 30,
                'num_free_beds': 10
            },
            {
                'target_group': 'families',
                'num_beds': 20,
                'num_free_beds': 2
            },
            {
                'target_group': 'intoxicated',
                'num_beds': 3,
                'num_free_beds': 0
            }
        ]
    }
];

export default shelters;
