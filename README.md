# Annotated Articles Generator 

A simple CMS to prototype creating "annotated text articles" from live tv `subtitles`/`captions`.

<!-- TODO: Add image previewing article  -->

Inspired by [SRCCON'17 workshop 'Hands on: Live fact checking TV speeches in your google docs!'](https://pietropassarelli.gitbooks.io/opened-captions-for-annotated-articles/)
And originally developed for Buenos Aires Media Party Hacks/Hackers workshop. 

Builds on from the [Opened Captions Annotated article system](http://pietropassarelli.com/opened-captions-annotated-article-rig.html) a rig to make an annotated article leveraging live tv captions, like NPR, Vox and the FT, using google docs. 

This version uses an open source editor to remove the google doc dependency.

<!-- [BBC Annotated article  R&D](
https://docs.google.com/document/d/1gyyxjsDVmL0Pn_0XbiAIgmSMqRERNiU2n2bEf_hkc9g/edit#) -->

<!-- TODO: image of CMS -->

### Worksop description

>True or false?: Major political events are regularly covered on live TV, and all of them feature speakers with an agenda.
>
>When the lens of public attention shines on politicians it is important for journalists to be able to contextualise their messages as quickly and effectively as possible.
>
>During this session we will teach participants about open source tools that are being used today by live fact checkers to create annotated transcripts. 
>
>They will learn about how Vox, NPR, and the Financial Times deal with this process. As well as a brand new tool that can be used to annotate and generate these article ready for publication and without having to write a single line of code.
>
>This is an hands on session, drawing on experience from SRCCON '17.


## Setup
_stack - optional_
_How to build and run the code/app_

`clone`, `cd`, `npm install`.
 

## Usage

```
npm start
```

visit [http://localhost:8001/index.html](http://localhost:8001/index.html)


<!-- in settings
`Channel Name`: BBC24

And in `Channel Streaming URL`: http://127.0.0.1:8002


https://openedcaptions.com:443
http://openedcaptions.media.mit.edu:8080
http://openedcaptions.media.mit.edu:8082

---
openedcaptions.media.mit.edu:8080  has CNN http://openedcaptions.media.mit.edu:8081  has MSNBC http://openedcaptions.media.mit.edu:8082  has Fox (I don't know if Fox is Fox news or not at this point)
 -->


### Working Demo 

Otherwise navigate to [the working demo page](http://pietropassarelli.com/annotated_article_generator/)

Note that only US channels coming from `openedcaptions.com` will be working in that page, eg C-Span. For BBC channels you need to deploy on a server, as it has a slightly different setup under the hood.

### Multimedia 

#### Images
if you add an image, it is encoded in base64 and stored inside the document HTML code, so need for server side extra storage.

#### Video
Videos are added as links, so you need to host them somewhere else 


### Multi user collaboration 

Use together Js. 

<!-- ## Advanced feature

It is possible to integrate with a live stream of captions from services such as [opened captions](http://www.openedcaptions.com) -->

## System Architecture

_High level overview of system architecture_

The server uses the [BBC `MQTT` Captions](https://docs.google.com/document/d/1Ou-uDr1a3pOGSVEHvXeFb15QzD5--rMiOohT9R38oL4/edit) and converts it to a socket connection. As `mqtt` are not available client side unless they are served through socket. 

Socket connection is running on port `http://localhost:8002`

Client uses [`quilljs`](https://quilljs.com/) as text editor and when clicking start button starts adding text from live tv subtitles into it.

<!-- _Note: might be worth reaching out to the dev behind the BBC MQTT, and see if he can do this, to simply things_ -->


## Development env
_How to run the development environment_
_Coding style convention ref optional, eg which linter to use_
_Linting, github pre-push hook - optional_

- node
- npm 
 

## Build
_How to run build_

No build steps needed.
 

## Tests
_How to carry out tests_

NA
 

## Deployment
_How to deploy the code/app into test/staging/production_

Because of the presence of the server 'backend' you'll need to deploy on a server eg EC2 instance.

<!-- ## TODO

- [ ] Add support for more BBC and US channels 
 
 see if need to change server to switch connection or just stream all connections?

Add more options in stream settings. hard code configs.
  -->

# Contributor 

- [Pietro](http://twitter.com/pietropassarell)
