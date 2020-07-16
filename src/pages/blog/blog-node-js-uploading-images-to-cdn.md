---
path: /blog/node-js-uploading-images-to-cdn/
header: Node.js / Express.js- Uploading images to CDN
lead: Recently I have been working with cloudinary to upload an image to a CDN
  straight from memory after a user has posted it to an endpoint. Unfortunately
  cloudinary has poor documentation for their node.js sdk, hopefully this should
  help.
date: 2020-05-20T07:15:35.366Z
featuredimage: /img/marc-olivier-jodoin-nqoinj-ttqm-unsplash.jpg
---
Caveat: Node.js has a maximum heap limit (it's quite low from memory) , streaming into a file and then streaming to cloudinary maybe the best option to you.
This may not work for you, cloudinary updated their API and apparently v1 of the API is now broken. I will update this post if I have time (you can raise a PR too!)
<hr />

To process files from an endpoint in express, I used multer. It accepts multipart/form-data. It has a key value system for text data and it can be configered in different method for files. I was only accepting a single file with it's key being `photo.`

```javascript
const upload = multer({ storage: multer.memoryStorage() }).single("photo");
```

<hr />

Next we define a promsise for cloudinary.upload_stream, credits to[](https://github.com/darioblanco) [](https://github.com/darioblanco)[darioblanco](https://github.com/darioblanco) for the function below.

```javascript
function uploadStream(fileBuffer, options) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(options, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
      .end(fileBuffer);
  });
}
```

<hr />

Moving on to the part where we upload to cloudinary, note that this is an express.js handler:

```javascript
const addPhoto = (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (req.file.buffer === undefined || req.file.buffer === null) {
      res
        .status(402)
        .json({ error: "multipart form with 'photo' as key was not provided" });
      return;
    }
    uploadStream(req.file.buffer, { public_id: `upload_path_to_image` })
      .then(result => {
        return result.secure_url;
      })
      .then(url => {
        res.status(200).json({ url });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
};
```
