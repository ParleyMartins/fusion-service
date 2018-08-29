from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField


class Person(models.Model):
    firstname = models.CharField(max_length=120, blank=False)
    lastname = models.CharField(max_length=120, blank=False)
    birth_date = models.DateField()
    phones = ArrayField(models.CharField(max_length=15))
    emails = ArrayField(models.EmailField())
    addresses = JSONField(default=list)
