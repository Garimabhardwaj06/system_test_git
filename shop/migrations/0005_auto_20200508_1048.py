# Generated by Django 2.2.8 on 2020-05-08 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_auto_20200508_1039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shopdetails',
            name='name',
            field=models.CharField(max_length=30),
        ),
    ]