import React from "react";
import BlogContent from "../../pages/BlogContent/BlogContent";

const Blog = () => {
  return (
    <section>
      <BlogContent
        title="What is cros?"
        description="CROS means Cross-Origin Resource Sharing. CROS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API. For example, if you had your web API on one server and your web app on another you could configure CORS in your Web API to allow your web app to make calls to your web API."
      />

      <BlogContent
        title="Why are you using firebase? What other options do you have to implement authentication?"
        description="Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.Firebase provides a number of ways to sign users into your application, from anonymous users, password authentication, phone authentication and using OAuth/social providers."
      />

      <BlogContent
        title="How does the private route work?"
        description="The private route component is used to protect selected pages in a React app from unauthenticated users.Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition"
      />

      <BlogContent
        title="What is Node? How does Node work?"
        description="What is node and how it works?
              Image result for What is Node? How does Node work?
              It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.Node allows us to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications."
      />
    </section>
  );
};

export default Blog;
