from django.http import HttpResponse, request
from django.shortcuts import render
from django.template.loader import render_to_string


def index():
    return render(request, 'main/index.html')
