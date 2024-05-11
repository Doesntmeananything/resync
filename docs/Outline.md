# Outline

Answer these questions:

- Why? 
- What?
- How?

## Why?

A better way to build complex web applications is needed. What do we try to solve? Working with large amounts data in a simple manner.

Simple how? You don't specify some particular slices of data for each page, instead you work with a local cache and transform data on the client.

This means that the client is fully responsible for presenting data in a way that makes most sense to the end user.

Also, we don't have waterfall issues by requesting multiple endpoints for data, which can also potentially have dependencies between each other.

## What?

A client/server framework.

Client is responsible for fetching data in a big chunk, then transforming this data into the appropriate state for UI. 
It also syncs the changes from the server.

Server is responsible for providing initial bootstrap data and further updates. Essentially it acts as a sync engine.

## How?

Client provides the following:

- Data fetching
- Reactive data bindings
- Optimistic updates
- Browser cache (via IndexedDB)

Server provides the following:

- Data endpoints (bootstrap and mutations)
- Change detection system (depends on the data storage method)
- Conflict resolution system (last-write wins?)
- Data sync (which client needs which data slices)

