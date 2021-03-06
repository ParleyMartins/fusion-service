# Generated by Django 2.1 on 2018-08-25 21:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20180825_2019'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='address',
            name='persons',
        ),
        migrations.RemoveField(
            model_name='email',
            name='persons',
        ),
        migrations.RemoveField(
            model_name='phone',
            name='persons',
        ),
        migrations.AddField(
            model_name='address',
            name='person',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='addresses', to='api.Person'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='email',
            name='person',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='emails', to='api.Person'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='phone',
            name='person',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='phones', to='api.Person'),
            preserve_default=False,
        ),
    ]
