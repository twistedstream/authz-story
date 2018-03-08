# Chapter 2: More Than One User

Business at Example Inc. has picked up! There are now more projects than Julie can handle on her own, so the owners decide to hire another project manager: **Bob**. And with more than one PM managing projects, Julie’s simple project list application needs to change as well, so that she and Bob can manage their own projects. 

Enter: [Access Control](../terms.md#access-control)!

![](./diagram-01.png)

To implement this in a simple way, Julie modifies [server.js](./server.js) to require that the client pass user credentials (username/password) via HTTP [Basic Authentication](https://tools.ietf.org/html/rfc7617). The access control logic then validates the credentials against a local [user.json](./user.json) file and returns only the projects owned by the authenticated user.

Now when the [old client](../01-a-simple-resource-server/client.js) attempts to access the list of projects, an error is returned since no authentication is provided:

```sh
$ node client.js
ERROR: 401 - "Authenticaion required!"
```

You can see the HTTP response in more detail using cURL:

```sh
$ curl -i http://localhost:5000/projects
HTTP/1.1 401 Unauthorized
X-Powered-By: Express
WWW-Authenticate: Basic realm="Example Projects"
Content-Type: text/html; charset=utf-8
Content-Length: 23
ETag: W/"17-aCgQ3oG3a2vYjL7XV0dp8drclP4"
Date: Thu, 08 Mar 2018 00:17:43 GMT
Connection: keep-alive

Authentication required
```

The new [client.js](./client.js) therefore needs to be modified to collect user credentials before making the call to the resource server. Julie makes this change and now Bob is able to fetch only his projects:

```sh
$ node client.js
Username: bob
Password:
Projects:
 [ { name: 'Baz, Inc.', owner: 'bob' } ]
```
