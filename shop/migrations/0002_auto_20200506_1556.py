# Generated by Django 2.2.8 on 2020-05-06 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shopdetails',
            name='id',
        ),
        migrations.AddField(
            model_name='shopdetails',
            name='userId',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]