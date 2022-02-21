from django.urls import path
from . import views


urlpatterns = [
    path('feed/', views.feed, name='feed'),
    path('startpage/', views.startpage, name='startpage'),
    path('clawmachine/', views.clawmachine, name='clawmachine'),
    path('sell/', views.sell, name='sell'),
    path('profile/', views.profile, name='profile'),
    path('shoppingcart/', views.shoppingcart, name='shoppingcart'),
]
