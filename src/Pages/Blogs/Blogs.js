import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')

    return (
        <div>
            <div className='card bg-base-100 shadow-xl my-5 mx-24 p-14'>
                <h2 className='text-3xl'>Difference between SQL and NoSQL</h2>
                <p> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.
                    NoSQL databases need not stick to this format, but generally fit into one of four broad categorie.The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.</p>
            </div>
            <div className='card bg-base-100 shadow-xl my-5 mx-24 p-14'>
                <h2 className='text-3xl'>
                    What is JWT, and how does it work?
                </h2>
                <p>
                    JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
                </p>
            </div>
            <div className='card bg-base-100 shadow-xl my-5 mx-24 p-14'>
                <h2 className='text-3xl'>
                    What is the difference between javascript and NodeJS?
                </h2>
                <p>
                    NodeJS :
                    NodeJS is a Javascript runtime environment.
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                    JavaScript :
                    Javascript is a programming language that is used for writing scripts on the website.

                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance
                </p>
            </div>
            <div className='card bg-base-100 shadow-xl my-5 mx-24 p-14'>
                <h2 className='text-3xl'>
                    How does NodeJS handle multiple requests at the same time?
                </h2>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                </p>
            </div>

        </div>
    );
};

export default Blogs;