from rest_framework import routers

from .views import leadViewSet

router = routers.DefaultRouter()
router.register('api/leads', leadViewSet, 'leads'),
urlpatterns = router.urls
