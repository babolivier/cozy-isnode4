var fs = require('fs');
var express = require('express');
var app = express();

var port = process.env.PORT || 4444

var nopeStrs = [
    "we hadn't watched the latest Game of Thrones episode, and that's top priority in our roadmap",
    "we were too busy riding our cozies unicorns",
    "ninjas and lasers and sh*t",
    "we were too busy petting Clochix",
    "we took a holiday and went play golf on the moon",
    "we just didn't want to",
    "you're not seeing us rolling, but you're still hating",
    "it went on a spiritual journey to the sky and its cloudy siblings to finally find its true self",
    "a panda told us not to do it. Never say no to a panda",
    "we played too much Final Fantasy VII and didn't know which Cloud to upgrade anymore",
    "Nicolas is too busy signing business cards",
    "we took a look at the latest photos you uploaded on it, and were very disappointed",
    "we were too busy trying an awesome app using the latest Node.js 4 features. But you can't do that. You don't have Node.js 4 yet",
    "your mom called, and she wants you to stop harrassing me for this",
    "we were too busy trying to fix Emails",
    "we enabled 2FA and got locked out of our infra",
    "we were trying to understand how to tag a single task in tasky",
    "it's not free. If it's free, you're the product",
    "somebody asked us whether cozy is multi users",
    "today is a public holiday, somewhere in the world",
    "49.3 aka I-told-you-so-in-your-face, that's why",
    "we were quite busy playing with owncloud",
    "somebody in the infra team has had a bad hangover. AGAIN",
    "why not? Seriously"
];

var htmlHead = '<!DOCTYPE html><html><head><title>Is your Cozy Node.js 4 ready?</title><link rel="stylesheet" href="style"></head><body><div id="content">';
var htmlFoot = '</div></body></html>'

function checkVersion() {
    var finalStr = "";
    var majorNumber = process.version.match(/^v[0-9]+/)[0];

    // Stripping the "v"
    majorNumber = majorNumber.substr(1, majorNumber.length);

    var isNode4 = (majorNumber >= 4);

    if (isNode4) {
        finalStr = "Yes! Your Cozy has been upgraded to Node.js 4! \\o/";
    } else {
        finalStr = "Sorry, we haven't upgraded your Cozy to Node.js 4 yet, because " + nopeStrs[Math.floor(Math.random()*nopeStrs.length)] + ".";
    }

    return finalStr;
}

app.get("/style", function(req, res) {
    res.status(200).sendFile(__dirname + "/style.css");
});

app.get("/", function(req, res) {
    res.status(200).send(htmlHead + "<h1>" + checkVersion() + "</h1>" + htmlFoot);
});

app.listen(port, function() {
    console.log("Ready to check.");
});
