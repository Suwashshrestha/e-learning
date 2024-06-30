
from django.contrib import admin
from django.urls import path,include
from myapp.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("myapp/user/register/", CreateUserView.as_view(), name="register"),
    path('myapp/token/', TokenObtainPairView.as_view(), name='get_token'),
    path('myapp/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('myapp-auth/', include('rest_framework.urls')),
    path('myapp/', include("myapp.urls"))
]
