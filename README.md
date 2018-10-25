# wiivv-qa
Happy path of checkout flow automation test

This is a acceptance test for the happy path checkout flow. I stop at the payment page since I have no test credit card.
So intead of trying to checkout and getting an error I just validated I was on the page. 

This test was a experiment and first time trying codecept.js and puppeteer. https://codecept.io/quickstart/
Overall I found the framework to be a little lacking in some areas. In most examples there are heavy uses of await or wait and variations on that
I tried to stay away from those as much as possible, but it leaves the test flaky. Their built in page objects didn't work well either.
When they were implemented the test would fail 7/10 times. I left one file and commented out one example just so you can see how it looks.
I didn't see any way of adding custom error messages to asserts with their built in options. 

I had some issues uploading this to github. I had to remove what I thnk was the chrome driver they had since it was too big.
Seems to be a common issue from what I saw online. There is a way around it, but for the sake of this test I think you can just 
run it in headless mode.

Setup was:
`npm install codeceptjs puppeteer`
`./node_modules/.bin/codeceptjs init`
To run tests
`./node_modules/.bin/codeceptjs run --steps`

To run tests in headless mode you may have to go into `codecept.json` and change `show: true` to `show: false`

I apologize, but for the sake of the test I figured it would be goog to get it to you as soon as possible.
