from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('page1/', include('main.urls')),
    path('page2/', include('main.urls')),
    path('page3/', include('main.urls')),
    path('page4/', include('main.urls')),
]