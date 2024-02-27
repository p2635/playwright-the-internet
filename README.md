<img width="600" alt="image of a website called the internet" src="https://github.com/p2635/playwright-the-internet/assets/4522927/f00d2e25-58c8-48fa-92cd-3f8dd8878635">

This repo documents my testing practice for 'The internet'.

## What is 'The internet'?

'[The internet](https://github.com/saucelabs/the-internet)' is a website created by SauceLabs:

> An example application that captures prominent and ugly functionality found on the web. Perfect for writing automated acceptance tests against.

The page consists of one home page which is a list of links. Each link goes to a subpage which demonstrates the behaviour e.g. A/B testing, Basic Auth, Broken Images. At the time of writing, I am using the Docker version 'The Internet 0.58.0'.

## What is the test mission?

Purpose of this site: A 'tester's playground' to practise their skills.

Audience (personas):

1. testers new to automation, learning a new tool or framework
2. testers experienced with automation, learning/brushing up on a new tool or framework
3. testers practising their exploratory skills

Risks (impact in brackets):

1. The website breaks down (the tester cannot do their testing)
2. The website does not work on a specific browser (the tester cannot do their testing)
3. There is no clear description for a specific page (the tester is confused and cannot do their testing)

Based on the list of risks, my test scope consists of checking:

1. The website has a fairly fast response (I'd say within 5-10 seconds)
2. The website does not contain broken links
3. Each of the subpages makes sense to the tester
   1. What is the point of this page?
   2. What can I test and not test on this page?

Bonus ideas:

1. How many people visit the website? Will the traffic affect Risk 1?

# Test Approach

- For automated checks, I have decided to learn and practise playwright

## Test 1 - The website has a fairly fast response (I'd say within 5-10 seconds)

Playwright has a default timeout for each command at 5 seconds. As long as I am writing tests that cover most of the website, this point should be covered already. The only thing that I am not sure about is load testing. I don't have experience in that area. If this was a real project, my first step would be consulting the BA to ask what the usual expected traffic is like on the website.

## Test 2 - Broken links

I can use something like [lychee](https://github.com/lycheeverse/lychee) to do this.
