import React from 'react';
import { Typography, Container, Box} from '@mui/material';

const app = express(); 
const knex = require('knex');

function VisitorPage() {
    return (
        <Container style={{ marginTop: '40px' }}>

            {/* Welcome Message */}
            <Box mb={5} textAlign="center">
                <Typography variant="h2">Welcome Visitor!
                    <div></div>Here is a list of the current inventory.</Typography>
            </Box>
        </Container>
    );
}

function getAllInventory(item_tablename){
    return knex.select()
    .from("item_table")
  }
  
  app.get('/migrations/:item_tablename', function(req, res) {
    getAllInventory(req.params.item_tablename) 
      .then(data => res.status(200).json(data))
      .catch(err => 
        res.status(404).json({
          message:
            'Inventory not available'
        })
      );
  });
export default VisitorPage;