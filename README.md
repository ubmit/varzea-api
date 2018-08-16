# Instructions

First of all you should setup the PostgreSQL database:

*Don't forget to start up your PostgreSQL before executing the following commands*

```
rake db:create
rake db:migrate
rake db:seed
```

You should run the Rails server at port 3000, so the standard `rails s` will work.

Since I haven't setup something to start up the server and the client concurrently, you will need to start up the client manually:

```
cd client

react-native run-android
# or
react-native run-ios
```
