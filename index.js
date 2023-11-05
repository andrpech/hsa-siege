const express = require('express');
const { PrismaClient } = require('@prisma/client');

const path = require("path");
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/store', async (req, res) => {

    try {
        const data = req.body;

        console.log(data)

        const result = await prisma.character.create({data: {
                name: data.name,
                height: data.height,
                mass: data.mass,
                hairColor:data.hair_color,
                skinColor: data.skin_color,
                eyeColor: data.eye_color,
                birthYear: data.birth_year,
                gender: data.gender,
                homeworld: data.homeworld,
                films: data.films,
                species: data.species,
                vehicles: data.vehicles,
                starships: data.starships,
                created: data.created,
                edited: data.edited,
                url: data.url
            }})

        res.status(200).json({ message: 'Data stored successfully', data: result });
    } catch (error){
        console.log(error.message)
        res.status(500).json({error: error.message})
    }

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


