//this part is for the secoud assignment//
function twitter(threads) {
    console.log(`${threads.tweet} Name: ${threads.username} Age: ${threads.age}` );
    if (threads.age < 18)
console.log("user is not old enough");
}

var tweets = [
    {
        tweet: "kinda rude when I spend money and it actually leaves my bank account but ok",
        username : "John",
        createdAt : "04-25-2022",
        age: 22
    },
    
    {
        tweet: "Does anyone else get the random urges at midnight to get their life together lol",
        username : "Jona",
        createdAt : "07-25-2022",
        age: 28
    },
    {
        tweet: "I was having problems with my work computer so I called my IT guy and he was like, 'You really need to stop calling me when Im at school, Mom.",
        username : "Jennifer",
        createdAt : "09-22-2022",
        age: 40
    },
    {
        tweet: "I don't think it's a coincidence that diet has the word die in it.",
        username : "Joanna",
        createdAt : "03-21-2022",
        age: 26
    },
    
    {
        tweet: "My dog sighs a lot for somebody who doesn't contribute to this house or know what a government is",
        username : "Jane",
        createdAt : "09-25-2022",
        age: 31
    },
    {
        tweet: "It's called the weekend yet weeks keep happening lol",
        username : "Josh",
        createdAt : "03-20-2022",
        age: 24
    },
    {
        tweet: "I've been alive 20 years and still haven't found the right thing to say when someone knocks on the door of the public bathroom you're in.",
        username : "Jessie",
        createdAt : "10-29-2022",
        age: 27
    },
    
    {
        tweet: "You ever accidentally make eye contact with someone 10 + times?",
        username : "Jonny",
        createdAt : "11-25-2022",
        age: 29
    },
    {
        tweet: "When you're both typing so you erase the message to let them speak first, but they do the same thing lol.",
        username : "Jacob",
        createdAt : "08-25-2022",
        age: 25
    },
    {
        tweet: "I need less stress and I need more fries",
        username : "Jay",
        createdAt : "02-25-2022",
        age: 17
    },

]


    for (let i = 0; i< tweets.length; i++){
        var curTweet = tweets [i];
        twitter(curTweet);
    }