from django.urls import path
from . views import FrontendView

urlpatterns = [
    path('', FrontendView, name='frontend')
]
