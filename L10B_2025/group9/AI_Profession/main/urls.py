from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('page1/', views.NLP, name='NLP'),
    path('page2/', views.CV, name='CV'),
    path('page3/', views.DL, name='DL'),
    path('page4/', views.AR, name='AR'),
]