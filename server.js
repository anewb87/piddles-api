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

app.locals.parkToilets = [
    {
        id: 'arch', name: 'Arches Toilets', map: 'https://i.postimg.cc/y8N3rT9S/arch.png', toilets : [ 
        { id: 1, park: 'Arches', location: 'Visitor Center', type: 'flush' },
        { id: 2, park: 'Arches', location: 'Balanced Rock', type: 'pit' },
        { id: 3, park: 'Arches', location: 'Double Arch Trailhead', type: 'pit' },
        { id: 4, park: 'Arches', location: 'Windows Trailhead', type: 'pit' },
        { id: 5, park: 'Arches', location: 'Panorama Point', type: 'pit' },
        { id: 6, park: 'Arches', location: 'Wolfe Rach', type: 'flush' },
        { id: 7, park: 'Arches', location: 'Delicate Arch Trailhead', type: 'pit' },
        { id: 8, park: 'Arches', location: 'Fiery Furnace Viewpoint', type: 'pit' },
        { id: 9, park: 'Arches', location: 'Sand Dune Arch', type: 'pit' },
        { id: 10, park: 'Arches', location: 'Devil\'s Garden Campground', type: 'flush' },
        { id: 11, park: 'Arches', location: 'Devil\'s Garden Trailhead', type: 'pit' }],
    },

    {
        id: 'brca', name: 'Bryce Canyon Toilets', map: 'https://i.postimg.cc/kghRrtFY/brca.png', toilets : [
        { id: 12, park: 'Bryce', location: 'Visitor Center', type: 'flush' },
        { id: 13, park: 'Bryce', location: 'Farview Point', type: 'pit' },
        { id: 14, park: 'Bryce', location: 'Rainbow Point', type: 'pit' },
        { id: 15, park: 'Bryce', location: 'Mossy Cave Trail', type: 'pit' }]
    },

    {
        id: 'cany', name: 'Canyonlands Toilets', map: 'https://i.postimg.cc/bNpt1Pwg/cany.png', toilets : [
        { id: 16, park: 'Canyonlands', location: 'Island in the Sky Visitor Center', region: 'Island in the Sky', type: 'flush' },
        { id: 17, park: 'Canyonlands', location: 'Upheaval Dome', region: 'Island in the Sky', type: 'pit' },
        { id: 18, park: 'Canyonlands', location: 'Mesa Arch', region: 'Island in the Sky', type: 'pit' },
        { id: 19, park: 'Canyonlands', location: 'Green River Overlook', region: 'Island in the Sky', type: 'pit' },
        { id: 20, park: 'Canyonlands', location: 'Grand View Point Overlook', region: 'Island in the Sky', type: 'pit' },
        { id: 21, park: 'Canyonlands', location: 'The Needles Visitor Center', region: 'The Needles District', type: 'flush' },
        { id: 22, park: 'Canyonlands', location: 'Elephant Hill', region: 'The Needles District', type: 'pit' },
        { id: 23, park: 'Canyonlands', location: 'Canyonlands Campground', region: 'The Needles District', type: 'flush' }]
    },

    {
        id: 'care', name: 'Capitol Reef Toilets', map: 'https://i.postimg.cc/prY53GqK/care.png', toilets: [
        { id: 24, park: 'Capitol Reef', location: 'Visitor Center', type: 'flush' },
        { id: 25, park: 'Capitol Reef', location: 'Chimney Rock Trailhead', type: 'pit' },
        { id: 26, park: 'Capitol Reef', location: 'Rim Overlook Trailhead', type: 'pit' },
        { id: 27, park: 'Capitol Reef', location: 'Picnic Area', type: 'pit' },
        { id: 28, park: 'Capitol Reef', location: 'Amphitheater', type: 'flush' },
        { id: 29, park: 'Capitol Reef', location: 'Grand Wash Road Pullout', type: 'pit' },
        { id: 30, park: 'Capitol Reef', location: 'End of Scenic Drive Road Pullout', type: 'pit' },
        { id: 31, park: 'Capitol Reef', location: 'Capitol Gorge Road Pullout', type: 'pit' }]
    },

    {
        id: 'zion', name: 'Zion Toilets', map: 'https://i.postimg.cc/sDmZcLBr/zion.png', toilets: [
        { id: 32, park: 'Zion', location: 'Zion Canyon Visitor Center', type: 'flush' },
        { id: 33, park: 'Zion', location: 'Zion Human History Museum', type: 'flush' },
        { id: 34, park: 'Zion', location: 'Zion Lodge', type: 'flush' },
        { id: 35, park: 'Zion', location: 'The Grotto', type: 'pit' },
        { id: 36, park: 'Zion', location: 'Weeping Rock', type: 'flush' },
        { id: 37, park: 'Zion', location: 'Temple of Sinawva', type: 'pit' }]
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

    if(!app.locals.reviews.includes(newRating)) {
        app.locals.reviews = [...app.locals.reviews, newRating];
        return response.status(201).json(newRating);
    } else {
        return response.status(404).json({
            message: 'Toilet already posted.'
        })
    }
});

app.delete('/api/v1/reviews/:id', (request, response) => {
    const id = request.params.id;
    const reviews = app.locals.reviews;
    const reviewToDelete = reviews.find(review => review.id === parseInt(id));

    if(!reviewToDelete) {
        return response.status(404).json({
            message: `No safe bathroom for bike found with an id of ${id}.`
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
