# Generated by Django 2.2.8 on 2020-05-08 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20200506_1558'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shopdetails',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
