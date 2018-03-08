# Chapter 1:  Simple Resource Server

Our story begins like many applications do: with a small company. **Example, Inc**. provides project management services for other small businesses. They've only been in business themselves for a short time and have just a handful of projects and just one actual project manager: **Julie**. So she can keep track of all the projects she’s working on, Julie decides to create an internal website that she and other employees can use to view the current list of projects.  The website uses no access control since all projects are managed be her; it simply provides a list of all the projects to anyone that requests it.

To keep our example simple (and easy to evolve), we'll represent Julie’s web application as a command line [client](../terms.md#client) which calls a [resource server](../terms.md#resource-server) that is an HTTP REST service that returns the project list [resource](../terms.md#resource) in JSON format:

![](./diagram-01.png)

We’re using Node.js and JavaScript to build our example, and for now we just have a simple [server.js](./server.js) for the Resource Server and [client.js](./client.js) for the Client. The Resource Server loads the list of projects via a local [projects.json](./projects.json) file.

We can start the Resource Server:

```sh
$ node server.js
Resource Server listening on port 5000
```

And run the Client, which calls the Resource Server and displays all the projects:

```sh
$ node client.js
Projects:
 [ { name: 'Foo, Inc.' }, { name: 'Bar, Inc.' } ]
```

## Next

[Chapter 2: More Than One User](../02-more-than-one-user)
