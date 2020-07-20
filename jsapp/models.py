
#from django.contrib.auth.models import AbstractUser
#from django.contrib.auth.models import User
from django.db import models

class User(models.Model):
	is_authenticated = True
	username = models.CharField(max_length=20)
	password = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	sign_up_date = models.DateTimeField(auto_now=True)
	last_login = models.DateTimeField(auto_now=True)
	profilepic = models.CharField(max_length=255, default="")
    
def __str__(self):
    return self.username