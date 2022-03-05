const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors())
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Piddles Info';

// app.locals.archesToilets = {
//     toilets: [
//     { id: 1, location: 'Devil\'s Garden Trailhead', type: 'pit' },
//     { id: 2, location: 'Devil\'s Garden Campground', type: 'flush' },
//     { id: 3, location: 'Sand Dune Arch', type: 'pit' },
//     { id: 4, location: 'Fiery Furnace Viewpoint', type: 'pit' },
//     { id: 5, location: 'Wolfe Rach', type: 'flush' },
//     { id: 6, location: 'Delicate Arch Trailhead', type: 'pit' },
//     { id: 7, location: 'Panorama Point', type: 'pit' },
//     { id: 8, location: 'Balanced Rock', type: 'pit' },
//     { id: 9, location: 'Double Arch Trailhead', type: 'pit' },
//     { id: 10, location: 'Windows Trailhead', type: 'pit' },
//     { id: 11, location: 'Visitor Center', type: 'flush' }
//     ],
//     map: 'https://i.postimg.cc/y8N3rT9S/arch.png'
// }

// app.locals.bryceToilets = {
//     toilets: [
//     { id: 1, location: 'Mossy Cave Trail', type: 'pit' },
//     { id: 2, location: 'Visitor Center', type: 'flush' },
//     { id: 3, location: 'Farview Point', type: 'pit' },
//     { id: 4, location: 'Rainbow Point', type: 'pit' }
//     ], 
//     map: 'https://i.postimg.cc/kghRrtFY/brca.png'
// }

// app.locals.canyonToilets = {
//     toilets: [
//     { id: 1, location: 'Island in the Sky Visitor Center', region: 'Island in the Sky', type: 'flush' },
//     { id: 2, location: 'Upheaval Dome', region: 'Island in the Sky', type: 'pit' },
//     { id: 3, location: 'Mesa Arch', region: 'Island in the Sky', type: 'pit' },
//     { id: 4, location: 'Green River Overlook', region: 'Island in the Sky', type: 'pit' },
//     { id: 5, location: 'White Rim Overlook', region: 'Island in the Sky', type: 'pit' },
//     { id: 6, location: 'Grand View Point Overlook', region: 'Island in the Sky', type: 'pit' },
//     { id: 7, location: 'The Needles Visitor Center', region: 'The Needles District', type: 'flush' },
//     { id: 8, location: 'Canyonlands Campground', region: 'The Needles District', type: 'flush' },
//     { id: 9, location: 'Elephant Hill', region: 'The Needles District', type: 'pit' },
//     ],
//     map: 'https://i.postimg.cc/bNpt1Pwg/cany.png'
// }

// app.locals.capreefToilets = {
//     toilets: [
//     { id: 1, location: 'Chimney Rock Trailhead', type: 'pit' },
//     { id: 2, location: 'Visitor Center', type: 'flush' },
//     { id: 3, location: 'Picnic Area', type: 'pit' },
//     { id: 4, location: 'Amphitheater', type: 'flush' },
//     { id: 5, location: 'Rim Overlook Trailhead', type: 'pit' },
//     { id: 6, location: 'Grand Wash Road Pullout', type: 'pit' },
//     { id: 7, location: 'End of Scenic Drive Road Pullout', type: 'pit' },
//     { id: 8, location: 'Capitol Gorge Road Pullout', type: 'pit' }
//     ],
//     map: 'https://i.postimg.cc/prY53GqK/care.png'
// }

// app.locals.zionToilets = {
//     toilets: [
//     { id: 1, location: 'Temple of Sinawva', type: 'pit' },
//     { id: 2, location: 'Weeping Rock', type: 'flush' },
//     { id: 3, location: 'The Grotto', type: 'pit' },
//     { id: 4, location: 'Zion Lodge', type: 'flush' },
//     { id: 5, location: 'Zion Human History Museum', type: 'flush' },
//     { id: 6, location: 'Zion Canyon Visitor Center', type: 'flush' },
//     ],
//     map: 'https://i.postimg.cc/sDmZcLBr/zion.png'
// }

