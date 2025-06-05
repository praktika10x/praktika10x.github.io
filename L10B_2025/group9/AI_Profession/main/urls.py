from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('page1/', views.index, name='NLP'),
    path('page1/', views.index, name='CV'),
    path('page1/', views.index, name='DL'),
    path('page1/', views.index, name='AR'),
]