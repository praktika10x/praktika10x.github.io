from urllib import request

from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')
def index(NLP):
    return render(request, 'main/page1.html')
def index(CV):
    return render(request, 'main/page2.html')
def index(DL):
    return render(request, 'main/page3.html')
def index(AR):
    return render(request, 'main/page4.html')
