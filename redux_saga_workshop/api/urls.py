from django.conf.urls import url, include
from rest_framework import routers


router = routers.DefaultRouter(trailing_slash=True)

urlpatterns = [
    url(r'', include(router.urls)),
]
