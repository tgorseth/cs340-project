// Controllers for the entry Collection

import express from 'express';
import * as players from '/players';

const PORT = 2077;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/players', (req,res) => { 
    players.createEntry(
        req.body.player_id, 
        req.body.username, 
        req.body.session_id
        )
        .then(entry => {
            console.log(`"${entry.player_id}" was added to the table.`);
            res.status(201).json(entry);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The entry was not added, please try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/players', (req, res) => {
    players.retrieveEntry()
        .then(players => { 
            if (players !== null) {
                console.log(`All players were retrieved.`);
                res.json(players);
            } else {
                res.status(404).json({ Error: 'No players were retrieved, please try again.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The retrieve function did not work correctly. Please verifiy the request and try again.' });
        });
});


// UPDATE controller ************************************
app.put('/players/:_id', (req, res) => {
    players.updateEntry(
        req.params._id, 
        req.body.player_id, 
        req.body.username, 
        req.body.session_id
    )
    .then(entry => {
        console.log(`"${entry.player_id}" was updated.`);
        res.json(entry);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The update function did not work correctly. Please check the request and try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/players/:_id', (req, res) => {
    players.deleteEntryById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} entry was deleted.`);
                res.status(200).send({ Success: 'The request for entry deletion was completed.' });
            } else {
                res.status(404).json({ Error: 'The entry was not found, please try again.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'The delete function by ID did not work correctly.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})