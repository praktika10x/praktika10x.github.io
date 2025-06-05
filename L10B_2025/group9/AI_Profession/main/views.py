from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')
def NLP(request):
    return render(request, 'main/page1.html')
def CV(request):
    return render(request, 'main/page2.html')
def DL(request):
    return render(request, 'main/page3.html')
def AR(request):
    return render(request, 'main/page4.html')
