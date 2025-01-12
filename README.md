# Express.js - req.body undefined despite using express.json()

This repository demonstrates a common issue in Express.js applications where `req.body` remains undefined even after applying `express.json()`.  The problem typically arises from incorrect middleware placement or a missing configuration.

## The Problem

The provided `bug.js` file contains a simple Express.js server designed to accept a JSON POST request. Despite using `express.json()`, the `req.body` object remains undefined, preventing the server from accessing the request data.

## The Solution

The `bugSolution.js` file demonstrates the corrected implementation.  The key lies in ensuring the `express.json()` middleware is positioned correctly within the application's middleware stack, before any routes that expect JSON data.