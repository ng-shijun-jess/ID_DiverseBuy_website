from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

# Create your views here.


def feed(request):
    return render(request, 'users/feed.html')


def startpage(request):
    return render(request, 'users/startpage.html')


def shoppingcart(request):
    return render(request, 'users/shoppingcart.html')


def sell(request):
    return render(request, 'users/sell.html')


def clawmachine(request):
    return render(request, 'users/clawmachine.html')


def profile(request):
    return render(request, 'users/profile.html')
