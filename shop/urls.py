from django.contrib import admin
from django.urls import path,include
from shop import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('shopDetail', views.shopView, name='shopView'),
]