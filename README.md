InstaTag
======
A web app to slideshow the latest photos from Instagram with a specific tag

## Configuration
In order to this web app to work, it is necessary to specify an `Access token` and a `tag`. This access token can be obtained using the access_token script available with this app. 

### Access token and tag
This is the line that is necessary to modify to include the access token and the tag. This line is contained in the main.js file.

``` javascript
var url = 'https://api.instagram.com/v1/tags/<TAG>/media/recent?access_token=<ACCESS_TOKEN>';
```