app.locals.parkToilets = [
    {
        id: 'arch', name: 'Arches Toilets', map: 'https://i.postimg.cc/y8N3rT9S/arch.png', toilets : [ 
        { id: 1, location: 'Visitor Center', type: 'flush' },
        { id: 2, location: 'Balanced Rock', type: 'pit' },
        { id: 3, location: 'Double Arch Trailhead', type: 'pit' },
        { id: 4, location: 'Windows Trailhead', type: 'pit' },
        { id: 5, location: 'Panorama Point', type: 'pit' },
        { id: 6, location: 'Wolfe Rach', type: 'flush' },
        { id: 7, location: 'Delicate Arch Trailhead', type: 'pit' },
        { id: 8, location: 'Fiery Furnace Viewpoint', type: 'pit' },
        { id: 9, location: 'Sand Dune Arch', type: 'pit' },
        { id: 10, location: 'Devil\'s Garden Campground', type: 'flush' },
        { id: 11, location: 'Devil\'s Garden Trailhead', type: 'pit' }],
    },

    {
        id: 'brca', name: 'Bryce Canyon Toilets', map: 'https://i.postimg.cc/kghRrtFY/brca.png', toilets : [
        { id: 1, location: 'Visitor Center', type: 'flush' },
        { id: 2, location: 'Farview Point', type: 'pit' },
        { id: 3, location: 'Rainbow Point', type: 'pit' },
        { id: 4, location: 'Mossy Cave Trail', type: 'pit' }]
    },

    {
        id: 'cany', name: 'Canyonlands Toilets', map: 'https://i.postimg.cc/bNpt1Pwg/cany.png', toilets : [
        { id: 1, location: 'Island in the Sky Visitor Center', region: 'Island in the Sky', type: 'flush' },
        { id: 2, location: 'Upheaval Dome', region: 'Island in the Sky', type: 'pit' },
        { id: 3, location: 'Mesa Arch', region: 'Island in the Sky', type: 'pit' },
        { id: 4, location: 'Green River Overlook', region: 'Island in the Sky', type: 'pit' },
        { id: 5, location: 'Grand View Point Overlook', region: 'Island in the Sky', type: 'pit' },
        { id: 6, location: 'The Needles Visitor Center', region: 'The Needles District', type: 'flush' },
        { id: 7, location: 'Elephant Hill', region: 'The Needles District', type: 'pit' },
        { id: 8, location: 'Canyonlands Campground', region: 'The Needles District', type: 'flush' }]
    },

    {
        id: 'care', name: 'Capitol Reef Toilets', map: 'https://i.postimg.cc/prY53GqK/care.png', toilets: [
        { id: 1, location: 'Visitor Center', type: 'flush' },
        { id: 2, location: 'Chimney Rock Trailhead', type: 'pit' },
        { id: 3, location: 'Rim Overlook Trailhead', type: 'pit' },
        { id: 4, location: 'Picnic Area', type: 'pit' },
        { id: 5, location: 'Amphitheater', type: 'flush' },
        { id: 6, location: 'Grand Wash Road Pullout', type: 'pit' },
        { id: 7, location: 'End of Scenic Drive Road Pullout', type: 'pit' },
        { id: 8, location: 'Capitol Gorge Road Pullout', type: 'pit' }]
    },

    {
        id: 'zion', name: 'Zion Toilets', map: 'https://i.postimg.cc/sDmZcLBr/zion.png', toilets: [
        { id: 1, location: 'Zion Canyon Visitor Center', type: 'flush' },
        { id: 2, location: 'Zion Human History Museum', type: 'flush' },
        { id: 3, location: 'Zion Lodge', type: 'flush' },
        { id: 4, location: 'The Grotto', type: 'pit' },
        { id: 5, location: 'Weeping Rock', type: 'flush' },
        { id: 6, location: 'Temple of Sinawva', type: 'pit' }]
    },
]

app.locals.reviews = []

app.get('/', (request, response) => {
    response.send('If you\'re looking for crappy information, here it is! You\'ve found THE API about Utah\'s National Park toilets.');
});


app.get('/api/v1/toilets/:id', (request, response) => {
    const { id } = request.params;
    const parkToilets = app.locals.parkToilets;
    const findPark = parkToilets.find(park => park.id === id)
    
    if(!findPark) {
        return response.status(404).json({
            message: `Sorry, no park information with id ${id}`
        });
    }

    response.status(200).json(findPark)
});

app.get('/api/v1/toilets/', (request, response) => {
    const toilets = app.locals.parkToilets
    response.status(200).json(toilets)
});

app.get('/api/v1/reviews', (request, response) => {
    const reviews = app.locals.reviews
    response.status(200).json(reviews)
})

app.post('/api/v1/reviews', (request, response) => {
    const { id, location, type } = request.body;

    if (!id || !location || !type) {
        return response.status(422).json({
            error: `Expected format {id: <Number>, location: <String>, type: <String>}`
        })
    }

    const newRating = { id, location, type };
    app.locals.reviews = [...app.locals.reviews, newRating];
    return response.status(201).json(newRating);
});

app.delete('/api/v1/revivews', (request, response) => {
    const reviews = app.locals.reviews
    const reviewToDelete = reviews.find(review => review.id === id)

    if(!reviewToDelete) {
        return response.status(404).json({
            message: `No bike safety status found with an id of ${id}.`
        })
    }

    const index = app.locals.reviews.indexOf(reviewToDelete);
    app.locals.reviews.splice(index, 1);

    response.status(200).json({
        message: `Bike safety review has been deleted`
    })

    return app.locals.reviews

});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});



// app.delete()

// app.get('/api/v1/arch', (request, response) => {
//     const arches = app.locals.archesToilets;
//     response.json(arches)
// });

// app.get('/api/v1/brca', (request, response) => {
//     const bryce = app.locals.bryceToilets;
//     response.json(bryce)
// });

// app.get('/api/v1/cany', (request, response) => {
//     const canyon = app.locals.canyonToilets;
//     response.json(canyon)
// });

// app.get('/api/v1/care', (request, response) => {
//     const capreef = app.locals.capreefToilets;
//     response.json(capreef)
// });

// app.get('/api/v1/zion', (request, response) => {
//     const zion = app.locals.zionToilets;
//     response.json(zion)
// });