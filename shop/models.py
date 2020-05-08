from django.db import models

# Create your models here.
class shopDetails(models.Model):
    class Meta:
            verbose_name_plural = 'shopDetails'
            
    userId = models.AutoField(primary_key=True)
    name = models.CharField(max_length = 30)
    shopName = models.CharField(max_length = 20)
    status = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name