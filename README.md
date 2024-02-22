This repo documents my testing practice for 'The internet'.

## What is 'The internet'?

'[The internet](https://github.com/saucelabs/the-internet)' is a website created by SauceLabs:

> An example application that captures prominent and ugly functionality found on the web. Perfect for writing automated acceptance tests against.

The page consists of one home page which is a list of links. Each link goes to a subpage which demonstrates the behaviour e.g. A/B testing, Basic Auth, Broken Images. At the time of writing, I am using the Docker version 'The Internet 0.58.0'.

## What is the test mission?

Audience (personas):

1. testers new to automation, learning a new tool or framework
2. testers experienced with automation, learning/brushing up on a new tool or framework
3. testers practising their exploratory skills

Since the main purpose of this site is a 'tester's playground', I'd say the risks (impact in brackets) are:

1. The website breaks down (the tester cannot do their testing)
2. The website does not work on a specific browser (the tester cannot do their testing)
3. There is no clear description for a specific page (the tester is confused and cannot do their testing)

Based on the risks above, my test mission will consist of checking:

- The website has a fairly fast response (I'd say within 5-10 seconds)
- The website does not contain broken links
- Each of the subpages makes sense to the tester
  - What is the point of this page?
  - What can I test and not test on this page?

# Test Approach

- For automated checks, I have decided to learn and practise playwright
