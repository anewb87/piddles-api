const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors())
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Piddles Info';

app.locals.archesToilets = [
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
    { id: 11, location: 'Devil\'s Garden Trailhead', type: 'pit' },
]

app.locals.bryceToilets = [
    { id: 1, location: 'Visitor Center', type: 'flush' },
    { id: 2, location: 'Farview Point', type: 'pit' },
    { id: 3, location: 'Rainbow Point', type: 'pit' },
    { id: 4, location: 'Mossy Cave Trail', type: 'pit' },
]

app.locals.canyonToilets = [
    { id: 1, location: 'Island in the Sky Visitor Center', region: 'Island in the Sky', type: 'flush' },
    { id: 2, location: 'Upheaval Dome', region: 'Island in the Sky', type: 'pit' },
    { id: 3, location: 'Mesa Arch', region: 'Island in the Sky', type: 'pit' },
    { id: 4, location: 'Green River Overlook', region: 'Island in the Sky', type: 'pit' },
    { id: 5, location: 'Grand View Point Overlook', region: 'Island in the Sky', type: 'pit' },
    { id: 6, location: 'The Needles Visitor Center', region: 'The Needles District', type: 'flush' },
    { id: 7, location: 'Elephant Hill', region: 'The Needles District', type: 'pit' },
    { id: 8, location: 'Canyonlands Campground', region: 'The Needles District', type: 'flush' },
]

app.locals.capreefToilets = [
    { id: 1, location: 'Visitor Center', type: 'flush' },
    { id: 2, location: 'Chimney Rock Trailhead', type: 'pit' },
    { id: 3, location: 'Rim Overlook Trailhead', type: 'pit' },
    { id: 4, location: 'Picnic Area', type: 'pit' },
    { id: 5, location: 'Amphitheater', type: 'flush' },
    { id: 6, location: 'Grand Wash Road Pullout', type: 'pit' },
    { id: 7, location: 'End of Scenic Drive Road Pullout', type: 'pit' },
    { id: 8, location: 'Capitol Gorge Road Pullout', type: 'pit' },
]

app.locals.zionToilets = [
    { id: 1, location: 'Zion Canyon Visitor Center', type: 'flush' },
    { id: 2, location: 'Zion Human History Museum', type: 'flush' },
    { id: 3, location: 'Zion Lodge', type: 'flush' },
    { id: 4, location: 'The Grotto', type: 'pit' },
    { id: 5, location: 'Weeping Rock', type: 'flush' },
    { id: 6, location: 'Temple of Sinawva', type: 'pit' },
]

app.locals.parkToilets = [
    { id: 1, name: 'Arches Toilets', toilets : [ 
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
        { id: 11, location: 'Devil\'s Garden Trailhead', type: 'pit' }]
    },

    { id: 2, name: 'Bryce Canyon Toilets', toilets : [
        { id: 1, location: 'Visitor Center', type: 'flush' },
        { id: 2, location: 'Farview Point', type: 'pit' },
        { id: 3, location: 'Rainbow Point', type: 'pit' },
        { id: 4, location: 'Mossy Cave Trail', type: 'pit' }]
    },

    { id: 3, name: 'Canyonlands Toilets', toilets : [
        { id: 1, location: 'Island in the Sky Visitor Center', region: 'Island in the Sky', type: 'flush' },
        { id: 2, location: 'Upheaval Dome', region: 'Island in the Sky', type: 'pit' },
        { id: 3, location: 'Mesa Arch', region: 'Island in the Sky', type: 'pit' },
        { id: 4, location: 'Green River Overlook', region: 'Island in the Sky', type: 'pit' },
        { id: 5, location: 'Grand View Point Overlook', region: 'Island in the Sky', type: 'pit' },
        { id: 6, location: 'The Needles Visitor Center', region: 'The Needles District', type: 'flush' },
        { id: 7, location: 'Elephant Hill', region: 'The Needles District', type: 'pit' },
        { id: 8, location: 'Canyonlands Campground', region: 'The Needles District', type: 'flush' }]
    },

    { id: 4, name: 'Capitol Reef Toilets', toilets: [
        { id: 1, location: 'Visitor Center', type: 'flush' },
        { id: 2, location: 'Chimney Rock Trailhead', type: 'pit' },
        { id: 3, location: 'Rim Overlook Trailhead', type: 'pit' },
        { id: 4, location: 'Picnic Area', type: 'pit' },
        { id: 5, location: 'Amphitheater', type: 'flush' },
        { id: 6, location: 'Grand Wash Road Pullout', type: 'pit' },
        { id: 7, location: 'End of Scenic Drive Road Pullout', type: 'pit' },
        { id: 8, location: 'Capitol Gorge Road Pullout', type: 'pit' }]
    },

    { id: 5, name: 'Zion Toilets', toilets: [
        { id: 1, location: 'Zion Canyon Visitor Center', type: 'flush' },
        { id: 2, location: 'Zion Human History Museum', type: 'flush' },
        { id: 3, location: 'Zion Lodge', type: 'flush' },
        { id: 4, location: 'The Grotto', type: 'pit' },
        { id: 5, location: 'Weeping Rock', type: 'flush' },
        { id: 6, location: 'Temple of Sinawva', type: 'pit' }]
    },
]

app.get('/', (request, response) => {
    response.send('If you\'re looking for crappy information, here it is! You\'ve found THE API about Utah\'s National Park toilets.');
});

app.get('/api/v1/arch', (request, response) => {
    const arches = app.locals.archesToilets;
    response.json(arches)
});

app.get('/api/v1/brca', (request, response) => {
    const bryce = app.locals.bryceToilets;
    response.json(bryce)
});

app.get('/api/v1/cany', (request, response) => {
    const canyon = app.locals.canyonToilets;
    response.json(canyon)
});

app.get('/api/v1/care', (request, response) => {
    const capreef = app.locals.capreefToilets;
    response.json(capreef)
});

app.get('/api/v1/zion', (request, response) => {
    const zion = app.locals.zionToilets;
    response.json(zion)
});


//OR CAN ALL OF THESE GO INTO ONE CALL LIKE THIS...but I don't think I want that anymore?

app.get('/api/v1/toilets/:id', (request, response) => {
    const { id } = request.params;
    const { parkToilets } = app.locals;
    const findPark = parkToilets.find(park => park.id === parseInt(id))
    
    if(!findPark) {
        return response.status(404).json({
            message: `Sorry, no park information with id ${id}`
        });
    }

    response.status(200).json(findPark)
})

app.get('/api/v1/toilets/', (request, response) => {
    const toilets = app.locals.parkToilets
    console.log('label', toilets[0].id)
    response.status(200).json(toilets)
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});