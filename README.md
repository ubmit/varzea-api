# Instructions

First of all you should setup the PostgreSQL database:

*Don't forget to start up your PostgreSQL before executing the following commands*

```
rake db:create
rake db:migrate
rake db:seed
```

Now you are probably fine to run the Rails server. However, you should run at port 4000!
Simply because the React's proxy is pointing torwards this port.

`rails s -p 4000`

Since I haven't setup something to start up the server and the client concurrently, you will need to start up the client manually,

```
cd client
yarn start
```
