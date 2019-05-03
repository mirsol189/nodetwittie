nodetwittie
===========
Spirent 2019 International Internship Program 2nd round screening process

Getting Ready
-------------
### Installing and Running MySQL
If your system does not have MySQL, enter:
```
$ sudo apt-get update
$ sudo apt-get install -y mysql-server
```
If you're asked to enter password for root, please enter 'mirsolpw'. It is hardcoded in this project.

If your system already has MySQL, enter:
```
$ sudo service mysql start
```
to start up your MySQL server.

Running nodetwittie Server
--------------------------
After cloning this repository, change directory to nodetwittie directory.
```
$ cd nodetwittie
```
To run nodetwittie server, enter:
```
$ npm start
```
If the server loads successfully, you can access to nodetwittie service by entering
```
localhost:9284
```
to your browser.