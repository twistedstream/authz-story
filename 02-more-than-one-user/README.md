# Chapter 2: More Than One User

Business at Example Inc. has picked up! There are now more projects than Julie can handle on her own, so the owners decide to hire another project manager: **Bob**. And with more than one PM managing projects, Julie’s simple project list application needs to change as well, so that she and Bob can manage their own projects. 

Enter: [Access Control](../terms.md#access-control)!

![](./diagram-01.png)

To implement this in a simple way, Julie enhances the resource server to require that the client pass user credentials (username/password) via HTTP [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). The access control logic would then validate the credentials and return just the projects owned by the authenticated user.
