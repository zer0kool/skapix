# skapix


# Recomendations: install thisn on a virtal enviroment
$ sudo pip install virtualenv

## To make an enviroment using your current python version
$ virtualenv skapixENV

## To use eanother version of python, where X.X is the version, must be 3.6 and above
$ virtualenv -p /usr/bin/pythonX.X



# Issues: from django.contrib.admin import helpers, widgets
Known issues on with python3.7, just update django to the lates version 
$ pip install -U Django


# Error: b'You need to install postgresql-server-dev-NN for building a server-side extension or libpq-dev for building a client-side application.\n
Runing on a virtualenv, you need this. 
$ pip install psycopg2


Then, you need to install this. 
$ sudo apt-get install postgresql
$ sudo apt-get install python-psycopg2
$ sudo apt-get install libpq-dev
