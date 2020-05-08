from django.shortcuts import render,redirect
from rest_framework import viewsets          # add this
from rest_framework.response import Response
from .serializers import shopSerializer    # add this
from .models import shopDetails  
from django.views.decorators.csrf import csrf_exempt  
from django.http import HttpResponse, JsonResponse          # add this
from rest_framework.permissions import AllowAny
# from django.utils.decorators import method_decorator
import datetime
from rest_framework.parsers import JSONParser   





class shopView(viewsets.ModelViewSet,AllowAny):       # add this
    permission_classes = (AllowAny,)
    serializer_class = shopSerializer          # add this
    queryset = shopDetails.objects.all() 

