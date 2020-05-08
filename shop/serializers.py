from rest_framework import serializers
from .models import shopDetails

class shopSerializer(serializers.ModelSerializer):
    class Meta:
        model = shopDetails
        fields = ('userId','name','shopName','status','date') 
