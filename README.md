# NgNdcUi
The objective of this project is to develop an end-to-end proof-of-concept travel shopping & booking website around [IATA NDC](http://ndc.developer.iata.org/). 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

Currently it relies on APIs from [AirGateway](https://dev.airgateway.net/) - in order to run the app you will need to sign up for your own access key . 

Some design/code was inspired from the [AFKL submission at the 2018 Winding Tree Hackathon](https://github.com/windingtree/wt-hackathon/blob/master/submissions/2018/AFKL_submission.md)


## How to install and run
To install: 
 - The basic prerequisites is to install [NodeJS](https://nodejs.org/en/download/). 
 - Afterwards you will need to open up a command-line to install Angular CLI using `npm install -g @angular/cli`
 - For this project, you can download the source code here on Github & unzip it locally. 
 - The packages/dependencies need to be installed using: `npm install`

If you've gotten yourself to here, you're doing good. 


To run:
 - normally Anglular CLI uses `ng serve` for a dev server, then navigates to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Yeah.... but no... .  It will start ok but the search will fail.  If you debug in the browser you will liklely see a `Access-Control-Allow-Origin` error. This is normally for our own good & browser security as it prevents HTML code from maliciously calling unauthorized cross-domain servers.  But this is not very conducive to what we want to accomplish as a POC.  

The workaround was to setup Angular CLI / ng to reroute as a proxy, you can see the setup here in  `proxy.conf.json` 

run it with `ng serve --proxy-config proxy.conf.json --verbose`

The air-shopping flow can be found here: http://localhost:4200/air-shopping


## To do
There are a lot of potential improvements and any suggestions are welcome.  

Below are those under consideration

### UX cleanup
 - 'wait' spinner / status
 - better error messages
 - i18n/l10n
 - better form validation (ie: no past dates), etc.
 - drop-down/as-you-type list of airports
 
### Progress further down the NDC booking flow
Develop out:
 - AirShopping (... DONE :) 
 - OrderCreate 
 - AirDocIssue 
 - OrderView 
 - OrderRetrieve
 - AirDocDisplay 
 - AirlineProfile... eventually use this to pre-fill passenger information ?

### Make API key & URL configurable (vs. hard coded) -- 28 Feb 2019: ongoing
see `src/app.config` & `assets/config.json` \
(inspired from https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/)

### NDC API agnostic
I've checked out some of the other travel API provdiers out there including [IATA's AirTechZone](https://airtechzone.iata.org/toolbox/ndc-sandbox/#howto) as well as [IAG/BA](https://developer.iairgroup.com) & [AF/KL](https://developer.airfranceklm.com).

From the looks of it, the input/output is slighly different, so the idea would be to add a middleware (nodejs?) which would normalize the API between what are otherwise supposed to be standard/normalized implementations.  

