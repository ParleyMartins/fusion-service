# Generated by Django 2.1 on 2018-08-25 22:27

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20180825_2108'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='email',
            name='person',
        ),
        migrations.RemoveField(
            model_name='phone',
            name='person',
        ),
        migrations.AddField(
            model_name='person',
            name='emails',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=120), default=list, size=None),
        ),
        migrations.AddField(
            model_name='person',
            name='phones',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=15), default=list, size=None),
        ),
        migrations.DeleteModel(
            name='Email',
        ),
        migrations.DeleteModel(
            name='Phone',
        ),
    ]
