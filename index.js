const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 5000
const app = express()

// middleware

app.use(cors())
app.use(express.json())



async function run () {
    try {
        
    }
    finally{

    }
}
run().catch(console.log)

app.get('/',async (req,res) =>{
    res.send('shopping portal server is running')
})

app.listen(port, () => console.log(`shopping portal is running on ${port}`))

