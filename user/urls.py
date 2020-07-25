from django.urls import path, include
from knox import views as knox_views
from .views import registerApiView, loginApiView, UserApiView

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', registerApiView.as_view()),
    path('api/auth/user', UserApiView.as_view()),
    path('api/auth/login', loginApiView.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
