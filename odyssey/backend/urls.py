from django.urls import path
from .views import *

urlpatterns = [
  path('', index),
  path('get_tags/', get_tags),
  path('get_countries/', get_countries),
  path('get_workplaces/', get_workplace),
  path('get_feedback', get_feedback),
  path('get_payscale', get_payscale),
  path('get_user_details', get_user_details),
]
