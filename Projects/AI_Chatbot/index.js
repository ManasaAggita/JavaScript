//Initialize the chatgpt api, and then we are going to prompt a user for a message, and continue the conversation until the user ends the file
import OpenAI from 'openai'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
require('dotenv').config()


//Step1- initialize chatgpt Api
// const OPENAI_SECRET_KEY=process.env.OPENAI_SECRET_KEY
// const configuration = new Configuration({
//     apikey: OPENAI_SECRET_KEY
// })
const openai = new OpenAI({
    apiKey: OPENAI_SECRET_KEY

})
//Step 2- create a context for the api (give it some personality)
const context = 'You are a friendly, kind and funny  person who identifies as a girl. You love good yummy food. Your name is Monica'
const model = 'gpt-3.5-turbo'
let messages=[{
    'role':'user',
    "content":'tell me a joke'

}]


// step 3 - define the function to retrieve the api message based on user input
async function sendPrompt(input){
    const current_messages=[{
        "role":"system",
        "content":context
    },
    ...messages
]
const completion = await openai.chat.completions.create({
    model,
    messages: current_messages
})
console.log(completion)
}

//Step 4 - Create a run function that requests user input
async function run(){
    await sendPrompt()
}
run()

